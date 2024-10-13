(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walkthrough-walkthrough-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/walkthrough/walkthrough.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/walkthrough/walkthrough.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"profile-card-div\">\r\n    <ion-card class=\"home-card\">\r\n      <div class=\"home-header\">\r\n        <img src=\"{{blackLogo}}\" class=\"whiteLogo slide-in\">\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"home-data-card\">\r\n    <ion-slides #slides (ionSlideDidChange)=\"slideChanged($event)\">\r\n      <ion-slide>\r\n        <div class=\"slide-zoom\">\r\n          <div class=\"walkthrough-title\">Welcome to DHR</div>\r\n          <div class=\"walkthrough-img\">\r\n            <span class=\"custom-icon-intro-dhr\">\r\n              <span class=\"path1\"></span>\r\n              <span class=\"path2\"></span>\r\n              <span class=\"path3\"></span>\r\n            </span>\r\n          </div>\r\n          <div class=\"walkthrough-text\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n          </div>\r\n          <ion-button class=\"loginButton\" expand=\"block\" (click)=\"getStarted()\">get started </ion-button>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <div class=\"slide-zoom\">\r\n          <div class=\"walkthrough-title\">Chat</div>\r\n          <div class=\"walkthrough-img\">\r\n            <span class=\"custom-icon-intro-chat\">\r\n              <span class=\"path1\"></span>\r\n              <span class=\"path2\"></span>\r\n              <span class=\"path3\"></span>\r\n              <span class=\"path4\"></span>\r\n              <span class=\"path5\"></span>\r\n              <span class=\"path6\"></span>\r\n              <span class=\"path7\"></span>\r\n            </span>\r\n          </div>\r\n          <div class=\"walkthrough-text\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n          </div>\r\n          <ion-button class=\"loginButton\" expand=\"block\" (click)=\"getStarted()\">get started </ion-button>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <div class=\"slide-zoom\">\r\n          <div class=\"walkthrough-title\">Projects and Tasks</div>\r\n          <div class=\"walkthrough-img\">\r\n            <span class=\"custom-icon-intro-tasks\">\r\n              <span class=\"path1\"></span>\r\n              <span class=\"path2\"></span>\r\n              <span class=\"path3\"></span>\r\n              <span class=\"path4\"></span>\r\n              <span class=\"path5\"></span>\r\n              <span class=\"path6\"></span>\r\n              <span class=\"path7\"></span>\r\n              <span class=\"path8\"></span>\r\n              <span class=\"path9\"></span>\r\n              <span class=\"path10\"></span>\r\n              <span class=\"path11\"></span>\r\n            </span>\r\n          </div>\r\n          <div class=\"walkthrough-text\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n          </div>\r\n          <ion-button class=\"loginButton\" expand=\"block\" (click)=\"getStarted()\">get started </ion-button>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <ion-row class=\"pager\">\r\n    <ion-col size=\"4\">\r\n      <span style=\"color: #9c9292;\" (click)=\"previousSlide()\">Previous</span>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <span *ngFor=\"let slide of slides1; let i=index\" class=\"slide\" [ngClass]=\"getClass(i)\"></span>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <span style=\"color: #fe9c45;\" *ngIf=\"!slides1[2]\" (click)=\"nextSlide()\">Next</span>\r\n      <span style=\"color:#fe9c45;\" *ngIf=\"slides1[2]\" (click)=\"getStarted()\">Finish</span>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/walkthrough/walkthrough-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/walkthrough/walkthrough-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WalkthroughPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageRoutingModule", function() { return WalkthroughPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/walkthrough/walkthrough.page.ts");




const routes = [
    {
        path: '',
        component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__["WalkthroughPage"]
    }
];
let WalkthroughPageRoutingModule = class WalkthroughPageRoutingModule {
};
WalkthroughPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalkthroughPageRoutingModule);



/***/ }),

/***/ "./src/app/walkthrough/walkthrough.module.ts":
/*!***************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.module.ts ***!
  \***************************************************/
/*! exports provided: WalkthroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough-routing.module */ "./src/app/walkthrough/walkthrough-routing.module.ts");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/walkthrough/walkthrough.page.ts");







let WalkthroughPageModule = class WalkthroughPageModule {
};
WalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPageRoutingModule"]
        ],
        declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]]
    })
], WalkthroughPageModule);



/***/ }),

