import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
} from "@angular/core";
import { Audit } from "src/assets/mock/admin-audit/audit.model";
import { MocksService } from "src/app/shared/services/mocks/mocks.service";
// import { AuditData } from 'src/assets/mock/admin-audit/audit.data.json'
import * as moment from "moment";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

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
import { tileLayer, latLng, marker, icon } from "leaflet";
import { BsDropdownConfig } from "ngx-bootstrap/dropdown";
import "leaflet/dist/images/marker-shadow.png";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-ac-forecasts",
  templateUrl: "./ac-forecasts.component.html",
  styleUrls: ["./ac-forecasts.component.scss"],
})
export class AcForecastsComponent implements OnInit, OnDestroy {
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
  listPenguatkuasa: any = [
    {
      type: "SMS",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      type: "Email",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      type: "Printed",
      created_at: "2019-07-27T01:07:14Z",
    },
  ];
  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "...",
      }),
    ],
    zoom: 9,
    center: latLng(3.056471, 102.197916),
  };
  layers = [
    // circle([ 46.95, -122 ], { radius: 5000 }),
    // polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([3.294082, 101.561358], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/common/rain.svg",
      }),
    }),
    // circle([ 46.95, -122 ], { radius: 5000 }),
    // polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([3.000545, 101.583062], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/common/rain.svg",
      }),
    }),
    marker([3.038944, 101.523971], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/common/rain.svg",
      }),
    }),
    marker([2.989274, 102.316098], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/common/sunny.svg",
      }),
    }),
    marker([3.040963, 102.819345], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/common/sunny.svg",
      }),
    }),
  ];

  constructor(
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
      this.getChart12();
      this.getChart13();
      // this.getChart2();
      // this.getChart3();
      // this.getChart4();
      // this.getChart5();
      // this.getChart6();
    });
  }

  getChart() {
    //chart nate susoh
    let container = am4core.create("chartForecast", am4core.Container);
    container.layout = "grid";
    container.fixedWidthGrid = false;
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);

    // Color set
    let colors = new am4core.ColorSet();

    // Functions that create various sparklines
    function createLine(title, data, color) {
      let chart = container.createChild(am4charts.XYChart);
      chart.width = am4core.percent(45);
      chart.height = 70;

      chart.data = data;

      chart.titles.template.fontSize = 10;
      chart.titles.template.textAlign = "start";
      chart.titles.template.isMeasured = false;
      chart.titles.create().text = title;

      chart.padding(20, 5, 2, 5);

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.labels.template.disabled = true;
      dateAxis.startLocation = 0.5;
      dateAxis.endLocation = 0.7;
      dateAxis.cursorTooltipEnabled = false;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.baseGrid.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.cursorTooltipEnabled = false;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineY.disabled = true;
      chart.cursor.behavior = "none";

      let series = chart.series.push(new am4charts.LineSeries());
      series.tooltipText = "{date}: [bold]{value}";
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.tensionX = 0.8;
      series.strokeWidth = 2;
      series.stroke = color;

      // render data points as bullets
      let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.opacity = 0;
      bullet.circle.fill = color;
      bullet.circle.propertyFields.opacity = "opacity";
      bullet.circle.radius = 3;

      return chart;
    }

    function createColumn(title, data, color) {
      let chart = container.createChild(am4charts.XYChart);
      chart.width = am4core.percent(45);
      chart.height = 70;

      chart.data = data;

      chart.titles.template.fontSize = 10;
      chart.titles.template.textAlign = "start";
      chart.titles.template.isMeasured = false;
      chart.titles.create().text = title;

      chart.padding(20, 5, 2, 5);

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.labels.template.disabled = true;
      dateAxis.cursorTooltipEnabled = false;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.baseGrid.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.cursorTooltipEnabled = false;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineY.disabled = true;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.tooltipText = "{date}: [bold]{value}";
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.strokeWidth = 0;
      series.fillOpacity = 0.5;
      series.columns.template.propertyFields.fillOpacity = "opacity";
      series.columns.template.fill = color;

      return chart;
    }

    function createPie(data, color) {
      let chart = container.createChild(am4charts.PieChart);
      chart.width = am4core.percent(10);
      chart.height = 70;
      chart.padding(20, 0, 2, 0);

      chart.data = data;

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "category";
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      pieSeries.slices.template.fill = color;
      pieSeries.slices.template.adapter.add("fill", function (
        fill: any,
        target
      ) {
        return fill.lighten(0.1 * target.dataItem.index);
      });
      pieSeries.slices.template.stroke = am4core.color("#fff");

      // chart.chartContainer.minHeight = 40;
      // chart.chartContainer.minWidth = 40;

      return chart;
    }

    createLine(
      "(Price)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 57 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 27 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 24 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 59 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 33 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 46 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 42 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 59, opacity: 1 },
      ],
      colors.getIndex(0)
    );

    createColumn(
      "(Turnover)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 22 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 40 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 35 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 1 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 15 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 33, opacity: 1 },
      ],
      colors.getIndex(0)
    );

    createPie(
      [
        { category: "Marketing", value: 501 },
        { category: "Research", value: 301 },
        { category: "Sales", value: 201 },
        { category: "HR", value: 165 },
      ],
      colors.getIndex(0)
    );

    createLine(
      "(Price)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 22 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 40 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 35 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 1 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 15 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 33, opacity: 1 },
      ],
      colors.getIndex(1)
    );

    createColumn(
      "(Turnover)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 57 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 27 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 24 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 59 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 33 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 46 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 42 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 59, opacity: 1 },
      ],
      colors.getIndex(1)
    );

    createPie(
      [
        { category: "Data 1", value: 130 },
        { category: "Data 2", value: 450 },
        { category: "Data 3", value: 400 },
        { category: "Data 4", value: 200 },
      ],
      colors.getIndex(1)
    );

    createLine(
      "(Price)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 16 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 62 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 55 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 34 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 28 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 32 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 30, opacity: 1 },
      ],
      colors.getIndex(2)
    );

    createColumn(
      "(Turnover)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 50 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 51 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 62 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 60 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 70 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 42 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 33, opacity: 1 },
      ],
      colors.getIndex(2)
    );

    createPie(
      [
        { category: "Data 1", value: 220 },
        { category: "Data 2", value: 200 },
        { category: "Data 3", value: 150 },
        { category: "Data 4", value: 125 },
      ],
      colors.getIndex(2)
    );

    // FB

    createLine(
      "(Price)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 52 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 55 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 35 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 34 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 39 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 42 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 22 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 15, opacity: 1 },
      ],
      colors.getIndex(3)
    );

    createColumn(
      "(Turnover)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 26 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 27 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 32 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 30, opacity: 1 },
      ],
      colors.getIndex(3)
    );

    createPie(
      [
        { category: "Data 1", value: 120 },
        { category: "Data 2", value: 150 },
        { category: "Data 3", value: 125 },
        { category: "Data 4", value: 250 },
      ],
      colors.getIndex(3)
    );

    this.chart = container;
  }

  getChart1() {
    // chart half circle
    let chart = am4core.create("chartForecast1", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        item: "Lights",
        value: 40,
      },
      {
        item: "Fridge",
        value: 30,
      },
      {
        item: "TV",
        value: 20,
      },
      {
        item: "Washing Machine",
        value: 16,
      },
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "item";
    series.ticks.template.disabled = true;
    series.labels.template.disabled = true;

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    //chart.legend = new am4charts.Legend();
  }

  getChart2() {
    // chart ada gambo org
    let chart = am4core.create("chartForecast2", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        name: "John",
        points: 35654,
        color: chart.colors.next(),
        bullet: "https://www.amcharts.com/lib/images/faces/A04.png",
      },
      {
        name: "Damon",
        points: 65456,
        color: chart.colors.next(),
        bullet: "https://www.amcharts.com/lib/images/faces/C02.png",
      },
      {
        name: "Patrick",
        points: 45724,
        color: chart.colors.next(),
        bullet: "https://www.amcharts.com/lib/images/faces/D02.png",
      },
      {
        name: "Mark",
        points: 13654,
        color: chart.colors.next(),
        bullet: "https://www.amcharts.com/lib/images/faces/E01.png",
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
    categoryAxis.renderer.labels.template.fontSize = 20;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeDasharray = "4,4";
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;

    // Do not crop bullets
    chart.maskBullets = false;

    // Remove padding
    chart.paddingBottom = 0;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "points";
    series.dataFields.categoryX = "name";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.column.cornerRadiusTopLeft = 15;
    series.columns.template.column.cornerRadiusTopRight = 15;
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";

    // Add bullets
    let bullet = series.bullets.push(new am4charts.Bullet());
    let image = bullet.createChild(am4core.Image);
    image.horizontalCenter = "middle";
    image.verticalCenter = "bottom";
    image.dy = 20;
    image.y = am4core.percent(100);
    image.propertyFields.href = "bullet";
    image.tooltipText = series.columns.template.tooltipText;
    image.propertyFields.fill = "color";
    image.filters.push(new am4core.DropShadowFilter());
  }

  getChart3() {
    // chatt petak warna warni
    let chart = am4core.create("chartForecast3", am4charts.XYChart);
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "Jan",
        visits: 3025,
      },
      {
        country: "Feb",
        visits: 1882,
      },
      {
        country: "Mar",
        visits: 1809,
      },
      {
        country: "Apr",
        visits: 1322,
      },
      {
        country: "May",
        visits: 1122,
      },
      {
        country: "Jun",
        visits: 1114,
      },
      {
        country: "July",
        visits: 984,
      },
      {
        country: "Aug",
        visits: 711,
      },
      {
        country: "Sep",
        visits: 665,
      },
      {
        country: "Oct",
        visits: 580,
      },
      {
        country: "Nov",
        visits: 443,
      },
      {
        country: "Dec",
        visits: 441,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    // categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    // this.chart2 = chart;
  }

  getChart4() {
    // chart 2 line
    // let chart = am4core.create("chartReceipt", am4charts.XYChart);
    let chart = am4core.create("chartForecast4", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        month: "Jan",
        active: 1,
        inactive: 5,
      },
      {
        month: "Feb",
        active: 3,
        inactive: 2,
      },
      {
        month: "Mar",
        active: 5,
        inactive: 4,
      },
      {
        month: "Apr",
        active: 3,
        inactive: 3,
      },
      {
        month: "May",
        active: 6,
        inactive: 5,
      },
      {
        month: "Jun",
        active: 2,
        inactive: 4,
      },
      {
        month: "Jul",
        active: 4,
        inactive: 3,
      },
      {
        month: "Aug",
        active: 6,
        inactive: 5,
      },
      {
        month: "Sep",
        active: 5,
        inactive: 4,
      },
      {
        month: "Oct",
        active: 5,
        inactive: 5,
      },
      {
        month: "Nov",
        active: 4,
        inactive: 5,
      },
      {
        month: "Dec",
        active: 5,
        inactive: 6,
      },
    ];
    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";

    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;
    // categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.inversed = true;
    valueAxis.title.text = "File";
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "active";
    series1.dataFields.categoryX = "month";
    series1.name = "Downloaded ";
    series1.strokeWidth = 3;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "Amount {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "inactive";
    series2.dataFields.categoryX = "month";
    series2.name = "Generated";
    series2.strokeWidth = 3;
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "Amount {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    // Add legend
    chart.legend = new am4charts.Legend();
  }

  getChart5() {
    // chart bar 2 line
    // let chart = am4core.create("chartReceipt", am4charts.XYChart);
    let chart = am4core.create("chartForecast5", am4charts.XYChart);
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = "{valueY}";
      bullet.label.fill = am4core.color("#ffffff");

      return series;
    }

    chart.data = [
      {
        category: "Jan",
        first: 40,
        second: 55,
        third: 35,
      },
      {
        category: "Feb",
        first: 30,
        second: 78,
        third: 54,
      },
      {
        category: "Mar",
        first: 27,
        second: 40,
        third: 43,
      },
      {
        category: "Apr",
        first: 50,
        second: 33,
        third: 43,
      },
      {
        category: "May",
        first: 55,
        second: 43,
        third: 37,
      },
      {
        category: "Jun",
        first: 60,
        second: 53,
        third: 43,
      },
      {
        category: "Jul",
        first: 70,
        second: 57,
        third: 50,
      },
    ];

    createSeries("first", "Motorcycle");
    createSeries("second", "Car");
    createSeries("third", "Bicycle");

    function arrangeColumns() {
      let series = chart.series.getIndex(0);

      let w =
        1 -
        xAxis.renderer.cellStartLocation -
        (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          let middle = chart.series.length / 2;

          let newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = chart.series.indexOf(series);
            }
          });
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            let trueIndex = chart.series.indexOf(series);
            let newIndex = series.dummyData;

            let dx = (newIndex - trueIndex + middle - newMiddle) * delta;

            series.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
            series.bulletsContainer.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
          });
        }
      }
    }
  }

  getChart6() {
    // pie chart
    // let chart = am4core.create("chartReceipt", am4charts.XYChart);
    let chart = am4core.create("chartForecast6", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        label: "SMS",
        amount: 501.9,
      },
      {
        label: "Email",
        amount: 301.9,
      },
      {
        label: "Printed",
        amount: 201.1,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "label";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

  getChart12() {
    let chart = am4core.create("chartForecast12", am4charts.RadarChart);

    /* Add data */
    chart.data = [
      {
        country: "Lithuania",
        litres: 501,
        units: 250,
      },
      {
        country: "Czech Republic",
        litres: 301,
        units: 222,
      },
      {
        country: "Ireland",
        litres: 266,
        units: 179,
      },
      {
        country: "Germany",
        litres: 165,
        units: 298,
      },
      {
        country: "Australia",
        litres: 139,
        units: 299,
      },
      {
        country: "Austria",
        litres: 336,
        units: 185,
      },
      {
        country: "UK",
        litres: 290,
        units: 150,
      },
      {
        country: "Belgium",
        litres: 325,
        units: 382,
      },
      {
        country: "The Netherlands",
        litres: 40,
        units: 172,
      },
    ];

    /* Create axes */
    let xAxis = chart.xAxes.push(new am4charts.ValueAxis() as any);
    xAxis.renderer.maxLabelPosition = 0.99;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
    yAxis.renderer.labels.template.verticalCenter = "bottom";
    yAxis.renderer.labels.template.horizontalCenter = "right";
    yAxis.renderer.maxLabelPosition = 0.99;
    yAxis.renderer.labels.template.paddingBottom = 1;
    yAxis.renderer.labels.template.paddingRight = 3;

    /* Create and configure series */
    let series1 = chart.series.push(new am4charts.RadarSeries());
    series1.bullets.push(new am4charts.CircleBullet());
    series1.strokeOpacity = 0;
    series1.dataFields.valueX = "x";
    series1.dataFields.valueY = "y";
    series1.name = "Series #1";
    series1.sequencedInterpolation = true;
    series1.sequencedInterpolationDelay = 10;
    series1.data = [
      { x: 83, y: 5.1 },
      { x: 44, y: 5.8 },
      { x: 76, y: 9 },
      { x: 2, y: 1.4 },
      { x: 100, y: 8.3 },
      { x: 96, y: 1.7 },
      { x: 68, y: 3.9 },
      { x: 0, y: 3 },
      { x: 100, y: 4.1 },
      { x: 16, y: 5.5 },
      { x: 71, y: 6.8 },
      { x: 100, y: 7.9 },
      { x: 9, y: 6.8 },
      { x: 85, y: 8.3 },
      { x: 51, y: 6.7 },
      { x: 95, y: 3.8 },
      { x: 95, y: 4.4 },
      { x: 1, y: 0.2 },
      { x: 107, y: 9.7 },
      { x: 50, y: 4.2 },
      { x: 42, y: 9.2 },
      { x: 35, y: 8 },
      { x: 44, y: 6 },
      { x: 64, y: 0.7 },
      { x: 53, y: 3.3 },
      { x: 92, y: 4.1 },
      { x: 43, y: 7.3 },
      { x: 15, y: 7.5 },
      { x: 43, y: 4.3 },
      { x: 90, y: 9.9 },
    ];

    let series2 = chart.series.push(new am4charts.RadarSeries());
    series2.bullets.push(new am4charts.CircleBullet());
    series2.strokeOpacity = 0;
    series2.dataFields.valueX = "x";
    series2.dataFields.valueY = "y";
    series2.name = "Series #2";
    series2.sequencedInterpolation = true;
    series2.sequencedInterpolationDelay = 10;
    series2.data = [
      { x: 178, y: 1.3 },
      { x: 129, y: 3.4 },
      { x: 99, y: 2.4 },
      { x: 80, y: 9.9 },
      { x: 118, y: 9.4 },
      { x: 103, y: 8.7 },
      { x: 91, y: 4.2 },
      { x: 151, y: 1.2 },
      { x: 168, y: 5.2 },
      { x: 168, y: 1.6 },
      { x: 152, y: 1.2 },
      { x: 149, y: 3.4 },
      { x: 182, y: 8.8 },
      { x: 106, y: 6.7 },
      { x: 111, y: 9.2 },
      { x: 130, y: 6.3 },
      { x: 147, y: 2.9 },
      { x: 81, y: 8.1 },
      { x: 138, y: 7.7 },
      { x: 107, y: 3.9 },
      { x: 124, y: 0.7 },
      { x: 130, y: 2.6 },
      { x: 86, y: 9.2 },
      { x: 169, y: 7.5 },
      { x: 122, y: 9.9 },
      { x: 100, y: 3.8 },
      { x: 172, y: 4.1 },
      { x: 140, y: 7.3 },
      { x: 161, y: 2.3 },
      { x: 141, y: 0.9 },
    ];

    let series3 = chart.series.push(new am4charts.RadarSeries());
    series3.bullets.push(new am4charts.CircleBullet());
    series3.strokeOpacity = 0;
    series3.dataFields.valueX = "x";
    series3.dataFields.valueY = "y";
    series3.name = "Series #3";
    series3.sequencedInterpolation = true;
    series3.sequencedInterpolationDelay = 10;
    series3.data = [
      { x: 419, y: 4.9 },
      { x: 417, y: 5.5 },
      { x: 434, y: 0.1 },
      { x: 344, y: 2.5 },
      { x: 279, y: 7.5 },
      { x: 307, y: 8.4 },
      { x: 279, y: 9 },
      { x: 220, y: 8.4 },
      { x: 204, y: 8 },
      { x: 446, y: 0.9 },
      { x: 397, y: 8.9 },
      { x: 351, y: 1.7 },
      { x: 393, y: 0.7 },
      { x: 254, y: 1.8 },
      { x: 260, y: 0.4 },
      { x: 300, y: 3.5 },
      { x: 199, y: 2.7 },
      { x: 182, y: 5.8 },
      { x: 173, y: 2 },
      { x: 201, y: 9.7 },
      { x: 288, y: 1.2 },
      { x: 333, y: 7.4 },
      { x: 308, y: 1.9 },
      { x: 330, y: 8 },
      { x: 408, y: 1.7 },
      { x: 274, y: 0.8 },
      { x: 296, y: 3.1 },
      { x: 279, y: 4.3 },
      { x: 379, y: 5.6 },
      { x: 175, y: 6.8 },
    ];

    /* Add legend */
    chart.legend = new am4charts.Legend();

    /* Add cursor */
    chart.cursor = new am4charts.RadarCursor();
  }

  getChart13() {
    let chart = am4core.create("chartForecast13", am4charts.RadarChart);

    /* Add data */
    chart.data = [
      {
        direction: "N",
        value: 8,
      },
      {
        direction: "NE",
        value: 9,
      },
      {
        direction: "E",
        value: 4.5,
      },
      {
        direction: "SE",
        value: 3.5,
      },
      {
        direction: "S",
        value: 9.2,
      },
      {
        direction: "SW",
        value: 8.4,
      },
      {
        direction: "W",
        value: 11.1,
      },
      {
        direction: "NW",
        value: 10,
      },
    ];

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any);
    categoryAxis.dataFields.category = "direction";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
    //valueAxis.renderer.gridType = "polygons";

    let range = categoryAxis.axisRanges.create();
    range.category = "NW";
    range.endCategory = "NW";
    range.axisFill.fill = am4core.color("#0066CC");
    range.axisFill.fillOpacity = 0.3;

    let range2 = categoryAxis.axisRanges.create();
    range2.category = "N";
    range2.endCategory = "N";
    range2.axisFill.fill = am4core.color("#0066CC");
    range2.axisFill.fillOpacity = 0.3;

    let range3 = categoryAxis.axisRanges.create();
    range3.category = "SE";
    range3.endCategory = "SW";
    range3.axisFill.fill = am4core.color("#CC3333");
    range3.axisFill.fillOpacity = 0.3;
    range3.locations.endCategory = 0;

    /* Create and configure series */
    let series = chart.series.push(new am4charts.RadarSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "direction";
    series.name = "Wind direction";
    series.strokeWidth = 3;
    series.fillOpacity = 0.2;
  }
}
