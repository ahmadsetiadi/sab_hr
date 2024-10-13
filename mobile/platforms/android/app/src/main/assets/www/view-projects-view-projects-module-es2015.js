(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-projects-view-projects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-projects/view-projects.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-projects/view-projects.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceservice.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Projects</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"pro\">\r\n  <div class=\"project-empty-div\">\r\n    <ion-item lines=\"none\" class=\"project-view\">\r\n      <span slot=\"start\" class=\"head-title\">{{ pro.project_title }}</span> <span slot=\"end\"\r\n        class=\"custom-icon-project-list-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <div class=\"project-content-div\">\r\n    <ion-segment class=\"project-segment\" [(ngModel)]=\"project\">\r\n      <ion-segment-button value=\"overview\" checked=\"true\">\r\n        <div class=\"seg-btn\">\r\n          <span class=\"custom-icon-projects-overview-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"summary\">\r\n        <div class=\"seg-btn\">\r\n          <span class=\"custom-icon-projects-tasks-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"events\">\r\n        <div class=\"seg-btn\">\r\n          <span class=\"custom-icon-projects-calendar-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div [ngSwitch]=\"project\">\r\n      <div *ngSwitchCase=\"'overview'\" class=\"seg-content\">\r\n        <div class=\"project-overview-timeline\">\r\n          <h4 class=\"seg-title project-overview-list\">Overview</h4>\r\n          <div class=\"border project-overview-list\"></div>\r\n          <div class=\"project-overview-container left\">\r\n            <ion-list class=\"project-overview-list\">\r\n              <ion-list-header>\r\n                <div class=\"list-header\">Descriptions</div>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">{{pro.overviews.description}}</ion-item>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"project-overview-container left\">\r\n            <ion-list class=\"project-overview-list\">\r\n              <ion-list-header>\r\n                <div class=\"list-header\">Timeline</div>\r\n              </ion-list-header>\r\n              <ion-row>\r\n                <ion-col size=\"6\"> <span class=\"custom-icon-calendar-icon\"></span>&nbsp;<span\r\n                    class=\"date\">{{ pro.start_date | date: \"d MMM y\" }}</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"end\"><span class=\"custom-icon-calendar-icon\"></span>&nbsp; <span\r\n                    class=\"date\">{{ pro.overviews.deadline | date: \"d MMM y\" }}</span></ion-col>\r\n              </ion-row>\r\n              <div class=\"progress-full-div\">\r\n                <div class=\"project-progress-div tooltip\" [style.width.%]=\"pro.overviews.progress\">\r\n                  <span class=\"tooltiptext\" [style.left]=\"pro.overviews.progress\">{{pro.overviews.progress}}%</span>\r\n                </div>\r\n                <div class=\"project-div\"> </div>\r\n              </div>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"project-overview-container left\">\r\n            <ion-list class=\"project-overview-list\">\r\n              <ion-list-header>\r\n                <div class=\"list-header\">Project Owner</div>\r\n              </ion-list-header>\r\n              <div class=\"owner-icon\">\r\n                <span class=\"custom-icon-user-placeholder-img\"></span>\r\n              </div>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"project-overview-container left\">\r\n            <ion-list class=\"project-overview-list\">\r\n              <ion-list-header>\r\n                <div class=\"list-header\">Team</div>\r\n              </ion-list-header>\r\n              <ion-row>\r\n                <ion-col size=\"3\" *ngFor=\"let img of pro.overviews.project_team_members\">\r\n                  <div class=\"team-icon\">\r\n                    <span class=\"custom-icon-user-placeholder-img\"></span>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'summary'\">\r\n        <div class=\"project-overview-timeline\">\r\n          <h4 class=\"seg-title project-overview-list\">Tasks</h4>\r\n          <div class=\"border project-overview-list\"></div>\r\n          <div class=\"project-overview-container left\">\r\n            <ion-list class=\"project-overview-list\">\r\n              <ion-list-header>\r\n                <div class=\"list-header\">Report</div>\r\n              </ion-list-header>\r\n              <ion-row class=\"report\">\r\n                <ion-col size=\"6\">\r\n                  <span class=\"open-tasks\">{{ opentasks }}&nbsp;open tasks,</span>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <span class=\"completed-tasks\">{{ completedtasks }}&nbsp;completed tasks</span>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"project-overview-container left\">\r\n            <ion-list class=\"project-overview-list\">\r\n              <ion-list-header>\r\n                <div class=\"list-header\">Summary</div>\r\n              </ion-list-header>\r\n              <ion-item detail class=\"project-item\" *ngFor=\"let task of pro.tasks\">\r\n                <span *ngIf=\"task.task_detail.task_progress != 100\" slot=\"start\" class=\"custom-icon-tasks-tick-icon\">\r\n                  <span class=\"path1\"></span>\r\n                  <span class=\"path2\"></span>\r\n                  <span class=\"path3\"></span>\r\n                </span>\r\n                <span *ngIf=\"task.task_detail.task_progress == 100\" slot=\"start\" class=\"custom-icon-verified-icon\">\r\n                  <span class=\"path1\"></span>\r\n                  <span class=\"path2\"></span>\r\n                  <span class=\"path3\"></span>\r\n                </span>\r\n                <ion-label class=\"task-name\">\r\n                  {{ task.task_detail.task_name }}\r\n                </ion-label>\r\n                <div class=\"summary-user-icon\">\r\n                  <span class=\"custom-icon-user-placeholder-img\"></span>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n          <ion-fab-button class=\"fab-add-btn\" (click)=\"add()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'events'\">\r\n        <ion-calendar [(ngModel)]=\"dateRange\" [options]=\"option\" [type]=\"type\" [format]=\"'YYYY-MM-DD'\">\r\n        </ion-calendar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/view-projects/view-projects-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/view-projects/view-projects-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewProjectsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProjectsPageRoutingModule", function() { return ViewProjectsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-projects.page */ "./src/app/view-projects/view-projects.page.ts");




const routes = [
    {
        path: '',
        component: _view_projects_page__WEBPACK_IMPORTED_MODULE_3__["ViewProjectsPage"]
    }
];
let ViewProjectsPageRoutingModule = class ViewProjectsPageRoutingModule {
};
ViewProjectsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewProjectsPageRoutingModule);



