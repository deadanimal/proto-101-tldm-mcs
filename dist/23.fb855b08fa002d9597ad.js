(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    "R/Hu": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return d;
      }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return g;
        });
      var o = n("TYT/"),
        r = n("K9Ia"),
        i = n("Gi3i"),
        s = n("Valr");
      function a(t, e) {
        if ((1 & t && (o.Vb(0, "div", 3), o.Qb(1, "div", 4), o.Ub()), 2 & t)) {
          var n = o.hc(2);
          o.Hc("color", n.color),
            o.Cb(1),
            o.Hc("width", n.diameter)("height", n.diameter);
        }
      }
      function c(t, e) {
        if (
          (1 & t &&
            (o.Vb(0, "div", 5),
            o.Vb(1, "div", 6),
            o.Qb(2, "div", 7),
            o.Ub(),
            o.Ub()),
          2 & t)
        ) {
          var n = o.hc().ngIf,
            r = o.hc();
          o.Hc("color", r.color),
            o.Cb(1),
            o.Hc("background", r.color, o.Ib)("height", r.height)(
              "width",
              n + "%"
            ),
            o.Cb(1),
            o.Hc("height", r.height);
        }
      }
      function b(t, e) {
        if (
          (1 & t &&
            (o.Tb(0),
            o.Ic(1, a, 2, 6, "div", 1),
            o.Ic(2, c, 3, 10, "div", 2),
            o.Sb()),
          2 & t)
        ) {
          var n = o.hc();
          o.Cb(1),
            o.oc("ngIf", n.includeSpinner),
            o.Cb(1),
            o.oc("ngIf", n.includeBar);
        }
      }
      var g = (function () {
          function t(t) {
            (this.platformId = t),
              (this.progress$ = new r.a().pipe(Object(i.a)(0))),
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
              var e = this;
              Object(s.u)(this.platformId)
                ? (0 === t && this._pendingRequests > 0 && (t = 2),
                  (this._value = t),
                  this.progress$.next(t),
                  0 !== this._pendingRequests &&
                    (clearTimeout(this._incTimeout),
                    this._value > 0 &&
                      this._value < 100 &&
                      (this._incTimeout = setTimeout(function () {
                        return e.increment();
                      }, 250))))
                : (this._pendingRequests = 0);
            }),
            (t.prototype.increment = function (t) {
              void 0 === t && (t = 0), t > 0 && this.set(this._value + t);
              var e = this._value;
              (t =
                e >= 0 && e < 25
                  ? 3 * Math.random() + 3
                  : e >= 25 && e < 65
                  ? 3 * Math.random()
                  : e >= 65 && e < 90
                  ? 2 * Math.random()
                  : e >= 90 && e < 99
                  ? 0.5
                  : 0),
                this.set(this._value + t);
            }),
            (t.prototype.ngOnDestroy = function () {
              this.progress$.complete();
            }),
            (t.ngInjectableDef = Object(o.S)({
              factory: function () {
                return new t(Object(o.V)(o.B));
              },
              token: t,
              providedIn: "root",
            })),
            (t.ɵfac = function (e) {
              return new (e || t)(o.Zb(o.B));
            }),
            (t.ɵprov = o.Lb({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
              providedIn: "root",
            })),
            t
          );
        })(),
        u = (function () {
          function t(t) {
            (this.loader = t),
              (this.includeSpinner = !0),
              (this.includeBar = !0),
              (this.fixed = !0),
              (this.value = null);
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o.Pb(g));
            }),
            (t.ɵcmp = o.Jb({
              type: t,
              selectors: [["ngx-loading-bar"]],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && o.Gb("loading-bar-fixed", e.fixed);
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
              template: function (t, e) {
                1 & t &&
                  (o.Ic(0, b, 3, 2, "ng-container", 0), o.ic(1, "async")),
                  2 & t &&
                    o.oc(
                      "ngIf",
                      null !== e.value
                        ? e.value
                        : o.jc(1, 1, e.loader.progress$)
                    );
              },
              directives: [s.l],
              pipes: [s.b],
              styles: [
                "[_nghost-%COMP%]{position:relative;display:block}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{position:fixed}.loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   .loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{right:10px;left:unset}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:none;transition:350ms linear;color:#29d}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{transition:width 350ms;background:#29d;position:absolute;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{right:0;left:unset}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:none;position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{display:block;position:absolute;z-index:10002;top:5px;left:0}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}",
              ],
            })),
            t
          );
        })(),
        d = (function () {
          function t() {}
          return (
            (t.ɵmod = o.Nb({ type: t })),
            (t.ɵinj = o.Mb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[s.c]],
            })),
            t
          );
        })();
    },
    Yj9t: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("Valr"),
        r = n("QJY3"),
        i = n("oW1M"),
        s = n("R/Hu"),
        a = n("DUip"),
        c = n("imvL"),
        b = n("dICO"),
        g = n("TYT/");
      function u(t, e) {
        if (
          (1 & t &&
            (g.Vb(0, "div"),
            g.Vb(1, "p", 24),
            g.Vb(2, "span"),
            g.Kc(3),
            g.Ub(),
            g.Ub(),
            g.Ub()),
          2 & t)
        ) {
          var n = g.hc().$implicit;
          g.Cb(3), g.Lc(n.message);
        }
      }
      function d(t, e) {
        if ((1 & t && (g.Tb(0), g.Ic(1, u, 4, 1, "div", 23), g.Sb()), 2 & t)) {
          var n = e.$implicit,
            o = g.hc();
          g.Cb(1),
            g.oc(
              "ngIf",
              o.resetForm.get("email").hasError(n.type) &&
                (o.resetForm.get("email").dirty ||
                  o.resetForm.get("email").touched)
            );
        }
      }
      var l = function (t) {
        return { focused: t };
      };
      function p(t, e) {
        if (
          (1 & t &&
            (g.Vb(0, "div"),
            g.Vb(1, "p", 32),
            g.Vb(2, "span"),
            g.Kc(3),
            g.Ub(),
            g.Ub(),
            g.Ub()),
          2 & t)
        ) {
          var n = g.hc().$implicit;
          g.Cb(3), g.Lc(n.message);
        }
      }
      function m(t, e) {
        if ((1 & t && (g.Tb(0), g.Ic(1, p, 4, 1, "div", 31), g.Sb()), 2 & t)) {
          var n = e.$implicit,
            o = g.hc();
          g.Cb(1),
            g.oc(
              "ngIf",
              o.loginForm.get("username").hasError(n.type) &&
                (o.loginForm.get("username").dirty ||
                  o.loginForm.get("username").touched)
            );
        }
      }
      function f(t, e) {
        if (
          (1 & t &&
            (g.Vb(0, "div"),
            g.Vb(1, "p", 32),
            g.Vb(2, "span"),
            g.Kc(3),
            g.Ub(),
            g.Ub(),
            g.Ub()),
          2 & t)
        ) {
          var n = g.hc().$implicit;
          g.Cb(3), g.Lc(n.message);
        }
      }
      function h(t, e) {
        if ((1 & t && (g.Tb(0), g.Ic(1, f, 4, 1, "div", 31), g.Sb()), 2 & t)) {
          var n = e.$implicit,
            o = g.hc();
          g.Cb(1),
            g.oc(
              "ngIf",
              o.loginForm.get("password").hasError(n.type) &&
                (o.loginForm.get("password").dirty ||
                  o.loginForm.get("password").touched)
            );
        }
      }
      var v = function (t) {
        return { focused: t };
      };
      function y(t, e) {
        if (
          (1 & t &&
            (g.Vb(0, "div"),
            g.Vb(1, "p", 37),
            g.Vb(2, "span"),
            g.Kc(3),
            g.Ub(),
            g.Ub(),
            g.Ub()),
          2 & t)
        ) {
          var n = g.hc().$implicit;
          g.Cb(3), g.Lc(n.message);
        }
      }
      function U(t, e) {
        if ((1 & t && (g.Tb(0), g.Ic(1, y, 4, 1, "div", 36), g.Sb()), 2 & t)) {
          var n = e.$implicit,
            o = g.hc();
          g.Cb(1),
            g.oc(
              "ngIf",
              o.registerForm.get("username").hasError(n.type) &&
                (o.registerForm.get("username").dirty ||
                  o.registerForm.get("username").touched)
            );
        }
      }
      function C(t, e) {
        if (
          (1 & t &&
            (g.Vb(0, "div"),
            g.Vb(1, "p", 37),
            g.Vb(2, "span"),
            g.Kc(3),
            g.Ub(),
            g.Ub(),
            g.Ub()),
          2 & t)
        ) {
          var n = g.hc().$implicit;
          g.Cb(3), g.Lc(n.message);
        }
      }
      function V(t, e) {
        if ((1 & t && (g.Tb(0), g.Ic(1, C, 4, 1, "div", 36), g.Sb()), 2 & t)) {
          var n = e.$implicit,
            o = g.hc();
          g.Cb(1),
            g.oc(
              "ngIf",
              o.registerForm.get("password1").hasError(n.type) &&
                (o.registerForm.get("password1").dirty ||
                  o.registerForm.get("password1").touched)
            );
        }
      }
      function P(t, e) {
        if (
          (1 & t &&
            (g.Vb(0, "div"),
            g.Vb(1, "p", 37),
            g.Vb(2, "span"),
            g.Kc(3),
            g.Ub(),
            g.Ub(),
            g.Ub()),
          2 & t)
        ) {
          var n = g.hc().$implicit;
          g.Cb(3), g.Lc(n.message);
        }
      }
      function w(t, e) {
        if ((1 & t && (g.Tb(0), g.Ic(1, P, 4, 1, "div", 36), g.Sb()), 2 & t)) {
          var n = e.$implicit,
            o = g.hc();
          g.Cb(1),
            g.oc(
              "ngIf",
              o.registerForm.get("password2").hasError(n.type) &&
                (o.registerForm.get("password2").dirty ||
                  o.registerForm.get("password2").touched)
            );
        }
      }
      var x = function (t) {
          return { focused: t };
        },
        _ = [
          {
            path: "",
            children: [
              {
                path: "forgot",
                component: (function () {
                  function t(t, e, n, o, r) {
                    (this.authService = t),
                      (this.notifyService = e),
                      (this.formBuilder = n),
                      (this.loadingBar = o),
                      (this.router = r),
                      (this.imgLogo = "assets/img/logo/tldm-logo.png"),
                      (this.imgBg = "assets/img/default/bg-img-it.jpg"),
                      (this.resetFormMessages = {
                        email: [
                          { type: "required", message: "Email is required" },
                          {
                            type: "email",
                            message: "Please enter a valid email",
                          },
                        ],
                      });
                  }
                  return (
                    (t.prototype.ngOnInit = function () {
                      this.resetForm = this.formBuilder.group({
                        email: new r.d(
                          "",
                          r.t.compose([r.t.required, r.t.email])
                        ),
                      });
                    }),
                    (t.prototype.reset = function () {
                      this.loadingBar.start(),
                        this.loadingBar.complete(),
                        this.successMessage();
                    }),
                    (t.prototype.navigatePage = function (t) {
                      if ("login" == t)
                        return this.router.navigate(["/auth/login"]);
                    }),
                    (t.prototype.successMessage = function () {
                      this.notifyService.openToastr(
                        "Success",
                        "A reset link has been sent to your email"
                      );
                    }),
                    (t.ɵfac = function (e) {
                      return new (e || t)(
                        g.Pb(c.a),
                        g.Pb(b.a),
                        g.Pb(r.c),
                        g.Pb(s.c),
                        g.Pb(a.e)
                      );
                    }),
                    (t.ɵcmp = g.Jb({
                      type: t,
                      selectors: [["app-forgot"]],
                      decls: 26,
                      vars: 6,
                      consts: [
                        [1, "main-content", "auth-content"],
                        [1, "container", "mt-8", "pb-9"],
                        [1, "row", "justify-content-center"],
                        [1, "col-lg-5", "col-md-7"],
                        [1, "card", "bg-secondary", "border-0", "mb-0"],
                        [1, "card-header", "bg-transparent"],
                        [1, "logo-box"],
                        [1, "logo", "pt-2", "pb-2", 3, "src"],
                        [1, "card-body", "px-lg-5", "py-lg-5"],
                        [3, "formGroup"],
                        [1, "form-group", "mb-3", 3, "ngClass"],
                        [1, "input-group", "input-group-alternative"],
                        [1, "input-group-prepend"],
                        [1, "input-group-text", "bg-primary"],
                        [1, "fas", "fa-envelope", "text-white"],
                        [
                          "placeholder",
                          "Email",
                          "type",
                          "email",
                          "formControlName",
                          "email",
                          1,
                          "form-control",
                          "text-dark",
                          3,
                          "focus",
                          "blur",
                        ],
                        [4, "ngFor", "ngForOf"],
                        [1, "text-center"],
                        [
                          "type",
                          "button",
                          1,
                          "btn",
                          "btn-primary",
                          "btn-block",
                          "my-4",
                          3,
                          "click",
                        ],
                        [
                          "type",
                          "button",
                          1,
                          "btn",
                          "btn-icon",
                          "btn-outline-primary",
                          "btn-block",
                          "my-2",
                          3,
                          "click",
                        ],
                        [1, "btn-inner--icon"],
                        [1, "fas", "fa-angle-left"],
                        [1, "btn-inner--text"],
                        [4, "ngIf"],
                        [1, "error-message"],
                      ],
                      template: function (t, e) {
                        1 & t &&
                          (g.Qb(0, "ngx-loading-bar"),
                          g.Vb(1, "div", 0),
                          g.Vb(2, "div", 1),
                          g.Vb(3, "div", 2),
                          g.Vb(4, "div", 3),
                          g.Vb(5, "div", 4),
                          g.Vb(6, "div", 5),
                          g.Vb(7, "div", 6),
                          g.Qb(8, "img", 7),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(9, "div", 8),
                          g.Vb(10, "form", 9),
                          g.Vb(11, "div", 10),
                          g.Vb(12, "div", 11),
                          g.Vb(13, "div", 12),
                          g.Vb(14, "span", 13),
                          g.Qb(15, "i", 14),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(16, "input", 15),
                          g.dc("focus", function (t) {
                            return (e.focusEmail = !0);
                          })("blur", function (t) {
                            return (e.focusEmail = !1);
                          }),
                          g.Ub(),
                          g.Ub(),
                          g.Ic(17, d, 2, 1, "ng-container", 16),
                          g.Ub(),
                          g.Vb(18, "div", 17),
                          g.Vb(19, "button", 18),
                          g.dc("click", function (t) {
                            return e.reset();
                          }),
                          g.Kc(20, " Reset Password "),
                          g.Ub(),
                          g.Vb(21, "button", 19),
                          g.dc("click", function (t) {
                            return e.navigatePage("login");
                          }),
                          g.Vb(22, "span", 20),
                          g.Qb(23, "i", 21),
                          g.Ub(),
                          g.Vb(24, "span", 22),
                          g.Kc(25, "Login"),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub()),
                          2 & t &&
                            (g.Cb(8),
                            g.oc("src", e.imgLogo, g.Cc),
                            g.Cb(2),
                            g.oc("formGroup", e.resetForm),
                            g.Cb(1),
                            g.oc("ngClass", g.rc(4, l, !0 === e.focusEmail)),
                            g.Cb(6),
                            g.oc("ngForOf", e.resetFormMessages.email));
                      },
                      directives: [
                        s.a,
                        r.v,
                        r.n,
                        r.g,
                        o.j,
                        r.b,
                        r.m,
                        r.e,
                        o.k,
                        o.l,
                      ],
                      styles: [
                        ".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-color:#172b4d;background-image:url(bg-img-it.42621df5ef18d7362587.jpeg);background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}",
                      ],
                    })),
                    t
                  );
                })(),
              },
              {
                path: "login",
                component: (function () {
                  function t(t, e, n, o, r) {
                    (this.authService = t),
                      (this.notifyService = e),
                      (this.formBuilder = n),
                      (this.loadingBar = o),
                      (this.router = r),
                      (this.imgLogo = "assets/img/logo/tldm-logo.png"),
                      (this.imgBg = "assets/img/default/bg-img-it.jpg"),
                      (this.loginFormMessages = {
                        username: [
                          { type: "required", message: "Email is required" },
                          {
                            type: "email",
                            message: "Please enter a valid email",
                          },
                        ],
                        password: [
                          { type: "required", message: "Password is required" },
                          {
                            type: "minLength",
                            message: "Password must have at least 8 characters",
                          },
                        ],
                      });
                  }
                  return (
                    (t.prototype.ngOnInit = function () {
                      this.loginForm = this.formBuilder.group({
                        username: new r.d("", r.t.compose([r.t.required])),
                        password: new r.d(
                          "",
                          r.t.compose([r.t.required, r.t.minLength(8)])
                        ),
                      });
                    }),
                    (t.prototype.login = function () {
                      console.log(this.loginForm.value.username),
                        this.successMessage(),
                        "admin" == this.loginForm.value.username
                          ? this.navigatePage("dashboard-admin")
                          : "bus" == this.loginForm.value.username
                          ? this.navigatePage("dashboard-bus")
                          : "user" == this.loginForm.value.username &&
                            this.navigatePage("dashboard-user");
                    }),
                    (t.prototype.navigatePage = function (t) {
                      return "login" == t
                        ? this.router.navigate(["/auth/login"])
                        : "forgot" == t
                        ? this.router.navigate(["/auth/forgot"])
                        : "register" == t
                        ? this.router.navigate(["/auth/register"])
                        : "dashboard-admin" == t
                        ? this.router.navigate(["/admin/dashboard"])
                        : "dashboard-user" == t
                        ? this.router.navigate(["/user/dashboard"])
                        : "dashboard-bus" == t
                        ? this.router.navigate(["/bus/dashboard"])
                        : void 0;
                    }),
                    (t.prototype.successMessage = function () {
                      this.notifyService.openToastr(
                        "Log In",
                        "Logging in right now"
                      );
                    }),
                    (t.prototype.errorMessage = function () {
                      this.notifyService.openToastrHttp(
                        "Error",
                        "Wrong Username or password.Please Try Again"
                      );
                    }),
                    (t.ɵfac = function (e) {
                      return new (e || t)(
                        g.Pb(c.a),
                        g.Pb(b.a),
                        g.Pb(r.c),
                        g.Pb(s.c),
                        g.Pb(a.e)
                      );
                    }),
                    (t.ɵcmp = g.Jb({
                      type: t,
                      selectors: [["app-login"]],
                      decls: 43,
                      vars: 10,
                      consts: [
                        [1, "main-content", "auth-content"],
                        [1, "container", "mt-8", "pb-9"],
                        [1, "row", "justify-content-center"],
                        [1, "col-lg-5", "col-md-7"],
                        [1, "card", "bg-secondary", "border-0", "mb-0"],
                        [1, "card-header", "bg-transparent"],
                        [1, "logo-box", "mb--1", "text-center"],
                        [1, "logo", "pt-2", "pb-2", 3, "src"],
                        [1, "card-body", "px-lg-5", "py-lg-5"],
                        [3, "formGroup"],
                        [1, "form-group", "mb-3", 3, "ngClass"],
                        [1, "input-group", "input-group-alternative"],
                        [1, "input-group-prepend"],
                        [1, "input-group-text", "bg-primary"],
                        [1, "fas", "fa-envelope", "text-white"],
                        [
                          "placeholder",
                          "Email",
                          "type",
                          "email",
                          "formControlName",
                          "username",
                          1,
                          "form-control",
                          3,
                          "focus",
                          "blur",
                        ],
                        [4, "ngFor", "ngForOf"],
                        [1, "form-group", 3, "ngClass"],
                        [1, "fas", "fa-lock", "text-white"],
                        [
                          "placeholder",
                          "Password",
                          "type",
                          "password",
                          "formControlName",
                          "password",
                          1,
                          "form-control",
                          3,
                          "focus",
                          "blur",
                        ],
                        [1, "validation-errors"],
                        [1, "row"],
                        [1, "col-6"],
                        [
                          1,
                          "custom-control",
                          "custom-control-alternative",
                          "custom-checkbox",
                        ],
                        [
                          "id",
                          "customCheckLogin",
                          "type",
                          "checkbox",
                          1,
                          "custom-control-input",
                        ],
                        ["for", "customCheckLogin", 1, "custom-control-label"],
                        [1, "col-6", "text-right"],
                        [1, "forget-label", 3, "click"],
                        [1, "text-center"],
                        [
                          "type",
                          "button",
                          1,
                          "btn",
                          "btn-primary",
                          "my-4",
                          "btn-block",
                          3,
                          "click",
                        ],
                        [
                          "type",
                          "button",
                          1,
                          "btn",
                          "btn-outline-primary",
                          "btn-block",
                          "my-2",
                          3,
                          "click",
                        ],
                        [4, "ngIf"],
                        [1, "error-message"],
                      ],
                      template: function (t, e) {
                        1 & t &&
                          (g.Qb(0, "ngx-loading-bar"),
                          g.Vb(1, "div", 0),
                          g.Vb(2, "div", 1),
                          g.Vb(3, "div", 2),
                          g.Vb(4, "div", 3),
                          g.Vb(5, "div", 4),
                          g.Vb(6, "div", 5),
                          g.Vb(7, "div", 6),
                          g.Qb(8, "img", 7),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(9, "div", 8),
                          g.Vb(10, "form", 9),
                          g.Vb(11, "div", 10),
                          g.Vb(12, "div", 11),
                          g.Vb(13, "div", 12),
                          g.Vb(14, "span", 13),
                          g.Qb(15, "i", 14),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(16, "input", 15),
                          g.dc("focus", function (t) {
                            return (e.focusUsername = !0);
                          })("blur", function (t) {
                            return (e.focusUsername = !1);
                          }),
                          g.Ub(),
                          g.Ub(),
                          g.Ic(17, m, 2, 1, "ng-container", 16),
                          g.Ub(),
                          g.Vb(18, "div", 17),
                          g.Vb(19, "div", 11),
                          g.Vb(20, "div", 12),
                          g.Vb(21, "span", 13),
                          g.Qb(22, "i", 18),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(23, "input", 19),
                          g.dc("focus", function (t) {
                            return (e.focusPassword = !0);
                          })("blur", function (t) {
                            return (e.focusPassword = !1);
                          }),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(24, "div", 20),
                          g.Ic(25, h, 2, 1, "ng-container", 16),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(26, "div", 21),
                          g.Vb(27, "div", 22),
                          g.Vb(28, "div", 23),
                          g.Qb(29, "input", 24),
                          g.Vb(30, "label", 25),
                          g.Vb(31, "span"),
                          g.Kc(32, "Remember me?"),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(33, "div", 26),
                          g.Vb(34, "label", 27),
                          g.dc("click", function (t) {
                            return e.navigatePage("forgot");
                          }),
                          g.Vb(35, "span"),
                          g.Kc(36, "Forgot password"),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(37, "div", 28),
                          g.Vb(38, "button", 29),
                          g.dc("click", function (t) {
                            return e.login();
                          }),
                          g.Kc(39, " Sign in "),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(40, "div"),
                          g.Vb(41, "button", 30),
                          g.dc("click", function (t) {
                            return e.navigatePage("register");
                          }),
                          g.Kc(42, " Register "),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub()),
                          2 & t &&
                            (g.Cb(8),
                            g.oc("src", e.imgLogo, g.Cc),
                            g.Cb(2),
                            g.oc("formGroup", e.loginForm),
                            g.Cb(1),
                            g.oc("ngClass", g.rc(6, v, !0 === e.focusUsername)),
                            g.Cb(6),
                            g.oc("ngForOf", e.loginFormMessages.username),
                            g.Cb(1),
                            g.oc("ngClass", g.rc(8, v, !0 === e.focusPassword)),
                            g.Cb(7),
                            g.oc("ngForOf", e.loginFormMessages.password));
                      },
                      directives: [
                        s.a,
                        r.v,
                        r.n,
                        r.g,
                        o.j,
                        r.b,
                        r.m,
                        r.e,
                        o.k,
                        o.l,
                      ],
                      styles: [
                        ".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-color:#172b4d;background-image:url(bg-img-it.42621df5ef18d7362587.jpeg);background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.forget-label[_ngcontent-%COMP%]{font-size:.875rem;cursor:pointer}.forget-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:2px}.custom-control-label[_ngcontent-%COMP%]{vertical-align:none!important}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}",
                      ],
                    })),
                    t
                  );
                })(),
              },
              {
                path: "register",
                component: (function () {
                  function t(t, e, n, o, r) {
                    (this.authService = t),
                      (this.notifyService = e),
                      (this.formBuilder = n),
                      (this.loadingBar = o),
                      (this.router = r),
                      (this.imgLogo = "assets/img/logo/tldm-logo.png"),
                      (this.imgBg = "assets/img/default/bg-img-it.jpg"),
                      (this.registerFormMessages = {
                        username: [
                          { type: "required", message: "Email is required" },
                          {
                            type: "email",
                            message: "Please enter a valid email",
                          },
                        ],
                        password1: [
                          { type: "required", message: "Password is required" },
                          {
                            type: "minLength",
                            message: "Password must have at least 8 characters",
                          },
                        ],
                        password2: [
                          { type: "required", message: "Password is required" },
                          {
                            type: "minLength",
                            message: "Password must have at least 8 characters",
                          },
                        ],
                      });
                  }
                  return (
                    (t.prototype.ngOnInit = function () {
                      this.registerForm = this.formBuilder.group({
                        username: new r.d(
                          "",
                          r.t.compose([r.t.required, r.t.email])
                        ),
                        password1: new r.d(
                          "",
                          r.t.compose([r.t.required, r.t.minLength(8)])
                        ),
                        password2: new r.d(
                          "",
                          r.t.compose([r.t.required, r.t.minLength(8)])
                        ),
                      });
                    }),
                    (t.prototype.login = function () {
                      this.loadingBar.start(),
                        this.loadingBar.complete(),
                        this.successMessage();
                    }),
                    (t.prototype.navigatePage = function (t) {
                      if ("login" == t)
                        return this.router.navigate(["/auth/login"]);
                    }),
                    (t.prototype.successMessage = function () {
                      this.notifyService.openToastr(
                        "Success",
                        "Loging in right now"
                      );
                    }),
                    (t.prototype.createAccount = function () {}),
                    (t.ɵfac = function (e) {
                      return new (e || t)(
                        g.Pb(c.a),
                        g.Pb(b.a),
                        g.Pb(r.c),
                        g.Pb(s.c),
                        g.Pb(a.e)
                      );
                    }),
                    (t.ɵcmp = g.Jb({
                      type: t,
                      selectors: [["app-register"]],
                      decls: 56,
                      vars: 14,
                      consts: [
                        [1, "main-content", "auth-content"],
                        [1, "container", "mt-4", "pb-9"],
                        [1, "row", "justify-content-center"],
                        [1, "col-lg-5", "col-md-7"],
                        [1, "card", "bg-secondary", "border-0", "mb-0"],
                        [1, "card-header", "bg-transparent"],
                        [1, "logo-box", "mb--1", "text-center"],
                        [1, "logo", "pt-2", "pb-2", 3, "src"],
                        [1, "h2", "text-default", "mt-3", "mb-0"],
                        [1, "card-body", "px-lg-5", "py-lg-5"],
                        [3, "formGroup"],
                        [1, "form-group", 3, "ngClass"],
                        [1, "input-group", "input-group-alternative", "mb-3"],
                        [1, "input-group-prepend"],
                        [1, "input-group-text", "bg-primary"],
                        [1, "fas", "fa-envelope", "text-white"],
                        [
                          "placeholder",
                          "Email",
                          "type",
                          "email",
                          "formControlName",
                          "username",
                          1,
                          "form-control",
                          3,
                          "focus",
                          "blur",
                        ],
                        [4, "ngFor", "ngForOf"],
                        [1, "fas", "fa-lock", "text-white"],
                        [
                          "placeholder",
                          "Password",
                          "type",
                          "password",
                          "formControlName",
                          "password1",
                          1,
                          "form-control",
                          3,
                          "focus",
                          "blur",
                        ],
                        [1, "input-group", "input-group-alternative"],
                        [
                          "placeholder",
                          "Confirm password",
                          "type",
                          "password",
                          "formControlName",
                          "password2",
                          1,
                          "form-control",
                          3,
                          "focus",
                          "blur",
                        ],
                        [1, "text-muted", "font-italic"],
                        [1, "text-success", "font-weight-700"],
                        [1, "row", "my-4"],
                        [1, "col-12"],
                        [
                          1,
                          "custom-control",
                          "custom-control-alternative",
                          "custom-checkbox",
                        ],
                        [
                          "id",
                          "customCheckRegister",
                          "type",
                          "checkbox",
                          1,
                          "custom-control-input",
                        ],
                        [
                          "for",
                          "customCheckRegister",
                          1,
                          "custom-control-label",
                        ],
                        ["href", "javascript:void(0)"],
                        [1, "text-center"],
                        [
                          "type",
                          "button",
                          1,
                          "btn",
                          "btn-primary",
                          "mt-4",
                          "btn-block",
                          3,
                          "click",
                        ],
                        [
                          "type",
                          "button",
                          1,
                          "btn",
                          "btn-icon",
                          "btn-outline-primary",
                          "btn-block",
                          "my-2",
                          3,
                          "click",
                        ],
                        [1, "btn-inner--icon"],
                        [1, "fas", "fa-angle-left"],
                        [1, "btn-inner--text"],
                        [4, "ngIf"],
                        [1, "error-message"],
                      ],
                      template: function (t, e) {
                        1 & t &&
                          (g.Qb(0, "ngx-loading-bar"),
                          g.Vb(1, "div", 0),
                          g.Vb(2, "div", 1),
                          g.Vb(3, "div", 2),
                          g.Vb(4, "div", 3),
                          g.Vb(5, "div", 4),
                          g.Vb(6, "div", 5),
                          g.Vb(7, "div", 6),
                          g.Qb(8, "img", 7),
                          g.Vb(9, "h6", 8),
                          g.Kc(10, "Register account"),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(11, "div", 9),
                          g.Vb(12, "form", 10),
                          g.Vb(13, "div", 11),
                          g.Vb(14, "div", 12),
                          g.Vb(15, "div", 13),
                          g.Vb(16, "span", 14),
                          g.Qb(17, "i", 15),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(18, "input", 16),
                          g.dc("focus", function (t) {
                            return (e.focusUsername = !0);
                          })("blur", function (t) {
                            return (e.focusUsername = !1);
                          }),
                          g.Ub(),
                          g.Ub(),
                          g.Ic(19, U, 2, 1, "ng-container", 17),
                          g.Ub(),
                          g.Vb(20, "div", 11),
                          g.Vb(21, "div", 12),
                          g.Vb(22, "div", 13),
                          g.Vb(23, "span", 14),
                          g.Qb(24, "i", 18),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(25, "input", 19),
                          g.dc("focus", function (t) {
                            return (e.focusPassword = !0);
                          })("blur", function (t) {
                            return (e.focusPassword = !1);
                          }),
                          g.Ub(),
                          g.Ub(),
                          g.Ic(26, V, 2, 1, "ng-container", 17),
                          g.Ub(),
                          g.Vb(27, "div", 11),
                          g.Vb(28, "div", 20),
                          g.Vb(29, "div", 13),
                          g.Vb(30, "span", 14),
                          g.Qb(31, "i", 18),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(32, "input", 21),
                          g.dc("focus", function (t) {
                            return (e.focusConfirmPassword = !0);
                          })("blur", function (t) {
                            return (e.focusConfirmPassword = !1);
                          }),
                          g.Ub(),
                          g.Ub(),
                          g.Ic(33, w, 2, 1, "ng-container", 17),
                          g.Ub(),
                          g.Vb(34, "div", 22),
                          g.Vb(35, "small"),
                          g.Kc(36, "password strength: "),
                          g.Vb(37, "span", 23),
                          g.Kc(38, "strong"),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(39, "div", 24),
                          g.Vb(40, "div", 25),
                          g.Vb(41, "div", 26),
                          g.Qb(42, "input", 27),
                          g.Vb(43, "label", 28),
                          g.Vb(44, "span"),
                          g.Kc(45, "I agree with the "),
                          g.Vb(46, "a", 29),
                          g.Kc(47, "Privacy Policy"),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Vb(48, "div", 30),
                          g.Vb(49, "button", 31),
                          g.dc("click", function (t) {
                            return e.createAccount();
                          }),
                          g.Kc(50, " Create account "),
                          g.Ub(),
                          g.Vb(51, "button", 32),
                          g.dc("click", function (t) {
                            return e.navigatePage("login");
                          }),
                          g.Vb(52, "span", 33),
                          g.Qb(53, "i", 34),
                          g.Ub(),
                          g.Vb(54, "span", 35),
                          g.Kc(55, "Login"),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub(),
                          g.Ub()),
                          2 & t &&
                            (g.Cb(8),
                            g.oc("src", e.imgLogo, g.Cc),
                            g.Cb(4),
                            g.oc("formGroup", e.registerForm),
                            g.Cb(1),
                            g.oc("ngClass", g.rc(8, x, !0 === e.focusUsername)),
                            g.Cb(6),
                            g.oc("ngForOf", e.registerFormMessages.username),
                            g.Cb(1),
                            g.oc(
                              "ngClass",
                              g.rc(10, x, !0 === e.focusPassword)
                            ),
                            g.Cb(6),
                            g.oc("ngForOf", e.registerFormMessages.password1),
                            g.Cb(1),
                            g.oc(
                              "ngClass",
                              g.rc(12, x, !0 === e.focusConfirmPassword)
                            ),
                            g.Cb(6),
                            g.oc("ngForOf", e.registerFormMessages.password2));
                      },
                      directives: [
                        s.a,
                        r.v,
                        r.n,
                        r.g,
                        o.j,
                        r.b,
                        r.m,
                        r.e,
                        o.k,
                        o.l,
                      ],
                      styles: [
                        ".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-color:#172b4d;background-image:url(bg-img-it.42621df5ef18d7362587.jpeg);background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.forget-label[_ngcontent-%COMP%]{font-size:.875rem;cursor:pointer}.forget-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:2px}.custom-control-label[_ngcontent-%COMP%]{vertical-align:none!important}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}.strength-bar[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]:last-of-type{margin:0!important}.point[_ngcontent-%COMP%]{background:#ddd;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:62px}",
                      ],
                    })),
                    t
                  );
                })(),
              },
            ],
          },
        ];
      n.d(e, "AuthModule", function () {
        return M;
      });
      var M = (function () {
        function t() {}
        return (
          (t.ɵmod = g.Nb({ type: t })),
          (t.ɵinj = g.Mb({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [
              [
                o.c,
                r.h,
                r.s,
                i.f.forRoot(),
                i.k.forRoot(),
                i.m.forRoot(),
                s.b,
                a.h.forChild(_),
              ],
            ],
          })),
          t
        );
      })();
    },
  },
]);
