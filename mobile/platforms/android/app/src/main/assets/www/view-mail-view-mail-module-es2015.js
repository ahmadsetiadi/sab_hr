(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-mail-view-mail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-mail/view-mail.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-mail/view-mail.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Email</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"email-empty-div\">\r\n    <ion-item lines=\"none\" class=\"email\">\r\n      <span slot=\"start\" class=\"head-title\">Inbox</span> <span slot=\"end\" class=\"custom-icon-email-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"email-content-div\">\r\n    <ion-row class=\"actions-row\">\r\n      <ion-col size=\"7\">\r\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"download\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"trash\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"mail\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"more\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"subject-head\">{{mail.subject}}</div>\r\n    <ion-item class=\"inbox-item\" lines='none'><span>Inbox</span>\r\n      <ion-icon slot=\"end\" name=\"star-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-row class=\"details-row\">\r\n      <ion-col size=\"2\" class=\"letter-icon-col\">\r\n        <div class=\"letter-icon\">{{mail.initial}}</div>\r\n      </ion-col>\r\n      <ion-col size=\"8\" class=\"details-col\">\r\n        <ion-row>\r\n          <h4 class=\"chat-name\">{{mail.from}} </h4>\r\n          <img class=\"time-icon\" src=\"./assets/imgs/time.png\"><span class=\"chat-time\">{{mail.time}}</span>\r\n        </ion-row>\r\n        <ion-row>\r\n          <h2 class=\"chat-text\"> to me </h2>\r\n          <ion-icon name=\"arrow-dropdown\"></ion-icon>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"end-col\">\r\n        <ion-icon name=\"undo\"></ion-icon>\r\n        <ion-icon name=\"more\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"subject-head\">{{mail.subject}}</div>\r\n    <div class=\"message-content\">{{mail.message}}</div>\r\n    <ion-row class=\"action-btns\">\r\n      <ion-col size=\"3.5\"> <span>Reply</span></ion-col>\r\n      <ion-col size=\"3.5\"> <span>Reply All</span></ion-col>\r\n      <ion-col size=\"3.5\"> <span>Forward</span></ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"composeMail()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/view-mail/view-mail-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-mail/view-mail-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewMailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMailPageRoutingModule", function() { return ViewMailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_mail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-mail.page */ "./src/app/view-mail/view-mail.page.ts");




const routes = [
    {
        path: '',
        component: _view_mail_page__WEBPACK_IMPORTED_MODULE_3__["ViewMailPage"]
    }
];
let ViewMailPageRoutingModule = class ViewMailPageRoutingModule {
};
ViewMailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewMailPageRoutingModule);



/***/ }),

/***/ "./src/app/view-mail/view-mail.module.ts":
/*!***********************************************!*\
  !*** ./src/app/view-mail/view-mail.module.ts ***!
  \***********************************************/
/*! exports provided: ViewMailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMailPageModule", function() { return ViewMailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-mail-routing.module */ "./src/app/view-mail/view-mail-routing.module.ts");
/* harmony import */ var _view_mail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-mail.page */ "./src/app/view-mail/view-mail.page.ts");







let ViewMailPageModule = class ViewMailPageModule {
};
ViewMailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewMailPageRoutingModule"]
        ],
        declarations: [_view_mail_page__WEBPACK_IMPORTED_MODULE_6__["ViewMailPage"]]
    })
], ViewMailPageModule);



/***/ }),

