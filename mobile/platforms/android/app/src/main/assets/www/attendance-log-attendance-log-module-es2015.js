(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-log-attendance-log-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/attendance-log/attendance-log.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/attendance-log/attendance-log.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Attendance</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <!------------------------------------------------- Attendance Individual Log ------------------------------------>\r\n  <div class=\"empty-div\">\r\n    <div class=\"empty-div\">\r\n      <ion-item lines=\"none\">\r\n        <span slot=\"start\" class=\"head-title\">{{viewTitle}}</span> <span slot=\"end\" class=\"custom-icon-calendar-icon\"\r\n          (click)=\"showModal($event)\"></span>\r\n      </ion-item>\r\n      <calendar [formatWeekTitle]=\"'MMMM, yyy'\" [formatWeekViewDayHeader]=\"'EEEEE dd'\" [calendarMode]=\"calendar.mode\"\r\n        [currentDate]=\"calendar.currentDate\" (onCurrentDateChanged)=\"onCurrentDateChanged($event)\"\r\n        (onTitleChanged)=\"onViewTitleChanged($event)\" step=\"30\">\r\n      </calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content-div\">\r\n    <ion-row class=\"page-btn\">\r\n      <ion-col size=\"2\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <span>PREVIOUS</span>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"end\">\r\n        <span>NEXT</span>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"end\">\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"attendance-timeline\">\r\n      <h4 class=\"seg-title\">Jone Deo</h4>\r\n      <div class=\"border\"></div>\r\n      <div class=\"attendance-container left\">\r\n        <ion-list class=\"attendance-list\">\r\n          <div class=\"attendance-content\">\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity-in\">Punch In</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity-out\">Punch Out</div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time-in\">10:00:00 AM</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time-out\">10:00:00 AM</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"attendance-container left\">\r\n        <ion-list class=\"attendance-list\">\r\n          <div class=\"attendance-content\">\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity-in\">Punch In</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity-out\">Punch Out</div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time-in\">10:00:00 AM</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time-out\">10:00:00 AM</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"attendance-container left\">\r\n        <ion-list class=\"attendance-list\">\r\n          <div class=\"attendance-content\">\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity-in\">Punch In</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"activity-out\">Punch Out</div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time-in\">10:00:00 AM</div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"time-out\">10:00:00 AM</div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n    <div class=\"attendance-hours\">09:00:00 Hours</div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/attendance-log/attendance-log-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/attendance-log/attendance-log-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AttendanceLogPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceLogPageRoutingModule", function() { return AttendanceLogPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _attendance_log_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance-log.page */ "./src/app/attendance-log/attendance-log.page.ts");




const routes = [
    {
        path: '',
        component: _attendance_log_page__WEBPACK_IMPORTED_MODULE_3__["AttendanceLogPage"]
    }
];
let AttendanceLogPageRoutingModule = class AttendanceLogPageRoutingModule {
};
AttendanceLogPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AttendanceLogPageRoutingModule);



/***/ }),

/***/ "./src/app/attendance-log/attendance-log.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/attendance-log/attendance-log.module.ts ***!
  \*********************************************************/
/*! exports provided: AttendanceLogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceLogPageModule", function() { return AttendanceLogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _attendance_log_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attendance-log-routing.module */ "./src/app/attendance-log/attendance-log-routing.module.ts");
/* harmony import */ var _attendance_log_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendance-log.page */ "./src/app/attendance-log/attendance-log.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








let AttendanceLogPageModule = class AttendanceLogPageModule {
};
AttendanceLogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _attendance_log_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttendanceLogPageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]
        ],
        declarations: [_attendance_log_page__WEBPACK_IMPORTED_MODULE_6__["AttendanceLogPage"]]
    })
], AttendanceLogPageModule);



/***/ }),

