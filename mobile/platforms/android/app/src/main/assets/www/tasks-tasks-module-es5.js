(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-tasks-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/tasks.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceservice.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Tasks</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"project-empty-div\">\r\n    <ion-item lines=\"none\" class=\"project-view\">\r\n      <span slot=\"start\" class=\"head-title\">Tasks</span> <span slot=\"end\"\r\n        class=\"custom-icon-projects-tasks-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <div class=\"project-content-div\">\r\n    <ion-segment class=\"project-segment\" [(ngModel)]=\"taskCategory\">\r\n      <ion-segment-button value=\"all\">\r\n        <div class=\"seg-btn\">\r\n          <span class=\"custom-icon-projects-tasks-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"completed\">\r\n        <div class=\"seg-btn\">\r\n          <span slot=\"start\" class=\"custom-icon-verified-icon selected-icon\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"pending\">\r\n        <div class=\"seg-btn\">\r\n          <span slot=\"start\" class=\"custom-icon-tasks-tick-icon selected-icon\">\r\n            <span class=\"path1\"></span>\r\n            <span class=\"path2\"></span>\r\n            <span class=\"path3\"></span>\r\n          </span>\r\n        </div>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div [ngSwitch]=\"taskCategory\">\r\n      <div *ngSwitchCase=\"'completed'\">\r\n        <h4 class=\"seg-title project-overview-list\">Completed Tasks</h4>\r\n        <div class=\"border project-overview-list\"></div>\r\n        <div *ngFor=\"let task of tasks\" class=\"seg-content\">\r\n          <ion-item detail class=\"project-item\" *ngIf=\"task.task_detail.task_progress == 100\">\r\n            <span slot=\"start\" class=\"custom-icon-verified-icon\">\r\n              <span class=\"path1\"></span>\r\n              <span class=\"path2\"></span>\r\n              <span class=\"path3\"></span>\r\n            </span>\r\n            <ion-label class=\"task-name\">\r\n              {{ task.task_detail.task_name }}\r\n            </ion-label>\r\n            <div class=\"summary-user-icon\">\r\n              <span class=\"custom-icon-user-placeholder-img\"></span>\r\n            </div>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n      <div *ngSwitchCase=\"'pending'\">\r\n        <h4 class=\"seg-title project-overview-list\">Pending Tasks</h4>\r\n        <div class=\"border project-overview-list\"></div>\r\n        <div *ngFor=\"let task of tasks\" class=\"seg-content\">\r\n          <ion-item detail class=\"project-item\" *ngIf=\"task.task_detail.task_progress != 100\">\r\n            <span slot=\"start\" class=\"custom-icon-tasks-tick-icon\">\r\n              <span class=\"path1\"></span>\r\n              <span class=\"path2\"></span>\r\n              <span class=\"path3\"></span>\r\n            </span>\r\n            <ion-label class=\"task-name\">\r\n              {{ task.task_detail.task_name }}\r\n            </ion-label>\r\n            <div class=\"summary-user-icon\">\r\n              <span class=\"custom-icon-user-placeholder-img\"></span>\r\n            </div>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'all'\">\r\n        <h4 class=\"seg-title project-overview-list\">All Tasks</h4>\r\n        <div class=\"border project-overview-list\"></div>\r\n        <div class=\"project-overview-timeline\">\r\n          <div class=\"project-overview-container left\">\r\n            <ion-list class=\"project-overview-list\">\r\n              <ion-list-header>\r\n                <div class=\"list-header\">Report</div>\r\n              </ion-list-header>\r\n              <ion-row class=\"report\">\r\n                <ion-col size=\"6\">\r\n                  <span class=\"open-tasks\">{{ opentasks }}&nbsp;open tasks,</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <span class=\"completed-tasks\">{{ completedtasks }}&nbsp;completed tasks</span>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"project-overview-container left\">\r\n            <ion-list class=\"project-overview-list\">\r\n              <ion-list-header>\r\n                <div class=\"list-header\">Summary</div>\r\n              </ion-list-header>\r\n              <ion-item detail class=\"project-item\" *ngFor=\"let task of tasks\">\r\n                <span *ngIf=\"task.task_detail.task_progress != 100\" slot=\"start\" class=\"custom-icon-tasks-tick-icon\">\r\n                  <span class=\"path1\"></span>\r\n                  <span class=\"path2\"></span>\r\n                  <span class=\"path3\"></span>\r\n                </span>\r\n                <span *ngIf=\"task.task_detail.task_progress == 100\" slot=\"start\" class=\"custom-icon-verified-icon\">\r\n                  <span class=\"path1\"></span>\r\n                  <span class=\"path2\"></span>\r\n                  <span class=\"path3\"></span>\r\n                </span>\r\n                <ion-label class=\"task-name\">\r\n                  {{ task.task_detail.task_name }}\r\n                </ion-label>\r\n                <div class=\"summary-user-icon\">\r\n                  <span class=\"custom-icon-user-placeholder-img\"></span>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button class=\"fab-add-btn\" (click)=\"add()\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tasks/tasks-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tasks/tasks-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TasksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageRoutingModule", function() { return TasksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tasks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.page */ "./src/app/tasks/tasks.page.ts");




var routes = [
    {
        path: '',
        component: _tasks_page__WEBPACK_IMPORTED_MODULE_3__["TasksPage"]
    }
];
var TasksPageRoutingModule = /** @class */ (function () {
    function TasksPageRoutingModule() {
    }
    TasksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TasksPageRoutingModule);
    return TasksPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.module.ts":
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.module.ts ***!
  \***************************************/
/*! exports provided: TasksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageModule", function() { return TasksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks-routing.module */ "./src/app/tasks/tasks-routing.module.ts");
/* harmony import */ var _tasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks.page */ "./src/app/tasks/tasks.page.ts");







