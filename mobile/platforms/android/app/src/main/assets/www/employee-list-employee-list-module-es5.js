(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-list-employee-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-list/employee-list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-list/employee-list.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"referenceservice.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceservice.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Employees</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"referenceservice.isModal\">\r\n  <div class=\"empty-div\">\r\n  </div>\r\n  <div class=\"content-div\">\r\n    <div class=\"card-list\">\r\n      <ion-row>\r\n        <ion-col id=\"{{i}}\" size=\"6\" [ngClass]=\"cssClass\" *ngFor=\"let employee of employeeList; let i=index;\">\r\n          <ion-card class=\"employee-card\">\r\n            <ion-card-header>\r\n              <div class=\"employee-options-icon\">\r\n                <span slot=\"start\" class=\"custom-icon-delete-icon\" (click)=\"delete(i); $event.stopPropagation()\"></span>\r\n                <span slot=\"end\" class=\"custom-icon-edit-icon\"\r\n                  (click)=\"edit(employee); $event.stopPropagation()\"></span>\r\n              </div>\r\n            </ion-card-header>\r\n            <ion-card-content (click)=\"openEmployeeProfile()\">\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\">{{ employee.fullname }}</div>\r\n              <div class=\"user-design\">{{ employee.designation }}</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"addEmployee()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/employee-list/employee-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/employee-list/employee-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EmployeeListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListPageRoutingModule", function() { return EmployeeListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-list.page */ "./src/app/employee-list/employee-list.page.ts");




var routes = [
    {
        path: '',
        component: _employee_list_page__WEBPACK_IMPORTED_MODULE_3__["EmployeeListPage"]
    }
];
var EmployeeListPageRoutingModule = /** @class */ (function () {
    function EmployeeListPageRoutingModule() {
    }
    EmployeeListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EmployeeListPageRoutingModule);
    return EmployeeListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/employee-list/employee-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/employee-list/employee-list.module.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListPageModule", function() { return EmployeeListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list-routing.module */ "./src/app/employee-list/employee-list-routing.module.ts");
/* harmony import */ var _employee_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-list.page */ "./src/app/employee-list/employee-list.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var EmployeeListPageModule = /** @class */ (function () {
    function EmployeeListPageModule() {
    }
    EmployeeListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeListPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            declarations: [_employee_list_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeListPage"]]
        })
    ], EmployeeListPageModule);
    return EmployeeListPageModule;
}());



/***/ }),