/***/ "./src/app/walkthrough/walkthrough.page.scss":
/*!***************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-zoom {\n  text-align: center;\n  display: block;\n  width: 100%;\n  min-height: 370px;\n  width: 270px;\n  border-radius: 25px;\n  margin-right: 25px;\n  margin-left: 25px;\n  background: white;\n  box-shadow: -1px 7px 16px 6px rgba(210, 208, 207, 0.9607843137);\n}\n\n.walkthrough-img {\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\n.walkthrough-text {\n  color: #212121;\n  font-size: 12px;\n  padding: 0 15px;\n}\n\n.walkthrough-img img {\n  display: inline-block;\n  height: 100px;\n  width: auto;\n}\n\nion-slides {\n  height: 85% !important;\n}\n\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0;\n  position: relative;\n  z-index: 1;\n  display: -webkit-box;\n  display: flex;\n  overflow: inherit;\n  width: 100%;\n  top: -30px;\n  position: relative;\n}\n\n.walkthrough-title {\n  text-transform: uppercase;\n  font-size: 20px;\n  margin: 20px 0;\n}\n\n.loginButton {\n  border-radius: 5px;\n  height: 45px;\n  font-size: 16px;\n  margin: 20px;\n}\n\n.custom-icon-intro-dhr,\n.custom-icon-intro-chat,\n.custom-icon-intro-tasks {\n  font-size: 100px;\n}\n\n.custom-icon-intro-dhr span,\n.custom-icon-intro-chat span,\n.custom-icon-intro-tasks span {\n  font-family: \"newhrms\" !important;\n}\n\n.home-data-card {\n  position: relative;\n  top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #0A15D5;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n  padding-top: 50px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.slide1-activated,\n.slide2-activated,\n.slide3-activated {\n  width: 40px !important;\n  background: #fe9c45 !important;\n}\n\n.slide {\n  height: 8px;\n  width: 8px;\n  content: \" \";\n  background: #9c9292;\n  margin: 4px;\n  border-radius: 50px;\n  display: inline-block;\n}\n\n.pager {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsa3Rocm91Z2gvRDpcXHNpbmFyXFxhcHAyL3NyY1xcYXBwXFx3YWxrdGhyb3VnaFxcd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic3JjL2FwcC93YWxrdGhyb3VnaC93YWxrdGhyb3VnaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrREFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7OztFQUdJLGdCQUFBO0FDQ0o7O0FEQ0k7OztFQUNJLGlDQUFBO0FDR1I7O0FERUE7RUFDSSxrQkFBQTtFQUNELFVBQUE7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7OztFQUdJLHNCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLXpvb20ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM3MHB4O1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDdweCAxNnB4IDZweCByZ2JhKDIxMCwgMjA4LCAyMDcsIDAuOTYwNzg0MzEzNzI1NDkwMik7XHJcbn1cclxuXHJcbi53YWxrdGhyb3VnaC1pbWcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi53YWxrdGhyb3VnaC10ZXh0IHtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4ud2Fsa3Rocm91Z2gtaW1nIGltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiA4NSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLndhbGt0aHJvdWdoLXRpdGxlIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLmxvZ2luQnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWludHJvLWRocixcclxuLmN1c3RvbS1pY29uLWludHJvLWNoYXQsXHJcbi5jdXN0b20taWNvbi1pbnRyby10YXNrcyB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmhvbWUtZGF0YS1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgdG9wOiAtNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uaG9tZS1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxNDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uc2xpZGUxLWFjdGl2YXRlZCxcclxuLnNsaWRlMi1hY3RpdmF0ZWQsXHJcbi5zbGlkZTMtYWN0aXZhdGVkIHtcclxuICAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmU5YzQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOWM5MjkyO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGFnZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbn0iLCIuc2xpZGUtem9vbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzNzBweDtcbiAgd2lkdGg6IDI3MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTZweCA2cHggcmdiYSgyMTAsIDIwOCwgMjA3LCAwLjk2MDc4NDMxMzcpO1xufVxuXG4ud2Fsa3Rocm91Z2gtaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLndhbGt0aHJvdWdoLXRleHQge1xuICBjb2xvcjogIzIxMjEyMTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi53YWxrdGhyb3VnaC1pbWcgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogODUlICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLndhbGt0aHJvdWdoLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmxvZ2luQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uY3VzdG9tLWljb24taW50cm8tZGhyLFxuLmN1c3RvbS1pY29uLWludHJvLWNoYXQsXG4uY3VzdG9tLWljb24taW50cm8tdGFza3Mge1xuICBmb250LXNpemU6IDEwMHB4O1xufVxuLmN1c3RvbS1pY29uLWludHJvLWRociBzcGFuLFxuLmN1c3RvbS1pY29uLWludHJvLWNoYXQgc3Bhbixcbi5jdXN0b20taWNvbi1pbnRyby10YXNrcyBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwibmV3aHJtc1wiICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWRhdGEtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZS1jYXJkLWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWNhcmQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zbGlkZTEtYWN0aXZhdGVkLFxuLnNsaWRlMi1hY3RpdmF0ZWQsXG4uc2xpZGUzLWFjdGl2YXRlZCB7XG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZTljNDUgIWltcG9ydGFudDtcbn1cblxuLnNsaWRlIHtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjOWM5MjkyO1xuICBtYXJnaW46IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGFnZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/walkthrough/walkthrough.page.ts":
/*!*************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.page.ts ***!
  \*************************************************/
/*! exports provided: WalkthroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function() { return WalkthroughPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let WalkthroughPage = class WalkthroughPage {
    constructor(navContrl) {
        this.navContrl = navContrl;
        this.slides1 = [true, false, false];
        this.blackLogo = "assets/imgs/Logo-new.png";
    }
    ngOnInit() {
    }
    getStarted() {
        this.navContrl.navigateRoot("/home");
    }
    getClass(i) {
        return this.slides1[i] ? 'slide' + (i + 1) + '-activated' : '';
    }
    slideChanged(e) {
        this.slides.getActiveIndex().then((index) => {
            console.log(index);
            this.slides1 = [false, false, false];
            this.slides1[index] = true;
        });
    }
    previousSlide() {
        (!this.slides1[0]) ? this.slides.slidePrev() : '';
    }
    nextSlide() {
        this.slides.slideNext();
    }
};
WalkthroughPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], WalkthroughPage.prototype, "slides", void 0);
WalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walkthrough',
        template: __webpack_require__(/*! raw-loader!./walkthrough.page.html */ "./node_modules/raw-loader/index.js!./src/app/walkthrough/walkthrough.page.html"),
        styles: [__webpack_require__(/*! ./walkthrough.page.scss */ "./src/app/walkthrough/walkthrough.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], WalkthroughPage);



/***/ })

}]);
//# sourceMappingURL=walkthrough-walkthrough-module-es2015.js.map