var TasksPageModule = /** @class */ (function () {
    function TasksPageModule() {
    }
    TasksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__["TasksPageRoutingModule"]
            ],
            declarations: [_tasks_page__WEBPACK_IMPORTED_MODULE_6__["TasksPage"]]
        })
    ], TasksPageModule);
    return TasksPageModule;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.page.scss":
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.project-empty-div {\n  background: #0A15D5;\n  height: 140px;\n}\n\n.project-empty-div .custom-icon-projects-tasks-icon {\n  font-size: 35px;\n  color: white;\n}\n\n.project-segment {\n  border-radius: 50px;\n  margin: auto;\n  width: calc(100% - 10%);\n  top: -20px;\n  position: relative;\n  margin-bottom: 20px;\n  background: white;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n  --background-checked: none;\n  --indicator-color-checked: none;\n}\n\n.project-segment .segment-button-checked .seg-btn {\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n  background: #fe9c45;\n  border-radius: 50px;\n  padding-top: 10px;\n}\n\n.project-segment .segment-button-checked .selected-icon {\n  color: white !important;\n}\n\n.project-segment .segment-button-checked .custom-icon-verified-icon,\n.project-segment .segment-button-checked .custom-icon-tasks-tick-icon {\n  margin-left: 10px;\n}\n\n.project-segment ion-segment-button {\n  margin: 10px;\n  --border-color: #fff0;\n}\n\n.project-segment ion-segment-button .custom-icon-projects-tasks-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.project-segment ion-segment-button .custom-icon-verified-icon,\n.project-segment ion-segment-button .custom-icon-tasks-tick-icon {\n  font-size: 30px;\n}\n\n.project-overview-list {\n  margin-left: 50px;\n}\n\n.project-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px 8px 4px 0px;\n}\n\n.seg-title {\n  font-size: 20px;\n  font-family: \"Poppins-Medium\";\n}\n\n.border {\n  border-top: solid 2px #FE9C45;\n  width: 80px;\n}\n\n.seg-content {\n  padding: 0 20px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates .custom-icon-project-tasks-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.open-tasks::before,\n.completed-tasks::before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 13px;\n  z-index: 1;\n  left: -10px;\n}\n\n.open-tasks,\n.completed-tasks {\n  font-size: 12px;\n  margin: auto;\n}\n\n.completed-tasks::before {\n  background: #22D165;\n}\n\n.open-tasks::before {\n  background: #FE9C45;\n}\n\n.report {\n  margin-left: 10px;\n}\n\n.summary-user-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 5px;\n  font-size: 15px;\n}\n\n.custom-icon-tasks-tick-icon {\n  font-size: 25px;\n  font-weight: bold;\n  margin-right: 15px;\n}\n\n.custom-icon-tasks-tick-icon span {\n  font-family: \"newhrms\";\n}\n\n.custom-icon-tasks-tick-icon .path1::before {\n  color: #adabab !important;\n}\n\n.custom-icon-tasks-tick-icon .path2::before {\n  color: #fff !important;\n}\n\n.custom-icon-verified-icon {\n  font-size: 25px;\n  font-weight: bold;\n  position: unset;\n  margin-left: unset;\n  margin-right: 15px;\n}\n\n.custom-icon-verified-icon span {\n  font-family: \"newhrms\";\n}\n\n.project-overview-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.project-overview-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.project-overview-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.project-overview-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 24px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.ios .project-overview-container::after {\n  top: 12px !important;\n}\n\n.ios .project-div {\n  bottom: 0px !important;\n}\n\n.ios .owner-icon {\n  margin-bottom: 7px;\n}\n\n.project-overview-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.project-overview-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.project-overview-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvRDpcXHNpbmFyXFxhcHAyL3NyY1xcYXBwXFx0YXNrc1xcdGFza3MucGFnZS5zY3NzIiwic3JjL2FwcC90YXNrcy90YXNrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxnQkFBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NSOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FDQUo7O0FER1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNEWjs7QURJUTtFQUNJLHVCQUFBO0FDRlo7O0FES1E7O0VBRUksaUJBQUE7QUNIWjs7QURPSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ0xSOztBRE9RO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNMWjs7QURRUTs7RUFFSSxlQUFBO0FDTlo7O0FEWUE7RUFDSSxpQkFBQTtBQ1RKOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ1RKOztBRGFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FDVko7O0FEYUE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUNWSjs7QURhQTtFQUNJLGVBQUE7QUNWSjs7QURjQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNYSjs7QURjQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0E7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNYSjs7QURjQTs7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBQ1hKOztBRGNBO0VBQ0ksbUJBQUE7QUNYSjs7QURjQTtFQUNJLG1CQUFBO0FDWEo7O0FEY0E7RUFDSSxpQkFBQTtBQ1hKOztBRGVJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDWlI7O0FEZ0JBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNiSjs7QURlSTtFQUNJLHNCQUFBO0FDYlI7O0FEZ0JJO0VBQ0kseUJBQUE7QUNkUjs7QURpQkk7RUFDSSxzQkFBQTtBQ2ZSOztBRG1CQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDaEJKOztBRGtCSTtFQUNJLHNCQUFBO0FDaEJSOztBRG9CQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDakJKOztBRG9CQSw2Q0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ2pCSjs7QURvQkEsNkJBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDakJKOztBRG9CQSxnQ0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDakJKOztBRHFCSTtFQUNJLG9CQUFBO0FDbEJSOztBRHFCSTtFQUNJLHNCQUFBO0FDbkJSOztBRHNCSTtFQUNJLGtCQUFBO0FDcEJSOztBRHdCQTtFQUNJLHlCQUFBO0FDckJKOztBRHdCQTtFQUNJLHlCQUFBO0FDckJKOztBRHdCQSxvQ0FBQTs7QUFDQTtFQUNJLE9BQUE7QUNyQko7O0FEd0JBLG1DQUFBOztBQUNBO0VBQ0ksVUFBQTtBQ3JCSjs7QUR3QkEsK0NBQUE7O0FBQ0E7O0VBRUksVUFBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWNvbnRlbnQtZGl2IHtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvamVjdC1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLXByb2plY3RzLXRhc2tzLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LXNlZ21lbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XHJcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiBub25lO1xyXG5cclxuICAgIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgICAuc2VnLWJ0biB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmU5YzQ1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3RlZC1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbixcclxuICAgICAgICAuY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmMDtcclxuXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLXByb2plY3RzLXRhc2tzLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jdXN0b20taWNvbi12ZXJpZmllZC1pY29uLFxyXG4gICAgICAgIC5jdXN0b20taWNvbi10YXNrcy10aWNrLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4IDRweCAwcHg7XHJcblxyXG59XHJcblxyXG4uc2VnLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNGRTlDNDU7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLnNlZy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLXByb2plY3QtdGFza3MtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vcGVuLXRhc2tzOjpiZWZvcmUsXHJcbi5jb21wbGV0ZWQtdGFza3M6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbi5vcGVuLXRhc2tzLFxyXG4uY29tcGxldGVkLXRhc2tzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbXBsZXRlZC10YXNrczo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMkQxNjU7XHJcbn1cclxuXHJcbi5vcGVuLXRhc2tzOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogI0ZFOUM0NTtcclxufVxyXG5cclxuLnJlcG9ydCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnN1bW1hcnktdXNlci1pY29uIHtcclxuICAgIC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDJEMkQyO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi10YXNrcy10aWNrLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibmV3aHJtc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXRoMTo6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogI2FkYWJhYiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXRoMjo6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi12ZXJpZmllZC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIjtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4ucHJvamVjdC1vdmVydmlldy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLnByb2plY3Qtb3ZlcnZpZXctY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmlvcyB7XHJcbiAgICAucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6OmFmdGVyIHtcclxuICAgICAgICB0b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdC1kaXYge1xyXG4gICAgICAgIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm93bmVyLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2plY3Qtb3ZlcnZpZXctY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4ubGVmdDo6YWZ0ZXIsXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTVweDtcclxufSIsIi5wcm9qZWN0LWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTQwcHg7XG59XG4ucHJvamVjdC1lbXB0eS1kaXYgLmN1c3RvbS1pY29uLXByb2plY3RzLXRhc2tzLWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3Qtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XG4gIHRvcDogLTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogbm9uZTtcbn1cbi5wcm9qZWN0LXNlZ21lbnQgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLnNlZy1idG4ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI2ZlOWM0NTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucHJvamVjdC1zZWdtZW50IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5zZWxlY3RlZC1pY29uIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucHJvamVjdC1zZWdtZW50IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5jdXN0b20taWNvbi12ZXJpZmllZC1pY29uLFxuLnByb2plY3Qtc2VnbWVudCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucHJvamVjdC1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmYwO1xufVxuLnByb2plY3Qtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLmN1c3RvbS1pY29uLXByb2plY3RzLXRhc2tzLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5wcm9qZWN0LXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIC5jdXN0b20taWNvbi12ZXJpZmllZC1pY29uLFxuLnByb2plY3Qtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLmN1c3RvbS1pY29uLXRhc2tzLXRpY2staWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBwYWRkaW5nOiA0cHggOHB4IDRweCAwcHg7XG59XG5cbi5zZWctdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggI0ZFOUM0NTtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5zZWctY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tcHJvamVjdC10YXNrcy1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5vcGVuLXRhc2tzOjpiZWZvcmUsXG4uY29tcGxldGVkLXRhc2tzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHRvcDogMTNweDtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5vcGVuLXRhc2tzLFxuLmNvbXBsZXRlZC10YXNrcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29tcGxldGVkLXRhc2tzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMjJEMTY1O1xufVxuXG4ub3Blbi10YXNrczo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cblxuLnJlcG9ydCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc3VtbWFyeS11c2VyLWljb24gLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogI0QyRDJEMjtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jdXN0b20taWNvbi10YXNrcy10aWNrLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XG59XG4uY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIC5wYXRoMTo6YmVmb3JlIHtcbiAgY29sb3I6ICNhZGFiYWIgIWltcG9ydGFudDtcbn1cbi5jdXN0b20taWNvbi10YXNrcy10aWNrLWljb24gLnBhdGgyOjpiZWZvcmUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwibmV3aHJtc1wiO1xufVxuXG4ucHJvamVjdC1vdmVydmlldy10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4ucHJvamVjdC1vdmVydmlldy10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLnByb2plY3Qtb3ZlcnZpZXctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uaW9zIC5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjo6YWZ0ZXIge1xuICB0b3A6IDEycHggIWltcG9ydGFudDtcbn1cbi5pb3MgLnByb2plY3QtZGl2IHtcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5pb3MgLm93bmVyLWljb24ge1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XG59XG5cbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmU6OmFmdGVyIHtcbiAgbGVmdDogMzFweDtcbn1cblxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXG4ubGVmdDo6YWZ0ZXIsXG4ucmlnaHQ6OmFmdGVyIHtcbiAgbGVmdDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tasks/tasks.page.ts":
/*!*************************************!*\
  !*** ./src/app/tasks/tasks.page.ts ***!
  \*************************************/
/*! exports provided: TasksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPage", function() { return TasksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_task_add_task_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-task/add-task.page */ "./src/app/add-task/add-task.page.ts");






var TasksPage = /** @class */ (function () {
    function TasksPage(dataService, referenceservice, modalController) {
        this.dataService = dataService;
        this.referenceservice = referenceservice;
        this.modalController = modalController;
        this.taskCategory = 'all';
    }
    TasksPage.prototype.ngOnInit = function () {
        this.tasks = this.dataService.project_list[0].tasks;
        this.opentasks = this.dataService.project_list[0].tasks_open.length;
        this.completedtasks = this.dataService.project_list[0].tasks_completed.length;
    };
    TasksPage.prototype.add = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_task_add_task_page__WEBPACK_IMPORTED_MODULE_5__["AddTaskPage"],
                            cssClass: 'custom-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        this.referenceservice.isModal = "blurPage";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss().then(function (data) {
                                console.log(data);
                                _this.referenceservice.isModal = "";
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TasksPage.ctorParameters = function () { return [
        { type: _json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    TasksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! raw-loader!./tasks.page.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.page.html"),
            styles: [__webpack_require__(/*! ./tasks.page.scss */ "./src/app/tasks/tasks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], TasksPage);
    return TasksPage;
}());



/***/ })

}]);
//# sourceMappingURL=tasks-tasks-module-es5.js.map