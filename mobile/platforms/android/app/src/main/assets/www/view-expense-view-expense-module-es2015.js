(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-expense-view-expense-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-expense/view-expense.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-expense/view-expense.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Expense</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"paymentInfo\">\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">Expense</span>\r\n      <span slot=\"end\" class=\"custom-icon-estimate-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"profile-list payslip\">\r\n      <img src=\"./assets/imgs/Logo-new-blue.png\" class=\"paySlipLogo\">\r\n      <div class=\"earning-box\">\r\n        <h4 class=\"earn\">Expense Details</h4>\r\n        <div class=\"earning-table\">\r\n          <h5>\r\n            <strong>Expense Date</strong>\r\n            <span class=\"pull-right\"> {{paymentInfo.date}}</span>\r\n          </h5>\r\n          <h5>\r\n            <strong>Category</strong>\r\n            <span class=\"pull-right\">{{paymentInfo.category}}</span>\r\n          </h5>\r\n          <h5>\r\n            <strong>Client</strong>\r\n            <span class=\"pull-right\"> {{paymentInfo.company}}</span>\r\n          </h5>\r\n          <h5>\r\n            <strong>Project Title</strong>\r\n            <span class=\"pull-right\"> {{paymentInfo.title}}</span>\r\n          </h5>\r\n          <h5>\r\n            <strong>Amount</strong>\r\n            <span class=\"pull-right\">\r\n              <strong> {{paymentInfo.amount}}</strong>\r\n            </span>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <p class=\"others\">\r\n        <strong>Notes</strong></p>\r\n      <p class=\"others-text\"> Expense notes\r\n      </p>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/view-expense/view-expense-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-expense/view-expense-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewExpensePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewExpensePageRoutingModule", function() { return ViewExpensePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-expense.page */ "./src/app/view-expense/view-expense.page.ts");




const routes = [
    {
        path: '',
        component: _view_expense_page__WEBPACK_IMPORTED_MODULE_3__["ViewExpensePage"]
    }
];
let ViewExpensePageRoutingModule = class ViewExpensePageRoutingModule {
};
ViewExpensePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewExpensePageRoutingModule);



/***/ }),

/***/ "./src/app/view-expense/view-expense.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-expense/view-expense.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewExpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewExpensePageModule", function() { return ViewExpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-expense-routing.module */ "./src/app/view-expense/view-expense-routing.module.ts");
/* harmony import */ var _view_expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-expense.page */ "./src/app/view-expense/view-expense.page.ts");







let ViewExpensePageModule = class ViewExpensePageModule {
};
ViewExpensePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewExpensePageRoutingModule"]
        ],
        declarations: [_view_expense_page__WEBPACK_IMPORTED_MODULE_6__["ViewExpensePage"]]
    })
], ViewExpensePageModule);



/***/ }),

/***/ "./src/app/view-expense/view-expense.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-expense/view-expense.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-list {\n  top: 20px !important;\n  padding: 0 15px !important;\n  position: relative;\n}\n\n.paySlipLogo {\n  width: 300px;\n  margin-top: 5% !important;\n  margin: 0 auto;\n  display: block;\n  padding-bottom: 5%;\n}\n\n@media only screen and (max-width: 324px) {\n  .paySlipLogo {\n    width: calc(100% - 90px) !important;\n  }\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\n.earn {\n  font-size: 14px;\n  color: #000;\n  font-weight: 700;\n}\n\n.earning-table {\n  border: 1px solid #ddd;\n  margin-bottom: 20px;\n  max-width: 100%;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 12px;\n}\n\n.earning-table h5 {\n  border: 1px solid #ddd;\n  padding: 8px;\n  font-size: 12px !important;\n  margin: 0 !important;\n}\n\n.pull-right {\n  float: right;\n}\n\n.others {\n  font-size: 12px;\n  margin-bottom: 5px !important;\n  padding: 0;\n}\n\n.others-text {\n  font-size: 12px;\n  color: #777 !important;\n  padding-bottom: 20px;\n  margin: 0 !important;\n}\n\n.estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -65px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1leHBlbnNlL0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcdmlldy1leHBlbnNlXFx2aWV3LWV4cGVuc2UucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LWV4cGVuc2Uvdmlldy1leHBlbnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxtQ0FBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC92aWV3LWV4cGVuc2Uvdmlldy1leHBlbnNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWxpc3Qge1xyXG4gICAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBheVNsaXBMb2dvIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XHJcbiAgICAucGF5U2xpcExvZ28ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uZWFybiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5lYXJuaW5nLXRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5lYXJuaW5nLXRhYmxlIGg1IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5vdGhlcnMge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ub3RoZXJzLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM3NzcgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZXN0aW1hdGUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCIucHJvZmlsZS1saXN0IHtcbiAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wYXlTbGlwTG9nbyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzI0cHgpIHtcbiAgLnBheVNsaXBMb2dvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgfVxufVxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbi5lYXJuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmVhcm5pbmctdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZWFybmluZy10YWJsZSBoNSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm90aGVycyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5vdGhlcnMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3NzcgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTY1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZXN0aW1hdGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-expense/view-expense.page.ts":
/*!***************************************************!*\
  !*** ./src/app/view-expense/view-expense.page.ts ***!
  \***************************************************/
/*! exports provided: ViewExpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewExpensePage", function() { return ViewExpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ViewExpensePage = class ViewExpensePage {
    constructor(util, navContrl) {
        this.util = util;
        this.navContrl = navContrl;
    }
    ngOnInit() {
        this.util.getParams('expense').then(res => {
            this.paymentInfo = res;
        });
    }
    popBack() {
        console.log('dsfsdfds');
        this.navContrl.pop();
    }
};
ViewExpensePage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ViewExpensePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-expense',
        template: __webpack_require__(/*! raw-loader!./view-expense.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-expense/view-expense.page.html"),
        styles: [__webpack_require__(/*! ./view-expense.page.scss */ "./src/app/view-expense/view-expense.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ViewExpensePage);



/***/ })

}]);
//# sourceMappingURL=view-expense-view-expense-module-es2015.js.map