(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leave-list-leave-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/leave-list/leave-list.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leave-list/leave-list.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"util.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Leaves</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">List of Leaves</span> <span slot=\"end\"\r\n        class=\"custom-icon-leave-status-icons\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"estimates-timeline\">\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Patrick Paul</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-pending\">Pending</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Plan Leave</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">5 Days\r\n                    </div>\r\n                    <h4 class=\"payment-date\">\r\n                      12-Jan-2020\r\n                    </h4>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"deleteLeaveType('Accept')\">Accept</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"deleteLeaveType('Decline')\">Decline</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Patrick Paul</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-pending\">Pending</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Plan Leave</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">5 Days\r\n                    </div>\r\n                    <h4 class=\"payment-date\">\r\n                      12-Jan-2020\r\n                    </h4>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"deleteLeaveType('Accept')\">Accept</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"deleteLeaveType('Decline')\">Decline</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Patrick Paul</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-pending\">Pending</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Plan Leave</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">5 Days\r\n                    </div>\r\n                    <h4 class=\"payment-date\">\r\n                      12-Jan-2020\r\n                    </h4>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"deleteLeaveType('Accept')\">Accept</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"deleteLeaveType('Decline')\">Decline</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Patrick Paul</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-pending\">Pending</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Plan Leave</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">2 Days\r\n                    </div>\r\n                    <h4 class=\"payment-date\">\r\n                      02-Mar-2019\r\n                    </h4>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"deleteLeaveType('Accept')\">Accept</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"deleteLeaveType('Decline')\">Decline</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Paul Patrick</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-pending\">Pending</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Sick Leave</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">5 Days\r\n                    </div>\r\n                    <h4 class=\"payment-date\">\r\n                      12-Aug-2019\r\n                    </h4>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"deleteLeaveType('Accept')\">Accept</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"deleteLeaveType('Decline')\">Decline</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Jhon Deo</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-pending\">Pending</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Casual Leave</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">4 Days\r\n                    </div>\r\n                    <h4 class=\"payment-date\">\r\n                      10-Jan-2020\r\n                    </h4>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"deleteLeaveType('Accept')\">Accept</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"deleteLeaveType('Decline')\">Decline</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"addLeaveType()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/leave-list/leave-list-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/leave-list/leave-list-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LeaveListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveListPageRoutingModule", function() { return LeaveListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leave_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave-list.page */ "./src/app/leave-list/leave-list.page.ts");




var routes = [
    {
        path: '',
        component: _leave_list_page__WEBPACK_IMPORTED_MODULE_3__["LeaveListPage"]
    }
];
var LeaveListPageRoutingModule = /** @class */ (function () {
    function LeaveListPageRoutingModule() {
    }
    LeaveListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LeaveListPageRoutingModule);
    return LeaveListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/leave-list/leave-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/leave-list/leave-list.module.ts ***!
  \*************************************************/
/*! exports provided: LeaveListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveListPageModule", function() { return LeaveListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leave_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leave-list-routing.module */ "./src/app/leave-list/leave-list-routing.module.ts");
/* harmony import */ var _leave_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-list.page */ "./src/app/leave-list/leave-list.page.ts");







var LeaveListPageModule = /** @class */ (function () {
    function LeaveListPageModule() {
    }
    LeaveListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _leave_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaveListPageRoutingModule"]
            ],
            declarations: [_leave_list_page__WEBPACK_IMPORTED_MODULE_6__["LeaveListPage"]]
        })
    ], LeaveListPageModule);
    return LeaveListPageModule;
}());



/***/ }),

