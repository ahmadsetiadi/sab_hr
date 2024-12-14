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

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -60px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-leave-status-icons {\n  font-size: 40px;\n  color: white;\n}\n\n.estimates-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 10px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.estimates-list .estimates-content {\n  padding: 10px 0px 10px 15px;\n}\n\n.estimates-content {\n  top: 0;\n  width: 100%;\n}\n\n.estimates-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.estimates-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-right: 5px;\n  top: 31px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.estimates-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.estimates-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.estimates-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 35px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.estimates-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.estimates-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.estimates-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.estimates-content .id {\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n}\n\n.estimates-content .name {\n  font-family: \"Poppins-Light\";\n  color: #8c8b8b;\n  font-size: 14px;\n}\n\n.estimates-content .status {\n  font-size: 11px;\n  margin: auto 0;\n  border-radius: 50px;\n  padding: 0px 5px;\n  color: white;\n  margin-top: unset !important;\n}\n\n.estimates-content .est-accepted {\n  background: #22D165;\n}\n\n.estimates-content .est-pending {\n  background: #FE9C45;\n}\n\n.estimates-content .est-rejected {\n  background: #F10A0A;\n}\n\n.estimates-content .amount {\n  font-size: 14px;\n  margin-top: 5px;\n  text-align: end;\n  color: #8c8b8b;\n  white-space: nowrap;\n}\n\n.estimates-content .amount ion-icon {\n  color: #FF9F55;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.slide-item {\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 8px;\n}\n\n@media only screen and (max-width: 324px) {\n  .estimates-content .status {\n    font-size: 9px;\n  }\n}\n\n.payment-date {\n  font-size: 11px;\n  margin: 0;\n  color: #8c8b8b;\n  text-align: end;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmUtbGlzdC9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFxsZWF2ZS1saXN0XFxsZWF2ZS1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGVhdmUtbGlzdC9sZWF2ZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRkE7RUFDRyxnQkFBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQy9FSjs7QURrRkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDL0VKOztBRGtGQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQy9FSjs7QURrRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQy9FSjs7QURrRkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0RBQUE7QUMvRUo7O0FEa0ZBO0VBQ0ksMkJBQUE7QUMvRUo7O0FEa0ZBO0VBQ0ksTUFBQTtFQUNBLFdBQUE7QUMvRUo7O0FEaUZJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUMvRVI7O0FEbUZBO0VBQ0csa0JBQUE7RUFDQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNoRko7O0FEbUZBLDZDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDaEZKOztBRG1GQSw2QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNoRko7O0FEbUZBLGdDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNoRko7O0FEbUZBO0VBQ0kseUJBQUE7QUNoRko7O0FEbUZBO0VBQ0kseUJBQUE7QUNoRko7O0FEbUZBLG9DQUFBOztBQUNBO0VBQ0ksT0FBQTtBQ2hGSjs7QURtRkEsbUNBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDaEZKOztBRG1GQSwrQ0FBQTs7QUFDQTs7RUFFSSxVQUFBO0FDaEZKOztBRG9GSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQ2pGUjs7QURvRkk7RUFDSSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDbEZSOztBRHFGSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ25GUjs7QURzRkk7RUFDSSxtQkFBQTtBQ3BGUjs7QUR1Rkk7RUFDSSxtQkFBQTtBQ3JGUjs7QUR3Rkk7RUFDSSxtQkFBQTtBQ3RGUjs7QUR5Rkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUN2RlI7O0FEeUZRO0VBQ0ksY0FBQTtBQ3ZGWjs7QUQ0RkE7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0FDekZKOztBRDZGQTtFQUNJLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtBQzFGSjs7QUQ2RkE7RUFFUTtJQUNJLGNBQUE7RUMzRlY7QUFDRjs7QUQ4RkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUM1RkoiLCJmaWxlIjoic3JjL2FwcC9sZWF2ZS1saXN0L2xlYXZlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmhvbGlkYXktbGlzdCB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWRheXMtZGl2IHtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gfVxyXG5cclxuLy8gLmxlYXZlLXR5cGUge1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LXRpdGxlIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1kYXkge1xyXG4vLyAgICAgdG9wOiAzMXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5hY2NlcHRlZCB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogMThweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWluLXdpZHRoOiA3NnB4O1xyXG4vLyAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDk2NCAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5yZWplY3RlZCB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogMThweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWluLXdpZHRoOiA3NnB4O1xyXG4vLyAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2MGQwZCAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5wZW5kaW5nIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1kYXkge1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAyNnB4O1xyXG4vLyAgICAgcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjOGU4ZTkzICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEVzdGltYXRlcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC0tPlxyXG4uZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tbGVhdmUtc3RhdHVzLWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzdGltYXRlcy1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggNDVweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpXHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtbGlzdCAuZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXN0aW1hdGVzLXRpbWVsaW5lIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHRvcDogMzFweDtcclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4uZXN0aW1hdGVzLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cclxuLmVzdGltYXRlcy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcbi5lc3RpbWF0ZXMtY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cclxuLmxlZnQge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4ubGVmdDo6YWZ0ZXIsXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jb250ZW50IHtcclxuICAgIC5pZCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTGlnaHRcIjtcclxuICAgICAgICBjb2xvcjogIzhjOGI4YjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXR1cyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZXN0LWFjY2VwdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjJEMTY1O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtcGVuZGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZFOUM0NTtcclxuICAgIH1cclxuXHJcbiAgICAuZXN0LXJlamVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjEwQTBBO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbW91bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRjlGNTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmFiLWFkZC1idG4ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcblxyXG4uc2xpZGUtaXRlbSB7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjRweCkge1xyXG4gICAgLmVzdGltYXRlcy1jb250ZW50IHtcclxuICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wYXltZW50LWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM4YzhiOGI7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiIsIi5lc3RpbWF0ZXMtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVzdGltYXRlcy1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1sZWF2ZS1zdGF0dXMtaWNvbnMge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVzdGltYXRlcy1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCA0NXB4O1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLmVzdGltYXRlcy1saXN0IC5lc3RpbWF0ZXMtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTVweDtcbn1cblxuLmVzdGltYXRlcy1jb250ZW50IHtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cblxuLmVzdGltYXRlcy10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHRvcDogMzFweDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmVzdGltYXRlcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLmVzdGltYXRlcy1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBsZWZ0OiAzMXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlcixcbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQgLmlkIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xuICBjb2xvcjogIzhjOGI4YjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5zdGF0dXMge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogYXV0byAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1hY2NlcHRlZCB7XG4gIGJhY2tncm91bmQ6ICMyMkQxNjU7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuZXN0LXJlamVjdGVkIHtcbiAgYmFja2dyb3VuZDogI0YxMEEwQTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuYW1vdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6ICM4YzhiOGI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmFtb3VudCBpb24taWNvbiB7XG4gIGNvbG9yOiAjRkY5RjU1O1xufVxuXG4uZmFiLWFkZC1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xufVxuXG4uc2xpZGUtaXRlbSB7XG4gIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xuICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjRweCkge1xuICAuZXN0aW1hdGVzLWNvbnRlbnQgLnN0YXR1cyB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbn1cbi5wYXltZW50LWRhdGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM4YzhiOGI7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */"

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