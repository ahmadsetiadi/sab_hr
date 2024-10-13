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

module.exports = ".chat-link {\n  position: absolute;\n  top: 14px;\n  right: 0;\n}\n\nion-content {\n  --offset-bottom: 0px !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\n.call-userinfo {\n  float: left;\n}\n\n.videocall-details {\n  background-color: rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  position: relative;\n  z-index: 99;\n  margin: 0;\n  width: 100%;\n}\n\n.video {\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n}\n\n.call-username {\n  color: #fff;\n  display: block;\n  font-size: 20px;\n}\n\n.call-duration {\n  color: #fff;\n  display: block;\n  font-size: 16px;\n}\n\n.voicecall-options {\n  bottom: 0;\n  left: 0;\n  padding: 15px;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  z-index: 99;\n}\n\n.voicecall-options ion-row {\n  padding: 10px;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\n.voice-call-content {\n  --background: #f5f5f5 !important;\n}\n\n.user-video {\n  width: 100%;\n  max-width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n.custom-icon-chat-icon,\n.custom-icon-video-call-icon,\n.custom-icon-add-call-icon,\n.custom-icon-audio-call-icon,\n.custom-icon-call-reject {\n  font-size: 60px;\n}\n\n.custom-icon-chat-icon span,\n.custom-icon-video-call-icon span,\n.custom-icon-add-call-icon span,\n.custom-icon-audio-call-icon span,\n.custom-icon-call-reject span {\n  font-family: \"newhrms\";\n}\n\n.custom-icon-chat-icon .path3::before {\n  opacity: unset !important;\n}\n\n.custom-icon-video-call-icon .path3::before {\n  color: black !important;\n  opacity: 1 !important;\n}\n\n.custom-icon-video-call-icon .path2::before {\n  opacity: 1 !important;\n  color: white !important;\n}\n\n.custom-icon-audio-call-icon .path3::before,\n.custom-icon-audio-call-icon .path4::before {\n  color: gray !important;\n}\n\n.custom-icon-audio-call-icon .path2::before {\n  opacity: 1 !important;\n  color: white !important;\n}\n\n.custom-icon-add-call-icon .path2::before {\n  opacity: 1 !important;\n  color: white !important;\n}\n\n.custom-icon-add-call-icon .path3::before,\n.custom-icon-add-call-icon .path4::before,\n.custom-icon-add-call-icon .path5::before {\n  color: black !important;\n  opacity: 0.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tY2FsbC9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXHZpZGVvLWNhbGxcXHZpZGVvLWNhbGwucGFnZS5zY3NzIiwic3JjL2FwcC92aWRlby1jYWxsL3ZpZGVvLWNhbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtBQ0NSOztBREdBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUNBSjs7QURJQTtFQUNJLGdDQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7Ozs7O0VBS0ksZUFBQTtBQ0RKOztBREdJOzs7OztFQUNJLHNCQUFBO0FDR1I7O0FERUk7RUFDSSx5QkFBQTtBQ0NSOztBRElJO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtBQ0RSOztBRElJO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQ0ZSOztBRFFJOztFQUVJLHNCQUFBO0FDTFI7O0FEUUk7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0FDTlI7O0FEV0k7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0FDUlI7O0FEV0k7OztFQUdJLHVCQUFBO0VBQ0EsdUJBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWNhbGwvdmlkZW8tY2FsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1saW5rIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTRweDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLW9mZnNldC1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jYWxsLXVzZXJpbmZvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udmlkZW9jYWxsLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnZpZGVvIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jYWxsLXVzZXJuYW1lIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jYWxsLWR1cmF0aW9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi52b2ljZWNhbGwtb3B0aW9ucyB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk7XHJcblxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuXHJcbi52b2ljZS1jYWxsLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VyLXZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tY2hhdC1pY29uLFxyXG4uY3VzdG9tLWljb24tdmlkZW8tY2FsbC1pY29uLFxyXG4uY3VzdG9tLWljb24tYWRkLWNhbGwtaWNvbixcclxuLmN1c3RvbS1pY29uLWF1ZGlvLWNhbGwtaWNvbixcclxuLmN1c3RvbS1pY29uLWNhbGwtcmVqZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1jaGF0LWljb24ge1xyXG4gICAgLnBhdGgzOjpiZWZvcmUge1xyXG4gICAgICAgIG9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi12aWRlby1jYWxsLWljb24ge1xyXG4gICAgLnBhdGgzOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGF0aDI6OmJlZm9yZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWljb24tYXVkaW8tY2FsbC1pY29uIHtcclxuXHJcbiAgICAucGF0aDM6OmJlZm9yZSxcclxuICAgIC5wYXRoNDo6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICAucGF0aDI6OmJlZm9yZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWljb24tYWRkLWNhbGwtaWNvbiB7XHJcbiAgICAucGF0aDI6OmJlZm9yZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXRoMzo6YmVmb3JlLFxyXG4gICAgLnBhdGg0OjpiZWZvcmUsXHJcbiAgICAucGF0aDU6OmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59IiwiLmNoYXQtbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW9mZnNldC1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY2FsbC11c2VyaW5mbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udmlkZW9jYWxsLWRldGFpbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52aWRlbyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jYWxsLXVzZXJuYW1lIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYWxsLWR1cmF0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi52b2ljZWNhbGwtb3B0aW9ucyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiA5OTtcbn1cbi52b2ljZWNhbGwtb3B0aW9ucyBpb24tcm93IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbi52b2ljZS1jYWxsLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWltcG9ydGFudDtcbn1cblxuLnVzZXItdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jdXN0b20taWNvbi1jaGF0LWljb24sXG4uY3VzdG9tLWljb24tdmlkZW8tY2FsbC1pY29uLFxuLmN1c3RvbS1pY29uLWFkZC1jYWxsLWljb24sXG4uY3VzdG9tLWljb24tYXVkaW8tY2FsbC1pY29uLFxuLmN1c3RvbS1pY29uLWNhbGwtcmVqZWN0IHtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuLmN1c3RvbS1pY29uLWNoYXQtaWNvbiBzcGFuLFxuLmN1c3RvbS1pY29uLXZpZGVvLWNhbGwtaWNvbiBzcGFuLFxuLmN1c3RvbS1pY29uLWFkZC1jYWxsLWljb24gc3Bhbixcbi5jdXN0b20taWNvbi1hdWRpby1jYWxsLWljb24gc3Bhbixcbi5jdXN0b20taWNvbi1jYWxsLXJlamVjdCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwibmV3aHJtc1wiO1xufVxuXG4uY3VzdG9tLWljb24tY2hhdC1pY29uIC5wYXRoMzo6YmVmb3JlIHtcbiAgb3BhY2l0eTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pY29uLXZpZGVvLWNhbGwtaWNvbiAucGF0aDM6OmJlZm9yZSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWljb24tdmlkZW8tY2FsbC1pY29uIC5wYXRoMjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pY29uLWF1ZGlvLWNhbGwtaWNvbiAucGF0aDM6OmJlZm9yZSxcbi5jdXN0b20taWNvbi1hdWRpby1jYWxsLWljb24gLnBhdGg0OjpiZWZvcmUge1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1pY29uLWF1ZGlvLWNhbGwtaWNvbiAucGF0aDI6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taWNvbi1hZGQtY2FsbC1pY29uIC5wYXRoMjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5jdXN0b20taWNvbi1hZGQtY2FsbC1pY29uIC5wYXRoMzo6YmVmb3JlLFxuLmN1c3RvbS1pY29uLWFkZC1jYWxsLWljb24gLnBhdGg0OjpiZWZvcmUsXG4uY3VzdG9tLWljb24tYWRkLWNhbGwtaWNvbiAucGF0aDU6OmJlZm9yZSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcbn0iXX0= */"

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