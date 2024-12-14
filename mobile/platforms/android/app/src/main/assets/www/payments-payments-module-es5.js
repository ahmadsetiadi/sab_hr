(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/payments/payments.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payments/payments.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Payments</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">List of Payments</span> <span slot=\"end\"\r\n        class=\"custom-icon-estimate-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"estimates-timeline\">\r\n      <div class=\"estimates-container left\" *ngFor=\"let eachPayment of payments; let i=index;\">\r\n        <ion-list class=\"estimates-list animated bounceInRight\" [style.animationDelay.s]=\"0.3 + 0.1 * i\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\" (click)=\"details(eachPayment)\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">#{{eachPayment.invoiceId}}</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-pending\">{{eachPayment.mode}}</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">{{eachPayment.company}}</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\"> {{eachPayment.amount}}\r\n                    </div>\r\n                    <h4 class=\"payment-date\">\r\n                      {{eachPayment.date}}\r\n                    </h4>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/payments/payments-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/payments/payments-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PaymentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageRoutingModule", function() { return PaymentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments.page */ "./src/app/payments/payments.page.ts");




var routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsPage"]
    }
];
var PaymentsPageRoutingModule = /** @class */ (function () {
    function PaymentsPageRoutingModule() {
    }
    PaymentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PaymentsPageRoutingModule);
    return PaymentsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/payments/payments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.module.ts ***!
  \*********************************************/
/*! exports provided: PaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-routing.module */ "./src/app/payments/payments-routing.module.ts");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments.page */ "./src/app/payments/payments.page.ts");







var PaymentsPageModule = /** @class */ (function () {
    function PaymentsPageModule() {
    }
    PaymentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsPageRoutingModule"]
            ],
            declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
        })
    ], PaymentsPageModule);
    return PaymentsPageModule;
}());



/***/ }),

