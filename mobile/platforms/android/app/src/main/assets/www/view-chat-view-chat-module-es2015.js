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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-chat.page */ "./src/app/view-chat/view-chat.page.ts");




const routes = [
    {
        path: '',
        component: _view_chat_page__WEBPACK_IMPORTED_MODULE_3__["ViewChatPage"]
    }
];
let ViewChatPageRoutingModule = class ViewChatPageRoutingModule {
};
ViewChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewChatPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-chat-routing.module */ "./src/app/view-chat/view-chat-routing.module.ts");
/* harmony import */ var _view_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-chat.page */ "./src/app/view-chat/view-chat.page.ts");







let ViewChatPageModule = class ViewChatPageModule {
};
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



/***/ }),

/***/ "./src/app/view-chat/view-chat.page.scss":
/*!***********************************************!*\
  !*** ./src/app/view-chat/view-chat.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chats-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 10px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.chats-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.chats .custom-icon-chat-icon-1 {\n  font-size: 40px;\n  color: white;\n}\n\n.message-received-div {\n  margin: 10px;\n}\n\n.message-content-received {\n  width: 70% !important;\n}\n\n.message-received {\n  background-color: #ececec;\n  text-align: left;\n  box-shadow: 0 1px 0 #c5c5c5;\n  border-radius: 16px;\n  display: inline-block;\n  color: black !important;\n  border-radius: 2px;\n  border-bottom-right-radius: 25px;\n  border-top-right-radius: 25px;\n  width: auto;\n  margin-left: 4%;\n  padding: 12px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 12px;\n  margin: 0px 0 8px 0;\n}\n\n.message-sent-div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  flex-direction: row-reverse;\n  margin: 10px;\n}\n\n.message-content-sent {\n  max-width: 70% !important;\n}\n\n.recieved-time {\n  left: 15px;\n}\n\n.recieved-time .time {\n  font-size: 10px;\n}\n\n.sent-time {\n  text-align: end;\n  right: 20px;\n  position: absolute;\n}\n\n.sent-time .time {\n  font-size: 10px;\n}\n\n.sent-time span.custom-icon-chat-completed-tick-icon {\n  font-size: 14px;\n  padding-left: 5px;\n}\n\n.message-sent {\n  position: relative;\n  right: 10px;\n  background-color: #FE9C45;\n  border-radius: 16px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);\n  color: white;\n  border-radius: 2px;\n  border-bottom-left-radius: 25px;\n  border-top-left-radius: 25px;\n  width: auto;\n  display: inline-block;\n  padding: 12px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 12px;\n  margin: 15px 0 8px 0;\n}\n\n.message-sent-start {\n  border-radius: 25px;\n  border-bottom-right-radius: 2px;\n}\n\n.message-sent-end {\n  border-radius: 25px;\n  border-top-right-radius: 2px;\n}\n\n.message-received-start {\n  border-radius: 25px;\n  border-bottom-left-radius: 2px;\n}\n\n.message-received-end {\n  border-radius: 25px;\n  border-top-left-radius: 2px;\n}\n\n.background-content {\n  --background: #f5f5f5 !important;\n  font-size: 14px;\n}\n\n.message-text {\n  background: #fff;\n  padding: 6px 15px;\n  height: 34px;\n  line-height: 20px;\n  font-size: 17px;\n  margin: 10px 0;\n}\n\n.msg-button {\n  padding-left: 5px;\n  padding-bottom: 5px;\n  border-color: transparent;\n  color: #488aff;\n  background-color: transparent;\n  box-shadow: none;\n  opacity: 1;\n}\n\n.type-message {\n  border: solid 1px #dcdcdc;\n  border-radius: 50px;\n  margin: 0px 20px 10px 20px;\n  box-shadow: -7px 7px 20px 0px rgba(0, 0, 0, 0.25);\n}\n\n.type-message .custom-icon-chat-reply-icon {\n  font-size: 25px;\n  margin: auto 15px;\n}\n\n.type-message ion-icon {\n  font-size: 25px;\n  margin: auto 15px;\n  background: #FE9C45;\n  padding: 10px 25px;\n  border-radius: 50px;\n  color: #fff;\n}\n\nion-footer.footer-md::before,\nion-footer .footer-ios::before {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jaGF0L0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcdmlldy1jaGF0XFx2aWV3LWNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LWNoYXQvdmlldy1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNPLGdCQUFBO0VBQ0gsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFHQSwyQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0FDQ1I7O0FER0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7QUNISjs7QURLSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0hSOztBRE1JO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0pSOztBRFVJOztFQUVJLHNCQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC92aWV3LWNoYXQvdmlldy1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0cy1jb250ZW50LWRpdiB7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2hhdHMtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uY2hhdHMgLmN1c3RvbS1pY29uLWNoYXQtaWNvbi0xIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lc3NhZ2UtcmVjZWl2ZWQtZGl2IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGVudC1yZWNlaXZlZCB7XHJcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXJlY2VpdmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYigxOTcsIDE5NywgMTk3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwcHggMCA4cHggMDtcclxufVxyXG5cclxuLm1lc3NhZ2Utc2VudC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGVudC1zZW50IHtcclxuICAgIG1heC13aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWNpZXZlZC10aW1lIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcblxyXG4gICAgLnRpbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlbnQtdGltZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAudGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4uY3VzdG9tLWljb24tY2hhdC1jb21wbGV0ZWQtdGljay1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHhcclxuICAgIH1cclxufVxyXG5cclxuLm1lc3NhZ2Utc2VudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTlDNDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgOHB4IDA7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXNlbnQtc3RhcnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXNlbnQtZW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1yZWNlaXZlZC1zdGFydCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1yZWNlaXZlZC1lbmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuXHJcbi5iYWNrZ3JvdW5kLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXRleHQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLm1zZy1idXR0b24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjNDg4YWZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnR5cGUtbWVzc2FnZSB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGNkY2RjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTdweCA3cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHJcbiAgICAuY3VzdG9tLWljb24tY2hhdC1yZXBseS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuXHJcbiAgICAmLmZvb3Rlci1tZDo6YmVmb3JlLFxyXG4gICAgLmZvb3Rlci1pb3M6OmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIH1cclxufSIsIi5jaGF0cy1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2hhdHMtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmNoYXRzIC5jdXN0b20taWNvbi1jaGF0LWljb24tMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWVzc2FnZS1yZWNlaXZlZC1kaXYge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5tZXNzYWdlLWNvbnRlbnQtcmVjZWl2ZWQge1xuICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG59XG5cbi5tZXNzYWdlLXJlY2VpdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAjYzVjNWM1O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgcGFkZGluZzogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4IDAgOHB4IDA7XG59XG5cbi5tZXNzYWdlLXNlbnQtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1lc3NhZ2UtY29udGVudC1zZW50IHtcbiAgbWF4LXdpZHRoOiA3MCUgIWltcG9ydGFudDtcbn1cblxuLnJlY2lldmVkLXRpbWUge1xuICBsZWZ0OiAxNXB4O1xufVxuLnJlY2lldmVkLXRpbWUgLnRpbWUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zZW50LXRpbWUge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc2VudC10aW1lIC50aW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnNlbnQtdGltZSBzcGFuLmN1c3RvbS1pY29uLWNoYXQtY29tcGxldGVkLXRpY2staWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5tZXNzYWdlLXNlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU5QzQ1O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAxNXB4IDAgOHB4IDA7XG59XG5cbi5tZXNzYWdlLXNlbnQtc3RhcnQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xufVxuXG4ubWVzc2FnZS1zZW50LWVuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG59XG5cbi5tZXNzYWdlLXJlY2VpdmVkLXN0YXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xufVxuXG4ubWVzc2FnZS1yZWNlaXZlZC1lbmQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWVzc2FnZS10ZXh0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDE1cHg7XG4gIGhlaWdodDogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5tc2ctYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNDg4YWZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udHlwZS1tZXNzYWdlIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2RjZGNkYztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luOiAwcHggMjBweCAxMHB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IC03cHggN3B4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4udHlwZS1tZXNzYWdlIC5jdXN0b20taWNvbi1jaGF0LXJlcGx5LWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogYXV0byAxNXB4O1xufVxuLnR5cGUtbWVzc2FnZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiBhdXRvIDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGRTlDNDU7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1mb290ZXIuZm9vdGVyLW1kOjpiZWZvcmUsXG5pb24tZm9vdGVyIC5mb290ZXItaW9zOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");



let ViewChatPage = class ViewChatPage {
    constructor(util) {
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
    ngOnInit() {
    }
    getCss(index) {
        let type = this.messages[index].messageType;
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
    }
};
ViewChatPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
];
ViewChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-chat',
        template: __webpack_require__(/*! raw-loader!./view-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-chat/view-chat.page.html"),
        styles: [__webpack_require__(/*! ./view-chat.page.scss */ "./src/app/view-chat/view-chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
], ViewChatPage);



/***/ })

}]);
//# sourceMappingURL=view-chat-view-chat-module-es2015.js.map