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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_invoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-invoice.page */ "./src/app/view-invoice/view-invoice.page.ts");




const routes = [
    {
        path: '',
        component: _view_invoice_page__WEBPACK_IMPORTED_MODULE_3__["ViewInvoicePage"]
    }
];
let ViewInvoicePageRoutingModule = class ViewInvoicePageRoutingModule {
};
ViewInvoicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewInvoicePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-invoice-routing.module */ "./src/app/view-invoice/view-invoice-routing.module.ts");
/* harmony import */ var _view_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-invoice.page */ "./src/app/view-invoice/view-invoice.page.ts");







let ViewInvoicePageModule = class ViewInvoicePageModule {
};
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



/***/ }),

/***/ "./src/app/view-invoice/view-invoice.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-invoice/view-invoice.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-dashboard-invoice-icons {\n  font-size: 60px;\n  color: white;\n}\n\n.estimate-item {\n  width: 50% !important;\n  padding: 5px;\n  border-right: 1px solid #ccc;\n  text-align: center;\n  margin: auto;\n}\n\n.right {\n  border-right: 0px !important;\n}\n\n.right.col {\n  padding: 0px !important;\n}\n\n.estimate-table {\n  border: 1px solid #ccc;\n  max-width: 100%;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 12px;\n}\n\n.estimate-total-row {\n  font-size: 12px !important;\n  margin: 0px !important;\n}\n\n.estimate-row {\n  border: 1px solid #ccc;\n  font-size: 12px !important;\n  margin: 0px !important;\n}\n\n.estimate-total {\n  width: 47% !important;\n  padding: 5px 0;\n  float: left;\n  text-align: center;\n  font-size: 10px !important;\n}\n\n.estimate-price {\n  width: 33.3% !important;\n  padding: 7px;\n  float: left;\n  font-size: 9px;\n  text-align: center;\n  border-right: 1px solid #ccc;\n}\n\n.sub-col {\n  border: 2px solid #ccc;\n  border-right: 2px solid #ccc !important;\n  border-top: 0px;\n}\n\n.total {\n  text-align: center !important;\n}\n\n.estimate-price.right.total {\n  width: 53% !important;\n  border-left: 1px solid #ccc !important;\n}\n\n.estimate-item strong {\n  font-family: \"Poppins-Regular\";\n  font-size: 12px;\n}\n\n.estimate-price strong,\n.estimate-total strong {\n  font-size: 10px !important;\n}\n\n.profile-list {\n  top: 20px;\n  padding: 0 15px;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.paySlipLogo {\n  width: 300px;\n  margin-top: -25px !important;\n  margin: 0 auto;\n  display: block;\n  padding-bottom: 5%;\n}\n\n@media only screen and (max-width: 324px) {\n  .paySlipLogo {\n    width: calc(100% - 90px) !important;\n  }\n}\n\n.status-logo {\n  width: 50px;\n}\n\n.inv-company {\n  display: block;\n  width: 100%;\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  margin: 5px 0;\n}\n\n.inv-receiver {\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.invoice-details h5 span,\n.invoice-details1 h5 span {\n  font-size: 12px;\n  font-weight: 400;\n  display: block;\n  margin-top: 10px;\n}\n\n.inv-receiver-address {\n  font-size: 12px !important;\n  margin: 0 !important;\n}\n\n.invoice-details h5 {\n  text-align: right;\n}\n\n.invoice-details1 h5,\n.invoice-details h5,\n.head-name {\n  font-size: 12px !important;\n  font-family: \"Poppins-Medium\";\n}\n\n.head-name {\n  margin: 20px 0px 10px 0px;\n}\n\n.inv-recieve {\n  text-align: right;\n}\n\n.right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1pbnZvaWNlL0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcdmlldy1pbnZvaWNlXFx2aWV3LWludm9pY2UucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LWludm9pY2Uvdmlldy1pbnZvaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGdCQUFBO0VBQ0MsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FER0E7RUFDSSxxQkFBQTtFQUNBLHNDQUFBO0FDQUo7O0FER0E7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTs7RUFFSSwwQkFBQTtBQ0FKOztBREdBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSTtJQUNJLG1DQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBOztFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTs7O0VBR0ksMEJBQUE7RUFDQSw2QkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC92aWV3LWludm9pY2Uvdmlldy1pbnZvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtaW52b2ljZS1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZS1pdGVtIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHQuY29sIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtdGFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtdG90YWwtcm93IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzdGltYXRlLXJvdyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtdG90YWwge1xyXG4gICAgd2lkdGg6IDQ3JSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtcHJpY2Uge1xyXG4gICAgd2lkdGg6IDMzLjMlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnN1Yi1jb2wge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxufVxyXG5cclxuLnRvdGFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmVzdGltYXRlLXByaWNlLnJpZ2h0LnRvdGFsIHtcclxuICAgIHdpZHRoOiA1MyUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtaXRlbSBzdHJvbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZS1wcmljZSBzdHJvbmcsXHJcbi5lc3RpbWF0ZS10b3RhbCBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9maWxlLWxpc3Qge1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBheVNsaXBMb2dvIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XHJcbiAgICAucGF5U2xpcExvZ28ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3RhdHVzLWxvZ28ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5pbnYtY29tcGFueSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uaW52LXJlY2VpdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbnZvaWNlLWRldGFpbHMgaDUgc3BhbixcclxuLmludm9pY2UtZGV0YWlsczEgaDUgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaW52LXJlY2VpdmVyLWFkZHJlc3Mge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmludm9pY2UtZGV0YWlscyBoNSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmludm9pY2UtZGV0YWlsczEgaDUsXHJcbi5pbnZvaWNlLWRldGFpbHMgaDUsXHJcbi5oZWFkLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG59XHJcblxyXG4uaGVhZC1uYW1lIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMTBweCAwcHg7XHJcbn1cclxuXHJcbi5pbnYtcmVjaWV2ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSIsIi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVzdGltYXRlcy1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtaW52b2ljZS1pY29ucyB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXN0aW1hdGUtaXRlbSB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0LmNvbCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZXN0aW1hdGUtdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZXN0aW1hdGUtdG90YWwtcm93IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlLXRvdGFsIHtcbiAgd2lkdGg6IDQ3JSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS1wcmljZSB7XG4gIHdpZHRoOiAzMy4zJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA3cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3ViLWNvbCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG4udG90YWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlLXByaWNlLnJpZ2h0LnRvdGFsIHtcbiAgd2lkdGg6IDUzJSAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlLWl0ZW0gc3Ryb25nIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVzdGltYXRlLXByaWNlIHN0cm9uZyxcbi5lc3RpbWF0ZS10b3RhbCBzdHJvbmcge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtbGlzdCB7XG4gIHRvcDogMjBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wYXlTbGlwTG9nbyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogLTI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzI0cHgpIHtcbiAgLnBheVNsaXBMb2dvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgfVxufVxuLnN0YXR1cy1sb2dvIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5pbnYtY29tcGFueSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmludi1yZWNlaXZlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmludm9pY2UtZGV0YWlscyBoNSBzcGFuLFxuLmludm9pY2UtZGV0YWlsczEgaDUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbnYtcmVjZWl2ZXItYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmludm9pY2UtZGV0YWlscyBoNSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW52b2ljZS1kZXRhaWxzMSBoNSxcbi5pbnZvaWNlLWRldGFpbHMgaDUsXG4uaGVhZC1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG59XG5cbi5oZWFkLW5hbWUge1xuICBtYXJnaW46IDIwcHggMHB4IDEwcHggMHB4O1xufVxuXG4uaW52LXJlY2lldmUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");



