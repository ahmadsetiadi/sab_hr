(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-invoice-view-invoice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-invoice/view-invoice.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-invoice/view-invoice.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceService.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Invoices</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"invoice\">\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">Invoice</span>\r\n      <span slot=\"end\" class=\"custom-icon-dashboard-invoice-icons\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"profile-list payslip\">\r\n      <img src=\"{{currentStatusLogo}}\" class=\"status-logo\">\r\n      <img src=\"./assets/imgs/Logo-new-blue.png\" class=\"paySlipLogo\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"invoice-details1\">\r\n            <h5>Created Date\r\n              <span>{{invoice.created_date | date : 'd MMM y'}}</span>\r\n            </h5>\r\n          </div>\r\n          <h5 class=\"inv-company head-name\">Estimate To</h5>\r\n          <!-- <h5 class=\"inv-company\">Client Name</h5> -->\r\n          <div class=\"inv-receiver\">\r\n            <!-- <h3 class=\"inv-receiver-address\">{{invoice.bill_to.company_name}},</h3> -->\r\n            <h3 class=\"inv-receiver-address\">{{invoice.bill_to.company_address}},{{invoice.bill_to.city}}</h3>\r\n            <h3 class=\"inv-receiver-address\">{{invoice.bill_to.state}},{{invoice.bill_to.country}}</h3>\r\n            <h3 class=\"inv-receiver-address\">{{invoice.bill_to.zip_code}}</h3>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col class=\"inv-recieve\">\r\n          <div class=\"invoice-details\">\r\n            <h5>Due Date\r\n              <span>{{invoice.due_date | date : 'd MMM y'}}</span>\r\n            </h5>\r\n          </div>\r\n          <h5 class=\"inv-company head-name\">Recieved From</h5>\r\n          <!-- <h5 class=\"inv-company\">Client Name</h5> -->\r\n          <div class=\"inv-receiver\">\r\n            <!-- <h3 class=\"inv-receiver-address\">{{invoice.receive_from.company_name}},</h3> -->\r\n            <h3 class=\"inv-receiver-address\">{{invoice.receive_from.company_address}},{{invoice.receive_from.city}}</h3>\r\n            <h3 class=\"inv-receiver-address\">{{invoice.receive_from.state}},{{invoice.receive_from.country}}</h3>\r\n            <h3 class=\"inv-receiver-address\">{{invoice.receive_from.zip_code}}</h3>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div class=\"estimate-table\">\r\n        <ion-row class=\"estimate-row\">\r\n          <ion-col class=\"estimate-item\" size=\"4\">\r\n            <strong>Item</strong>\r\n          </ion-col>\r\n          <ion-col class=\"estimate-item right\" col>\r\n            <div class=\"estimate-price\">\r\n              <strong>Price</strong>\r\n            </div>\r\n            <div class=\"estimate-price\">\r\n              <strong>Qty</strong>\r\n            </div>\r\n            <div class=\"estimate-price right\">\r\n              <strong>Total</strong>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"estimate-row\" *ngFor=\"let item of invoice.items \">\r\n          <ion-col class=\"estimate-item\" size=\"4\">\r\n            {{item.item_name}}\r\n          </ion-col>\r\n          <ion-col class=\"estimate-item right\">\r\n            <div class=\"estimate-price\">\r\n              ${{item.unit_cost}}\r\n            </div>\r\n            <div class=\"estimate-price\">\r\n              {{item.quantity}}\r\n            </div>\r\n            <div class=\"estimate-price right\">\r\n              ${{item.total_cost}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            Sub Total\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            ${{invoice.total_cost}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            Tax1: ({{invoice.tax1}})\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            ${{tax1}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            Tax2: ({{invoice.tax2}})\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            ${{tax2}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            Discount: ({{invoice.discount}})\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            ${{discount}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            <strong>PaymentMade</strong>\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            <strong> ${{invoice.payment_made}} </strong>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            <strong>Due Amount</strong>\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            <strong> ${{dueamnt}} </strong>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/view-invoice/view-invoice-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-invoice/view-invoice-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewInvoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInvoicePageRoutingModule", function() { return ViewInvoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_invoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-invoice.page */ "./src/app/view-invoice/view-invoice.page.ts");




var routes = [
    {
        path: '',
        component: _view_invoice_page__WEBPACK_IMPORTED_MODULE_3__["ViewInvoicePage"]
    }
];
var ViewInvoicePageRoutingModule = /** @class */ (function () {
    function ViewInvoicePageRoutingModule() {
    }
    ViewInvoicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewInvoicePageRoutingModule);
    return ViewInvoicePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/view-invoice/view-invoice.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-invoice/view-invoice.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewInvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInvoicePageModule", function() { return ViewInvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-invoice-routing.module */ "./src/app/view-invoice/view-invoice-routing.module.ts");
/* harmony import */ var _view_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-invoice.page */ "./src/app/view-invoice/view-invoice.page.ts");







var ViewInvoicePageModule = /** @class */ (function () {
    function ViewInvoicePageModule() {
    }
    ViewInvoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewInvoicePageRoutingModule"]
            ],
            declarations: [_view_invoice_page__WEBPACK_IMPORTED_MODULE_6__["ViewInvoicePage"]]
        })
    ], ViewInvoicePageModule);
    return ViewInvoicePageModule;
}());



