(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-list-attendance-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/attendance-list/attendance-list.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/attendance-list/attendance-list.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Attendance</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- ============================== Attendance (List of employees) ============================== -->\r\n<ion-content>\r\n  <div class=\"empty-div\">\r\n    <ion-item lines=\"none\">\r\n      <span slot=\"start\" class=\"head-title\">{{viewTitle}}</span> <span slot=\"end\" class=\"custom-icon-calendar-icon\"\r\n        (click)=\"showModal($event)\"></span>\r\n    </ion-item>\r\n    <calendar [formatWeekTitle]=\"'MMMM, yyy'\" [formatWeekViewDayHeader]=\"'EEEEE dd'\" [calendarMode]=\"calendar.mode\"\r\n      [currentDate]=\"calendar.currentDate\" (onCurrentDateChanged)=\"onCurrentDateChanged($event)\"\r\n      (onTitleChanged)=\"onViewTitleChanged($event)\" step=\"30\">\r\n    </calendar>\r\n  </div>\r\n  <div class=\"content-div\">\r\n    <div class=\"head-label\">Employees</div>\r\n    <div class=\"card-list\">\r\n      <ion-row>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"present-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"present-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"absent-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"present-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"absent-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"present-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"absent-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"present-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"absent-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"present-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"absent-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"present-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"absent-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-card class=\"employee-card\" (click)=\"viewLog()\">\r\n            <div class=\"absent-icon-div\">\r\n              <span></span>\r\n            </div>\r\n            <ion-card-content>\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">John Deo</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/attendance-list/attendance-list-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/attendance-list/attendance-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AttendanceListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceListPageRoutingModule", function() { return AttendanceListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _attendance_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance-list.page */ "./src/app/attendance-list/attendance-list.page.ts");




var routes = [
    {
        path: '',
        component: _attendance_list_page__WEBPACK_IMPORTED_MODULE_3__["AttendanceListPage"]
    }
];
var AttendanceListPageRoutingModule = /** @class */ (function () {
    function AttendanceListPageRoutingModule() {
    }
    AttendanceListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AttendanceListPageRoutingModule);
    return AttendanceListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/attendance-list/attendance-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/attendance-list/attendance-list.module.ts ***!
  \***********************************************************/
/*! exports provided: AttendanceListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceListPageModule", function() { return AttendanceListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _attendance_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attendance-list-routing.module */ "./src/app/attendance-list/attendance-list-routing.module.ts");
/* harmony import */ var _attendance_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendance-list.page */ "./src/app/attendance-list/attendance-list.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








var AttendanceListPageModule = /** @class */ (function () {
    function AttendanceListPageModule() {
    }
    AttendanceListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _attendance_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttendanceListPageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]
            ],
            declarations: [_attendance_list_page__WEBPACK_IMPORTED_MODULE_6__["AttendanceListPage"]]
        })
    ], AttendanceListPageModule);
    return AttendanceListPageModule;
}());



/***/ }),

