(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-call-video-call-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/video-call/video-call.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-call/video-call.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Video Call</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"voice-call-content\">\r\n  <ion-card class=\"videocall-details card card-md\">\r\n    <div class=\"call-userinfo\">\r\n      <span class=\"call-username\">Mike Litorus</span>\r\n      <span class=\"call-duration\">00:59</span>\r\n      <div class=\"chat-link\">\r\n        <span class=\"custom-icon-chat-icon\">\r\n          <span class=\"path3\"></span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n  <div class=\"video\">\r\n    <img alt=\"\" class=\"user-video\" src=\"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80\">\r\n  </div>\r\n  <div class=\"voicecall-options\">\r\n    <ion-row>\r\n      <ion-col size=\"4\"><span class=\"custom-icon-video-call-icon\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n          <span class=\"path3\"></span>\r\n        </span></ion-col>\r\n      <ion-col size=\"4\"><span class=\"custom-icon-audio-call-icon\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n          <span class=\"path3\"></span>\r\n          <span class=\"path4\"></span>\r\n        </span></ion-col>\r\n      <ion-col size=\"4\"><span class=\"custom-icon-add-call-icon\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n          <span class=\"path3\"></span>\r\n          <span class=\"path4\"></span>\r\n          <span class=\"path5\"></span>\r\n        </span></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\"><span class=\"custom-icon-call-reject\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n        </span></ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/video-call/video-call-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/video-call/video-call-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: VideoCallPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallPageRoutingModule", function() { return VideoCallPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _video_call_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-call.page */ "./src/app/video-call/video-call.page.ts");




var routes = [
    {
        path: '',
        component: _video_call_page__WEBPACK_IMPORTED_MODULE_3__["VideoCallPage"]
    }
];
var VideoCallPageRoutingModule = /** @class */ (function () {
    function VideoCallPageRoutingModule() {
    }
    VideoCallPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VideoCallPageRoutingModule);
    return VideoCallPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/video-call/video-call.module.ts":
/*!*************************************************!*\
  !*** ./src/app/video-call/video-call.module.ts ***!
  \*************************************************/
/*! exports provided: VideoCallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallPageModule", function() { return VideoCallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_call_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-call-routing.module */ "./src/app/video-call/video-call-routing.module.ts");
/* harmony import */ var _video_call_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-call.page */ "./src/app/video-call/video-call.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var VideoCallPageModule = /** @class */ (function () {
    function VideoCallPageModule() {
    }
    VideoCallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _video_call_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoCallPageRoutingModule"]
            ],
            declarations: [_video_call_page__WEBPACK_IMPORTED_MODULE_6__["VideoCallPage"]]
        })
    ], VideoCallPageModule);
    return VideoCallPageModule;
}());



/***/ }),

