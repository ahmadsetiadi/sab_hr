(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leave-type-leave-type-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/leave-type/leave-type.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leave-type/leave-type.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"util.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Leaves</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <!-- <div>\r\n    <ion-list class=\"holiday-list\">\r\n      <ion-item-sliding>\r\n        <ion-item lines=\"none\">\r\n          <ion-label class=\"label label-md\">\r\n            <div>\r\n              <h4 class=\"holiday-title\">Casual leave</h4>\r\n            </div>\r\n            <div class=\"holiday-card\">\r\n              <h4 class=\"days\">6Days</h4>\r\n            </div>\r\n            <div class=\"holiday-day\">\r\n              <h2 class=\"leave-status leave-accept-status\">Active</h2>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option (click)=\"editLeaveType()\" color=\"success\">\r\n            Edit\r\n          </ion-item-option>\r\n          <ion-item-option (click)=\"deleteLeaveType()\" color=\"danger\">\r\n            Delete\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-list class=\"holiday-list\">\r\n      <ion-item-sliding>\r\n        <ion-item lines=\"none\">\r\n          <ion-label class=\"label label-md\">\r\n            <div>\r\n              <h4 class=\"holiday-title\">Sick leave</h4>\r\n            </div>\r\n            <div class=\"holiday-card\">\r\n              <h4 class=\"days\">2Days</h4>\r\n            </div>\r\n            <div class=\"holiday-day\">\r\n              <h2 class=\"leave-status leave-reject-status\">Inactive</h2>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option (click)=\"editLeaveType()\" color=\"success\">\r\n            Edit\r\n          </ion-item-option>\r\n          <ion-item-option (click)=\"deleteLeaveType()\" color=\"danger\">\r\n            Delete\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-list class=\"holiday-list\">\r\n      <ion-item-sliding>\r\n        <ion-item lines=\"none\">\r\n          <ion-label class=\"label label-md\">\r\n            <div>\r\n              <h4 class=\"holiday-title\">Medical leave</h4>\r\n            </div>\r\n            <div class=\"holiday-card\">\r\n              <h4 class=\"days\">5Days</h4>\r\n            </div>\r\n            <div class=\"holiday-day\">\r\n              <h2 class=\"leave-status leave-accept-status\">Active</h2>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option (click)=\"editLeaveType()\" color=\"success\">\r\n            Edit\r\n          </ion-item-option>\r\n          <ion-item-option (click)=\"deleteLeaveType()\" color=\"danger\">\r\n            Delete\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-list class=\"holiday-list\">\r\n      <ion-item-sliding>\r\n        <ion-item lines=\"none\">\r\n          <ion-label class=\"label label-md\">\r\n            <div>\r\n              <h4 class=\"holiday-title\">Normal leave</h4>\r\n            </div>\r\n            <div class=\"holiday-card\">\r\n              <h4 class=\"days\">12Days</h4>\r\n            </div>\r\n            <div class=\"holiday-day\">\r\n              <h2 class=\"leave-status leave-accept-status\">Active</h2>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option (click)=\"editLeaveType()\" color=\"success\">\r\n            Edit\r\n          </ion-item-option>\r\n          <ion-item-option (click)=\"deleteLeaveType()\" color=\"danger\">\r\n            Delete\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </div> -->\r\n\r\n\r\n  <!-- ========================== Employee Leave Reuest ===================================== -->\r\n  <div class=\"leave-empty-div\">\r\n    <div class=\"employee-div\">\r\n      <div class=\"edit-icon\">\r\n        <span class=\"custom-icon-edit-icon\" (click)=\"edit()\"></span>\r\n      </div>\r\n      <div class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"employee-name\">John Doe</div>\r\n    <div class=\"employee-design\">Android Developer</div>\r\n  </div>\r\n\r\n  <div class=\"leave-content-div\">\r\n    <ion-segment class=\"leave-segment\" [(ngModel)]=\"leave\">\r\n      <ion-segment-button value=\"pending\" checked=\"true\">\r\n        <div class=\"seg-btn pending-icon\">\r\n          <span class=\"custom-icon-leave-status-icons\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"accepted\">\r\n        <div class=\"seg-btn accepted-icon\">\r\n          <span class=\"custom-icon-leave-status-icons\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"rejected\">\r\n        <div class=\"seg-btn rejected-icon\">\r\n          <span class=\"custom-icon-leave-status-icons\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div [ngSwitch]=\"leave\">\r\n      <div *ngSwitchCase=\"'pending'\" class=\"seg-content\">\r\n        <div class=\"leave-timeline\">\r\n          <h4 class=\"seg-title leave-list\">Pending</h4>\r\n          <div class=\"border leave-list\"></div>\r\n          <div class=\"leave-container left\">\r\n            <ion-list class=\"leave-list\">\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"leave-type\">Plan Leave</span></ion-col>\r\n                <ion-col size=\"6\" class=\"end action\" (click)=\"leaveDetail()\">View Details</ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">28-12-2019</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">28-12-2019</span></ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"leave-container left\">\r\n            <ion-list class=\"leave-list\">\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"leave-type\">Plan Leave</span></ion-col>\r\n                <ion-col size=\"6\" class=\"end action\" (click)=\"leaveDetail()\">View Details</ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">28-12-2019</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">28-12-2019</span></ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"leave-container left\">\r\n            <ion-list class=\"leave-list\">\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"leave-type\">Plan Leave</span></ion-col>\r\n                <ion-col size=\"6\" class=\"end action\" (click)=\"leaveDetail()\">View Details</ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">28-12-2019</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">28-12-2019</span></ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngSwitchCase=\"'accepted'\" class=\"seg-content\">\r\n        <div class=\"leave-timeline\">\r\n          <h4 class=\"seg-title leave-list\">Approved</h4>\r\n          <div class=\"border leave-list\"></div>\r\n          <div class=\"leave-container left\">\r\n            <ion-list class=\"leave-list\">\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"leave-type\">Plan Leave</span></ion-col>\r\n                <ion-col size=\"6\" class=\"end action\" (click)=\"leaveDetail()\">View Details</ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">28-12-2019</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">28-12-2019</span></ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"leave-container left\">\r\n            <ion-list class=\"leave-list\">\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"leave-type\">Plan Leave</span></ion-col>\r\n                <ion-col size=\"6\" class=\"end action\" (click)=\"leaveDetail()\">View Details</ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">28-12-2019</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">28-12-2019</span></ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"leave-container left\">\r\n            <ion-list class=\"leave-list\">\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"leave-type\">Plan Leave</span></ion-col>\r\n                <ion-col size=\"6\" class=\"end action\" (click)=\"leaveDetail()\">View Details</ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">28-12-2019</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">28-12-2019</span></ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngSwitchCase=\"'rejected'\" class=\"seg-content\">\r\n        <div class=\"leave-timeline\">\r\n          <h4 class=\"seg-title leave-list\">Rejected</h4>\r\n          <div class=\"border leave-list\"></div>\r\n          <div class=\"leave-container left\">\r\n            <ion-list class=\"leave-list\">\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"leave-type\">Plan Leave</span></ion-col>\r\n                <ion-col size=\"6\" class=\"end action\" (click)=\"leaveDetail()\">View Details</ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">28-12-2019</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">28-12-2019</span></ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"leave-container left\">\r\n            <ion-list class=\"leave-list\">\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"leave-type\">Plan Leave</span></ion-col>\r\n                <ion-col size=\"6\" class=\"end action\" (click)=\"leaveDetail()\">View Details</ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">28-12-2019</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">28-12-2019</span></ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"leave-container left\">\r\n            <ion-list class=\"leave-list\">\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"leave-type\">Plan Leave</span></ion-col>\r\n                <ion-col size=\"6\" class=\"end action\" (click)=\"leaveDetail()\">View Details</ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">28-12-2019</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">28-12-2019</span></ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button class=\"fab-add-btn\" (click)=\"addLeaveType()\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/leave-type/leave-type-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/leave-type/leave-type-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LeaveTypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypePageRoutingModule", function() { return LeaveTypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leave_type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave-type.page */ "./src/app/leave-type/leave-type.page.ts");




var routes = [
    {
        path: '',
        component: _leave_type_page__WEBPACK_IMPORTED_MODULE_3__["LeaveTypePage"]
    }
];
var LeaveTypePageRoutingModule = /** @class */ (function () {
    function LeaveTypePageRoutingModule() {
    }
    LeaveTypePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LeaveTypePageRoutingModule);
    return LeaveTypePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/leave-type/leave-type.module.ts":
/*!*************************************************!*\
  !*** ./src/app/leave-type/leave-type.module.ts ***!
  \*************************************************/
/*! exports provided: LeaveTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypePageModule", function() { return LeaveTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leave_type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leave-type-routing.module */ "./src/app/leave-type/leave-type-routing.module.ts");
/* harmony import */ var _leave_type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-type.page */ "./src/app/leave-type/leave-type.page.ts");







