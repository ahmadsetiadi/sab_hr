(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voice-call-voice-call-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/voice-call/voice-call.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/voice-call/voice-call.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Voice Call</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"voice-call-content\">\r\n  <ion-card class=\"voicecallcard card card-md\">\r\n    <div class=\"voiceImg1\">\r\n      <div class=\"voiceImg2\">\r\n        <div class=\"voiceImg\"><span class=\"custom-icon-user-placeholder-img\"></span></div>\r\n      </div>\r\n    </div>\r\n    <span class=\"voicecall-username\">John Doe</span>\r\n    <span class=\"voicecall-timing\">00:59</span>\r\n  </ion-card>\r\n  <div class=\"video\">\r\n    <img alt=\"\" class=\"user-video\" src=\"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80\">\r\n  </div>\r\n  <div class=\"voicecall-options\">\r\n    <ion-row>\r\n      <ion-col size=\"6\"><span class=\"custom-icon-video-call-icon\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n          <span class=\"path3\"></span>\r\n        </span>\r\n        <h6>VIDEO CALL</h6>\r\n      </ion-col>\r\n      <ion-col size=\"6\"><span class=\"custom-icon-video-call-icon\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n          <span class=\"path3\"></span>\r\n        </span>\r\n        <h6>AUDIO MUTE</h6>\r\n      </ion-col>\r\n      <ion-col size=\"6\"><span class=\"custom-icon-add-call-icon\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n          <span class=\"path3\"></span>\r\n          <span class=\"path4\"></span>\r\n          <span class=\"path5\"></span>\r\n        </span>\r\n        <h6>ADD CALL</h6>\r\n      </ion-col>\r\n      <ion-col size=\"6\"> <span class=\"custom-icon-chat-icon\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n          <span class=\"path3\"></span>\r\n        </span>\r\n        <h6>CHAT</h6>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\"><span class=\"custom-icon-call-reject\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span>\r\n          <span class=\"path2\"></span>\r\n        </span></ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/voice-call/voice-call-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/voice-call/voice-call-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: VoiceCallPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceCallPageRoutingModule", function() { return VoiceCallPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _voice_call_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voice-call.page */ "./src/app/voice-call/voice-call.page.ts");




const routes = [
    {
        path: '',
        component: _voice_call_page__WEBPACK_IMPORTED_MODULE_3__["VoiceCallPage"]
    }
];
let VoiceCallPageRoutingModule = class VoiceCallPageRoutingModule {
};
VoiceCallPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VoiceCallPageRoutingModule);



/***/ }),

/***/ "./src/app/voice-call/voice-call.module.ts":
/*!*************************************************!*\
  !*** ./src/app/voice-call/voice-call.module.ts ***!
  \*************************************************/
/*! exports provided: VoiceCallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceCallPageModule", function() { return VoiceCallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _voice_call_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voice-call-routing.module */ "./src/app/voice-call/voice-call-routing.module.ts");
/* harmony import */ var _voice_call_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voice-call.page */ "./src/app/voice-call/voice-call.page.ts");








let VoiceCallPageModule = class VoiceCallPageModule {
};
VoiceCallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _voice_call_routing_module__WEBPACK_IMPORTED_MODULE_6__["VoiceCallPageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
        ],
        declarations: [_voice_call_page__WEBPACK_IMPORTED_MODULE_7__["VoiceCallPage"]]
    })
], VoiceCallPageModule);



/***/ }),

