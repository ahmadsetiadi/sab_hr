(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pay-slip-pay-slip-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pay-slip/pay-slip.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pay-slip/pay-slip.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Payslip</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">Employee Payslip</span>\r\n      <img slot=\"end\" class=\"head-img\" src=\"assets/imgs/payslip.png\">\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"profile-list payslip\">\r\n      <img class=\"paySlipLogo\" src=\"assets/imgs/Logo-new-blue.png\">\r\n      <ion-row class=\"row\">\r\n        <ion-col class=\"col\">\r\n          <h5 class=\"inv-company earn\"> <strong>Global Technologies</strong></h5>\r\n          <div class=\"inv-receiver\">\r\n            <h3 class=\"inv-receiver-address\">Peelamedu</h3>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col class=\"col\">\r\n          <div class=\"invoice-details\">\r\n            <h5 class=\"earn\"> <strong> Month &amp; Year</strong>\r\n              <span>Dec &amp; 2018 </span>\r\n            </h5>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row\">\r\n        <h5 class=\"inv-company earn\"><strong>Steve Smith</strong></h5>\r\n        <div class=\"inv-receiver\">\r\n          <h3 class=\"inv-receiver-address\">Web Backend Developer</h3>\r\n          <h3 class=\"inv-receiver-address\">Employee ID: 2</h3>\r\n\r\n        </div>\r\n      </ion-row>\r\n      <div class=\"earning-box\">\r\n        <h4 class=\"earn\">Earnings</h4>\r\n        <div class=\"earning-table\">\r\n          <h5>\r\n            Basic Salary\r\n            <span class=\"pull-right\"> 400000 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            House Rent Allowance (D.A.)\r\n            <span class=\"pull-right\"> 320000 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            House Rent Allowance (H.R.A.)\r\n            <span class=\"pull-right\"> 80000 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Conveyance\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Allowance\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Medical Allowance\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Other Allowance\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Total Earnings\r\n            <span class=\"pull-right\">\r\n              <strong> 800000 <span class=\"custom-icon-arrow-icon\"></span></strong>\r\n            </span>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"earning-box\">\r\n        <h4 class=\"earn\">Deductions</h4>\r\n        <div class=\"earning-table\">\r\n          <h5>\r\n            Tax Deducted at Source (T.D.S.)\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Provident Fund\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            ESI\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Leave\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Welfare\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Proffesional Tax\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Fund\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Other Deductions\r\n            <span class=\"pull-right\"> 0 <span class=\"custom-icon-arrow-icon\"></span></span>\r\n          </h5>\r\n          <h5>\r\n            Total Deductions\r\n            <span class=\"pull-right\">\r\n              <strong> 0 <span class=\"custom-icon-arrow-icon\"></span></strong>\r\n            </span>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <p class=\"salary-amount earn\">\r\n        <strong>Net Salary: 800000</strong></p>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pay-slip/pay-slip-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pay-slip/pay-slip-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PaySlipPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySlipPageRoutingModule", function() { return PaySlipPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pay_slip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay-slip.page */ "./src/app/pay-slip/pay-slip.page.ts");




const routes = [
    {
        path: '',
        component: _pay_slip_page__WEBPACK_IMPORTED_MODULE_3__["PaySlipPage"]
    }
];
let PaySlipPageRoutingModule = class PaySlipPageRoutingModule {
};
PaySlipPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaySlipPageRoutingModule);



/***/ }),

/***/ "./src/app/pay-slip/pay-slip.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pay-slip/pay-slip.module.ts ***!
  \*********************************************/
/*! exports provided: PaySlipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySlipPageModule", function() { return PaySlipPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pay_slip_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pay-slip-routing.module */ "./src/app/pay-slip/pay-slip-routing.module.ts");
/* harmony import */ var _pay_slip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay-slip.page */ "./src/app/pay-slip/pay-slip.page.ts");







let PaySlipPageModule = class PaySlipPageModule {
};
PaySlipPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pay_slip_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaySlipPageRoutingModule"]
        ],
        declarations: [_pay_slip_page__WEBPACK_IMPORTED_MODULE_6__["PaySlipPage"]]
    })
], PaySlipPageModule);



/***/ }),

