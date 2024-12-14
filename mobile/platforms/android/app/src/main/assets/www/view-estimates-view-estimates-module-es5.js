(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-estimates-view-estimates-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-estimates/view-estimates.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-estimates/view-estimates.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceService.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Estimates</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- ========================== View Estimates ===================================== -->\r\n<ion-content>\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">Estimate</span>\r\n      <span slot=\"end\" class=\"custom-icon-estimate-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"profile-list payslip\">\r\n      <img src=\"{{currentStatusLogo}}\" class=\"status-logo\">\r\n      <img src=\"./assets/imgs/Logo-new-blue.png\" class=\"paySlipLogo\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"invoice-details1\">\r\n            <h5>Created Date\r\n              <span>{{estimate.created_date | date : 'd MMM y'}}</span>\r\n            </h5>\r\n          </div>\r\n          <h5 class=\"inv-company head-name\">Estimate To</h5>\r\n          <!-- <h5 class=\"inv-company\">Client Name</h5> -->\r\n          <div class=\"inv-receiver\">\r\n            <!-- <h3 class=\"inv-receiver-address\">{{estimate.bill_to.company_name}},</h3> -->\r\n            <h3 class=\"inv-receiver-address\">{{estimate.bill_to.company_address}},{{estimate.bill_to.city}}</h3>\r\n            <h3 class=\"inv-receiver-address\">{{estimate.bill_to.state}},{{estimate.bill_to.country}}</h3>\r\n            <h3 class=\"inv-receiver-address\">{{estimate.bill_to.zip_code}}</h3>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col class=\"inv-recieve\">\r\n          <div class=\"invoice-details\">\r\n            <h5>Expiry Date\r\n              <span>{{estimate.due_date | date : 'd MMM y'}}</span>\r\n            </h5>\r\n          </div>\r\n          <h5 class=\"inv-company head-name\">Recieved From</h5>\r\n          <!-- <h5 class=\"inv-company\">Client Name</h5> -->\r\n          <div class=\"inv-receiver\">\r\n            <!-- <h3 class=\"inv-receiver-address\">{{estimate.receive_from.company_name}},</h3> -->\r\n            <h3 class=\"inv-receiver-address\">{{estimate.receive_from.company_address}},{{estimate.receive_from.city}}\r\n            </h3>\r\n            <h3 class=\"inv-receiver-address\">{{estimate.receive_from.state}},{{estimate.receive_from.country}}</h3>\r\n            <h3 class=\"inv-receiver-address\">{{estimate.receive_from.zip_code}}</h3>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div class=\"estimate-table\">\r\n        <ion-row class=\"estimate-row\">\r\n          <ion-col class=\"estimate-item\" size=\"4\">\r\n            <strong>Item</strong>\r\n          </ion-col>\r\n          <ion-col class=\"estimate-item right\" col>\r\n            <div class=\"estimate-price\">\r\n              <strong>Price</strong>\r\n            </div>\r\n            <div class=\"estimate-price\">\r\n              <strong>Qty</strong>\r\n            </div>\r\n            <div class=\"estimate-price right\">\r\n              <strong>Total</strong>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"estimate-row\" *ngFor=\"let item of estimate.items \">\r\n          <ion-col class=\"estimate-item\" size=\"4\">\r\n            {{item.item_name}}\r\n          </ion-col>\r\n          <ion-col class=\"estimate-item right\">\r\n            <div class=\"estimate-price\">\r\n              ${{item.unit_cost}}\r\n            </div>\r\n            <div class=\"estimate-price\">\r\n              {{item.quantity}}\r\n            </div>\r\n            <div class=\"estimate-price right\">\r\n              ${{item.total_cost}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            Sub Total\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            ${{subtotal}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            Tax1: ({{estimate.tax1}})\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            ${{tax1}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            Tax2: ({{estimate.tax2}})\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            ${{tax2}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"estimate-total-row\">\r\n        <ion-col class=\"estimate-item right\" size=\"6.7\">\r\n        </ion-col>\r\n        <ion-col class=\"estimate-item right sub-col\" size=\"5.3\">\r\n          <div class=\"estimate-total\">\r\n            <strong>Total</strong>\r\n          </div>\r\n          <div class=\"estimate-price right total\">\r\n            <strong>${{total}}</strong>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/view-estimates/view-estimates-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view-estimates/view-estimates-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewEstimatesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEstimatesPageRoutingModule", function() { return ViewEstimatesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_estimates_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-estimates.page */ "./src/app/view-estimates/view-estimates.page.ts");




var routes = [
    {
        path: '',
        component: _view_estimates_page__WEBPACK_IMPORTED_MODULE_3__["ViewEstimatesPage"]
    }
];
var ViewEstimatesPageRoutingModule = /** @class */ (function () {
    function ViewEstimatesPageRoutingModule() {
    }
    ViewEstimatesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewEstimatesPageRoutingModule);
    return ViewEstimatesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/view-estimates/view-estimates.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/view-estimates/view-estimates.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewEstimatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEstimatesPageModule", function() { return ViewEstimatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_estimates_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-estimates-routing.module */ "./src/app/view-estimates/view-estimates-routing.module.ts");
/* harmony import */ var _view_estimates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-estimates.page */ "./src/app/view-estimates/view-estimates.page.ts");







var ViewEstimatesPageModule = /** @class */ (function () {
    function ViewEstimatesPageModule() {
    }
    ViewEstimatesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_estimates_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEstimatesPageRoutingModule"]
            ],
            declarations: [_view_estimates_page__WEBPACK_IMPORTED_MODULE_6__["ViewEstimatesPage"]]
        })
    ], ViewEstimatesPageModule);
    return ViewEstimatesPageModule;
}());



