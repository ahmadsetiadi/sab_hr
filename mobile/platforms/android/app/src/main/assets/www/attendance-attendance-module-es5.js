(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-attendance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/attendance/attendance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/attendance/attendance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Attendance</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content class=\"background-content\">\r\n  <div style=\"padding: 8px;\">\r\n    <h4 class=\"attendance-date\">{{(date || \"-\")| date:'d MMM y'}}</h4>\r\n    <h3 class=\"attendance-day\">{{day}}</h3>\r\n    <ion-row class=\"time-row row\">\r\n      <ion-col class=\"attendance-time col\" col-6>\r\n        <h4 class=\"attendance-date\">{{(punchedIn | date:'h:mm:ss a') || \"-\"}}</h4>\r\n        <h3 class=\"attendance-day\">Punch In</h3>\r\n      </ion-col>\r\n      <ion-col class=\"attendance-time col\" col-6>\r\n        <h4 class=\"attendance-date\">{{(punchedOut |date:'h:mm:ss a') || \"-\"}}</h4>\r\n        <h3 class=\"attendance-day\">Punch Out</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <h4 class=\"attendance-hours\">Total Hours:\r\n      <span class=\"attendance-hours-span\">{{hours || \"-\"}}</span>\r\n    </h4>\r\n    <ion-button *ngIf=\"!punchedIn\" class=\"loginButton\" expand=\"block\" (click)=\"punchIn()\">Punch in</ion-button>\r\n    <ion-button *ngIf=\"punchedIn\" class=\"loginButton\" expand=\"block\" (click)=\"punchOut()\">Punch out</ion-button>\r\n  </div> -->\r\n\r\n\r\n<!-- ========================== Attendance punch-in/out ===================================== -->\r\n<ion-content>\r\n  <div class=\"punch-empty-div\">\r\n    <div lines=\"none\" class=\"attendance-date\">\r\n      <span slot=\"start\">18 December, 2019</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"punch-content-div\">\r\n    <ion-row class=\"punchCards-row\">\r\n      <ion-col size=\"6\">\r\n        <ion-card class=\"punch-card punchin-card\">\r\n          <ion-card-content>\r\n            <div class=\"finger-print-icon\">\r\n              <span class=\"custom-icon-punch-fingerprint-icon\">\r\n                <span class=\"path1\"></span>\r\n                <span class=\"path2\"></span>\r\n                <span class=\"path3\"></span>\r\n                <span class=\"path4\"></span>\r\n                <span class=\"path5\"></span>\r\n                <span class=\"path6\"></span>\r\n                <span class=\"path7\"></span>\r\n                <span class=\"path8\"></span>\r\n                <span class=\"path9\"></span>\r\n                <span class=\"path10\"></span>\r\n                <span class=\"path11\"></span>\r\n                <span class=\"path12\"></span>\r\n                <span class=\"path13\"></span>\r\n                <span class=\"custom-icon-verified-icon\">\r\n                  <span class=\"path1\"></span>\r\n                  <span class=\"path2\"></span>\r\n                  <span class=\"path3\"></span>\r\n                </span>\r\n              </span>\r\n            </div>\r\n            <div class=\"activity\">Punch In</div>\r\n            <div class=\"time\">00:00:00</div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-card class=\"punch-card punchout-card\">\r\n          <ion-card-content>\r\n            <div class=\"finger-print-icon\" style=\"text-align: center;\">\r\n              <span class=\"custom-icon-punch-fingerprint-icon\">\r\n                <span class=\"path1\"></span>\r\n                <span class=\"path2\"></span>\r\n                <span class=\"path3\"></span>\r\n                <span class=\"path4\"></span>\r\n                <span class=\"path5\"></span>\r\n                <span class=\"path6\"></span>\r\n                <span class=\"path7\"></span>\r\n                <span class=\"path8\"></span>\r\n                <span class=\"path9\"></span>\r\n                <span class=\"path10\"></span>\r\n                <span class=\"path11\"></span>\r\n                <span class=\"path12\"></span>\r\n                <span class=\"path13\"></span>\r\n                <span class=\"custom-icon-verified-icon\">\r\n                  <span class=\"path1\"></span>\r\n                  <span class=\"path2\"></span>\r\n                  <span class=\"path3\"></span>\r\n                </span>\r\n              </span>\r\n            </div>\r\n            <div class=\"activity\">Punch Out</div>\r\n            <div class=\"time\">00:00:00</div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"attendance-timeline\">\r\n      <ion-item class=\"sort-item\">\r\n        <ion-label>\r\n          Logs\r\n        </ion-label>\r\n      </ion-item>\r\n      <div class=\"attendance-container left\">\r\n        <ion-list class=\"attendance-list\">\r\n          <div class=\"attendance-content\">\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity\">Punch In</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time\">10:00:00 AM</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"attendance-container left\">\r\n        <ion-list class=\"attendance-list\">\r\n          <div class=\"attendance-content\">\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity\">Punch In</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time\">10:00:00 AM</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"attendance-container left\">\r\n        <ion-list class=\"attendance-list\">\r\n          <div class=\"attendance-content\">\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity\">Punch In</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time\">10:00:00 AM</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"attendance-container left\">\r\n        <ion-list class=\"attendance-list\">\r\n          <div class=\"attendance-content\">\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity\">Punch In</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time\">10:00:00 AM</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n    <div class=\"attendance-hours\">09:00:00 Hours</div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/attendance/attendance-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/attendance/attendance-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AttendancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePageRoutingModule", function() { return AttendancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance.page */ "./src/app/attendance/attendance.page.ts");




var routes = [
    {
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_3__["AttendancePage"]
    }
];
var AttendancePageRoutingModule = /** @class */ (function () {
    function AttendancePageRoutingModule() {
    }
    AttendancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AttendancePageRoutingModule);
    return AttendancePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/attendance/attendance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/attendance/attendance.module.ts ***!
  \*************************************************/
/*! exports provided: AttendancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePageModule", function() { return AttendancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attendance-routing.module */ "./src/app/attendance/attendance-routing.module.ts");
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendance.page */ "./src/app/attendance/attendance.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var AttendancePageModule = /** @class */ (function () {
    function AttendancePageModule() {
    }
    AttendancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _attendance_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttendancePageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_6__["AttendancePage"]]
        })
    ], AttendancePageModule);
    return AttendancePageModule;
}());



