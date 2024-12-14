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

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -60px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.estimates-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 10px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.estimates-list .estimates-content {\n  padding: 10px 0px 10px 15px;\n}\n\n.estimates-content {\n  top: 0;\n  width: 100%;\n}\n\n.estimates-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.estimates-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n  padding-right: 10px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.estimates-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.estimates-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.estimates-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 35px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.estimates-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.estimates-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.estimates-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.estimates-content .id {\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n}\n\n.estimates-content .name {\n  font-family: \"Poppins-Light\";\n  color: #8c8b8b;\n  font-size: 14px;\n}\n\n.estimates-content .status {\n  font-size: 11px;\n  margin: auto 0;\n  border-radius: 50px;\n  padding: 0px 5px;\n  color: white;\n  margin-top: unset !important;\n}\n\n.estimates-content .est-accepted {\n  background: #22D165;\n}\n\n.estimates-content .est-pending {\n  background: #FE9C45;\n}\n\n.estimates-content .est-rejected {\n  background: #F10A0A;\n}\n\n.estimates-content .amount {\n  font-size: 14px;\n  margin-top: 14px;\n  text-align: end;\n  color: #8c8b8b;\n  white-space: nowrap;\n}\n\n.estimates-content .amount ion-icon {\n  color: #FF9F55;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.slide-item {\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 8px;\n}\n\n@media only screen and (max-width: 324px) {\n  .estimates-content .status {\n    font-size: 9px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0aW1hdGVzL0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXGVzdGltYXRlc1xcZXN0aW1hdGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXN0aW1hdGVzL2VzdGltYXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUMvRUo7O0FEa0ZBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQy9FSjs7QURrRkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUMvRUo7O0FEa0ZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUMvRUo7O0FEa0ZBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtEQUFBO0FDL0VKOztBRGtGQTtFQUNJLDJCQUFBO0FDL0VKOztBRGtGQTtFQUNJLE1BQUE7RUFDQSxXQUFBO0FDL0VKOztBRGlGSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDL0VSOztBRG1GQTtFQUNHLGtCQUFBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDaEZKOztBRG1GQSw2Q0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ2hGSjs7QURtRkEsNkJBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDaEZKOztBRG1GQSxnQ0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDaEZKOztBRG1GQTtFQUNJLHlCQUFBO0FDaEZKOztBRG1GQTtFQUNJLHlCQUFBO0FDaEZKOztBRG1GQSxvQ0FBQTs7QUFDQTtFQUNJLE9BQUE7QUNoRko7O0FEbUZBLG1DQUFBOztBQUNBO0VBQ0ksVUFBQTtBQ2hGSjs7QURtRkEsK0NBQUE7O0FBQ0E7O0VBRUksVUFBQTtBQ2hGSjs7QURvRkk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNqRlI7O0FEb0ZJO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2xGUjs7QURxRkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNuRlI7O0FEc0ZJO0VBQ0ksbUJBQUE7QUNwRlI7O0FEdUZJO0VBQ0ksbUJBQUE7QUNyRlI7O0FEd0ZJO0VBQ0ksbUJBQUE7QUN0RlI7O0FEeUZJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ3ZGUjs7QUR5RlE7RUFDSSxjQUFBO0FDdkZaOztBRDRGQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7QUN6Rko7O0FENkZBO0VBQ0ksc0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FDMUZKOztBRDZGQTtFQUVRO0lBQ0ksY0FBQTtFQzNGVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXN0aW1hdGVzL2VzdGltYXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaG9saWRheS1saXN0IHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcclxuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuLy8gICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktZGF5cy1kaXYge1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAubGVhdmUtdHlwZSB7XHJcbi8vICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktdGl0bGUge1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWRheSB7XHJcbi8vICAgICB0b3A6IDMxcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmFjY2VwdGVkIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkOTY0ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLnJlamVjdGVkIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwZDBkICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLnBlbmRpbmcge1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMThweDtcclxuLy8gICAgIG1pbi13aWR0aDogNzZweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWRheSB7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDI2cHg7XHJcbi8vICAgICByaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICM4ZThlOTMgIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gRXN0aW1hdGVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLS0+XHJcbi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZXN0aW1hdGUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDQ1cHg7XHJcbiAgICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KVxyXG59XHJcblxyXG4uZXN0aW1hdGVzLWxpc3QgLmVzdGltYXRlcy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTVweDtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jb250ZW50IHtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzk0OTQ5NDtcclxuICAgIH1cclxufVxyXG5cclxuLmVzdGltYXRlcy10aW1lbGluZSB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXHJcbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4uZXN0aW1hdGVzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmVzdGltYXRlcy1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHRvcDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMzFweDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbi5sZWZ0OjphZnRlcixcclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgLmlkIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xyXG4gICAgICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHVzIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtYWNjZXB0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMkQxNjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVzdC1wZW5kaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtcmVqZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGMTBBMEE7XHJcbiAgICB9XHJcblxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRjlGNTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmFiLWFkZC1idG4ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcblxyXG4uc2xpZGUtaXRlbSB7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjRweCkge1xyXG4gICAgLmVzdGltYXRlcy1jb250ZW50IHtcclxuICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmVzdGltYXRlcy1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC02MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLWVzdGltYXRlLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVzdGltYXRlcy1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCA0NXB4O1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLmVzdGltYXRlcy1saXN0IC5lc3RpbWF0ZXMtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTVweDtcbn1cblxuLmVzdGltYXRlcy1jb250ZW50IHtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cblxuLmVzdGltYXRlcy10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5lc3RpbWF0ZXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5lc3RpbWF0ZXMtY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5lc3RpbWF0ZXMtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcbn1cblxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcbiAgbGVmdDogMzFweDtcbn1cblxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXG4ubGVmdDo6YWZ0ZXIsXG4ucmlnaHQ6OmFmdGVyIHtcbiAgbGVmdDogMTVweDtcbn1cblxuLmVzdGltYXRlcy1jb250ZW50IC5pZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTGlnaHRcIjtcbiAgY29sb3I6ICM4YzhiOGI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IGF1dG8gMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5lc3QtYWNjZXB0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMjJEMTY1O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5lc3QtcGVuZGluZyB7XG4gIGJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1yZWplY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNGMTBBMEE7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogIzhjOGI4YjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuYW1vdW50IGlvbi1pY29uIHtcbiAgY29sb3I6ICNGRjlGNTU7XG59XG5cbi5mYWItYWRkLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG5cbi5zbGlkZS1pdGVtIHtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XG4gIC5lc3RpbWF0ZXMtY29udGVudCAuc3RhdHVzIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxufSJdfQ== */"

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