/***/ "./src/app/attendance-list/attendance-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/attendance-list/attendance-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-icon {\n  text-align: center;\n  font-size: 30px;\n}\n\n.user-name {\n  font-size: 10px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"Poppins-Regular\";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 10px;\n}\n\n.employee-card {\n  box-shadow: 2px 2px 20px 20px #EFEFEF;\n  border-radius: 12px;\n  background: white;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  margin: 0;\n  height: 90px;\n  width: 100%;\n  overflow: inherit;\n}\n\n.employee-card .card-content-md,\n.employee-card .card-content-ios {\n  padding: 20px 0px 20px 0;\n}\n\n.content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -70px;\n  position: relative;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 200px;\n}\n\n.empty-div ion-item {\n  margin-bottom: 10px;\n}\n\n.card-list {\n  position: relative;\n  padding: 0 15px 0 15px;\n}\n\n.card-list ion-row ion-col {\n  padding: 10px 8px;\n}\n\n.head-label {\n  margin: 25px 0px 25px 40px;\n  font-weight: bold;\n  font-family: \"Poppins-Regular\";\n  padding-top: 20px;\n}\n\n.status-icon-div {\n  text-align: end;\n}\n\n.present-icon-div span {\n  background: #21D064;\n  border-radius: 10px;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  right: 0px;\n  z-index: 10;\n}\n\n.absent-icon-div span {\n  background: #EF0909;\n  border-radius: 10px;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  right: 0px;\n  z-index: 10;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.custom-icon-calendar-icon {\n  font-size: 25px;\n}\n\n.custom-icon-calendar-icon:before {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kYW5jZS1saXN0L0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXGF0dGVuZGFuY2UtbGlzdFxcYXR0ZW5kYW5jZS1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXR0ZW5kYW5jZS1saXN0L2F0dGVuZGFuY2UtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUE7RUFDSSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDREo7O0FET0k7O0VBRUksd0JBQUE7QUNKUjs7QURTQTtFQUNFLGdCQUFBO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTko7O0FEU0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNOSjs7QURRSTtFQUNJLG1CQUFBO0FDTlI7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FDUEo7O0FEVUE7RUFDSSxpQkFBQTtBQ1BKOztBRFVBO0VBQ00sMEJBQUE7RUFDRixpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURVQTtFQUNJLGVBQUE7QUNQSjs7QURVQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNQSjs7QURVQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNQSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURVQTtFQUNJLGVBQUE7QUNQSjs7QURVQTtFQUNJLHVCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9hdHRlbmRhbmNlLWxpc3QvYXR0ZW5kYW5jZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEF0dGVuZGFuY2UgTG9nIChMaXN0IE9mIEVtcGxveWVzcykgPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLnVzZXItaWNvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcblxyXG4uZW1wbG95ZWUtY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggMjBweCAjRUZFRkVGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbi5lbXBsb3llZS1jYXJkIHtcclxuXHJcbiAgICAuY2FyZC1jb250ZW50LW1kLFxyXG4gICAgLmNhcmQtY29udGVudC1pb3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5jb250ZW50LWRpdiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1saXN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWxpc3QgaW9uLXJvdyBpb24tY29sIHtcclxuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xyXG59XHJcblxyXG4uaGVhZC1sYWJlbCB7XHJcbiAgICAgIG1hcmdpbjogMjVweCAwcHggMjVweCA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLWljb24tZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnByZXNlbnQtaWNvbi1kaXYgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjFEMDY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uYWJzZW50LWljb24tZGl2IHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogI0VGMDkwOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmhlYWQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWNhbGVuZGFyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbjpiZWZvcmUge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iLCIudXNlci1pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi51c2VyLW5hbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uZW1wbG95ZWUtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMjBweCAyMHB4ICNFRkVGRUY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cblxuLmVtcGxveWVlLWNhcmQgLmNhcmQtY29udGVudC1tZCxcbi5lbXBsb3llZS1jYXJkIC5jYXJkLWNvbnRlbnQtaW9zIHtcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAwO1xufVxuXG4uY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uZW1wdHktZGl2IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcbn1cblxuLmNhcmQtbGlzdCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAxMHB4IDhweDtcbn1cblxuLmhlYWQtbGFiZWwge1xuICBtYXJnaW46IDI1cHggMHB4IDI1cHggNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnN0YXR1cy1pY29uLWRpdiB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLnByZXNlbnQtaWNvbi1kaXYgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMyMUQwNjQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5hYnNlbnQtaWNvbi1kaXYgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNFRjA5MDk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jdXN0b20taWNvbi1jYWxlbmRhci1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbjpiZWZvcmUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/attendance-list/attendance-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/attendance-list/attendance-list.page.ts ***!
  \*********************************************************/
/*! exports provided: AttendanceListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceListPage", function() { return AttendanceListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_pop_over_home_pop_over_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-pop-over/home-pop-over.component */ "./src/app/home-pop-over/home-pop-over.component.ts");





var AttendanceListPage = /** @class */ (function () {
    function AttendanceListPage(util, navCtrl, events, popoverController) {
        this.util = util;
        this.navCtrl = navCtrl;
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
    AttendanceListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe('calendarModal1', function (btn) {
            _this.onPopOverDismiss(btn);
        });
    };
    AttendanceListPage.prototype.viewLog = function () {
        this.navCtrl.navigateForward('/attendance-log');
    };
    AttendanceListPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    AttendanceListPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    AttendanceListPage.prototype.showModal = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _home_pop_over_home_pop_over_component__WEBPACK_IMPORTED_MODULE_4__["HomePopOverComponent"],
                            event: ev,
                            translucent: true,
                            componentProps: {
                                "type": "calendarModal1"
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: 
                    // popover.style.cssText = '--max-width: 125px; margin:-12px 0px 0px -17px;';
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AttendanceListPage.prototype.onPopOverDismiss = function (date) {
        console.log(date, "1");
        this.calendar.currentDate = new Date(date.data);
    };
    AttendanceListPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('calendarModal1');
    };
    AttendanceListPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
    ]; };
    AttendanceListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attendance-list',
            template: __webpack_require__(/*! raw-loader!./attendance-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/attendance-list/attendance-list.page.html"),
            styles: [__webpack_require__(/*! ./attendance-list.page.scss */ "./src/app/attendance-list/attendance-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], AttendanceListPage);
    return AttendanceListPage;
}());



/***/ })

}]);
//# sourceMappingURL=attendance-list-attendance-list-module-es5.js.map