/***/ }),

/***/ "./src/app/view-projects/view-projects.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-projects/view-projects.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProjectsPageModule", function() { return ViewProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-projects-routing.module */ "./src/app/view-projects/view-projects-routing.module.ts");
/* harmony import */ var _view_projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-projects.page */ "./src/app/view-projects/view-projects.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);








let ViewProjectsPageModule = class ViewProjectsPageModule {
};
ViewProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewProjectsPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]
        ],
        declarations: [_view_projects_page__WEBPACK_IMPORTED_MODULE_6__["ViewProjectsPage"]]
    })
], ViewProjectsPageModule);



/***/ }),

/***/ "./src/app/view-projects/view-projects.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/view-projects/view-projects.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -45px;\n  position: relative;\n  width: 100%;\n}\n\n.project-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates .custom-icon-project-list-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.project-segment {\n  border-radius: 50px;\n  margin: auto;\n  width: calc(100% - 10%);\n  top: -20px;\n  margin-bottom: 20px;\n  position: relative;\n  background: white;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n  --background-checked: none;\n  --indicator-color-checked: none;\n}\n\n.project-segment .segment-button-checked .seg-btn {\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n  background: #fe9c45;\n  border-radius: 50px;\n  padding-top: 10px;\n}\n\n.project-segment .segment-button-checked .selected-icon {\n  color: white !important;\n}\n\n.project-segment ion-segment-button {\n  margin: 10px;\n  --border-color: #fff0;\n}\n\n.project-segment ion-segment-button .custom-icon-projects-overview-icon,\n.project-segment ion-segment-button .custom-icon-projects-calendar-icon,\n.project-segment ion-segment-button .custom-icon-projects-tasks-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.project-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px 8px 4px 0px;\n}\n\n.seg-title {\n  font-size: 20px;\n  font-family: \"Poppins-Medium\";\n}\n\n.border {\n  border-top: solid 2px #FE9C45;\n  width: 80px;\n}\n\n.seg-content {\n  padding: 0 20px 0 0px;\n}\n\n.project-overview-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.project-overview-list {\n  margin-left: 50px;\n}\n\n.project-overview-list ion-list-header {\n  padding-left: 0;\n}\n\n.project-overview-list .task-name {\n  font-size: 14px;\n}\n\n.project-overview-list .list-header {\n  font-family: \"Poppins-Medium\" !important;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.project-overview-list ion-item {\n  --padding-start: 0;\n}\n\n.project-overview-list .custom-icon-calendar-icon {\n  color: #FE9C45;\n}\n\n.project-overview-list .end {\n  text-align: end;\n  color: #FE9C45;\n  white-space: nowrap;\n  margin: auto;\n}\n\n.project-overview-list .date {\n  color: black;\n}\n\n.project-overview-list .progress-full-div {\n  width: calc(100% - 44px);\n  margin: 0 auto;\n}\n\n.project-overview-list .project-progress-div {\n  background: #0A15D5;\n  height: 10px;\n  z-index: 1;\n  border-radius: 10px;\n  margin-top: 40px;\n}\n\n.project-overview-list .project-div {\n  width: calc(100% - 44px);\n  background: #FE9C45;\n  height: 10px;\n  position: absolute;\n  bottom: 8px;\n  z-index: -1;\n  border-radius: 10px;\n}\n\n.project-overview-list .owner-icon {\n  padding-top: 20px;\n}\n\n.project-overview-list .owner-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 10px;\n  font-size: 30px;\n}\n\n.project-overview-list .team-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 10px;\n  font-size: 20px;\n}\n\n.project-overview-list .custom-icon-user-placeholder-img:before {\n  color: #fff !important;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.project-overview-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.project-overview-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.project-overview-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 24px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.ios .project-overview-container::after {\n  top: 12px !important;\n}\n\n.ios .project-div {\n  bottom: 0px !important;\n}\n\n.ios .owner-icon {\n  margin-bottom: 7px;\n}\n\n.project-overview-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.project-overview-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.project-overview-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.tooltip {\n  position: relative;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: visible;\n  width: 50px;\n  background-color: #22D165;\n  color: #fff;\n  text-align: center;\n  border-radius: 20px;\n  padding: 5px 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 175%;\n  left: calc(100% - 28px);\n  opacity: 1;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -6px;\n  border-width: 6px;\n  border-style: solid;\n  border-color: #22D165 transparent transparent transparent;\n}\n\n.open-tasks::before,\n.completed-tasks::before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 13px;\n  z-index: 1;\n  left: -10px;\n}\n\n.open-tasks,\n.completed-tasks {\n  font-size: 12px;\n  margin: auto;\n}\n\n.completed-tasks::before {\n  background: #22D165;\n}\n\n.open-tasks::before {\n  background: #FE9C45;\n}\n\n.report {\n  margin-left: 10px;\n}\n\n.summary-user-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 5px;\n  font-size: 15px;\n}\n\n.custom-icon-tasks-tick-icon {\n  font-size: 25px;\n  font-weight: bold;\n  margin-right: 15px;\n}\n\n.custom-icon-tasks-tick-icon span {\n  font-family: \"newhrms\";\n}\n\n.custom-icon-tasks-tick-icon .path1::before {\n  color: #adabab !important;\n}\n\n.custom-icon-tasks-tick-icon .path2::before {\n  color: #fff !important;\n}\n\n.custom-icon-verified-icon {\n  font-size: 25px;\n  font-weight: bold;\n  position: unset;\n  margin-left: unset;\n  margin-right: 15px;\n}\n\n.custom-icon-verified-icon span {\n  font-family: \"newhrms\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wcm9qZWN0cy9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXHZpZXctcHJvamVjdHNcXHZpZXctcHJvamVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LXByb2plY3RzL3ZpZXctcHJvamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ08sZ0JBQUE7RUFDSCxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNPLG1CQUFBO0VBQ0gsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBQ0RKOztBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRlo7O0FES1E7RUFDSSx1QkFBQTtBQ0haOztBRE9JO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDTFI7O0FET1E7OztFQUdJLGVBQUE7RUFDQSxZQUFBO0FDTFo7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDUEo7O0FEV0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUNSSjs7QURXQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQ1JKOztBRFdBO0VBQ0kscUJBQUE7QUNSSjs7QURXQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUko7O0FEV0E7RUFDSSxpQkFBQTtBQ1JKOztBRFVJO0VBQ0ksZUFBQTtBQ1JSOztBRFdJO0VBQ0ksZUFBQTtBQ1RSOztBRFlJO0VB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b250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFByb2plY3QgRGV0YWlscyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC0tPlxyXG5cclxuLnByb2plY3QtY29udGVudC1kaXYge1xyXG4gICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvamVjdC1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLXByb2plY3QtbGlzdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByb2plY3Qtc2VnbWVudCB7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IG5vbmU7XHJcblxyXG4gICAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICAgIC5zZWctYnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZTljNDU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdGVkLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmYwO1xyXG5cclxuICAgICAgICAuY3VzdG9tLWljb24tcHJvamVjdHMtb3ZlcnZpZXctaWNvbixcclxuICAgICAgICAuY3VzdG9tLWljb24tcHJvamVjdHMtY2FsZW5kYXItaWNvbixcclxuICAgICAgICAuY3VzdG9tLWljb24tcHJvamVjdHMtdGFza3MtaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2plY3QtaXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4IDRweCAwcHg7XHJcblxyXG59XHJcblxyXG4uc2VnLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNGRTlDNDU7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLnNlZy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDBweDtcclxufVxyXG5cclxuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuXHJcbiAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAudGFzay1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtaGVhZGVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLWNhbGVuZGFyLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjRkU5QzQ1O1xyXG4gICAgfVxyXG5cclxuICAgIC5lbmQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICBjb2xvcjogI0ZFOUM0NTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9ncmVzcy1mdWxsLWRpdiB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0LXByb2dyZXNzLWRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtZGl2IHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZFOUM0NTtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogOHB4O1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm93bmVyLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDJEMkQyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZWFtLWljb24ge1xyXG4gICAgICAgIC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEMkQyRDI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nOmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cclxuLnByb2plY3Qtb3ZlcnZpZXctY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHRvcDogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4uaW9zIHtcclxuICAgIC5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0LWRpdiB7XHJcbiAgICAgICAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAub3duZXItaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcclxufVxyXG5cclxuLnByb2plY3Qtb3ZlcnZpZXctY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcbi5sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4ucHJvamVjdC1vdmVydmlldy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMzFweDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbi5sZWZ0OjphZnRlcixcclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZmFiLWFkZC1idG4ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJEMTY1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDE3NSU7XHJcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAyOHB4KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjJEMTY1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ub3Blbi10YXNrczo6YmVmb3JlLFxyXG4uY29tcGxldGVkLXRhc2tzOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4ub3Blbi10YXNrcyxcclxuLmNvbXBsZXRlZC10YXNrcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQtdGFza3M6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjJEMTY1O1xyXG59XHJcblxyXG4ub3Blbi10YXNrczo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcbi5yZXBvcnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXVzZXItaWNvbiB7XHJcbiAgICAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0QyRDJEMjtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIjtcclxuICAgIH1cclxuXHJcbiAgICAucGF0aDE6OmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6ICNhZGFiYWIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGF0aDI6OmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIC5ob2xpZGF5LXRpdGxlIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1kYXRlIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1jYXJkIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9qZWN0dmlldy1kZXNjIHtcclxuLy8gICAgIGNvbG9yOiAjMzMzO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9qZWN0dmlldy1kZXNjcmlwdGlvbiB7XHJcbi8vICAgICBjb2xvcjogIzc3NyAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2plY3Qtb3ZlcnZpZXcge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvamVjdHZpZXctaW1hZ2Uge1xyXG4vLyAgICAgbWFyZ2luOiAycHg7XHJcbi8vICAgICB3aWR0aDogMzBweDtcclxuLy8gICAgIGhlaWdodDogMzBweDtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2plY3QtcHJvZ3Jlc3Mge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4vLyAgICAgY29sb3I6ICMwMDA7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZ3Jlc3MtdGV4dCB7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi8vIC5hZGQtaWNvbiB7XHJcbi8vICAgICBjb2xvcjogIzc3NyAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gfVxyXG5cclxuLy8gLnRhc2stbGFiZWwge1xyXG4vLyAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmxhYmVsIC5sYWJlbC1tZCB7XHJcbi8vICAgICBtYXJnaW46IDEzcHggOHB4IDEzcHggMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1jYXJkIHtcclxuLy8gICAgIG1hcmdpbjogMTNweCA4cHggMTNweCAwO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS10aXRsZSB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtaW5uZXItaXRlbSB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktbGlzdCAubGFiZWwtbWQge1xyXG4vLyAgICAgbWFyZ2luOiAxM3B4IDhweCAxM3B4IDA7XHJcbi8vIH1cclxuXHJcbi8vIC50YXNrLWNoZWNrbWFyayB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICAgIGNvbG9yOiAjY2NjO1xyXG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICB3aWR0aDogMThweDtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLmFkZC10YXNrIHtcclxuLy8gICAgIGNvbG9yOiAjY2NjO1xyXG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICB3aWR0aDogMThweDtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLnNlbGVjdGVkIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMzNWJhNjYgIWltcG9ydGFudDtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZmE2NWMgIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50YXNrcy1kaXYge1xyXG4vLyAgICAgbWluLWhlaWdodDogNDRweDtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4vLyAgICAgcGFkZGluZzogN3B4IDBweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4vLyB9XHJcblxyXG4vLyAudGFza3Mge1xyXG4vLyAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gfVxyXG5cclxuLy8gLnRhc2t1c2VyLWltYWdlIHtcclxuLy8gICAgIG1hcmdpbjogMnB4O1xyXG4vLyAgICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDIwcHg7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZ3Jlc3Mge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZWNlY2U4O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZ3Jlc3MtYmFyIHtcclxuLy8gICAgIGhlaWdodDogMTBweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICMxNGNlZTI7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jYWxlbmRhciAuY2FsZW5kYXItcm93IC5zZWxlY3Qge1xyXG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4vLyAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4vLyAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAudG9vbHRpcCB7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi8vIC50b29sdGlwPi50b29sdGlwLWlubmVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWJmM2Y7XHJcbi8vICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuLy8gICAgIGNvbG9yOiByZ2IoMjMsIDQ0LCA2Nik7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gfVxyXG5cclxuLy8gLnBvcE92ZXIrLnRvb2x0aXA+LnRvb2x0aXAtYXJyb3cge1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuLy8gICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNlZWJmM2Y7XHJcbi8vIH1cclxuXHJcbi8vIHNlY3Rpb24ge1xyXG4vLyAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9ncmVzcyB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4vLyAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9ncmVzcy1iYXIge1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmdiKDIzLCA0NCwgNjApO1xyXG4vLyAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAxLjVzIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgdHJhbnNpdGlvbjogd2lkdGggMS41cyBlYXNlLWluLW91dDtcclxuLy8gfVxyXG5cclxuLy8gLmJhcldyYXBwZXIge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4vLyAgICAgcGFkZGluZzogMCUgNSU7XHJcbi8vIH1cclxuXHJcbi8vIC5oYXMtdGlwIHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IC03cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLWljb24vaW5mb3JtYXRpb24tY2lyY2xlXzMxOC0yNzI1NS5qcGcpIG5vLXJlcGVhdCByaWdodCBjZW50ZXIgLyBjb250YWluO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcblxyXG4vLyAuaGFzLXRpcDpiZWZvcmUge1xyXG4vLyAgICAgY29udGVudDogYXR0cihkYXRhLXRpcCk7XHJcbi8vICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuLy8gICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuLy8gICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuLy8gICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiAyOXB4O1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbi8vICAgICBsZWZ0OiAxMDAlO1xyXG4vLyAgICAgYm90dG9tOiA1cHg7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNXB4ICMwMDA7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggIzAwMDtcclxuLy8gfVxyXG5cclxuLy8gLmhhcy10aXA6OmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogLTEwcHg7XHJcbi8vICAgICB0b3A6IC05cHg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIHdpZHRoOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiAwO1xyXG4vLyAgICAgYm9yZGVyLXRvcDogc29saWQgMTBweCAjZmZmZmZmO1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDEwcHggdHJhbnNwYXJlbnQ7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDEwcHggdHJhbnNwYXJlbnQ7XHJcbi8vICAgICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDVweCAjMDAwO1xyXG4vLyAgICAgLy8gYm94LXNoYWRvdzogMCAzcHggNXB4ICMwMDA7XHJcbi8vIH0iLCIucHJvamVjdC1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC00NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1wcm9qZWN0LWxpc3QtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdC1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcbiAgdG9wOiAtMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiBub25lO1xufVxuLnByb2plY3Qtc2VnbWVudCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuc2VnLWJ0biB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmU5YzQ1O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wcm9qZWN0LXNlZ21lbnQgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLnNlbGVjdGVkLWljb24ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5wcm9qZWN0LXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZjA7XG59XG4ucHJvamVjdC1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiAuY3VzdG9tLWljb24tcHJvamVjdHMtb3ZlcnZpZXctaWNvbixcbi5wcm9qZWN0LXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIC5jdXN0b20taWNvbi1wcm9qZWN0cy1jYWxlbmRhci1pY29uLFxuLnByb2plY3Qtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLmN1c3RvbS1pY29uLXByb2plY3RzLXRhc2tzLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgcGFkZGluZzogNHB4IDhweCA0cHggMHB4O1xufVxuXG4uc2VnLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNGRTlDNDU7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uc2VnLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwcHg7XG59XG5cbi5wcm9qZWN0LW92ZXJ2aWV3LXRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3Qge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCAudGFzay1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCAubGlzdC1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucHJvamVjdC1vdmVydmlldy1saXN0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCAuY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbiB7XG4gIGNvbG9yOiAjRkU5QzQ1O1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCAuZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogI0ZFOUM0NTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCAuZGF0ZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgLnByb2dyZXNzLWZ1bGwtZGl2IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgLnByb2plY3QtcHJvZ3Jlc3MtZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCAucHJvamVjdC1kaXYge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDRweCk7XG4gIGJhY2tncm91bmQ6ICNGRTlDNDU7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDhweDtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvamVjdC1vdmVydmlldy1saXN0IC5vd25lci1pY29uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ucHJvamVjdC1vdmVydmlldy1saXN0IC5vd25lci1pY29uIC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNEMkQyRDI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgLnRlYW0taWNvbiAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRDJEMkQyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvamVjdC1vdmVydmlldy1saXN0IC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZzpiZWZvcmUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4ucHJvamVjdC1vdmVydmlldy10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLnByb2plY3Qtb3ZlcnZpZXctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uaW9zIC5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjo6YWZ0ZXIge1xuICB0b3A6IDEycHggIWltcG9ydGFudDtcbn1cbi5pb3MgLnByb2plY3QtZGl2IHtcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5pb3MgLm93bmVyLWljb24ge1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XG59XG5cbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmU6OmFmdGVyIHtcbiAgbGVmdDogMzFweDtcbn1cblxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXG4ubGVmdDo6YWZ0ZXIsXG4ucmlnaHQ6OmFmdGVyIHtcbiAgbGVmdDogMTVweDtcbn1cblxuLmZhYi1hZGQtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJEMTY1O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTc1JTtcbiAgbGVmdDogY2FsYygxMDAlIC0gMjhweCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTZweDtcbiAgYm9yZGVyLXdpZHRoOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzIyRDE2NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLm9wZW4tdGFza3M6OmJlZm9yZSxcbi5jb21wbGV0ZWQtdGFza3M6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgdG9wOiAxM3B4O1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAtMTBweDtcbn1cblxuLm9wZW4tdGFza3MsXG4uY29tcGxldGVkLXRhc2tzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jb21wbGV0ZWQtdGFza3M6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMyMkQxNjU7XG59XG5cbi5vcGVuLXRhc2tzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xufVxuXG4ucmVwb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zdW1tYXJ5LXVzZXItaWNvbiAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRDJEMkQyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmN1c3RvbS1pY29uLXRhc2tzLXRpY2staWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5jdXN0b20taWNvbi10YXNrcy10aWNrLWljb24gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIjtcbn1cbi5jdXN0b20taWNvbi10YXNrcy10aWNrLWljb24gLnBhdGgxOjpiZWZvcmUge1xuICBjb2xvcjogI2FkYWJhYiAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1pY29uLXRhc2tzLXRpY2staWNvbiAucGF0aDI6OmJlZm9yZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taWNvbi12ZXJpZmllZC1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHVuc2V0O1xuICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5jdXN0b20taWNvbi12ZXJpZmllZC1pY29uIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XG59Il19 */"

