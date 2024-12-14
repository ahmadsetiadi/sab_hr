(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"profile-card-div\">\r\n    <ion-card class=\"home-card\">\r\n      <div class=\"home-header\">\r\n        <!-- <img src=\"{{blackLogo}}\" class=\"whiteLogo slide-in\"> -->\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"home-data-card\">\r\n    <div class=\"head-div\">\r\n      <h2 class=\"login\"> LOGIN</h2>\r\n    </div>\r\n    <form (ngSubmit)=\"login()\" [formGroup]=\"loginForm\">\r\n      <ion-list class=\"login-box\">\r\n        <ion-item detail class=\"login-item\">\r\n          <span slot=\"start\" class=\"custom-icon-personal-info-icon\"></span>\r\n          <ion-input type=\"text\" [(ngModel)]=\"model.username\" class=\"loginInput\" placeholder=\"Username or Email\" formControlName=\"username\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item detail class=\"login-item\">\r\n          <span slot=\"start\" class=\"custom-icon-password-icon\"></span>\r\n          <ion-input type=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-button expand=\"block\" class=\"loginButton\" type=\"submit\">Login </ion-button>\r\n        <!-- <h3 class=\"register\" (click)=\"register()\">Don't have account? <span>Sign Up</span> Now</h3> -->\r\n        <!-- <h3 class=\"forgotPasswordBack\" (click)=\"forgotPassword()\">Forgot Password?</h3> -->\r\n      </ion-list>\r\n    </form>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");






// import { IonicStorageModule } from '@ionic/storage';

var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // IonicStorageModule.forRoot({
                //   name: '_myDb',
                //   driverOrder: ['localstorage']
                // }),
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotPasswordText {\n  font-size: 16px;\n  font-weight: 400;\n  color: #000;\n}\n\n.forgotPasswordBack {\n  text-align: center;\n  font-size: 16px;\n  color: #fe9c45;\n  margin-top: 50px;\n}\n\n.register {\n  text-align: center;\n  font-size: 16px;\n  margin-top: 50px;\n}\n\n.register span {\n  color: #fe9c45;\n}\n\n.home-data-card {\n  position: relative;\n  top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #10dc60;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n  padding-top: 50px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.head-div {\n  top: -20px;\n  position: relative;\n  font-size: 18px;\n  text-align: center;\n  border-radius: 50px;\n  border: solid 0.1px rgba(255, 255, 255, 0);\n  height: 63px;\n  background: white;\n  margin-left: 30px;\n  /* bottom: 0px; */\n  margin-right: 30px;\n  box-shadow: -1px 7px 16px 6px rgba(210, 208, 207, 0.9607843137);\n}\n\n.login-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 15px 4px;\n}\n\n.login-item span {\n  font-size: 30px;\n}\n\n.login-item .custom-icon-personal-info-icon:before {\n  color: #fe9c45;\n}\n\n.login-box {\n  padding: 30px;\n  padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENJO0VBQ0ksY0FBQTtBQ0NSOztBREdBO0VBQ0csa0JBQUE7RUFDQyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ08sVUFBQTtFQUNILGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtEQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FER0k7RUFDSSxjQUFBO0FDRFI7O0FES0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3RQYXNzd29yZFRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZm9yZ290UGFzc3dvcmRCYWNrIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmU5YzQ1O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZTljNDU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ob21lLWRhdGEtY2FyZCB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzEwZGM2MDsgLy8jMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uaG9tZS1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxNDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uaGVhZC1kaXYge1xyXG4gICAgICAgdG9wOiAtMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDAuMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBoZWlnaHQ6IDYzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgLyogYm90dG9tOiAwcHg7ICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDdweCAxNnB4IDZweCByZ2JhKDIxMCwgMjA4LCAyMDcsIDAuOTYwNzg0MzEzNyk7XHJcbn1cclxuXHJcbi5sb2dpbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHggNHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY3VzdG9tLWljb24tcGVyc29uYWwtaW5mby1pY29uOmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZTljNDU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dpbi1ib3gge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn0iLCIuZm9yZ290UGFzc3dvcmRUZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmZvcmdvdFBhc3N3b3JkQmFjayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZlOWM0NTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ucmVnaXN0ZXIgc3BhbiB7XG4gIGNvbG9yOiAjZmU5YzQ1O1xufVxuXG4uaG9tZS1kYXRhLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtY2FyZC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMTBkYzYwO1xuICBoZWlnaHQ6IDI4MHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1jYXJkIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5ob21lLWhlYWRlciB7XG4gIGhlaWdodDogMTQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uaGVhZC1kaXYge1xuICB0b3A6IC0yMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDAuMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGhlaWdodDogNjNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAvKiBib3R0b206IDBweDsgKi9cbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAtMXB4IDdweCAxNnB4IDZweCByZ2JhKDIxMCwgMjA4LCAyMDcsIDAuOTYwNzg0MzEzNyk7XG59XG5cbi5sb2dpbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBwYWRkaW5nOiAxNXB4IDRweDtcbn1cbi5sb2dpbi1pdGVtIHNwYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubG9naW4taXRlbSAuY3VzdG9tLWljb24tcGVyc29uYWwtaW5mby1pY29uOmJlZm9yZSB7XG4gIGNvbG9yOiAjZmU5YzQ1O1xufVxuXG4ubG9naW4tYm94IHtcbiAgcGFkZGluZzogMzBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _api2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../api2.service */ "./src/app/api2.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






// import { ApiService } from '../api.service';


var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menuCtrl, fb, statusBar, referenceservice, apiservice, storage) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.fb = fb;
        this.statusBar = statusBar;
        this.referenceservice = referenceservice;
        this.apiservice = apiservice;
        this.storage = storage;
        this.username1 = false;
        this.password1 = false;
        this.keywords = {};
        this.model = {
            username: "adi",
            password: "adi"
        };
        this.loginForm = fb.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            device_id: ["", []]
        });
        this.primaryColor = '#0A15D5';
        this.secondryColor = '#0cd1e8';
        this.blackLogo = "assets/imgs/Logo-new.png";
        localStorage.setItem("primary_color", '#44bbec');
        localStorage.setItem("secondry_color", '#0163fc');
        localStorage.setItem("black_logo", "assets/imgs/logo.png");
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString(this.primaryColor);
        this.primaryColor = localStorage.getItem("primary_color");
        this.menuCtrl.swipeEnable(false);
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.navigateForward("/forgot-password");
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var model, url, response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = { username: this.model.username, password: this.model.password };
                        url = "user/login";
                        return [4 /*yield*/, this.apiservice.postData(url, model)];
                    case 1:
                        response = _a.sent();
                        if (response == undefined) {
                            return [2 /*return*/];
                        }
                        this.storage.set('username', response.username);
                        this.storage.set('expired', response.expired);
                        // localStorage.setItem("loginStatus", "true");
                        // localStorage.setItem("role", "admin");
                        // localStorage.setItem("role_id", "1");
                        // localStorage.setItem("fullname", "Admin");
                        // localStorage.setItem("user_id", '1');
                        // localStorage.setItem("currency", 'INR');
                        this.navCtrl.navigateRoot('/home');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.navigateForward("/register");
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
        { type: _api2_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
            _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _api2_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map