/***/ "./src/app/payments/payments.page.scss":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -60px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.estimates-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 10px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.estimates-list .estimates-content {\n  padding: 10px 0px 10px 15px;\n}\n\n.estimates-content {\n  top: 0;\n  width: 100%;\n}\n\n.estimates-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.estimates-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n  padding-right: 10px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.estimates-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.estimates-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.estimates-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 35px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.estimates-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.estimates-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.estimates-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.estimates-content .id {\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n}\n\n.estimates-content .name {\n  font-family: \"Poppins-Light\";\n  color: #8c8b8b;\n  font-size: 14px;\n}\n\n.estimates-content .status {\n  font-size: 11px;\n  margin: auto 0;\n  border-radius: 50px;\n  padding: 0px 5px;\n  color: white;\n  margin-top: unset !important;\n}\n\n.estimates-content .est-accepted {\n  background: #22D165;\n}\n\n.estimates-content .est-pending {\n  background: #FE9C45;\n}\n\n.estimates-content .est-rejected {\n  background: #F10A0A;\n}\n\n.estimates-content .amount {\n  font-size: 14px;\n  text-align: end;\n  color: #8c8b8b;\n  white-space: nowrap;\n  margin-top: 5px;\n}\n\n.estimates-content .amount ion-icon {\n  color: #FF9F55;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.payment-date {\n  font-size: 11px;\n  margin: 0;\n  color: #8c8b8b;\n  text-align: end;\n  white-space: nowrap;\n}\n\n.slide-item {\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxccGF5bWVudHNcXHBheW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5bWVudHMvcGF5bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrREFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLE1BQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NSOztBREdBO0VBQ0ssa0JBQUE7RUFDRCxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQSw2Q0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBLDZCQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBLGdDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBLG9DQUFBOztBQUNBO0VBQ0ksT0FBQTtBQ0FKOztBREdBLG1DQUFBOztBQUNBO0VBQ0ksVUFBQTtBQ0FKOztBREdBLCtDQUFBOztBQUNBOztFQUVJLFVBQUE7QUNBSjs7QURJSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQ0RSOztBRElJO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREtJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDSFI7O0FETUk7RUFDSSxtQkFBQTtBQ0pSOztBRE9JO0VBQ0ksbUJBQUE7QUNMUjs7QURRSTtFQUNJLG1CQUFBO0FDTlI7O0FEU0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNQUjs7QURRUTtFQUNJLGNBQUE7QUNOWjs7QURXQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7QUNSSjs7QURXQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFdBO0VBQ0ksc0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50cy9wYXltZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTYwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVzdGltYXRlcy1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLWVzdGltYXRlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCA0NXB4O1xyXG4gICAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNClcclxufVxyXG5cclxuLmVzdGltYXRlcy1saXN0IC5lc3RpbWF0ZXMtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtY29udGVudCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtdGltZWxpbmUge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXHJcbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4uZXN0aW1hdGVzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmVzdGltYXRlcy1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHRvcDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMzFweDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbi5sZWZ0OjphZnRlcixcclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgLmlkIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xyXG4gICAgICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHVzIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtYWNjZXB0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMkQxNjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVzdC1wZW5kaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtcmVqZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGMTBBMEE7XHJcbiAgICB9XHJcblxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICBjb2xvcjogIzhjOGI4YjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY5RjU1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59XHJcblxyXG4ucGF5bWVudC1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnNsaWRlLWl0ZW0ge1xyXG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XHJcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XHJcbn0iLCIuZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZXN0aW1hdGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXN0aW1hdGVzLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDQ1cHg7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuXG4uZXN0aW1hdGVzLWxpc3QgLmVzdGltYXRlcy1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmVzdGltYXRlcy1jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTQ5NDk0O1xufVxuXG4uZXN0aW1hdGVzLXRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmVzdGltYXRlcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLmVzdGltYXRlcy1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBsZWZ0OiAzMXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlcixcbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQgLmlkIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xuICBjb2xvcjogIzhjOGI4YjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5zdGF0dXMge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogYXV0byAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1hY2NlcHRlZCB7XG4gIGJhY2tncm91bmQ6ICMyMkQxNjU7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuZXN0LXJlamVjdGVkIHtcbiAgYmFja2dyb3VuZDogI0YxMEEwQTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuYW1vdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiAjOGM4YjhiO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmFtb3VudCBpb24taWNvbiB7XG4gIGNvbG9yOiAjRkY5RjU1O1xufVxuXG4uZmFiLWFkZC1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xufVxuXG4ucGF5bWVudC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjOGM4YjhiO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zbGlkZS1pdGVtIHtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/payments/payments.page.ts":
/*!*******************************************!*\
  !*** ./src/app/payments/payments.page.ts ***!
  \*******************************************/
/*! exports provided: PaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPage", function() { return PaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");




var PaymentsPage = /** @class */ (function () {
    function PaymentsPage(navContrl, util) {
        this.navContrl = navContrl;
        this.util = util;
        this.payments = [];
        this.payments = [{ invoiceId: "INV0003", amount: "1.02", company: "johnson Enterprises", mode: "online", date: "18 Jun 2018", transactionId: "72414", currency: "USD" },
            { invoiceId: "INV0004", amount: "11125.02", company: "Dream Guys", mode: "online", date: "17 Nov 2018", transactionId: "792145", currency: "USD" },
            { invoiceId: "INV0013", amount: "68992.52", company: "Infotech", mode: "online", date: "18 Dec 2019", transactionId: "797925", currency: "USD" },
            { invoiceId: "INV0012", amount: "25438.79", company: "AscesTech", mode: "online", date: "14 Jan 2018", transactionId: "792145", currency: "USD" },
            { invoiceId: "INV0043", amount: "45681.55", company: "Infotech Enterprises", mode: "online", date: "18 Feb 2019", transactionId: "2142145", currency: "USD" },
            { invoiceId: "INV0055", amount: "15864.66", company: "Dream Guys", mode: "Bank Deposite", date: "08 Mar 2018", transactionId: "7922145", currency: "USD" },
            { invoiceId: "INV0068", amount: "95431.52", company: "AscesTech ", mode: "online", date: "28 Apr 2018", transactionId: "214145", currency: "USD" }];
    }
    PaymentsPage.prototype.ngOnInit = function () {
    };
    PaymentsPage.prototype.details = function (paymentDetails) {
        this.navContrl.navigateForward("/payment-details/1", { state: { 'payment': paymentDetails } });
    };
    PaymentsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    PaymentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! raw-loader!./payments.page.html */ "./node_modules/raw-loader/index.js!./src/app/payments/payments.page.html"),
            styles: [__webpack_require__(/*! ./payments.page.scss */ "./src/app/payments/payments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], PaymentsPage);
    return PaymentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=payments-payments-module-es5.js.map