/***/ }),

/***/ "./src/app/view-invoice/view-invoice.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-invoice/view-invoice.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-dashboard-invoice-icons {\n  font-size: 60px;\n  color: white;\n}\n\n.estimate-item {\n  width: 50% !important;\n  padding: 5px;\n  border-right: 1px solid #ccc;\n  text-align: center;\n  margin: auto;\n}\n\n.right {\n  border-right: 0px !important;\n}\n\n.right.col {\n  padding: 0px !important;\n}\n\n.estimate-table {\n  border: 1px solid #ccc;\n  max-width: 100%;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 12px;\n}\n\n.estimate-total-row {\n  font-size: 12px !important;\n  margin: 0px !important;\n}\n\n.estimate-row {\n  border: 1px solid #ccc;\n  font-size: 12px !important;\n  margin: 0px !important;\n}\n\n.estimate-total {\n  width: 47% !important;\n  padding: 5px 0;\n  float: left;\n  text-align: center;\n  font-size: 10px !important;\n}\n\n.estimate-price {\n  width: 33.3% !important;\n  padding: 7px;\n  float: left;\n  font-size: 9px;\n  text-align: center;\n  border-right: 1px solid #ccc;\n}\n\n.sub-col {\n  border: 2px solid #ccc;\n  border-right: 2px solid #ccc !important;\n  border-top: 0px;\n}\n\n.total {\n  text-align: center !important;\n}\n\n.estimate-price.right.total {\n  width: 53% !important;\n  border-left: 1px solid #ccc !important;\n}\n\n.estimate-item strong {\n  font-family: \"Poppins-Regular\";\n  font-size: 12px;\n}\n\n.estimate-price strong,\n.estimate-total strong {\n  font-size: 10px !important;\n}\n\n.profile-list {\n  top: 20px;\n  padding: 0 15px;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.paySlipLogo {\n  width: 300px;\n  margin-top: -25px !important;\n  margin: 0 auto;\n  display: block;\n  padding-bottom: 5%;\n}\n\n@media only screen and (max-width: 324px) {\n  .paySlipLogo {\n    width: calc(100% - 90px) !important;\n  }\n}\n\n.status-logo {\n  width: 50px;\n}\n\n.inv-company {\n  display: block;\n  width: 100%;\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  margin: 5px 0;\n}\n\n.inv-receiver {\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.invoice-details h5 span,\n.invoice-details1 h5 span {\n  font-size: 12px;\n  font-weight: 400;\n  display: block;\n  margin-top: 10px;\n}\n\n.inv-receiver-address {\n  font-size: 12px !important;\n  margin: 0 !important;\n}\n\n.invoice-details h5 {\n  text-align: right;\n}\n\n.invoice-details1 h5,\n.invoice-details h5,\n.head-name {\n  font-size: 12px !important;\n  font-family: \"Poppins-Medium\";\n}\n\n.head-name {\n  margin: 20px 0px 10px 0px;\n}\n\n.inv-recieve {\n  text-align: right;\n}\n\n.right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1pbnZvaWNlL0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXHZpZXctaW52b2ljZVxcdmlldy1pbnZvaWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlldy1pbnZvaWNlL3ZpZXctaW52b2ljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxnQkFBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxzQ0FBQTtBQ0FKOztBREdBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7O0VBRUksMEJBQUE7QUNBSjs7QURHQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSxtQ0FBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTs7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7OztFQUdJLDBCQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdmlldy1pbnZvaWNlL3ZpZXctaW52b2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWludm9pY2UtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZXN0aW1hdGUtaXRlbSB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0LmNvbCB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzdGltYXRlLXRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmVzdGltYXRlLXRvdGFsLXJvdyB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZS1yb3cge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzdGltYXRlLXRvdGFsIHtcclxuICAgIHdpZHRoOiA0NyUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzdGltYXRlLXByaWNlIHtcclxuICAgIHdpZHRoOiAzMy4zJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5zdWItY29sIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5lc3RpbWF0ZS1wcmljZS5yaWdodC50b3RhbCB7XHJcbiAgICB3aWR0aDogNTMlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzdGltYXRlLWl0ZW0gc3Ryb25nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtcHJpY2Ugc3Ryb25nLFxyXG4uZXN0aW1hdGUtdG90YWwgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZmlsZS1saXN0IHtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wYXlTbGlwTG9nbyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjRweCkge1xyXG4gICAgLnBheVNsaXBMb2dvIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnN0YXR1cy1sb2dvIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uaW52LWNvbXBhbnkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmludi1yZWNlaXZlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW52b2ljZS1kZXRhaWxzIGg1IHNwYW4sXHJcbi5pbnZvaWNlLWRldGFpbHMxIGg1IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmludi1yZWNlaXZlci1hZGRyZXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnZvaWNlLWRldGFpbHMgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbnZvaWNlLWRldGFpbHMxIGg1LFxyXG4uaW52b2ljZS1kZXRhaWxzIGg1LFxyXG4uaGVhZC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxufVxyXG5cclxuLmhlYWQtbmFtZSB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG4uaW52LXJlY2lldmUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iLCIuZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWludm9pY2UtaWNvbnMge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVzdGltYXRlLWl0ZW0ge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodC5jb2wge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlLXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVzdGltYXRlLXRvdGFsLXJvdyB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZXN0aW1hdGUtcm93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS10b3RhbCB7XG4gIHdpZHRoOiA0NyUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZXN0aW1hdGUtcHJpY2Uge1xuICB3aWR0aDogMzMuMyUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogN3B4O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbn1cblxuLnN1Yi1jb2wge1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cblxuLnRvdGFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS1wcmljZS5yaWdodC50b3RhbCB7XG4gIHdpZHRoOiA1MyUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS1pdGVtIHN0cm9uZyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lc3RpbWF0ZS1wcmljZSBzdHJvbmcsXG4uZXN0aW1hdGUtdG90YWwgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLWxpc3Qge1xuICB0b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGF5U2xpcExvZ28ge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IC0yNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XG4gIC5wYXlTbGlwTG9nbyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zdGF0dXMtbG9nbyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uaW52LWNvbXBhbnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5pbnYtcmVjZWl2ZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnZvaWNlLWRldGFpbHMgaDUgc3Bhbixcbi5pbnZvaWNlLWRldGFpbHMxIGg1IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW52LXJlY2VpdmVyLWFkZHJlc3Mge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbnZvaWNlLWRldGFpbHMgaDUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmludm9pY2UtZGV0YWlsczEgaDUsXG4uaW52b2ljZS1kZXRhaWxzIGg1LFxuLmhlYWQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xufVxuXG4uaGVhZC1uYW1lIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAxMHB4IDBweDtcbn1cblxuLmludi1yZWNpZXZlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view-invoice/view-invoice.page.ts":
/*!***************************************************!*\
  !*** ./src/app/view-invoice/view-invoice.page.ts ***!
  \***************************************************/
