(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["time-sheets-details-time-sheets-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/time-sheets-details/time-sheets-details.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/time-sheets-details/time-sheets-details.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Time Sheet</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"noti-list\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label class=\"label label-md\">\r\n        <h4 class=\"holiday-title\">{{taskDetails.name}}</h4>\r\n        <span class=\"holiday-days-div\">\r\n          <h2 class=\"holiday-title-date\">{{taskDetails.date}}</h2>\r\n        </span>\r\n        <div class=\"holiday-card\">\r\n          <h4 class=\"timesheet-project\">{{taskDetails.projectName}}</h4>\r\n        </div>\r\n        <div class=\"timesheet-hour-div\">\r\n          <h2 class=\"timesheet-hours\">{{taskDetails.hours}}</h2>\r\n        </div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <div class=\"timesheet-description-div\">\r\n      <p>Work Description:</p>\r\n      <h5 class=\"timesheet-description\">{{taskDetails.description}}</h5>\r\n    </div>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/time-sheets-details/time-sheets-details-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/time-sheets-details/time-sheets-details-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TimeSheetsDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSheetsDetailsPageRoutingModule", function() { return TimeSheetsDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _time_sheets_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-sheets-details.page */ "./src/app/time-sheets-details/time-sheets-details.page.ts");




var routes = [
    {
        path: '',
        component: _time_sheets_details_page__WEBPACK_IMPORTED_MODULE_3__["TimeSheetsDetailsPage"]
    }
];
var TimeSheetsDetailsPageRoutingModule = /** @class */ (function () {
    function TimeSheetsDetailsPageRoutingModule() {
    }
    TimeSheetsDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TimeSheetsDetailsPageRoutingModule);
    return TimeSheetsDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/time-sheets-details/time-sheets-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/time-sheets-details/time-sheets-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: TimeSheetsDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSheetsDetailsPageModule", function() { return TimeSheetsDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _time_sheets_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-sheets-details-routing.module */ "./src/app/time-sheets-details/time-sheets-details-routing.module.ts");
/* harmony import */ var _time_sheets_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-sheets-details.page */ "./src/app/time-sheets-details/time-sheets-details.page.ts");







var TimeSheetsDetailsPageModule = /** @class */ (function () {
    function TimeSheetsDetailsPageModule() {
    }
    TimeSheetsDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _time_sheets_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimeSheetsDetailsPageRoutingModule"]
            ],
            declarations: [_time_sheets_details_page__WEBPACK_IMPORTED_MODULE_6__["TimeSheetsDetailsPage"]]
        })
    ], TimeSheetsDetailsPageModule);
    return TimeSheetsDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/time-sheets-details/time-sheets-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/time-sheets-details/time-sheets-details.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timesheet-description-div {\n  padding-left: 16px;\n  padding-bottom: 10px;\n}\n\n.timesheet-description {\n  padding-right: 16px;\n  font-size: 14px !important;\n  color: #777 !important;\n  white-space: normal;\n  margin: 0 !important;\n  line-height: 1.4;\n}\n\n.noti-list {\n  margin-top: 20px !important;\n  background-color: #fff;\n  border-top: 1px solid #e7e7e7;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);\n  padding: 0 !important;\n}\n\n.holiday-days-div {\n  float: right;\n}\n\n.timesheet-project {\n  float: left;\n  font-size: 14px !important;\n}\n\n.timesheet-hour-div {\n  float: right;\n}\n\n.timesheet-hours {\n  border-radius: 4px;\n  font-size: 14px !important;\n  color: #44bbec;\n}\n\n.holiday-title {\n  display: inline-block !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  margin-bottom: 5px !important;\n}\n\n.timesheet-description-div p {\n  color: #333 !important;\n  font-size: 14px !important;\n  font-weight: 700;\n  margin: 0 !important;\n}\n\n.holiday-title-date {\n  font-size: 14px !important;\n  text-align: right;\n  color: #8e8e93 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZS1zaGVldHMtZGV0YWlscy9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXHRpbWUtc2hlZXRzLWRldGFpbHNcXHRpbWUtc2hlZXRzLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC90aW1lLXNoZWV0cy1kZXRhaWxzL3RpbWUtc2hlZXRzLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFFQSx1Q0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGltZS1zaGVldHMtZGV0YWlscy90aW1lLXNoZWV0cy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lc2hlZXQtZGVzY3JpcHRpb24tZGl2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGltZXNoZWV0LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNzc3ICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4ubm90aS1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbGlkYXktZGF5cy1kaXYge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGltZXNoZWV0LXByb2plY3Qge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWVzaGVldC1ob3VyLWRpdiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50aW1lc2hlZXQtaG91cnMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzQ0YmJlYztcclxufVxyXG5cclxuLmhvbGlkYXktdGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZXNoZWV0LWRlc2NyaXB0aW9uLWRpdiBwIHtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbGlkYXktdGl0bGUtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4ZThlOTMgIWltcG9ydGFudFxyXG59IiwiLnRpbWVzaGVldC1kZXNjcmlwdGlvbi1kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4udGltZXNoZWV0LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzc3ICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4ubm90aS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uaG9saWRheS1kYXlzLWRpdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRpbWVzaGVldC1wcm9qZWN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4udGltZXNoZWV0LWhvdXItZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udGltZXNoZWV0LWhvdXJzIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0NGJiZWM7XG59XG5cbi5ob2xpZGF5LXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG4udGltZXNoZWV0LWRlc2NyaXB0aW9uLWRpdiBwIHtcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uaG9saWRheS10aXRsZS1kYXRlIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/time-sheets-details/time-sheets-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/time-sheets-details/time-sheets-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: TimeSheetsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSheetsDetailsPage", function() { return TimeSheetsDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var TimeSheetsDetailsPage = /** @class */ (function () {
    function TimeSheetsDetailsPage(util, activeRoute, navContrl) {
        this.util = util;
        this.activeRoute = activeRoute;
        this.navContrl = navContrl;
    }
    TimeSheetsDetailsPage.prototype.ngOnInit = function () {
        if (this.activeRoute.snapshot.params.timeSheetTask) {
            this.taskDetails = JSON.parse(this.activeRoute.snapshot.params.timeSheetTask);
        }
        else {
            this.util.popBack();
        }
    };
    TimeSheetsDetailsPage.prototype.popBack = function () {
        this.navContrl.pop();
    };
    TimeSheetsDetailsPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    TimeSheetsDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-time-sheets-details',
            template: __webpack_require__(/*! raw-loader!./time-sheets-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/time-sheets-details/time-sheets-details.page.html"),
            styles: [__webpack_require__(/*! ./time-sheets-details.page.scss */ "./src/app/time-sheets-details/time-sheets-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], TimeSheetsDetailsPage);
    return TimeSheetsDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=time-sheets-details-time-sheets-details-module-es5.js.map