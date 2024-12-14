(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-details-payment-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/payment-details/payment-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment-details/payment-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Payment</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  *ngIf=\"paymentInfo\">\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">Payment</span>\r\n      <span slot=\"end\" class=\"custom-icon-estimate-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"profile-list payslip\">\r\n      <img src=\"./assets/imgs/Logo-new-blue.png\" class=\"paySlipLogo\">\r\n      <div class=\"earning-box\">\r\n        <h4 class=\"earn\">Payment Recived</h4>\r\n        <div class=\"earning-table\">\r\n          <h5>\r\n            <strong>Payment Date</strong>\r\n            <span class=\"pull-right\"> {{paymentInfo.date}}</span>\r\n          </h5>\r\n          <h5>\r\n            <strong>Transaction ID</strong>\r\n            <span class=\"pull-right\">{{paymentInfo.transactionId}}</span>\r\n          </h5>\r\n          <h5>\r\n            <strong>Received From</strong>\r\n            <span class=\"pull-right\"> {{paymentInfo.company}}</span>\r\n          </h5>\r\n          <h5>\r\n            <strong>Payment Mode</strong>\r\n            <span class=\"pull-right\"> {{paymentInfo.mode}}</span>\r\n          </h5>\r\n          <h5>\r\n            <strong>Currency</strong>\r\n            <span class=\"pull-right\"> {{paymentInfo.currency}}</span>\r\n          </h5>\r\n          <h5>\r\n            <strong>Amount</strong>\r\n            <span class=\"pull-right\">\r\n              <strong> {{paymentInfo.amount}}</strong>\r\n            </span>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <p class=\"others\">\r\n        <strong>Notes</strong></p>\r\n      <p class=\"others-text\">Thank you for <span>your</span> business. Please process this invoice within the due date.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/payment-details/payment-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/payment-details/payment-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageRoutingModule", function() { return PaymentDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-details.page */ "./src/app/payment-details/payment-details.page.ts");




var routes = [
    {
        path: '',
        component: _payment_details_page__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsPage"]
    }
];
var PaymentDetailsPageRoutingModule = /** @class */ (function () {
    function PaymentDetailsPageRoutingModule() {
    }
    PaymentDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PaymentDetailsPageRoutingModule);
    return PaymentDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/payment-details/payment-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageModule", function() { return PaymentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-details-routing.module */ "./src/app/payment-details/payment-details-routing.module.ts");
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-details.page */ "./src/app/payment-details/payment-details.page.ts");







var PaymentDetailsPageModule = /** @class */ (function () {
    function PaymentDetailsPageModule() {
    }
    PaymentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentDetailsPageRoutingModule"]
            ],
            declarations: [_payment_details_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailsPage"]]
        })
    ], PaymentDetailsPageModule);
    return PaymentDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/payment-details/payment-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-list {\n  top: 20px !important;\n  padding: 0 15px !important;\n  position: relative;\n}\n\n.paySlipLogo {\n  width: 300px;\n  margin-top: 5% !important;\n  margin: 0 auto;\n  display: block;\n  padding-bottom: 5%;\n}\n\n@media only screen and (max-width: 324px) {\n  .paySlipLogo {\n    width: calc(100% - 90px) !important;\n  }\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\n.earn {\n  font-size: 14px;\n  color: #000;\n  font-weight: 700;\n}\n\n.earning-table {\n  border: 1px solid #ddd;\n  margin-bottom: 20px;\n  max-width: 100%;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 12px;\n}\n\n.earning-table h5 {\n  border: 1px solid #ddd;\n  padding: 8px;\n  font-size: 12px !important;\n  margin: 0 !important;\n}\n\n.pull-right {\n  float: right;\n}\n\n.others {\n  font-size: 12px;\n  margin-bottom: 5px !important;\n  padding: 0;\n}\n\n.others-text {\n  font-size: 12px;\n  color: #777 !important;\n  padding-bottom: 20px;\n  margin: 0 !important;\n}\n\n.estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -65px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1kZXRhaWxzL0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXHBheW1lbnQtZGV0YWlsc1xccGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksbUNBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1saXN0IHtcclxuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wYXlTbGlwTG9nbyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjRweCkge1xyXG4gICAgLnBheVNsaXBMb2dvIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmVhcm4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZWFybmluZy10YWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZWFybmluZy10YWJsZSBoNSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ub3RoZXJzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm90aGVycy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzc3ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTY1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVzdGltYXRlcy1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLWVzdGltYXRlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IiwiLnByb2ZpbGUtbGlzdCB7XG4gIHRvcDogMjBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGF5U2xpcExvZ28ge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XG4gIC5wYXlTbGlwTG9nbyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG4uZWFybiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5lYXJuaW5nLXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVhcm5pbmctdGFibGUgaDUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5vdGhlcnMge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ub3RoZXJzLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlcy1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC02NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLWVzdGltYXRlLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/payment-details/payment-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.ts ***!
  \*********************************************************/
/*! exports provided: PaymentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPage", function() { return PaymentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");





var PaymentDetailsPage = /** @class */ (function () {
    function PaymentDetailsPage(activeRoute, navContrl, util) {
        this.activeRoute = activeRoute;
        this.navContrl = navContrl;
        this.util = util;
    }
    PaymentDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.util.getParams('payment').then(function (res) {
            _this.paymentInfo = res;
        });
    };
    PaymentDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
    ]; };
    PaymentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-details',
            template: __webpack_require__(/*! raw-loader!./payment-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/payment-details/payment-details.page.html"),
            styles: [__webpack_require__(/*! ./payment-details.page.scss */ "./src/app/payment-details/payment-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], PaymentDetailsPage);
    return PaymentDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=payment-details-payment-details-module-es5.js.map