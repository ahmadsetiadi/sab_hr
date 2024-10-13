(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estimates-estimates-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/estimates/estimates.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/estimates/estimates.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"util.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Estimates</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content class=\"background-content\">\r\n  <ion-list class=\"holiday-list animated bounceInRight\" *ngFor=\"let eachEstimate of estimates; let i=index\"\r\n    [style.animationDelay.s]=\"0.3 + 0.1 * i\">\r\n    <ion-item-sliding>\r\n      <ion-item lines=\"none\" style=\"background: #fff;\">\r\n        <ion-label>\r\n          <div>\r\n            <h4 class=\"holiday-title\">#EST{{eachEstimate.invoiceNo}}</h4>\r\n            <span class=\"holiday-days-div\">\r\n              <h2 class=\"holiday-title\">${{eachEstimate.amount}}</h2>\r\n            </span>\r\n          </div>\r\n          <div class=\"holiday-card\">\r\n            <h4 class=\"leave-type\">{{eachEstimate.company}}</h4>\r\n          </div>\r\n          <div class=\"holiday-day\">\r\n            <h2 class=\"{{eachEstimate.status}}\">\r\n              {{eachEstimate.status}}</h2>\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"edit()\" color=\"success\">\r\n          Edit\r\n        </ion-item-option>\r\n        <ion-item-option (click)=\"delete()\" color=\"danger\">\r\n          Delete\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content> -->\r\n\r\n<!-- ========================== Estimates ===================================== -->\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">List of Estimates</span> <span slot=\"end\"\r\n        class=\"custom-icon-estimate-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"estimates-timeline\">\r\n      <div class=\"estimates-container left\" *ngFor=\"let estimate of estimates; let i=index;\">\r\n        <ion-list class=\"estimates-list\" id=\"{{i}}\" [ngClass]=\"cssClass\"\r\n          [ngStyle]=\"{ 'animation-delay': estimate.time + 's' }\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\" (click)=\"openView()\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">#{{estimate.invoiceNo}}</div>&nbsp;&nbsp;\r\n                      <div *ngIf=\"estimate.status == 'accepted'\" class=\"status est-accepted\">Accepted</div>\r\n                      <div *ngIf=\"estimate.status == 'pending'\" class=\"status est-rejected\">Pending</div>\r\n                      <div *ngIf=\"estimate.status == 'rejected'\" class=\"status est-pending\">Rejected</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">{{estimate.company}}</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">${{estimate.amount}}\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"delete(i)\">Delete</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/estimates/estimates-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/estimates/estimates-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EstimatesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatesPageRoutingModule", function() { return EstimatesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _estimates_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estimates.page */ "./src/app/estimates/estimates.page.ts");




var routes = [
    {
        path: '',
        component: _estimates_page__WEBPACK_IMPORTED_MODULE_3__["EstimatesPage"]
    }
];
var EstimatesPageRoutingModule = /** @class */ (function () {
    function EstimatesPageRoutingModule() {
    }
    EstimatesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EstimatesPageRoutingModule);
    return EstimatesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/estimates/estimates.module.ts":
/*!***********************************************!*\
  !*** ./src/app/estimates/estimates.module.ts ***!
  \***********************************************/
/*! exports provided: EstimatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatesPageModule", function() { return EstimatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _estimates_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estimates-routing.module */ "./src/app/estimates/estimates-routing.module.ts");
/* harmony import */ var _estimates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estimates.page */ "./src/app/estimates/estimates.page.ts");







var EstimatesPageModule = /** @class */ (function () {
    function EstimatesPageModule() {
    }
    EstimatesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _estimates_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstimatesPageRoutingModule"]
            ],
            declarations: [_estimates_page__WEBPACK_IMPORTED_MODULE_6__["EstimatesPage"]]
        })
    ], EstimatesPageModule);
    return EstimatesPageModule;
}());



/***/ }),

