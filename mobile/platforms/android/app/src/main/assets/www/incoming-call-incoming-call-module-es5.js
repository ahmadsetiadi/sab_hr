(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incoming-call-incoming-call-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/incoming-call/incoming-call.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/incoming-call/incoming-call.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"voice-call-content\">\r\n  <ion-card class=\"voicecallcard card card-md\">\r\n    <div class=\"voiceImg1\">\r\n      <div class=\"voiceImg2\">\r\n        <div class=\"voiceImg\"><span class=\"custom-icon-user-placeholder-img\"></span></div>\r\n      </div>\r\n    </div>\r\n    <span class=\"voicecall-username\">Sarah Calling....</span>\r\n  </ion-card>\r\n  <div class=\"video\">\r\n    <img alt=\"\" class=\"user-video\" src=\"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80\">\r\n  </div>\r\n  <div class=\"voicecall-options\">\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <span class=\"custom-icon-call-attend\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n        </span>\r\n        <div class=\"front-ar\">\r\n          <span class=\"custom-icon-arrow-icon ar-1\"></span>\r\n          <span class=\"custom-icon-arrow-icon ar-2\"></span>\r\n          <span class=\"custom-icon-arrow-icon ar-3\"></span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <div class=\"back-ar\">\r\n          <span class=\"custom-icon-arrow-icon ar-1\"></span>\r\n          <span class=\"custom-icon-arrow-icon ar-2\"></span>\r\n          <span class=\"custom-icon-arrow-icon ar-3\"></span>\r\n        </div>\r\n        <span class=\"custom-icon-call-reject\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/incoming-call/incoming-call-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/incoming-call/incoming-call-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: IncomingCallPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingCallPageRoutingModule", function() { return IncomingCallPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _incoming_call_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incoming-call.page */ "./src/app/incoming-call/incoming-call.page.ts");




var routes = [
    {
        path: '',
        component: _incoming_call_page__WEBPACK_IMPORTED_MODULE_3__["IncomingCallPage"]
    }
];
var IncomingCallPageRoutingModule = /** @class */ (function () {
    function IncomingCallPageRoutingModule() {
    }
    IncomingCallPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], IncomingCallPageRoutingModule);
    return IncomingCallPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/incoming-call/incoming-call.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/incoming-call/incoming-call.module.ts ***!
  \*******************************************************/
/*! exports provided: IncomingCallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingCallPageModule", function() { return IncomingCallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _incoming_call_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./incoming-call-routing.module */ "./src/app/incoming-call/incoming-call-routing.module.ts");
/* harmony import */ var _incoming_call_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incoming-call.page */ "./src/app/incoming-call/incoming-call.page.ts");







var IncomingCallPageModule = /** @class */ (function () {
    function IncomingCallPageModule() {
    }
    IncomingCallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _incoming_call_routing_module__WEBPACK_IMPORTED_MODULE_5__["IncomingCallPageRoutingModule"]
            ],
            declarations: [_incoming_call_page__WEBPACK_IMPORTED_MODULE_6__["IncomingCallPage"]]
        })
    ], IncomingCallPageModule);
    return IncomingCallPageModule;
}());



/***/ }),

