(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-list-employee-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-list/employee-list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-list/employee-list.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"referenceservice.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceservice.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Employees</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"referenceservice.isModal\">\r\n  <div class=\"empty-div\">\r\n  </div>\r\n  <div class=\"content-div\">\r\n    <div class=\"card-list\">\r\n      <ion-row>\r\n        <ion-col id=\"{{i}}\" size=\"6\" [ngClass]=\"cssClass\" *ngFor=\"let employee of employeeList; let i=index;\">\r\n          <ion-card class=\"employee-card\">\r\n            <ion-card-header>\r\n              <div class=\"employee-options-icon\">\r\n                <span slot=\"start\" class=\"custom-icon-delete-icon\" (click)=\"delete(i); $event.stopPropagation()\"></span>\r\n                <span slot=\"end\" class=\"custom-icon-edit-icon\"\r\n                  (click)=\"edit(employee); $event.stopPropagation()\"></span>\r\n              </div>\r\n            </ion-card-header>\r\n            <ion-card-content (click)=\"openEmployeeProfile()\">\r\n              <div class=\"user-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n              <div class=\"user-name\" *ngIf=\"employee?.name\">{{ employee.name }}</div>\r\n              <div class=\"user-design\" *ngIf=\"employee?.position?.name\">{{ employee.position.name }}</div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"addEmployee()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

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

module.exports = ".user-icon {\n  text-align: center;\n  font-size: 65px;\n}\n\n.user-name {\n  font-family: \"Poppins-Bold\";\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.user-design {\n  font-size: 12px;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.employee-card {\n  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.08);\n  border-radius: 25px;\n  background: white;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  margin: 0;\n  height: 185px;\n}\n\n.employee-card .card-content-md,\n.card-content-ios {\n  margin-top: -10px;\n  padding: 0;\n  padding-top: 6px;\n}\n\n.employee-card ion-card-header {\n  padding: 10px 18px 0px 18px;\n}\n\n.content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  margin-top: -50px;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 160px;\n}\n\n.card-list {\n  top: -70px;\n  position: relative;\n  padding: 0 15px 0 15px;\n}\n\n.custom-icon-edit-icon {\n  font-size: 30px;\n  color: #FE9C45;\n  border: solid 1px #FE9C45;\n  border-radius: 20px;\n  font-weight: 500;\n  position: absolute;\n  right: 18px;\n}\n\n.custom-icon-delete-icon {\n  font-size: 30px;\n  color: #F11818;\n  border: solid 1px #F11818;\n  border-radius: 20px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFxlbXBsb3llZS1saXN0XFxlbXBsb3llZS1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNwR0o7O0FEdUdBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNwR0o7O0FEdUdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDcEdKOztBRHVHQTtFQUNJLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQkFBQTtVQUFBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNwR0o7O0FEdUdBOztFQUVJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDcEdKOztBRHVHQTtFQUNJLDJCQUFBO0FDcEdKOztBRHVHQTtFQUNLLGdCQUFBO0VBQ0QsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNwR0o7O0FEdUdBO0VBQ0csbUJBQUE7RUFDQyxhQUFBO0FDcEdKOztBRHVHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDcEdKOztBRHVHQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDcEdKOztBRHVHQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDcEdKIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5lbXBsb3llZS1tb3JlIHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xyXG4vLyAgICAgcmlnaHQ6IC0xMHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBjb2xvcjogIzc3NyAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZW1wLW5hbWUge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdsYXRvLVJlZ3VsYXInO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmVtcC1kZXNpZ25hdGlvbiB7XHJcbi8vICAgICBmb250LWZhbWlseTogJ2xhdG8tUmVndWxhcic7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZW1wbG95ZWUtZmlyc3RuYW1lIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjQUFBQUFBO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICBmb250LXNpemU6IDI0cHg7XHJcbi8vICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgICBmb250LWZhbWlseTogJ2xhdG8tUmVndWxhcic7XHJcbi8vICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiA1MHB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAubW9yZS1pY29uIHtcclxuLy8gICAgIHdpZHRoOiAzMnB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAuZW1wbG95ZWUtZmFiIHtcclxuLy8gICAgIGJvdHRvbTogMS41JSAhaW1wb3J0YW50O1xyXG4vLyAgICAgcmlnaHQ6IDIlICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5lbXBsb3llZS1mYWJCdXR0b24ge1xyXG4vLyAgICAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtZmlsdGVyIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQge1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLm5vbGlzdCB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA0NSUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWZhYiB7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuLy8gICAgIHotaW5kZXg6IDk5OTtcclxuLy8gfVxyXG5cclxuLy8gLnNsaWRlLWluIHtcclxuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZUluU21vb3RoIGVhc2UtaW4gMTtcclxuLy8gICAgIGFuaW1hdGlvbjogc2xpZGVJblNtb290aCBlYXNlLWluIDE7XHJcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4vLyAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNzUwbXM7XHJcbi8vICAgICBhbmltYXRpb24tZHVyYXRpb246IDc1MG1zO1xyXG4vLyB9XHJcblxyXG4vLyAuc2xpZGUtaW4tYm90aC13YXlzIHtcclxuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZUluQm90aFdheXMgZWFzZS1pbiAxO1xyXG4vLyAgICAgYW5pbWF0aW9uOiBzbGlkZUluQm90aFdheXMgZWFzZS1pbiAxO1xyXG4vLyAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuLy8gICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4vLyAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDc1MG1zO1xyXG4vLyAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3NTBtcztcclxuLy8gfVxyXG5cclxuLy8gLmJvdW5jZS1hbmltYXRpb24ge1xyXG4vLyAgICAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZSBlYXNlLWluIDE7XHJcbi8vICAgICBhbmltYXRpb246IGJvdW5jZSBlYXNlLWluIDE7XHJcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4vLyAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbi8vIH1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtQm9sZFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnVzZXItZGVzaWduIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5lbXBsb3llZS1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxODVweDtcclxufVxyXG5cclxuLmVtcGxveWVlLWNhcmQgLmNhcmQtY29udGVudC1tZCxcclxuLmNhcmQtY29udGVudC1pb3Mge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxufVxyXG5cclxuLmVtcGxveWVlLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMThweCAwcHggMThweDtcclxufVxyXG5cclxuLmNvbnRlbnQtZGl2IHtcclxuICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW1wdHktZGl2IHtcclxuICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Qge1xyXG4gICAgdG9wOiAtNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1lZGl0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNGRTlDNDU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRkU5QzQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMThweDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWRlbGV0ZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjRjExODE4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0YxMTgxODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59IiwiLnVzZXItaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA2NXB4O1xufVxuXG4udXNlci1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1Cb2xkXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnVzZXItZGVzaWduIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZW1wbG95ZWUtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxODVweDtcbn1cblxuLmVtcGxveWVlLWNhcmQgLmNhcmQtY29udGVudC1tZCxcbi5jYXJkLWNvbnRlbnQtaW9zIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi5lbXBsb3llZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMThweCAwcHggMThweDtcbn1cblxuLmNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTYwcHg7XG59XG5cbi5jYXJkLWxpc3Qge1xuICB0b3A6IC03MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XG59XG5cbi5jdXN0b20taWNvbi1lZGl0LWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjRkU5QzQ1O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRkU5QzQ1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxOHB4O1xufVxuXG4uY3VzdG9tLWljb24tZGVsZXRlLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjRjExODE4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRjExODE4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-employee/edit-employee.page */ "./src/app/edit-employee/edit-employee.page.ts");
/* harmony import */ var _add_employee_add_employee_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-employee/add-employee.page */ "./src/app/add-employee/add-employee.page.ts");
/* harmony import */ var _api2_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../api2.service */ "./src/app/api2.service.ts");