/***/ "./src/app/voice-call/voice-call.page.scss":
/*!*************************************************!*\
  !*** ./src/app/voice-call/voice-call.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".voiceImg1 {\n  background: #fffefe40;\n  border-radius: 100%;\n  height: 160px;\n  width: 160px;\n}\n\nion-content {\n  --offset-bottom: 0px !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\n.voiceImg2 {\n  background: #fffefe6e;\n  border-radius: 100%;\n  height: 130px;\n  width: 130px;\n  margin: 15px;\n}\n\n.voiceImg {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 100%;\n  height: 100px;\n  margin: 0;\n  padding: 3px;\n  width: 100px;\n  margin: 15px;\n  position: absolute;\n}\n\n.voiceImg .custom-icon-user-placeholder-img {\n  font-size: 60px;\n  padding: 15px;\n  position: absolute;\n}\n\n.video {\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n  -webkit-filter: blur(25px);\n          filter: blur(25px);\n}\n\n.user-video {\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n.voicecall-username {\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n  padding-top: 15px;\n}\n\n.voicecall-timing {\n  padding: 5px;\n  color: white;\n}\n\n.voicecall-options {\n  bottom: 0;\n  left: 0;\n  padding: 15px;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  z-index: 99;\n}\n\n.voicecall-options ion-row ion-col {\n  padding: 10px 0;\n}\n\n.voicecall-options h6 {\n  font-size: 12px;\n  margin: 0;\n  padding-top: 5px;\n  color: white;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\n.voicecallcard {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-flex: 2;\n  flex: 2;\n  box-shadow: none !important;\n  z-index: 12;\n}\n\n.voice-call-content {\n  --background: #f5f5f5 !important;\n}\n\n.custom-icon-chat-icon,\n.custom-icon-video-call-icon,\n.custom-icon-add-call-icon,\n.custom-icon-call-reject {\n  font-size: 50px;\n}\n\n.custom-icon-chat-icon span,\n.custom-icon-video-call-icon span,\n.custom-icon-add-call-icon span,\n.custom-icon-call-reject span {\n  font-family: \"newhrms\";\n}\n\n.custom-icon-chat-icon .path3::before {\n  opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9pY2UtY2FsbC9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFx2b2ljZS1jYWxsXFx2b2ljZS1jYWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdm9pY2UtY2FsbC92b2ljZS1jYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURFQTtFQUNJLFNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FSOztBRElBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUNESjs7QURJQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBR0EsYUFBQTtFQUNBLHlCQUFBO0VBR0EsbUJBQUE7RUFDQSx3QkFBQTtFQUdBLHVCQUFBO0VBQ0EsbUJBQUE7RUFHQSxPQUFBO0VBRUEsMkJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxnQ0FBQTtBQ0RKOztBREtBOzs7O0VBSUksZUFBQTtBQ0ZKOztBRElJOzs7O0VBQ0ksc0JBQUE7QUNDUjs7QURJSTtFQUNJLHlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC92b2ljZS1jYWxsL3ZvaWNlLWNhbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZvaWNlSW1nMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZWZlNDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLW9mZnNldC1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi52b2ljZUltZzIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmVmZTZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi52b2ljZUltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi52aWRlbyB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZmlsdGVyOiBibHVyKDI1cHgpO1xyXG59XHJcblxyXG4udXNlci12aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udm9pY2VjYWxsLXVzZXJuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLnZvaWNlY2FsbC10aW1pbmcge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udm9pY2VjYWxsLW9wdGlvbnMge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5O1xyXG5cclxuICAgIGlvbi1yb3cgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwXHJcbiAgICB9XHJcblxyXG4gICAgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi52b2ljZWNhbGxjYXJkIHtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMjtcclxuICAgIC13ZWJraXQtZmxleDogMjtcclxuICAgIC1tcy1mbGV4OiAyO1xyXG4gICAgZmxleDogMjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTI7XHJcbn1cclxuXHJcbi52b2ljZS1jYWxsLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLWljb24tY2hhdC1pY29uLFxyXG4uY3VzdG9tLWljb24tdmlkZW8tY2FsbC1pY29uLFxyXG4uY3VzdG9tLWljb24tYWRkLWNhbGwtaWNvbixcclxuLmN1c3RvbS1pY29uLWNhbGwtcmVqZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1jaGF0LWljb24ge1xyXG4gICAgLnBhdGgzOjpiZWZvcmUge1xyXG4gICAgICAgIG9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIudm9pY2VJbWcxIHtcbiAgYmFja2dyb3VuZDogI2ZmZmVmZTQwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICB3aWR0aDogMTYwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1vZmZzZXQtYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnZvaWNlSW1nMiB7XG4gIGJhY2tncm91bmQ6ICNmZmZlZmU2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi52b2ljZUltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4udm9pY2VJbWcgLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi52aWRlbyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG4gIGZpbHRlcjogYmx1cigyNXB4KTtcbn1cblxuLnVzZXItdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnZvaWNlY2FsbC11c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLnZvaWNlY2FsbC10aW1pbmcge1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnZvaWNlY2FsbC1vcHRpb25zIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5O1xufVxuLnZvaWNlY2FsbC1vcHRpb25zIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi52b2ljZWNhbGwtb3B0aW9ucyBoNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG4udm9pY2VjYWxsY2FyZCB7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWZsZXg6IDI7XG4gIC13ZWJraXQtZmxleDogMjtcbiAgLW1zLWZsZXg6IDI7XG4gIGZsZXg6IDI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEyO1xufVxuXG4udm9pY2UtY2FsbC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taWNvbi1jaGF0LWljb24sXG4uY3VzdG9tLWljb24tdmlkZW8tY2FsbC1pY29uLFxuLmN1c3RvbS1pY29uLWFkZC1jYWxsLWljb24sXG4uY3VzdG9tLWljb24tY2FsbC1yZWplY3Qge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4uY3VzdG9tLWljb24tY2hhdC1pY29uIHNwYW4sXG4uY3VzdG9tLWljb24tdmlkZW8tY2FsbC1pY29uIHNwYW4sXG4uY3VzdG9tLWljb24tYWRkLWNhbGwtaWNvbiBzcGFuLFxuLmN1c3RvbS1pY29uLWNhbGwtcmVqZWN0IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJuZXdocm1zXCI7XG59XG5cbi5jdXN0b20taWNvbi1jaGF0LWljb24gLnBhdGgzOjpiZWZvcmUge1xuICBvcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/voice-call/voice-call.page.ts":
/*!***********************************************!*\
  !*** ./src/app/voice-call/voice-call.page.ts ***!
  \***********************************************/
/*! exports provided: VoiceCallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceCallPage", function() { return VoiceCallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");




let VoiceCallPage = class VoiceCallPage {
    constructor(util) {
        this.util = util;
        this.videoCamera = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faVideo"];
        this.userPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserPlus"];
        this.microphone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMicrophone"];
        this.comments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComments"];
    }
    ngOnInit() {
    }
};
VoiceCallPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
];
VoiceCallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voice-call',
        template: __webpack_require__(/*! raw-loader!./voice-call.page.html */ "./node_modules/raw-loader/index.js!./src/app/voice-call/voice-call.page.html"),
        styles: [__webpack_require__(/*! ./voice-call.page.scss */ "./src/app/voice-call/voice-call.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
], VoiceCallPage);



/***/ })

}]);
//# sourceMappingURL=voice-call-voice-call-module-es2015.js.map