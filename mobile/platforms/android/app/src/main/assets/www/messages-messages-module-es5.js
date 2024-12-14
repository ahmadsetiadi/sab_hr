(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/messages/messages.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages/messages.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Messages</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"background-content\">\r\n  <div class=\"message-{{eachChat.messageType}}-div\" *ngFor=\"let eachChat of messages\">\r\n    <div class=\"message-content-{{eachChat.messageType}}\">\r\n      <div class=\"message-{{eachChat.messageType}}\"> {{ eachChat.message }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer style=\"background: #e2e2e2;\">\r\n  <div class=\"input-wrap\">\r\n    <ion-input class=\"message-text\" id=\"msgTxt\" placeholder=\"Message\" type=\"text\"></ion-input>\r\n    <button class=\"msg-button\" clear icon-only ion-button item-right>\r\n      <p style=\"padding: 7px;padding-bottom: 0px;\">SEND</p>\r\n    </button>\r\n  </div>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/messages/messages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/messages/messages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MessagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function() { return MessagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.page */ "./src/app/messages/messages.page.ts");




var routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
    }
];
var MessagesPageRoutingModule = /** @class */ (function () {
    function MessagesPageRoutingModule() {
    }
    MessagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MessagesPageRoutingModule);
    return MessagesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/messages/messages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages-routing.module */ "./src/app/messages/messages-routing.module.ts");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/messages/messages.page.ts");







var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]
            ],
            declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());



/***/ }),

/***/ "./src/app/messages/messages.page.scss":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-received-div {\n  margin: 10px;\n}\n\n.message-content-received {\n  width: 70% !important;\n}\n\n.message-received {\n  background-color: #30ade0;\n  text-align: left;\n  box-shadow: 0 1px 0 #899aa0;\n  border-radius: 16px;\n  display: inline-block;\n  color: #fff !important;\n  border-radius: 5px;\n  width: auto;\n  margin-left: 4%;\n  padding: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.message-sent-div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  flex-direction: row-reverse;\n  margin: 10px;\n}\n\n.message-content-sent {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  width: 70% !important;\n}\n\n.message-sent {\n  position: relative;\n  right: 10px;\n  background-color: #fff;\n  border-radius: 16px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);\n  color: #181919 !important;\n  border-radius: 5px;\n  width: auto;\n  display: inline-block;\n  padding: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.background-content {\n  --background: #f5f5f5 !important;\n  font-size: 14px;\n}\n\n.message-text {\n  background: #fff;\n  border-radius: 17px;\n  padding: 6px 15px;\n  height: 34px;\n  line-height: 20px;\n  width: 80%;\n  font-size: 17px;\n  padding: 1px 0px 0px 13px !important;\n  border: 1px solid #c8c8cd;\n  margin: 10px 0;\n}\n\n.msg-button {\n  padding-left: 5px;\n  padding-bottom: 5px;\n  border-color: transparent;\n  color: #488aff;\n  background-color: transparent;\n  box-shadow: none;\n  opacity: 1;\n}\n\n.input-wrap {\n  padding: 5px;\n  display: -webkit-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcbWVzc2FnZXNcXG1lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUdBLDJCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtcmVjZWl2ZWQtZGl2IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGVudC1yZWNlaXZlZCB7XHJcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXJlY2VpdmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGFkZTA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAjODk5YWEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1zZW50LWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1jb250ZW50LXNlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2Utc2VudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4gICAgY29sb3I6ICMxODE5MTkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXRleHQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDFweCAwcHggMHB4IDEzcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Y2Q7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLm1zZy1idXR0b24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjNDg4YWZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmlucHV0LXdyYXAge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG59IiwiLm1lc3NhZ2UtcmVjZWl2ZWQtZGl2IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWVzc2FnZS1jb250ZW50LXJlY2VpdmVkIHtcbiAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xufVxuXG4ubWVzc2FnZS1yZWNlaXZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGFkZTA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgIzg5OWFhMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm1lc3NhZ2Utc2VudC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWVzc2FnZS1jb250ZW50LXNlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbn1cblxuLm1lc3NhZ2Utc2VudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGNvbG9yOiAjMTgxOTE5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uYmFja2dyb3VuZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1lc3NhZ2UtdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIHBhZGRpbmc6IDZweCAxNXB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmc6IDFweCAwcHggMHB4IDEzcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjZDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5tc2ctYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNDg4YWZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaW5wdXQtd3JhcCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/messages/messages.page.ts":
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");



var MessagesPage = /** @class */ (function () {
    function MessagesPage(util) {
        this.util = util;
        this.messages = [{ message: "Hai", messageType: "received" },
            { message: "How are you?", messageType: "received" },
            { message: "Hi there, I am also fine, thanks! And how are you?", messageType: "sent" },
            { message: "I am also fine", messageType: "received" },
            { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", messageType: "sent" },
            { message: "Good", messageType: "received" },
            { message: "What next?", messageType: "sent" },
            { message: "Nothing", messageType: "received" },
            { message: "Okay", messageType: "sent" },
            { message: "Bye!", messageType: "received" },
            { message: "Okay", messageType: "sent" }
        ];
    }
    MessagesPage.prototype.ngOnInit = function () {
    };
    MessagesPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
    ]; };
    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! raw-loader!./messages.page.html */ "./node_modules/raw-loader/index.js!./src/app/messages/messages.page.html"),
            styles: [__webpack_require__(/*! ./messages.page.scss */ "./src/app/messages/messages.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], MessagesPage);
    return MessagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=messages-messages-module-es5.js.map