/*! exports provided: ViewInvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInvoicePage", function() { return ViewInvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");



var ViewInvoicePage = /** @class */ (function () {
    function ViewInvoicePage(referenceService) {
        this.referenceService = referenceService;
        this.items = [];
        this.tax1 = 0;
        this.subtotal = 0;
        this.tax2 = 0;
        this.discount = 0;
        this.dueamnt = 0;
        this.statusLogo = { accepted: '', rejected: '', pending: '' };
        this.total = 0;
    }
    ViewInvoicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.statusLogo.accepted = "./assets/imgs/Paid.png";
        this.statusLogo.rejected = "./assets/imgs/Unpaid.png";
        this.statusLogo.pending = "./assets/imgs/pending.png";
        this.referenceService.getParams('invoice').then(function (res) {
            _this.invoice = res;
            console.log(_this.invoice);
            _this.setLogo();
            _this.items = _this.invoice.items;
            _this.tax1 = Math.ceil(_this.subtotal * (parseInt(_this.invoice.tax1) * 0.01));
            _this.tax2 = Math.ceil(_this.subtotal * (parseInt(_this.invoice.tax2) * 0.01));
            _this.discount = Math.ceil(_this.subtotal * (parseInt(_this.invoice.discount) * 0.01));
            _this.dueamnt = _this.invoice.total_cost - _this.invoice.payment_made;
            _this.total = _this.subtotal + (parseInt(_this.invoice.tax1) * 0.01) + (parseInt(_this.invoice.tax1) * 0.01);
            if (_this.dueamnt < 0) {
                _this.dueamnt = 0;
            }
        });
    };
    ViewInvoicePage.prototype.setLogo = function () {
        if (this.invoice.status === 'Paid') {
            this.currentStatusLogo = this.statusLogo.accepted;
        }
        else if (this.invoice.status === 'Unpaid') {
            this.currentStatusLogo = this.statusLogo.rejected;
        }
        else {
            this.currentStatusLogo = this.statusLogo.pending;
        }
        console.log(this.currentStatusLogo);
    };
    ViewInvoicePage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
    ]; };
    ViewInvoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-invoice',
            template: __webpack_require__(/*! raw-loader!./view-invoice.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-invoice/view-invoice.page.html"),
            styles: [__webpack_require__(/*! ./view-invoice.page.scss */ "./src/app/view-invoice/view-invoice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], ViewInvoicePage);
    return ViewInvoicePage;
}());



/***/ })

}]);
//# sourceMappingURL=view-invoice-view-invoice-module-es5.js.map