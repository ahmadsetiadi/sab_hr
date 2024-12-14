(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-chat-view-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-chat/view-chat.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-chat/view-chat.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Chats</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"chats-empty-div\">\r\n    <ion-item lines=\"none\" class=\"chats\">\r\n      <span slot=\"start\" class=\"head-title\">Sarah Isha Chats</span> <span slot=\"end\"\r\n        class=\"custom-icon-chat-icon-1\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"chats-content-div\">\r\n    <div class=\"message-{{eachChat.messageType}}-div\" *ngFor=\"let eachChat of messages; let i = index;\">\r\n      <div class=\"message-content-{{eachChat.messageType}}\">\r\n        <ion-row>\r\n          <div class=\"message-{{eachChat.messageType}}\" [ngClass]=\"getCss(i)\"> {{ eachChat.message }}\r\n          </div>\r\n        </ion-row>\r\n        <ion-row [ngClass]=\"(eachChat.messageType==='sent')?'sent-time':'recieved-time'\">\r\n          <span class=\"time\">02:21 AM</span><span *ngIf=\"eachChat.messageType==='sent'\"\r\n            class=\"custom-icon-chat-completed-tick-icon\"></span>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <div class=\"type-message\">\r\n    <ion-row>\r\n      <span class=\"custom-icon-chat-reply-icon\"></span>\r\n      <ion-input class=\"message-text\" id=\"msgTxt\" placeholder=\"Message\" type=\"text\"></ion-input>\r\n      <ion-icon name=\"send\"></ion-icon>\r\n    </ion-row>\r\n  </div>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/view-chat/view-chat-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-chat/view-chat-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChatPageRoutingModule", function() { return ViewChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-chat.page */ "./src/app/view-chat/view-chat.page.ts");




var routes = [
    {
        path: '',
        component: _view_chat_page__WEBPACK_IMPORTED_MODULE_3__["ViewChatPage"]
    }
];
var ViewChatPageRoutingModule = /** @class */ (function () {
    function ViewChatPageRoutingModule() {
    }
    ViewChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewChatPageRoutingModule);
    return ViewChatPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/view-chat/view-chat.module.ts":
/*!***********************************************!*\
  !*** ./src/app/view-chat/view-chat.module.ts ***!
  \***********************************************/
/*! exports provided: ViewChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChatPageModule", function() { return ViewChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-chat-routing.module */ "./src/app/view-chat/view-chat-routing.module.ts");
/* harmony import */ var _view_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-chat.page */ "./src/app/view-chat/view-chat.page.ts");







var ViewChatPageModule = /** @class */ (function () {
    function ViewChatPageModule() {
    }
    ViewChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewChatPageRoutingModule"]
            ],
            declarations: [_view_chat_page__WEBPACK_IMPORTED_MODULE_6__["ViewChatPage"]]
        })
    ], ViewChatPageModule);
    return ViewChatPageModule;
}());



/***/ }),