var LeaveTypePageModule = /** @class */ (function () {
    function LeaveTypePageModule() {
    }
    LeaveTypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _leave_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaveTypePageRoutingModule"]
            ],
            declarations: [_leave_type_page__WEBPACK_IMPORTED_MODULE_6__["LeaveTypePage"]]
        })
    ], LeaveTypePageModule);
    return LeaveTypePageModule;
}());



/***/ }),

/***/ "./src/app/leave-type/leave-type.page.scss":
/*!*************************************************!*\
  !*** ./src/app/leave-type/leave-type.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leave-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.leave-empty-div {\n  background: #0A15D5;\n  height: 300px;\n}\n\n.user-icon {\n  font-size: 85px;\n  margin: 10px;\n}\n\n.employee-div {\n  text-align: center;\n  border: solid 1px #dcdcdc;\n  border-radius: 80px;\n  background: #fff;\n  height: 149px;\n  width: 150px;\n  margin: 0 auto;\n}\n\n.employee-name {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n  margin-top: 8px;\n}\n\n.employee-design {\n  font-size: 16px;\n  text-align: center;\n  color: white;\n}\n\n.custom-icon-edit-icon {\n  font-size: 35px;\n  color: white;\n  font-weight: 500;\n}\n\n.edit-icon {\n  background: #FE9C45;\n  border-radius: 20px;\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  margin-left: 100px;\n}\n\n.leave-segment {\n  border-radius: 50px;\n  margin: auto;\n  width: calc(100% - 10%);\n  top: -20px;\n  margin-bottom: 20px;\n  position: relative;\n  background: white;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n  --background-checked: none;\n  --indicator-color-checked: none;\n}\n\n.leave-segment .segment-button-checked .seg-btn {\n  border: solid 1px;\n}\n\n.leave-segment .seg-btn {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto;\n  border-radius: 50px;\n}\n\n.leave-segment .pending-icon {\n  color: #fe9c45 !important;\n  border-color: #fe9c45;\n}\n\n.leave-segment .accepted-icon {\n  color: #22D165 !important;\n  border-color: #22D165;\n}\n\n.leave-segment .rejected-icon {\n  color: #F10A0A !important;\n  border-color: #F10A0A;\n}\n\n.leave-segment ion-segment-button {\n  margin: 10px;\n  --border-color: #fff0;\n}\n\n.leave-segment ion-segment-button .seg-btn {\n  font-size: 45px;\n  color: black;\n}\n\n.seg-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.border {\n  border-top: solid 2px #FE9C45;\n  width: 60px;\n  margin-bottom: 25px;\n}\n\n.seg-content {\n  padding-right: 20px;\n}\n\n.leave-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.leave-list {\n  margin-left: 50px;\n}\n\n.leave-list .leave-type {\n  border-radius: 50px;\n  border: solid 1px #FE9C45;\n  color: #FE9C45;\n  padding: 2px 10px;\n  font-size: 14px !important;\n  white-space: nowrap;\n}\n\n.leave-list .custom-icon-calendar-icon {\n  color: #FE9C45;\n}\n\n.leave-list .end {\n  text-align: end;\n  color: #FE9C45;\n  white-space: nowrap;\n  margin: auto;\n}\n\n.leave-list .date {\n  color: black;\n}\n\n.leave-list .action {\n  font-size: 12px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.leave-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.leave-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.leave-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 15px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.leave-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.leave-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.leave-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\nion-fab {\n  position: fixed !important;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmUtdHlwZS9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFxsZWF2ZS10eXBlXFxsZWF2ZS10eXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGVhdmUtdHlwZS9sZWF2ZS10eXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRUE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3pFSjs7QUQ0RUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUN6RUY7O0FENEVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUN6RUY7O0FENEVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN6RUY7O0FENEVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3pFRjs7QUQ0RUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDekVGOztBRDRFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUN6RUY7O0FENEVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3pFRjs7QUQ0RUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUN6RUo7O0FENEVJO0VBQ0UsaUJBQUE7QUMxRU47O0FEK0VFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUM3RUo7O0FEZ0ZFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQzlFSjs7QURpRkU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDL0VKOztBRGtGRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUNoRko7O0FEbUZFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDakZKOztBRG1GSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDakZOOztBRHNGQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ25GRjs7QURzRkE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ25GRjs7QURzRkE7RUFDRSxtQkFBQTtBQ25GRjs7QUR1RkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3BGRjs7QUR1RkE7RUFDRSxpQkFBQTtBQ3BGRjs7QURzRkU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ3BGSjs7QUR1RkU7RUFDRSxjQUFBO0FDckZKOztBRHdGRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDdEZKOztBRHlGRTtFQUNFLFlBQUE7QUN2Rko7O0FEMEZFO0VBQ0UsZUFBQTtBQ3hGSjs7QUQ0RkEsNkNBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUN6RkY7O0FENEZBLDZCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ3pGRjs7QUQ0RkEsZ0NBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3pGRjs7QUQ0RkE7RUFDRSx5QkFBQTtBQ3pGRjs7QUQ0RkE7RUFDRSx5QkFBQTtBQ3pGRjs7QUQ0RkEsb0NBQUE7O0FBQ0E7RUFDRSxPQUFBO0FDekZGOztBRDRGQSxtQ0FBQTs7QUFDQTtFQUNFLFVBQUE7QUN6RkY7O0FENEZBLCtDQUFBOztBQUNBOztFQUVFLFVBQUE7QUN6RkY7O0FENEZBO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBQ3pGRjs7QUQ0RkE7RUFDRSwwQkFBQTtFQUNBLFlBQUE7QUN6RkYiLCJmaWxlIjoic3JjL2FwcC9sZWF2ZS10eXBlL2xlYXZlLXR5cGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmJsdWVzLW5hdiB7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2IoNjgsIDE4NywgMjM2KTtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWl0ZW0ge1xyXG4vLyAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbi8vIH1cclxuLy8gLm5hdi1jb250ZW50IHtcclxuLy8gICBjb2xvcjogI2ZmZjtcclxuLy8gfVxyXG5cclxuLy8gLmhlYWRlci1tZDphZnRlciB7XHJcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS10aXRsZSB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbi8vICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZGF5cyB7XHJcbi8vICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuLy8gICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1kYXkge1xyXG4vLyAgIGZsb2F0OiByaWdodDtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiAyNnB4O1xyXG4vLyAgIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICM4ZThlOTMgIWltcG9ydGFudDtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4vLyAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmxlYXZlLXN0YXR1cyB7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyAgIGhlaWdodDogMThweDtcclxuLy8gICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgbWluLXdpZHRoOiA3NnB4O1xyXG4vLyAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAubGVhdmUtcmVqZWN0LXN0YXR1cyB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2U2MGQwZCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1saXN0IHtcclxuLy8gICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcclxuLy8gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyB9XHJcblxyXG4vLyAubGVhdmUtYWNjZXB0LXN0YXR1cyB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDk2NCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuYmFja2dyb3VuZC1jb250ZW50IHtcclxuLy8gICAtLWJhY2tncm91bmQ6ICNlMmUyZTIgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRW1wbG95ZWUgTGVhdmUgUmVxdWVzdCA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi5sZWF2ZS1jb250ZW50LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sZWF2ZS1lbXB0eS1kaXYge1xyXG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgZm9udC1zaXplOiA4NXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmVtcGxveWVlLWRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7XHJcbiAgYm9yZGVyLXJhZGl1czogODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMTQ5cHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZW1wbG95ZWUtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4uZW1wbG95ZWUtZGVzaWduIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWVkaXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZWRpdC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbi5sZWF2ZS1zZWdtZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogbm9uZTtcclxuXHJcbiAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgLnNlZy1idG4ge1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuc2VnLWJ0biB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB9XHJcblxyXG4gIC5wZW5kaW5nLWljb24ge1xyXG4gICAgY29sb3I6ICNmZTljNDUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZlOWM0NTtcclxuICB9XHJcblxyXG4gIC5hY2NlcHRlZC1pY29uIHtcclxuICAgIGNvbG9yOiAjMjJEMTY1ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMkQxNjU7XHJcbiAgfVxyXG5cclxuICAucmVqZWN0ZWQtaWNvbiB7XHJcbiAgICBjb2xvcjogI0YxMEEwQSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRjEwQTBBO1xyXG4gIH1cclxuXHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmMDtcclxuXHJcbiAgICAuc2VnLWJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlZy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXItdG9wOiBzb2xpZCAycHggI0ZFOUM0NTtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uc2VnLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4ubGVhdmUtdGltZWxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxlYXZlLWxpc3Qge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG5cclxuICAubGVhdmUtdHlwZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0ZFOUM0NTtcclxuICAgIGNvbG9yOiAjRkU5QzQ1O1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbiB7XHJcbiAgICBjb2xvcjogI0ZFOUM0NTtcclxuICB9XHJcblxyXG4gIC5lbmQge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgY29sb3I6ICNGRTlDNDU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXHJcbi5sZWF2ZS10aW1lbGluZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4ubGVhdmUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcbi5sZWF2ZS1jb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5sZWF2ZS1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5sZWF2ZS1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcbi5sZWZ0IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLmxlYXZlLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgbGVmdDogMzFweDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbi5sZWZ0OjphZnRlcixcclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcbmlvbi1mYWIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDk5OTtcclxufSIsIi5sZWF2ZS1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGVhdmUtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLnVzZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogODVweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZW1wbG95ZWUtZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGNkY2RjO1xuICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDE0OXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZW1wbG95ZWUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5lbXBsb3llZS1kZXNpZ24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWljb24tZWRpdC1pY29uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5lZGl0LWljb24ge1xuICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLmxlYXZlLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xuICB0b3A6IC0yMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IG5vbmU7XG59XG4ubGVhdmUtc2VnbWVudCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuc2VnLWJ0biB7XG4gIGJvcmRlcjogc29saWQgMXB4O1xufVxuLmxlYXZlLXNlZ21lbnQgLnNlZy1idG4ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5sZWF2ZS1zZWdtZW50IC5wZW5kaW5nLWljb24ge1xuICBjb2xvcjogI2ZlOWM0NSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZTljNDU7XG59XG4ubGVhdmUtc2VnbWVudCAuYWNjZXB0ZWQtaWNvbiB7XG4gIGNvbG9yOiAjMjJEMTY1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzIyRDE2NTtcbn1cbi5sZWF2ZS1zZWdtZW50IC5yZWplY3RlZC1pY29uIHtcbiAgY29sb3I6ICNGMTBBMEEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjRjEwQTBBO1xufVxuLmxlYXZlLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZjA7XG59XG4ubGVhdmUtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLnNlZy1idG4ge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNlZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggI0ZFOUM0NTtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5zZWctY29udGVudCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5sZWF2ZS10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubGVhdmUtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLmxlYXZlLWxpc3QgLmxlYXZlLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRkU5QzQ1O1xuICBjb2xvcjogI0ZFOUM0NTtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmxlYXZlLWxpc3QgLmN1c3RvbS1pY29uLWNhbGVuZGFyLWljb24ge1xuICBjb2xvcjogI0ZFOUM0NTtcbn1cbi5sZWF2ZS1saXN0IC5lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiAjRkU5QzQ1O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IGF1dG87XG59XG4ubGVhdmUtbGlzdCAuZGF0ZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5sZWF2ZS1saXN0IC5hY3Rpb24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cbi5sZWF2ZS10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmxlYXZlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXG4ubGVhdmUtY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5sZWF2ZS1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4ubGVhdmUtY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XG59XG5cbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cbi5sZWZ0IHtcbiAgbGVmdDogMDtcbn1cblxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXG4ubGVhdmUtdGltZWxpbmU6OmFmdGVyIHtcbiAgbGVmdDogMzFweDtcbn1cblxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXG4ubGVmdDo6YWZ0ZXIsXG4ucmlnaHQ6OmFmdGVyIHtcbiAgbGVmdDogMTVweDtcbn1cblxuLmZhYi1hZGQtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cblxuaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk7XG59Il19 */"