/***/ "./src/app/employee-list/employee-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/employee-list/employee-list.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-icon {\n  text-align: center;\n  font-size: 65px;\n}\n\n.user-name {\n  font-family: \"Poppins-Bold\";\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.user-design {\n  font-size: 12px;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.employee-card {\n  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.08);\n  border-radius: 25px;\n  background: white;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  margin: 0;\n  height: 185px;\n}\n\n.employee-card .card-content-md,\n.card-content-ios {\n  margin-top: -10px;\n  padding: 0;\n  padding-top: 6px;\n}\n\n.employee-card ion-card-header {\n  padding: 10px 18px 0px 18px;\n}\n\n.content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  margin-top: -50px;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 160px;\n}\n\n.card-list {\n  top: -70px;\n  position: relative;\n  padding: 0 15px 0 15px;\n}\n\n.custom-icon-edit-icon {\n  font-size: 30px;\n  color: #FE9C45;\n  border: solid 1px #FE9C45;\n  border-radius: 20px;\n  font-weight: 500;\n  position: absolute;\n  right: 18px;\n}\n\n.custom-icon-delete-icon {\n  font-size: 30px;\n  color: #F11818;\n  border: solid 1px #F11818;\n  border-radius: 20px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXGVtcGxveWVlLWxpc3RcXGVtcGxveWVlLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ3BHSjs7QUR1R0E7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3BHSjs7QUR1R0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNwR0o7O0FEdUdBO0VBQ0ksK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ3BHSjs7QUR1R0E7O0VBRUksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNwR0o7O0FEdUdBO0VBQ0ksMkJBQUE7QUNwR0o7O0FEdUdBO0VBQ0ssZ0JBQUE7RUFDRCxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ3BHSjs7QUR1R0E7RUFDRyxtQkFBQTtFQUNDLGFBQUE7QUNwR0o7O0FEdUdBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNwR0o7O0FEdUdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNwR0o7O0FEdUdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNwR0oiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmVtcGxveWVlLW1vcmUge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXHJcbi8vICAgICByaWdodDogLTEwcHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGNvbG9yOiAjNzc3ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDMwcHg7XHJcbi8vICAgICBmb250LXNpemU6IDE4cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5lbXAtbmFtZSB7XHJcbi8vICAgICBmb250LWZhbWlseTogJ2xhdG8tUmVndWxhcic7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZW1wLWRlc2lnbmF0aW9uIHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnbGF0by1SZWd1bGFyJztcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgIGNvbG9yOiBibGFjaztcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5lbXBsb3llZS1maXJzdG5hbWUge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQUFBQTtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQUFBQUE7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjRweDtcclxuLy8gICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnbGF0by1SZWd1bGFyJztcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgd2lkdGg6IDUwcHg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5tb3JlLWljb24ge1xyXG4vLyAgICAgd2lkdGg6IDMycHg7XHJcbi8vICAgICBoZWlnaHQ6IDMwcHg7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi8vIC5lbXBsb3llZS1mYWIge1xyXG4vLyAgICAgYm90dG9tOiAxLjUlICFpbXBvcnRhbnQ7XHJcbi8vICAgICByaWdodDogMiUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmVtcGxveWVlLWZhYkJ1dHRvbiB7XHJcbi8vICAgICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1maWx0ZXIge1xyXG4vLyAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudCB7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAubm9saXN0IHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDQ1JSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tZmFiIHtcclxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4vLyAgICAgei1pbmRleDogOTk5O1xyXG4vLyB9XHJcblxyXG4vLyAuc2xpZGUtaW4ge1xyXG4vLyAgICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlSW5TbW9vdGggZWFzZS1pbiAxO1xyXG4vLyAgICAgYW5pbWF0aW9uOiBzbGlkZUluU21vb3RoIGVhc2UtaW4gMTtcclxuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbi8vICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3NTBtcztcclxuLy8gICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNzUwbXM7XHJcbi8vIH1cclxuXHJcbi8vIC5zbGlkZS1pbi1ib3RoLXdheXMge1xyXG4vLyAgICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlSW5Cb3RoV2F5cyBlYXNlLWluIDE7XHJcbi8vICAgICBhbmltYXRpb246IHNsaWRlSW5Cb3RoV2F5cyBlYXNlLWluIDE7XHJcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4vLyAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNzUwbXM7XHJcbi8vICAgICBhbmltYXRpb24tZHVyYXRpb246IDc1MG1zO1xyXG4vLyB9XHJcblxyXG4vLyAuYm91bmNlLWFuaW1hdGlvbiB7XHJcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbjogYm91bmNlIGVhc2UtaW4gMTtcclxuLy8gICAgIGFuaW1hdGlvbjogYm91bmNlIGVhc2UtaW4gMTtcclxuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbi8vICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuLy8gfVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1Cb2xkXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4udXNlci1kZXNpZ24ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmVtcGxveWVlLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDE4NXB4O1xyXG59XHJcblxyXG4uZW1wbG95ZWUtY2FyZCAuY2FyZC1jb250ZW50LW1kLFxyXG4uY2FyZC1jb250ZW50LWlvcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcblxyXG4uZW1wbG95ZWUtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4IDBweCAxOHB4O1xyXG59XHJcblxyXG4uY29udGVudC1kaXYge1xyXG4gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lbXB0eS1kaXYge1xyXG4gICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLmNhcmQtbGlzdCB7XHJcbiAgICB0b3A6IC03MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWVkaXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI0ZFOUM0NTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNGRTlDNDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tZGVsZXRlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNGMTE4MTg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRjExODE4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0iLCIudXNlci1pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDY1cHg7XG59XG5cbi51c2VyLW5hbWUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLUJvbGRcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udXNlci1kZXNpZ24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5lbXBsb3llZS1jYXJkIHtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDE4NXB4O1xufVxuXG4uZW1wbG95ZWUtY2FyZCAuY2FyZC1jb250ZW50LW1kLFxuLmNhcmQtY29udGVudC1pb3Mge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLmVtcGxveWVlLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxOHB4IDBweCAxOHB4O1xufVxuXG4uY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cblxuLmNhcmQtbGlzdCB7XG4gIHRvcDogLTcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcbn1cblxuLmN1c3RvbS1pY29uLWVkaXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNGRTlDNDU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNGRTlDNDU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG59XG5cbi5jdXN0b20taWNvbi1kZWxldGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNGMTE4MTg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNGMTE4MTg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/employee-list/employee-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee-list/employee-list.page.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListPage", function() { return EmployeeListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-employee/edit-employee.page */ "./src/app/edit-employee/edit-employee.page.ts");
/* harmony import */ var _add_employee_add_employee_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-employee/add-employee.page */ "./src/app/add-employee/add-employee.page.ts");









