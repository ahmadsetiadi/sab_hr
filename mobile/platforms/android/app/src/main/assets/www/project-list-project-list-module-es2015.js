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

module.exports = ".content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.custom-icon-project-list-icon {\n  font-size: 25px;\n}\n\n.custom-icon-calendar-icon,\n.custom-icon-chat-icon-1 {\n  font-weight: bold;\n}\n\n.project-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 30px 10px 50px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.project-list .project-content {\n  padding: 10px 20px 10px 30px;\n}\n\n.project-name {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.pro-text {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.progress-div {\n  width: 80%;\n  background: #CBF4DB;\n  height: 70px;\n}\n\n.project-content {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 70px;\n}\n\n.sort-item {\n  width: 80px;\n  border-bottom: solid 1.5px #FE9C45;\n  margin: 10px;\n  padding: 0;\n  --padding-start: 0;\n  margin: 10px 0px 10px 50px;\n}\n\n.sort-item ion-label {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.sort-item span {\n  font-size: 18px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.timeline {\n  position: relative;\n  max-width: 100%;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 30px;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.container {\n  position: relative;\n  background-color: inherit;\n  padding: 5px 0px;\n}\n\n/* The circles on the timeline */\n\n.container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 42px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.project-content ion-col {\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.between.days-btn {\n  background: #fe9c45 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1saXN0L0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXHByb2plY3QtbGlzdFxccHJvamVjdC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1saXN0L3Byb2plY3QtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0lBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUN2SUo7O0FEMElBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDdklKOztBRDBJQTtFQUNJLGVBQUE7QUN2SUo7O0FEMElBOztFQUVJLGlCQUFBO0FDdklKOztBRDBJQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrREFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSw0QkFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUN2SUo7O0FEMElBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUN2SUo7O0FEMElBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUN2SUo7O0FEMElBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDdklKOztBRDBJQTtFQUNJLGVBQUE7QUN2SUo7O0FEMElBO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQ3ZJSjs7QUQwSUE7RUFDUSxrQkFBQTtFQUNKLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUN2SUo7O0FEMElBLDZDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDdklKOztBRDBJQSw2QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ3ZJSjs7QUQwSUEsZ0NBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDdklKOztBRDBJQTtFQUNJLHlCQUFBO0FDdklKOztBRDBJQTtFQUNJLHlCQUFBO0FDdklKOztBRDBJQSxvQ0FBQTs7QUFDQTtFQUNJLE9BQUE7QUN2SUo7O0FEMElBLG1DQUFBOztBQUNBO0VBQ0ksVUFBQTtBQ3ZJSjs7QUQwSUEsK0NBQUE7O0FBQ0E7O0VBRUksVUFBQTtBQ3ZJSjs7QUQwSUE7RUFDSSw4QkFBQTtBQ3ZJSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtbGlzdC9wcm9qZWN0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmhvbGlkYXktdGl0bGUge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktZGF0ZSB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktY2FyZCB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1saXN0IHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcclxuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuLy8gICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2plY3QtdGFzayB7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuLy8gICAgIG1heC13aWR0aDogMTAwJTtcclxuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWxpc3QgaDQge1xyXG4vLyAgICAgbWFyZ2luOiAycHggMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4vLyAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvamVjdC1kZWFkbGluZS1kaXYge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktZGF5cy1kaXYge1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1kYXRlIHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xyXG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICM4ZThlOTMgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmJhcldyYXBwZXIge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgNSU7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9ncmVzcyB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4vLyAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9ncmVzcyB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNlY2VjZTg7XHJcbi8vICAgICBoZWlnaHQ6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5oYXMtdGlwOmJlZm9yZSB7XHJcbi8vICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGlwKTtcclxuLy8gICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4vLyAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4vLyAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4vLyAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgd2lkdGg6IDI5cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuLy8gICAgIGxlZnQ6IDEwMCU7XHJcbi8vICAgICBib3R0b206IDVweDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA1cHggIzAwMDtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAjMDAwO1xyXG4vLyB9XHJcblxyXG4vLyAuaGFzLXRpcDo6YWZ0ZXIge1xyXG4vLyAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiAtMTBweDtcclxuLy8gICAgIHRvcDogLTlweDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgICAgd2lkdGg6IDA7XHJcbi8vICAgICBoZWlnaHQ6IDA7XHJcbi8vICAgICBib3JkZXItdG9wOiBzb2xpZCAxMHB4ICNmZmZmZmY7XHJcbi8vICAgICBib3JkZXItbGVmdDogc29saWQgMTBweCB0cmFuc3BhcmVudDtcclxuLy8gICAgIGJvcmRlci1yaWdodDogc29saWQgMTBweCB0cmFuc3BhcmVudDtcclxuLy8gfVxyXG5cclxuLy8gLmhlYWRlci10aXRsZSB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LWZhbWlseTogJ2xhdG8tUmVndWxhcic7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogMzAwO1xyXG4vLyB9XHJcblxyXG4vLyAuZW1wbG95ZWUtZmFiIHtcclxuLy8gICAgIGJvdHRvbTogMS41JSAhaW1wb3J0YW50O1xyXG4vLyAgICAgcmlnaHQ6IDIlICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5lbXBsb3llZS1mYWJCdXR0b24ge1xyXG4vLyAgICAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZW1wbG95ZWUtZmFiQnV0dG9uIGZhLWljb24ge1xyXG4vLyAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1mYWIge1xyXG4vLyAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbi8vICAgICB6LWluZGV4OiA5OTk7XHJcbi8vIH1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFByb2plY3QgTGlzdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC0tPlxyXG4uY29udGVudC1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tcHJvamVjdC1saXN0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbixcclxuLmN1c3RvbS1pY29uLWNoYXQtaWNvbi0xIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggNTBweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpXHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAzMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1kaXYge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQ6ICNDQkY0REI7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5zb3J0LWl0ZW0ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxLjVweCAjRkU5QzQ1O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCA1MHB4O1xyXG59XHJcblxyXG4uc29ydC1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNvcnQtaXRlbSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59XHJcblxyXG4udGltZWxpbmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLnRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcbi5jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHRvcDogNDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250ZW50IGlvbi1jb2wge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxufVxyXG5cclxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4uY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcbi5sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4udGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4ubGVmdDo6YWZ0ZXIsXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLmJldHdlZW4uZGF5cy1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmU5YzQ1ICFpbXBvcnRhbnQ7XHJcbn0iLCIuY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5jdXN0b20taWNvbi1wcm9qZWN0LWxpc3QtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmN1c3RvbS1pY29uLWNhbGVuZGFyLWljb24sXG4uY3VzdG9tLWljb24tY2hhdC1pY29uLTEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2plY3QtbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAzMHB4IDEwcHggNTBweDtcbiAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG5cbi5wcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDMwcHg7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZ3Jlc3MtZGl2IHtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZDogI0NCRjREQjtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4ucHJvamVjdC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5zb3J0LWl0ZW0ge1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMS41cHggI0ZFOUM0NTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA1MHB4O1xufVxuXG4uc29ydC1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zb3J0LWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZhYi1hZGQtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cblxuLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLnRpbWVsaW5lOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcbiAgdG9wOiAzMHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLnByb2plY3QtY29udGVudCBpb24tY29sIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XG59XG5cbi5jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi50aW1lbGluZTo6YWZ0ZXIge1xuICBsZWZ0OiAzMXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlcixcbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uYmV0d2Vlbi5kYXlzLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmZTljNDUgIWltcG9ydGFudDtcbn0iXX0= */"

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