/***/ "./src/app/view-mail/view-mail.page.scss":
/*!***********************************************!*\
  !*** ./src/app/view-mail/view-mail.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 20px 20px 0px 20px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.email-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.email .custom-icon-email-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.subject-head {\n  margin-top: 15px;\n  line-height: 30px;\n}\n\n.inbox-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.inbox-item span {\n  border-radius: 50px;\n  color: #ff7800;\n  padding: 4px 10px;\n  background: rgba(255, 193, 138, 0.73);\n  font-size: 12px;\n}\n\n.inbox-item ion-icon {\n  color: #FE9C45;\n}\n\n.letter-icon {\n  border-radius: 50px;\n  color: white;\n  text-align: center;\n  font-size: 25px;\n  height: 40px;\n  width: 40px;\n  padding-top: 2px;\n  background-color: purple;\n}\n\n.time-icon {\n  width: 16px;\n  height: 16px;\n  margin-top: 2px;\n  margin-right: 5px;\n}\n\n.chat-name {\n  font-size: 14px;\n  margin: 0;\n  width: calc(100% - 80px);\n}\n\n.chat-time {\n  font-size: 12px;\n  color: #777575;\n}\n\n.details-row .end-col {\n  margin: auto;\n}\n\n.details-row .end-col ion-icon {\n  font-size: 25px;\n}\n\n.chat-text {\n  font-size: 13px;\n  margin: 0;\n  color: #777575;\n}\n\n.action-btns ion-col {\n  border-radius: 50px;\n  background: white;\n  box-shadow: -2px 4px 20px 5px #dcd7d2c9;\n  text-align: center;\n  margin: 0 auto;\n  font-size: 12px;\n  padding: 10px 0;\n}\n\n.message-content {\n  margin: 20px 0 30px 0;\n  font-size: 14px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1tYWlsL0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcdmlldy1tYWlsXFx2aWV3LW1haWwucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LW1haWwvdmlldy1tYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxjQUFBO0FDQVI7O0FESUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREtJO0VBQ0ksWUFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtBQ0ZaOztBRE9BO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE9BO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDSko7O0FET0E7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC92aWV3LW1haWwvdmlldy1tYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbC1jb250ZW50LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lbWFpbC1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5lbWFpbCAuY3VzdG9tLWljb24tZW1haWwtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdWJqZWN0LWhlYWQge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaW5ib3gtaXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDEyMCwgMCk7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgMTM4LCAwLjczKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjRkU5QzQ1O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGV0dGVyLWljb24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxufVxyXG5cclxuLnRpbWUtaWNvbiB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uY2hhdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxufVxyXG5cclxuLmNoYXQtdGltZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDExOSwgMTE3LCAxMTcpO1xyXG59XHJcblxyXG4uZGV0YWlscy1yb3cge1xyXG4gICAgLmVuZC1jb2wge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2hhdC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiByZ2IoMTE5LCAxMTcsIDExNyk7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRucyBpb24tY29sIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IC0ycHggNHB4IDIwcHggNXB4ICNkY2Q3ZDJjOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG4ubWVzc2FnZS1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMjBweCAwIDMwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59IiwiLmVtYWlsLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwcHggMjBweDtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVtYWlsLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5lbWFpbCAuY3VzdG9tLWljb24tZW1haWwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3ViamVjdC1oZWFkIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5pbmJveC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuLmluYm94LWl0ZW0gc3BhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjZmY3ODAwO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgMTM4LCAwLjczKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmluYm94LWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogI0ZFOUM0NTtcbn1cblxuLmxldHRlci1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xufVxuXG4udGltZS1pY29uIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNoYXQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG59XG5cbi5jaGF0LXRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3NTc1O1xufVxuXG4uZGV0YWlscy1yb3cgLmVuZC1jb2wge1xuICBtYXJnaW46IGF1dG87XG59XG4uZGV0YWlscy1yb3cgLmVuZC1jb2wgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jaGF0LXRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM3Nzc1NzU7XG59XG5cbi5hY3Rpb24tYnRucyBpb24tY29sIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IC0ycHggNHB4IDIwcHggNXB4ICNkY2Q3ZDJjOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5tZXNzYWdlLWNvbnRlbnQge1xuICBtYXJnaW46IDIwcHggMCAzMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZhYi1hZGQtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view-mail/view-mail.page.ts":
/*!*********************************************!*\
  !*** ./src/app/view-mail/view-mail.page.ts ***!
  \*********************************************/
/*! exports provided: ViewMailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMailPage", function() { return ViewMailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ViewMailPage = class ViewMailPage {
    constructor(util, navContrl) {
        this.util = util;
        this.navContrl = navContrl;
        this.mail = {
            from: 'Facebook', initial: 'F', subject: 'Why do we use it?', time: '1:04 AM', stared: false,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
        };
    }
    ngOnInit() {
    }
    composeMail() {
        this.navContrl.navigateForward("/compose-mail");
    }
};
ViewMailPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ViewMailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-mail',
        template: __webpack_require__(/*! raw-loader!./view-mail.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-mail/view-mail.page.html"),
        styles: [__webpack_require__(/*! ./view-mail.page.scss */ "./src/app/view-mail/view-mail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ViewMailPage);



/***/ })

}]);
//# sourceMappingURL=view-mail-view-mail-module-es2015.js.map