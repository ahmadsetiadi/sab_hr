(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walkthrough-walkthrough-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/walkthrough/walkthrough.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/walkthrough/walkthrough.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"profile-card-div\">\r\n    <ion-card class=\"home-card\">\r\n      <div class=\"home-header\">\r\n        <!-- <img src=\"{{blackLogo}}\" width=\"100\" height=\"100\"> -->\r\n        <!-- <div class=\"walkthrough-title\">Welcome to Sinar</div> -->\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"home-data-card\">\r\n    <ion-slides #slides (ionSlideDidChange)=\"slideChanged($event)\">\r\n      <ion-slide>\r\n        <div class=\"slide-zoom\">\r\n          <div class=\"walkthrough-title\">Welcome to Sinar</div>\r\n          <div class=\"walkthrough-img\">\r\n            <span class=\"custom-icon-intro-dhr\">\r\n              <span class=\"path1\"></span>\r\n              <span class=\"path2\"></span>\r\n              <span class=\"path3\"></span>\r\n            </span>\r\n          </div>\r\n          <div class=\"walkthrough-text\">\r\n            Efficiency and convenience in one HR application. Access full features for employee management, performance evaluation, payroll, payslips and more. Ready to get started?\r\n          </div>\r\n          <ion-button class=\"loginButton\" expand=\"block\" (click)=\"getStarted()\">get started </ion-button>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <div class=\"slide-zoom\">\r\n          <div class=\"walkthrough-title\">Attendance</div>\r\n          <div class=\"walkthrough-img\">\r\n            <span class=\"custom-icon-intro-chat\">\r\n              <span class=\"path1\"></span>\r\n              <span class=\"path2\"></span>\r\n              <span class=\"path3\"></span>\r\n              <span class=\"path4\"></span>\r\n              <span class=\"path5\"></span>\r\n              <span class=\"path6\"></span>\r\n              <span class=\"path7\"></span>\r\n            </span>\r\n          </div>\r\n          <div class=\"walkthrough-text\">\r\n            Now, attendance is even easier! Take attendance from anywhere with our app. No more unmonitored attendance or absences.\r\n          </div>\r\n          <ion-button class=\"loginButton\" expand=\"block\" (click)=\"getStarted()\">get started </ion-button>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <div class=\"slide-zoom\">\r\n          <div class=\"walkthrough-title\">Leave and Permit</div>\r\n          <div class=\"walkthrough-img\">\r\n            <span class=\"custom-icon-intro-tasks\">\r\n              <span class=\"path1\"></span>\r\n              <span class=\"path2\"></span>\r\n              <span class=\"path3\"></span>\r\n              <span class=\"path4\"></span>\r\n              <span class=\"path5\"></span>\r\n              <span class=\"path6\"></span>\r\n              <span class=\"path7\"></span>\r\n              <span class=\"path8\"></span>\r\n              <span class=\"path9\"></span>\r\n              <span class=\"path10\"></span>\r\n              <span class=\"path11\"></span>\r\n            </span>\r\n          </div>\r\n          <div class=\"walkthrough-text\">\r\n            The process of applying for leave or permits is now faster and more efficient.\r\n          </div>\r\n          <ion-button class=\"loginButton\" expand=\"block\" (click)=\"getStarted()\">get started </ion-button>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <ion-row class=\"pager\">\r\n    <ion-col size=\"4\">\r\n      <span style=\"color: #9c9292;\" (click)=\"previousSlide()\">Previous</span>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <span *ngFor=\"let slide of slides1; let i=index\" class=\"slide\" [ngClass]=\"getClass(i)\"></span>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <span style=\"color: #fe9c45;\" *ngIf=\"!slides1[2]\" (click)=\"nextSlide()\">Next</span>\r\n      <span style=\"color:#fe9c45;\" *ngIf=\"slides1[2]\" (click)=\"getStarted()\">Finish</span>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/walkthrough/walkthrough-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/walkthrough/walkthrough-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WalkthroughPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageRoutingModule", function() { return WalkthroughPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/walkthrough/walkthrough.page.ts");




const routes = [
    {
        path: '',
        component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__["WalkthroughPage"]
    }
];
let WalkthroughPageRoutingModule = class WalkthroughPageRoutingModule {
};
WalkthroughPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalkthroughPageRoutingModule);



/***/ }),