/***/ "./src/app/estimates/estimates.page.scss":
/*!***********************************************!*\
  !*** ./src/app/estimates/estimates.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -60px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.estimates-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 10px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.estimates-list .estimates-content {\n  padding: 10px 0px 10px 15px;\n}\n\n.estimates-content {\n  top: 0;\n  width: 100%;\n}\n\n.estimates-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.estimates-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n  padding-right: 10px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.estimates-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.estimates-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.estimates-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 35px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.estimates-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.estimates-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.estimates-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.estimates-content .id {\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n}\n\n.estimates-content .name {\n  font-family: \"Poppins-Light\";\n  color: #8c8b8b;\n  font-size: 14px;\n}\n\n.estimates-content .status {\n  font-size: 11px;\n  margin: auto 0;\n  border-radius: 50px;\n  padding: 0px 5px;\n  color: white;\n  margin-top: unset !important;\n}\n\n.estimates-content .est-accepted {\n  background: #22D165;\n}\n\n.estimates-content .est-pending {\n  background: #FE9C45;\n}\n\n.estimates-content .est-rejected {\n  background: #F10A0A;\n}\n\n.estimates-content .amount {\n  font-size: 14px;\n  margin-top: 14px;\n  text-align: end;\n  color: #8c8b8b;\n  white-space: nowrap;\n}\n\n.estimates-content .amount ion-icon {\n  color: #FF9F55;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.slide-item {\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 8px;\n}\n\n@media only screen and (max-width: 324px) {\n  .estimates-content .status {\n    font-size: 9px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0aW1hdGVzL0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcZXN0aW1hdGVzXFxlc3RpbWF0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9lc3RpbWF0ZXMvZXN0aW1hdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRkE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQy9FSjs7QURrRkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDL0VKOztBRGtGQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQy9FSjs7QURrRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQy9FSjs7QURrRkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0RBQUE7QUMvRUo7O0FEa0ZBO0VBQ0ksMkJBQUE7QUMvRUo7O0FEa0ZBO0VBQ0ksTUFBQTtFQUNBLFdBQUE7QUMvRUo7O0FEaUZJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUMvRVI7O0FEbUZBO0VBQ0csa0JBQUE7RUFDQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNoRko7O0FEbUZBLDZDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDaEZKOztBRG1GQSw2QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNoRko7O0FEbUZBLGdDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNoRko7O0FEbUZBO0VBQ0kseUJBQUE7QUNoRko7O0FEbUZBO0VBQ0kseUJBQUE7QUNoRko7O0FEbUZBLG9DQUFBOztBQUNBO0VBQ0ksT0FBQTtBQ2hGSjs7QURtRkEsbUNBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDaEZKOztBRG1GQSwrQ0FBQTs7QUFDQTs7RUFFSSxVQUFBO0FDaEZKOztBRG9GSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQ2pGUjs7QURvRkk7RUFDSSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDbEZSOztBRHFGSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ25GUjs7QURzRkk7RUFDSSxtQkFBQTtBQ3BGUjs7QUR1Rkk7RUFDSSxtQkFBQTtBQ3JGUjs7QUR3Rkk7RUFDSSxtQkFBQTtBQ3RGUjs7QUR5Rkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDdkZSOztBRHlGUTtFQUNJLGNBQUE7QUN2Rlo7O0FENEZBO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQ3pGSjs7QUQ2RkE7RUFDSSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7QUMxRko7O0FENkZBO0VBRVE7SUFDSSxjQUFBO0VDM0ZWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lc3RpbWF0ZXMvZXN0aW1hdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5ob2xpZGF5LWxpc3Qge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1kYXlzLWRpdiB7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi8vIC5sZWF2ZS10eXBlIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS10aXRsZSB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktZGF5IHtcclxuLy8gICAgIHRvcDogMzFweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuYWNjZXB0ZWQge1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMThweDtcclxuLy8gICAgIG1pbi13aWR0aDogNzZweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2Q5NjQgIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAucmVqZWN0ZWQge1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMThweDtcclxuLy8gICAgIG1pbi13aWR0aDogNzZweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjBkMGQgIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAucGVuZGluZyB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogMThweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWluLXdpZHRoOiA3NnB4O1xyXG4vLyAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktZGF5IHtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMjZweDtcclxuLy8gICAgIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBFc3RpbWF0ZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAtLT5cclxuLmVzdGltYXRlcy1jb250ZW50LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC02MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1lc3RpbWF0ZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzdGltYXRlcy1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggNDVweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpXHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtbGlzdCAuZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXN0aW1hdGVzLXRpbWVsaW5lIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRvcDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5lc3RpbWF0ZXMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcbi5sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4uZXN0aW1hdGVzLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG59XHJcblxyXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuLmxlZnQ6OmFmdGVyLFxyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtY29udGVudCB7XHJcbiAgICAuaWQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLUxpZ2h0XCI7XHJcbiAgICAgICAgY29sb3I6ICM4YzhiOGI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0dXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmVzdC1hY2NlcHRlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIyRDE2NTtcclxuICAgIH1cclxuXHJcbiAgICAuZXN0LXBlbmRpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVzdC1yZWplY3RlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0YxMEEwQTtcclxuICAgIH1cclxuXHJcbiAgICAuYW1vdW50IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgY29sb3I6ICM4YzhiOGI7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGOUY1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWItYWRkLWJ0biB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcclxufVxyXG5cclxuXHJcbi5zbGlkZS1pdGVtIHtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XHJcbiAgICAuZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZXN0aW1hdGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXN0aW1hdGVzLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDQ1cHg7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuXG4uZXN0aW1hdGVzLWxpc3QgLmVzdGltYXRlcy1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmVzdGltYXRlcy1jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTQ5NDk0O1xufVxuXG4uZXN0aW1hdGVzLXRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmVzdGltYXRlcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLmVzdGltYXRlcy1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBsZWZ0OiAzMXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlcixcbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQgLmlkIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xuICBjb2xvcjogIzhjOGI4YjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5zdGF0dXMge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogYXV0byAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1hY2NlcHRlZCB7XG4gIGJhY2tncm91bmQ6ICMyMkQxNjU7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuZXN0LXJlamVjdGVkIHtcbiAgYmFja2dyb3VuZDogI0YxMEEwQTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuYW1vdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiAjOGM4YjhiO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5hbW91bnQgaW9uLWljb24ge1xuICBjb2xvcjogI0ZGOUY1NTtcbn1cblxuLmZhYi1hZGQtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cblxuLnNsaWRlLWl0ZW0ge1xuICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzI0cHgpIHtcbiAgLmVzdGltYXRlcy1jb250ZW50IC5zdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/estimates/estimates.page.ts":
/*!*********************************************!*\
  !*** ./src/app/estimates/estimates.page.ts ***!
  \*********************************************/