/***/ }),

/***/ "./src/app/attendance/attendance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/attendance/attendance.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attendance-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 15px 30px 10px 50px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.09);\n}\n\n.attendance-list .attendance-content {\n  padding: 10px 20px 10px 20px;\n}\n\n.attendance-content {\n  top: 0;\n  width: 100%;\n}\n\n.attendance-timeline .sort-item {\n  width: 80px;\n  border-bottom: solid 1.5px #FE9C45;\n  margin: 10px;\n  padding: 0;\n  --padding-start: 0;\n  margin: 10px 0px 10px 50px;\n}\n\n.attendance-timeline .sort-item ion-label {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.attendance-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  margin-top: -125px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.attendance-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.attendance-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.attendance-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 20px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.attendance-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.attendance-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.attendance-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.attendance-content .activity {\n  font-family: \"Poppins-Regular\";\n}\n\n.attendance-content .time {\n  font-family: \"Poppins-Regular\";\n  font-weight: bold;\n  text-align: end;\n  white-space: nowrap;\n}\n\n.attendance-date {\n  font-family: \"Poppins-Medium\";\n  font-weight: bold;\n  font-size: 18px;\n  color: #fff;\n  text-align: center;\n}\n\n.punch-card {\n  border-radius: 40px;\n  background: white;\n  height: 190px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.punch-card .activity {\n  font-weight: bold;\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Poppins-Regular\";\n  color: black;\n  white-space: nowrap;\n}\n\n.punch-card .time {\n  font-size: 14px;\n  color: black;\n  font-family: \"Poppins-Regular\";\n  text-align: center;\n}\n\n.punchout-card {\n  margin-top: 50px;\n}\n\n.punchCards-row {\n  top: -115px;\n  padding: 0px 10px;\n  position: relative;\n}\n\n.punch-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.punch-empty-div {\n  background: #0A15D5;\n  height: 200px;\n}\n\n.attendance-hours {\n  border-radius: 30px;\n  border: solid 1px #FF9F55;\n  color: #FF9F55;\n  font-weight: 600;\n  font-size: 20px;\n  text-align: center;\n  margin: 25px 30px;\n  padding: 10px;\n}\n\n.custom-icon-verified-icon span,\n.custom-icon-punch-fingerprint-icon span {\n  font-family: \"newhrms\";\n}\n\n.finger-print-icon {\n  margin: 15px 0px;\n  text-align: center;\n  min-width: 75px;\n}\n\n.custom-icon-verified-icon {\n  font-size: 20px;\n  position: absolute;\n  margin-left: -20px;\n}\n\n.custom-icon-punch-fingerprint-icon {\n  font-size: 75px;\n}\n\n.custom-icon-punch-fingerprint-icon .path1 {\n  font-weight: bold;\n  color: #fe9c45;\n}\n\n.custom-icon-punch-fingerprint-icon .path2 {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kYW5jZS9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXGF0dGVuZGFuY2VcXGF0dGVuZGFuY2UucGFnZS5zY3NzIiwic3JjL2FwcC9hdHRlbmRhbmNlL2F0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrREFBQTtBQzNDSjs7QUQ4Q0E7RUFDSSw0QkFBQTtBQzNDSjs7QUQ4Q0E7RUFDSSxNQUFBO0VBQ0EsV0FBQTtBQzNDSjs7QUQ4Q0E7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUMzQ0o7O0FEOENBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDM0NKOztBRDhDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMzQ0o7O0FEK0NBLDZDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDNUNKOztBRCtDQSw2QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUM1Q0o7O0FEK0NBLGdDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUM1Q0o7O0FEK0NBO0VBQ0kseUJBQUE7QUM1Q0o7O0FEK0NBO0VBQ0kseUJBQUE7QUM1Q0o7O0FEK0NBLG9DQUFBOztBQUNBO0VBQ0ksT0FBQTtBQzVDSjs7QUQrQ0EsbUNBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDNUNKOztBRCtDQSwrQ0FBQTs7QUFDQTs7RUFFSSxVQUFBO0FDNUNKOztBRGdESTtFQUNJLDhCQUFBO0FDN0NSOztBRGdESTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUM5Q1I7O0FEa0RBO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUMvQ0o7O0FEa0RBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtBQy9DSjs7QURpREk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDL0NSOztBRGtESTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ2hEUjs7QURvREE7RUFDSSxnQkFBQTtBQ2pESjs7QURvREE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2pESjs7QURvREE7RUFDRyxnQkFBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2pESjs7QURvREE7RUFDUSxtQkFBQTtFQUNKLGFBQUE7QUNqREo7O0FEb0RBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ2pESjs7QURvREE7O0VBRUksc0JBQUE7QUNqREo7O0FEb0RBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNqREo7O0FEb0RBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNqREo7O0FEb0RBO0VBQ0ksZUFBQTtBQ2pESjs7QURtREk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNqRFI7O0FEb0RJO0VBQ0ksV0FBQTtBQ2xEUiIsImZpbGUiOiJzcmMvYXBwL2F0dGVuZGFuY2UvYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYXR0ZW5kYW5jZS1kYXRlIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmF0dGVuZGFuY2UtZGF5IHtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGNvbG9yOiAjNzc3O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAudGltZS1yb3cge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNSU7XHJcbi8vIH1cclxuXHJcbi8vIC5hdHRlbmRhbmNlLXRpbWUge1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuLy8gICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4vLyAgICAgbWF4LXdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLmF0dGVuZGFuY2UtaG91cnMge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuYXR0ZW5kYW5jZS1ob3Vycy1zcGFuIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbi8vICAgICBjb2xvcjogIzNhNTdjNDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gQXR0ZW5kYW5jZSBQdW5jaCBJbi9PdXQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAtLT5cclxuXHJcblxyXG4uYXR0ZW5kYW5jZS1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTVweCAzMHB4IDEwcHggNTBweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS1saXN0IC5hdHRlbmRhbmNlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtY29udGVudCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtdGltZWxpbmUgLnNvcnQtaXRlbSB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEuNXB4ICNGRTlDNDU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDUwcHg7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLXRpbWVsaW5lIC5zb3J0LWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS10aW1lbGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogLTEyNXB4O1xyXG59XHJcblxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4uYXR0ZW5kYW5jZS10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5hdHRlbmRhbmNlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmF0dGVuZGFuY2UtY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLmF0dGVuZGFuY2UtdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4ubGVmdDo6YWZ0ZXIsXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtY29udGVudCB7XHJcbiAgICAuYWN0aXZpdHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC50aW1lIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxufVxyXG5cclxuLmF0dGVuZGFuY2UtZGF0ZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnB1bmNoLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG5cclxuICAgIC5hY3Rpdml0eSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAudGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wdW5jaG91dC1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5wdW5jaENhcmRzLXJvdyB7XHJcbiAgICB0b3A6IC0xMTVweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHVuY2gtY29udGVudC1kaXYge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHVuY2gtZW1wdHktZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtaG91cnMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNGRjlGNTU7XHJcbiAgICBjb2xvcjogI0ZGOUY1NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI1cHggMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi12ZXJpZmllZC1pY29uIHNwYW4sXHJcbi5jdXN0b20taWNvbi1wdW5jaC1maW5nZXJwcmludC1pY29uIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICduZXdocm1zJztcclxufVxyXG5cclxuLmZpbmdlci1wcmludC1pY29uIHtcclxuICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDc1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi12ZXJpZmllZC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLXB1bmNoLWZpbmdlcnByaW50LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA3NXB4O1xyXG5cclxuICAgIC5wYXRoMSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmZTljNDU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGgyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufSIsIi5hdHRlbmRhbmNlLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDE1cHggMzBweCAxMHB4IDUwcHg7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuXG4uYXR0ZW5kYW5jZS1saXN0IC5hdHRlbmRhbmNlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xufVxuXG4uYXR0ZW5kYW5jZS1jb250ZW50IHtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmF0dGVuZGFuY2UtdGltZWxpbmUgLnNvcnQtaXRlbSB7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxLjVweCAjRkU5QzQ1O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDUwcHg7XG59XG5cbi5hdHRlbmRhbmNlLXRpbWVsaW5lIC5zb3J0LWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmF0dGVuZGFuY2UtdGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogLTEyNXB4O1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4uYXR0ZW5kYW5jZS10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmF0dGVuZGFuY2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5hdHRlbmRhbmNlLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uYXR0ZW5kYW5jZS1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uYXR0ZW5kYW5jZS1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi5hdHRlbmRhbmNlLXRpbWVsaW5lOjphZnRlciB7XG4gIGxlZnQ6IDMxcHg7XG59XG5cbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuLmxlZnQ6OmFmdGVyLFxuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbi5hdHRlbmRhbmNlLWNvbnRlbnQgLmFjdGl2aXR5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG59XG4uYXR0ZW5kYW5jZS1jb250ZW50IC50aW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hdHRlbmRhbmNlLWRhdGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHVuY2gtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDE5MHB4O1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cbi5wdW5jaC1jYXJkIC5hY3Rpdml0eSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5wdW5jaC1jYXJkIC50aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wdW5jaG91dC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnB1bmNoQ2FyZHMtcm93IHtcbiAgdG9wOiAtMTE1cHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wdW5jaC1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHVuY2gtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmF0dGVuZGFuY2UtaG91cnMge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRkY5RjU1O1xuICBjb2xvcjogI0ZGOUY1NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjVweCAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiBzcGFuLFxuLmN1c3RvbS1pY29uLXB1bmNoLWZpbmdlcnByaW50LWljb24gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIjtcbn1cblxuLmZpbmdlci1wcmludC1pY29uIHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDc1cHg7XG59XG5cbi5jdXN0b20taWNvbi12ZXJpZmllZC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLmN1c3RvbS1pY29uLXB1bmNoLWZpbmdlcnByaW50LWljb24ge1xuICBmb250LXNpemU6IDc1cHg7XG59XG4uY3VzdG9tLWljb24tcHVuY2gtZmluZ2VycHJpbnQtaWNvbiAucGF0aDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZTljNDU7XG59XG4uY3VzdG9tLWljb24tcHVuY2gtZmluZ2VycHJpbnQtaWNvbiAucGF0aDIge1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/attendance/attendance.page.ts":
/*!***********************************************!*\
  !*** ./src/app/attendance/attendance.page.ts ***!
  \***********************************************/
/*! exports provided: AttendancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePage", function() { return AttendancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




var AttendancePage = /** @class */ (function () {
    function AttendancePage(util) {
        this.util = util;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.date = new Date("28 Nov 2018");
        this.day = days[this.date.getDay() + 1];
    }
    AttendancePage.prototype.ngOnInit = function () {
    };
    AttendancePage.prototype.punchIn = function () {
        this.punchedIn = new Date();
    };
    AttendancePage.prototype.punchOut = function () {
        this.punchedOut = new Date();
        var diff = Math.floor(this.punchedOut.valueOf() - this.punchedIn.valueOf());
        var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
        var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes
        this.hours = diffHrs + "." + diffMins + " Hours";
    };
    AttendancePage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
    ]; };
    AttendancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! raw-loader!./attendance.page.html */ "./node_modules/raw-loader/index.js!./src/app/attendance/attendance.page.html"),
            styles: [__webpack_require__(/*! ./attendance.page.scss */ "./src/app/attendance/attendance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], AttendancePage);
    return AttendancePage;
}());



/***/ })

}]);
//# sourceMappingURL=attendance-attendance-module-es5.js.map