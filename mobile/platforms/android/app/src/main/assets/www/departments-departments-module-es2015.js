(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["departments-departments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/departments/departments.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/departments/departments.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"util.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Departments</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <!-- ========================== Departments List ===================================== -->\r\n  <div class=\"empty-div\">\r\n    <ion-item lines=\"none\">\r\n      <span slot=\"start\" class=\"head-title\">List of Departments</span> <span slot=\"end\"\r\n        class=\"custom-icon-list-of-departments\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"content-div\">\r\n    <div class=\"dept-timeline\">\r\n      <div class=\"dept-container left\">\r\n        <ion-list class=\"dept-list\">\r\n          <div class=\"dept-content\">\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"dept-name\">Hybrid</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"dept-container left\">\r\n        <ion-list class=\"dept-list\">\r\n          <div class=\"dept-content\">\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"dept-name\">Administration</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"dept-container left\">\r\n        <ion-list class=\"dept-list\">\r\n          <div class=\"dept-content\">\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"dept-name\">Accounts Department</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"dept-container left\">\r\n        <ion-list class=\"dept-list\">\r\n          <div class=\"dept-content\">\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"dept-name\">Business Development</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/departments/departments-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/departments/departments-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DepartmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsPageRoutingModule", function() { return DepartmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _departments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./departments.page */ "./src/app/departments/departments.page.ts");




const routes = [
    {
        path: '',
        component: _departments_page__WEBPACK_IMPORTED_MODULE_3__["DepartmentsPage"]
    }
];
let DepartmentsPageRoutingModule = class DepartmentsPageRoutingModule {
};
DepartmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DepartmentsPageRoutingModule);



/***/ }),

/***/ "./src/app/departments/departments.module.ts":
/*!***************************************************!*\
  !*** ./src/app/departments/departments.module.ts ***!
  \***************************************************/
/*! exports provided: DepartmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsPageModule", function() { return DepartmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _departments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departments-routing.module */ "./src/app/departments/departments-routing.module.ts");
/* harmony import */ var _departments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./departments.page */ "./src/app/departments/departments.page.ts");







let DepartmentsPageModule = class DepartmentsPageModule {
};
DepartmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _departments_routing_module__WEBPACK_IMPORTED_MODULE_5__["DepartmentsPageRoutingModule"]
        ],
        declarations: [_departments_page__WEBPACK_IMPORTED_MODULE_6__["DepartmentsPage"]]
    })
], DepartmentsPageModule);



/***/ }),

/***/ "./src/app/departments/departments.page.scss":
/*!***************************************************!*\
  !*** ./src/app/departments/departments.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.custom-icon-list-of-departments {\n  font-size: 35px;\n}\n\n.dept-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 30px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.dept-list .dept-content {\n  padding-left: 30px;\n}\n\n.dept-content {\n  top: 0;\n  width: 100%;\n}\n\n.dept-content ion-item {\n  --padding-start: 0;\n}\n\n.dept-name {\n  font-weight: bold;\n}\n\n.dept-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.dept-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.dept-container {\n  position: relative;\n  background-color: inherit;\n  padding: 5px 0px;\n}\n\n/* The circles on the timeline */\n\n.dept-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 32px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.dept-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.dept-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.dept-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\nion-fab {\n  position: fixed !important;\n  z-index: 999;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudHMvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcZGVwYXJ0bWVudHNcXGRlcGFydG1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ08sZ0JBQUE7RUFDSCxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtEQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksTUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFSTtFQUNJLGtCQUFBO0FDQVI7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0Usa0JBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDREo7O0FESUEsNkNBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNESjs7QURJQSw2QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBLGdDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtBQ0RKOztBRElBLG9DQUFBOztBQUNBO0VBQ0ksT0FBQTtBQ0RKOztBRElBLG1DQUFBOztBQUNBO0VBQ0ksVUFBQTtBQ0RKOztBRElBLCtDQUFBOztBQUNBOztFQUVJLFVBQUE7QUNESjs7QURLQTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gRGVwYXJ0bWVudHMgTGlzdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC0tPlxyXG4uY29udGVudC1kaXYge1xyXG4gICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tbGlzdC1vZi1kZXBhcnRtZW50cyB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5kZXB0LWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA0NXB4O1xyXG4gICAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNClcclxufVxyXG5cclxuLmRlcHQtbGlzdCAuZGVwdC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmRlcHQtY29udGVudCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGVwdC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGVwdC10aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRvcDogMzBweDtcclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4uZGVwdC10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5kZXB0LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcbi5kZXB0LWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5kZXB0LWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4uZGVwdC1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cclxuLmxlZnQge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbi5kZXB0LXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG59XHJcblxyXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuLmxlZnQ6OmFmdGVyLFxyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5pb24tZmFiIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uZmFiLWFkZC1idG4ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCIuY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5jdXN0b20taWNvbi1saXN0LW9mLWRlcGFydG1lbnRzIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uZGVwdC1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA0NXB4O1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLmRlcHQtbGlzdCAuZGVwdC1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZGVwdC1jb250ZW50IHtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXB0LWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbi5kZXB0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlcHQtdGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAzMHB4O1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4uZGVwdC10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmRlcHQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5kZXB0LWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uZGVwdC1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uZGVwdC1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi5kZXB0LXRpbWVsaW5lOjphZnRlciB7XG4gIGxlZnQ6IDMxcHg7XG59XG5cbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuLmxlZnQ6OmFmdGVyLFxuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbmlvbi1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uZmFiLWFkZC1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/departments/departments.page.ts":
/*!*************************************************!*\
  !*** ./src/app/departments/departments.page.ts ***!
  \*************************************************/
/*! exports provided: DepartmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsPage", function() { return DepartmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _add_department_add_department_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-department/add-department.page */ "./src/app/add-department/add-department.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let DepartmentsPage = class DepartmentsPage {
    constructor(util, modalController) {
        this.util = util;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_department_add_department_page__WEBPACK_IMPORTED_MODULE_3__["AddDepartmentPage"],
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
};
DepartmentsPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DepartmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-departments',
        template: __webpack_require__(/*! raw-loader!./departments.page.html */ "./node_modules/raw-loader/index.js!./src/app/departments/departments.page.html"),
        styles: [__webpack_require__(/*! ./departments.page.scss */ "./src/app/departments/departments.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], DepartmentsPage);



/***/ })

}]);
//# sourceMappingURL=departments-departments-module-es2015.js.map