/***/ "./src/app/attendance-log/attendance-log.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/attendance-log/attendance-log.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  margin-top: -50px;\n  position: relative;\n  width: 100%;\n  min-height: calc(100vh - 200px);\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 200px;\n}\n\n.empty-div ion-item {\n  margin-bottom: 10px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.custom-icon-calendar-icon {\n  font-size: 25px;\n}\n\n.custom-icon-calendar-icon:before {\n  color: white !important;\n}\n\n.attendance-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 15px 30px 10px 50px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.09);\n}\n\n.attendance-list .attendance-content {\n  padding: 10px 20px 10px 20px;\n}\n\n.attendance-content {\n  top: 0;\n  width: 100%;\n}\n\n.attendance-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  margin-top: 10px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.attendance-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.attendance-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.attendance-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 20px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.attendance-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.attendance-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.attendance-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.attendance-content ion-row ion-col {\n  padding: 0;\n}\n\n.attendance-content .activity-in,\n.attendance-content .activity-out {\n  font-family: \"Poppins-Regular\";\n}\n\n.attendance-content .time-in,\n.attendance-content .time-out {\n  font-family: \"Poppins-Regular\";\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.attendance-content .activity-out {\n  text-align: end;\n}\n\n.attendance-content .time-out {\n  text-align: end;\n}\n\n.attendance-hours {\n  border-radius: 30px;\n  border: solid 1px #FF9F55;\n  color: #FF9F55;\n  font-weight: 600;\n  font-size: 20px;\n  text-align: center;\n  margin: 25px 30px;\n  padding: 10px;\n}\n\n.seg-title {\n  font-size: 18px;\n  font-weight: bold;\n  margin-left: 50px;\n}\n\n.border {\n  margin-left: 50px;\n  border-top: solid 2px #FE9C45;\n  width: 80px;\n}\n\n.page-btn {\n  padding: 20px;\n}\n\n.page-btn ion-col {\n  margin: auto 0;\n}\n\n.page-btn ion-col ion-icon,\n.page-btn span {\n  color: #ff9f55;\n  font-size: 25px;\n}\n\n.page-btn ion-col ion-icon {\n  background: rgba(247, 208, 179, 0.8117647059);\n  padding: 6px;\n  border-radius: 50px;\n}\n\n.page-btn ion-col span {\n  font-size: 16px !important;\n}\n\n.page-btn .end {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kYW5jZS1sb2cvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcYXR0ZW5kYW5jZS1sb2dcXGF0dGVuZGFuY2UtbG9nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXR0ZW5kYW5jZS1sb2cvYXR0ZW5kYW5jZS1sb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVJO0VBQ0ksbUJBQUE7QUNBUjs7QURJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLHVCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0RBQUE7QUNESjs7QURJQTtFQUNJLDRCQUFBO0FDREo7O0FESUE7RUFDSSxNQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRE1BLDZDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDSEo7O0FETUEsNkJBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDSEo7O0FETUEsZ0NBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0FDSEo7O0FETUEsb0NBQUE7O0FBQ0E7RUFDSSxPQUFBO0FDSEo7O0FETUEsbUNBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDSEo7O0FETUEsK0NBQUE7O0FBQ0E7O0VBRUksVUFBQTtBQ0hKOztBRE9JO0VBQ0ksVUFBQTtBQ0pSOztBRE9JOztFQUVJLDhCQUFBO0FDTFI7O0FEUUk7O0VBRUksOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTlI7O0FEU0k7RUFDSSxlQUFBO0FDUFI7O0FEVUk7RUFDSSxlQUFBO0FDUlI7O0FEWUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDVEo7O0FEWUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFlBO0VBQ0ksaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNUSjs7QURZQTtFQUNJLGFBQUE7QUNUSjs7QURXSTtFQUNJLGNBQUE7QUNUUjs7QURZSTs7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBQ1ZSOztBRGFJO0VBQ0ksNkNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNYUjs7QURjSTtFQUNJLDBCQUFBO0FDWlI7O0FEZUk7RUFDSSxlQUFBO0FDYlIiLCJmaWxlIjoic3JjL2FwcC9hdHRlbmRhbmNlLWxvZy9hdHRlbmRhbmNlLWxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEF0dGVuZGFuY2UgSW52aWR1YWwgUGVyc29uIEhpc3RvcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5jb250ZW50LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTs7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XHJcbn1cclxuXHJcbi5lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1jYWxlbmRhci1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWNhbGVuZGFyLWljb246YmVmb3JlIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTVweCAzMHB4IDEwcHggNTBweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS1saXN0IC5hdHRlbmRhbmNlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtY29udGVudCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5hdHRlbmRhbmNlLXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4uYXR0ZW5kYW5jZS10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5hdHRlbmRhbmNlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmF0dGVuZGFuY2UtY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLmF0dGVuZGFuY2UtdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4ubGVmdDo6YWZ0ZXIsXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2UtY29udGVudCB7XHJcbiAgICBpb24tcm93IGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2aXR5LWluLFxyXG4gICAgLmFjdGl2aXR5LW91dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbWUtaW4sXHJcbiAgICAudGltZS1vdXQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2aXR5LW91dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC50aW1lLW91dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS1ob3VycyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGOUY1NTtcclxuICAgIGNvbG9yOiAjRkY5RjU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjVweCAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNlZy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNGRTlDNDU7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLnBhZ2UtYnRuIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCBpb24taWNvbixcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjZmY5ZjU1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY29sIGlvbi1pY29uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjA4LCAxNzksIDAuODExNzY0NzA1ODgyMzUyOSk7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbCBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZW5kIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB9XHJcbn0iLCIuY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG59XG5cbi5lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLmVtcHR5LWRpdiBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jdXN0b20taWNvbi1jYWxlbmRhci1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbjpiZWZvcmUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmF0dGVuZGFuY2UtbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTVweCAzMHB4IDEwcHggNTBweDtcbiAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG59XG5cbi5hdHRlbmRhbmNlLWxpc3QgLmF0dGVuZGFuY2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG59XG5cbi5hdHRlbmRhbmNlLWNvbnRlbnQge1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXR0ZW5kYW5jZS10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4uYXR0ZW5kYW5jZS10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmF0dGVuZGFuY2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5hdHRlbmRhbmNlLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uYXR0ZW5kYW5jZS1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uYXR0ZW5kYW5jZS1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi5hdHRlbmRhbmNlLXRpbWVsaW5lOjphZnRlciB7XG4gIGxlZnQ6IDMxcHg7XG59XG5cbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuLmxlZnQ6OmFmdGVyLFxuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbi5hdHRlbmRhbmNlLWNvbnRlbnQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbi5hdHRlbmRhbmNlLWNvbnRlbnQgLmFjdGl2aXR5LWluLFxuLmF0dGVuZGFuY2UtY29udGVudCAuYWN0aXZpdHktb3V0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG59XG4uYXR0ZW5kYW5jZS1jb250ZW50IC50aW1lLWluLFxuLmF0dGVuZGFuY2UtY29udGVudCAudGltZS1vdXQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYXR0ZW5kYW5jZS1jb250ZW50IC5hY3Rpdml0eS1vdXQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4uYXR0ZW5kYW5jZS1jb250ZW50IC50aW1lLW91dCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmF0dGVuZGFuY2UtaG91cnMge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRkY5RjU1O1xuICBjb2xvcjogI0ZGOUY1NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjVweCAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VnLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5ib3JkZXIge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNGRTlDNDU7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4ucGFnZS1idG4ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnBhZ2UtYnRuIGlvbi1jb2wge1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbi5wYWdlLWJ0biBpb24tY29sIGlvbi1pY29uLFxuLnBhZ2UtYnRuIHNwYW4ge1xuICBjb2xvcjogI2ZmOWY1NTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLnBhZ2UtYnRuIGlvbi1jb2wgaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjA4LCAxNzksIDAuODExNzY0NzA1OSk7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5wYWdlLWJ0biBpb24tY29sIHNwYW4ge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cbi5wYWdlLWJ0biAuZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/attendance-log/attendance-log.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/attendance-log/attendance-log.page.ts ***!
  \*******************************************************/
