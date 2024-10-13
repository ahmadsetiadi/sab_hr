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

module.exports = ".noti-list {\n  margin-top: 20px !important;\n  background-color: #fff;\n  border-top: 1px solid #e7e7e7;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);\n}\n\n.holiday-days-div {\n  float: right;\n}\n\n.timesheet-project {\n  float: left;\n  font-size: 14px !important;\n}\n\n.timesheet-hour-div {\n  float: right;\n}\n\n.timesheet-hours {\n  border-radius: 4px;\n  font-size: 14px !important;\n  margin-right: 5px !important;\n  color: #44bbec;\n}\n\n.holiday-title {\n  display: inline-block !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  margin-bottom: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZS1zaGVldHMvRDpcXHNpbmFyXFxhcHAyL3NyY1xcYXBwXFx0aW1lLXNoZWV0c1xcdGltZS1zaGVldHMucGFnZS5zY3NzIiwic3JjL2FwcC90aW1lLXNoZWV0cy90aW1lLXNoZWV0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFFQSx1Q0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGltZS1zaGVldHMvdGltZS1zaGVldHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGktbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbn1cclxuXHJcbi5ob2xpZGF5LWRheXMtZGl2IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRpbWVzaGVldC1wcm9qZWN0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lc2hlZXQtaG91ci1kaXYge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGltZXNoZWV0LWhvdXJzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDRiYmVjO1xyXG59XHJcblxyXG4uaG9saWRheS10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbn0iLCIubm90aS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLmhvbGlkYXktZGF5cy1kaXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50aW1lc2hlZXQtcHJvamVjdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnRpbWVzaGVldC1ob3VyLWRpdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRpbWVzaGVldC1ob3VycyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDRiYmVjO1xufVxuXG4uaG9saWRheS10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn0iXX0= */"

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