let ViewInvoicePage = class ViewInvoicePage {
    constructor(referenceService) {
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
    ngOnInit() {
        this.statusLogo.accepted = "./assets/imgs/Paid.png";
        this.statusLogo.rejected = "./assets/imgs/Unpaid.png";
        this.statusLogo.pending = "./assets/imgs/pending.png";
        this.referenceService.getParams('invoice').then(res => {
            this.invoice = res;
            console.log(this.invoice);
            this.setLogo();
            this.items = this.invoice.items;
            this.tax1 = Math.ceil(this.subtotal * (parseInt(this.invoice.tax1) * 0.01));
            this.tax2 = Math.ceil(this.subtotal * (parseInt(this.invoice.tax2) * 0.01));
            this.discount = Math.ceil(this.subtotal * (parseInt(this.invoice.discount) * 0.01));
            this.dueamnt = this.invoice.total_cost - this.invoice.payment_made;
            this.total = this.subtotal + (parseInt(this.invoice.tax1) * 0.01) + (parseInt(this.invoice.tax1) * 0.01);
            if (this.dueamnt < 0) {
                this.dueamnt = 0;
            }
        });
    }
    setLogo() {
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
    }
};
ViewInvoicePage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
];
ViewInvoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-invoice',
        template: __webpack_require__(/*! raw-loader!./view-invoice.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-invoice/view-invoice.page.html"),
        styles: [__webpack_require__(/*! ./view-invoice.page.scss */ "./src/app/view-invoice/view-invoice.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
], ViewInvoicePage);



/***/ })

}]);
//# sourceMappingURL=view-invoice-view-invoice-module-es2015.js.map