// import { ApiService } from '../api.service';






// import { Geolocation } from '@ionic-native/geolocation';
var EmployeeListPage = /** @class */ (function () {
    function EmployeeListPage(referenceservice, apiService, dataService, navCtrl, popoverCtrl, events, modalController, api) {
        this.referenceservice = referenceservice;
        this.apiService = apiService;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.modalController = modalController;
        this.api = api;
        this.faEllipsis = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEllipsisV"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"];
        this.bgColor = '3A57C4';
        this.employeeList = [
            {
                name: "",
                position: {
                    "name": ""
                }
            }
        ];
        this.pageNumber = 1;
        this.page = false;
        this.noData = false;
        this.filterData = {};
        this.keywords = {};
    }
    EmployeeListPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log(this.employeeList);
                // console.log("oninit");
                this.applyClassBySelection('rollIn');
                return [2 /*return*/];
            });
        });
    };
    ;
    // onError(error) {
    //   alert('code: '    + error.code    + '\n' +
    //         'message: ' + error.message + '\n');
    // }
    // onSuccess(position) {
    //   console.log(position);
    //   alert('Latitude: '          + position.coords.latitude          + '\n' +
    //     'Longitude: '         + position.coords.longitude         + '\n' +
    //     'Altitude: '          + position.coords.altitude          + '\n' +
    //     'Accuracy: '          + position.coords.accuracy          + '\n' +
    //     'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    //     'Heading: '           + position.coords.heading           + '\n' +
    //     'Speed: '             + position.coords.speed             + '\n' +
    //     'Timestamp: '         + position.timestamp                + '\n');
    // }
    EmployeeListPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //   var onSuccess = function(position) {
                        //     alert('Latitude: '          + position.coords.latitude          + '\n' +
                        //           'Longitude: '         + position.coords.longitude         + '\n' +
                        //           'Altitude: '          + position.coords.altitude          + '\n' +
                        //           'Accuracy: '          + position.coords.accuracy          + '\n' +
                        //           'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                        //           'Heading: '           + position.coords.heading           + '\n' +
                        //           'Speed: '             + position.coords.speed             + '\n' +
                        //           'Timestamp: '         + position.timestamp                + '\n');
                        // };
                        console.log("onenter");
                        url = "employee";
                        return [4 /*yield*/, this.api.getData(url, {})];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        this.employeeList = response;
                        return [2 /*return*/];
                }
            });
        });
    };
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
                            component: _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_6__["EditEmployeePage"],
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
                            component: _add_employee_add_employee_page__WEBPACK_IMPORTED_MODULE_7__["AddEmployeePage"],
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
        { type: _api2_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
        { type: _json_service__WEBPACK_IMPORTED_MODULE_5__["JsonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _api2_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
    ]; };
    EmployeeListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! raw-loader!./employee-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/employee-list/employee-list.page.html"),
            styles: [__webpack_require__(/*! ./employee-list.page.scss */ "./src/app/employee-list/employee-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _api2_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _json_service__WEBPACK_IMPORTED_MODULE_5__["JsonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _api2_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]])
    ], EmployeeListPage);
    return EmployeeListPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-list-employee-list-module-es5.js.map