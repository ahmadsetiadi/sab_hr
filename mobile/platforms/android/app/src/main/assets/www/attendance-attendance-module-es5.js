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

module.exports = ".attendance-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 15px 30px 10px 50px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.09);\n}\n\n.attendance-list .attendance-content {\n  padding: 10px 20px 10px 20px;\n}\n\n.attendance-content {\n  top: 0;\n  width: 100%;\n}\n\n.attendance-timeline .sort-item {\n  width: 80px;\n  border-bottom: solid 1.5px #FE9C45;\n  margin: 10px;\n  padding: 0;\n  --padding-start: 0;\n  margin: 10px 0px 10px 50px;\n}\n\n.attendance-timeline .sort-item ion-label {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.attendance-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  margin-top: -125px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.attendance-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.attendance-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.attendance-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 20px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.attendance-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.attendance-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.attendance-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.attendance-content .activity {\n  font-family: \"Poppins-Regular\";\n}\n\n.attendance-content .time {\n  font-family: \"Poppins-Regular\";\n  font-weight: bold;\n  text-align: end;\n  white-space: nowrap;\n}\n\n.attendance-date {\n  font-family: \"Poppins-Medium\";\n  font-weight: bold;\n  font-size: 18px;\n  color: #fff;\n  text-align: center;\n}\n\n.punch-card {\n  border-radius: 40px;\n  background: white;\n  height: 190px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.punch-card .activity {\n  font-weight: bold;\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Poppins-Regular\";\n  color: black;\n  white-space: nowrap;\n}\n\n.punch-card .time {\n  font-size: 14px;\n  color: black;\n  font-family: \"Poppins-Regular\";\n  text-align: center;\n}\n\n.punchout-card {\n  margin-top: 50px;\n}\n\n.punchCards-row {\n  top: -115px;\n  padding: 0px 10px;\n  position: relative;\n}\n\n.punch-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.punch-empty-div {\n  background: #0A15D5;\n  height: 200px;\n}\n\n.attendance-hours {\n  border-radius: 30px;\n  border: solid 1px #FF9F55;\n  color: #FF9F55;\n  font-weight: 600;\n  font-size: 20px;\n  text-align: center;\n  margin: 25px 30px;\n  padding: 10px;\n}\n\n.custom-icon-verified-icon span,\n.custom-icon-punch-fingerprint-icon span {\n  font-family: \"newhrms\";\n}\n\n.finger-print-icon {\n  margin: 15px 0px;\n  text-align: center;\n  min-width: 75px;\n}\n\n.custom-icon-verified-icon {\n  font-size: 20px;\n  position: absolute;\n  margin-left: -20px;\n}\n\n.custom-icon-punch-fingerprint-icon {\n  font-size: 75px;\n}\n\n.custom-icon-punch-fingerprint-icon .path1 {\n  font-weight: bold;\n  color: #fe9c45;\n}\n\n.custom-icon-punch-fingerprint-icon .path2 {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kYW5jZS9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFxhdHRlbmRhbmNlXFxhdHRlbmRhbmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0RBQUE7QUMzQ0o7O0FEOENBO0VBQ0ksNEJBQUE7QUMzQ0o7O0FEOENBO0VBQ0ksTUFBQTtFQUNBLFdBQUE7QUMzQ0o7O0FEOENBO0VBQ0ksV0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDM0NKOztBRDhDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQzNDSjs7QUQ4Q0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDM0NKOztBRCtDQSw2Q0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQzVDSjs7QUQrQ0EsNkJBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDNUNKOztBRCtDQSxnQ0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDNUNKOztBRCtDQTtFQUNJLHlCQUFBO0FDNUNKOztBRCtDQTtFQUNJLHlCQUFBO0FDNUNKOztBRCtDQSxvQ0FBQTs7QUFDQTtFQUNJLE9BQUE7QUM1Q0o7O0FEK0NBLG1DQUFBOztBQUNBO0VBQ0ksVUFBQTtBQzVDSjs7QUQrQ0EsK0NBQUE7O0FBQ0E7O0VBRUksVUFBQTtBQzVDSjs7QURnREk7RUFDSSw4QkFBQTtBQzdDUjs7QURnREk7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDOUNSOztBRGtEQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDL0NKOztBRGtEQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7QUMvQ0o7O0FEaURJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQy9DUjs7QURrREk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNoRFI7O0FEb0RBO0VBQ0ksZ0JBQUE7QUNqREo7O0FEb0RBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNqREo7O0FEb0RBO0VBQ0csZ0JBQUE7RUFDQyxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNqREo7O0FEb0RBO0VBQ1EsbUJBQUE7RUFDSixhQUFBO0FDakRKOztBRG9EQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNqREo7O0FEb0RBOztFQUVJLHNCQUFBO0FDakRKOztBRG9EQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDakRKOztBRG9EQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDakRKOztBRG9EQTtFQUNJLGVBQUE7QUNqREo7O0FEbURJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDakRSOztBRG9ESTtFQUNJLFdBQUE7QUNsRFIiLCJmaWxlIjoic3JjL2FwcC9hdHRlbmRhbmNlL2F0dGVuZGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmF0dGVuZGFuY2UtZGF0ZSB7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5hdHRlbmRhbmNlLWRheSB7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBjb2xvcjogIzc3NztcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLnRpbWUtcm93IHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDUlO1xyXG4vLyB9XHJcblxyXG4vLyAuYXR0ZW5kYW5jZS10aW1lIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbi8vICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcclxuLy8gICAgIG1heC13aWR0aDogNDUlICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hdHRlbmRhbmNlLWhvdXJzIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmF0dGVuZGFuY2UtaG91cnMtc3BhbiB7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgY29sb3I6ICMzYTU3YzQ7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEF0dGVuZGFuY2UgUHVuY2ggSW4vT3V0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLS0+XHJcblxyXG5cclxuLmF0dGVuZGFuY2UtbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDE1cHggMzBweCAxMHB4IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtbGlzdCAuYXR0ZW5kYW5jZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLWNvbnRlbnQge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLXRpbWVsaW5lIC5zb3J0LWl0ZW0ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxLjVweCAjRkU5QzQ1O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCA1MHB4O1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS10aW1lbGluZSAuc29ydC1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtdGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IC0xMjVweDtcclxufVxyXG5cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLmF0dGVuZGFuY2UtdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4uYXR0ZW5kYW5jZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcbi5hdHRlbmRhbmNlLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cclxuLmxlZnQge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbi5hdHRlbmRhbmNlLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG59XHJcblxyXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuLmxlZnQ6OmFmdGVyLFxyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLWNvbnRlbnQge1xyXG4gICAgLmFjdGl2aXR5IHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgIH1cclxuXHJcbiAgICAudGltZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLWRhdGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wdW5jaC1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuXHJcbiAgICAuYWN0aXZpdHkge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHVuY2hvdXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ucHVuY2hDYXJkcy1yb3cge1xyXG4gICAgdG9wOiAtMTE1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnB1bmNoLWNvbnRlbnQtZGl2IHtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnB1bmNoLWVtcHR5LWRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLWhvdXJzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRkY5RjU1O1xyXG4gICAgY29sb3I6ICNGRjlGNTU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNXB4IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiBzcGFuLFxyXG4uY3VzdG9tLWljb24tcHVuY2gtZmluZ2VycHJpbnQtaWNvbiBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbmV3aHJtcyc7XHJcbn1cclxuXHJcbi5maW5nZXItcHJpbnQtaWNvbiB7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiA3NXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1wdW5jaC1maW5nZXJwcmludC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNzVweDtcclxuXHJcbiAgICAucGF0aDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjZmU5YzQ1O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXRoMiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn0iLCIuYXR0ZW5kYW5jZS1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxNXB4IDMwcHggMTBweCA1MHB4O1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuLmF0dGVuZGFuY2UtbGlzdCAuYXR0ZW5kYW5jZS1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbn1cblxuLmF0dGVuZGFuY2UtY29udGVudCB7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdHRlbmRhbmNlLXRpbWVsaW5lIC5zb3J0LWl0ZW0ge1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMS41cHggI0ZFOUM0NTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA1MHB4O1xufVxuXG4uYXR0ZW5kYW5jZS10aW1lbGluZSAuc29ydC1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hdHRlbmRhbmNlLXRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IC0xMjVweDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLmF0dGVuZGFuY2UtdGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5hdHRlbmRhbmNlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXG4uYXR0ZW5kYW5jZS1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmF0dGVuZGFuY2UtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcbn1cblxuLmF0dGVuZGFuY2UtY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XG59XG5cbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cbi5sZWZ0IHtcbiAgbGVmdDogMDtcbn1cblxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXG4uYXR0ZW5kYW5jZS10aW1lbGluZTo6YWZ0ZXIge1xuICBsZWZ0OiAzMXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlcixcbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uYXR0ZW5kYW5jZS1jb250ZW50IC5hY3Rpdml0eSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xufVxuLmF0dGVuZGFuY2UtY29udGVudCAudGltZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYXR0ZW5kYW5jZS1kYXRlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnB1bmNoLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG4ucHVuY2gtY2FyZCAuYWN0aXZpdHkge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBjb2xvcjogYmxhY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucHVuY2gtY2FyZCAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHVuY2hvdXQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5wdW5jaENhcmRzLXJvdyB7XG4gIHRvcDogLTExNXB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHVuY2gtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnB1bmNoLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5hdHRlbmRhbmNlLWhvdXJzIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGOUY1NTtcbiAgY29sb3I6ICNGRjlGNTU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDI1cHggMzBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmN1c3RvbS1pY29uLXZlcmlmaWVkLWljb24gc3Bhbixcbi5jdXN0b20taWNvbi1wdW5jaC1maW5nZXJwcmludC1pY29uIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XG59XG5cbi5maW5nZXItcHJpbnQtaWNvbiB7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiA3NXB4O1xufVxuXG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5jdXN0b20taWNvbi1wdW5jaC1maW5nZXJwcmludC1pY29uIHtcbiAgZm9udC1zaXplOiA3NXB4O1xufVxuLmN1c3RvbS1pY29uLXB1bmNoLWZpbmdlcnByaW50LWljb24gLnBhdGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmU5YzQ1O1xufVxuLmN1c3RvbS1pY29uLXB1bmNoLWZpbmdlcnByaW50LWljb24gLnBhdGgyIHtcbiAgY29sb3I6ICNmZmY7XG59Il19 */"

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