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

module.exports = ".content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  /* min-height: calc(100vh - 20%); */\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.custom-icon-list-of-designations {\n  font-size: 35px;\n}\n\n.design-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 30px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.design-list .design-content {\n  padding: 10px 0px 10px 30px;\n}\n\n.design-content {\n  top: 0;\n  width: 100%;\n}\n\n.design-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.design-name {\n  font-weight: bold;\n  margin-bottom: -5px;\n}\n\n.design-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.design-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.design-container {\n  position: relative;\n  background-color: inherit;\n  padding: 5px 0px;\n}\n\n/* The circles on the timeline */\n\n.design-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 40px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.design-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.design-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.design-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\nion-fab {\n  position: fixed !important;\n  z-index: 999;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduYXRpb25zL0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXGRlc2lnbmF0aW9uc1xcZGVzaWduYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVzaWduYXRpb25zL2Rlc2lnbmF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRyxnQkFBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrREFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7QUNBSjs7QURHQTtFQUNJLE1BQUE7RUFDQSxXQUFBO0FDQUo7O0FERUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0FSOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDREo7O0FESUEsNkNBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNESjs7QURJQSw2QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBLGdDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtBQ0RKOztBRElBLG9DQUFBOztBQUNBO0VBQ0ksT0FBQTtBQ0RKOztBRElBLG1DQUFBOztBQUNBO0VBQ0ksVUFBQTtBQ0RKOztBRElBLCtDQUFBOztBQUNBOztFQUVJLFVBQUE7QUNESjs7QURLQTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduYXRpb25zL2Rlc2lnbmF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBEZXNpZ25hdGlvbnMgTGlzdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC0tPlxyXG4uY29udGVudC1kaXYge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwJSk7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWxpc3Qtb2YtZGVzaWduYXRpb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuLmRlc2lnbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggNDVweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpXHJcbn1cclxuXHJcbi5kZXNpZ24tbGlzdCAuZGVzaWduLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAzMHB4O1xyXG59XHJcblxyXG4uZGVzaWduLWNvbnRlbnQge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGVzaWduLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xyXG59XHJcblxyXG4uZGVzaWduLXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDMwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLmRlc2lnbi10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5kZXNpZ24tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLmRlc2lnbi1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4uZGVzaWduLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4uZGVzaWduLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLmRlc2lnbi10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMzFweDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbi5sZWZ0OjphZnRlcixcclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5cclxuaW9uLWZhYiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59IiwiLmNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwJSk7ICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmN1c3RvbS1pY29uLWxpc3Qtb2YtZGVzaWduYXRpb25zIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uZGVzaWduLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDQ1cHg7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuXG4uZGVzaWduLWxpc3QgLmRlc2lnbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAzMHB4O1xufVxuXG4uZGVzaWduLWNvbnRlbnQge1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRlc2lnbi1jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTQ5NDk0O1xufVxuXG4uZGVzaWduLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbn1cblxuLmRlc2lnbi10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDMwcHg7XG59XG5cbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cbi5kZXNpZ24tdGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5kZXNpZ24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi5kZXNpZ24tY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5kZXNpZ24tY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcbn1cblxuLmRlc2lnbi1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi5kZXNpZ24tdGltZWxpbmU6OmFmdGVyIHtcbiAgbGVmdDogMzFweDtcbn1cblxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXG4ubGVmdDo6YWZ0ZXIsXG4ucmlnaHQ6OmFmdGVyIHtcbiAgbGVmdDogMTVweDtcbn1cblxuaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5mYWItYWRkLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

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