/***/ "./src/app/view-chat/view-chat.page.scss":
/*!***********************************************!*\
  !*** ./src/app/view-chat/view-chat.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chats-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 10px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.chats-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.chats .custom-icon-chat-icon-1 {\n  font-size: 40px;\n  color: white;\n}\n\n.message-received-div {\n  margin: 10px;\n}\n\n.message-content-received {\n  width: 70% !important;\n}\n\n.message-received {\n  background-color: #ececec;\n  text-align: left;\n  box-shadow: 0 1px 0 #c5c5c5;\n  border-radius: 16px;\n  display: inline-block;\n  color: black !important;\n  border-radius: 2px;\n  border-bottom-right-radius: 25px;\n  border-top-right-radius: 25px;\n  width: auto;\n  margin-left: 4%;\n  padding: 12px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 12px;\n  margin: 0px 0 8px 0;\n}\n\n.message-sent-div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  flex-direction: row-reverse;\n  margin: 10px;\n}\n\n.message-content-sent {\n  max-width: 70% !important;\n}\n\n.recieved-time {\n  left: 15px;\n}\n\n.recieved-time .time {\n  font-size: 10px;\n}\n\n.sent-time {\n  text-align: end;\n  right: 20px;\n  position: absolute;\n}\n\n.sent-time .time {\n  font-size: 10px;\n}\n\n.sent-time span.custom-icon-chat-completed-tick-icon {\n  font-size: 14px;\n  padding-left: 5px;\n}\n\n.message-sent {\n  position: relative;\n  right: 10px;\n  background-color: #FE9C45;\n  border-radius: 16px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);\n  color: white;\n  border-radius: 2px;\n  border-bottom-left-radius: 25px;\n  border-top-left-radius: 25px;\n  width: auto;\n  display: inline-block;\n  padding: 12px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 12px;\n  margin: 15px 0 8px 0;\n}\n\n.message-sent-start {\n  border-radius: 25px;\n  border-bottom-right-radius: 2px;\n}\n\n.message-sent-end {\n  border-radius: 25px;\n  border-top-right-radius: 2px;\n}\n\n.message-received-start {\n  border-radius: 25px;\n  border-bottom-left-radius: 2px;\n}\n\n.message-received-end {\n  border-radius: 25px;\n  border-top-left-radius: 2px;\n}\n\n.background-content {\n  --background: #f5f5f5 !important;\n  font-size: 14px;\n}\n\n.message-text {\n  background: #fff;\n  padding: 6px 15px;\n  height: 34px;\n  line-height: 20px;\n  font-size: 17px;\n  margin: 10px 0;\n}\n\n.msg-button {\n  padding-left: 5px;\n  padding-bottom: 5px;\n  border-color: transparent;\n  color: #488aff;\n  background-color: transparent;\n  box-shadow: none;\n  opacity: 1;\n}\n\n.type-message {\n  border: solid 1px #dcdcdc;\n  border-radius: 50px;\n  margin: 0px 20px 10px 20px;\n  box-shadow: -7px 7px 20px 0px rgba(0, 0, 0, 0.25);\n}\n\n.type-message .custom-icon-chat-reply-icon {\n  font-size: 25px;\n  margin: auto 15px;\n}\n\n.type-message ion-icon {\n  font-size: 25px;\n  margin: auto 15px;\n  background: #FE9C45;\n  padding: 10px 25px;\n  border-radius: 50px;\n  color: #fff;\n}\n\nion-footer.footer-md::before,\nion-footer .footer-ios::before {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jaGF0L0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXHZpZXctY2hhdFxcdmlldy1jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlldy1jaGF0L3ZpZXctY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDTyxnQkFBQTtFQUNILGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBR0EsMkJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtBQ0NSOztBREdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVJO0VBQ0ksZUFBQTtBQ0FSOztBREdJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRFI7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURNQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlEQUFBO0FDSEo7O0FES0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURNSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNKUjs7QURVSTs7RUFFSSxzQkFBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvdmlldy1jaGF0L3ZpZXctY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdHMtY29udGVudC1kaXYge1xyXG4gICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmhlYWQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNoYXRzLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmNoYXRzIC5jdXN0b20taWNvbi1jaGF0LWljb24tMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXJlY2VpdmVkLWRpdiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWNvbnRlbnQtcmVjZWl2ZWQge1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZS1yZWNlaXZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2IoMTk3LCAxOTcsIDE5Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMHB4IDAgOHB4IDA7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXNlbnQtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWNvbnRlbnQtc2VudCB7XHJcbiAgICBtYXgtd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVjaWV2ZWQtdGltZSB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG5cclxuICAgIC50aW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZW50LXRpbWUge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgLnRpbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLmN1c3RvbS1pY29uLWNoYXQtY29tcGxldGVkLXRpY2staWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLXNlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU5QzQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMTVweCAwIDhweCAwO1xyXG59XHJcblxyXG4ubWVzc2FnZS1zZW50LXN0YXJ0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1zZW50LWVuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtcmVjZWl2ZWQtc3RhcnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtcmVjZWl2ZWQtZW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcblxyXG4uYmFja2dyb3VuZC1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS10ZXh0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5tc2ctYnV0dG9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzQ4OGFmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi50eXBlLW1lc3NhZ2Uge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2RjZGNkYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDEwcHggMjBweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggN3B4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLWNoYXQtcmVwbHktaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZFOUM0NTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcblxyXG4gICAgJi5mb290ZXItbWQ6OmJlZm9yZSxcclxuICAgIC5mb290ZXItaW9zOjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICB9XHJcbn0iLCIuY2hhdHMtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoYXRzLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5jaGF0cyAuY3VzdG9tLWljb24tY2hhdC1pY29uLTEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lc3NhZ2UtcmVjZWl2ZWQtZGl2IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWVzc2FnZS1jb250ZW50LXJlY2VpdmVkIHtcbiAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xufVxuXG4ubWVzc2FnZS1yZWNlaXZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgI2M1YzVjNTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDBweCAwIDhweCAwO1xufVxuXG4ubWVzc2FnZS1zZW50LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5tZXNzYWdlLWNvbnRlbnQtc2VudCB7XG4gIG1heC13aWR0aDogNzAlICFpbXBvcnRhbnQ7XG59XG5cbi5yZWNpZXZlZC10aW1lIHtcbiAgbGVmdDogMTVweDtcbn1cbi5yZWNpZXZlZC10aW1lIC50aW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc2VudC10aW1lIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICByaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnNlbnQtdGltZSAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5zZW50LXRpbWUgc3Bhbi5jdXN0b20taWNvbi1jaGF0LWNvbXBsZXRlZC10aWNrLWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubWVzc2FnZS1zZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFOUM0NTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMTVweCAwIDhweCAwO1xufVxuXG4ubWVzc2FnZS1zZW50LXN0YXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbn1cblxuLm1lc3NhZ2Utc2VudC1lbmQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xufVxuXG4ubWVzc2FnZS1yZWNlaXZlZC1zdGFydCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbn1cblxuLm1lc3NhZ2UtcmVjZWl2ZWQtZW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xufVxuXG4uYmFja2dyb3VuZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1lc3NhZ2UtdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAxNXB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4ubXNnLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzQ4OGFmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnR5cGUtbWVzc2FnZSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogMHB4IDIwcHggMTBweCAyMHB4O1xuICBib3gtc2hhZG93OiAtN3B4IDdweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnR5cGUtbWVzc2FnZSAuY3VzdG9tLWljb24tY2hhdC1yZXBseS1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IGF1dG8gMTVweDtcbn1cbi50eXBlLW1lc3NhZ2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogYXV0byAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pb24tZm9vdGVyLmZvb3Rlci1tZDo6YmVmb3JlLFxuaW9uLWZvb3RlciAuZm9vdGVyLWlvczo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view-chat/view-chat.page.ts":
/*!*********************************************!*\
  !*** ./src/app/view-chat/view-chat.page.ts ***!
  \*********************************************/