/***/ }),

/***/ "./src/app/leave-type/leave-type.page.ts":
/*!***********************************************!*\
  !*** ./src/app/leave-type/leave-type.page.ts ***!
  \***********************************************/
/*! exports provided: LeaveTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypePage", function() { return LeaveTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _view_leave_view_leave_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-leave/view-leave.page */ "./src/app/view-leave/view-leave.page.ts");
/* harmony import */ var _add_leave_type_add_leave_type_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-leave-type/add-leave-type.page */ "./src/app/add-leave-type/add-leave-type.page.ts");
/* harmony import */ var _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-employee/edit-employee.page */ "./src/app/edit-employee/edit-employee.page.ts");







var LeaveTypePage = /** @class */ (function () {
    function LeaveTypePage(navCntrl, modalController, alertController, util) {
        this.navCntrl = navCntrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.util = util;
        this.leave = "pending";
    }
    LeaveTypePage.prototype.ngOnInit = function () {
    };
    LeaveTypePage.prototype.addLeaveType = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_leave_type_add_leave_type_page__WEBPACK_IMPORTED_MODULE_5__["AddLeaveTypePage"],
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
    LeaveTypePage.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_6__["EditEmployeePage"],
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
    LeaveTypePage.prototype.editLeaveType = function () {
        this.navCntrl.navigateForward('/edit-leave-type');
    };
    LeaveTypePage.prototype.deleteLeaveType = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm Delete',
                            message: 'Do you want to delete this Leave',
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
                                        _this.successAlert();
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
    LeaveTypePage.prototype.successAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success',
                            message: '<strong> Leave Removed Successfully </strong>',
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
    LeaveTypePage.prototype.leaveDetail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _view_leave_view_leave_page__WEBPACK_IMPORTED_MODULE_4__["ViewLeavePage"],
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
    LeaveTypePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    LeaveTypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-type',
            template: __webpack_require__(/*! raw-loader!./leave-type.page.html */ "./node_modules/raw-loader/index.js!./src/app/leave-type/leave-type.page.html"),
            styles: [__webpack_require__(/*! ./leave-type.page.scss */ "./src/app/leave-type/leave-type.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], LeaveTypePage);
    return LeaveTypePage;
}());



/***/ })

}]);
//# sourceMappingURL=leave-type-leave-type-module-es5.js.map