/***/ }),

/***/ "./src/app/view-estimates/view-estimates.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/view-estimates/view-estimates.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.status-logo {\n  width: 50px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.estimate-item {\n  width: 50% !important;\n  padding: 5px;\n  border-right: 1px solid #ccc;\n  text-align: center;\n  margin: auto;\n}\n\n.right {\n  border-right: 0px !important;\n}\n\n.right.col {\n  padding: 0px !important;\n}\n\n.estimate-table {\n  border: 1px solid #ccc;\n  max-width: 100%;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 12px;\n}\n\n.estimate-total-row {\n  font-size: 12px !important;\n  margin: 0px !important;\n}\n\n.estimate-row {\n  border: 1px solid #ccc;\n  font-size: 12px !important;\n  margin: 0px !important;\n}\n\n.estimate-total {\n  width: 47% !important;\n  padding: 5px 0;\n  float: left;\n  text-align: center;\n  font-size: 10px !important;\n}\n\n.estimate-price {\n  width: 33.3% !important;\n  padding: 7px;\n  float: left;\n  font-size: 9px;\n  text-align: center;\n  border-right: 1px solid #ccc;\n}\n\n.sub-col {\n  border: 2px solid #ccc;\n  border-right: 2px solid #ccc !important;\n  border-top: 0px;\n}\n\n.total {\n  text-align: center !important;\n}\n\n.estimate-price.right.total {\n  width: 53% !important;\n  border-left: 1px solid #ccc !important;\n}\n\n.estimate-item strong {\n  font-family: \"Poppins-Regular\";\n  font-size: 12px !important;\n}\n\n.estimate-price strong,\n.estimate-total strong {\n  font-size: 10px !important;\n}\n\n.profile-list {\n  top: 20px;\n  padding: 0 15px;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.paySlipLogo {\n  width: 300px;\n  margin-top: -25px !important;\n  margin: 0 auto;\n  display: block;\n  padding-bottom: 5%;\n}\n\n@media only screen and (max-width: 324px) {\n  .paySlipLogo {\n    width: calc(100% - 90px) !important;\n  }\n}\n\n.inv-company {\n  display: block;\n  width: 100%;\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  margin: 5px 0;\n}\n\n.inv-receiver {\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.invoice-details h5 span,\n.invoice-details1 h5 span {\n  font-size: 12px;\n  font-weight: 400;\n  display: block;\n  margin-top: 10px;\n}\n\n.inv-receiver-address {\n  font-size: 12px !important;\n  margin: 0 !important;\n}\n\n.invoice-details h5 {\n  text-align: right;\n}\n\n.invoice-details1 h5,\n.invoice-details h5,\n.head-name {\n  font-size: 12px !important;\n  font-family: \"Poppins-Medium\";\n}\n\n.head-name {\n  margin: 20px 0px 10px 0px;\n}\n\n.inv-recieve {\n  text-align: right;\n}\n\n.right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1lc3RpbWF0ZXMvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcdmlldy1lc3RpbWF0ZXNcXHZpZXctZXN0aW1hdGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlldy1lc3RpbWF0ZXMvdmlldy1lc3RpbWF0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSw0QkFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksMEJBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksNkJBQUE7QUNBSjs7QURJQTtFQUNJLHFCQUFBO0VBQ0Esc0NBQUE7QUNESjs7QURJQTtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7QUNESjs7QURJQTs7RUFFSSwwQkFBQTtBQ0RKOztBRElBO0VBQ0csU0FBQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLG1DQUFBO0VDRE47QUFDRjs7QURJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBOztFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTs7O0VBR0ksMEJBQUE7RUFDQSw2QkFBQTtBQ0ZKOztBREtBO0VBQ0kseUJBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC92aWV3LWVzdGltYXRlcy92aWV3LWVzdGltYXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBWaWV3IEVzdGltYXRlcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC0tPlxyXG4uZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVzdGltYXRlcy1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtbG9nbyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZXN0aW1hdGUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZS1pdGVtIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHQuY29sIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtdGFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtdG90YWwtcm93IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzdGltYXRlLXJvdyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtdG90YWwge1xyXG4gICAgd2lkdGg6IDQ3JSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtcHJpY2Uge1xyXG4gICAgd2lkdGg6IDMzLjMlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnN1Yi1jb2wge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxufVxyXG5cclxuLnRvdGFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmVzdGltYXRlLXByaWNlLnJpZ2h0LnRvdGFsIHtcclxuICAgIHdpZHRoOiA1MyUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtaXRlbSBzdHJvbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzdGltYXRlLXByaWNlIHN0cm9uZyxcclxuLmVzdGltYXRlLXRvdGFsIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2ZpbGUtbGlzdCB7XHJcbiAgIHRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wYXlTbGlwTG9nbyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjRweCkge1xyXG4gICAgLnBheVNsaXBMb2dvIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmludi1jb21wYW55IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5pbnYtcmVjZWl2ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmludm9pY2UtZGV0YWlscyBoNSBzcGFuLFxyXG4uaW52b2ljZS1kZXRhaWxzMSBoNSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5pbnYtcmVjZWl2ZXItYWRkcmVzcyB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW52b2ljZS1kZXRhaWxzIGg1IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uaW52b2ljZS1kZXRhaWxzMSBoNSxcclxuLmludm9pY2UtZGV0YWlscyBoNSxcclxuLmhlYWQtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbn1cclxuXHJcbi5oZWFkLW5hbWUge1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAxMHB4IDBweDtcclxufVxyXG5cclxuLmludi1yZWNpZXZlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuLy8gLmVzdGltYXRlLWl0ZW0ge1xyXG4vLyAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxuLy8gfVxyXG5cclxuLy8gLnJpZ2h0IHtcclxuLy8gICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5yaWdodC5jb2wge1xyXG4vLyAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5lc3RpbWF0ZS10YWJsZSB7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4vLyAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vIH1cclxuXHJcbi8vIC5lc3RpbWF0ZS10b3RhbC1yb3cge1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZXN0aW1hdGUtcm93IHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbi8vICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5lc3RpbWF0ZS10b3RhbCB7XHJcbi8vICAgICB3aWR0aDogMzclICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAuZXN0aW1hdGUtcHJpY2Uge1xyXG4vLyAgICAgd2lkdGg6IDMzLjMlICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nOiA3cHg7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxuLy8gfVxyXG5cclxuLy8gLnRvdGFsIHtcclxuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5vdGhlcnMge1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nOiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5vdGhlcnMtdGV4dCB7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICBjb2xvcjogIzc3NyAhaW1wb3J0YW50O1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5lc3RpbWF0ZS1wcmljZS5yaWdodC50b3RhbCB7XHJcbi8vICAgICB3aWR0aDogNTglICFpbXBvcnRhbnQ7XHJcbi8vIH0iLCIuZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLnN0YXR1cy1sb2dvIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLWVzdGltYXRlLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVzdGltYXRlLWl0ZW0ge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodC5jb2wge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlLXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVzdGltYXRlLXRvdGFsLXJvdyB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZXN0aW1hdGUtcm93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS10b3RhbCB7XG4gIHdpZHRoOiA0NyUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZXN0aW1hdGUtcHJpY2Uge1xuICB3aWR0aDogMzMuMyUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogN3B4O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbn1cblxuLnN1Yi1jb2wge1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cblxuLnRvdGFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS1wcmljZS5yaWdodC50b3RhbCB7XG4gIHdpZHRoOiA1MyUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS1pdGVtIHN0cm9uZyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlLXByaWNlIHN0cm9uZyxcbi5lc3RpbWF0ZS10b3RhbCBzdHJvbmcge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtbGlzdCB7XG4gIHRvcDogMjBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wYXlTbGlwTG9nbyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogLTI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzI0cHgpIHtcbiAgLnBheVNsaXBMb2dvIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgfVxufVxuLmludi1jb21wYW55IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uaW52LXJlY2VpdmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW52b2ljZS1kZXRhaWxzIGg1IHNwYW4sXG4uaW52b2ljZS1kZXRhaWxzMSBoNSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmludi1yZWNlaXZlci1hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uaW52b2ljZS1kZXRhaWxzIGg1IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pbnZvaWNlLWRldGFpbHMxIGg1LFxuLmludm9pY2UtZGV0YWlscyBoNSxcbi5oZWFkLW5hbWUge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbn1cblxuLmhlYWQtbmFtZSB7XG4gIG1hcmdpbjogMjBweCAwcHggMTBweCAwcHg7XG59XG5cbi5pbnYtcmVjaWV2ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/view-estimates/view-estimates.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-estimates/view-estimates.page.ts ***!
  \*******************************************************/
