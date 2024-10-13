(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["designations-designations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/designations/designations.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/designations/designations.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"util.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Designations</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <!-- ========================== Departments List ===================================== -->\r\n  <div class=\"empty-div\">\r\n    <ion-item lines=\"none\">\r\n      <span slot=\"start\" class=\"head-title\">List of Designations</span> <span slot=\"end\"\r\n        class=\"custom-icon-list-of-designations\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"content-div\">\r\n    <div class=\"design-timeline\">\r\n      <div class=\"design-container left\">\r\n        <ion-list class=\"design-list\">\r\n          <div class=\"design-content\">\r\n            <div>\r\n              <ion-label class=\"design-name\">Android Developer</ion-label>\r\n            </div>\r\n            <span>Application Development</span>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"design-container left\">\r\n        <ion-list class=\"design-list\">\r\n          <div class=\"design-content\">\r\n            <div>\r\n              <ion-label class=\"design-name\">Android Developer</ion-label>\r\n            </div>\r\n            <span>Application Development</span>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"design-container left\">\r\n        <ion-list class=\"design-list\">\r\n          <div class=\"design-content\">\r\n            <div>\r\n              <ion-label class=\"design-name\">Android Developer</ion-label>\r\n            </div>\r\n            <span>Application Development</span>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"design-container left\">\r\n        <ion-list class=\"design-list\">\r\n          <div class=\"design-content\">\r\n            <div>\r\n              <ion-label class=\"design-name\">Android Developer</ion-label>\r\n            </div>\r\n            <span>Application Development</span>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"design-container left\">\r\n        <ion-list class=\"design-list\">\r\n          <div class=\"design-content\">\r\n            <div>\r\n              <ion-label class=\"design-name\">Android Developer</ion-label>\r\n            </div>\r\n            <span>Application Development</span>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"design-container left\">\r\n        <ion-list class=\"design-list\">\r\n          <div class=\"design-content\">\r\n            <div>\r\n              <ion-label class=\"design-name\">Android Developer</ion-label>\r\n            </div>\r\n            <span>Application Development</span>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/designations/designations-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/designations/designations-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DesignationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationsPageRoutingModule", function() { return DesignationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _designations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./designations.page */ "./src/app/designations/designations.page.ts");




const routes = [
    {
        path: '',
        component: _designations_page__WEBPACK_IMPORTED_MODULE_3__["DesignationsPage"]
    }
];
let DesignationsPageRoutingModule = class DesignationsPageRoutingModule {
};
DesignationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DesignationsPageRoutingModule);



/***/ }),

/***/ "./src/app/designations/designations.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/designations/designations.module.ts ***!
  \*****************************************************/
/*! exports provided: DesignationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationsPageModule", function() { return DesignationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _designations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./designations-routing.module */ "./src/app/designations/designations-routing.module.ts");
/* harmony import */ var _designations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./designations.page */ "./src/app/designations/designations.page.ts");







let DesignationsPageModule = class DesignationsPageModule {
};
DesignationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _designations_routing_module__WEBPACK_IMPORTED_MODULE_5__["DesignationsPageRoutingModule"]
        ],
        declarations: [_designations_page__WEBPACK_IMPORTED_MODULE_6__["DesignationsPage"]]
    })
], DesignationsPageModule);



/***/ }),