/*! exports provided: ViewChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChatPage", function() { return ViewChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");



var ViewChatPage = /** @class */ (function () {
    function ViewChatPage(util) {
        this.util = util;
        this.messages = [{ message: "Hai", messageType: "received" },
            { message: "How are you?", messageType: "received" },
            { message: "Hi there, I am also fine, thanks! And how are you?", messageType: "sent" },
            { message: "I am also fine", messageType: "received" },
            { message: "I am also fine", messageType: "received" },
            { message: "I am also fine", messageType: "received" },
            { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", messageType: "sent" },
            { message: "Good", messageType: "received" },
            { message: "What next?", messageType: "sent" },
            { message: "What next?", messageType: "sent" },
            { message: "What next?", messageType: "sent" },
            { message: "Nothing", messageType: "received" },
            { message: "Okay", messageType: "sent" },
            { message: "Bye!", messageType: "received" },
            { message: "Okay", messageType: "sent" }
        ];
    }
    ViewChatPage.prototype.ngOnInit = function () {
    };
    ViewChatPage.prototype.getCss = function (index) {
        var type = this.messages[index].messageType;
        if (index == this.messages.length - 1) {
            return 'message-' + this.messages[index].messageType + '-end';
        }
        else if (this.messages[index].messageType === type) {
            if (index == 0) {
                return 'message-' + type + '-start';
            }
            else {
                if (this.messages[index - 1].messageType === type && this.messages[index + 1].messageType === type) {
                    return '';
                }
                else if (this.messages[index - 1].messageType === type && this.messages[index + 1].messageType != type) {
                    return 'message-' + type + '-end';
                }
                else if ((this.messages[index - 1].messageType != type && this.messages[index + 1].messageType === type) ||
                    (this.messages[index - 1].messageType != type && this.messages[index + 1].messageType != type)) {
                    return 'message-' + type + '-start';
                }
            }
        }
    };
    ViewChatPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
    ]; };
    ViewChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-chat',
            template: __webpack_require__(/*! raw-loader!./view-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-chat/view-chat.page.html"),
            styles: [__webpack_require__(/*! ./view-chat.page.scss */ "./src/app/view-chat/view-chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], ViewChatPage);
    return ViewChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-chat-view-chat-module-es5.js.map