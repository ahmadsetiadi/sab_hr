(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-list-project-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/project-list/project-list.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-list/project-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"util.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Projects</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <!-- ========================== Project List ===================================== -->\r\n  <div class=\"empty-div\">\r\n    <ion-item lines=\"none\">\r\n      <span slot=\"start\" class=\"head-title\">Project List</span> <span slot=\"end\"\r\n        class=\"custom-icon-project-list-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"content-div\">\r\n    <div class=\"timeline\">\r\n      <ion-item class=\"sort-item\">\r\n        <ion-label>\r\n          Sort\r\n        </ion-label>\r\n        <span class=\"custom-icon-sort-icon\"></span>\r\n      </ion-item>\r\n      <div class=\"container left\" *ngFor=\"let project of projectList; let i = index\">\r\n        <ion-list id=\"{{i}}\" class=\"project-list\" [ngClass]=\"cssClass\"\r\n          [ngStyle]=\"{ 'animation-delay': project.time + 's' }\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\">\r\n              <div class=\"progress-div\" [style.width.%]=\"project.progress\"> </div>\r\n              <div class=\"project-content\" (click)=\"openProject(project)\">\r\n                <ion-row>\r\n                  <ion-label class=\"project-name\">{{ project.project_title }}</ion-label>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <span class=\"custom-icon-calendar-icon\"></span>\r\n                    &nbsp;<span class=\"pro-text\">{{\r\n                      project.start_date\r\n                      | date: \"d\r\n                      MMM\r\n                      y\"\r\n                      }}</span>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-icon name=\"attach\" style=\"transform: rotate(45deg)\"></ion-icon>\r\n                    &nbsp;<span class=\"pro-text\">{{\r\n                      project.tasks_files_count\r\n                      }}</span>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <span class=\"custom-icon-chat-icon-1\"></span>\r\n                    &nbsp; <span class=\"pro-text\">{{\r\n                      project.comment_count\r\n                      }}</span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"editProject(project)\">Edit</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"deleteProject(i)\">Delete</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"createProject()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/project-list/project-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/project-list/project-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProjectListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListPageRoutingModule", function() { return ProjectListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-list.page */ "./src/app/project-list/project-list.page.ts");




const routes = [
    {
        path: '',
        component: _project_list_page__WEBPACK_IMPORTED_MODULE_3__["ProjectListPage"]
    }
];
let ProjectListPageRoutingModule = class ProjectListPageRoutingModule {
};
ProjectListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjectListPageRoutingModule);



/***/ }),

/***/ "./src/app/project-list/project-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/project-list/project-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListPageModule", function() { return ProjectListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-list-routing.module */ "./src/app/project-list/project-list-routing.module.ts");
/* harmony import */ var _project_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-list.page */ "./src/app/project-list/project-list.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");








let ProjectListPageModule = class ProjectListPageModule {
};
ProjectListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _project_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectListPageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ],
        declarations: [_project_list_page__WEBPACK_IMPORTED_MODULE_6__["ProjectListPage"]]
    })
], ProjectListPageModule);



/***/ }),

