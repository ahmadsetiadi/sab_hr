(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"profile-card-div\">\r\n    <ion-card class=\"home-card\">\r\n      <div class=\"home-header\">\r\n        <img src=\"{{blackLogo}}\" class=\"whiteLogo slide-in\">\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"home-data-card\">\r\n    <div class=\"head-div\">\r\n      <h2 class=\"login\"> FORGOT PASSWORD</h2>\r\n    </div>\r\n    <form (ngSubmit)=\"forgotPassword()\" [formGroup]=\"forgotpasswordForm\">\r\n      <ion-list class=\"login-box\">\r\n        <ion-item detail class=\"login-item\">\r\n          <span slot=\"start\" class=\"custom-icon-personal-info-icon\"></span>\r\n          <ion-input type=\"text\" class=\"loginInput\" placeholder=\"Username or Email\" formControlName=\"username\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-button expand=\"block\" class=\"loginButton\" type=\"submit\">Reset Password </ion-button>\r\n        <h3 class=\"forgotPasswordBack\" (click)=\"backToLogin()\">Back To Login</h3>\r\n      </ion-list>\r\n    </form>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-data-card {\n  position: relative;\n  top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n  height: calc(100vh - 230px);\n}\n\n.profile-card-div {\n  background: #0A15D5;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n  padding-top: 50px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.head-div {\n  top: -20px;\n  position: relative;\n  font-size: 18px;\n  text-align: center;\n  border-radius: 50px;\n  border: solid 0.1px rgba(255, 255, 255, 0);\n  height: 63px;\n  background: white;\n  margin-left: 30px;\n  margin-right: 30px;\n  box-shadow: -1px 7px 16px 6px rgba(210, 208, 207, 0.9607843137);\n}\n\n.login-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 15px 4px;\n}\n\n.login-item span {\n  font-size: 30px;\n}\n\n.login-item .custom-icon-personal-info-icon:before {\n  color: #fe9c45;\n}\n\n.login-box {\n  padding: 30px;\n  padding-top: 0px;\n}\n\n.forgotPasswordText {\n  font-size: 16px;\n  font-weight: 400;\n  color: #000;\n}\n\n.forgotPasswordBack {\n  text-align: center;\n  font-size: 16px;\n  color: #fe9c45;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXGZvcmdvdC1wYXNzd29yZFxcZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURFSTtFQUNJLGNBQUE7QUNBUjs7QURJQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWRhdGEtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzBweCk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaG9tZS1jYXJkIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5ob21lLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDE0NHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5oZWFkLWRpdiB7XHJcbiAgdG9wOiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAwLjFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgaGVpZ2h0OiA2M3B4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggN3B4IDE2cHggNnB4IHJnYmEoMjEwLCAyMDgsIDIwNywgMC45NjA3ODQzMTM3MjU0OTAyKVxyXG59XHJcblxyXG4ubG9naW4taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDRweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLXBlcnNvbmFsLWluZm8taWNvbjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmU5YzQ1O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9naW4tYm94IHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uZm9yZ290UGFzc3dvcmRUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZvcmdvdFBhc3N3b3JkQmFjayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZlOWM0NTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn0iLCIuaG9tZS1kYXRhLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMwcHgpO1xufVxuXG4ucHJvZmlsZS1jYXJkLWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWNhcmQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5oZWFkLWRpdiB7XG4gIHRvcDogLTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMC4xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgaGVpZ2h0OiA2M3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTZweCA2cHggcmdiYSgyMTAsIDIwOCwgMjA3LCAwLjk2MDc4NDMxMzcpO1xufVxuXG4ubG9naW4taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgcGFkZGluZzogMTVweCA0cHg7XG59XG4ubG9naW4taXRlbSBzcGFuIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmxvZ2luLWl0ZW0gLmN1c3RvbS1pY29uLXBlcnNvbmFsLWluZm8taWNvbjpiZWZvcmUge1xuICBjb2xvcjogI2ZlOWM0NTtcbn1cblxuLmxvZ2luLWJveCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5mb3Jnb3RQYXNzd29yZFRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uZm9yZ290UGFzc3dvcmRCYWNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmU5YzQ1O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");






let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(util, alertController, navCtrl, fb, referenceservice, apiservice) {
        this.util = util;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.referenceservice = referenceservice;
        this.apiservice = apiservice;
        this.keywords = {};
        this.forgotpasswordForm = fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
        this.blackLogo = "assets/imgs/Logo-new.png";
    }
    ngOnInit() {
    }
    getHeaderStyle() {
        return { 'background': this.primaryColor };
    }
    ;
    forgotPassword() {
        this.referenceservice.showAlert('Smart HR', 'Email has been sent successfully please check your mail');
        this.navCtrl.pop();
    }
    backToLogin() {
        this.navCtrl.pop();
    }
    ;
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html"),
        styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es2015.js.map