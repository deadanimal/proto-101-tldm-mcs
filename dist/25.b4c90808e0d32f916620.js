(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    "R/Hu": function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return u;
      }),
        e.d(n, "a", function () {
          return l;
        }),
        e.d(n, "c", function () {
          return d;
        });
      var a = e("TYT/"),
        i = e("K9Ia"),
        o = e("Gi3i"),
        r = e("Valr");
      function b(t, n) {
        if ((1 & t && (a.Vb(0, "div", 3), a.Qb(1, "div", 4), a.Ub()), 2 & t)) {
          var e = a.hc(2);
          a.Hc("color", e.color),
            a.Cb(1),
            a.Hc("width", e.diameter)("height", e.diameter);
        }
      }
      function c(t, n) {
        if (
          (1 & t &&
            (a.Vb(0, "div", 5),
            a.Vb(1, "div", 6),
            a.Qb(2, "div", 7),
            a.Ub(),
            a.Ub()),
          2 & t)
        ) {
          var e = a.hc().ngIf,
            i = a.hc();
          a.Hc("color", i.color),
            a.Cb(1),
            a.Hc("background", i.color, a.Ib)("height", i.height)(
              "width",
              e + "%"
            ),
            a.Cb(1),
            a.Hc("height", i.height);
        }
      }
      function s(t, n) {
        if (
          (1 & t &&
            (a.Tb(0),
            a.Ic(1, b, 2, 6, "div", 1),
            a.Ic(2, c, 3, 10, "div", 2),
            a.Sb()),
          2 & t)
        ) {
          var e = a.hc();
          a.Cb(1),
            a.oc("ngIf", e.includeSpinner),
            a.Cb(1),
            a.oc("ngIf", e.includeBar);
        }
      }
      var d = (function () {
          function t(t) {
            (this.platformId = t),
              (this.progress$ = new i.a().pipe(Object(o.a)(0))),
              (this._pendingRequests = 0),
              (this._value = 0);
          }
          return (
            (t.prototype.start = function (t) {
              void 0 === t && (t = 2),
                ++this._pendingRequests,
                (0 !== this._value && 1 !== this._pendingRequests) ||
                  this.set(
                    1 === this._pendingRequests && this._value > 0
                      ? this._value
                      : t
                  );
            }),
            (t.prototype.stop = function () {
              for (this.complete(); this._pendingRequests > 0; )
                this.complete();
            }),
            (t.prototype.complete = function () {
              var t = this;
              (0 === this._pendingRequests && 0 === this._value) ||
                (this._pendingRequests > 0 && --this._pendingRequests,
                (0 === this._pendingRequests ||
                  (0 === this._pendingRequests && this._value > 0)) &&
                  (100 !== this._value && this.set(100),
                  setTimeout(function () {
                    return t.set(0);
                  }, 500)));
            }),
            (t.prototype.set = function (t) {
              var n = this;
              Object(r.u)(this.platformId)
                ? (0 === t && this._pendingRequests > 0 && (t = 2),
                  (this._value = t),
                  this.progress$.next(t),
                  0 !== this._pendingRequests &&
                    (clearTimeout(this._incTimeout),
                    this._value > 0 &&
                      this._value < 100 &&
                      (this._incTimeout = setTimeout(function () {
                        return n.increment();
                      }, 250))))
                : (this._pendingRequests = 0);
            }),
            (t.prototype.increment = function (t) {
              void 0 === t && (t = 0), t > 0 && this.set(this._value + t);
              var n = this._value;
              (t =
                n >= 0 && n < 25
                  ? 3 * Math.random() + 3
                  : n >= 25 && n < 65
                  ? 3 * Math.random()
                  : n >= 65 && n < 90
                  ? 2 * Math.random()
                  : n >= 90 && n < 99
                  ? 0.5
                  : 0),
                this.set(this._value + t);
            }),
            (t.prototype.ngOnDestroy = function () {
              this.progress$.complete();
            }),
            (t.ngInjectableDef = Object(a.S)({
              factory: function () {
                return new t(Object(a.V)(a.B));
              },
              token: t,
              providedIn: "root",
            })),
            (t.ɵfac = function (n) {
              return new (n || t)(a.Zb(a.B));
            }),
            (t.ɵprov = a.Lb({
              token: t,
              factory: function (n) {
                return t.ɵfac(n);
              },
              providedIn: "root",
            })),
            t
          );
        })(),
        l = (function () {
          function t(t) {
            (this.loader = t),
              (this.includeSpinner = !0),
              (this.includeBar = !0),
              (this.fixed = !0),
              (this.value = null);
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)(a.Pb(d));
            }),
            (t.ɵcmp = a.Jb({
              type: t,
              selectors: [["ngx-loading-bar"]],
              hostVars: 2,
              hostBindings: function (t, n) {
                2 & t && a.Gb("loading-bar-fixed", n.fixed);
              },
              inputs: {
                includeSpinner: "includeSpinner",
                includeBar: "includeBar",
                fixed: "fixed",
                value: "value",
                color: "color",
                height: "height",
                diameter: "diameter",
              },
              decls: 2,
              vars: 3,
              consts: [
                [4, "ngIf"],
                ["id", "loading-bar-spinner", 3, "color", 4, "ngIf"],
                ["id", "loading-bar", 3, "color", 4, "ngIf"],
                ["id", "loading-bar-spinner"],
                [1, "spinner-icon"],
                ["id", "loading-bar"],
                [1, "bar"],
                [1, "peg"],
              ],
              template: function (t, n) {
                1 & t &&
                  (a.Ic(0, s, 3, 2, "ng-container", 0), a.ic(1, "async")),
                  2 & t &&
                    a.oc(
                      "ngIf",
                      null !== n.value
                        ? n.value
                        : a.jc(1, 1, n.loader.progress$)
                    );
              },
              directives: [r.l],
              pipes: [r.b],
              styles: [
                "[_nghost-%COMP%]{position:relative;display:block}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{position:fixed}.loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   .loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{right:10px;left:unset}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:none;transition:350ms linear;color:#29d}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{transition:width 350ms;background:#29d;position:absolute;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{right:0;left:unset}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:none;position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{display:block;position:absolute;z-index:10002;top:5px;left:0}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}",
              ],
            })),
            t
          );
        })(),
        u = (function () {
          function t() {}
          return (
            (t.ɵmod = a.Nb({ type: t })),
            (t.ɵinj = a.Mb({
              factory: function (n) {
                return new (n || t)();
              },
              imports: [[r.c]],
            })),
            t
          );
        })();
    },
    nWYI: function (t, n, e) {
      "use strict";
      e.r(n);
      var a = e("Valr"),
        i = e("oW1M"),
        o = e("89/Q"),
        r = e("QJY3"),
        b = e("X2FZ"),
        c = e("R/Hu"),
        s = e("DUip"),
        d = e("PSD3"),
        l = e.n(d),
        u = e("TYT/");
      function p(t, n) {
        if (1 & t) {
          var e = u.Wb();
          u.Vb(0, "a", 52),
            u.dc("click", function (t) {
              return u.Ac(e), u.hc().toggleEdit();
            }),
            u.Vb(1, "span", 53),
            u.Qb(2, "i", 54),
            u.Ub(),
            u.Vb(3, "span", 55),
            u.Kc(4, "Edit profile"),
            u.Ub(),
            u.Ub();
        }
      }
      function g(t, n) {
        if (1 & t) {
          var e = u.Wb();
          u.Vb(0, "a", 56),
            u.dc("click", function (t) {
              return u.Ac(e), u.hc().toggleEdit();
            }),
            u.Vb(1, "span", 53),
            u.Qb(2, "i", 57),
            u.Ub(),
            u.Vb(3, "span", 55),
            u.Kc(4, "Back"),
            u.Ub(),
            u.Ub();
        }
      }
      function h(t, n) {
        if (1 & t) {
          var e = u.Wb();
          u.Vb(0, "a", 58),
            u.dc("click", function (t) {
              return u.Ac(e), u.hc().confirm();
            }),
            u.Vb(1, "span", 53),
            u.Qb(2, "i", 59),
            u.Ub(),
            u.Vb(3, "span", 55),
            u.Kc(4, "Save"),
            u.Ub(),
            u.Ub();
        }
      }
      function m(t, n) {
        1 & t && (u.Vb(0, "h3", 60), u.Kc(1, "Profile"), u.Ub());
      }
      function v(t, n) {
        1 & t && (u.Vb(0, "h3", 60), u.Kc(1, " Edit Profile"), u.Ub());
      }
      function f(t, n) {
        1 & t && (u.Vb(0, "a", 61), u.Kc(1, " Settings "), u.Ub());
      }
      function V(t, n) {
        1 & t &&
          (u.Vb(0, "form"),
          u.Vb(1, "h6", 62),
          u.Kc(2, "User information"),
          u.Ub(),
          u.Vb(3, "div", 63),
          u.Vb(4, "div", 17),
          u.Vb(5, "div", 64),
          u.Vb(6, "div", 65),
          u.Vb(7, "label", 66),
          u.Kc(8, " Name "),
          u.Ub(),
          u.Qb(9, "input", 67),
          u.Ub(),
          u.Ub(),
          u.Vb(10, "div", 64),
          u.Vb(11, "div", 65),
          u.Vb(12, "label", 68),
          u.Kc(13, " Email address "),
          u.Ub(),
          u.Qb(14, "input", 69),
          u.Ub(),
          u.Ub(),
          u.Ub(),
          u.Ub(),
          u.Qb(15, "hr", 70),
          u.Vb(16, "h6", 62),
          u.Kc(17, "Contact information"),
          u.Ub(),
          u.Vb(18, "div", 63),
          u.Vb(19, "div", 17),
          u.Vb(20, "div", 71),
          u.Vb(21, "div", 65),
          u.Vb(22, "label", 72),
          u.Kc(23, " Address "),
          u.Ub(),
          u.Qb(24, "input", 73),
          u.Ub(),
          u.Ub(),
          u.Ub(),
          u.Vb(25, "div", 17),
          u.Vb(26, "div", 74),
          u.Vb(27, "div", 65),
          u.Vb(28, "label", 75),
          u.Kc(29, " City "),
          u.Ub(),
          u.Qb(30, "input", 76),
          u.Ub(),
          u.Ub(),
          u.Vb(31, "div", 74),
          u.Vb(32, "div", 65),
          u.Vb(33, "label", 77),
          u.Kc(34, " Country "),
          u.Ub(),
          u.Qb(35, "input", 78),
          u.Ub(),
          u.Ub(),
          u.Vb(36, "div", 74),
          u.Vb(37, "div", 65),
          u.Vb(38, "label", 77),
          u.Kc(39, " Postal code "),
          u.Ub(),
          u.Qb(40, "input", 79),
          u.Ub(),
          u.Ub(),
          u.Ub(),
          u.Ub(),
          u.Ub());
      }
      function U(t, n) {
        if (
          (1 & t &&
            (u.Vb(0, "form", 80),
            u.Vb(1, "h6", 62),
            u.Kc(2, "User information"),
            u.Ub(),
            u.Vb(3, "div", 63),
            u.Vb(4, "div", 17),
            u.Vb(5, "div", 64),
            u.Vb(6, "div", 65),
            u.Vb(7, "label", 66),
            u.Kc(8, " Name "),
            u.Ub(),
            u.Qb(9, "input", 81),
            u.Ub(),
            u.Ub(),
            u.Vb(10, "div", 64),
            u.Vb(11, "div", 65),
            u.Vb(12, "label", 68),
            u.Kc(13, " Email address "),
            u.Ub(),
            u.Qb(14, "input", 82),
            u.Ub(),
            u.Ub(),
            u.Ub(),
            u.Ub(),
            u.Qb(15, "hr", 70),
            u.Vb(16, "h6", 62),
            u.Kc(17, "Contact information"),
            u.Ub(),
            u.Vb(18, "div", 63),
            u.Vb(19, "div", 17),
            u.Vb(20, "div", 71),
            u.Vb(21, "div", 65),
            u.Vb(22, "label", 72),
            u.Kc(23, " Address "),
            u.Ub(),
            u.Qb(24, "input", 83),
            u.Ub(),
            u.Ub(),
            u.Ub(),
            u.Vb(25, "div", 17),
            u.Vb(26, "div", 74),
            u.Vb(27, "div", 65),
            u.Vb(28, "label", 75),
            u.Kc(29, " City "),
            u.Ub(),
            u.Qb(30, "input", 84),
            u.Ub(),
            u.Ub(),
            u.Vb(31, "div", 74),
            u.Vb(32, "div", 65),
            u.Vb(33, "label", 77),
            u.Kc(34, " Country "),
            u.Ub(),
            u.Qb(35, "input", 85),
            u.Ub(),
            u.Ub(),
            u.Vb(36, "div", 74),
            u.Vb(37, "div", 65),
            u.Vb(38, "label", 77),
            u.Kc(39, " Postal code "),
            u.Ub(),
            u.Qb(40, "input", 86),
            u.Ub(),
            u.Ub(),
            u.Ub(),
            u.Ub(),
            u.Ub()),
          2 & t)
        ) {
          var e = u.hc();
          u.oc("formGroup", e.editForm);
        }
      }
      var w = (function () {
          function t(t) {
            (this.formBuilder = t),
              (this.editEnabled = !1),
              (this.editFormMessages = {
                name: [{ type: "required", message: "Name is required" }],
                email: [
                  { type: "required", message: "Email is required" },
                  { type: "email", message: "A valid email is required" },
                ],
              });
          }
          return (
            (t.prototype.ngOnInit = function () {
              this.editForm = this.formBuilder.group({
                name: new r.d("", r.t.compose([r.t.required])),
                email: new r.d("", r.t.compose([r.t.required, r.t.email])),
              });
            }),
            (t.prototype.toggleEdit = function () {
              this.editEnabled = !this.editEnabled;
            }),
            (t.prototype.confirm = function () {
              var t = this;
              l.a
                .fire({
                  title: "Confirmation",
                  text: "Are you sure to save this edit?",
                  type: "info",
                  buttonsStyling: !1,
                  confirmButtonClass: "btn btn-info",
                  confirmButtonText: "Confirm",
                  showCancelButton: !0,
                  cancelButtonClass: "btn btn-danger",
                  cancelButtonText: "Cancel",
                })
                .then(function (n) {
                  n.value && t.edit();
                });
            }),
            (t.prototype.edit = function () {
              var t = this;
              l.a
                .fire({
                  title: "Success",
                  text: "Update has been saved",
                  type: "success",
                  buttonsStyling: !1,
                  confirmButtonClass: "btn btn-success",
                  confirmButtonText: "Close",
                })
                .then(function (n) {
                  n.value && t.editForm.reset();
                });
            }),
            (t.ɵfac = function (n) {
              return new (n || t)(u.Pb(r.c));
            }),
            (t.ɵcmp = u.Jb({
              type: t,
              selectors: [["app-profile"]],
              decls: 76,
              vars: 8,
              consts: [
                [1, "header", "pb-6"],
                [1, "container-fluid"],
                [1, "header-body"],
                [1, "row", "align-items-center", "py-4"],
                [1, "col-lg-6", "col-7"],
                [1, "h2", "text-dark", "d-inline-block", "mb-0"],
                [
                  "aria-label",
                  "breadcrumb",
                  1,
                  "d-none",
                  "d-md-inline-block",
                  "ml-md-4",
                ],
                [1, "breadcrumb", "breadcrumb-links", "breadcrumb-dark"],
                [1, "breadcrumb-item"],
                ["href", "javascript:void(0)"],
                [1, "fas", "fa-chart-bar", "text-dark"],
                ["aria-current", "page", 1, "breadcrumb-item", "active"],
                [1, "col-lg-6", "col-5", "text-right"],
                [
                  "class",
                  "btn btn-default btn-sm text-white btn-icon btn-3",
                  3,
                  "click",
                  4,
                  "ngIf",
                ],
                [
                  "class",
                  "btn btn-danger btn-sm text-white btn-icon btn-3",
                  3,
                  "click",
                  4,
                  "ngIf",
                ],
                [
                  "class",
                  "btn btn-success btn-sm text-white btn-icon btn-3",
                  3,
                  "click",
                  4,
                  "ngIf",
                ],
                [1, "container-fluid", "mt--6"],
                [1, "row"],
                [1, "col-xl-4", "order-xl-2"],
                [1, "card", "card-profile"],
                [
                  "alt",
                  "Image placeholder",
                  "src",
                  "assets/img/theme/img-1-1000x600.jpg",
                  1,
                  "card-img-top",
                ],
                [1, "row", "justify-content-center"],
                [1, "col-lg-3", "order-lg-2"],
                [1, "card-profile-image"],
                ["src", "assets/img/default/avatar.png", 1, "rounded-circle"],
                [
                  1,
                  "card-header",
                  "text-center",
                  "border-0",
                  "pt-8",
                  "pt-md-4",
                  "pb-0",
                  "pb-md-4",
                ],
                [1, "d-flex", "justify-content-between"],
                [
                  "href",
                  "javascript:void(0)",
                  1,
                  "btn",
                  "btn-sm",
                  "btn-info",
                  "mr-4",
                ],
                [
                  "href",
                  "javascript:void(0)",
                  1,
                  "btn",
                  "btn-sm",
                  "btn-default",
                  "float-right",
                ],
                [1, "card-body", "pt-0"],
                [1, "col"],
                [1, "card-profile-stats", "d-flex", "justify-content-center"],
                [1, "heading"],
                [1, "description"],
                [1, "text-center"],
                [1, "h3"],
                [1, "font-weight-light"],
                [1, "h5", "font-weight-300"],
                [1, "fas", "fa-location-arrow", "mr-2"],
                [1, "h5", "mt-4"],
                [1, "fas", "fa-briefcase", "mr-2"],
                [1, "col-xl-8", "order-xl-1"],
                [1, "card"],
                [1, "card-header"],
                [1, "row", "align-items-center"],
                [1, "col-8"],
                ["class", "mb-0", 4, "ngIf"],
                [1, "col-4", "text-right"],
                [
                  "class",
                  "btn btn-sm btn-primary",
                  "href",
                  "javascript:void(0)",
                  4,
                  "ngIf",
                ],
                [1, "card-body"],
                [4, "ngIf"],
                [3, "formGroup", 4, "ngIf"],
                [
                  1,
                  "btn",
                  "btn-default",
                  "btn-sm",
                  "text-white",
                  "btn-icon",
                  "btn-3",
                  3,
                  "click",
                ],
                [1, "btn-inner--icon"],
                [1, "fas", "fa-user-edit"],
                [1, "btn-inner--text"],
                [
                  1,
                  "btn",
                  "btn-danger",
                  "btn-sm",
                  "text-white",
                  "btn-icon",
                  "btn-3",
                  3,
                  "click",
                ],
                [1, "fas", "fa-arrow-left"],
                [
                  1,
                  "btn",
                  "btn-success",
                  "btn-sm",
                  "text-white",
                  "btn-icon",
                  "btn-3",
                  3,
                  "click",
                ],
                [1, "fas", "fa-save"],
                [1, "mb-0"],
                [
                  "href",
                  "javascript:void(0)",
                  1,
                  "btn",
                  "btn-sm",
                  "btn-primary",
                ],
                [1, "heading-small", "text-muted", "mb-4"],
                [1, "pl-lg-4"],
                [1, "col-lg-6"],
                [1, "form-group"],
                ["for", "input-username", 1, "form-control-label"],
                [
                  "id",
                  "input-username",
                  "placeholder",
                  "Name",
                  "type",
                  "text",
                  "value",
                  "Ali Imran",
                  "disabled",
                  "",
                  1,
                  "form-control",
                ],
                ["for", "input-email", 1, "form-control-label"],
                [
                  "id",
                  "input-email",
                  "placeholder",
                  "Email address",
                  "type",
                  "email",
                  "value",
                  "imran@prototype.com.my",
                  "disabled",
                  "",
                  1,
                  "form-control",
                ],
                [1, "my-4"],
                [1, "col-md-12"],
                ["for", "input-address", 1, "form-control-label"],
                [
                  "id",
                  "input-address",
                  "placeholder",
                  "Home Address",
                  "type",
                  "text",
                  "value",
                  "No. 199, Lorong Esplanade 91/8A",
                  "disabled",
                  "",
                  1,
                  "form-control",
                ],
                [1, "col-lg-4"],
                ["for", "input-city", 1, "form-control-label"],
                [
                  "id",
                  "input-city",
                  "placeholder",
                  "City",
                  "type",
                  "text",
                  "value",
                  "Petaling Jaya",
                  "disabled",
                  "",
                  1,
                  "form-control",
                ],
                ["for", "input-country", 1, "form-control-label"],
                [
                  "id",
                  "input-country",
                  "placeholder",
                  "Country",
                  "type",
                  "text",
                  "value",
                  "Malaysia",
                  "disabled",
                  "",
                  1,
                  "form-control",
                ],
                [
                  "id",
                  "input-postal-code",
                  "placeholder",
                  "Postal code",
                  "type",
                  "number",
                  "value",
                  "41240",
                  "disabled",
                  "",
                  1,
                  "form-control",
                ],
                [3, "formGroup"],
                [
                  "id",
                  "input-username",
                  "placeholder",
                  "Name",
                  "type",
                  "text",
                  "value",
                  "Ali Imran",
                  "formControlName",
                  "name",
                  1,
                  "form-control",
                ],
                [
                  "id",
                  "input-email",
                  "placeholder",
                  "Email address",
                  "type",
                  "email",
                  "value",
                  "imran@prototype.com.my",
                  "formControlName",
                  "email",
                  1,
                  "form-control",
                ],
                [
                  "id",
                  "input-address",
                  "placeholder",
                  "Home Address",
                  "type",
                  "text",
                  "value",
                  "No. 199, Lorong Esplanade 91/8A",
                  "formControlName",
                  "address",
                  1,
                  "form-control",
                ],
                [
                  "id",
                  "input-city",
                  "placeholder",
                  "City",
                  "type",
                  "text",
                  "value",
                  "Petaling Jaya",
                  "formControlName",
                  "city",
                  1,
                  "form-control",
                ],
                [
                  "id",
                  "input-country",
                  "placeholder",
                  "Country",
                  "type",
                  "text",
                  "value",
                  "Malaysia",
                  "formControlName",
                  "country",
                  1,
                  "form-control",
                ],
                [
                  "id",
                  "input-postal-code",
                  "placeholder",
                  "Postal code",
                  "type",
                  "number",
                  "value",
                  "41240",
                  "formControlName",
                  "postcode",
                  1,
                  "form-control",
                ],
              ],
              template: function (t, n) {
                1 & t &&
                  (u.Vb(0, "div", 0),
                  u.Vb(1, "div", 1),
                  u.Vb(2, "div", 2),
                  u.Vb(3, "div", 3),
                  u.Vb(4, "div", 4),
                  u.Vb(5, "h6", 5),
                  u.Kc(6, "Profile"),
                  u.Ub(),
                  u.Vb(7, "nav", 6),
                  u.Vb(8, "ol", 7),
                  u.Vb(9, "li", 8),
                  u.Vb(10, "a", 9),
                  u.Qb(11, "i", 10),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(12, "li", 11),
                  u.Kc(13, " Profile "),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(14, "div", 12),
                  u.Ic(15, p, 5, 0, "a", 13),
                  u.Ic(16, g, 5, 0, "a", 14),
                  u.Ic(17, h, 5, 0, "a", 15),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(18, "div", 16),
                  u.Vb(19, "div", 17),
                  u.Vb(20, "div", 18),
                  u.Vb(21, "div", 19),
                  u.Qb(22, "img", 20),
                  u.Vb(23, "div", 21),
                  u.Vb(24, "div", 22),
                  u.Vb(25, "div", 23),
                  u.Vb(26, "a"),
                  u.Qb(27, "img", 24),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(28, "div", 25),
                  u.Vb(29, "div", 26),
                  u.Vb(30, "a", 27),
                  u.Kc(31, " Connect "),
                  u.Ub(),
                  u.Vb(32, "a", 28),
                  u.Kc(33, " Message "),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(34, "div", 29),
                  u.Vb(35, "div", 17),
                  u.Vb(36, "div", 30),
                  u.Vb(37, "div", 31),
                  u.Vb(38, "div"),
                  u.Vb(39, "span", 32),
                  u.Kc(40, " 22 "),
                  u.Ub(),
                  u.Vb(41, "span", 33),
                  u.Kc(42, " Friends "),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(43, "div"),
                  u.Vb(44, "span", 32),
                  u.Kc(45, " 10 "),
                  u.Ub(),
                  u.Vb(46, "span", 33),
                  u.Kc(47, " Photos "),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(48, "div"),
                  u.Vb(49, "span", 32),
                  u.Kc(50, " 89 "),
                  u.Ub(),
                  u.Vb(51, "span", 33),
                  u.Kc(52, " Comments "),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(53, "div", 34),
                  u.Vb(54, "h5", 35),
                  u.Kc(55, " Ali Imran"),
                  u.Vb(56, "span", 36),
                  u.Kc(57, " , 27 "),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(58, "div", 37),
                  u.Qb(59, "i", 38),
                  u.Kc(60, " Ampang, Kuala Lumpur "),
                  u.Ub(),
                  u.Vb(61, "div", 39),
                  u.Qb(62, "i", 40),
                  u.Kc(63, " IT Manager "),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(64, "div", 41),
                  u.Vb(65, "div", 42),
                  u.Vb(66, "div", 43),
                  u.Vb(67, "div", 44),
                  u.Vb(68, "div", 45),
                  u.Ic(69, m, 2, 0, "h3", 46),
                  u.Ic(70, v, 2, 0, "h3", 46),
                  u.Ub(),
                  u.Vb(71, "div", 47),
                  u.Ic(72, f, 2, 0, "a", 48),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Vb(73, "div", 49),
                  u.Ic(74, V, 41, 0, "form", 50),
                  u.Ic(75, U, 41, 1, "form", 51),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub(),
                  u.Ub()),
                  2 & t &&
                    (u.Cb(15),
                    u.oc("ngIf", !n.editEnabled),
                    u.Cb(1),
                    u.oc("ngIf", n.editEnabled),
                    u.Cb(1),
                    u.oc("ngIf", n.editEnabled),
                    u.Cb(52),
                    u.oc("ngIf", !n.editEnabled),
                    u.Cb(1),
                    u.oc("ngIf", n.editEnabled),
                    u.Cb(2),
                    u.oc("ngIf", !n.editEnabled),
                    u.Cb(2),
                    u.oc("ngIf", !n.editEnabled),
                    u.Cb(1),
                    u.oc("ngIf", n.editEnabled));
              },
              directives: [a.l, r.v, r.n, r.o, r.g, r.b, r.m, r.e, r.r],
              styles: [""],
            })),
            t
          );
        })(),
        k = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {}),
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = u.Jb({
              type: t,
              selectors: [["app-settings"]],
              decls: 2,
              vars: 0,
              template: function (t, n) {
                1 & t && (u.Vb(0, "p"), u.Kc(1, "settings works!"), u.Ub());
              },
              styles: [""],
            })),
            t
          );
        })(),
        y = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {}),
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = u.Jb({
              type: t,
              selectors: [["app-notifications"]],
              decls: 2,
              vars: 0,
              template: function (t, n) {
                1 & t &&
                  (u.Vb(0, "p"), u.Kc(1, "notifications works!"), u.Ub());
              },
              styles: [""],
            })),
            t
          );
        })(),
        C = e("f07x"),
        x = e("fz8e"),
        _ = e("K9Ia"),
        K = (function () {
          function t() {
            (this.onChatLoaded = new _.a()),
              (this.onAfterLoad = new _.a()),
              (this.onBeforeLoad = new _.a()),
              (this.onChatEnded = new _.a()),
              (this.onChatStarted = new _.a()),
              (this.onChatStateChanged = new _.a()),
              (this.onChatWindowHidden = new _.a()),
              (this.onChatWindowMinimized = new _.a()),
              (this.onChatWindowOpened = new _.a()),
              (this.onMessage = new _.a()),
              (this.onPostchatSurveySubmitted = new _.a()),
              (this.onPrechatSurveySubmitted = new _.a()),
              (this.onRatingCommentSubmitted = new _.a()),
              (this.onRatingSubmitted = new _.a()),
              (this.onTicketCreated = new _.a()),
              (this.onWidgetResize = new _.a());
          }
          return (
            (t.prototype.ngOnInit = function () {
              var t = this;
              if (!window.LC_API) {
                (window.__lc = window.__lc || {}),
                  (window.__lc.license = this.licenseId),
                  (window.__lc.group = this.group),
                  (window.__lc.chat_between_groups = this.chatBetweenGroups),
                  (window.__lc.params = this.params),
                  (window.__lc.visitor = this.visitor),
                  (window.__lc.ga_version = this.gaVersion);
                var n = {
                  _q: [],
                  _h: null,
                  call: function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return n._h && n._h.apply(null, ["call", [].slice.call(t)]);
                  },
                };
                (window.LiveChatWidget = n),
                  (this.lc = document.createElement("script")),
                  (this.lc.type = "text/javascript"),
                  (this.lc.async = !0),
                  (this.lc.src = "https://cdn.livechatinc.com/tracking.js");
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(this.lc, e),
                  this.lc.addEventListener("load", function () {
                    t._chatLoaded(window.LC_API);
                  }),
                  this.lc.addEventListener("error", function (t) {
                    console.error(t);
                  });
              }
            }),
            (t.prototype.ngOnDestroy = function () {
              window.LiveChatWidget &&
                "function" == typeof window.LiveChatWidget.call &&
                (window.LiveChatWidget.call("destroy"),
                this.lc && this.lc.remove(),
                ["secure.livechat.com", "secure.livechatinc.com"].forEach(
                  function (t) {
                    Array.from(
                      document.querySelectorAll('[src*="' + t + '"]')
                    ).forEach(function (t) {
                      return t.remove();
                    });
                  }
                ));
            }),
            (t.prototype._chatLoaded = function (t) {
              this._setCallbacks(t),
                this._setMethods(t),
                this.onChatLoaded.next(t);
            }),
            (t.prototype._setCallbacks = function (t) {
              var n = this;
              (t.on_after_load = function () {
                return n.onAfterLoad.next();
              }),
                (t.on_before_load = function () {
                  return n.onBeforeLoad.next();
                }),
                (t.on_chat_ended = function () {
                  return n.onChatEnded.next();
                }),
                (t.on_chat_started = function (t) {
                  return n.onChatStarted.next(t);
                }),
                (t.on_chat_state_changed = function (t) {
                  return n.onChatStateChanged.next(t);
                }),
                (t.on_chat_window_hidden = function () {
                  return n.onChatWindowHidden.next();
                }),
                (t.on_chat_window_minimized = function () {
                  return n.onChatWindowMinimized.next();
                }),
                (t.on_chat_window_opened = function () {
                  return n.onChatWindowOpened.next();
                }),
                (t.on_message = function (t) {
                  return n.onMessage.next(t);
                }),
                (t.on_postchat_survey_submitted = function (t) {
                  return n.onPostchatSurveySubmitted.next(t);
                }),
                (t.on_prechat_survey_submitted = function (t) {
                  return n.onPrechatSurveySubmitted.next(t);
                }),
                (t.on_rating_comment_submitted = function (t) {
                  return n.onRatingCommentSubmitted.next(t);
                }),
                (t.on_rating_submitted = function (t) {
                  return n.onRatingSubmitted.next(t);
                }),
                (t.on_ticket_created = function (t) {
                  return n.onTicketCreated.next(t);
                });
            }),
            (t.prototype._setMethods = function (t) {
              (this.agentsAreAvailable = function () {
                return t.agents_are_available();
              }),
                (this.chatRunning = function () {
                  return t.chat_running();
                }),
                (this.chatWindowHidden = function () {
                  return t.chat_window_hidden();
                }),
                (this.chatWindowMaximized = function () {
                  return t.chat_window_maximized();
                }),
                (this.chatWindowMinimized = function () {
                  return t.chat_window_minimized();
                }),
                (this.closeChat = function () {
                  return t.close_chat();
                }),
                (this.getChatId = function () {
                  return t.get_chat_id();
                }),
                (this.getChatsNumber = function () {
                  return t.get_chats_number();
                }),
                (this.getLastVisitTimestamp = function () {
                  return t.get_last_visit_timestamp();
                }),
                (this.getPageViewsNumber = function () {
                  return t.get_page_views_number();
                }),
                (this.getVisitorId = function () {
                  return t.get_visitor_id();
                }),
                (this.getVisitsNumber = function () {
                  return t.get_visits_number();
                }),
                (this.hideChatWindow = function () {
                  return t.hide_chat_window();
                }),
                (this.minimizeChatWindow = function () {
                  return t.minimize_chat_window();
                }),
                (this.openChatWindow = function () {
                  return t.open_chat_window();
                }),
                (this.setCustomVariables = function (n) {
                  return t.set_custom_variables(n);
                }),
                (this.setVisitorEmail = function (n) {
                  return t.set_visitor_email(n);
                }),
                (this.setVisitorName = function (n) {
                  return t.set_visitor_name(n);
                }),
                (this.triggerSalesTracker = function (n, e) {
                  return t.trigger_sales_tracker(n, e);
                }),
                (this.updateCustomVariables = function (n) {
                  return t.update_custom_variables(n);
                }),
                (this.visitorEngaged = function () {
                  return t.visitor_engaged();
                }),
                (this.visitorQueued = function () {
                  return t.visitor_queued();
                });
            }),
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = u.Jb({
              type: t,
              selectors: [["livechat-widget"]],
              inputs: {
                licenseId: "licenseId",
                group: "group",
                chatBetweenGroups: "chatBetweenGroups",
                params: "params",
                visitor: "visitor",
                gaVersion: "gaVersion",
              },
              outputs: {
                onChatLoaded: "onChatLoaded",
                onAfterLoad: "onAfterLoad",
                onBeforeLoad: "onBeforeLoad",
                onChatEnded: "onChatEnded",
                onChatStarted: "onChatStarted",
                onChatStateChanged: "onChatStateChanged",
                onChatWindowHidden: "onChatWindowHidden",
                onChatWindowMinimized: "onChatWindowMinimized",
                onChatWindowOpened: "onChatWindowOpened",
                onMessage: "onMessage",
                onPostchatSurveySubmitted: "onPostchatSurveySubmitted",
                onPrechatSurveySubmitted: "onPrechatSurveySubmitted",
                onRatingCommentSubmitted: "onRatingCommentSubmitted",
                onRatingSubmitted: "onRatingSubmitted",
                onTicketCreated: "onTicketCreated",
                onWidgetResize: "onWidgetResize",
              },
              decls: 0,
              vars: 0,
              template: function (t, n) {},
              encapsulation: 2,
            })),
            t
          );
        })(),
        Q = (function () {
          function t() {}
          return (
            (t.ɵmod = u.Nb({ type: t })),
            (t.ɵinj = u.Mb({
              factory: function (n) {
                return new (n || t)();
              },
              imports: [[]],
            })),
            t
          );
        })(),
        P = ["liveChatWidget"];
      function S(t, n) {
        1 & t &&
          (u.Vb(0, "ul", 80),
          u.Vb(1, "li"),
          u.Vb(2, "a", 81),
          u.Qb(3, "img", 82),
          u.Kc(4, " EN "),
          u.Ub(),
          u.Ub(),
          u.Vb(5, "li"),
          u.Vb(6, "a", 83),
          u.Qb(7, "img", 30),
          u.Kc(8, " BM "),
          u.Ub(),
          u.Ub(),
          u.Ub());
      }
      var M = ["liveChatWidget"];
      function L(t, n) {
        1 & t &&
          (u.Vb(0, "ul", 62),
          u.Vb(1, "li"),
          u.Vb(2, "a", 63),
          u.Qb(3, "img", 64),
          u.Kc(4, " EN "),
          u.Ub(),
          u.Ub(),
          u.Vb(5, "li"),
          u.Vb(6, "a", 65),
          u.Qb(7, "img", 30),
          u.Kc(8, " BM "),
          u.Ub(),
          u.Ub(),
          u.Ub());
      }
      var W = ["liveChatWidget"];
      function I(t, n) {
        1 & t &&
          (u.Vb(0, "ul", 59),
          u.Vb(1, "li"),
          u.Vb(2, "a", 60),
          u.Qb(3, "img", 61),
          u.Kc(4, " EN "),
          u.Ub(),
          u.Ub(),
          u.Vb(5, "li"),
          u.Vb(6, "a", 62),
          u.Qb(7, "img", 30),
          u.Kc(8, " BM "),
          u.Ub(),
          u.Ub(),
          u.Ub());
      }
      var A = [
          {
            path: "",
            children: [
              {
                path: "landing_page",
                component: (function () {
                  function t(t) {
                    (this.router = t),
                      (this.isLiveChatWidgetLoaded = !1),
                      (this.test = new Date()),
                      (this.isCollapsed = !0),
                      (this.keyword = "name"),
                      (this.data = [
                        { id: 1, name: "FAQ" },
                        { id: 2, name: "Payment" },
                        { id: 3, name: "Dashboard" },
                        { id: 4, name: "Assessment" },
                        { id: 5, name: "Delivery Channel" },
                      ]),
                      (this.visitor = {
                        name: "John Doe",
                        email: "john@doe.com",
                      }),
                      (this.params = [
                        { name: "Login", value: "joe_public" },
                        { name: "Account ID", value: "ABCD1234" },
                        { name: "Total order value", value: "$123" },
                      ]);
                  }
                  return (
                    (t.prototype.ngOnInit = function () {}),
                    (t.prototype.selectEvent = function (t) {}),
                    (t.prototype.onChangeSearch = function (t) {}),
                    (t.prototype.onFocused = function (t) {}),
                    (t.prototype.navigatePage = function (t) {
                      return "home" == t
                        ? this.router.navigate(["/global/landing_page"])
                        : "manual" == t
                        ? this.router.navigate(["/user-portal/user-manual"])
                        : "faq" == t
                        ? this.router.navigate(["global/faq"])
                        : "brochure" == t
                        ? this.router.navigate(["/user-portal/brochure"])
                        : "refund" == t
                        ? this.router.navigate(["/user-portal/refund"])
                        : "complaint" == t
                        ? this.router.navigate(["/user-portal/complaint"])
                        : "login" == t
                        ? this.router.navigate(["/auth/login"])
                        : "about-us" == t
                        ? this.router.navigate(["/global/about-us"])
                        : void 0;
                    }),
                    (t.prototype.onChatLoaded = function (t) {
                      (this.liveChatApi = t),
                        (this.isLiveChatWidgetLoaded = !0);
                    }),
                    (t.prototype.onChatWindowMinimized = function () {
                      console.log("minimized");
                    }),
                    (t.prototype.onChatWindowOpened = function () {
                      console.log("opened");
                    }),
                    (t.prototype.openChatWindow = function () {
                      this.isLiveChatWidgetLoaded &&
                        this.liveChatWidget.openChatWindow();
                    }),
                    (t.prototype.hideChatWindow = function () {
                      this.isLiveChatWidgetLoaded &&
                        this.liveChatWidget.minimizeChatWindow();
                    }),
                    (t.ɵfac = function (n) {
                      return new (n || t)(u.Pb(s.e));
                    }),
                    (t.ɵcmp = u.Jb({
                      type: t,
                      selectors: [["app-landing-page"]],
                      viewQuery: function (t, n) {
                        var e;
                        1 & t && u.Pc(P, !0),
                          2 & t &&
                            u.wc((e = u.ec())) &&
                            (n.liveChatWidget = e.first);
                      },
                      decls: 169,
                      vars: 7,
                      consts: [
                        [
                          "id",
                          "navbar-main",
                          1,
                          "navbar",
                          "navbar-horizontal",
                          "navbar-main",
                          "navbar-expand-lg",
                          "navbar-dark",
                          "bg-secondary",
                        ],
                        [1, "container"],
                        [1, "navbar-brand", 2, "cursor", "pointer", 3, "click"],
                        ["src", "assets/img/logo/tldm-logo.png"],
                        [
                          "type",
                          "button",
                          "data-toggle",
                          "collapse",
                          "data-target",
                          "#navbar-collapse",
                          "aria-expanded",
                          "false",
                          "aria-label",
                          "Toggle navigation",
                          "aria-controls",
                          "collapseBasic",
                          1,
                          "navbar-toggler",
                          3,
                          "click",
                        ],
                        [1, "navbar-toggler-icon"],
                        [
                          "id",
                          "collapseBasic",
                          1,
                          "navbar-collapse",
                          "navbar-custom-collapse",
                          "collapse",
                        ],
                        [1, "navbar-collapse-header"],
                        [1, "row"],
                        [1, "col-6", "collapse-brand"],
                        [3, "click"],
                        ["src", "assets/img/brand/blue.png"],
                        [1, "col-6", "collapse-close"],
                        [
                          "type",
                          "button",
                          "data-toggle",
                          "collapse",
                          "data-target",
                          "#navbar-collapse",
                          "aria-controls",
                          "navbar-collapse",
                          "aria-expanded",
                          "false",
                          "aria-label",
                          "Toggle navigation",
                          1,
                          "navbar-toggler",
                          3,
                          "click",
                        ],
                        [1, "navbar-nav", "mr-auto"],
                        [1, "nav-item", 2, "cursor", "pointer"],
                        [
                          "routerLinkActive",
                          "active",
                          1,
                          "nav-link",
                          "text-dark",
                          2,
                          "cursor",
                          "pointer",
                          3,
                          "click",
                        ],
                        [1, "nav-link-inner--text"],
                        [1, "d-lg-none"],
                        [
                          1,
                          "navbar-nav",
                          "align-items-lg-center",
                          "ml-lg-auto",
                        ],
                        [1, "nav-item"],
                        [
                          "href",
                          "#",
                          "target",
                          "_blank",
                          "tooltip",
                          "Like us on Facebook",
                          1,
                          "nav-link",
                          "nav-link-icon",
                        ],
                        [1, "fab", "fa-facebook-square", "text-cyan"],
                        [1, "nav-link-inner--text", "d-lg-none", "text-dark"],
                        [
                          "href",
                          "#",
                          "target",
                          "_blank",
                          "tooltip",
                          "Follow us on Instagram",
                          1,
                          "nav-link",
                          "nav-link-icon",
                        ],
                        [1, "fab", "fa-instagram", "text-pink"],
                        [
                          "href",
                          "#",
                          "target",
                          "_blank",
                          "tooltip",
                          "Follow us on Twitter",
                          1,
                          "nav-link",
                          "nav-link-icon",
                        ],
                        [1, "fab", "fa-twitter-square", "text-blue"],
                        ["dropdown", "", 1, "dropdown"],
                        [
                          "href",
                          "javascript:void(0)",
                          "id",
                          "navbarDropdownMenuLink2",
                          "dropdownToggle",
                          "",
                        ],
                        [
                          "width",
                          "17px",
                          "height",
                          "15px",
                          "src",
                          "assets/img/icons/flags/MY.png",
                        ],
                        [
                          "aria-labelledby",
                          "navbarDropdownMenuLink2",
                          "class",
                          "dropdown-menu",
                          4,
                          "dropdownMenu",
                        ],
                        [
                          1,
                          "nav-item",
                          "d-none",
                          "text-white",
                          "d-lg-block",
                          "ml-lg-4",
                        ],
                        [2, "cursor", "pointer", 3, "click"],
                        [1, "btn-inner--icon"],
                        [1, "fas", "fa-user", "text-dark"],
                        [1, "nav-link-inner--text", "text-dark"],
                        [1, "main-content"],
                        [
                          "src",
                          "assets/img/default/banner.png",
                          "alt",
                          "first slide",
                          2,
                          "display",
                          "block",
                          "width",
                          "100%",
                          "height",
                          "500px",
                        ],
                        [
                          "src",
                          "assets/img/default/banner2.png",
                          "alt",
                          "second slide",
                          2,
                          "display",
                          "block",
                          "width",
                          "100%",
                          "height",
                          "500px",
                        ],
                        [
                          "src",
                          "assets/img/default/banner3.png",
                          "alt",
                          "third slide",
                          2,
                          "display",
                          "block",
                          "width",
                          "100%",
                          "height",
                          "500px",
                        ],
                        [1, "py-5", "pt-5", "pb-0", "bg-default"],
                        [1, "text-center", "text-white", "pt-1", "pb-5"],
                        [1, "text-white"],
                        [1, "container-fluid"],
                        [1, "row", "justify-content-center", "text-center"],
                        [
                          "width",
                          "80%",
                          "height",
                          "450",
                          "src",
                          "https://www.youtube.com/embed/1WHjQ0uK2Xo",
                          "frameborder",
                          "0",
                          "allow",
                          "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                          "allowfullscreen",
                          "",
                        ],
                        [
                          1,
                          "section",
                          "section-lg",
                          "pt-lg-0",
                          "pt-5",
                          "mt-7",
                          "pb-6",
                          "bg-white",
                        ],
                        [1, "text-center", "text-dark", "pt-4", "pb-7"],
                        [1, "text-dark"],
                        [1, "row", "justify-content-center"],
                        [1, "col-lg-12"],
                        [1, "col-md-2", "pd-2"],
                        [1, "col"],
                        [
                          "src",
                          "assets/img/default/agensi1.gif",
                          2,
                          "display",
                          "block",
                          "width",
                          "100px",
                          "height",
                          "100px",
                          "cursor",
                          "pointer",
                        ],
                        [
                          "src",
                          "assets/img/default/agensi2.png",
                          2,
                          "display",
                          "block",
                          "width",
                          "100px",
                          "height",
                          "100px",
                          "cursor",
                          "pointer",
                        ],
                        [
                          "src",
                          "assets/img/default/agensi3.png",
                          2,
                          "display",
                          "block",
                          "width",
                          "100px",
                          "height",
                          "100px",
                          "cursor",
                          "pointer",
                        ],
                        [
                          "src",
                          "assets/img/default/agensi4.gif",
                          2,
                          "display",
                          "block",
                          "width",
                          "100px",
                          "height",
                          "100px",
                          "cursor",
                          "pointer",
                        ],
                        [
                          "src",
                          "assets/img/default/agensi5.gif",
                          2,
                          "display",
                          "block",
                          "width",
                          "100px",
                          "height",
                          "100px",
                          "cursor",
                          "pointer",
                        ],
                        [1, "col-md-2"],
                        [1, "row", "mt-1", "pt-1"],
                        [1, "col-md-2", "mt-1", "pt-1"],
                        [
                          "src",
                          "assets/img/default/agensi6.jpg",
                          2,
                          "display",
                          "block",
                          "width",
                          "100px",
                          "height",
                          "100px",
                          "cursor",
                          "pointer",
                        ],
                        [
                          "src",
                          "assets/img/default/agensi7.gif",
                          2,
                          "display",
                          "block",
                          "width",
                          "100px",
                          "height",
                          "100px",
                          "cursor",
                          "pointer",
                        ],
                        [
                          "src",
                          "assets/img/default/agensi8.png",
                          2,
                          "display",
                          "block",
                          "width",
                          "100px",
                          "height",
                          "100px",
                          "cursor",
                          "pointer",
                        ],
                        [
                          "src",
                          "assets/img/default/agensi9.png",
                          2,
                          "display",
                          "block",
                          "width",
                          "100px",
                          "height",
                          "100px",
                          "cursor",
                          "pointer",
                        ],
                        ["id", "footer-main", 1, "py-5", "bg-secondary"],
                        [1, "col-md-4", "text-dark"],
                        [2, "font-size", "large", "font-weight", "bold"],
                        [1, "fas", "fa-envelope", "text-yellow"],
                        [1, "fas", "fa-phone", "text-brown"],
                        [1, "fas", "fa-map-marker-alt", "text-danger"],
                        [
                          1,
                          "row",
                          "align-items-center",
                          "justify-content-xl-between",
                        ],
                        [1, "col-xl-6"],
                        [
                          1,
                          "copyright",
                          "text-center",
                          "text-xl-left",
                          "text-muted",
                        ],
                        [
                          "href",
                          "#",
                          "target",
                          "_blank",
                          1,
                          "font-weight-bold",
                          "ml-1",
                        ],
                        [
                          1,
                          "nav",
                          "nav-footer",
                          "justify-content-center",
                          "justify-content-xl-end",
                        ],
                        ["href", "#", "target", "_blank", 1, "nav-link"],
                        [
                          "licenseId",
                          "11082047",
                          3,
                          "visitor",
                          "params",
                          "onChatLoaded",
                          "onChatWindowOpened",
                          "onChatWindowMinimized",
                        ],
                        ["liveChatWidget", ""],
                        [
                          "aria-labelledby",
                          "navbarDropdownMenuLink2",
                          1,
                          "dropdown-menu",
                        ],
                        ["href", "javascript:void(0)", 1, "dropdown-item"],
                        [
                          "width",
                          "17px",
                          "height",
                          "15px",
                          "src",
                          "assets/img/icons/flags/GB.png",
                        ],
                        [
                          "href",
                          "javascript:void(0)",
                          1,
                          "dropdown-item",
                          "active",
                        ],
                      ],
                      template: function (t, n) {
                        1 & t &&
                          (u.Vb(0, "nav", 0),
                          u.Vb(1, "div", 1),
                          u.Vb(2, "a", 2),
                          u.dc("click", function (t) {
                            return n.navigatePage("landing_page");
                          }),
                          u.Qb(3, "img", 3),
                          u.Ub(),
                          u.Vb(4, "button", 4),
                          u.dc("click", function (t) {
                            return (n.isCollapsed = !n.isCollapsed);
                          }),
                          u.Qb(5, "span", 5),
                          u.Ub(),
                          u.Vb(6, "div", 6),
                          u.Vb(7, "div", 7),
                          u.Vb(8, "div", 8),
                          u.Vb(9, "div", 9),
                          u.Vb(10, "a", 10),
                          u.dc("click", function (t) {
                            return n.navigatePage("home");
                          }),
                          u.Qb(11, "img", 11),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(12, "div", 12),
                          u.Vb(13, "button", 13),
                          u.dc("click", function (t) {
                            return (n.isCollapsed = !n.isCollapsed);
                          }),
                          u.Qb(14, "span"),
                          u.Qb(15, "span"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(16, "ul", 14),
                          u.Vb(17, "li", 15),
                          u.Vb(18, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("home");
                          }),
                          u.Vb(19, "span", 17),
                          u.Kc(20, "Menu Utama"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(21, "li", 15),
                          u.Vb(22, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("faq");
                          }),
                          u.Vb(23, "span", 17),
                          u.Kc(24, "Soalan Lazim"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(25, "li", 15),
                          u.Vb(26, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("about-us");
                          }),
                          u.Vb(27, "span", 17),
                          u.Kc(28, "Mengenai Kami"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Qb(29, "hr", 18),
                          u.Vb(30, "ul", 19),
                          u.Vb(31, "li", 20),
                          u.Vb(32, "a", 21),
                          u.Qb(33, "i", 22),
                          u.Vb(34, "span", 23),
                          u.Kc(35, "Facebook"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(36, "li", 20),
                          u.Vb(37, "a", 24),
                          u.Qb(38, "i", 25),
                          u.Vb(39, "span", 23),
                          u.Kc(40, "Instagram"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(41, "li", 20),
                          u.Vb(42, "a", 26),
                          u.Qb(43, "i", 27),
                          u.Vb(44, "span", 23),
                          u.Kc(45, "Twitter"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(46, "li", 20),
                          u.Vb(47, "div", 28),
                          u.Vb(48, "a", 29),
                          u.Qb(49, "img", 30),
                          u.Ub(),
                          u.Ic(50, S, 9, 0, "ul", 31),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(51, "li", 32),
                          u.Vb(52, "a", 33),
                          u.dc("click", function (t) {
                            return n.navigatePage("login");
                          }),
                          u.Vb(53, "span", 34),
                          u.Qb(54, "i", 35),
                          u.Ub(),
                          u.Vb(55, "span", 36),
                          u.Kc(56, "\xa0\xa0Log Masuk"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(57, "div", 37),
                          u.Vb(58, "carousel"),
                          u.Vb(59, "slide"),
                          u.Qb(60, "img", 38),
                          u.Ub(),
                          u.Vb(61, "slide"),
                          u.Qb(62, "img", 39),
                          u.Ub(),
                          u.Vb(63, "slide"),
                          u.Qb(64, "img", 40),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(65, "section", 41),
                          u.Vb(66, "div", 42),
                          u.Vb(67, "h1", 43),
                          u.Kc(68, "Lagu Negeri Selangor"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(69, "div", 44),
                          u.Vb(70, "div", 45),
                          u.Qb(71, "iframe", 46),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(72, "section", 47),
                          u.Vb(73, "div", 1),
                          u.Vb(74, "div", 48),
                          u.Vb(75, "h1", 49),
                          u.Kc(76, "Pautan Agensi"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(77, "div", 50),
                          u.Vb(78, "div", 51),
                          u.Vb(79, "div", 8),
                          u.Qb(80, "div", 52),
                          u.Vb(81, "div", 53),
                          u.Qb(82, "img", 54),
                          u.Ub(),
                          u.Vb(83, "div", 53),
                          u.Qb(84, "img", 55),
                          u.Ub(),
                          u.Vb(85, "div", 53),
                          u.Qb(86, "img", 56),
                          u.Ub(),
                          u.Vb(87, "div", 53),
                          u.Qb(88, "img", 57),
                          u.Ub(),
                          u.Vb(89, "div", 53),
                          u.Qb(90, "img", 58),
                          u.Ub(),
                          u.Qb(91, "div", 59),
                          u.Ub(),
                          u.Qb(92, "br"),
                          u.Qb(93, "br"),
                          u.Vb(94, "div", 60),
                          u.Qb(95, "div", 61),
                          u.Vb(96, "div", 53),
                          u.Qb(97, "img", 62),
                          u.Ub(),
                          u.Vb(98, "div", 53),
                          u.Qb(99, "img", 63),
                          u.Ub(),
                          u.Vb(100, "div", 53),
                          u.Qb(101, "img", 64),
                          u.Ub(),
                          u.Vb(102, "div", 53),
                          u.Qb(103, "img", 65),
                          u.Ub(),
                          u.Qb(104, "div", 59),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(105, "footer", 66),
                          u.Vb(106, "div", 1),
                          u.Vb(107, "div", 8),
                          u.Vb(108, "div", 67),
                          u.Vb(109, "span", 68),
                          u.Kc(110, "Hubungi Kami"),
                          u.Ub(),
                          u.Qb(111, "br"),
                          u.Qb(112, "br"),
                          u.Vb(113, "span"),
                          u.Qb(114, "i", 69),
                          u.Kc(115, "\xa0\xa0webadmin@selangor.gov.my"),
                          u.Ub(),
                          u.Qb(116, "br"),
                          u.Vb(117, "span"),
                          u.Qb(118, "i", 70),
                          u.Kc(119, "\xa0\xa0Tel 1: (6)03-55447000"),
                          u.Ub(),
                          u.Qb(120, "br"),
                          u.Vb(121, "span"),
                          u.Qb(122, "i", 70),
                          u.Kc(123, "\xa0\xa0Tel 2: (6)03-55212347"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(124, "div", 67),
                          u.Vb(125, "span", 68),
                          u.Kc(126, "Waktu Operasi "),
                          u.Ub(),
                          u.Qb(127, "br"),
                          u.Qb(128, "br"),
                          u.Vb(129, "span"),
                          u.Kc(130, "Hari: Isnin - Jumaat"),
                          u.Ub(),
                          u.Qb(131, "br"),
                          u.Vb(132, "span"),
                          u.Kc(133, "Servis Kaunter: 8.15 AM - 4.15 PM"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(134, "div", 67),
                          u.Vb(135, "span", 68),
                          u.Kc(136, "Alamat"),
                          u.Ub(),
                          u.Qb(137, "br"),
                          u.Qb(138, "br"),
                          u.Vb(139, "span"),
                          u.Qb(140, "i", 71),
                          u.Kc(
                            141,
                            "\xa0\xa0Pejabat Setiausaha Kerajaan Negeri Selangor,"
                          ),
                          u.Qb(142, "br"),
                          u.Kc(
                            143,
                            " Bangunan Sultan Salahuddin Abdul Aziz Shah,"
                          ),
                          u.Qb(144, "br"),
                          u.Kc(145, " 40503 Shah Alam,"),
                          u.Qb(146, "br"),
                          u.Kc(147, " Selangor Darul Ehsan. "),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Qb(148, "br"),
                          u.Qb(149, "hr"),
                          u.Qb(150, "br"),
                          u.Vb(151, "div", 72),
                          u.Vb(152, "div", 73),
                          u.Vb(153, "div", 74),
                          u.Kc(154),
                          u.ic(155, "date"),
                          u.Vb(156, "a", 75),
                          u.Kc(157, "TM - IBILL"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(158, "div", 73),
                          u.Vb(159, "ul", 76),
                          u.Vb(160, "li", 15),
                          u.Vb(161, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("faq");
                          }),
                          u.Vb(162, "span", 17),
                          u.Kc(163, "Soalan Lazim"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(164, "li", 15),
                          u.Vb(165, "a", 77),
                          u.Kc(166, "Mengenai Kami"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(167, "livechat-widget", 78, 79),
                          u.dc("onChatLoaded", function (t) {
                            return n.onChatLoaded(t);
                          })("onChatWindowOpened", function (t) {
                            return n.onChatWindowOpened();
                          })("onChatWindowMinimized", function (t) {
                            return n.onChatWindowMinimized();
                          }),
                          u.Ub(),
                          u.Ub(),
                          u.Ub()),
                          2 & t &&
                            (u.Cb(4),
                            u.Db("aria-expanded", !n.isCollapsed),
                            u.Cb(150),
                            u.Mc(" \xa9 ", u.kc(155, 4, n.test, "yyyy"), " "),
                            u.Cb(13),
                            u.oc("visitor", n.visitor)("params", n.params));
                      },
                      directives: [s.f, C.a, i.d, i.g, i.e, x.a, x.c, K],
                      pipes: [a.e],
                      styles: [""],
                    })),
                    t
                  );
                })(),
              },
              { path: "notifications", component: y },
              { path: "profile", component: w },
              { path: "settings", component: k },
              {
                path: "faq",
                component: (function () {
                  function t(t) {
                    (this.router = t),
                      (this.isLiveChatWidgetLoaded = !1),
                      (this.test = new Date()),
                      (this.isCollapsed = !0),
                      (this.visitor = {
                        name: "John Doe",
                        email: "john@doe.com",
                      }),
                      (this.params = [
                        { name: "Login", value: "joe_public" },
                        { name: "Account ID", value: "ABCD1234" },
                        { name: "Total order value", value: "$123" },
                      ]);
                  }
                  return (
                    (t.prototype.ngOnInit = function () {}),
                    (t.prototype.selectEvent = function (t) {}),
                    (t.prototype.onChangeSearch = function (t) {}),
                    (t.prototype.onFocused = function (t) {}),
                    (t.prototype.navigatePage = function (t) {
                      return "home" == t
                        ? this.router.navigate(["/global/landing_page"])
                        : "manual" == t
                        ? this.router.navigate(["/user-portal/user-manual"])
                        : "faq" == t
                        ? this.router.navigate(["global/faq"])
                        : "brochure" == t
                        ? this.router.navigate(["/user-portal/brochure"])
                        : "about-us" == t
                        ? this.router.navigate(["/global/about-us"])
                        : "complaint" == t
                        ? this.router.navigate(["/user-portal/complaint"])
                        : "login" == t
                        ? this.router.navigate(["/auth/login"])
                        : void 0;
                    }),
                    (t.prototype.onChatLoaded = function (t) {
                      (this.liveChatApi = t),
                        (this.isLiveChatWidgetLoaded = !0);
                    }),
                    (t.prototype.onChatWindowMinimized = function () {
                      console.log("minimized");
                    }),
                    (t.prototype.onChatWindowOpened = function () {
                      console.log("opened");
                    }),
                    (t.prototype.openChatWindow = function () {
                      this.isLiveChatWidgetLoaded &&
                        this.liveChatWidget.openChatWindow();
                    }),
                    (t.prototype.hideChatWindow = function () {
                      this.isLiveChatWidgetLoaded &&
                        this.liveChatWidget.minimizeChatWindow();
                    }),
                    (t.ɵfac = function (n) {
                      return new (n || t)(u.Pb(s.e));
                    }),
                    (t.ɵcmp = u.Jb({
                      type: t,
                      selectors: [["app-faq"]],
                      viewQuery: function (t, n) {
                        var e;
                        1 & t && u.Pc(M, !0),
                          2 & t &&
                            u.wc((e = u.ec())) &&
                            (n.liveChatWidget = e.first);
                      },
                      decls: 155,
                      vars: 8,
                      consts: [
                        [
                          "id",
                          "navbar-main",
                          1,
                          "navbar",
                          "navbar-horizontal",
                          "navbar-main",
                          "navbar-expand-lg",
                          "navbar-dark",
                          "bg-secondary",
                        ],
                        [1, "container"],
                        [1, "navbar-brand", 2, "cursor", "pointer", 3, "click"],
                        ["src", "assets/img/logo/tldm-logo.png"],
                        [
                          "type",
                          "button",
                          "data-toggle",
                          "collapse",
                          "data-target",
                          "#navbar-collapse",
                          "aria-expanded",
                          "false",
                          "aria-label",
                          "Toggle navigation",
                          "aria-controls",
                          "collapseBasic",
                          1,
                          "navbar-toggler",
                          3,
                          "click",
                        ],
                        [1, "navbar-toggler-icon"],
                        [
                          "id",
                          "collapseBasic",
                          1,
                          "navbar-collapse",
                          "navbar-custom-collapse",
                          "collapse",
                        ],
                        [1, "navbar-collapse-header"],
                        [1, "row"],
                        [1, "col-6", "collapse-brand"],
                        [3, "click"],
                        ["src", "assets/img/brand/blue.png"],
                        [1, "col-6", "collapse-close"],
                        [
                          "type",
                          "button",
                          "data-toggle",
                          "collapse",
                          "data-target",
                          "#navbar-collapse",
                          "aria-controls",
                          "navbar-collapse",
                          "aria-expanded",
                          "false",
                          "aria-label",
                          "Toggle navigation",
                          1,
                          "navbar-toggler",
                          3,
                          "click",
                        ],
                        [1, "navbar-nav", "mr-auto"],
                        [1, "nav-item", 2, "cursor", "pointer"],
                        [
                          "routerLinkActive",
                          "active",
                          1,
                          "nav-link",
                          "text-dark",
                          2,
                          "cursor",
                          "pointer",
                          3,
                          "click",
                        ],
                        [1, "nav-link-inner--text"],
                        [1, "d-lg-none"],
                        [
                          1,
                          "navbar-nav",
                          "align-items-lg-center",
                          "ml-lg-auto",
                        ],
                        [1, "nav-item"],
                        [
                          "href",
                          "https://www.facebook.com/creativetim",
                          "target",
                          "_blank",
                          "tooltip",
                          "Like us on Facebook",
                          1,
                          "nav-link",
                          "nav-link-icon",
                        ],
                        [1, "fab", "fa-facebook-square", "text-cyan"],
                        [1, "nav-link-inner--text", "d-lg-none", "text-dark"],
                        [
                          "href",
                          "https://www.instagram.com/creativetimofficial",
                          "target",
                          "_blank",
                          "tooltip",
                          "Follow us on Instagram",
                          1,
                          "nav-link",
                          "nav-link-icon",
                        ],
                        [1, "fab", "fa-instagram", "text-pink"],
                        [
                          "href",
                          "https://twitter.com/creativetim",
                          "target",
                          "_blank",
                          "tooltip",
                          "Follow us on Twitter",
                          1,
                          "nav-link",
                          "nav-link-icon",
                        ],
                        [1, "fab", "fa-twitter-square", "text-blue"],
                        ["dropdown", "", 1, "dropdown"],
                        [
                          "href",
                          "javascript:void(0)",
                          "id",
                          "navbarDropdownMenuLink2",
                          "dropdownToggle",
                          "",
                        ],
                        [
                          "width",
                          "17px",
                          "height",
                          "15px",
                          "src",
                          "assets/img/icons/flags/MY.png",
                        ],
                        [
                          "aria-labelledby",
                          "navbarDropdownMenuLink2",
                          "class",
                          "dropdown-menu",
                          4,
                          "dropdownMenu",
                        ],
                        [
                          1,
                          "nav-item",
                          "d-none",
                          "text-white",
                          "d-lg-block",
                          "ml-lg-4",
                        ],
                        [2, "cursor", "pointer", 3, "click"],
                        [1, "btn-inner--icon"],
                        [1, "fas", "fa-user", "text-dark"],
                        [1, "nav-link-inner--text", "text-dark"],
                        [1, "main-content"],
                        [1, "section", "section-lg", "pt-lg-0", "mt-3", "pb-4"],
                        [1, "row", "justify-content-center"],
                        [1, "text-center", "text-white", "pt-4", "pb-5"],
                        [1, "text-white"],
                        [1, "col-lg-12", "col-md-12"],
                        [1, "card"],
                        [1, "card-body"],
                        [3, "isAnimated"],
                        [1, "pb--1"],
                        ["accordion-heading", "", 1, "mb-0"],
                        ["id", "footer-main", 1, "py-5", "bg-secondary"],
                        [1, "col-md-4", "text-dark"],
                        [2, "font-size", "large", "font-weight", "bold"],
                        [1, "fas", "fa-envelope", "text-yellow"],
                        [1, "fas", "fa-phone", "text-brown"],
                        [1, "fas", "fa-map-marker-alt", "text-danger"],
                        [
                          1,
                          "row",
                          "align-items-center",
                          "justify-content-xl-between",
                        ],
                        [1, "col-xl-6"],
                        [
                          1,
                          "copyright",
                          "text-center",
                          "text-xl-left",
                          "text-muted",
                        ],
                        [
                          "href",
                          "#",
                          "target",
                          "_blank",
                          1,
                          "font-weight-bold",
                          "ml-1",
                        ],
                        [
                          1,
                          "nav",
                          "nav-footer",
                          "justify-content-center",
                          "justify-content-xl-end",
                        ],
                        ["href", "#", "target", "_blank", 1, "nav-link"],
                        [
                          "licenseId",
                          "11082047",
                          3,
                          "visitor",
                          "params",
                          "onChatLoaded",
                          "onChatWindowOpened",
                          "onChatWindowMinimized",
                        ],
                        ["liveChatWidget", ""],
                        [
                          "aria-labelledby",
                          "navbarDropdownMenuLink2",
                          1,
                          "dropdown-menu",
                        ],
                        ["href", "javascript:void(0)", 1, "dropdown-item"],
                        [
                          "width",
                          "17px",
                          "height",
                          "15px",
                          "src",
                          "assets/img/icons/flags/GB.png",
                        ],
                        [
                          "href",
                          "javascript:void(0)",
                          1,
                          "dropdown-item",
                          "active",
                        ],
                      ],
                      template: function (t, n) {
                        1 & t &&
                          (u.Vb(0, "nav", 0),
                          u.Vb(1, "div", 1),
                          u.Vb(2, "a", 2),
                          u.dc("click", function (t) {
                            return n.navigatePage("home");
                          }),
                          u.Qb(3, "img", 3),
                          u.Ub(),
                          u.Vb(4, "button", 4),
                          u.dc("click", function (t) {
                            return (n.isCollapsed = !n.isCollapsed);
                          }),
                          u.Qb(5, "span", 5),
                          u.Ub(),
                          u.Vb(6, "div", 6),
                          u.Vb(7, "div", 7),
                          u.Vb(8, "div", 8),
                          u.Vb(9, "div", 9),
                          u.Vb(10, "a", 10),
                          u.dc("click", function (t) {
                            return n.navigatePage("home");
                          }),
                          u.Qb(11, "img", 11),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(12, "div", 12),
                          u.Vb(13, "button", 13),
                          u.dc("click", function (t) {
                            return (n.isCollapsed = !n.isCollapsed);
                          }),
                          u.Qb(14, "span"),
                          u.Qb(15, "span"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(16, "ul", 14),
                          u.Vb(17, "li", 15),
                          u.Vb(18, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("home");
                          }),
                          u.Vb(19, "span", 17),
                          u.Kc(20, "Menu Utama"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(21, "li", 15),
                          u.Vb(22, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("faq");
                          }),
                          u.Vb(23, "span", 17),
                          u.Kc(24, "Soalan Lazim"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(25, "li", 15),
                          u.Vb(26, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("about-us");
                          }),
                          u.Vb(27, "span", 17),
                          u.Kc(28, "Mengenai Kami"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Qb(29, "hr", 18),
                          u.Vb(30, "ul", 19),
                          u.Vb(31, "li", 20),
                          u.Vb(32, "a", 21),
                          u.Qb(33, "i", 22),
                          u.Vb(34, "span", 23),
                          u.Kc(35, "Facebook"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(36, "li", 20),
                          u.Vb(37, "a", 24),
                          u.Qb(38, "i", 25),
                          u.Vb(39, "span", 23),
                          u.Kc(40, "Instagram"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(41, "li", 20),
                          u.Vb(42, "a", 26),
                          u.Qb(43, "i", 27),
                          u.Vb(44, "span", 23),
                          u.Kc(45, "Twitter"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(46, "li", 20),
                          u.Vb(47, "div", 28),
                          u.Vb(48, "a", 29),
                          u.Qb(49, "img", 30),
                          u.Ub(),
                          u.Ic(50, L, 9, 0, "ul", 31),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(51, "li", 32),
                          u.Vb(52, "a", 33),
                          u.dc("click", function (t) {
                            return n.navigatePage("login");
                          }),
                          u.Vb(53, "span", 34),
                          u.Qb(54, "i", 35),
                          u.Ub(),
                          u.Vb(55, "span", 36),
                          u.Kc(56, "\xa0\xa0Log Masuk"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(57, "div", 37),
                          u.Vb(58, "section", 38),
                          u.Vb(59, "div", 1),
                          u.Vb(60, "div", 39),
                          u.Vb(61, "div", 40),
                          u.Vb(62, "h1", 41),
                          u.Kc(63, "Soalan Lazim Mengenai Portal Selangor"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(64, "div", 42),
                          u.Vb(65, "div", 43),
                          u.Vb(66, "div", 44),
                          u.Vb(67, "accordion", 45),
                          u.Vb(68, "accordion-group", 46),
                          u.Vb(69, "h5", 47),
                          u.Kc(70, " 1. Apakah itu Portal Selangor? "),
                          u.Ub(),
                          u.Kc(
                            71,
                            " Portal Selangor adalah singkatan untuk Portal Rasmi Kerajaan Negeri Selangor. Portal Selangor merupakan gerbang utama kepada informasi dan perkhidmatan Kerajaan Negeri Selangor melalui Internet. "
                          ),
                          u.Ub(),
                          u.Vb(72, "accordion-group"),
                          u.Vb(73, "h5", 47),
                          u.Kc(74, " 2. Mengapa Portal Selangor diwujudkan? "),
                          u.Ub(),
                          u.Vb(75, "p"),
                          u.Kc(
                            76,
                            " Pada masa kini, kebanyakan maklumat dan perkhidmatan Kerajaan Negeri Selangor telah disediakan secara online dan Portal Selangor diwujudkan untuk memberi kemudahan kepada orang ramai mencari maklumat dan perkhidmatan yang disediakan. "
                          ),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(77, "accordion-group"),
                          u.Vb(78, "h5", 47),
                          u.Kc(
                            79,
                            " 3. Siapakah yang dibenarkan melayari dan menggunakan Portal Selangor? "
                          ),
                          u.Ub(),
                          u.Vb(80, "p"),
                          u.Kc(
                            81,
                            " Umumnya, Portal Selangor boleh dicapai oleh semua lapisan masyarakat. "
                          ),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(82, "accordion-group"),
                          u.Vb(83, "h5", 47),
                          u.Kc(
                            84,
                            " 4. Apakah dasar privasi Portal? Adakah penggunaan atau akses saya diawasi dan direkodkan? "
                          ),
                          u.Ub(),
                          u.Vb(85, "p"),
                          u.Kc(
                            86,
                            ' Segala akses dan penggunaan anda ke atas Portal Selangor tidak akan direkodkan. Untuk maklumat lanjut, sila layari "Dasar Privasi dan Dasar Keselamatan". '
                          ),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(87, "accordion-group"),
                          u.Vb(88, "h5", 47),
                          u.Kc(
                            89,
                            " 5. Bagaimanakah cara untuk saya mengakses Portal Selangor melalui telefon pintar/PDA? "
                          ),
                          u.Ub(),
                          u.Kc(
                            90,
                            " Portal Selangor boleh diakses melalui telefon pintar/PDA dengan mengakses www.selangor.gov.my. Paparan versi Mobile yang responsif akan disesuaikan. "
                          ),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(91, "footer", 48),
                          u.Vb(92, "div", 1),
                          u.Vb(93, "div", 8),
                          u.Vb(94, "div", 49),
                          u.Vb(95, "span", 50),
                          u.Kc(96, "Hubungi Kami"),
                          u.Ub(),
                          u.Qb(97, "br"),
                          u.Qb(98, "br"),
                          u.Vb(99, "span"),
                          u.Qb(100, "i", 51),
                          u.Kc(101, "\xa0\xa0webadmin@selangor.gov.my"),
                          u.Ub(),
                          u.Qb(102, "br"),
                          u.Vb(103, "span"),
                          u.Qb(104, "i", 52),
                          u.Kc(105, "\xa0\xa0Tel 1: (6)03-55447000"),
                          u.Ub(),
                          u.Qb(106, "br"),
                          u.Vb(107, "span"),
                          u.Qb(108, "i", 52),
                          u.Kc(109, "\xa0\xa0Tel 2: (6)03-55212347"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(110, "div", 49),
                          u.Vb(111, "span", 50),
                          u.Kc(112, "Waktu Operasi "),
                          u.Ub(),
                          u.Qb(113, "br"),
                          u.Qb(114, "br"),
                          u.Vb(115, "span"),
                          u.Kc(116, "Hari: Isnin - Jumaat"),
                          u.Ub(),
                          u.Qb(117, "br"),
                          u.Vb(118, "span"),
                          u.Kc(119, "Servis Kaunter: 8.15 AM - 4.15 PM"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(120, "div", 49),
                          u.Vb(121, "span", 50),
                          u.Kc(122, "Alamat"),
                          u.Ub(),
                          u.Qb(123, "br"),
                          u.Qb(124, "br"),
                          u.Vb(125, "span"),
                          u.Qb(126, "i", 53),
                          u.Kc(
                            127,
                            "\xa0\xa0Pejabat Setiausaha Kerajaan Negeri Selangor,"
                          ),
                          u.Qb(128, "br"),
                          u.Kc(
                            129,
                            " Bangunan Sultan Salahuddin Abdul Aziz Shah,"
                          ),
                          u.Qb(130, "br"),
                          u.Kc(131, " 40503 Shah Alam,"),
                          u.Qb(132, "br"),
                          u.Kc(133, " Selangor Darul Ehsan. "),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Qb(134, "br"),
                          u.Qb(135, "hr"),
                          u.Qb(136, "br"),
                          u.Vb(137, "div", 54),
                          u.Vb(138, "div", 55),
                          u.Vb(139, "div", 56),
                          u.Kc(140),
                          u.ic(141, "date"),
                          u.Vb(142, "a", 57),
                          u.Kc(143, "TLDM - MCS"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(144, "div", 55),
                          u.Vb(145, "ul", 58),
                          u.Vb(146, "li", 15),
                          u.Vb(147, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("faq");
                          }),
                          u.Vb(148, "span", 17),
                          u.Kc(149, "Soalan Lazim"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(150, "li", 15),
                          u.Vb(151, "a", 59),
                          u.Kc(152, "Mengenai Kami"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(153, "livechat-widget", 60, 61),
                          u.dc("onChatLoaded", function (t) {
                            return n.onChatLoaded(t);
                          })("onChatWindowOpened", function (t) {
                            return n.onChatWindowOpened();
                          })("onChatWindowMinimized", function (t) {
                            return n.onChatWindowMinimized();
                          }),
                          u.Ub(),
                          u.Ub(),
                          u.Ub()),
                          2 & t &&
                            (u.Cb(4),
                            u.Db("aria-expanded", !n.isCollapsed),
                            u.Cb(63),
                            u.oc("isAnimated", !0),
                            u.Cb(73),
                            u.Mc(" \xa9 ", u.kc(141, 5, n.test, "yyyy"), " "),
                            u.Cb(13),
                            u.oc("visitor", n.visitor)("params", n.params));
                      },
                      directives: [s.f, C.a, i.d, i.g, i.e, i.a, i.c, K],
                      pipes: [a.e],
                      styles: [""],
                    })),
                    t
                  );
                })(),
              },
              {
                path: "about-us",
                component: (function () {
                  function t(t) {
                    (this.router = t),
                      (this.isLiveChatWidgetLoaded = !1),
                      (this.test = new Date()),
                      (this.isCollapsed = !0),
                      (this.visitor = {
                        name: "John Doe",
                        email: "john@doe.com",
                      }),
                      (this.params = [
                        { name: "Login", value: "joe_public" },
                        { name: "Account ID", value: "ABCD1234" },
                        { name: "Total order value", value: "$123" },
                      ]);
                  }
                  return (
                    (t.prototype.ngOnInit = function () {}),
                    (t.prototype.selectEvent = function (t) {}),
                    (t.prototype.onChangeSearch = function (t) {}),
                    (t.prototype.onFocused = function (t) {}),
                    (t.prototype.navigatePage = function (t) {
                      return "home" == t
                        ? this.router.navigate(["/global/landing_page"])
                        : "manual" == t
                        ? this.router.navigate(["/user-portal/user-manual"])
                        : "faq" == t
                        ? this.router.navigate(["global/faq"])
                        : "brochure" == t
                        ? this.router.navigate(["/user-portal/brochure"])
                        : "about-us" == t
                        ? this.router.navigate(["/global/about-us"])
                        : "complaint" == t
                        ? this.router.navigate(["/user-portal/complaint"])
                        : "login" == t
                        ? this.router.navigate(["/auth/login"])
                        : void 0;
                    }),
                    (t.prototype.onChatLoaded = function (t) {
                      (this.liveChatApi = t),
                        (this.isLiveChatWidgetLoaded = !0);
                    }),
                    (t.prototype.onChatWindowMinimized = function () {
                      console.log("minimized");
                    }),
                    (t.prototype.onChatWindowOpened = function () {
                      console.log("opened");
                    }),
                    (t.prototype.openChatWindow = function () {
                      this.isLiveChatWidgetLoaded &&
                        this.liveChatWidget.openChatWindow();
                    }),
                    (t.prototype.hideChatWindow = function () {
                      this.isLiveChatWidgetLoaded &&
                        this.liveChatWidget.minimizeChatWindow();
                    }),
                    (t.ɵfac = function (n) {
                      return new (n || t)(u.Pb(s.e));
                    }),
                    (t.ɵcmp = u.Jb({
                      type: t,
                      selectors: [["app-about-us"]],
                      viewQuery: function (t, n) {
                        var e;
                        1 & t && u.Pc(W, !0),
                          2 & t &&
                            u.wc((e = u.ec())) &&
                            (n.liveChatWidget = e.first);
                      },
                      decls: 149,
                      vars: 7,
                      consts: [
                        [
                          "id",
                          "navbar-main",
                          1,
                          "navbar",
                          "navbar-horizontal",
                          "navbar-main",
                          "navbar-expand-lg",
                          "navbar-dark",
                          "bg-secondary",
                        ],
                        [1, "container"],
                        [1, "navbar-brand", 2, "cursor", "pointer", 3, "click"],
                        ["src", "assets/img/logo/tldm-logo.png"],
                        [
                          "type",
                          "button",
                          "data-toggle",
                          "collapse",
                          "data-target",
                          "#navbar-collapse",
                          "aria-expanded",
                          "false",
                          "aria-label",
                          "Toggle navigation",
                          "aria-controls",
                          "collapseBasic",
                          1,
                          "navbar-toggler",
                          3,
                          "click",
                        ],
                        [1, "navbar-toggler-icon"],
                        [
                          "id",
                          "collapseBasic",
                          1,
                          "navbar-collapse",
                          "navbar-custom-collapse",
                          "collapse",
                        ],
                        [1, "navbar-collapse-header"],
                        [1, "row"],
                        [1, "col-6", "collapse-brand"],
                        [3, "click"],
                        ["src", "assets/img/brand/blue.png"],
                        [1, "col-6", "collapse-close"],
                        [
                          "type",
                          "button",
                          "data-toggle",
                          "collapse",
                          "data-target",
                          "#navbar-collapse",
                          "aria-controls",
                          "navbar-collapse",
                          "aria-expanded",
                          "false",
                          "aria-label",
                          "Toggle navigation",
                          1,
                          "navbar-toggler",
                          3,
                          "click",
                        ],
                        [1, "navbar-nav", "mr-auto"],
                        [1, "nav-item", 2, "cursor", "pointer"],
                        [
                          "routerLinkActive",
                          "active",
                          1,
                          "nav-link",
                          "text-dark",
                          2,
                          "cursor",
                          "pointer",
                          3,
                          "click",
                        ],
                        [1, "nav-link-inner--text"],
                        [1, "d-lg-none"],
                        [
                          1,
                          "navbar-nav",
                          "align-items-lg-center",
                          "ml-lg-auto",
                        ],
                        [1, "nav-item"],
                        [
                          "href",
                          "https://www.facebook.com/creativetim",
                          "target",
                          "_blank",
                          "tooltip",
                          "Like us on Facebook",
                          1,
                          "nav-link",
                          "nav-link-icon",
                        ],
                        [1, "fab", "fa-facebook-square", "text-cyan"],
                        [1, "nav-link-inner--text", "d-lg-none", "text-dark"],
                        [
                          "href",
                          "https://www.instagram.com/creativetimofficial",
                          "target",
                          "_blank",
                          "tooltip",
                          "Follow us on Instagram",
                          1,
                          "nav-link",
                          "nav-link-icon",
                        ],
                        [1, "fab", "fa-instagram", "text-pink"],
                        [
                          "href",
                          "https://twitter.com/creativetim",
                          "target",
                          "_blank",
                          "tooltip",
                          "Follow us on Twitter",
                          1,
                          "nav-link",
                          "nav-link-icon",
                        ],
                        [1, "fab", "fa-twitter-square", "text-blue"],
                        ["dropdown", "", 1, "dropdown"],
                        [
                          "href",
                          "javascript:void(0)",
                          "id",
                          "navbarDropdownMenuLink2",
                          "dropdownToggle",
                          "",
                        ],
                        [
                          "width",
                          "17px",
                          "height",
                          "15px",
                          "src",
                          "assets/img/icons/flags/MY.png",
                        ],
                        [
                          "aria-labelledby",
                          "navbarDropdownMenuLink2",
                          "class",
                          "dropdown-menu",
                          4,
                          "dropdownMenu",
                        ],
                        [
                          1,
                          "nav-item",
                          "d-none",
                          "text-white",
                          "d-lg-block",
                          "ml-lg-4",
                        ],
                        [2, "cursor", "pointer", 3, "click"],
                        [1, "btn-inner--icon"],
                        [1, "fas", "fa-user", "text-dark"],
                        [1, "nav-link-inner--text", "text-dark"],
                        [1, "main-content"],
                        [1, "section", "section-lg", "pt-lg-0", "mt-3", "pb-4"],
                        [1, "row", "justify-content-center"],
                        [1, "text-center", "text-white", "pt-4", "pb-5"],
                        [1, "text-white"],
                        [1, "card"],
                        [1, "card-header"],
                        [1, "card-body"],
                        ["id", "footer-main", 1, "py-5", "bg-secondary"],
                        [1, "col-md-4", "text-dark"],
                        [2, "font-size", "large", "font-weight", "bold"],
                        [1, "fas", "fa-envelope", "text-yellow"],
                        [1, "fas", "fa-phone", "text-brown"],
                        [1, "fas", "fa-map-marker-alt", "text-danger"],
                        [
                          1,
                          "row",
                          "align-items-center",
                          "justify-content-xl-between",
                        ],
                        [1, "col-xl-6"],
                        [
                          1,
                          "copyright",
                          "text-center",
                          "text-xl-left",
                          "text-muted",
                        ],
                        [
                          "href",
                          "#",
                          "target",
                          "_blank",
                          1,
                          "font-weight-bold",
                          "ml-1",
                        ],
                        [
                          1,
                          "nav",
                          "nav-footer",
                          "justify-content-center",
                          "justify-content-xl-end",
                        ],
                        ["href", "#", "target", "_blank", 1, "nav-link"],
                        [
                          "licenseId",
                          "11082047",
                          3,
                          "visitor",
                          "params",
                          "onChatLoaded",
                          "onChatWindowOpened",
                          "onChatWindowMinimized",
                        ],
                        ["liveChatWidget", ""],
                        [
                          "aria-labelledby",
                          "navbarDropdownMenuLink2",
                          1,
                          "dropdown-menu",
                        ],
                        ["href", "javascript:void(0)", 1, "dropdown-item"],
                        [
                          "width",
                          "17px",
                          "height",
                          "15px",
                          "src",
                          "assets/img/icons/flags/GB.png",
                        ],
                        [
                          "href",
                          "javascript:void(0)",
                          1,
                          "dropdown-item",
                          "active",
                        ],
                      ],
                      template: function (t, n) {
                        1 & t &&
                          (u.Vb(0, "nav", 0),
                          u.Vb(1, "div", 1),
                          u.Vb(2, "a", 2),
                          u.dc("click", function (t) {
                            return n.navigatePage("home");
                          }),
                          u.Qb(3, "img", 3),
                          u.Ub(),
                          u.Vb(4, "button", 4),
                          u.dc("click", function (t) {
                            return (n.isCollapsed = !n.isCollapsed);
                          }),
                          u.Qb(5, "span", 5),
                          u.Ub(),
                          u.Vb(6, "div", 6),
                          u.Vb(7, "div", 7),
                          u.Vb(8, "div", 8),
                          u.Vb(9, "div", 9),
                          u.Vb(10, "a", 10),
                          u.dc("click", function (t) {
                            return n.navigatePage("home");
                          }),
                          u.Qb(11, "img", 11),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(12, "div", 12),
                          u.Vb(13, "button", 13),
                          u.dc("click", function (t) {
                            return (n.isCollapsed = !n.isCollapsed);
                          }),
                          u.Qb(14, "span"),
                          u.Qb(15, "span"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(16, "ul", 14),
                          u.Vb(17, "li", 15),
                          u.Vb(18, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("home");
                          }),
                          u.Vb(19, "span", 17),
                          u.Kc(20, "Menu Utama"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(21, "li", 15),
                          u.Vb(22, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("faq");
                          }),
                          u.Vb(23, "span", 17),
                          u.Kc(24, "Soalan Lazim"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(25, "li", 15),
                          u.Vb(26, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("about-us");
                          }),
                          u.Vb(27, "span", 17),
                          u.Kc(28, "Mengenai Kami"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Qb(29, "hr", 18),
                          u.Vb(30, "ul", 19),
                          u.Vb(31, "li", 20),
                          u.Vb(32, "a", 21),
                          u.Qb(33, "i", 22),
                          u.Vb(34, "span", 23),
                          u.Kc(35, "Facebook"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(36, "li", 20),
                          u.Vb(37, "a", 24),
                          u.Qb(38, "i", 25),
                          u.Vb(39, "span", 23),
                          u.Kc(40, "Instagram"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(41, "li", 20),
                          u.Vb(42, "a", 26),
                          u.Qb(43, "i", 27),
                          u.Vb(44, "span", 23),
                          u.Kc(45, "Twitter"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(46, "li", 20),
                          u.Vb(47, "div", 28),
                          u.Vb(48, "a", 29),
                          u.Qb(49, "img", 30),
                          u.Ub(),
                          u.Ic(50, I, 9, 0, "ul", 31),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(51, "li", 32),
                          u.Vb(52, "a", 33),
                          u.dc("click", function (t) {
                            return n.navigatePage("login");
                          }),
                          u.Vb(53, "span", 34),
                          u.Qb(54, "i", 35),
                          u.Ub(),
                          u.Vb(55, "span", 36),
                          u.Kc(56, "\xa0\xa0Log Masuk"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(57, "div", 37),
                          u.Vb(58, "section", 38),
                          u.Vb(59, "div", 1),
                          u.Vb(60, "div", 39),
                          u.Vb(61, "div", 40),
                          u.Vb(62, "h1", 41),
                          u.Kc(63, "Soalan Lazim"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(64, "div", 42),
                          u.Vb(65, "div", 43),
                          u.Vb(66, "h3"),
                          u.Kc(67, "Apakah itu Portal Selangor ?"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(68, "div", 44),
                          u.Kc(
                            69,
                            " Portal Selangor adalah singkatan untuk Portal Rasmi Kerajaan Negeri Selangor. Portal Selangor merupakan gerbang utama kepada informasi dan perkhidmatan Kerajaan Negeri Selangor melalui Internet. "
                          ),
                          u.Ub(),
                          u.Vb(70, "div", 43),
                          u.Vb(71, "h3"),
                          u.Kc(72, "Mengapa Portal Selangor diwujudkan?"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(73, "div", 44),
                          u.Kc(
                            74,
                            " Pada masa kini, kebanyakan maklumat dan perkhidmatan Kerajaan Negeri Selangor telah disediakan secara online dan Portal Selangor diwujudkan untuk memberi kemudahan kepada orang ramai mencari maklumat dan perkhidmatan yang disediakan. "
                          ),
                          u.Ub(),
                          u.Vb(75, "div", 43),
                          u.Vb(76, "h3"),
                          u.Kc(
                            77,
                            " Siapakah yang dibenarkan melayari dan menggunakan Portal Selangor? "
                          ),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(78, "div", 44),
                          u.Kc(
                            79,
                            " Umumnya, Portal Selangor boleh dicapai oleh semua lapisan masyarakat. "
                          ),
                          u.Ub(),
                          u.Vb(80, "div", 43),
                          u.Vb(81, "h3"),
                          u.Kc(
                            82,
                            " Apakah dasar privasi Portal? Adakah penggunaan atau akses saya diawasi dan direkodkan? "
                          ),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(83, "div", 44),
                          u.Kc(
                            84,
                            ' Segala akses dan penggunaan anda ke atas Portal Selangor tidak akan direkodkan. Untuk maklumat lanjut, sila layari "Dasar Privasi dan Dasar Keselamatan". '
                          ),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(85, "footer", 45),
                          u.Vb(86, "div", 1),
                          u.Vb(87, "div", 8),
                          u.Vb(88, "div", 46),
                          u.Vb(89, "span", 47),
                          u.Kc(90, "Hubungi Kami"),
                          u.Ub(),
                          u.Qb(91, "br"),
                          u.Qb(92, "br"),
                          u.Vb(93, "span"),
                          u.Qb(94, "i", 48),
                          u.Kc(95, "\xa0\xa0webadmin@selangor.gov.my"),
                          u.Ub(),
                          u.Qb(96, "br"),
                          u.Vb(97, "span"),
                          u.Qb(98, "i", 49),
                          u.Kc(99, "\xa0\xa0Tel 1: (6)03-55447000"),
                          u.Ub(),
                          u.Qb(100, "br"),
                          u.Vb(101, "span"),
                          u.Qb(102, "i", 49),
                          u.Kc(103, "\xa0\xa0Tel 2: (6)03-55212347"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(104, "div", 46),
                          u.Vb(105, "span", 47),
                          u.Kc(106, "Waktu Operasi "),
                          u.Ub(),
                          u.Qb(107, "br"),
                          u.Qb(108, "br"),
                          u.Vb(109, "span"),
                          u.Kc(110, "Hari: Isnin - Jumaat"),
                          u.Ub(),
                          u.Qb(111, "br"),
                          u.Vb(112, "span"),
                          u.Kc(113, "Servis Kaunter: 8.15 AM - 4.15 PM"),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(114, "div", 46),
                          u.Vb(115, "span", 47),
                          u.Kc(116, "Alamat"),
                          u.Ub(),
                          u.Qb(117, "br"),
                          u.Qb(118, "br"),
                          u.Vb(119, "span"),
                          u.Qb(120, "i", 50),
                          u.Kc(
                            121,
                            "\xa0\xa0Pejabat Setiausaha Kerajaan Negeri Selangor,"
                          ),
                          u.Qb(122, "br"),
                          u.Kc(
                            123,
                            " Bangunan Sultan Salahuddin Abdul Aziz Shah,"
                          ),
                          u.Qb(124, "br"),
                          u.Kc(125, " 40503 Shah Alam,"),
                          u.Qb(126, "br"),
                          u.Kc(127, " Selangor Darul Ehsan. "),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Qb(128, "br"),
                          u.Qb(129, "hr"),
                          u.Qb(130, "br"),
                          u.Vb(131, "div", 51),
                          u.Vb(132, "div", 52),
                          u.Vb(133, "div", 53),
                          u.Kc(134),
                          u.ic(135, "date"),
                          u.Vb(136, "a", 54),
                          u.Kc(137, "TLDM - MCS"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(138, "div", 52),
                          u.Vb(139, "ul", 55),
                          u.Vb(140, "li", 15),
                          u.Vb(141, "a", 16),
                          u.dc("click", function (t) {
                            return n.navigatePage("faq");
                          }),
                          u.Vb(142, "span", 17),
                          u.Kc(143, "Soalan Lazim"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(144, "li", 15),
                          u.Vb(145, "a", 56),
                          u.Kc(146, "Mengenai Kami"),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Ub(),
                          u.Vb(147, "livechat-widget", 57, 58),
                          u.dc("onChatLoaded", function (t) {
                            return n.onChatLoaded(t);
                          })("onChatWindowOpened", function (t) {
                            return n.onChatWindowOpened();
                          })("onChatWindowMinimized", function (t) {
                            return n.onChatWindowMinimized();
                          }),
                          u.Ub(),
                          u.Ub(),
                          u.Ub()),
                          2 & t &&
                            (u.Cb(4),
                            u.Db("aria-expanded", !n.isCollapsed),
                            u.Cb(130),
                            u.Mc(" \xa9 ", u.kc(135, 4, n.test, "yyyy"), " "),
                            u.Cb(13),
                            u.oc("visitor", n.visitor)("params", n.params));
                      },
                      directives: [s.f, C.a, i.d, i.g, i.e, K],
                      pipes: [a.e],
                      styles: [""],
                    })),
                    t
                  );
                })(),
              },
            ],
          },
        ],
        j = e("xYVA");
      e.d(n, "GlobalModule", function () {
        return O;
      });
      var O = (function () {
        function t() {}
        return (
          (t.ɵmod = u.Nb({ type: t })),
          (t.ɵinj = u.Mb({
            factory: function (n) {
              return new (n || t)();
            },
            imports: [
              [
                a.c,
                i.b.forRoot(),
                o.c.forRoot(),
                i.f.forRoot(),
                i.i.forRoot(),
                i.k.forRoot(),
                i.l.forRoot(),
                i.m.forRoot(),
                r.h,
                r.s,
                c.b,
                b.e,
                s.h.forChild(A),
                j.b,
                x.b.forRoot(),
                Q,
              ],
            ],
          })),
          t
        );
      })();
    },
  },
]);
