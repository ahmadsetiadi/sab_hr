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

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.status-logo {\n  width: 50px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.estimate-item {\n  width: 50% !important;\n  padding: 5px;\n  border-right: 1px solid #ccc;\n  text-align: center;\n  margin: auto;\n}\n\n.right {\n  border-right: 0px !important;\n}\n\n.right.col {\n  padding: 0px !important;\n}\n\n.estimate-table {\n  border: 1px solid #ccc;\n  max-width: 100%;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 12px;\n}\n\n.estimate-total-row {\n  font-size: 12px !important;\n  margin: 0px !important;\n}\n\n.estimate-row {\n  border: 1px solid #ccc;\n  font-size: 12px !important;\n  margin: 0px !important;\n}\n\n.estimate-total {\n  width: 47% !important;\n  padding: 5px 0;\n  float: left;\n  text-align: center;\n  font-size: 10px !important;\n}\n\n.estimate-price {\n  width: 33.3% !important;\n  padding: 7px;\n  float: left;\n  font-size: 9px;\n  text-align: center;\n  border-right: 1px solid #ccc;\n}\n\n.sub-col {\n  border: 2px solid #ccc;\n  border-right: 2px solid #ccc !important;\n  border-top: 0px;\n}\n\n.total {\n  text-align: center !important;\n}\n\n.estimate-price.right.total {\n  width: 53% !important;\n  border-left: 1px solid #ccc !important;\n}\n\n.estimate-item strong {\n  font-family: \"Poppins-Regular\";\n  font-size: 12px !important;\n}\n\n.estimate-price strong,\n.estimate-total strong {\n  font-size: 10px !important;\n}\n\n.profile-list {\n  top: 20px;\n  padding: 0 15px;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.paySlipLogo {\n  width: 300px;\n  margin-top: -25px !important;\n  margin: 0 auto;\n  display: block;\n  padding-bottom: 5%;\n}\n\n@media only screen and (max-width: 324px) {\n  .paySlipLogo {\n    width: calc(100% - 90px) !important;\n  }\n}\n\n.inv-company {\n  display: block;\n  width: 100%;\n  font-size: 12px !important;\n  font-weight: 700 !important;\n  margin: 5px 0;\n}\n\n.inv-receiver {\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.invoice-details h5 span,\n.invoice-details1 h5 span {\n  font-size: 12px;\n  font-weight: 400;\n  display: block;\n  margin-top: 10px;\n}\n\n.inv-receiver-address {\n  font-size: 12px !important;\n  margin: 0 !important;\n}\n\n.invoice-details h5 {\n  text-align: right;\n}\n\n.invoice-details1 h5,\n.invoice-details h5,\n.head-name {\n  font-size: 12px !important;\n  font-family: \"Poppins-Medium\";\n}\n\n.head-name {\n  margin: 20px 0px 10px 0px;\n}\n\n.inv-recieve {\n  text-align: right;\n}\n\n.right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1lc3RpbWF0ZXMvRDpcXHNpbmFyXFxhcHAyL3NyY1xcYXBwXFx2aWV3LWVzdGltYXRlc1xcdmlldy1lc3RpbWF0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LWVzdGltYXRlcy92aWV3LWVzdGltYXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLDRCQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSwwQkFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSw2QkFBQTtBQ0FKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxzQ0FBQTtBQ0RKOztBRElBO0VBQ0ksOEJBQUE7RUFDQSwwQkFBQTtBQ0RKOztBRElBOztFQUVJLDBCQUFBO0FDREo7O0FESUE7RUFDRyxTQUFBO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJO0lBQ0ksbUNBQUE7RUNETjtBQUNGOztBRElBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7O0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtBQ0ZKOztBREtBOzs7RUFHSSwwQkFBQTtFQUNBLDZCQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZXN0aW1hdGVzL3ZpZXctZXN0aW1hdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFZpZXcgRXN0aW1hdGVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLS0+XHJcbi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLnN0YXR1cy1sb2dvIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1lc3RpbWF0ZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzdGltYXRlLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodC5jb2wge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZS10YWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZS10b3RhbC1yb3cge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtcm93IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZS10b3RhbCB7XHJcbiAgICB3aWR0aDogNDclICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZS1wcmljZSB7XHJcbiAgICB3aWR0aDogMzMuMyUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uc3ViLWNvbCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMHB4O1xyXG59XHJcblxyXG4udG90YWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZXN0aW1hdGUtcHJpY2UucmlnaHQudG90YWwge1xyXG4gICAgd2lkdGg6IDUzJSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZS1pdGVtIHN0cm9uZyB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtcHJpY2Ugc3Ryb25nLFxyXG4uZXN0aW1hdGUtdG90YWwgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZmlsZS1saXN0IHtcclxuICAgdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBheVNsaXBMb2dvIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XHJcbiAgICAucGF5U2xpcExvZ28ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW52LWNvbXBhbnkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmludi1yZWNlaXZlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW52b2ljZS1kZXRhaWxzIGg1IHNwYW4sXHJcbi5pbnZvaWNlLWRldGFpbHMxIGg1IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmludi1yZWNlaXZlci1hZGRyZXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnZvaWNlLWRldGFpbHMgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbnZvaWNlLWRldGFpbHMxIGg1LFxyXG4uaW52b2ljZS1kZXRhaWxzIGg1LFxyXG4uaGVhZC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxufVxyXG5cclxuLmhlYWQtbmFtZSB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG4uaW52LXJlY2lldmUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4vLyAuZXN0aW1hdGUtaXRlbSB7XHJcbi8vICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4vLyB9XHJcblxyXG4vLyAucmlnaHQge1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnJpZ2h0LmNvbCB7XHJcbi8vICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmVzdGltYXRlLXRhYmxlIHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbi8vICAgICBib3JkZXItc3BhY2luZzogMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gfVxyXG5cclxuLy8gLmVzdGltYXRlLXRvdGFsLXJvdyB7XHJcbi8vICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5lc3RpbWF0ZS1yb3cge1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmVzdGltYXRlLXRvdGFsIHtcclxuLy8gICAgIHdpZHRoOiAzNyUgIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi8vIC5lc3RpbWF0ZS1wcmljZSB7XHJcbi8vICAgICB3aWR0aDogMzMuMyUgIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmc6IDdweDtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgZm9udC1zaXplOiA5cHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4vLyB9XHJcblxyXG4vLyAudG90YWwge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLm90aGVycyB7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmc6IDBweDtcclxuLy8gfVxyXG5cclxuLy8gLm90aGVycy10ZXh0IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgIGNvbG9yOiAjNzc3ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmVzdGltYXRlLXByaWNlLnJpZ2h0LnRvdGFsIHtcclxuLy8gICAgIHdpZHRoOiA1OCUgIWltcG9ydGFudDtcclxuLy8gfSIsIi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVzdGltYXRlcy1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uc3RhdHVzLWxvZ28ge1xuICB3aWR0aDogNTBweDtcbn1cblxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZXN0aW1hdGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXN0aW1hdGUtaXRlbSB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0LmNvbCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZXN0aW1hdGUtdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZXN0aW1hdGUtdG90YWwtcm93IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlLXRvdGFsIHtcbiAgd2lkdGg6IDQ3JSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lc3RpbWF0ZS1wcmljZSB7XG4gIHdpZHRoOiAzMy4zJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA3cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3ViLWNvbCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG4udG90YWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlLXByaWNlLnJpZ2h0LnRvdGFsIHtcbiAgd2lkdGg6IDUzJSAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbn1cblxuLmVzdGltYXRlLWl0ZW0gc3Ryb25nIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4uZXN0aW1hdGUtcHJpY2Ugc3Ryb25nLFxuLmVzdGltYXRlLXRvdGFsIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZS1saXN0IHtcbiAgdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBheVNsaXBMb2dvIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAtMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjRweCkge1xuICAucGF5U2xpcExvZ28ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xuICB9XG59XG4uaW52LWNvbXBhbnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5pbnYtcmVjZWl2ZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnZvaWNlLWRldGFpbHMgaDUgc3Bhbixcbi5pbnZvaWNlLWRldGFpbHMxIGg1IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW52LXJlY2VpdmVyLWFkZHJlc3Mge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbnZvaWNlLWRldGFpbHMgaDUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmludm9pY2UtZGV0YWlsczEgaDUsXG4uaW52b2ljZS1kZXRhaWxzIGg1LFxuLmhlYWQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xufVxuXG4uaGVhZC1uYW1lIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAxMHB4IDBweDtcbn1cblxuLmludi1yZWNpZXZlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"

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