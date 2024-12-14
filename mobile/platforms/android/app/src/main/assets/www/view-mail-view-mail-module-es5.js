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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_mail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-mail.page */ "./src/app/view-mail/view-mail.page.ts");




var routes = [
    {
        path: '',
        component: _view_mail_page__WEBPACK_IMPORTED_MODULE_3__["ViewMailPage"]
    }
];
var ViewMailPageRoutingModule = /** @class */ (function () {
    function ViewMailPageRoutingModule() {
    }
    ViewMailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewMailPageRoutingModule);
    return ViewMailPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-mail-routing.module */ "./src/app/view-mail/view-mail-routing.module.ts");
/* harmony import */ var _view_mail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-mail.page */ "./src/app/view-mail/view-mail.page.ts");







var ViewMailPageModule = /** @class */ (function () {
    function ViewMailPageModule() {
    }
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
    return ViewMailPageModule;
}());



/***/ }),

/***/ "./src/app/view-mail/view-mail.page.scss":
/*!***********************************************!*\
  !*** ./src/app/view-mail/view-mail.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 20px 20px 0px 20px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.email-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.email .custom-icon-email-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.subject-head {\n  margin-top: 15px;\n  line-height: 30px;\n}\n\n.inbox-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.inbox-item span {\n  border-radius: 50px;\n  color: #ff7800;\n  padding: 4px 10px;\n  background: rgba(255, 193, 138, 0.73);\n  font-size: 12px;\n}\n\n.inbox-item ion-icon {\n  color: #FE9C45;\n}\n\n.letter-icon {\n  border-radius: 50px;\n  color: white;\n  text-align: center;\n  font-size: 25px;\n  height: 40px;\n  width: 40px;\n  padding-top: 2px;\n  background-color: purple;\n}\n\n.time-icon {\n  width: 16px;\n  height: 16px;\n  margin-top: 2px;\n  margin-right: 5px;\n}\n\n.chat-name {\n  font-size: 14px;\n  margin: 0;\n  width: calc(100% - 80px);\n}\n\n.chat-time {\n  font-size: 12px;\n  color: #777575;\n}\n\n.details-row .end-col {\n  margin: auto;\n}\n\n.details-row .end-col ion-icon {\n  font-size: 25px;\n}\n\n.chat-text {\n  font-size: 13px;\n  margin: 0;\n  color: #777575;\n}\n\n.action-btns ion-col {\n  border-radius: 50px;\n  background: white;\n  box-shadow: -2px 4px 20px 5px #dcd7d2c9;\n  text-align: center;\n  margin: 0 auto;\n  font-size: 12px;\n  padding: 10px 0;\n}\n\n.message-content {\n  margin: 20px 0 30px 0;\n  font-size: 14px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1tYWlsL0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXHZpZXctbWFpbFxcdmlldy1tYWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlldy1tYWlsL3ZpZXctbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQ0NSOztBREVJO0VBQ0ksY0FBQTtBQ0FSOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNESjs7QURLSTtFQUNJLFlBQUE7QUNGUjs7QURJUTtFQUNJLGVBQUE7QUNGWjs7QURPQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE9BO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvdmlldy1tYWlsL3ZpZXctbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1haWwtY29udGVudC1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZW1haWwtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uZW1haWwgLmN1c3RvbS1pY29uLWVtYWlsLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3ViamVjdC1oZWFkIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmluYm94LWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAxMjAsIDApO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDEzOCwgMC43Myk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogI0ZFOUM0NTtcclxuICAgIH1cclxufVxyXG5cclxuLmxldHRlci1pY29uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbi50aW1lLWljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmNoYXQtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbn1cclxuXHJcbi5jaGF0LXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMTksIDExNywgMTE3KTtcclxufVxyXG5cclxuLmRldGFpbHMtcm93IHtcclxuICAgIC5lbmQtY29sIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNoYXQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogcmdiKDExOSwgMTE3LCAxMTcpO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0bnMgaW9uLWNvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDRweCAyMHB4IDVweCAjZGNkN2QyYzk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDIwcHggMCAzMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mYWItYWRkLWJ0biB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcclxufSIsIi5lbWFpbC1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbWFpbC1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uZW1haWwgLmN1c3RvbS1pY29uLWVtYWlsLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1YmplY3QtaGVhZCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaW5ib3gtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cbi5pbmJveC1pdGVtIHNwYW4ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2ZmNzgwMDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDEzOCwgMC43Myk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5pbmJveC1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICNGRTlDNDU7XG59XG5cbi5sZXR0ZXItaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1cblxuLnRpbWUtaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jaGF0LW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xufVxuXG4uY2hhdC10aW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3NzU3NTtcbn1cblxuLmRldGFpbHMtcm93IC5lbmQtY29sIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmRldGFpbHMtcm93IC5lbmQtY29sIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY2hhdC10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNzc3NTc1O1xufVxuXG4uYWN0aW9uLWJ0bnMgaW9uLWNvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAtMnB4IDRweCAyMHB4IDVweCAjZGNkN2QyYzk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4ubWVzc2FnZS1jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4IDAgMzBweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mYWItYWRkLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ViewMailPage = /** @class */ (function () {
    function ViewMailPage(util, navContrl) {
        this.util = util;
        this.navContrl = navContrl;
        this.mail = {
            from: 'Facebook', initial: 'F', subject: 'Why do we use it?', time: '1:04 AM', stared: false,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
        };
    }
    ViewMailPage.prototype.ngOnInit = function () {
    };
    ViewMailPage.prototype.composeMail = function () {
        this.navContrl.navigateForward("/compose-mail");
    };
    ViewMailPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    ViewMailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-mail',
            template: __webpack_require__(/*! raw-loader!./view-mail.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-mail/view-mail.page.html"),
            styles: [__webpack_require__(/*! ./view-mail.page.scss */ "./src/app/view-mail/view-mail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ViewMailPage);
    return ViewMailPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-mail-view-mail-module-es5.js.map