/***/ }),

/***/ "./src/app/view-projects/view-projects.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-projects/view-projects.page.ts ***!
  \*****************************************************/
/*! exports provided: ViewProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProjectsPage", function() { return ViewProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _add_task_add_task_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-task/add-task.page */ "./src/app/add-task/add-task.page.ts");






let ViewProjectsPage = class ViewProjectsPage {
    constructor(router, navCtrl, modalController, referenceservice, activeRoute) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.referenceservice = referenceservice;
        this.activeRoute = activeRoute;
        this.bgColor = '3A57C4';
        this.pageNumber = 1;
        this.page = false;
        this.project = 'overview';
        this.task = false;
        this.noData = false;
        this.keywords = {};
        this.events = [];
        this.taskEvent = {};
        this.dateRange = {
            from: new Date('2019-01-02'),
            to: new Date('2019-01-10')
        };
        this.option = {
            pickMode: 'range',
            title: 'RANGE',
            defaultDateRange: this.dateRange,
            defaultScrollTo: new Date('2019-01-02'),
            from: new Date('2019-01-02')
        };
        this.role = localStorage.getItem('role');
        this.roleId = localStorage.getItem('role_id');
        this.color = localStorage.getItem('primary_color');
        this.primaryColor = localStorage.getItem('primary_color');
        this.secondryColor = localStorage.getItem('secondry_color');
        this.referenceservice.getParams('project').then(res => {
            this.pro = res;
            console.log(this.pro);
            this.dateRange.from = new Date(this.pro.start_date);
            this.dateRange.to = new Date(this.pro.overviews.deadline);
            this.option.defaultDateRange = this.dateRange;
            this.option.defaultScrollTo = new Date(this.pro.start_date);
            this.opentasks = this.pro.tasks_open.length;
            this.completedtasks = this.pro.tasks_completed.length;
            if (this.pro.tasks.length == 0) {
                this.task = true;
            }
        });
        this.keywords = JSON.parse(localStorage.getItem('keywords'));
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // this.pro.overviews.project_team_members.forEach(element => {
        //   var img = this.pro.overviews.user_profile_path + element.avatar;
        //   element.avatar = img;
        // });
        this.pro.tasks.forEach(element => {
            var date = element.task_detail.due_date.split('-');
            var data = {};
            data.year = date[0];
            data.month = parseInt(date[1]) - 1;
            data.date = date[2];
            data.detail = element.task_detail;
            this.events.push(data);
        });
    }
    getProgresstyle() {
        return {
            background: "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
        };
    }
    getHeaderStyle() {
        return { background: this.primaryColor };
    }
    getFontstyle() {
        return { color: this.secondryColor };
    }
    setDefaultPic() {
        this.pro.overviews.project_lead_photo = "assets/imgs/user.jpg";
    }
    ;
    setDefaultUserPic(img) {
        img.avatar = "assets/imgs/user.jpg";
    }
    ;
    openTask(task) {
        let data = JSON.stringify({ task: task, project: this.pro });
        this.navCtrl.navigateForward('task-details/' + data);
    }
    ;
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
    onDaySelect(event) {
        //console.log(event);
        var month = event.month + 1;
        var day = event.date;
        //console.log(day)
        if (day < 10) {
            //console.log(day)
            day = '0' + day;
        }
        var eventData = {};
        var date = event.year + '-' + month + '-' + day;
        this.pro.tasks.forEach(element => {
            if (element.task_detail.due_date == date) {
                eventData = element;
            }
        });
        //console.log(eventData)
        if (JSON.stringify(eventData) != '{}') {
            let data = JSON.stringify({ event: eventData });
            this.navCtrl.navigateForward('/Calendar-modal/' + data);
        }
        else {
            this.referenceservice.showAlert("SMART HRMS", 'No Events on this day');
        }
    }
    onMonthSelect(event) {
        //console.log(event)
    }
    createTask() {
        let data = JSON.stringify({
            project: this.pro.overviews.project_id,
            type: 'task'
        });
        this.navCtrl.navigateForward('/create-task/' + data);
    }
};
ViewProjectsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-projects',
        template: __webpack_require__(/*! raw-loader!./view-projects.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-projects/view-projects.page.html"),
        styles: [__webpack_require__(/*! ./view-projects.page.scss */ "./src/app/view-projects/view-projects.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ViewProjectsPage);



/***/ })

}]);
//# sourceMappingURL=view-projects-view-projects-module-es2015.js.map