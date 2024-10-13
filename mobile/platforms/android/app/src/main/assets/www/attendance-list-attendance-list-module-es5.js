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

module.exports = ".user-icon {\n  text-align: center;\n  font-size: 30px;\n}\n\n.user-name {\n  font-size: 10px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"Poppins-Regular\";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 10px;\n}\n\n.employee-card {\n  box-shadow: 2px 2px 20px 20px #EFEFEF;\n  border-radius: 12px;\n  background: white;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  margin: 0;\n  height: 90px;\n  width: 100%;\n  overflow: inherit;\n}\n\n.employee-card .card-content-md,\n.employee-card .card-content-ios {\n  padding: 20px 0px 20px 0;\n}\n\n.content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -70px;\n  position: relative;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 200px;\n}\n\n.empty-div ion-item {\n  margin-bottom: 10px;\n}\n\n.card-list {\n  position: relative;\n  padding: 0 15px 0 15px;\n}\n\n.card-list ion-row ion-col {\n  padding: 10px 8px;\n}\n\n.head-label {\n  margin: 25px 0px 25px 40px;\n  font-weight: bold;\n  font-family: \"Poppins-Regular\";\n  padding-top: 20px;\n}\n\n.status-icon-div {\n  text-align: end;\n}\n\n.present-icon-div span {\n  background: #21D064;\n  border-radius: 10px;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  right: 0px;\n  z-index: 10;\n}\n\n.absent-icon-div span {\n  background: #EF0909;\n  border-radius: 10px;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  right: 0px;\n  z-index: 10;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.custom-icon-calendar-icon {\n  font-size: 25px;\n}\n\n.custom-icon-calendar-icon:before {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kYW5jZS1saXN0L0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcYXR0ZW5kYW5jZS1saXN0XFxhdHRlbmRhbmNlLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9hdHRlbmRhbmNlLWxpc3QvYXR0ZW5kYW5jZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURJQTtFQUNJLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQkFBQTtVQUFBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURPSTs7RUFFSSx3QkFBQTtBQ0pSOztBRFNBO0VBQ0UsZ0JBQUE7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNOSjs7QURTQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ05KOztBRFFJO0VBQ0ksbUJBQUE7QUNOUjs7QURVQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUNQSjs7QURVQTtFQUNJLGlCQUFBO0FDUEo7O0FEVUE7RUFDTSwwQkFBQTtFQUNGLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFVBO0VBQ0ksZUFBQTtBQ1BKOztBRFVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRFVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRFVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFVBO0VBQ0ksZUFBQTtBQ1BKOztBRFVBO0VBQ0ksdUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2F0dGVuZGFuY2UtbGlzdC9hdHRlbmRhbmNlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQXR0ZW5kYW5jZSBMb2cgKExpc3QgT2YgRW1wbG95ZXNzKSA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4udXNlci1pY29uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnVzZXItbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuXHJcbi5lbXBsb3llZS1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCAyMHB4ICNFRkVGRUY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmVtcGxveWVlLWNhcmQge1xyXG5cclxuICAgIC5jYXJkLWNvbnRlbnQtbWQsXHJcbiAgICAuY2FyZC1jb250ZW50LWlvcyB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC03MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcclxufVxyXG5cclxuLmNhcmQtbGlzdCBpb24tcm93IGlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogMTBweCA4cHg7XHJcbn1cclxuXHJcbi5oZWFkLWxhYmVsIHtcclxuICAgICAgbWFyZ2luOiAyNXB4IDBweCAyNXB4IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtaWNvbi1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4ucHJlc2VudC1pY29uLWRpdiBzcGFuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMUQwNjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5hYnNlbnQtaWNvbi1kaXYgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUYwOTA5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1jYWxlbmRhci1pY29uOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSIsIi51c2VyLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5lbXBsb3llZS1jYXJkIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IDIwcHggI0VGRUZFRjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4uZW1wbG95ZWUtY2FyZCAuY2FyZC1jb250ZW50LW1kLFxuLmVtcGxveWVlLWNhcmQgLmNhcmQtY29udGVudC1pb3Mge1xuICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDA7XG59XG5cbi5jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC03MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5lbXB0eS1kaXYgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xufVxuXG4uY2FyZC1saXN0IGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDEwcHggOHB4O1xufVxuXG4uaGVhZC1sYWJlbCB7XG4gIG1hcmdpbjogMjVweCAwcHggMjVweCA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uc3RhdHVzLWljb24tZGl2IHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ucHJlc2VudC1pY29uLWRpdiBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzIxRDA2NDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmFic2VudC1pY29uLWRpdiBzcGFuIHtcbiAgYmFja2dyb3VuZDogI0VGMDkwOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmN1c3RvbS1pY29uLWNhbGVuZGFyLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jdXN0b20taWNvbi1jYWxlbmRhci1pY29uOmJlZm9yZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"

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