var EmployeeListPage = /** @class */ (function () {
    function EmployeeListPage(referenceservice, apiService, dataService, navCtrl, popoverCtrl, events, modalController) {
        this.referenceservice = referenceservice;
        this.apiService = apiService;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.modalController = modalController;
        this.faEllipsis = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEllipsisV"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"];
        this.bgColor = '3A57C4';
        this.pageNumber = 1;
        this.page = false;
        this.noData = false;
        this.filterData = {};
        this.keywords = {};
    }
    EmployeeListPage.prototype.ngOnInit = function () {
        this.employeeList = this.dataService.employee_list;
        this.applyClassBySelection('rollIn');
    };
    ;
    EmployeeListPage.prototype.openEmployeeProfile = function () {
        this.navCtrl.navigateForward('/profile/' + '1');
    };
    EmployeeListPage.prototype.applyClassBySelection = function (effect) {
        this.cssClass = "animated " + effect;
    };
    EmployeeListPage.prototype.delete = function (i) {
        var _this = this;
        this.referenceservice.deleteAlert("Confirm Delete", "Do you want to delete this employee").then(function (res) {
            console.log(res);
            _this.onConfirmClicked(i);
        });
    };
    EmployeeListPage.prototype.onConfirmClicked = function (id) {
        var _this = this;
        var element = document.getElementById(id);
        (id % 2) ? element.classList.add('animated', 'zoomOutRight') : element.classList.add('animated', 'zoomOutLeft');
        setTimeout(function () {
            _this.employeeList.splice(id, 1);
            _this.referenceservice.showAlert('Success', 'Employee Removed successfully');
        }, 1000);
    };
    EmployeeListPage.prototype.getHeaderStyle = function () {
        return { 'background': this.primaryColor };
    };
    ;
    EmployeeListPage.prototype.edit = function (employee) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_7__["EditEmployeePage"],
                            componentProps: { employee: employee },
                            cssClass: 'custom-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        this.referenceservice.isModal = "blurPage";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss().then(function (data) {
                                console.log(data);
                                _this.referenceservice.isModal = "";
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListPage.prototype.addEmployee = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_employee_add_employee_page__WEBPACK_IMPORTED_MODULE_8__["AddEmployeePage"],
                            cssClass: 'custom-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        this.referenceservice.isModal = "blurPage";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss().then(function (data) {
                                console.log(data);
                                _this.referenceservice.isModal = "";
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _json_service__WEBPACK_IMPORTED_MODULE_6__["JsonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    EmployeeListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! raw-loader!./employee-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/employee-list/employee-list.page.html"),
            styles: [__webpack_require__(/*! ./employee-list.page.scss */ "./src/app/employee-list/employee-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _json_service__WEBPACK_IMPORTED_MODULE_6__["JsonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], EmployeeListPage);
    return EmployeeListPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-list-employee-list-module-es5.js.map