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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tasks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.page */ "./src/app/tasks/tasks.page.ts");




const routes = [
    {
        path: '',
        component: _tasks_page__WEBPACK_IMPORTED_MODULE_3__["TasksPage"]
    }
];
let TasksPageRoutingModule = class TasksPageRoutingModule {
};
TasksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TasksPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks-routing.module */ "./src/app/tasks/tasks-routing.module.ts");
/* harmony import */ var _tasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks.page */ "./src/app/tasks/tasks.page.ts");







let TasksPageModule = class TasksPageModule {
};
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



/***/ }),

/***/ "./src/app/tasks/tasks.page.scss":
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.project-empty-div {\n  background: #0A15D5;\n  height: 140px;\n}\n\n.project-empty-div .custom-icon-projects-tasks-icon {\n  font-size: 35px;\n  color: white;\n}\n\n.project-segment {\n  border-radius: 50px;\n  margin: auto;\n  width: calc(100% - 10%);\n  top: -20px;\n  position: relative;\n  margin-bottom: 20px;\n  background: white;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n  --background-checked: none;\n  --indicator-color-checked: none;\n}\n\n.project-segment .segment-button-checked .seg-btn {\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n  background: #fe9c45;\n  border-radius: 50px;\n  padding-top: 10px;\n}\n\n.project-segment .segment-button-checked .selected-icon {\n  color: white !important;\n}\n\n.project-segment .segment-button-checked .custom-icon-verified-icon,\n.project-segment .segment-button-checked .custom-icon-tasks-tick-icon {\n  margin-left: 10px;\n}\n\n.project-segment ion-segment-button {\n  margin: 10px;\n  --border-color: #fff0;\n}\n\n.project-segment ion-segment-button .custom-icon-projects-tasks-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.project-segment ion-segment-button .custom-icon-verified-icon,\n.project-segment ion-segment-button .custom-icon-tasks-tick-icon {\n  font-size: 30px;\n}\n\n.project-overview-list {\n  margin-left: 50px;\n}\n\n.project-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px 8px 4px 0px;\n}\n\n.seg-title {\n  font-size: 20px;\n  font-family: \"Poppins-Medium\";\n}\n\n.border {\n  border-top: solid 2px #FE9C45;\n  width: 80px;\n}\n\n.seg-content {\n  padding: 0 20px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates .custom-icon-project-tasks-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.open-tasks::before,\n.completed-tasks::before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 13px;\n  z-index: 1;\n  left: -10px;\n}\n\n.open-tasks,\n.completed-tasks {\n  font-size: 12px;\n  margin: auto;\n}\n\n.completed-tasks::before {\n  background: #22D165;\n}\n\n.open-tasks::before {\n  background: #FE9C45;\n}\n\n.report {\n  margin-left: 10px;\n}\n\n.summary-user-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 5px;\n  font-size: 15px;\n}\n\n.custom-icon-tasks-tick-icon {\n  font-size: 25px;\n  font-weight: bold;\n  margin-right: 15px;\n}\n\n.custom-icon-tasks-tick-icon span {\n  font-family: \"newhrms\";\n}\n\n.custom-icon-tasks-tick-icon .path1::before {\n  color: #adabab !important;\n}\n\n.custom-icon-tasks-tick-icon .path2::before {\n  color: #fff !important;\n}\n\n.custom-icon-verified-icon {\n  font-size: 25px;\n  font-weight: bold;\n  position: unset;\n  margin-left: unset;\n  margin-right: 15px;\n}\n\n.custom-icon-verified-icon span {\n  font-family: \"newhrms\";\n}\n\n.project-overview-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.project-overview-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.project-overview-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.project-overview-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 24px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.ios .project-overview-container::after {\n  top: 12px !important;\n}\n\n.ios .project-div {\n  bottom: 0px !important;\n}\n\n.ios .owner-icon {\n  margin-bottom: 7px;\n}\n\n.project-overview-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.project-overview-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.project-overview-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcdGFza3NcXHRhc2tzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFza3MvdGFza3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZ0JBQUE7RUFDQyxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDUjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBQ0FKOztBREdRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRFo7O0FESVE7RUFDSSx1QkFBQTtBQ0ZaOztBREtROztFQUVJLGlCQUFBO0FDSFo7O0FET0k7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNMUjs7QURPUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDTFo7O0FEUVE7O0VBRUksZUFBQTtBQ05aOztBRFlBO0VBQ0ksaUJBQUE7QUNUSjs7QURZQTtFQUNJLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNUSjs7QURhQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQ1ZKOztBRGFBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FDVko7O0FEYUE7RUFDSSxlQUFBO0FDVko7O0FEY0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ1hKOztBRGNBOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDWEo7O0FEY0E7O0VBRUksZUFBQTtFQUNBLFlBQUE7QUNYSjs7QURjQTtFQUNJLG1CQUFBO0FDWEo7O0FEY0E7RUFDSSxtQkFBQTtBQ1hKOztBRGNBO0VBQ0ksaUJBQUE7QUNYSjs7QURlSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1pSOztBRGdCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDYko7O0FEZUk7RUFDSSxzQkFBQTtBQ2JSOztBRGdCSTtFQUNJLHlCQUFBO0FDZFI7O0FEaUJJO0VBQ0ksc0JBQUE7QUNmUjs7QURtQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2hCSjs7QURrQkk7RUFDSSxzQkFBQTtBQ2hCUjs7QURvQkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2pCSjs7QURvQkEsNkNBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNqQko7O0FEb0JBLDZCQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ2pCSjs7QURvQkEsZ0NBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2pCSjs7QURxQkk7RUFDSSxvQkFBQTtBQ2xCUjs7QURxQkk7RUFDSSxzQkFBQTtBQ25CUjs7QURzQkk7RUFDSSxrQkFBQTtBQ3BCUjs7QUR3QkE7RUFDSSx5QkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSx5QkFBQTtBQ3JCSjs7QUR3QkEsb0NBQUE7O0FBQ0E7RUFDSSxPQUFBO0FDckJKOztBRHdCQSxtQ0FBQTs7QUFDQTtFQUNJLFVBQUE7QUNyQko7O0FEd0JBLCtDQUFBOztBQUNBOztFQUVJLFVBQUE7QUNyQkoiLCJmaWxlIjoic3JjL2FwcC90YXNrcy90YXNrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1jb250ZW50LWRpdiB7XHJcbiAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2plY3QtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG5cclxuICAgIC5jdXN0b20taWNvbi1wcm9qZWN0cy10YXNrcy1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1zZWdtZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogbm9uZTtcclxuXHJcbiAgICAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICAgICAgLnNlZy1idG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlOWM0NTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0ZWQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLXZlcmlmaWVkLWljb24sXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLXRhc2tzLXRpY2staWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2ZmZjA7XHJcblxyXG4gICAgICAgIC5jdXN0b20taWNvbi1wcm9qZWN0cy10YXNrcy1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbixcclxuICAgICAgICAuY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XHJcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgcGFkZGluZzogNHB4IDhweCA0cHggMHB4O1xyXG5cclxufVxyXG5cclxuLnNlZy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCAjRkU5QzQ1O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5zZWctY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1wcm9qZWN0LXRhc2tzLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub3Blbi10YXNrczo6YmVmb3JlLFxyXG4uY29tcGxldGVkLXRhc2tzOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4ub3Blbi10YXNrcyxcclxuLmNvbXBsZXRlZC10YXNrcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQtdGFza3M6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjJEMTY1O1xyXG59XHJcblxyXG4ub3Blbi10YXNrczo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcbi5yZXBvcnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXVzZXItaWNvbiB7XHJcbiAgICAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0QyRDJEMjtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIjtcclxuICAgIH1cclxuXHJcbiAgICAucGF0aDE6OmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6ICNhZGFiYWIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGF0aDI6OmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5pb3Mge1xyXG4gICAgLnByb2plY3Qtb3ZlcnZpZXctY29udGFpbmVyOjphZnRlciB7XHJcbiAgICAgICAgdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtZGl2IHtcclxuICAgICAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5vd25lci1pY29uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cclxuLmxlZnQge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG59XHJcblxyXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuLmxlZnQ6OmFmdGVyLFxyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbn0iLCIucHJvamVjdC1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuLnByb2plY3QtZW1wdHktZGl2IC5jdXN0b20taWNvbi1wcm9qZWN0cy10YXNrcy1pY29uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xuICB0b3A6IC0yMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IG5vbmU7XG59XG4ucHJvamVjdC1zZWdtZW50IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5zZWctYnRuIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZTljNDU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnByb2plY3Qtc2VnbWVudCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuc2VsZWN0ZWQtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnByb2plY3Qtc2VnbWVudCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbixcbi5wcm9qZWN0LXNlZ21lbnQgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLmN1c3RvbS1pY29uLXRhc2tzLXRpY2staWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnByb2plY3Qtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmMDtcbn1cbi5wcm9qZWN0LXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIC5jdXN0b20taWNvbi1wcm9qZWN0cy10YXNrcy1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4ucHJvamVjdC1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiAuY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbixcbi5wcm9qZWN0LXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIC5jdXN0b20taWNvbi10YXNrcy10aWNrLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3Qge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgcGFkZGluZzogNHB4IDhweCA0cHggMHB4O1xufVxuXG4uc2VnLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNGRTlDNDU7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uc2VnLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLXByb2plY3QtdGFza3MtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ub3Blbi10YXNrczo6YmVmb3JlLFxuLmNvbXBsZXRlZC10YXNrczo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB0b3A6IDEzcHg7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4ub3Blbi10YXNrcyxcbi5jb21wbGV0ZWQtdGFza3Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbXBsZXRlZC10YXNrczo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzIyRDE2NTtcbn1cblxuLm9wZW4tdGFza3M6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG5cbi5yZXBvcnQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnN1bW1hcnktdXNlci1pY29uIC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNEMkQyRDI7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmN1c3RvbS1pY29uLXRhc2tzLXRpY2staWNvbiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwibmV3aHJtc1wiO1xufVxuLmN1c3RvbS1pY29uLXRhc2tzLXRpY2staWNvbiAucGF0aDE6OmJlZm9yZSB7XG4gIGNvbG9yOiAjYWRhYmFiICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIC5wYXRoMjo6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pY29uLXZlcmlmaWVkLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogdW5zZXQ7XG4gIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmN1c3RvbS1pY29uLXZlcmlmaWVkLWljb24gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIjtcbn1cblxuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmlvcyAucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6OmFmdGVyIHtcbiAgdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uaW9zIC5wcm9qZWN0LWRpdiB7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW9zIC5vd25lci1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi5wcm9qZWN0LW92ZXJ2aWV3LXRpbWVsaW5lOjphZnRlciB7XG4gIGxlZnQ6IDMxcHg7XG59XG5cbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuLmxlZnQ6OmFmdGVyLFxuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IDE1cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_task_add_task_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-task/add-task.page */ "./src/app/add-task/add-task.page.ts");






let TasksPage = class TasksPage {
    constructor(dataService, referenceservice, modalController) {
        this.dataService = dataService;
        this.referenceservice = referenceservice;
        this.modalController = modalController;
        this.taskCategory = 'all';
    }
    ngOnInit() {
        this.tasks = this.dataService.project_list[0].tasks;
        this.opentasks = this.dataService.project_list[0].tasks_open.length;
        this.completedtasks = this.dataService.project_list[0].tasks_completed.length;
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_task_add_task_page__WEBPACK_IMPORTED_MODULE_5__["AddTaskPage"],
                cssClass: 'custom-modal',
            });
            this.referenceservice.isModal = "blurPage";
            yield modal.present();
            yield modal.onWillDismiss().then(data => {
                console.log(data);
                this.referenceservice.isModal = "";
            });
        });
    }
};
TasksPage.ctorParameters = () => [
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
TasksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: __webpack_require__(/*! raw-loader!./tasks.page.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.page.html"),
        styles: [__webpack_require__(/*! ./tasks.page.scss */ "./src/app/tasks/tasks.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], TasksPage);



/***/ })

}]);
//# sourceMappingURL=tasks-tasks-module-es2015.js.map