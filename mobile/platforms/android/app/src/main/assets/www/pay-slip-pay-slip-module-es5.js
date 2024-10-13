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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pay_slip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay-slip.page */ "./src/app/pay-slip/pay-slip.page.ts");




var routes = [
    {
        path: '',
        component: _pay_slip_page__WEBPACK_IMPORTED_MODULE_3__["PaySlipPage"]
    }
];
var PaySlipPageRoutingModule = /** @class */ (function () {
    function PaySlipPageRoutingModule() {
    }
    PaySlipPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PaySlipPageRoutingModule);
    return PaySlipPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pay_slip_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pay-slip-routing.module */ "./src/app/pay-slip/pay-slip-routing.module.ts");
/* harmony import */ var _pay_slip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay-slip.page */ "./src/app/pay-slip/pay-slip.page.ts");







var PaySlipPageModule = /** @class */ (function () {
    function PaySlipPageModule() {
    }
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
    return PaySlipPageModule;
}());



/***/ }),

/***/ "./src/app/pay-slip/pay-slip.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pay-slip/pay-slip.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-list {\n  top: 20px !important;\n  padding: 0 15px !important;\n  position: relative;\n}\n\n.paySlipLogo {\n  width: 300px;\n  margin-top: 5% !important;\n  margin: 0 auto;\n  display: block;\n  padding-bottom: 5%;\n}\n\n@media only screen and (max-width: 324px) {\n  .paySlipLogo {\n    width: calc(100% - 90px) !important;\n  }\n}\n\n.head-img {\n  width: 35px;\n}\n\n.col {\n  padding: 5px 0;\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.inv-company {\n  display: block;\n  width: 100%;\n  margin: 5px 0;\n}\n\n.inv-receiver {\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.invoice-details h5 span {\n  font-size: 12px;\n  font-weight: 400;\n  display: block;\n}\n\n.inv-receiver-address {\n  font-size: 12px !important;\n  margin: 0 !important;\n}\n\n.earn,\n.earn strong {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n}\n\n.earning-table {\n  border: 1px solid #ddd;\n  margin-bottom: 20px;\n  max-width: 100%;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 12px;\n}\n\n.earning-table h5 {\n  border: 1px solid #ddd;\n  padding: 14px;\n  font-size: 12px !important;\n  margin: 0 !important;\n  font-weight: bold;\n}\n\n.salary-amount {\n  font-size: 12px;\n  padding-bottom: 20px;\n}\n\n.salary-amount strong {\n  font-family: \"Poppins-Medium\";\n}\n\n.invoice-details h5 {\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  text-align: right;\n  margin: 0 !important;\n}\n\n.pull-right {\n  float: right;\n  font-size: 14px;\n  font-family: \"Poppins-regular\";\n}\n\nh5 strong {\n  font-family: \"Poppins-Medium\";\n}\n\n.estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -65px;\n  position: relative;\n  width: 100%;\n  min-height: calc(100vh - 120px);\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5LXNsaXAvRDpcXHNpbmFyXFxhcHAyL3NyY1xcYXBwXFxwYXktc2xpcFxccGF5LXNsaXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYXktc2xpcC9wYXktc2xpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksbUNBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUNBLG1CQUFBO0VBR0EsWUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7O0VBRUksZUFBQTtFQUNBLDZCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURFSTtFQUNJLDZCQUFBO0FDQVI7O0FESUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0RKOztBRElBO0VBQ0ksNkJBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGF5LXNsaXAvcGF5LXNsaXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtbGlzdCB7XHJcbiAgICB0b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucGF5U2xpcExvZ28ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzI0cHgpIHtcclxuICAgIC5wYXlTbGlwTG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkLWltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xyXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnYtY29tcGFueSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmludi1yZWNlaXZlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW52b2ljZS1kZXRhaWxzIGg1IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW52LXJlY2VpdmVyLWFkZHJlc3Mge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVhcm4sXHJcbi5lYXJuIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG59XHJcblxyXG4uZWFybmluZy10YWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZWFybmluZy10YWJsZSBoNSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNhbGFyeS1hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW52b2ljZS1kZXRhaWxzIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1yZWd1bGFyXCI7XHJcbn1cclxuXHJcbmg1IHN0cm9uZyB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTY1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59IiwiLnByb2ZpbGUtbGlzdCB7XG4gIHRvcDogMjBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGF5U2xpcExvZ28ge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XG4gIC5wYXlTbGlwTG9nbyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5oZWFkLWltZyB7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG4uY29sIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMXB4O1xuICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICBmbGV4LWJhc2lzOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaW52LWNvbXBhbnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5pbnYtcmVjZWl2ZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnZvaWNlLWRldGFpbHMgaDUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbnYtcmVjZWl2ZXItYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmVhcm4sXG4uZWFybiBzdHJvbmcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG59XG5cbi5lYXJuaW5nLXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVhcm5pbmctdGFibGUgaDUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxNHB4O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2FsYXJ5LWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uc2FsYXJ5LWFtb3VudCBzdHJvbmcge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xufVxuXG4uaW52b2ljZS1kZXRhaWxzIGg1IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLXJlZ3VsYXJcIjtcbn1cblxuaDUgc3Ryb25nIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbn1cblxuLmVzdGltYXRlcy1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC02NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");



var PaySlipPage = /** @class */ (function () {
    function PaySlipPage(util) {
        this.util = util;
    }
    PaySlipPage.prototype.ngOnInit = function () {
    };
    PaySlipPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
    ]; };
    PaySlipPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay-slip',
            template: __webpack_require__(/*! raw-loader!./pay-slip.page.html */ "./node_modules/raw-loader/index.js!./src/app/pay-slip/pay-slip.page.html"),
            styles: [__webpack_require__(/*! ./pay-slip.page.scss */ "./src/app/pay-slip/pay-slip.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], PaySlipPage);
    return PaySlipPage;
}());



/***/ })

}]);
//# sourceMappingURL=pay-slip-pay-slip-module-es5.js.map