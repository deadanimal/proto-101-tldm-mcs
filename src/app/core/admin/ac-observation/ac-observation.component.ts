import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { Audit } from "src/assets/mock/admin-audit/audit.model";
import { MocksService } from "src/app/shared/services/mocks/mocks.service";
// import { AuditData } from 'src/assets/mock/admin-audit/audit.data.json'
import * as moment from "moment";

// amchart
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

//
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import swal from "sweetalert2";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MapService } from "src/app/shared/services/map/map.service";
import * as mapboxgl from "mapbox-gl";
import * as MapboxDraw from "@mapbox/mapbox-gl-draw";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-ac-observation",
  templateUrl: "./ac-observation.component.html",
  styleUrls: ["./ac-observation.component.scss"],
})
export class AcObservationComponent implements OnInit, OnDestroy {
  // Chart
  chart: any;

  // Datepicker
  bsDPConfig = {
    isAnimated: true,
    containerClass: "theme-default",
  };

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: Audit[] = [];
  SelectionType = SelectionType;
  listBillStatement: any = [
    {
      cust: "Consumer",
      cust_code: "Cusumer 10",
      bill_sce: "1st Billing",
      pro_serv: "unifi",
      season: "Hari Raya",
      created: "Ali",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      cust: "SME",
      cust_code: "SME 20",
      bill_sce: "2nd Billing",
      pro_serv: "voice",
      season: "Hari Raya",
      created: "Jannah",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      cust: "TMOne",
      cust_code: "TMOne 30",
      bill_sce: "2nd Billing",
      pro_serv: "unifi",
      season: "Hari Raya",
      created: "Yaya",
      created_at: "2019-07-27T01:07:14Z",
    },
  ];

  @ViewChild("mapEl", { static: true })
  mapEl: ElementRef<HTMLDivElement>;

  // private map: Map;

  constructor(
    private mapSrv: MapService,
    private mockService: MocksService,
    private notifyService: NotifyService,
    private zone: NgZone,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private loadingBar: LoadingBarService,
    private router: Router,
    private _route: ActivatedRoute
  ) {
    // this.getData();
  }

  ngOnInit() {
    this.getCharts();
  }