/***/ "./src/app/project-list/project-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/project-list/project-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.custom-icon-project-list-icon {\n  font-size: 25px;\n}\n\n.custom-icon-calendar-icon,\n.custom-icon-chat-icon-1 {\n  font-weight: bold;\n}\n\n.project-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 30px 10px 50px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.project-list .project-content {\n  padding: 10px 20px 10px 30px;\n}\n\n.project-name {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.pro-text {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.progress-div {\n  width: 80%;\n  background: #CBF4DB;\n  height: 70px;\n}\n\n.project-content {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 70px;\n}\n\n.sort-item {\n  width: 80px;\n  border-bottom: solid 1.5px #FE9C45;\n  margin: 10px;\n  padding: 0;\n  --padding-start: 0;\n  margin: 10px 0px 10px 50px;\n}\n\n.sort-item ion-label {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.sort-item span {\n  font-size: 18px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.timeline {\n  position: relative;\n  max-width: 100%;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 30px;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.container {\n  position: relative;\n  background-color: inherit;\n  padding: 5px 0px;\n}\n\n/* The circles on the timeline */\n\n.container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 42px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.project-content ion-col {\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.between.days-btn {\n  background: #fe9c45 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1saXN0L0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxccHJvamVjdC1saXN0XFxwcm9qZWN0LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9qZWN0LWxpc3QvcHJvamVjdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SUE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUN2SUo7O0FEMElBO0VBQ0ksZUFBQTtBQ3ZJSjs7QUQwSUE7O0VBRUksaUJBQUE7QUN2SUo7O0FEMElBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtEQUFBO0FDdklKOztBRDBJQTtFQUNJLDRCQUFBO0FDdklKOztBRDBJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDdklKOztBRDBJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDdklKOztBRDBJQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDdklKOztBRDBJQTtFQUNJLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUN2SUo7O0FEMElBO0VBQ0ksZUFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0FDdklKOztBRDBJQTtFQUNRLGtCQUFBO0VBQ0osZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3ZJSjs7QUQwSUEsNkNBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUN2SUo7O0FEMElBLDZCQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDdklKOztBRDBJQSxnQ0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDdklKOztBRDBJQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUN2SUo7O0FEMElBO0VBQ0kseUJBQUE7QUN2SUo7O0FEMElBO0VBQ0kseUJBQUE7QUN2SUo7O0FEMElBLG9DQUFBOztBQUNBO0VBQ0ksT0FBQTtBQ3ZJSjs7QUQwSUEsbUNBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDdklKOztBRDBJQSwrQ0FBQTs7QUFDQTs7RUFFSSxVQUFBO0FDdklKOztBRDBJQTtFQUNJLDhCQUFBO0FDdklKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1saXN0L3Byb2plY3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaG9saWRheS10aXRsZSB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1kYXRlIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1jYXJkIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWxpc3Qge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvamVjdC10YXNrIHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktbGlzdCBoNCB7XHJcbi8vICAgICBtYXJnaW46IDJweCAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbi8vICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9qZWN0LWRlYWRsaW5lLWRpdiB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1kYXlzLWRpdiB7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWRhdGUge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XHJcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuYmFyV3JhcHBlciB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4vLyAgICAgcGFkZGluZzogMCA1JTtcclxuLy8gfVxyXG5cclxuLy8gLnByb2dyZXNzIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbi8vICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuLy8gfVxyXG5cclxuLy8gLnByb2dyZXNzIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2VjZWNlODtcclxuLy8gICAgIGhlaWdodDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLmhhcy10aXA6YmVmb3JlIHtcclxuLy8gICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xyXG4vLyAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi8vICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbi8vICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbi8vICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDogMjlweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4vLyAgICAgbGVmdDogMTAwJTtcclxuLy8gICAgIGJvdHRvbTogNXB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDVweCAjMDAwO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4ICMwMDA7XHJcbi8vIH1cclxuXHJcbi8vIC5oYXMtdGlwOjphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgcmlnaHQ6IC0xMHB4O1xyXG4vLyAgICAgdG9wOiAtOXB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICB3aWR0aDogMDtcclxuLy8gICAgIGhlaWdodDogMDtcclxuLy8gICAgIGJvcmRlci10b3A6IHNvbGlkIDEwcHggI2ZmZmZmZjtcclxuLy8gICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxMHB4IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxMHB4IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaGVhZGVyLXRpdGxlIHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnbGF0by1SZWd1bGFyJztcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbi8vIH1cclxuXHJcbi8vIC5lbXBsb3llZS1mYWIge1xyXG4vLyAgICAgYm90dG9tOiAxLjUlICFpbXBvcnRhbnQ7XHJcbi8vICAgICByaWdodDogMiUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmVtcGxveWVlLWZhYkJ1dHRvbiB7XHJcbi8vICAgICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5lbXBsb3llZS1mYWJCdXR0b24gZmEtaWNvbiB7XHJcbi8vICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWZhYiB7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuLy8gICAgIHotaW5kZXg6IDk5OTtcclxuLy8gfVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gUHJvamVjdCBMaXN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLS0+XHJcbi5jb250ZW50LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1wcm9qZWN0LWxpc3QtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1jYWxlbmRhci1pY29uLFxyXG4uY3VzdG9tLWljb24tY2hhdC1pY29uLTEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNClcclxufVxyXG5cclxuLnByb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm8tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByb2dyZXNzLWRpdiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZDogI0NCRjREQjtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLnByb2plY3QtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLnNvcnQtaXRlbSB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEuNXB4ICNGRTlDNDU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDUwcHg7XHJcbn1cclxuXHJcbi5zb3J0LWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc29ydC1pdGVtIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZmFiLWFkZC1idG4ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4udGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA0MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNvbnRlbnQgaW9uLWNvbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG4uY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cclxuLmxlZnQge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbi50aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMzFweDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbi5sZWZ0OjphZnRlcixcclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uYmV0d2Vlbi5kYXlzLWJ0bntcclxuICAgIGJhY2tncm91bmQ6ICNmZTljNDUgIWltcG9ydGFudDtcclxufSIsIi5jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmN1c3RvbS1pY29uLXByb2plY3QtbGlzdC1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbixcbi5jdXN0b20taWNvbi1jaGF0LWljb24tMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvamVjdC1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA1MHB4O1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLnByb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMzBweDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9ncmVzcy1kaXYge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kOiAjQ0JGNERCO1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5wcm9qZWN0LWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLnNvcnQtaXRlbSB7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxLjVweCAjRkU5QzQ1O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDUwcHg7XG59XG5cbi5zb3J0LWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNvcnQtaXRlbSBzcGFuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZmFiLWFkZC1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xufVxuXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4udGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xuICB0b3A6IDMwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4ucHJvamVjdC1jb250ZW50IGlvbi1jb2wge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcbn1cblxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLnRpbWVsaW5lOjphZnRlciB7XG4gIGxlZnQ6IDMxcHg7XG59XG5cbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuLmxlZnQ6OmFmdGVyLFxuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbi5iZXR3ZWVuLmRheXMtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZlOWM0NSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/project-list/project-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/project-list/project-list.page.ts ***!
  \***************************************************/
