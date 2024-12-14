(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-expenses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/expenses/expenses.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/expenses/expenses.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"util.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Expenses</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">List of Expenses</span> <span slot=\"end\"\r\n        class=\"custom-icon-estimate-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"estimates-timeline\">\r\n      <div class=\"estimates-container left\" *ngFor=\"let eachExpense of expenses; let i=index\">\r\n        <ion-list id=\"{{i}}\" class=\"estimates-list animated bounceInRight\" [style.animationDelay.s]=\"0.3 + 0.1 * i\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\" (click)=\"openExpense(eachExpense)\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">{{eachExpense.title}}</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-pending\">{{eachExpense.category}}</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">{{eachExpense.company}}</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\"> {{eachExpense.amount}}\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"delete(i)\">Delete</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"addExpenses()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/expenses/expenses-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/expenses/expenses-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ExpensesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPageRoutingModule", function() { return ExpensesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _expenses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses.page */ "./src/app/expenses/expenses.page.ts");




const routes = [
    {
        path: '',
        component: _expenses_page__WEBPACK_IMPORTED_MODULE_3__["ExpensesPage"]
    }
];
let ExpensesPageRoutingModule = class ExpensesPageRoutingModule {
};
ExpensesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpensesPageRoutingModule);



/***/ }),

/***/ "./src/app/expenses/expenses.module.ts":
/*!*********************************************!*\
  !*** ./src/app/expenses/expenses.module.ts ***!
  \*********************************************/
/*! exports provided: ExpensesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPageModule", function() { return ExpensesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expenses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expenses-routing.module */ "./src/app/expenses/expenses-routing.module.ts");
/* harmony import */ var _expenses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expenses.page */ "./src/app/expenses/expenses.page.ts");







let ExpensesPageModule = class ExpensesPageModule {
};
ExpensesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _expenses_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpensesPageRoutingModule"]
        ],
        declarations: [_expenses_page__WEBPACK_IMPORTED_MODULE_6__["ExpensesPage"]]
    })
], ExpensesPageModule);



/***/ }),

/***/ "./src/app/expenses/expenses.page.scss":
/*!*********************************************!*\
  !*** ./src/app/expenses/expenses.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.estimates-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 10px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.estimates-list .estimates-content {\n  padding: 10px 0px 10px 15px;\n}\n\n.estimates-content {\n  top: 0;\n  width: 100%;\n}\n\n.estimates-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.estimates-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n  padding-right: 10px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.estimates-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.estimates-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.estimates-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 35px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.estimates-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.estimates-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.estimates-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.estimates-content .id {\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n}\n\n.estimates-content .name {\n  font-family: \"Poppins-Light\";\n  color: #8c8b8b;\n  font-size: 14px;\n}\n\n.estimates-content .status {\n  font-size: 11px;\n  margin: auto 0;\n  border-radius: 50px;\n  padding: 0px 5px;\n  color: white;\n  margin-top: unset !important;\n}\n\n.estimates-content .est-accepted {\n  background: #22D165;\n}\n\n.estimates-content .est-pending {\n  background: #FE9C45;\n}\n\n.estimates-content .est-rejected {\n  background: #F10A0A;\n}\n\n.estimates-content .amount {\n  font-size: 14px;\n  margin-top: 14px;\n  text-align: end;\n  color: #8c8b8b;\n  white-space: nowrap;\n}\n\n.estimates-content .amount ion-icon {\n  color: #FF9F55;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.slide-item {\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZXMvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcZXhwZW5zZXNcXGV4cGVuc2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXhwZW5zZXMvZXhwZW5zZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrREFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLE1BQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NSOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQSw2Q0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBLDZCQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBLGdDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBLG9DQUFBOztBQUNBO0VBQ0ksT0FBQTtBQ0FKOztBREdBLG1DQUFBOztBQUNBO0VBQ0ksVUFBQTtBQ0FKOztBREdBLCtDQUFBOztBQUNBOztFQUVJLFVBQUE7QUNBSjs7QURJSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQ0RSOztBRElJO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREtJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDSFI7O0FETUk7RUFDSSxtQkFBQTtBQ0pSOztBRE9JO0VBQ0ksbUJBQUE7QUNMUjs7QURRSTtFQUNJLG1CQUFBO0FDTlI7O0FEU0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDUFI7O0FEU1E7RUFDSSxjQUFBO0FDUFo7O0FEWUE7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0FDVEo7O0FEWUE7RUFDSSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0gsd0JBQUE7QUNURCIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2VzL2V4cGVuc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZXN0aW1hdGUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDQ1cHg7XHJcbiAgICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KVxyXG59XHJcblxyXG4uZXN0aW1hdGVzLWxpc3QgLmVzdGltYXRlcy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTVweDtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jb250ZW50IHtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzk0OTQ5NDtcclxuICAgIH1cclxufVxyXG5cclxuLmVzdGltYXRlcy10aW1lbGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXHJcbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4uZXN0aW1hdGVzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmVzdGltYXRlcy1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHRvcDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMzFweDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbi5sZWZ0OjphZnRlcixcclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgLmlkIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xyXG4gICAgICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHVzIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtYWNjZXB0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMkQxNjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVzdC1wZW5kaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtcmVqZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGMTBBMEE7XHJcbiAgICB9XHJcblxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRjlGNTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmFiLWFkZC1idG4ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcbi5zbGlkZS1pdGVtIHtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xyXG59IiwiLmVzdGltYXRlcy1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLWVzdGltYXRlLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVzdGltYXRlcy1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCA0NXB4O1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLmVzdGltYXRlcy1saXN0IC5lc3RpbWF0ZXMtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTVweDtcbn1cblxuLmVzdGltYXRlcy1jb250ZW50IHtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cblxuLmVzdGltYXRlcy10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5lc3RpbWF0ZXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5lc3RpbWF0ZXMtY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5lc3RpbWF0ZXMtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcbn1cblxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcbiAgbGVmdDogMzFweDtcbn1cblxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXG4ubGVmdDo6YWZ0ZXIsXG4ucmlnaHQ6OmFmdGVyIHtcbiAgbGVmdDogMTVweDtcbn1cblxuLmVzdGltYXRlcy1jb250ZW50IC5pZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTGlnaHRcIjtcbiAgY29sb3I6ICM4YzhiOGI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IGF1dG8gMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5lc3QtYWNjZXB0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMjJEMTY1O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5lc3QtcGVuZGluZyB7XG4gIGJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1yZWplY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNGMTBBMEE7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogIzhjOGI4YjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuYW1vdW50IGlvbi1pY29uIHtcbiAgY29sb3I6ICNGRjlGNTU7XG59XG5cbi5mYWItYWRkLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG5cbi5zbGlkZS1pdGVtIHtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/expenses/expenses.page.ts":
/*!*******************************************!*\
  !*** ./src/app/expenses/expenses.page.ts ***!
  \*******************************************/