/*! exports provided: EstimatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatesPage", function() { return EstimatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _edit_estimate_edit_estimate_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-estimate/edit-estimate.page */ "./src/app/edit-estimate/edit-estimate.page.ts");
/* harmony import */ var _crete_estimate_crete_estimate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crete-estimate/crete-estimate.page */ "./src/app/crete-estimate/crete-estimate.page.ts");







var EstimatesPage = /** @class */ (function () {
    function EstimatesPage(navContrl, dataService, events, alertController, modalController, util) {
        this.navContrl = navContrl;
        this.dataService = dataService;
        this.events = events;
        this.alertController = alertController;
        this.modalController = modalController;
        this.util = util;
        this.estimates = [];
        this.time = 0;
        this.cssClass = '';
        this.estimates = [{ invoiceNo: "2154", amount: "12543", company: "Dream's Tech", status: "accepted" },
            { invoiceNo: "1465", amount: "12543", company: "Dream's Tech", status: "accepted" },
            { invoiceNo: "34324", amount: "121253", company: "Dream's Tech", status: "accepted" },
            { invoiceNo: "53436", amount: "5453", company: "Dream's Tech", status: "pending" },
            { invoiceNo: "43234", amount: "1243", company: "Dream's Tech", status: "rejected" },
            { invoiceNo: "35521", amount: "143543", company: "Dream's Tech", status: "pending" },
            { invoiceNo: "35864", amount: "12543", company: "Dream's Tech", status: "accepted" },
            { invoiceNo: "35824", amount: "1125", company: "Dream's Tech", status: "rejected" },
            { invoiceNo: "35984", amount: "12543", company: "Dream's Tech", status: "pending" }];
    }
    EstimatesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.estimates.forEach(function (element) {
            _this.time = _this.time + 0.2;
            element.time = _this.time;
        });
        console.log(this.estimates);
        this.applyClassBySelection('bounceInRight');
    };
    EstimatesPage.prototype.applyClassBySelection = function (effect) {
        this.cssClass = "animated " + effect;
    };
    EstimatesPage.prototype.openView = function () {
        this.navContrl.navigateForward('/view-estimates');
    };
    EstimatesPage.prototype.delete = function (i) {
        var _this = this;
        this.util.deleteAlert("Confirm Delete", "Do you want to delete this estimate").then(function (res) {
            _this.onDeleteConfirm(i);
        });
    };
    EstimatesPage.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_estimate_edit_estimate_page__WEBPACK_IMPORTED_MODULE_5__["EditEstimatePage"],
                            componentProps: {
                                "invoice": this.dataService.invoiceList[0],
                                "type": 'Estimate'
                            },
                            cssClass: 'custom-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        this.util.isModal = "blurPage";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss().then(function (data) {
                                console.log(data);
                                _this.util.isModal = "";
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimatesPage.prototype.add = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _crete_estimate_crete_estimate_page__WEBPACK_IMPORTED_MODULE_6__["CreteEstimatePage"],
                            cssClass: 'custom-modal',
                            componentProps: {
                                "invoice": this.dataService.invoiceList[0],
                                "type": 'Estimate'
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        this.util.isModal = "blurPage";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss().then(function (data) {
                                console.log(data);
                                _this.util.isModal = "";
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimatesPage.prototype.onDeleteConfirm = function (i) {
        var _this = this;
        var element = document.getElementById(i);
        element.classList.add('animated', 'rollOut', 'slow');
        element.addEventListener('animationend', (function (e) {
            _this.estimates.splice(i, 1);
            _this.util.showAlert('Smart HR', 'Estimate Removed successfully');
        }));
    };
    EstimatesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    EstimatesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estimates',
            template: __webpack_require__(/*! raw-loader!./estimates.page.html */ "./node_modules/raw-loader/index.js!./src/app/estimates/estimates.page.html"),
            styles: [__webpack_require__(/*! ./estimates.page.scss */ "./src/app/estimates/estimates.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], EstimatesPage);
    return EstimatesPage;
}());



/***/ })

}]);
//# sourceMappingURL=estimates-estimates-module-es5.js.map