/***/ "./src/app/pay-slip/pay-slip.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pay-slip/pay-slip.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-list {\n  top: 20px !important;\n  padding: 0 15px !important;\n  position: relative;\n}\n\n.paySlipLogo {\n  width: 300px;\n  margin-top: 5% !important;\n  margin: 0 auto;\n  display: block;\n  padding-bottom: 5%;\n}\n\n@media only screen and (max-width: 324px) {\n  .paySlipLogo {\n    width: calc(100% - 90px) !important;\n  }\n}\n\n.head-img {\n  width: 35px;\n}\n\n.col {\n  padding: 5px 0;\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.inv-company {\n  display: block;\n  width: 100%;\n  margin: 5px 0;\n}\n\n.inv-receiver {\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.invoice-details h5 span {\n  font-size: 12px;\n  font-weight: 400;\n  display: block;\n}\n\n.inv-receiver-address {\n  font-size: 12px !important;\n  margin: 0 !important;\n}\n\n.earn,\n.earn strong {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n}\n\n.earning-table {\n  border: 1px solid #ddd;\n  margin-bottom: 20px;\n  max-width: 100%;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 12px;\n}\n\n.earning-table h5 {\n  border: 1px solid #ddd;\n  padding: 14px;\n  font-size: 12px !important;\n  margin: 0 !important;\n  font-weight: bold;\n}\n\n.salary-amount {\n  font-size: 12px;\n  padding-bottom: 20px;\n}\n\n.salary-amount strong {\n  font-family: \"Poppins-Medium\";\n}\n\n.invoice-details h5 {\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  text-align: right;\n  margin: 0 !important;\n}\n\n.pull-right {\n  float: right;\n  font-size: 14px;\n  font-family: \"Poppins-regular\";\n}\n\nh5 strong {\n  font-family: \"Poppins-Medium\";\n}\n\n.estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -65px;\n  position: relative;\n  width: 100%;\n  min-height: calc(100vh - 120px);\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5LXNsaXAvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxccGF5LXNsaXBcXHBheS1zbGlwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5LXNsaXAvcGF5LXNsaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLG1DQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdBOztFQUVJLGVBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FDQUo7O0FERUk7RUFDSSw2QkFBQTtBQ0FSOztBRElBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURJQTtFQUNJLDZCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BheS1zbGlwL3BheS1zbGlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWxpc3Qge1xyXG4gICAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBheVNsaXBMb2dvIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XHJcbiAgICAucGF5U2xpcExvZ28ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZC1pbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIC13ZWJraXQtZmxleC1iYXNpczogMDtcclxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW52LWNvbXBhbnkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5pbnYtcmVjZWl2ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmludm9pY2UtZGV0YWlscyBoNSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmludi1yZWNlaXZlci1hZGRyZXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lYXJuLFxyXG4uZWFybiBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxufVxyXG5cclxuLmVhcm5pbmctdGFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmVhcm5pbmctdGFibGUgaDUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zYWxhcnktYW1vdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgIH1cclxufVxyXG5cclxuLmludm9pY2UtZGV0YWlscyBoNSB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtcmVndWxhclwiO1xyXG59XHJcblxyXG5oNSBzdHJvbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jb250ZW50LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC02NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufSIsIi5wcm9maWxlLWxpc3Qge1xuICB0b3A6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBheVNsaXBMb2dvIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjRweCkge1xuICAucGF5U2xpcExvZ28ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xuICB9XG59XG4uaGVhZC1pbWcge1xuICB3aWR0aDogMzVweDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgZmxleC1iYXNpczogMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmludi1jb21wYW55IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uaW52LXJlY2VpdmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW52b2ljZS1kZXRhaWxzIGg1IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW52LXJlY2VpdmVyLWFkZHJlc3Mge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5lYXJuLFxuLmVhcm4gc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xufVxuXG4uZWFybmluZy10YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lYXJuaW5nLXRhYmxlIGg1IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTRweDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNhbGFyeS1hbW91bnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnNhbGFyeS1hbW91bnQgc3Ryb25nIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbn1cblxuLmludm9pY2UtZGV0YWlscyBoNSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1yZWd1bGFyXCI7XG59XG5cbmg1IHN0cm9uZyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG59XG5cbi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVzdGltYXRlcy1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pay-slip/pay-slip.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pay-slip/pay-slip.page.ts ***!
  \*******************************************/
/*! exports provided: PaySlipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySlipPage", function() { return PaySlipPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");



let PaySlipPage = class PaySlipPage {
    constructor(util) {
        this.util = util;
    }
    ngOnInit() {
    }
};
PaySlipPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
];
PaySlipPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pay-slip',
        template: __webpack_require__(/*! raw-loader!./pay-slip.page.html */ "./node_modules/raw-loader/index.js!./src/app/pay-slip/pay-slip.page.html"),
        styles: [__webpack_require__(/*! ./pay-slip.page.scss */ "./src/app/pay-slip/pay-slip.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
], PaySlipPage);



/***/ })

}]);
//# sourceMappingURL=pay-slip-pay-slip-module-es2015.js.map