/*! exports provided: ProjectListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListPage", function() { return ProjectListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_project_edit_project_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-project/edit-project.page */ "./src/app/edit-project/edit-project.page.ts");
/* harmony import */ var _create_project_create_project_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create-project/create-project.page */ "./src/app/create-project/create-project.page.ts");









let ProjectListPage = class ProjectListPage {
    constructor(dataService, util, apiService, referenceservice, navCtrl, events, modalController) {
        this.dataService = dataService;
        this.util = util;
        this.apiService = apiService;
        this.referenceservice = referenceservice;
        this.navCtrl = navCtrl;
        this.events = events;
        this.modalController = modalController;
        this.noData = false;
        this.time = 0;
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendar"];
        this.faPaperclip = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPaperclip"];
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faComments"];
        this.faFilter = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFilter"];
        this.bgColor = '3A57C4';
        this.pageNumber = 1;
        this.page = false;
        this.keywords = {};
        this.role = localStorage.getItem('role');
        this.roleId = localStorage.getItem('role_id');
        this.color = localStorage.getItem('colorCode');
        this.primaryColor = localStorage.getItem('primary_color');
        this.secondryColor = localStorage.getItem('secondry_color');
    }
    editProject(project) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_project_edit_project_page__WEBPACK_IMPORTED_MODULE_7__["EditProjectPage"],
                componentProps: { project: project },
                cssClass: 'custom-modal',
            });
            this.util.isModal = "blurPage";
            yield modal.present();
            yield modal.onWillDismiss().then(data => {
                console.log(data);
                this.util.isModal = "";
            });
        });
    }
    ngOnInit() {
        this.page = false;
        console.log(this.dataService.project_list);
        this.projectList = JSON.stringify(this.dataService.project_list);
        this.projectList = JSON.parse(this.projectList);
        this.projectList.forEach((value, key) => {
            value.time = this.time;
            this.time = this.time + 0.2;
            this.projectList[key].opentasks = value.tasks_open.length;
            this.projectList[key].completedtasks = value.tasks_completed.length;
        });
        this.applyClassBySelection('bounceInRight');
    }
    getHeaderStyle() {
        return { background: this.primaryColor };
    }
    openProject(project) {
        this.cssClass = '';
        this.navCtrl.navigateForward('/view-projects', { state: { 'project': project } });
    }
    ;
    createProject() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _create_project_create_project_page__WEBPACK_IMPORTED_MODULE_8__["CreateProjectPage"],
                cssClass: 'custom-modal',
            });
            this.util.isModal = "blurPage";
            yield modal.present();
            yield modal.onWillDismiss().then(data => {
                console.log(data);
                this.util.isModal = "";
            });
        });
    }
    getFontstyle() {
        return { color: this.secondryColor };
    }
    applyClassBySelection(effect) {
        this.cssClass = "animated " + effect;
    }
    deleteProject(project) {
        this.cssClass = '';
        this.referenceservice.deleteAlert("Confirm Delete", "Do you want to delete this project").then(res => {
            console.log(res);
            this.onDeleteConfirm(project);
        });
    }
    onDeleteConfirm(project) {
        let element = document.getElementById(project);
        element.classList.add('animated', 'rollOut', 'slow');
        element.addEventListener('animationend', (e => {
            this.projectList.splice(project, 1);
            this.util.showAlert('Smart HR', 'Project Removed successfully');
        }));
    }
    getProgresstyle() {
        return {
            background: "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")",
            height: '10px'
        };
    }
};
ProjectListPage.ctorParameters = () => [
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
ProjectListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-list',
        template: __webpack_require__(/*! raw-loader!./project-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/project-list/project-list.page.html"),
        styles: [__webpack_require__(/*! ./project-list.page.scss */ "./src/app/project-list/project-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"], _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], ProjectListPage);



/***/ })

}]);
//# sourceMappingURL=project-list-project-list-module-es2015.js.map