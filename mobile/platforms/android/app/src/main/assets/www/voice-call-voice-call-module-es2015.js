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

module.exports = ".voiceImg1 {\n  background: #fffefe40;\n  border-radius: 100%;\n  height: 160px;\n  width: 160px;\n}\n\nion-content {\n  --offset-bottom: 0px !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\n.voiceImg2 {\n  background: #fffefe6e;\n  border-radius: 100%;\n  height: 130px;\n  width: 130px;\n  margin: 15px;\n}\n\n.voiceImg {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 100%;\n  height: 100px;\n  margin: 0;\n  padding: 3px;\n  width: 100px;\n  margin: 15px;\n  position: absolute;\n}\n\n.voiceImg .custom-icon-user-placeholder-img {\n  font-size: 60px;\n  padding: 15px;\n  position: absolute;\n}\n\n.video {\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n  -webkit-filter: blur(25px);\n          filter: blur(25px);\n}\n\n.user-video {\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n.voicecall-username {\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n  padding-top: 15px;\n}\n\n.voicecall-timing {\n  padding: 5px;\n  color: white;\n}\n\n.voicecall-options {\n  bottom: 0;\n  left: 0;\n  padding: 15px;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  z-index: 99;\n}\n\n.voicecall-options ion-row ion-col {\n  padding: 10px 0;\n}\n\n.voicecall-options h6 {\n  font-size: 12px;\n  margin: 0;\n  padding-top: 5px;\n  color: white;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\n.voicecallcard {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-flex: 2;\n  flex: 2;\n  box-shadow: none !important;\n  z-index: 12;\n}\n\n.voice-call-content {\n  --background: #f5f5f5 !important;\n}\n\n.custom-icon-chat-icon,\n.custom-icon-video-call-icon,\n.custom-icon-add-call-icon,\n.custom-icon-call-reject {\n  font-size: 50px;\n}\n\n.custom-icon-chat-icon span,\n.custom-icon-video-call-icon span,\n.custom-icon-add-call-icon span,\n.custom-icon-call-reject span {\n  font-family: \"newhrms\";\n}\n\n.custom-icon-chat-icon .path3::before {\n  opacity: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9pY2UtY2FsbC9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXHZvaWNlLWNhbGxcXHZvaWNlLWNhbGwucGFnZS5zY3NzIiwic3JjL2FwcC92b2ljZS1jYWxsL3ZvaWNlLWNhbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBQ0ksc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VSOztBREVBO0VBQ0ksU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQVI7O0FESUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQ0RKOztBRElBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFHQSxhQUFBO0VBQ0EseUJBQUE7RUFHQSxtQkFBQTtFQUNBLHdCQUFBO0VBR0EsdUJBQUE7RUFDQSxtQkFBQTtFQUdBLE9BQUE7RUFFQSwyQkFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLGdDQUFBO0FDREo7O0FES0E7Ozs7RUFJSSxlQUFBO0FDRko7O0FESUk7Ozs7RUFDSSxzQkFBQTtBQ0NSOztBRElJO0VBQ0kseUJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3ZvaWNlLWNhbGwvdm9pY2UtY2FsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudm9pY2VJbWcxIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZlZmU0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnZvaWNlSW1nMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZWZlNmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLnZvaWNlSW1nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLnZpZGVvIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMjVweCk7XHJcbn1cclxuXHJcbi51c2VyLXZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi52b2ljZWNhbGwtdXNlcm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4udm9pY2VjYWxsLXRpbWluZyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi52b2ljZWNhbGwtb3B0aW9ucyB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk7XHJcblxyXG4gICAgaW9uLXJvdyBpb24tY29sIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBcclxuICAgIH1cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnZvaWNlY2FsbGNhcmQge1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAyO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAyO1xyXG4gICAgLW1zLWZsZXg6IDI7XHJcbiAgICBmbGV4OiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMjtcclxufVxyXG5cclxuLnZvaWNlLWNhbGwtY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20taWNvbi1jaGF0LWljb24sXHJcbi5jdXN0b20taWNvbi12aWRlby1jYWxsLWljb24sXHJcbi5jdXN0b20taWNvbi1hZGQtY2FsbC1pY29uLFxyXG4uY3VzdG9tLWljb24tY2FsbC1yZWplY3Qge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIjtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWNoYXQtaWNvbiB7XHJcbiAgICAucGF0aDM6OmJlZm9yZSB7XHJcbiAgICAgICAgb3BhY2l0eTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi52b2ljZUltZzEge1xuICBiYWNrZ3JvdW5kOiAjZmZmZWZlNDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMTYwcHg7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW9mZnNldC1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udm9pY2VJbWcyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmVmZTZlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLnZvaWNlSW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi52b2ljZUltZyAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWcge1xuICBmb250LXNpemU6IDYwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnZpZGVvIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZmlsdGVyOiBibHVyKDI1cHgpO1xufVxuXG4udXNlci12aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udm9pY2VjYWxsLXVzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4udm9pY2VjYWxsLXRpbWluZyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udm9pY2VjYWxsLW9wdGlvbnMge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogOTk7XG59XG4udm9pY2VjYWxsLW9wdGlvbnMgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLnZvaWNlY2FsbC1vcHRpb25zIGg2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbi52b2ljZWNhbGxjYXJkIHtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtZmxleDogMjtcbiAgLXdlYmtpdC1mbGV4OiAyO1xuICAtbXMtZmxleDogMjtcbiAgZmxleDogMjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTI7XG59XG5cbi52b2ljZS1jYWxsLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pY29uLWNoYXQtaWNvbixcbi5jdXN0b20taWNvbi12aWRlby1jYWxsLWljb24sXG4uY3VzdG9tLWljb24tYWRkLWNhbGwtaWNvbixcbi5jdXN0b20taWNvbi1jYWxsLXJlamVjdCB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbi5jdXN0b20taWNvbi1jaGF0LWljb24gc3Bhbixcbi5jdXN0b20taWNvbi12aWRlby1jYWxsLWljb24gc3Bhbixcbi5jdXN0b20taWNvbi1hZGQtY2FsbC1pY29uIHNwYW4sXG4uY3VzdG9tLWljb24tY2FsbC1yZWplY3Qgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm5ld2hybXNcIjtcbn1cblxuLmN1c3RvbS1pY29uLWNoYXQtaWNvbiAucGF0aDM6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */"

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