/***/ "./src/app/walkthrough/walkthrough.module.ts":
/*!***************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.module.ts ***!
  \***************************************************/
/*! exports provided: WalkthroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough-routing.module */ "./src/app/walkthrough/walkthrough-routing.module.ts");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/walkthrough/walkthrough.page.ts");







let WalkthroughPageModule = class WalkthroughPageModule {
};
WalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPageRoutingModule"]
        ],
        declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]]
    })
], WalkthroughPageModule);



/***/ }),

/***/ "./src/app/walkthrough/walkthrough.page.scss":
/*!***************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-zoom {\n  text-align: center;\n  display: block;\n  width: 100%;\n  min-height: 370px;\n  width: 270px;\n  border-radius: 25px;\n  margin-right: 25px;\n  margin-left: 25px;\n  background: white;\n  box-shadow: -1px 7px 16px 6px rgba(210, 208, 207, 0.9607843137);\n}\n\n.walkthrough-img {\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\n.walkthrough-text {\n  color: #212121;\n  font-size: 12px;\n  padding: 0 15px;\n}\n\n.walkthrough-img img {\n  display: inline-block;\n  height: 100px;\n  width: auto;\n}\n\nion-slides {\n  height: 85% !important;\n}\n\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0;\n  position: relative;\n  z-index: 1;\n  display: -webkit-box;\n  display: flex;\n  overflow: inherit;\n  width: 100%;\n  top: -30px;\n  position: relative;\n}\n\n.walkthrough-title {\n  text-transform: uppercase;\n  font-size: 20px;\n  margin: 20px 0;\n}\n\n.loginButton {\n  border-radius: 5px;\n  height: 45px;\n  font-size: 16px;\n  margin: 20px;\n}\n\n.custom-icon-intro-dhr,\n.custom-icon-intro-chat,\n.custom-icon-intro-tasks {\n  font-size: 100px;\n}\n\n.custom-icon-intro-dhr span,\n.custom-icon-intro-chat span,\n.custom-icon-intro-tasks span {\n  font-family: \"newhrms\" !important;\n}\n\n.home-data-card {\n  position: relative;\n  top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #10dc60;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n  padding-top: 50px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.slide1-activated,\n.slide2-activated,\n.slide3-activated {\n  width: 40px !important;\n  background: #fe9c45 !important;\n}\n\n.slide {\n  height: 8px;\n  width: 8px;\n  content: \" \";\n  background: #9c9292;\n  margin: 4px;\n  border-radius: 50px;\n  display: inline-block;\n}\n\n.pager {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsa3Rocm91Z2gvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcd2Fsa3Rocm91Z2hcXHdhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0RBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBOzs7RUFHSSxnQkFBQTtBQ0NKOztBRENJOzs7RUFDSSxpQ0FBQTtBQ0dSOztBREVBO0VBQ0ksa0JBQUE7RUFDRCxVQUFBO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBOzs7RUFHSSxzQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3dhbGt0aHJvdWdoL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZS16b29tIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzNzBweDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCA3cHggMTZweCA2cHggcmdiYSgyMTAsIDIwOCwgMjA3LCAwLjk2MDc4NDMxMzcyNTQ5MDIpO1xyXG59XHJcblxyXG4ud2Fsa3Rocm91Z2gtaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ud2Fsa3Rocm91Z2gtdGV4dCB7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuLndhbGt0aHJvdWdoLWltZyBpbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogODUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi53YWxrdGhyb3VnaC10aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1pbnRyby1kaHIsXHJcbi5jdXN0b20taWNvbi1pbnRyby1jaGF0LFxyXG4uY3VzdG9tLWljb24taW50cm8tdGFza3Mge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJuZXdocm1zXCIgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5ob21lLWRhdGEtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIHRvcDogLTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzEwZGM2MDsvLyMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaG9tZS1jYXJkIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5ob21lLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDE0NHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zbGlkZTEtYWN0aXZhdGVkLFxyXG4uc2xpZGUyLWFjdGl2YXRlZCxcclxuLnNsaWRlMy1hY3RpdmF0ZWQge1xyXG4gICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZTljNDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNsaWRlIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGJhY2tncm91bmQ6ICM5YzkyOTI7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wYWdlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxufSIsIi5zbGlkZS16b29tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDM3MHB4O1xuICB3aWR0aDogMjcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAtMXB4IDdweCAxNnB4IDZweCByZ2JhKDIxMCwgMjA4LCAyMDcsIDAuOTYwNzg0MzEzNyk7XG59XG5cbi53YWxrdGhyb3VnaC1pbWcge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ud2Fsa3Rocm91Z2gtdGV4dCB7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLndhbGt0aHJvdWdoLWltZyBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA4NSUgIWltcG9ydGFudDtcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAtMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud2Fsa3Rocm91Z2gtdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ubG9naW5CdXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5jdXN0b20taWNvbi1pbnRyby1kaHIsXG4uY3VzdG9tLWljb24taW50cm8tY2hhdCxcbi5jdXN0b20taWNvbi1pbnRyby10YXNrcyB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG4uY3VzdG9tLWljb24taW50cm8tZGhyIHNwYW4sXG4uY3VzdG9tLWljb24taW50cm8tY2hhdCBzcGFuLFxuLmN1c3RvbS1pY29uLWludHJvLXRhc2tzIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJuZXdocm1zXCIgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtZGF0YS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWNhcmQtZGl2IHtcbiAgYmFja2dyb3VuZDogIzEwZGM2MDtcbiAgaGVpZ2h0OiAyODBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY2FyZCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uaG9tZS1oZWFkZXIge1xuICBoZWlnaHQ6IDE0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLnNsaWRlMS1hY3RpdmF0ZWQsXG4uc2xpZGUyLWFjdGl2YXRlZCxcbi5zbGlkZTMtYWN0aXZhdGVkIHtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZlOWM0NSAhaW1wb3J0YW50O1xufVxuXG4uc2xpZGUge1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICM5YzkyOTI7XG4gIG1hcmdpbjogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wYWdlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/walkthrough/walkthrough.page.ts":
/*!*************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.page.ts ***!
  \*************************************************/
