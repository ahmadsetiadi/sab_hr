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

module.exports = ".project-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -45px;\n  position: relative;\n  width: 100%;\n}\n\n.project-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates .custom-icon-project-list-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.project-segment {\n  border-radius: 50px;\n  margin: auto;\n  width: calc(100% - 10%);\n  top: -20px;\n  margin-bottom: 20px;\n  position: relative;\n  background: white;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n  --background-checked: none;\n  --indicator-color-checked: none;\n}\n\n.project-segment .segment-button-checked .seg-btn {\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n  background: #fe9c45;\n  border-radius: 50px;\n  padding-top: 10px;\n}\n\n.project-segment .segment-button-checked .selected-icon {\n  color: white !important;\n}\n\n.project-segment ion-segment-button {\n  margin: 10px;\n  --border-color: #fff0;\n}\n\n.project-segment ion-segment-button .custom-icon-projects-overview-icon,\n.project-segment ion-segment-button .custom-icon-projects-calendar-icon,\n.project-segment ion-segment-button .custom-icon-projects-tasks-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.project-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px 8px 4px 0px;\n}\n\n.seg-title {\n  font-size: 20px;\n  font-family: \"Poppins-Medium\";\n}\n\n.border {\n  border-top: solid 2px #FE9C45;\n  width: 80px;\n}\n\n.seg-content {\n  padding: 0 20px 0 0px;\n}\n\n.project-overview-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.project-overview-list {\n  margin-left: 50px;\n}\n\n.project-overview-list ion-list-header {\n  padding-left: 0;\n}\n\n.project-overview-list .task-name {\n  font-size: 14px;\n}\n\n.project-overview-list .list-header {\n  font-family: \"Poppins-Medium\" !important;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.project-overview-list ion-item {\n  --padding-start: 0;\n}\n\n.project-overview-list .custom-icon-calendar-icon {\n  color: #FE9C45;\n}\n\n.project-overview-list .end {\n  text-align: end;\n  color: #FE9C45;\n  white-space: nowrap;\n  margin: auto;\n}\n\n.project-overview-list .date {\n  color: black;\n}\n\n.project-overview-list .progress-full-div {\n  width: calc(100% - 44px);\n  margin: 0 auto;\n}\n\n.project-overview-list .project-progress-div {\n  background: #0A15D5;\n  height: 10px;\n  z-index: 1;\n  border-radius: 10px;\n  margin-top: 40px;\n}\n\n.project-overview-list .project-div {\n  width: calc(100% - 44px);\n  background: #FE9C45;\n  height: 10px;\n  position: absolute;\n  bottom: 8px;\n  z-index: -1;\n  border-radius: 10px;\n}\n\n.project-overview-list .owner-icon {\n  padding-top: 20px;\n}\n\n.project-overview-list .owner-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 10px;\n  font-size: 30px;\n}\n\n.project-overview-list .team-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 10px;\n  font-size: 20px;\n}\n\n.project-overview-list .custom-icon-user-placeholder-img:before {\n  color: #fff !important;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.project-overview-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.project-overview-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.project-overview-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 24px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.ios .project-overview-container::after {\n  top: 12px !important;\n}\n\n.ios .project-div {\n  bottom: 0px !important;\n}\n\n.ios .owner-icon {\n  margin-bottom: 7px;\n}\n\n.project-overview-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.project-overview-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.project-overview-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.tooltip {\n  position: relative;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: visible;\n  width: 50px;\n  background-color: #22D165;\n  color: #fff;\n  text-align: center;\n  border-radius: 20px;\n  padding: 5px 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 175%;\n  left: calc(100% - 28px);\n  opacity: 1;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -6px;\n  border-width: 6px;\n  border-style: solid;\n  border-color: #22D165 transparent transparent transparent;\n}\n\n.open-tasks::before,\n.completed-tasks::before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 13px;\n  z-index: 1;\n  left: -10px;\n}\n\n.open-tasks,\n.completed-tasks {\n  font-size: 12px;\n  margin: auto;\n}\n\n.completed-tasks::before {\n  background: #22D165;\n}\n\n.open-tasks::before {\n  background: #FE9C45;\n}\n\n.report {\n  margin-left: 10px;\n}\n\n.summary-user-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 5px;\n  font-size: 15px;\n}\n\n.custom-icon-tasks-tick-icon {\n  font-size: 25px;\n  font-weight: bold;\n  margin-right: 15px;\n}\n\n.custom-icon-tasks-tick-icon span {\n  font-family: \"newhrms\";\n}\n\n.custom-icon-tasks-tick-icon .path1::before {\n  color: #adabab !important;\n}\n\n.custom-icon-tasks-tick-icon .path2::before {\n  color: #fff !important;\n}\n\n.custom-icon-verified-icon {\n  font-size: 25px;\n  font-weight: bold;\n  position: unset;\n  margin-left: unset;\n  margin-right: 15px;\n}\n\n.custom-icon-verified-icon span {\n  font-family: \"newhrms\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wcm9qZWN0cy9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFx2aWV3LXByb2plY3RzXFx2aWV3LXByb2plY3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlldy1wcm9qZWN0cy92aWV3LXByb2plY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNPLGdCQUFBO0VBQ0gsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDTyxtQkFBQTtFQUNILFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUNESjs7QURJUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0ZaOztBREtRO0VBQ0ksdUJBQUE7QUNIWjs7QURPSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ0xSOztBRE9ROzs7RUFHSSxlQUFBO0VBQ0EsWUFBQTtBQ0xaOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ1BKOztBRFdBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FDUko7O0FEV0E7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUNSSjs7QURXQTtFQUNJLHFCQUFBO0FDUko7O0FEV0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1JKOztBRFdBO0VBQ0ksaUJBQUE7QUNSSjs7QURVSTtFQUNJLGVBQUE7QUNSUjs7QURXSTtF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cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBQcm9qZWN0IERldGFpbHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAtLT5cclxuXHJcbi5wcm9qZWN0LWNvbnRlbnQtZGl2IHtcclxuICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTQ1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2plY3QtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1wcm9qZWN0LWxpc3QtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXNlZ21lbnQge1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XHJcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiBub25lO1xyXG5cclxuICAgIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgICAuc2VnLWJ0biB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmU5YzQ1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3RlZC1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmMDtcclxuXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLXByb2plY3RzLW92ZXJ2aWV3LWljb24sXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLXByb2plY3RzLWNhbGVuZGFyLWljb24sXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLXByb2plY3RzLXRhc2tzLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XHJcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgcGFkZGluZzogNHB4IDhweCA0cHggMHB4O1xyXG5cclxufVxyXG5cclxuLnNlZy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCAjRkU5QzQ1O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5zZWctY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhc2stbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20taWNvbi1jYWxlbmRhci1pY29uIHtcclxuICAgICAgICBjb2xvcjogI0ZFOUM0NTtcclxuICAgIH1cclxuXHJcbiAgICAuZW5kIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgY29sb3I6ICNGRTlDNDU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGUge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3MtZnVsbC1kaXYge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NHB4KTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdC1wcm9ncmVzcy1kaXYge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0LWRpdiB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDhweDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5vd25lci1pY29uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0QyRDJEMjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGVhbS1pY29uIHtcclxuICAgICAgICAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDJEMkQyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZzpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4ucHJvamVjdC1vdmVydmlldy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLnByb2plY3Qtb3ZlcnZpZXctY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmlvcyB7XHJcbiAgICAucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6OmFmdGVyIHtcclxuICAgICAgICB0b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdC1kaXYge1xyXG4gICAgICAgIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm93bmVyLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2plY3Qtb3ZlcnZpZXctY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4ubGVmdDo6YWZ0ZXIsXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyRDE2NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm90dG9tOiAxNzUlO1xyXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMjhweCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcclxuICAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzIyRDE2NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm9wZW4tdGFza3M6OmJlZm9yZSxcclxuLmNvbXBsZXRlZC10YXNrczo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHRvcDogMTNweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLm9wZW4tdGFza3MsXHJcbi5jb21wbGV0ZWQtdGFza3Mge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29tcGxldGVkLXRhc2tzOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogIzIyRDE2NTtcclxufVxyXG5cclxuLm9wZW4tdGFza3M6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59XHJcblxyXG4ucmVwb3J0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc3VtbWFyeS11c2VyLWljb24ge1xyXG4gICAgLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNEMkQyRDI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1pY29uLXRhc2tzLXRpY2staWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGgxOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAjYWRhYmFiICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGgyOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1pY29uLXZlcmlmaWVkLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibmV3aHJtc1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyAuaG9saWRheS10aXRsZSB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktZGF0ZSB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktY2FyZCB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvamVjdHZpZXctZGVzYyB7XHJcbi8vICAgICBjb2xvcjogIzMzMztcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvamVjdHZpZXctZGVzY3JpcHRpb24ge1xyXG4vLyAgICAgY29sb3I6ICM3NzcgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9qZWN0LW92ZXJ2aWV3IHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2plY3R2aWV3LWltYWdlIHtcclxuLy8gICAgIG1hcmdpbjogMnB4O1xyXG4vLyAgICAgd2lkdGg6IDMwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDMwcHg7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9qZWN0LXByb2dyZXNzIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gICAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2dyZXNzLXRleHQge1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAuYWRkLWljb24ge1xyXG4vLyAgICAgY29sb3I6ICM3NzcgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50YXNrLWxhYmVsIHtcclxuLy8gICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5sYWJlbCAubGFiZWwtbWQge1xyXG4vLyAgICAgbWFyZ2luOiAxM3B4IDhweCAxM3B4IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktY2FyZCB7XHJcbi8vICAgICBtYXJnaW46IDEzcHggOHB4IDEzcHggMDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtdGl0bGUge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWlubmVyLWl0ZW0ge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWxpc3QgLmxhYmVsLW1kIHtcclxuLy8gICAgIG1hcmdpbjogMTNweCA4cHggMTNweCAwO1xyXG4vLyB9XHJcblxyXG4vLyAudGFzay1jaGVja21hcmsge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBjb2xvcjogI2NjYztcclxuLy8gICAgIGhlaWdodDogMThweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgd2lkdGg6IDE4cHg7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hZGQtdGFzayB7XHJcbi8vICAgICBjb2xvcjogI2NjYztcclxuLy8gICAgIGhlaWdodDogMThweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgd2lkdGg6IDE4cHg7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zZWxlY3RlZCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzViYTY2ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmZhNjVjICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAudGFza3MtZGl2IHtcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuLy8gICAgIHBhZGRpbmc6IDdweCAwcHg7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M4YzdjYztcclxuLy8gfVxyXG5cclxuLy8gLnRhc2tzIHtcclxuLy8gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vIH1cclxuXHJcbi8vIC50YXNrdXNlci1pbWFnZSB7XHJcbi8vICAgICBtYXJnaW46IDJweDtcclxuLy8gICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2dyZXNzIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2VjZWNlODtcclxuLy8gfVxyXG5cclxuLy8gLnByb2dyZXNzLWJhciB7XHJcbi8vICAgICBoZWlnaHQ6IDEwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjMTRjZWUyO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FsZW5kYXIgLmNhbGVuZGFyLXJvdyAuc2VsZWN0IHtcclxuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuLy8gICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRvb2x0aXAge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAudG9vbHRpcD4udG9vbHRpcC1pbm5lciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWViZjNmO1xyXG4vLyAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbi8vICAgICBjb2xvcjogcmdiKDIzLCA0NCwgNjYpO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDEzcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wb3BPdmVyKy50b29sdGlwPi50b29sdGlwLWFycm93IHtcclxuLy8gICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuLy8gICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZWViZjNmO1xyXG4vLyB9XHJcblxyXG4vLyBzZWN0aW9uIHtcclxuLy8gICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxuLy8gICAgIGhlaWdodDogMTAwMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZ3Jlc3Mge1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuLy8gICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZ3Jlc3MtYmFyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHJnYigyMywgNDQsIDYwKTtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMS41cyBlYXNlLWluLW91dDtcclxuLy8gICAgIHRyYW5zaXRpb246IHdpZHRoIDEuNXMgZWFzZS1pbi1vdXQ7XHJcbi8vIH1cclxuXHJcbi8vIC5iYXJXcmFwcGVyIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwJTtcclxuLy8gICAgIHBhZGRpbmc6IDAlIDUlO1xyXG4vLyB9XHJcblxyXG4vLyAuaGFzLXRpcCB7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAtN3B4O1xyXG4vLyAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS1pY29uL2luZm9ybWF0aW9uLWNpcmNsZV8zMTgtMjcyNTUuanBnKSBuby1yZXBlYXQgcmlnaHQgY2VudGVyIC8gY29udGFpbjtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLmhhcy10aXA6YmVmb3JlIHtcclxuLy8gICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xyXG4vLyAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi8vICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbi8vICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbi8vICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDogMjlweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4vLyAgICAgbGVmdDogMTAwJTtcclxuLy8gICAgIGJvdHRvbTogNXB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDVweCAjMDAwO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4ICMwMDA7XHJcbi8vIH1cclxuXHJcbi8vIC5oYXMtdGlwOjphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgcmlnaHQ6IC0xMHB4O1xyXG4vLyAgICAgdG9wOiAtOXB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICB3aWR0aDogMDtcclxuLy8gICAgIGhlaWdodDogMDtcclxuLy8gICAgIGJvcmRlci10b3A6IHNvbGlkIDEwcHggI2ZmZmZmZjtcclxuLy8gICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxMHB4IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxMHB4IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA1cHggIzAwMDtcclxuLy8gICAgIC8vIGJveC1zaGFkb3c6IDAgM3B4IDVweCAjMDAwO1xyXG4vLyB9IiwiLnByb2plY3QtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tcHJvamVjdC1saXN0LWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3Qtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XG4gIHRvcDogLTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogbm9uZTtcbn1cbi5wcm9qZWN0LXNlZ21lbnQgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLnNlZy1idG4ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI2ZlOWM0NTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucHJvamVjdC1zZWdtZW50IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5zZWxlY3RlZC1pY29uIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucHJvamVjdC1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmYwO1xufVxuLnByb2plY3Qtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLmN1c3RvbS1pY29uLXByb2plY3RzLW92ZXJ2aWV3LWljb24sXG4ucHJvamVjdC1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiAuY3VzdG9tLWljb24tcHJvamVjdHMtY2FsZW5kYXItaWNvbixcbi5wcm9qZWN0LXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIC5jdXN0b20taWNvbi1wcm9qZWN0cy10YXNrcy1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xuICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIHBhZGRpbmc6IDRweCA4cHggNHB4IDBweDtcbn1cblxuLnNlZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjRkU5QzQ1O1xuICB3aWR0aDogODBweDtcbn1cblxuLnNlZy1jb250ZW50IHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMHB4O1xufVxuXG4ucHJvamVjdC1vdmVydmlldy10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucHJvamVjdC1vdmVydmlldy1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG4ucHJvamVjdC1vdmVydmlldy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgLnRhc2stbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgLmxpc3QtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgLmN1c3RvbS1pY29uLWNhbGVuZGFyLWljb24ge1xuICBjb2xvcjogI0ZFOUM0NTtcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgLmVuZCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6ICNGRTlDNDU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgLmRhdGUge1xuICBjb2xvcjogYmxhY2s7XG59XG4ucHJvamVjdC1vdmVydmlldy1saXN0IC5wcm9ncmVzcy1mdWxsLWRpdiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0NHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucHJvamVjdC1vdmVydmlldy1saXN0IC5wcm9qZWN0LXByb2dyZXNzLWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTBweDtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5wcm9qZWN0LW92ZXJ2aWV3LWxpc3QgLnByb2plY3QtZGl2IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4cHg7XG4gIHotaW5kZXg6IC0xO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCAub3duZXItaWNvbiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCAub3duZXItaWNvbiAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRDJEMkQyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ucHJvamVjdC1vdmVydmlldy1saXN0IC50ZWFtLWljb24gLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogI0QyRDJEMjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnByb2plY3Qtb3ZlcnZpZXctbGlzdCAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWc6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLnByb2plY3Qtb3ZlcnZpZXctdGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5wcm9qZWN0LW92ZXJ2aWV3LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmlvcyAucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6OmFmdGVyIHtcbiAgdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uaW9zIC5wcm9qZWN0LWRpdiB7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW9zIC5vd25lci1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4ucHJvamVjdC1vdmVydmlldy1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi5wcm9qZWN0LW92ZXJ2aWV3LXRpbWVsaW5lOjphZnRlciB7XG4gIGxlZnQ6IDMxcHg7XG59XG5cbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuLmxlZnQ6OmFmdGVyLFxuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbi5mYWItYWRkLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyRDE2NTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDE3NSU7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDI4cHgpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gIGJvcmRlci13aWR0aDogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMyMkQxNjUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5vcGVuLXRhc2tzOjpiZWZvcmUsXG4uY29tcGxldGVkLXRhc2tzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHRvcDogMTNweDtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5vcGVuLXRhc2tzLFxuLmNvbXBsZXRlZC10YXNrcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29tcGxldGVkLXRhc2tzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMjJEMTY1O1xufVxuXG4ub3Blbi10YXNrczo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cblxuLnJlcG9ydCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc3VtbWFyeS11c2VyLWljb24gLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogI0QyRDJEMjtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jdXN0b20taWNvbi10YXNrcy10aWNrLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XG59XG4uY3VzdG9tLWljb24tdGFza3MtdGljay1pY29uIC5wYXRoMTo6YmVmb3JlIHtcbiAgY29sb3I6ICNhZGFiYWIgIWltcG9ydGFudDtcbn1cbi5jdXN0b20taWNvbi10YXNrcy10aWNrLWljb24gLnBhdGgyOjpiZWZvcmUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uY3VzdG9tLWljb24tdmVyaWZpZWQtaWNvbiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwibmV3aHJtc1wiO1xufSJdfQ== */"

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