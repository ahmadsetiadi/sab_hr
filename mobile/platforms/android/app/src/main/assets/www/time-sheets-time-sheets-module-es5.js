(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["time-sheets-time-sheets-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/time-sheets/time-sheets.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/time-sheets/time-sheets.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Time Sheets</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background-content\">\r\n  <ion-list class=\"noti-list\" *ngFor=\"let eachTask of timeSheets\">\r\n    <ion-item lines=\"none\" (click)=\"details(eachTask)\">\r\n      <ion-label class=\"label label-md\">\r\n        <h4 class=\"holiday-title\">{{eachTask.name}}</h4>\r\n        <span class=\"holiday-days-div\">\r\n          <h2 class=\"holiday-title\">{{eachTask.date}}</h2>\r\n        </span>\r\n        <div class=\"holiday-card\">\r\n          <h4 class=\"timesheet-project\">{{eachTask.projectName}}</h4>\r\n        </div>\r\n        <div class=\"timesheet-hour-div\">\r\n          <h2 class=\"timesheet-hours\">{{eachTask.hours}}</h2>\r\n        </div>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/time-sheets/time-sheets-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/time-sheets/time-sheets-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TimeSheetsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSheetsPageRoutingModule", function() { return TimeSheetsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _time_sheets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-sheets.page */ "./src/app/time-sheets/time-sheets.page.ts");




var routes = [
    {
        path: '',
        component: _time_sheets_page__WEBPACK_IMPORTED_MODULE_3__["TimeSheetsPage"]
    }
];
var TimeSheetsPageRoutingModule = /** @class */ (function () {
    function TimeSheetsPageRoutingModule() {
    }
    TimeSheetsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TimeSheetsPageRoutingModule);
    return TimeSheetsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/time-sheets/time-sheets.module.ts":
/*!***************************************************!*\
  !*** ./src/app/time-sheets/time-sheets.module.ts ***!
  \***************************************************/
/*! exports provided: TimeSheetsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSheetsPageModule", function() { return TimeSheetsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _time_sheets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-sheets-routing.module */ "./src/app/time-sheets/time-sheets-routing.module.ts");
/* harmony import */ var _time_sheets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-sheets.page */ "./src/app/time-sheets/time-sheets.page.ts");







var TimeSheetsPageModule = /** @class */ (function () {
    function TimeSheetsPageModule() {
    }
    TimeSheetsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _time_sheets_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimeSheetsPageRoutingModule"]
            ],
            declarations: [_time_sheets_page__WEBPACK_IMPORTED_MODULE_6__["TimeSheetsPage"]]
        })
    ], TimeSheetsPageModule);
    return TimeSheetsPageModule;
}());



/***/ }),

/***/ "./src/app/time-sheets/time-sheets.page.scss":
/*!***************************************************!*\
  !*** ./src/app/time-sheets/time-sheets.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noti-list {\n  margin-top: 20px !important;\n  background-color: #fff;\n  border-top: 1px solid #e7e7e7;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);\n}\n\n.holiday-days-div {\n  float: right;\n}\n\n.timesheet-project {\n  float: left;\n  font-size: 14px !important;\n}\n\n.timesheet-hour-div {\n  float: right;\n}\n\n.timesheet-hours {\n  border-radius: 4px;\n  font-size: 14px !important;\n  margin-right: 5px !important;\n  color: #44bbec;\n}\n\n.holiday-title {\n  display: inline-block !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  margin-bottom: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZS1zaGVldHMvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcdGltZS1zaGVldHNcXHRpbWUtc2hlZXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGltZS1zaGVldHMvdGltZS1zaGVldHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBRUEsdUNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RpbWUtc2hlZXRzL3RpbWUtc2hlZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpLWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG59XHJcblxyXG4uaG9saWRheS1kYXlzLWRpdiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50aW1lc2hlZXQtcHJvamVjdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZXNoZWV0LWhvdXItZGl2IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRpbWVzaGVldC1ob3VycyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzQ0YmJlYztcclxufVxyXG5cclxuLmhvbGlkYXktdGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59IiwiLm5vdGktbGlzdCB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5ob2xpZGF5LWRheXMtZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udGltZXNoZWV0LXByb2plY3Qge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lc2hlZXQtaG91ci1kaXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50aW1lc2hlZXQtaG91cnMge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ0YmJlYztcbn1cblxuLmhvbGlkYXktdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/time-sheets/time-sheets.page.ts":
/*!*************************************************!*\
  !*** ./src/app/time-sheets/time-sheets.page.ts ***!
  \*************************************************/
/*! exports provided: TimeSheetsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSheetsPage", function() { return TimeSheetsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TimeSheetsPage = /** @class */ (function () {
    function TimeSheetsPage(navContrl, util, activeRoute) {
        this.navContrl = navContrl;
        this.util = util;
        this.activeRoute = activeRoute;
    }
    TimeSheetsPage.prototype.ngOnInit = function () {
        this.timeSheets = [{ name: "Steve Smith", date: "2018-04-15", projectName: "newhrms", hours: "1 Hours", description: "just for testing" },
            { name: "Steve Smith", date: "2018-06-15", projectName: "newhrms", hours: "1 Hours", description: "just for testing" },
            { name: "Steve Smith", date: "2018-07-25", projectName: "newhrms", hours: "5 Hours", description: "just for testing" },
            { name: "Steve Smith", date: "2018-08-05", projectName: "newhrms", hours: "4 Hours", description: "just for testing" },
            { name: "Steve Smith", date: "2018-09-15", projectName: "newhrms", hours: "2 Hours", description: "just for testing" },
            { name: "Steve Smith", date: "2018-10-12", projectName: "newhrms", hours: "8 Hours", description: "just for testing" },
            { name: "Steve Smith", date: "2018-11-18", projectName: "newhrms", hours: "4 Hours", description: "just for testing" },
            { name: "Steve Smith", date: "2018-12-14", projectName: "newhrms", hours: "9 Hours", description: "just for testing" },
            { name: "Steve Smith", date: "2018-10-02", projectName: "newhrms", hours: "10 Hours", description: "just for testing" }];
    };
    TimeSheetsPage.prototype.details = function (detail) {
        detail = JSON.stringify(detail);
        this.navContrl.navigateForward("/time-sheets-details/" + detail, { skipLocationChange: true });
        // this.navContrl.navigateForward(`/time-sheets-details/${detail}`);
    };
    TimeSheetsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    TimeSheetsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-time-sheets',
            template: __webpack_require__(/*! raw-loader!./time-sheets.page.html */ "./node_modules/raw-loader/index.js!./src/app/time-sheets/time-sheets.page.html"),
            styles: [__webpack_require__(/*! ./time-sheets.page.scss */ "./src/app/time-sheets/time-sheets.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TimeSheetsPage);
    return TimeSheetsPage;
}());



/***/ })

}]);
//# sourceMappingURL=time-sheets-time-sheets-module-es5.js.map