/***/ "./src/app/designations/designations.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/designations/designations.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  /* min-height: calc(100vh - 20%); */\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.custom-icon-list-of-designations {\n  font-size: 35px;\n}\n\n.design-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 30px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.design-list .design-content {\n  padding: 10px 0px 10px 30px;\n}\n\n.design-content {\n  top: 0;\n  width: 100%;\n}\n\n.design-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.design-name {\n  font-weight: bold;\n  margin-bottom: -5px;\n}\n\n.design-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.design-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.design-container {\n  position: relative;\n  background-color: inherit;\n  padding: 5px 0px;\n}\n\n/* The circles on the timeline */\n\n.design-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 40px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.design-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.design-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.design-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\nion-fab {\n  position: fixed !important;\n  z-index: 999;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduYXRpb25zL0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcZGVzaWduYXRpb25zXFxkZXNpZ25hdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9kZXNpZ25hdGlvbnMvZGVzaWduYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNHLGdCQUFBO0VBQ0MsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtEQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtBQ0FKOztBREdBO0VBQ0ksTUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQVI7O0FESUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNESjs7QURJQSw2Q0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0RKOztBRElBLDZCQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUEsZ0NBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0FDREo7O0FESUEsb0NBQUE7O0FBQ0E7RUFDSSxPQUFBO0FDREo7O0FESUEsbUNBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDREo7O0FESUEsK0NBQUE7O0FBQ0E7O0VBRUksVUFBQTtBQ0RKOztBREtBO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9kZXNpZ25hdGlvbnMvZGVzaWduYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IERlc2lnbmF0aW9ucyBMaXN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLS0+XHJcbi5jb250ZW50LWRpdiB7XHJcbiAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAlKTsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tbGlzdC1vZi1kZXNpZ25hdGlvbnMge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4uZGVzaWduLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA0NXB4O1xyXG4gICAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNClcclxufVxyXG5cclxuLmRlc2lnbi1saXN0IC5kZXNpZ24tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5kZXNpZ24tY29udGVudCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXNpZ24tbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbn1cclxuXHJcbi5kZXNpZ24tdGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRvcDogMzBweDtcclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4uZGVzaWduLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cclxuLmRlc2lnbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG4uZGVzaWduLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5kZXNpZ24tY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5kZXNpZ24tY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcbi5sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4uZGVzaWduLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG59XHJcblxyXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuLmxlZnQ6OmFmdGVyLFxyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5pb24tZmFiIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uZmFiLWFkZC1idG4ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCIuY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAlKTsgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uY3VzdG9tLWljb24tbGlzdC1vZi1kZXNpZ25hdGlvbnMge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5kZXNpZ24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAzMHB4IDEwcHggNDVweDtcbiAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG5cbi5kZXNpZ24tbGlzdCAuZGVzaWduLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDMwcHg7XG59XG5cbi5kZXNpZ24tY29udGVudCB7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGVzaWduLWNvbnRlbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5NDk0OTQ7XG59XG5cbi5kZXNpZ24tbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xufVxuXG4uZGVzaWduLXRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogMzBweDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLmRlc2lnbi10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmRlc2lnbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLmRlc2lnbi1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmRlc2lnbi1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uZGVzaWduLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLmRlc2lnbi10aW1lbGluZTo6YWZ0ZXIge1xuICBsZWZ0OiAzMXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlcixcbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAxNXB4O1xufVxuXG5pb24tZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmZhYi1hZGQtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/designations/designations.page.ts":
/*!***************************************************!*\
  !*** ./src/app/designations/designations.page.ts ***!
  \***************************************************/
/*! exports provided: DesignationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationsPage", function() { return DesignationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _add_designation_add_designation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-designation/add-designation.page */ "./src/app/add-designation/add-designation.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let DesignationsPage = class DesignationsPage {
    constructor(util, modalController) {
        this.util = util;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    // async add() {
    //   const modal = await this.modalController.create({
    //     component: ,
    //     cssClass: 'custom-modal',
    //   });
    //   this.util.isModal = "blurPage";
    //   await modal.present();
    //   await modal.onWillDismiss().then(data => {
    //     console.log(data);
    //     this.util.isModal = "";
    //   })
    // }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_designation_add_designation_page__WEBPACK_IMPORTED_MODULE_3__["AddDesignationPage"],
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
DesignationsPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DesignationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-designations',
        template: __webpack_require__(/*! raw-loader!./designations.page.html */ "./node_modules/raw-loader/index.js!./src/app/designations/designations.page.html"),
        styles: [__webpack_require__(/*! ./designations.page.scss */ "./src/app/designations/designations.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], DesignationsPage);



/***/ })

}]);
//# sourceMappingURL=designations-designations-module-es2015.js.map