  ngAfterViewInit(): void {
    var map2 = new mapboxgl.Map({
      container: "map2",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [101.579524, 3.095902],
      zoom: 13,
    });
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [101.579524, 3.095902],
      zoom: 13,
    });

    // map.addControl(
    //   new mapboxgl.NavigationControl({
    //     showZoom: true,
    //     showCompass: true,
    //     visualizePitch: true,
    //   }),
    //   "top-right"
    // );
    var draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
    });
    map.addControl(draw);

    map.on("draw.create", updateArea);
    map.on("draw.delete", updateArea);
    map.on("draw.update", updateArea);
    function updateArea(e) {
      var data = draw.getAll();
      var answer = document.getElementById("calculated-area");
      console.log("qewqe", data.features.length);
      if (data.features.length > 0) {
        var area = MapboxDraw.turf.area(data);
        console.log("asdsdasda", area);
        // restrict to area to 2 decimal points
        var rounded_area = Math.round(area * 100) / 100;
        console.log("zxczxcc", rounded_area);
        answer.innerHTML =
          "<p><strong>" + rounded_area + "</strong></p><p>square meters</p>";
      } else {
        answer.innerHTML = "";
        if (e.type !== "draw.delete")
          alert("Use the draw tools to draw a polygon!");
      }
    }
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  // getData() {
  //   this.mockService.getAll(this.listReceipt).subscribe(
  //     (res) => {
  //       // Success
  //       this.tableRows = [...res];
  //       this.tableTemp = this.tableRows.map((prop, key) => {
  //         return {
  //           ...prop,
  //           id: key,
  //         };
  //       });
  //       console.log("Svc: ", this.tableTemp);
  //     },
  //     () => {
  //       // Unsuccess
  //     },
  //     () => {
  //       // After
  //       this.getChart();
  //     }
  //   );
  // }

  openModal(modalRef: TemplateRef<any>, row) {
    // if (row) {
    //   console.log(row);
    //   this.editActionForm.patchValue(row);
    // }
    this.modal = this.modalService.show(
      modalRef,
      Object.assign({}, { class: "gray modal-lg" })
    );
    // this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
    // this.editActionForm.reset();
  }

  navigatePage(path: String, id) {
    // let qq = "db17a36a-1da6-4919-9746-dfed8802ec9d";
    console.log(id);
    console.log(path + "/" + id);
    if (path == "/admin//utility/Actions") {
      return this.router.navigate([path]);
    } else if (path == "/admin//utility/Action-detail") {
      return this.router.navigate([path, id]);
    }
  }

  successMessage() {
    let title = "Success";
    let message = "Create New Action";
    this.notifyService.openToastr(title, message);
  }

  successEditMessage() {
    let title = "Success";
    let message = "Edit Action";
    this.notifyService.openToastr(title, message);
  }

  errorAlert(task) {
    swal.fire({
      title: "Error",
      text: "Cannot " + task + " Action, Please Try Again!",
      type: "error",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-danger",
      confirmButtonText: "Close",
    });
  }

  successAlert(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task,
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }

  confirm() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure to delete data?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((task) => {
        // if (result.value) {
        this.successAlert("delete data");
        // }
      });
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
      // this.getChart2();
      this.getChart3();
    });
  }

  getChart1() {
    let chart = am4core.create("chartDivObservation1", am4charts.RadarChart);

    /* Add data */
    chart.data = [
      {
        country: "Lithuania",
        litres: 501,
      },
      {
        country: "Czechia",
        litres: 301,
      },
      {
        country: "Ireland",
        litres: 266,
      },
      {
        country: "Germany",
        litres: 165,
      },
      {
        country: "Australia",
        litres: 139,
      },
      {
        country: "Austria",
        litres: 336,
      },
      {
        country: "UK",
        litres: 290,
      },
      {
        country: "Belgium",
        litres: 325,
      },
      {
        country: "The Netherlands",
        litres: 40,
      },
    ];

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any);
    categoryAxis.dataFields.category = "country";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
    valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
    valueAxis.renderer.axisFills.template.fillOpacity = 0.05;

    /* Create and configure series */
    let series = chart.series.push(new am4charts.RadarSeries());
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "Sales";
    series.strokeWidth = 3;
  }

  getChart3() {
    let chart = am4core.create("chartDivObservation3", am4charts.XYChart);

    // Add data
    chart.data = generateChartData();

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.dateX = "date";
    series.strokeWidth = 1;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    series.fillOpacity = 0.1;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12, 12, 12, 12);

    let seriesRange = dateAxis.createSeriesRange(series);
    seriesRange.contents.strokeDasharray = "2,3";
    seriesRange.contents.stroke = chart.colors.getIndex(8);
    seriesRange.contents.strokeWidth = 1;

    let pattern = new am4core.LinePattern();
    pattern.rotation = -45;
    pattern.stroke = seriesRange.contents.stroke;
    pattern.width = 1000;
    pattern.height = 1000;
    pattern.gap = 6;
    seriesRange.contents.fill = pattern;
    seriesRange.contents.fillOpacity = 0.5;

    // Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    function generateChartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 200);
      let visits = 1200;
      for (var i = 0; i < 200; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round(
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );

        chartData.push({
          date: newDate,
          visits: visits,
        });
      }
      return chartData;
    }

    // add range
    let range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
    range.grid.stroke = chart.colors.getIndex(0);
    range.grid.strokeOpacity = 1;
    range.bullet = new am4core.ResizeButton();
    // range.bullet.background.fill = chart.colors.getIndex(0);
    // range.bullet.background.states.copyFrom(
    //   chart.zoomOutButton.background.states
    // );
    range.bullet.minX = 0;
    range.bullet.adapter.add("minY", function (minY, target) {
      target.maxY = chart.plotContainer.maxHeight;
      target.maxX = chart.plotContainer.maxWidth;
      return chart.plotContainer.maxHeight;
    });

    range.bullet.events.on("dragged", function () {
      range.value = dateAxis.xToValue(range.bullet.pixelX);
      seriesRange.value = range.value;
    });

    let firstTime = chart.data[0].date.getTime();
    let lastTime = chart.data[chart.data.length - 1].date.getTime();
    let date = new Date(firstTime + (lastTime - firstTime) / 2);

    range.date = date;

    seriesRange.date = date;
    seriesRange.endDate = chart.data[chart.data.length - 1].date;
  }

  // getChart2() {
  //   let chart = am4core.create("chartDivObservation2", am4charts.RadarChart);

  //   chart.data = [
  //     {
  //       name: "Openlane",
  //       value1: 560.2,
  //       value2: 126.9,
  //     },
  //     {
  //       name: "Yearin",
  //       value1: 170.1,
  //       value2: 90.5,
  //     },
  //     {
  //       name: "Goodsilron",
  //       value1: 120.7,
  //       value2: 32.3,
  //     },
  //     {
  //       name: "Condax",
  //       value1: 89.4,
  //       value2: 124.5,
  //     },
  //     {
  //       name: "Opentech",
  //       value1: 78.5,
  //       value2: 29.7,
  //     },
  //     {
  //       name: "Golddex",
  //       value1: 77.6,
  //       value2: 162.2,
  //     },
  //     {
  //       name: "Isdom",
  //       value1: 69.8,
  //       value2: 22.6,
  //     },
  //     {
  //       name: "Plusstrip",
  //       value1: 63.6,
  //       value2: 45.3,
  //     },
  //     {
  //       name: "Kinnamplus",
  //       value1: 59.7,
  //       value2: 12.8,
  //     },
  //     {
  //       name: "Zumgoity",
  //       value1: 54.3,
  //       value2: 19.6,
  //     },
  //     {
  //       name: "Stanredtax",
  //       value1: 52.9,
  //       value2: 96.3,
  //     },
  //     {
  //       name: "Conecom",
  //       value1: 42.9,
  //       value2: 11.9,
  //     },
  //     {
  //       name: "Zencorporation",
  //       value1: 40.9,
  //       value2: 16.8,
  //     },
  //     {
  //       name: "Iselectrics",
  //       value1: 39.2,
  //       value2: 9.9,
  //     },
  //     {
  //       name: "Treequote",
  //       value1: 36.6,
  //       value2: 36.9,
  //     },
  //     {
  //       name: "Sumace",
  //       value1: 34.8,
  //       value2: 14.6,
  //     },
  //     {
  //       name: "Lexiqvolax",
  //       value1: 32.1,
  //       value2: 35.6,
  //     },
  //     {
  //       name: "Sunnamplex",
  //       value1: 31.8,
  //       value2: 5.9,
  //     },
  //     {
  //       name: "Faxquote",
  //       value1: 29.3,
  //       value2: 14.7,
  //     },
  //     {
  //       name: "Donware",
  //       value1: 23.0,
  //       value2: 2.8,
  //     },
  //     {
  //       name: "Warephase",
  //       value1: 21.5,
  //       value2: 12.1,
  //     },
  //     {
  //       name: "Donquadtech",
  //       value1: 19.7,
  //       value2: 10.8,
  //     },
  //     {
  //       name: "Nam-zim",
  //       value1: 15.5,
  //       value2: 4.1,
  //     },
  //     {
  //       name: "Y-corporation",
  //       value1: 14.2,
  //       value2: 11.3,
  //     },
  //   ];

  //   chart.padding(0, 0, 0, 0);
  //   chart.radarContainer.dy = 50;
  //   chart.innerRadius = am4core.percent(50);
  //   chart.radius = am4core.percent(100);
  //   chart.zoomOutButton.padding(20, 20, 20, 20);
  //   chart.zoomOutButton.margin(20, 20, 20, 20);
  //   chart.zoomOutButton.background.cornerRadius(40, 40, 40, 40);
  //   chart.zoomOutButton.valign = "bottom";

  //   let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any);
  //   categoryAxis.dataFields.category = "name";
  //   categoryAxis.renderer.labels.template.location = 0.5;
  //   categoryAxis.mouseEnabled = false;

  //   let categoryAxisRenderer = categoryAxis.renderer;
  //   categoryAxisRenderer.cellStartLocation = 0;
  //   categoryAxisRenderer.tooltipLocation = 0.5;
  //   categoryAxisRenderer.grid.template.disabled = true;
  //   categoryAxisRenderer.ticks.template.disabled = true;

  //   categoryAxisRenderer.axisFills.template.fill = am4core.color("#e8e8e8");
  //   categoryAxisRenderer.axisFills.template.fillOpacity = 0.2;
  //   categoryAxisRenderer.axisFills.template.location = -0.5;
  //   categoryAxisRenderer.line.disabled = true;
  //   categoryAxisRenderer.tooltip.disabled = true;
  //   categoryAxis.renderer.labels.template.disabled = true;

  //   categoryAxis.adapter.add("maxZoomFactor", function (maxZoomFactor, target) {
  //     return target.dataItems.length / 5;
  //   });

  //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);

  //   let valueAxisRenderer = valueAxis.renderer;

  //   valueAxisRenderer.line.disabled = true;
  //   valueAxisRenderer.grid.template.disabled = true;
  //   valueAxisRenderer.ticks.template.disabled = true;
  //   valueAxis.min = 0;
  //   valueAxis.renderer.tooltip.disabled = true;

  //   let series1 = chart.series.push(new am4charts.RadarSeries());
  //   series1.name = "CASH HELD OUTSIDE THE U.S.";
  //   series1.dataFields.categoryX = "name";
  //   series1.dataFields.valueY = "value1";
  //   series1.stacked = true;
  //   series1.fillOpacity = 0.5;
  //   series1.fill = chart.colors.getIndex(0);
  //   series1.strokeOpacity = 0;
  //   series1.dataItems.template.locations.categoryX = 0.5;
  //   series1.sequencedInterpolation = true;
  //   series1.sequencedInterpolationDelay = 50;

  //   let series2 = chart.series.push(new am4charts.RadarSeries());
  //   series2.name = "TOTAL CASH PILE";
  //   series2.dataFields.categoryX = "name";
  //   series2.dataFields.valueY = "value2";
  //   series2.stacked = true;
  //   series2.fillOpacity = 0.5;
  //   series2.fill = chart.colors.getIndex(1);
  //   series2.stacked = true;
  //   series2.strokeOpacity = 0;
  //   series2.dataItems.template.locations.categoryX = 0.5;
  //   series2.sequencedInterpolation = true;
  //   series2.sequencedInterpolationDelay = 50;
  //   series2.tooltipText =
  //     "[bold]{categoryX}[/]\nTotal: ${valueY.total} \nOverseas: ${value1}";
  //   series2.tooltip.pointerOrientation = "vertical";
  //   series2.tooltip.label.fill = am4core.color("#ffffff");
  //   series2.tooltip.label.fontSize = "0.8em";
  //   series2.tooltip.autoTextColor = false;

  //   chart.seriesContainer.zIndex = -1;
  //   chart.scrollbarX = new am4core.Scrollbar();
  //   chart.scrollbarX.parent = chart.bottomAxesContainer;
  //   chart.scrollbarX.exportable = false;
  //   chart.scrollbarY = new am4core.Scrollbar();
  //   chart.scrollbarY.exportable = false;

  //   chart.padding(0, 0, 0, 0);

  //   chart.scrollbarY.padding(20, 0, 20, 0);
  //   chart.scrollbarX.padding(0, 20, 0, 80);

  //   chart.scrollbarY.background.padding(20, 0, 20, 0);
  //   chart.scrollbarX.background.padding(0, 20, 0, 80);

  //   chart.cursor = new am4charts.RadarCursor();
  //   chart.cursor.lineX.strokeOpacity = 1;
  //   chart.cursor.lineY.strokeOpacity = 0;
  //   chart.cursor.lineX.stroke = chart.colors.getIndex(1);
  //   chart.cursor.innerRadius = am4core.percent(30);
  //   chart.cursor.radius = am4core.percent(50);
  //   chart.cursor.selection.fill = chart.colors.getIndex(1);

  //   let bullet = series2.bullets.create();
  //   bullet.fill = am4core.color("#000000");
  //   bullet.strokeOpacity = 0;
  //   bullet.locationX = 0.5;

  //   let line = bullet.createChild(am4core.Line);
  //   line.x2 = -100;
  //   line.x1 = 0;
  //   line.y1 = 0;
  //   line.y1 = 0;
  //   line.strokeOpacity = 1;

  //   line.stroke = am4core.color("#000000");
  //   line.strokeDasharray = "2,3";
  //   line.strokeOpacity = 0.4;

  //   let bulletValueLabel = bullet.createChild(am4core.Label);
  //   bulletValueLabel.text = "{valueY.total.formatNumber('$#.0')}";
  //   bulletValueLabel.verticalCenter = "middle";
  //   bulletValueLabel.horizontalCenter = "right";
  //   bulletValueLabel.dy = -3;

  //   let label = bullet.createChild(am4core.Label);
  //   label.text = "{categoryX}";
  //   label.verticalCenter = "middle";
  //   label.paddingLeft = 20;

  //   valueAxis.calculateTotals = true;

  //   chart.legend = new am4charts.Legend();
  //   chart.legend.parent = chart.radarContainer;
  //   chart.legend.width = 110;
  //   chart.legend.horizontalCenter = "middle";
  //   chart.legend.markers.template.width = 22;
  //   chart.legend.markers.template.height = 18;
  //   chart.legend.markers.template.dy = 2;
  //   chart.legend.labels.template.fontSize = "0.7em";
  //   chart.legend.dy = 20;
  //   chart.legend.dx = -9;

  //   chart.legend.itemContainers.template.cursorOverStyle =
  //     am4core.MouseCursorStyle.pointer;
  //   let itemHoverState = chart.legend.itemContainers.template.states.create(
  //     "hover"
  //   );
  //   itemHoverState.properties.dx = 5;

  //   let title = chart.radarContainer.createChild(am4core.Label);
  //   title.text = "COMPANIES WITH\nTHE MOST CASH\nHELD OVERSEAS";
  //   title.fontSize = "1.2em";
  //   title.verticalCenter = "bottom";
  //   title.textAlign = "middle";
  //   title.horizontalCenter = "middle";
  //   title.fontWeigth = "800";

  //   chart.maskBullets = false;

  //   let circle = bullet.createChild(am4core.Circle);
  //   circle.radius = 2;
  //   let hoverState = circle.states.create("hover");

  //   hoverState.properties.scale = 5;

  //   bullet.events.on("positionchanged", function (event) {
  //     event.target.children.getIndex(0).invalidate();
  //     event.target.children.getIndex(1).invalidatePosition();
  //   });

  //   bullet.adapter.add("dx", function (dx, target) {
  //     let angle = categoryAxis.getAngle(target.dataItem, "categoryX", 0.5);
  //     return 20 * am4core.math.cos(angle);
  //   });

  //   bullet.adapter.add("dy", function (dy, target) {
  //     let angle = categoryAxis.getAngle(target.dataItem, "categoryX", 0.5);
  //     return 20 * am4core.math.sin(angle);
  //   });

  //   bullet.adapter.add("rotation", function (dy, target) {
  //     let angle = Math.min(
  //       chart.endAngle,
  //       Math.max(
  //         chart.startAngle,
  //         categoryAxis.getAngle(target.dataItem, "categoryX", 0.5)
  //       )
  //     );
  //     return angle;
  //   });

  //   line.adapter.add("x2", function (x2, target) {
  //     let dataItem = target.dataItem;
  //     if (dataItem) {
  //       let position = valueAxis.valueToPosition(
  //         dataItem.values.valueY.value + dataItem.values.valueY.stack
  //       );
  //       return -(position * valueAxis.axisFullLength + 35);
  //     }
  //     return 0;
  //   });

  //   bulletValueLabel.adapter.add("dx", function (dx, target) {
  //     let dataItem = target.dataItem;

  //     if (dataItem) {
  //       let position = valueAxis.valueToPosition(
  //         dataItem.values.valueY.value + dataItem.values.valueY.stack
  //       );
  //       return -(position * valueAxis.axisFullLength + 40);
  //     }
  //     return 0;
  //   });

  //   chart.seriesContainer.zIndex = 10;
  //   categoryAxis.zIndex = 11;
  //   valueAxis.zIndex = 12;

  //   chart.radarContainer.zIndex = 20;

  //   let previousBullets = [];
  //   series2.events.on("tooltipshownat", function (event) {
  //     let dataItem = event.dataItem;

  //     for (let i = 0; i < previousBullets.length; i++) {
  //       previousBullets[i].isHover = false;
  //     }

  //     previousBullets = [];

  //     let itemBullet = dataItem.bullets.getKey(bullet.uid);

  //     for (let i = 0; i < itemBullet.children.length; i++) {
  //       let sprite = itemBullet.children.getIndex(i);
  //       sprite.isHover = true;
  //       previousBullets.push(sprite);
  //     }
  //   });

  //   series2.tooltip.events.on("visibilitychanged", function () {
  //     if (!series2.tooltip.visible) {
  //       for (let i = 0; i < previousBullets.length; i++) {
  //         previousBullets[i].isHover = false;
  //       }
  //     }
  //   });

  //   chart.events.on("maxsizechanged", function () {
  //     if (chart.pixelInnerRadius < 200) {
  //       title.disabled = true;
  //       chart.legend.verticalCenter = "middle";
  //       chart.legend.dy = 0;
  //     } else {
  //       title.disabled = false;
  //       chart.legend.verticalCenter = "top";
  //       chart.legend.dy = 20;
  //     }
  //   });
  // }
}