/*! exports provided: ViewEstimatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEstimatesPage", function() { return ViewEstimatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");






var ViewEstimatesPage = /** @class */ (function () {
    function ViewEstimatesPage(apiService, dataService, referenceService, navContrl) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.referenceService = referenceService;
        this.navContrl = navContrl;
        this.tax1 = 0;
        this.tax2 = 0;
        this.subtotal = 0;
        this.total = 0;
        this.statusLogo = { accepted: '', rejected: '', pending: '' };
    }
    ViewEstimatesPage.prototype.ngOnInit = function () {
        this.statusLogo.accepted = "./assets/imgs/approved.png";
        this.statusLogo.rejected = "./assets/imgs/rejected.png";
        this.statusLogo.pending = "./assets/imgs/pending.png";
        this.estimate = this.dataService.estimateList[0];
        this.setLogo();
        this.items = this.estimate.items;
        this.tax1 = Math.ceil(this.subtotal * (parseInt(this.estimate.tax1) * 0.01));
        this.tax2 = Math.ceil(this.subtotal * (parseInt(this.estimate.tax2) * 0.01));
        this.total = this.subtotal + this.tax1 + this.tax2;
    };
    ViewEstimatesPage.prototype.setLogo = function () {
        if (this.estimate.status === 'Accepted') {
            this.currentStatusLogo = this.statusLogo.accepted;
        }
        else if (this.estimate.status === 'Declined') {
            this.currentStatusLogo = this.statusLogo.rejected;
        }
        else {
            this.estimate = this.statusLogo.pending;
        }
        console.log(this.currentStatusLogo);
    };
    ViewEstimatesPage.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _json_service__WEBPACK_IMPORTED_MODULE_5__["JsonService"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    ViewEstimatesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-estimates',
            template: __webpack_require__(/*! raw-loader!./view-estimates.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-estimates/view-estimates.page.html"),
            styles: [__webpack_require__(/*! ./view-estimates.page.scss */ "./src/app/view-estimates/view-estimates.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _json_service__WEBPACK_IMPORTED_MODULE_5__["JsonService"],
            _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], ViewEstimatesPage);
    return ViewEstimatesPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-estimates-view-estimates-module-es5.js.map