/*! exports provided: WalkthroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function() { return WalkthroughPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




// import { Geolocation } from '@ionic-native/geolocation/ngx';
let WalkthroughPage = class WalkthroughPage {
    constructor(navContrl) {
        this.navContrl = navContrl;
        this.slides1 = [true, false, false];
        // this.blackLogo = "assets/imgs/Logo-new.png";
        this.blackLogo = "assets/imgs/bint2.png";
    }
    ngOnInit() {
    }
    getLocation() {
        // this.geolocation.getCurrentPosition().then((resp) => {
        //   this.latitude = resp.coords.latitude;
        //   this.longitude = resp.coords.longitude;
        //   console.log('Latitude:', this.latitude, 'Longitude:', this.longitude);
        // }).catch((error) => {
        //   console.error('Error getting location', error);
        // });
    }
    getStarted() {
        // this.navContrl.navigateRoot("/login");
        this.getLocation();
    }
    getClass(i) {
        return this.slides1[i] ? 'slide' + (i + 1) + '-activated' : '';
    }
    slideChanged(e) {
        this.slides.getActiveIndex().then((index) => {
            console.log(index);
            this.slides1 = [false, false, false];
            this.slides1[index] = true;
        });
    }
    previousSlide() {
        (!this.slides1[0]) ? this.slides.slidePrev() : '';
    }
    nextSlide() {
        this.slides.slideNext();
    }
};
WalkthroughPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], WalkthroughPage.prototype, "slides", void 0);
WalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walkthrough',
        template: __webpack_require__(/*! raw-loader!./walkthrough.page.html */ "./node_modules/raw-loader/index.js!./src/app/walkthrough/walkthrough.page.html"),
        styles: [__webpack_require__(/*! ./walkthrough.page.scss */ "./src/app/walkthrough/walkthrough.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], WalkthroughPage);



/***/ })

}]);
//# sourceMappingURL=walkthrough-walkthrough-module-es2015.js.map