(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"profile-card-div\">\r\n    <ion-card class=\"home-card\">\r\n      <div class=\"home-header\">\r\n        <img src=\"{{blackLogo}}\" class=\"whiteLogo slide-in\">\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"home-data-card\">\r\n    <div class=\"head-div\">\r\n      <h2 class=\"login\"> REGISTER</h2>\r\n    </div>\r\n    <ion-list class=\"login-box\">\r\n      <ion-item detail class=\"login-item\">\r\n        <ion-input type=\"text\" class=\"loginInput\" placeholder=\"Username\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item detail class=\"login-item\">\r\n        <ion-input type=\"password\" placeholder=\"Email\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item detail class=\"login-item\">\r\n        <ion-input type=\"text\" class=\"loginInput\" placeholder=\"Password\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item detail class=\"login-item\">\r\n        <ion-input type=\"password\" placeholder=\"Confirm Password\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-button expand=\"block\" (click)=\"register()\" class=\"loginButton\" type=\"submit\">Register </ion-button>\r\n      <h3 class=\"register\" (click)=\"loginPage()\">Already have account? <span>Login</span> Now</h3>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotPasswordText {\n  font-size: 16px;\n  font-weight: 400;\n  color: #000;\n}\n\n.forgotPasswordBack {\n  text-align: center;\n  font-size: 16px;\n  color: #fe9c45;\n  margin-top: 50px;\n}\n\n.register {\n  text-align: center;\n  font-size: 16px;\n  margin-top: 50px;\n}\n\n.register span {\n  color: #fe9c45;\n}\n\n.home-data-card {\n  position: relative;\n  top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #0A15D5;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n  padding-top: 50px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.head-div {\n  top: -20px;\n  position: relative;\n  font-size: 18px;\n  text-align: center;\n  border-radius: 50px;\n  border: solid 0.1px rgba(255, 255, 255, 0);\n  height: 63px;\n  background: white;\n  margin-left: 30px;\n  margin-right: 30px;\n  box-shadow: -1px 7px 16px 6px rgba(210, 208, 207, 0.9607843137);\n}\n\n.login-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 15px 4px;\n}\n\n.login-item span {\n  font-size: 30px;\n}\n\n.login-box {\n  padding: 30px;\n  padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENJO0VBQ0ksY0FBQTtBQ0NSOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrREFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVJO0VBQ0ksZUFBQTtBQ0FSOztBREtBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290UGFzc3dvcmRUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZvcmdvdFBhc3N3b3JkQmFjayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZlOWM0NTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjZmU5YzQ1O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaG9tZS1kYXRhLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uaG9tZS1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxNDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uaGVhZC1kaXYge1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDAuMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBoZWlnaHQ6IDYzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTFweCA3cHggMTZweCA2cHggcmdiYSgyMTAsIDIwOCwgMjA3LCAwLjk2MDc4NDMxMzcyNTQ5MDIpXHJcbn1cclxuXHJcbi5sb2dpbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHggNHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5sb2dpbi1ib3gge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn0iLCIuZm9yZ290UGFzc3dvcmRUZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmZvcmdvdFBhc3N3b3JkQmFjayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZlOWM0NTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ucmVnaXN0ZXIgc3BhbiB7XG4gIGNvbG9yOiAjZmU5YzQ1O1xufVxuXG4uaG9tZS1kYXRhLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtY2FyZC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDI4MHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1jYXJkIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5ob21lLWhlYWRlciB7XG4gIGhlaWdodDogMTQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uaGVhZC1kaXYge1xuICB0b3A6IC0yMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDAuMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGhlaWdodDogNjNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDE2cHggNnB4IHJnYmEoMjEwLCAyMDgsIDIwNywgMC45NjA3ODQzMTM3KTtcbn1cblxuLmxvZ2luLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xuICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIHBhZGRpbmc6IDE1cHggNHB4O1xufVxuLmxvZ2luLWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxvZ2luLWJveCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");




let RegisterPage = class RegisterPage {
    constructor(navContrl, navCtrl, referenceservice) {
        this.navContrl = navContrl;
        this.navCtrl = navCtrl;
        this.referenceservice = referenceservice;
        this.blackLogo = "assets/imgs/Logo-new.png";
    }
    ngOnInit() {
    }
    register() {
        this.referenceservice.showAlert('Smart HR', 'Account Successfully Registered!');
        this.navCtrl.pop();
    }
    loginPage() {
        this.navContrl.navigateRoot("/login");
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map