/*! exports provided: ExpensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPage", function() { return ExpensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_expense_edit_expense_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-expense/edit-expense.page */ "./src/app/edit-expense/edit-expense.page.ts");
/* harmony import */ var _add_expense_add_expense_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-expense/add-expense.page */ "./src/app/add-expense/add-expense.page.ts");






let ExpensesPage = class ExpensesPage {
    constructor(util, navContrl, modalController, alertController) {
        this.util = util;
        this.navContrl = navContrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.expenses = [];
        this.expenses = [{ title: "Smart HR", amount: "12543", company: "Dream's Tech", category: "Travel", date: "17 Nov 2018" },
            { title: "Smart HR", amount: "12543", company: "Dream's Tech", category: "Travel", date: "17 Nov 2019" },
            { title: "hrms new", amount: "121253", company: "Dream's Tech", category: "Travel", date: "17 Jan 2017" },
            { title: "hrms hrms", amount: "5453", company: "Dream's Tech", category: "Travel", date: "27 Nov 2018" },
            { title: "Smart HR", amount: "1243", company: "Dream's Tech", category: "Travel", date: "17 Nov 2020" },
            { title: "Smart HR", amount: "143543", company: "Dream's Tech", category: "Travel", date: "07 Nov 2020" },
            { title: "Smart HR", amount: "12543", company: "Dream's Tech", category: "Travel", date: "17 Nov 2018" },
            { title: "Smart HR", amount: "1125", company: "Dream's Tech", category: "Travel", date: "17 Dec 2018" },
            { title: "Smart HR", amount: "12543", company: "Dream's Tech", category: "Travel", date: "17 Oct 2018" }];
    }
    ngOnInit() {
    }
    edit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_expense_edit_expense_page__WEBPACK_IMPORTED_MODULE_4__["EditExpensePage"],
                cssClass: 'custom-modal',
            });
            this.util.isModal = "blurPage";
            yield modal.present();
            yield modal.onWillDismiss().then(data => {
                console.log(data);
                this.util.isModal = "";
            });
        });
    }
    openExpense(Details) {
        this.navContrl.navigateForward("/view-expense", { state: { 'expense': Details } });
    }
    addExpenses() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_expense_add_expense_page__WEBPACK_IMPORTED_MODULE_5__["AddExpensePage"],
                cssClass: 'custom-modal',
            });
            this.util.isModal = "blurPage";
            yield modal.present();
            yield modal.onWillDismiss().then(data => {
                console.log(data);
                this.util.isModal = "";
            });
        });
    }
    delete(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm Delete',
                message: 'Do you want to delete this Expense',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.successAlert(i);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    successAlert(i) {
        let element = document.getElementById(i);
        element.classList.add('animated', 'rollOut', 'slow');
        element.addEventListener('animationend', (e => {
            this.expenses.splice(i, 1);
            this.util.showAlert('Smart HR', 'Expense Removed successfully');
        }));
    }
};
ExpensesPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ExpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expenses',
        template: __webpack_require__(/*! raw-loader!./expenses.page.html */ "./node_modules/raw-loader/index.js!./src/app/expenses/expenses.page.html"),
        styles: [__webpack_require__(/*! ./expenses.page.scss */ "./src/app/expenses/expenses.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], ExpensesPage);



/***/ })

}]);
//# sourceMappingURL=expenses-expenses-module-es2015.js.map