/***/ "./src/app/leave-list/leave-list.page.scss":
/*!*************************************************!*\
  !*** ./src/app/leave-list/leave-list.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -60px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-leave-status-icons {\n  font-size: 40px;\n  color: white;\n}\n\n.estimates-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 10px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.estimates-list .estimates-content {\n  padding: 10px 0px 10px 15px;\n}\n\n.estimates-content {\n  top: 0;\n  width: 100%;\n}\n\n.estimates-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.estimates-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-right: 5px;\n  top: 31px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.estimates-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.estimates-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.estimates-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 35px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.estimates-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.estimates-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.estimates-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.estimates-content .id {\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n}\n\n.estimates-content .name {\n  font-family: \"Poppins-Light\";\n  color: #8c8b8b;\n  font-size: 14px;\n}\n\n.estimates-content .status {\n  font-size: 11px;\n  margin: auto 0;\n  border-radius: 50px;\n  padding: 0px 5px;\n  color: white;\n  margin-top: unset !important;\n}\n\n.estimates-content .est-accepted {\n  background: #22D165;\n}\n\n.estimates-content .est-pending {\n  background: #FE9C45;\n}\n\n.estimates-content .est-rejected {\n  background: #F10A0A;\n}\n\n.estimates-content .amount {\n  font-size: 14px;\n  margin-top: 5px;\n  text-align: end;\n  color: #8c8b8b;\n  white-space: nowrap;\n}\n\n.estimates-content .amount ion-icon {\n  color: #FF9F55;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.slide-item {\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 8px;\n}\n\n@media only screen and (max-width: 324px) {\n  .estimates-content .status {\n    font-size: 9px;\n  }\n}\n\n.payment-date {\n  font-size: 11px;\n  margin: 0;\n  color: #8c8b8b;\n  text-align: end;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmUtbGlzdC9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXGxlYXZlLWxpc3RcXGxlYXZlLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9sZWF2ZS1saXN0L2xlYXZlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGQTtFQUNHLGdCQUFBO0VBQ0MsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDL0VKOztBRGtGQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUMvRUo7O0FEa0ZBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDL0VKOztBRGtGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDL0VKOztBRGtGQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrREFBQTtBQy9FSjs7QURrRkE7RUFDSSwyQkFBQTtBQy9FSjs7QURrRkE7RUFDSSxNQUFBO0VBQ0EsV0FBQTtBQy9FSjs7QURpRkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQy9FUjs7QURtRkE7RUFDRyxrQkFBQTtFQUNDLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ2hGSjs7QURtRkEsNkNBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNoRko7O0FEbUZBLDZCQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ2hGSjs7QURtRkEsZ0NBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2hGSjs7QURtRkE7RUFDSSx5QkFBQTtBQ2hGSjs7QURtRkE7RUFDSSx5QkFBQTtBQ2hGSjs7QURtRkEsb0NBQUE7O0FBQ0E7RUFDSSxPQUFBO0FDaEZKOztBRG1GQSxtQ0FBQTs7QUFDQTtFQUNJLFVBQUE7QUNoRko7O0FEbUZBLCtDQUFBOztBQUNBOztFQUVJLFVBQUE7QUNoRko7O0FEb0ZJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FDakZSOztBRG9GSTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNsRlI7O0FEcUZJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDbkZSOztBRHNGSTtFQUNJLG1CQUFBO0FDcEZSOztBRHVGSTtFQUNJLG1CQUFBO0FDckZSOztBRHdGSTtFQUNJLG1CQUFBO0FDdEZSOztBRHlGSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ3ZGUjs7QUR5RlE7RUFDSSxjQUFBO0FDdkZaOztBRDRGQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7QUN6Rko7O0FENkZBO0VBQ0ksc0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FDMUZKOztBRDZGQTtFQUVRO0lBQ0ksY0FBQTtFQzNGVjtBQUNGOztBRDhGQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzVGSiIsImZpbGUiOiJzcmMvYXBwL2xlYXZlLWxpc3QvbGVhdmUtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaG9saWRheS1saXN0IHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcclxuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuLy8gICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktZGF5cy1kaXYge1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAubGVhdmUtdHlwZSB7XHJcbi8vICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktdGl0bGUge1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWRheSB7XHJcbi8vICAgICB0b3A6IDMxcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmFjY2VwdGVkIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkOTY0ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLnJlamVjdGVkIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwZDBkICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLnBlbmRpbmcge1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMThweDtcclxuLy8gICAgIG1pbi13aWR0aDogNzZweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWRheSB7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDI2cHg7XHJcbi8vICAgICByaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICM4ZThlOTMgIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gRXN0aW1hdGVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLS0+XHJcbi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC02MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1sZWF2ZS1zdGF0dXMtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCA0NXB4O1xyXG4gICAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNClcclxufVxyXG5cclxuLmVzdGltYXRlcy1saXN0IC5lc3RpbWF0ZXMtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtY29udGVudCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtdGltZWxpbmUge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgdG9wOiAzMXB4O1xyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXHJcbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4uZXN0aW1hdGVzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmVzdGltYXRlcy1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHRvcDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMzFweDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbi5sZWZ0OjphZnRlcixcclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgLmlkIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xyXG4gICAgICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHVzIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtYWNjZXB0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMkQxNjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVzdC1wZW5kaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtcmVqZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGMTBBMEE7XHJcbiAgICB9XHJcblxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgY29sb3I6ICM4YzhiOGI7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGOUY1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYWItYWRkLWJ0biB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcclxufVxyXG5cclxuXHJcbi5zbGlkZS1pdGVtIHtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XHJcbiAgICAuZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnBheW1lbnQtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzhjOGI4YjtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuIiwiLmVzdGltYXRlcy1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC02MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLWxlYXZlLXN0YXR1cy1pY29ucyB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXN0aW1hdGVzLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDQ1cHg7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuXG4uZXN0aW1hdGVzLWxpc3QgLmVzdGltYXRlcy1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmVzdGltYXRlcy1jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTQ5NDk0O1xufVxuXG4uZXN0aW1hdGVzLXRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgdG9wOiAzMXB4O1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4uZXN0aW1hdGVzLXRpbWVsaW5lOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXG4uZXN0aW1hdGVzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XG59XG5cbi5lc3RpbWF0ZXMtY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XG59XG5cbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cbi5sZWZ0IHtcbiAgbGVmdDogMDtcbn1cblxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXG4uZXN0aW1hdGVzLXRpbWVsaW5lOjphZnRlciB7XG4gIGxlZnQ6IDMxcHg7XG59XG5cbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuLmxlZnQ6OmFmdGVyLFxuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbi5lc3RpbWF0ZXMtY29udGVudCAuaWQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLm5hbWUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLUxpZ2h0XCI7XG4gIGNvbG9yOiAjOGM4YjhiO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiBhdXRvIDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogdW5zZXQgIWltcG9ydGFudDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuZXN0LWFjY2VwdGVkIHtcbiAgYmFja2dyb3VuZDogIzIyRDE2NTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuZXN0LXBlbmRpbmcge1xuICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5lc3QtcmVqZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRjEwQTBBO1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5hbW91bnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogIzhjOGI4YjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuYW1vdW50IGlvbi1pY29uIHtcbiAgY29sb3I6ICNGRjlGNTU7XG59XG5cbi5mYWItYWRkLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG5cbi5zbGlkZS1pdGVtIHtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNHB4KSB7XG4gIC5lc3RpbWF0ZXMtY29udGVudCAuc3RhdHVzIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxufVxuLnBheW1lbnQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzhjOGI4YjtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/leave-list/leave-list.page.ts":
/*!***********************************************!*\
  !*** ./src/app/leave-list/leave-list.page.ts ***!
  \***********************************************/
/*! exports provided: LeaveListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveListPage", function() { return LeaveListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var LeaveListPage = /** @class */ (function () {
    function LeaveListPage(util, modalController, alertController) {
        this.util = util;
        this.modalController = modalController;
        this.alertController = alertController;
    }
    LeaveListPage.prototype.ngOnInit = function () {
    };
    LeaveListPage.prototype.deleteLeaveType = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Do you want to ' + msg + ' this Leave',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.successAlert(msg);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LeaveListPage.prototype.successAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success',
                            message: '<strong> Leave ' + msg + ' Successfully </strong>',
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LeaveListPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    LeaveListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-list',
            template: __webpack_require__(/*! raw-loader!./leave-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/leave-list/leave-list.page.html"),
            styles: [__webpack_require__(/*! ./leave-list.page.scss */ "./src/app/leave-list/leave-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], LeaveListPage);
    return LeaveListPage;
}());



/***/ })

}]);
//# sourceMappingURL=leave-list-leave-list-module-es5.js.map