/*! exports provided: AttendanceLogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceLogPage", function() { return AttendanceLogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_pop_over_home_pop_over_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-pop-over/home-pop-over.component */ "./src/app/home-pop-over/home-pop-over.component.ts");





let AttendanceLogPage = class AttendanceLogPage {
    constructor(util, events, popoverController) {
        this.util = util;
        this.events = events;
        this.popoverController = popoverController;
        this.calendar = {
            mode: 'week',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'MonMH';
                },
                formatMonthViewTitle: function (date) {
                    return 'testMT';
                },
                formatWeekViewDayHeader: function (date) {
                    return 'MonWH';
                },
                formatWeekViewTitle: function (date) {
                    return 'testWT';
                },
                formatWeekViewHourColumn: function (date) {
                    return 'testWH';
                },
                formatDayViewHourColumn: function (date) {
                    return 'testDH';
                },
                formatDayViewTitle: function (date) {
                    return 'testDT';
                }
            }
        };
    }
    ngOnInit() {
        this.events.subscribe('calendarModal', (btn) => {
            this.onPopOverDismiss(btn);
        });
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onCurrentDateChanged(event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }
    showModal(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _home_pop_over_home_pop_over_component__WEBPACK_IMPORTED_MODULE_4__["HomePopOverComponent"],
                event: ev,
                translucent: true,
                componentProps: {
                    "type": "calendarModal"
                }
            });
            // popover.style.cssText = '--max-width: 125px; margin:-12px 0px 0px -17px;';
            return yield popover.present();
        });
    }
    onPopOverDismiss(date) {
        this.calendar.currentDate = new Date(date.data);
    }
    ngOnDestroy() {
        this.events.unsubscribe('calendarModal');
    }
};
AttendanceLogPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
AttendanceLogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attendance-log',
        template: __webpack_require__(/*! raw-loader!./attendance-log.page.html */ "./node_modules/raw-loader/index.js!./src/app/attendance-log/attendance-log.page.html"),
        styles: [__webpack_require__(/*! ./attendance-log.page.scss */ "./src/app/attendance-log/attendance-log.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
], AttendanceLogPage);



/***/ })

}]);
//# sourceMappingURL=attendance-log-attendance-log-module-es2015.js.map