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

module.exports = ".leave-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.leave-empty-div {\n  background: #0A15D5;\n  height: 300px;\n}\n\n.user-icon {\n  font-size: 85px;\n  margin: 10px;\n}\n\n.employee-div {\n  text-align: center;\n  border: solid 1px #dcdcdc;\n  border-radius: 80px;\n  background: #fff;\n  height: 149px;\n  width: 150px;\n  margin: 0 auto;\n}\n\n.employee-name {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n  margin-top: 8px;\n}\n\n.employee-design {\n  font-size: 16px;\n  text-align: center;\n  color: white;\n}\n\n.custom-icon-edit-icon {\n  font-size: 35px;\n  color: white;\n  font-weight: 500;\n}\n\n.edit-icon {\n  background: #FE9C45;\n  border-radius: 20px;\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  margin-left: 100px;\n}\n\n.leave-segment {\n  border-radius: 50px;\n  margin: auto;\n  width: calc(100% - 10%);\n  top: -20px;\n  margin-bottom: 20px;\n  position: relative;\n  background: white;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n  --background-checked: none;\n  --indicator-color-checked: none;\n}\n\n.leave-segment .segment-button-checked .seg-btn {\n  border: solid 1px;\n}\n\n.leave-segment .seg-btn {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto;\n  border-radius: 50px;\n}\n\n.leave-segment .pending-icon {\n  color: #fe9c45 !important;\n  border-color: #fe9c45;\n}\n\n.leave-segment .accepted-icon {\n  color: #22D165 !important;\n  border-color: #22D165;\n}\n\n.leave-segment .rejected-icon {\n  color: #F10A0A !important;\n  border-color: #F10A0A;\n}\n\n.leave-segment ion-segment-button {\n  margin: 10px;\n  --border-color: #fff0;\n}\n\n.leave-segment ion-segment-button .seg-btn {\n  font-size: 45px;\n  color: black;\n}\n\n.seg-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.border {\n  border-top: solid 2px #FE9C45;\n  width: 60px;\n  margin-bottom: 25px;\n}\n\n.seg-content {\n  padding-right: 20px;\n}\n\n.leave-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.leave-list {\n  margin-left: 50px;\n}\n\n.leave-list .leave-type {\n  border-radius: 50px;\n  border: solid 1px #FE9C45;\n  color: #FE9C45;\n  padding: 2px 10px;\n  font-size: 14px !important;\n  white-space: nowrap;\n}\n\n.leave-list .custom-icon-calendar-icon {\n  color: #FE9C45;\n}\n\n.leave-list .end {\n  text-align: end;\n  color: #FE9C45;\n  white-space: nowrap;\n  margin: auto;\n}\n\n.leave-list .date {\n  color: black;\n}\n\n.leave-list .action {\n  font-size: 12px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.leave-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.leave-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.leave-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 15px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.leave-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.leave-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.leave-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\nion-fab {\n  position: fixed !important;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmUtdHlwZS9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXGxlYXZlLXR5cGVcXGxlYXZlLXR5cGUucGFnZS5zY3NzIiwic3JjL2FwcC9sZWF2ZS10eXBlL2xlYXZlLXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFQTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDekVKOztBRDRFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQ3pFRjs7QUQ0RUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ3pFRjs7QUQ0RUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ3pFRjs7QUQ0RUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDekVGOztBRDRFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUN6RUY7O0FENEVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3pFRjs7QUQ0RUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDekVGOztBRDRFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBQ3pFSjs7QUQ0RUk7RUFDRSxpQkFBQTtBQzFFTjs7QUQrRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQzdFSjs7QURnRkU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDOUVKOztBRGlGRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUMvRUo7O0FEa0ZFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQ2hGSjs7QURtRkU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNqRko7O0FEbUZJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNqRk47O0FEc0ZBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDbkZGOztBRHNGQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDbkZGOztBRHNGQTtFQUNFLG1CQUFBO0FDbkZGOztBRHVGQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDcEZGOztBRHVGQTtFQUNFLGlCQUFBO0FDcEZGOztBRHNGRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FDcEZKOztBRHVGRTtFQUNFLGNBQUE7QUNyRko7O0FEd0ZFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUN0Rko7O0FEeUZFO0VBQ0UsWUFBQTtBQ3ZGSjs7QUQwRkU7RUFDRSxlQUFBO0FDeEZKOztBRDRGQSw2Q0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ3pGRjs7QUQ0RkEsNkJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDekZGOztBRDRGQSxnQ0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDekZGOztBRDRGQTtFQUNFLHlCQUFBO0FDekZGOztBRDRGQTtFQUNFLHlCQUFBO0FDekZGOztBRDRGQSxvQ0FBQTs7QUFDQTtFQUNFLE9BQUE7QUN6RkY7O0FENEZBLG1DQUFBOztBQUNBO0VBQ0UsVUFBQTtBQ3pGRjs7QUQ0RkEsK0NBQUE7O0FBQ0E7O0VBRUUsVUFBQTtBQ3pGRjs7QUQ0RkE7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FDekZGOztBRDRGQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQ3pGRiIsImZpbGUiOiJzcmMvYXBwL2xlYXZlLXR5cGUvbGVhdmUtdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYmx1ZXMtbmF2IHtcclxuLy8gICAtLWJhY2tncm91bmQ6IHJnYig2OCwgMTg3LCAyMzYpO1xyXG4vLyB9XHJcblxyXG4vLyBpb24taXRlbSB7XHJcbi8vICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuLy8gfVxyXG4vLyAubmF2LWNvbnRlbnQge1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyB9XHJcblxyXG4vLyAuaGVhZGVyLW1kOmFmdGVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LXRpdGxlIHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuLy8gICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuLy8gICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5kYXlzIHtcclxuLy8gICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4vLyAgIGNvbG9yOiAjOGU4ZTkzICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWRheSB7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDI2cHg7XHJcbi8vICAgcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuLy8gICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xyXG4vLyAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAubGVhdmUtc3RhdHVzIHtcclxuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuLy8gICBsaW5lLWhlaWdodDogMThweDtcclxuLy8gICBtaW4td2lkdGg6IDc2cHg7XHJcbi8vICAgcGFkZGluZzogMCAxMHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuLy8gICBjb2xvcjogI2ZmZjtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5sZWF2ZS1yZWplY3Qtc3RhdHVzIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwZDBkICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWxpc3Qge1xyXG4vLyAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4vLyAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vIH1cclxuXHJcbi8vIC5sZWF2ZS1hY2NlcHQtc3RhdHVzIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkOTY0ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5iYWNrZ3JvdW5kLWNvbnRlbnQge1xyXG4vLyAgIC0tYmFja2dyb3VuZDogI2UyZTJlMiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFbXBsb3llZSBMZWF2ZSBSZXF1ZXN0ID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLmxlYXZlLWNvbnRlbnQtZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxlYXZlLWVtcHR5LWRpdiB7XHJcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICBmb250LXNpemU6IDg1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uZW1wbG95ZWUtZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2RjZGNkYztcclxuICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxNDlweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5lbXBsb3llZS1uYW1lIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5lbXBsb3llZS1kZXNpZ24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tZWRpdC1pY29uIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5lZGl0LWljb24ge1xyXG4gIGJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuLmxlYXZlLXNlZ21lbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XHJcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiBub25lO1xyXG5cclxuICAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICAuc2VnLWJ0biB7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5zZWctYnRuIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnBlbmRpbmctaWNvbiB7XHJcbiAgICBjb2xvcjogI2ZlOWM0NSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmU5YzQ1O1xyXG4gIH1cclxuXHJcbiAgLmFjY2VwdGVkLWljb24ge1xyXG4gICAgY29sb3I6ICMyMkQxNjUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzIyRDE2NTtcclxuICB9XHJcblxyXG4gIC5yZWplY3RlZC1pY29uIHtcclxuICAgIGNvbG9yOiAjRjEwQTBBICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNGMTBBMEE7XHJcbiAgfVxyXG5cclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmYwO1xyXG5cclxuICAgIC5zZWctYnRuIHtcclxuICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VnLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjRkU5QzQ1O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5zZWctY29udGVudCB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuXHJcbi5sZWF2ZS10aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubGVhdmUtbGlzdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG4gIC5sZWF2ZS10eXBlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRkU5QzQ1O1xyXG4gICAgY29sb3I6ICNGRTlDNDU7XHJcbiAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20taWNvbi1jYWxlbmRhci1pY29uIHtcclxuICAgIGNvbG9yOiAjRkU5QzQ1O1xyXG4gIH1cclxuXHJcbiAgLmVuZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBjb2xvcjogI0ZFOUM0NTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZGF0ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLmxlYXZlLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5sZWF2ZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmxlYXZlLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmxlYXZlLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcclxufVxyXG5cclxuLmxlYXZlLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cclxuLmxlZnQge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4ubGVhdmUtdGltZWxpbmU6OmFmdGVyIHtcclxuICBsZWZ0OiAzMXB4O1xyXG59XHJcblxyXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuLmxlZnQ6OmFmdGVyLFxyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZmFiLWFkZC1idG4ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcclxufVxyXG5cclxuaW9uLWZhYiB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG59IiwiLmxlYXZlLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sZWF2ZS1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4udXNlci1pY29uIHtcbiAgZm9udC1zaXplOiA4NXB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5lbXBsb3llZS1kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7XG4gIGJvcmRlci1yYWRpdXM6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTQ5cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5lbXBsb3llZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmVtcGxveWVlLWRlc2lnbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20taWNvbi1lZGl0LWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNGRTlDNDU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4ubGVhdmUtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XG4gIHRvcDogLTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogbm9uZTtcbn1cbi5sZWF2ZS1zZWdtZW50IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5zZWctYnRuIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XG59XG4ubGVhdmUtc2VnbWVudCAuc2VnLWJ0biB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLmxlYXZlLXNlZ21lbnQgLnBlbmRpbmctaWNvbiB7XG4gIGNvbG9yOiAjZmU5YzQ1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZlOWM0NTtcbn1cbi5sZWF2ZS1zZWdtZW50IC5hY2NlcHRlZC1pY29uIHtcbiAgY29sb3I6ICMyMkQxNjUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjJEMTY1O1xufVxuLmxlYXZlLXNlZ21lbnQgLnJlamVjdGVkLWljb24ge1xuICBjb2xvcjogI0YxMEEwQSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNGMTBBMEE7XG59XG4ubGVhdmUtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmMDtcbn1cbi5sZWF2ZS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiAuc2VnLWJ0biB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2VnLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjRkU5QzQ1O1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnNlZy1jb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmxlYXZlLXRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sZWF2ZS1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG4ubGVhdmUtbGlzdCAubGVhdmUtdHlwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNGRTlDNDU7XG4gIGNvbG9yOiAjRkU5QzQ1O1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubGVhdmUtbGlzdCAuY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbiB7XG4gIGNvbG9yOiAjRkU5QzQ1O1xufVxuLmxlYXZlLWxpc3QgLmVuZCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6ICNGRTlDNDU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5sZWF2ZS1saXN0IC5kYXRlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmxlYXZlLWxpc3QgLmFjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLmxlYXZlLXRpbWVsaW5lOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXG4ubGVhdmUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5sZWF2ZS1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmxlYXZlLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XG59XG5cbi5sZWF2ZS1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi5sZWF2ZS10aW1lbGluZTo6YWZ0ZXIge1xuICBsZWZ0OiAzMXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlcixcbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uZmFiLWFkZC1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xufVxuXG5pb24tZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbn0iXX0= */"

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