/***/ "./src/app/video-call/video-call.page.scss":
/*!*************************************************!*\
  !*** ./src/app/video-call/video-call.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-link {\n  position: absolute;\n  top: 14px;\n  right: 0;\n}\n\nion-content {\n  --offset-bottom: 0px !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\n.call-userinfo {\n  float: left;\n}\n\n.videocall-details {\n  background-color: rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  position: relative;\n  z-index: 99;\n  margin: 0;\n  width: 100%;\n}\n\n.video {\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n}\n\n.call-username {\n  color: #fff;\n  display: block;\n  font-size: 20px;\n}\n\n.call-duration {\n  color: #fff;\n  display: block;\n  font-size: 16px;\n}\n\n.voicecall-options {\n  bottom: 0;\n  left: 0;\n  padding: 15px;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  z-index: 99;\n}\n\n.voicecall-options ion-row {\n  padding: 10px;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\n.voice-call-content {\n  --background: #f5f5f5 !important;\n}\n\n.user-video {\n  width: 100%;\n  max-width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n.custom-icon-chat-icon,\n.custom-icon-video-call-icon,\n.custom-icon-add-call-icon,\n.custom-icon-audio-call-icon,\n.custom-icon-call-reject {\n  font-size: 60px;\n}\n\n.custom-icon-chat-icon span,\n.custom-icon-video-call-icon span,\n.custom-icon-add-call-icon span,\n.custom-icon-audio-call-icon span,\n.custom-icon-call-reject span {\n  font-family: \"newhrms\";\n}\n\n.custom-icon-chat-icon .path3::before {\n  opacity: unset !important;\n}\n\n.custom-icon-video-call-icon .path3::before {\n  color: black !important;\n  opacity: 1 !important;\n}\n\n.custom-icon-video-call-icon .path2::before {\n  opacity: 1 !important;\n  color: white !important;\n}\n\n.custom-icon-audio-call-icon .path3::before,\n.custom-icon-audio-call-icon .path4::before {\n  color: gray !important;\n}\n\n.custom-icon-audio-call-icon .path2::before {\n  opacity: 1 !important;\n  color: white !important;\n}\n\n.custom-icon-add-call-icon .path2::before {\n  opacity: 1 !important;\n  color: white !important;\n}\n\n.custom-icon-add-call-icon .path3::before,\n.custom-icon-add-call-icon .path4::before,\n.custom-icon-add-call-icon .path5::before {\n  color: black !important;\n  opacity: 0.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tY2FsbC9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFx2aWRlby1jYWxsXFx2aWRlby1jYWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlkZW8tY2FsbC92aWRlby1jYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDSTtFQUNJLGFBQUE7QUNDUjs7QURHQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FDQUo7O0FESUE7RUFDSSxnQ0FBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBOzs7OztFQUtJLGVBQUE7QUNESjs7QURHSTs7Ozs7RUFDSSxzQkFBQTtBQ0dSOztBREVJO0VBQ0kseUJBQUE7QUNDUjs7QURJSTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUNEUjs7QURJSTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7QUNGUjs7QURRSTs7RUFFSSxzQkFBQTtBQ0xSOztBRFFJO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQ05SOztBRFdJO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQ1JSOztBRFdJOzs7RUFHSSx1QkFBQTtFQUNBLHVCQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC92aWRlby1jYWxsL3ZpZGVvLWNhbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtbGluayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1vZmZzZXQtYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY2FsbC11c2VyaW5mbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnZpZGVvY2FsbC1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi52aWRlbyB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY2FsbC11c2VybmFtZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY2FsbC1kdXJhdGlvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udm9pY2VjYWxsLW9wdGlvbnMge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5O1xyXG5cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcblxyXG4udm9pY2UtY2FsbC1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlci12aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWNoYXQtaWNvbixcclxuLmN1c3RvbS1pY29uLXZpZGVvLWNhbGwtaWNvbixcclxuLmN1c3RvbS1pY29uLWFkZC1jYWxsLWljb24sXHJcbi5jdXN0b20taWNvbi1hdWRpby1jYWxsLWljb24sXHJcbi5jdXN0b20taWNvbi1jYWxsLXJlamVjdCB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibmV3aHJtc1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWljb24tY2hhdC1pY29uIHtcclxuICAgIC5wYXRoMzo6YmVmb3JlIHtcclxuICAgICAgICBvcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWljb24tdmlkZW8tY2FsbC1pY29uIHtcclxuICAgIC5wYXRoMzo6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGgyOjpiZWZvcmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWF1ZGlvLWNhbGwtaWNvbiB7XHJcblxyXG4gICAgLnBhdGgzOjpiZWZvcmUsXHJcbiAgICAucGF0aDQ6OmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4KSAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGgyOjpiZWZvcmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWFkZC1jYWxsLWljb24ge1xyXG4gICAgLnBhdGgyOjpiZWZvcmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGF0aDM6OmJlZm9yZSxcclxuICAgIC5wYXRoNDo6YmVmb3JlLFxyXG4gICAgLnBhdGg1OjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufSIsIi5jaGF0LWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1vZmZzZXQtYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNhbGwtdXNlcmluZm8ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnZpZGVvY2FsbC1kZXRhaWxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udmlkZW8ge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2FsbC11c2VybmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2FsbC1kdXJhdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udm9pY2VjYWxsLW9wdGlvbnMge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogOTk7XG59XG4udm9pY2VjYWxsLW9wdGlvbnMgaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG4udm9pY2UtY2FsbC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLXZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY3VzdG9tLWljb24tY2hhdC1pY29uLFxuLmN1c3RvbS1pY29uLXZpZGVvLWNhbGwtaWNvbixcbi5jdXN0b20taWNvbi1hZGQtY2FsbC1pY29uLFxuLmN1c3RvbS1pY29uLWF1ZGlvLWNhbGwtaWNvbixcbi5jdXN0b20taWNvbi1jYWxsLXJlamVjdCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cbi5jdXN0b20taWNvbi1jaGF0LWljb24gc3Bhbixcbi5jdXN0b20taWNvbi12aWRlby1jYWxsLWljb24gc3Bhbixcbi5jdXN0b20taWNvbi1hZGQtY2FsbC1pY29uIHNwYW4sXG4uY3VzdG9tLWljb24tYXVkaW8tY2FsbC1pY29uIHNwYW4sXG4uY3VzdG9tLWljb24tY2FsbC1yZWplY3Qgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIjtcbn1cblxuLmN1c3RvbS1pY29uLWNoYXQtaWNvbiAucGF0aDM6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taWNvbi12aWRlby1jYWxsLWljb24gLnBhdGgzOjpiZWZvcmUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1pY29uLXZpZGVvLWNhbGwtaWNvbiAucGF0aDI6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taWNvbi1hdWRpby1jYWxsLWljb24gLnBhdGgzOjpiZWZvcmUsXG4uY3VzdG9tLWljb24tYXVkaW8tY2FsbC1pY29uIC5wYXRoNDo6YmVmb3JlIHtcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cbi5jdXN0b20taWNvbi1hdWRpby1jYWxsLWljb24gLnBhdGgyOjpiZWZvcmUge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWljb24tYWRkLWNhbGwtaWNvbiAucGF0aDI6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWljb24tYWRkLWNhbGwtaWNvbiAucGF0aDM6OmJlZm9yZSxcbi5jdXN0b20taWNvbi1hZGQtY2FsbC1pY29uIC5wYXRoNDo6YmVmb3JlLFxuLmN1c3RvbS1pY29uLWFkZC1jYWxsLWljb24gLnBhdGg1OjpiZWZvcmUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/video-call/video-call.page.ts":
/*!***********************************************!*\
  !*** ./src/app/video-call/video-call.page.ts ***!
  \***********************************************/
/*! exports provided: VideoCallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallPage", function() { return VideoCallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");




var VideoCallPage = /** @class */ (function () {
    function VideoCallPage(util) {
        this.util = util;
        this.videoCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faVideo"];
        this.userPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserPlus"];
        this.microphone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMicrophone"];
        this.comments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComments"];
        this.arrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowsAltV"];
    }
    VideoCallPage.prototype.ngOnInit = function () {
    };
    VideoCallPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    VideoCallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-call',
            template: __webpack_require__(/*! raw-loader!./video-call.page.html */ "./node_modules/raw-loader/index.js!./src/app/video-call/video-call.page.html"),
            styles: [__webpack_require__(/*! ./video-call.page.scss */ "./src/app/video-call/video-call.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], VideoCallPage);
    return VideoCallPage;
}());



/***/ })

}]);
//# sourceMappingURL=video-call-video-call-module-es5.js.map