/***/ "./src/app/incoming-call/incoming-call.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/incoming-call/incoming-call.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".voiceImg1 {\n  background: rgba(255, 254, 254, 0.251);\n  border-radius: 100%;\n  height: 160px;\n  width: 160px;\n}\n\nion-content {\n  --offset-bottom: 0px !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\n.voiceImg2 {\n  background: rgba(255, 254, 254, 0.431);\n  border-radius: 100%;\n  height: 130px;\n  width: 130px;\n  margin: 15px;\n}\n\n.voiceImg {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 100%;\n  height: 100px;\n  margin: 0;\n  padding: 3px;\n  width: 100px;\n  margin: 15px;\n  position: absolute;\n}\n\n.voiceImg .custom-icon-user-placeholder-img {\n  font-size: 60px;\n  padding: 15px;\n  position: absolute;\n}\n\n.video {\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n  -webkit-filter: blur(25px);\n          filter: blur(25px);\n}\n\n.user-video {\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n.voicecall-username {\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n  padding-top: 15px;\n}\n\n.voicecall-options {\n  bottom: 20%;\n  left: 0;\n  padding: 15px;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  z-index: 99;\n  margin-right: calc(50% - 140px);\n  margin-left: calc(50% - 140px);\n}\n\n.voicecall-options ion-row ion-col {\n  padding: 10px 0;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\n.voicecallcard {\n  margin-top: 20%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-flex: 2;\n  flex: 2;\n  box-shadow: none !important;\n  z-index: 12;\n}\n\n.voice-call-content {\n  --background: #f5f5f5 !important;\n}\n\n.front-ar,\n.back-ar {\n  position: absolute;\n  top: 20px;\n  font-size: 20px;\n}\n\n.front-ar {\n  left: 50px;\n}\n\n.back-ar {\n  right: 50px;\n  transform: scaleX(-1);\n  -moz-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n}\n\n.custom-icon-arrow-icon.ar-1::before {\n  color: white !important;\n}\n\n.custom-icon-arrow-icon.ar-2::before {\n  color: rgba(255, 254, 254, 0.431) !important;\n}\n\n.custom-icon-arrow-icon.ar-3::before {\n  color: rgba(255, 254, 254, 0.251) !important;\n}\n\n.custom-icon-call-reject {\n  right: 0;\n}\n\n.custom-icon-call-attend {\n  left: 0;\n}\n\n.custom-icon-call-attend,\n.custom-icon-call-reject {\n  font-size: 50px;\n  position: absolute;\n}\n\n.custom-icon-call-attend span,\n.custom-icon-call-reject span {\n  font-family: \"newhrms\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jb21pbmctY2FsbC9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFxpbmNvbWluZy1jYWxsXFxpbmNvbWluZy1jYWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5jb21pbmctY2FsbC9pbmNvbWluZy1jYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURFQTtFQUNJLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURHQTtFQUNJLFNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FDQUo7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FES0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBR0EsYUFBQTtFQUNBLHlCQUFBO0VBR0EsbUJBQUE7RUFDQSx3QkFBQTtFQUdBLHVCQUFBO0VBQ0EsbUJBQUE7RUFHQSxPQUFBO0VBRUEsMkJBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxnQ0FBQTtBQ0ZKOztBREtBOztFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNGSjs7QURLQTtFQUNJLHVCQUFBO0FDRko7O0FES0E7RUFDSSw0Q0FBQTtBQ0ZKOztBREtBO0VBQ0ksNENBQUE7QUNGSjs7QURLQTtFQUNJLFFBQUE7QUNGSjs7QURLQTtFQUNJLE9BQUE7QUNGSjs7QURLQTs7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJSTs7RUFDSSxzQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvaW5jb21pbmctY2FsbC9pbmNvbWluZy1jYWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52b2ljZUltZzEge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjI1MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLW9mZnNldC1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcblxyXG4udm9pY2VJbWcyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC40MzEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi52b2ljZUltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi52aWRlbyB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZmlsdGVyOiBibHVyKDI1cHgpO1xyXG59XHJcblxyXG4udXNlci12aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udm9pY2VjYWxsLXVzZXJuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLnZvaWNlY2FsbC1vcHRpb25zIHtcclxuICAgIGJvdHRvbTogMjAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDUwJSAtIDE0MHB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDE0MHB4KTtcclxuXHJcbiAgICBpb24tcm93IGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnZvaWNlY2FsbGNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAyO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAyO1xyXG4gICAgLW1zLWZsZXg6IDI7XHJcbiAgICBmbGV4OiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMjtcclxufVxyXG5cclxuLnZvaWNlLWNhbGwtY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZyb250LWFyLFxyXG4uYmFjay1hciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mcm9udC1hciB7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYmFjay1hciB7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1hcnJvdy1pY29uLmFyLTE6OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWFycm93LWljb24uYXItMjo6YmVmb3JlIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuNDMxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tYXJyb3ctaWNvbi5hci0zOjpiZWZvcmUge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC4yNTEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1jYWxsLXJlamVjdCB7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWNhbGwtYXR0ZW5kIHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1jYWxsLWF0dGVuZCxcclxuLmN1c3RvbS1pY29uLWNhbGwtcmVqZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XHJcbiAgICB9XHJcbn0iLCIudm9pY2VJbWcxIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjI1MSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMTYwcHg7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW9mZnNldC1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udm9pY2VJbWcyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjQzMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMTMwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4udm9pY2VJbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogM3B4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnZvaWNlSW1nIC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZyB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udmlkZW8ge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBmaWx0ZXI6IGJsdXIoMjVweCk7XG59XG5cbi51c2VyLXZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi52b2ljZWNhbGwtdXNlcm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi52b2ljZWNhbGwtb3B0aW9ucyB7XG4gIGJvdHRvbTogMjAlO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW4tcmlnaHQ6IGNhbGMoNTAlIC0gMTQwcHgpO1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAxNDBweCk7XG59XG4udm9pY2VjYWxsLW9wdGlvbnMgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbn1cblxuLnZvaWNlY2FsbGNhcmQge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWZsZXg6IDI7XG4gIC13ZWJraXQtZmxleDogMjtcbiAgLW1zLWZsZXg6IDI7XG4gIGZsZXg6IDI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEyO1xufVxuXG4udm9pY2UtY2FsbC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbi5mcm9udC1hcixcbi5iYWNrLWFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZyb250LWFyIHtcbiAgbGVmdDogNTBweDtcbn1cblxuLmJhY2stYXIge1xuICByaWdodDogNTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG5cbi5jdXN0b20taWNvbi1hcnJvdy1pY29uLmFyLTE6OmJlZm9yZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWljb24tYXJyb3ctaWNvbi5hci0yOjpiZWZvcmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjQzMSkgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pY29uLWFycm93LWljb24uYXItMzo6YmVmb3JlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC4yNTEpICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taWNvbi1jYWxsLXJlamVjdCB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY3VzdG9tLWljb24tY2FsbC1hdHRlbmQge1xuICBsZWZ0OiAwO1xufVxuXG4uY3VzdG9tLWljb24tY2FsbC1hdHRlbmQsXG4uY3VzdG9tLWljb24tY2FsbC1yZWplY3Qge1xuICBmb250LXNpemU6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jdXN0b20taWNvbi1jYWxsLWF0dGVuZCBzcGFuLFxuLmN1c3RvbS1pY29uLWNhbGwtcmVqZWN0IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XG59Il19 */"

/***/ }),

/***/ "./src/app/incoming-call/incoming-call.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/incoming-call/incoming-call.page.ts ***!
  \*****************************************************/
/*! exports provided: IncomingCallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingCallPage", function() { return IncomingCallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");




var IncomingCallPage = /** @class */ (function () {
    function IncomingCallPage(navContrl, util) {
        this.navContrl = navContrl;
        this.util = util;
    }
    IncomingCallPage.prototype.ngOnInit = function () {
    };
    IncomingCallPage.prototype.answerCall = function () {
        this.navContrl.navigateForward("/video-call");
    };
    IncomingCallPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    IncomingCallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incoming-call',
            template: __webpack_require__(/*! raw-loader!./incoming-call.page.html */ "./node_modules/raw-loader/index.js!./src/app/incoming-call/incoming-call.page.html"),
            styles: [__webpack_require__(/*! ./incoming-call.page.scss */ "./src/app/incoming-call/incoming-call.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], IncomingCallPage);
    return IncomingCallPage;
}());



/***/ })

}]);
//# sourceMappingURL=incoming-call-incoming-call-module-es5.js.map