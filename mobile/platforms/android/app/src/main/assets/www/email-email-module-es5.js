(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/email/email.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email/email.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Email</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"email-empty-div\">\r\n    <ion-item lines=\"none\" class=\"email\">\r\n      <span slot=\"start\" class=\"head-title\">List of All Inboxes</span> <span slot=\"end\"\r\n        class=\"custom-icon-email-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"email-content-div\">\r\n    <ion-item detail class=\"email-item\" lines=\"none\" (click)=\"mailList()\">\r\n      <img src=\"./assets/imgs/inbox.png\">\r\n      <ion-label style=\"color: #FE9C45;\">\r\n        Inbox\r\n      </ion-label>\r\n      <span class=\"inbox-count\" slot=\"end\">31</span>\r\n    </ion-item>\r\n    <ion-item detail class=\"email-item\" lines=\"none\" (click)=\"mailList()\">\r\n      <img src=\"./assets/imgs/sent.png\">\r\n      <ion-label>\r\n        Sent\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item detail class=\"email-item\" lines=\"none\" (click)=\"mailList()\">\r\n      <img src=\"./assets/imgs/sent-icon.png\">\r\n      <ion-label>\r\n        Outbox\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item detail class=\"email-item\" lines=\"none\" (click)=\"mailList()\">\r\n      <img src=\"./assets/imgs/drafts.png\">\r\n      <ion-label>\r\n        Drafts\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item detail class=\"email-item\" lines=\"none\" (click)=\"mailList()\">\r\n      <img src=\"./assets/imgs/spam.png\">\r\n      <ion-label>\r\n        Spam\r\n      </ion-label>\r\n      <span class=\"spam-count\" slot=\"end\">31</span>\r\n    </ion-item>\r\n    <ion-list class=\"all-label-list\">\r\n      <ion-list-header>All Labels</ion-list-header>\r\n      <ion-item class=\"email-item\" lines=\"none\" (click)=\"mailList()\">\r\n        <img src=\"./assets/imgs/star.png\">\r\n        <ion-label>\r\n          Starred\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item class=\"email-item\" lines=\"none\" (click)=\"mailList()\">\r\n        <img src=\"./assets/imgs/tag.png\">\r\n        <ion-label>\r\n          Important\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"composeMail()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/email/email-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/email/email-routing.module.ts ***!
  \***********************************************/
/*! exports provided: EmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPageRoutingModule", function() { return EmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email.page */ "./src/app/email/email.page.ts");




var routes = [
    {
        path: '',
        component: _email_page__WEBPACK_IMPORTED_MODULE_3__["EmailPage"]
    }
];
var EmailPageRoutingModule = /** @class */ (function () {
    function EmailPageRoutingModule() {
    }
    EmailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EmailPageRoutingModule);
    return EmailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/email/email.module.ts":
/*!***************************************!*\
  !*** ./src/app/email/email.module.ts ***!
  \***************************************/
/*! exports provided: EmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPageModule", function() { return EmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-routing.module */ "./src/app/email/email-routing.module.ts");
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email.page */ "./src/app/email/email.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var EmailPageModule = /** @class */ (function () {
    function EmailPageModule() {
    }
    EmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _email_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmailPageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_email_page__WEBPACK_IMPORTED_MODULE_6__["EmailPage"]]
        })
    ], EmailPageModule);
    return EmailPageModule;
}());



/***/ }),

/***/ "./src/app/email/email.page.scss":
/*!***************************************!*\
  !*** ./src/app/email/email.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 30px 20px 0px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.email-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.email .custom-icon-email-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.email-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px;\n}\n\n.email-item img {\n  width: 20px;\n  margin: 0 auto;\n  margin-right: 8px;\n}\n\n.all-label-list {\n  border-top: solid 1px #8a8989;\n  margin-top: 10px;\n}\n\n.all-label-list ion-list-header {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  color: #fe9c45;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.inbox-count {\n  border-radius: 50px;\n  background: #FE9C45;\n  color: white;\n  padding: 0 15px;\n  margin: 0;\n  margin-right: 15px;\n  box-shadow: -2px 4px 20px 5px #fe9c457d;\n}\n\n.spam-count {\n  border-radius: 50px;\n  background: rgba(252, 196, 147, 0.61);\n  color: #FE9C45;\n  padding: 0 15px;\n  margin: 0;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwvRDpcXHNpbmFyXFxhcHAyL3NyY1xcYXBwXFxlbWFpbFxcZW1haWwucGFnZS5zY3NzIiwic3JjL2FwcC9lbWFpbC9lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxnQkFBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDSTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ1I7O0FER0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9lbWFpbC9lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1haWwtY29udGVudC1kaXYge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMHB4O1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZW1haWwtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uZW1haWwgLmN1c3RvbS1pY29uLWVtYWlsLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZW1haWwtaXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5lbWFpbC1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5hbGwtbGFiZWwtbGlzdCB7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiKDEzOCwgMTM3LCAxMzcpO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmU5YzQ1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5ib3gtY291bnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDRweCAyMHB4IDVweCAjZmU5YzQ1N2Q7XHJcbn1cclxuXHJcbi5zcGFtLWNvdW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMTk2LCAxNDcsIDAuNjEpO1xyXG4gICAgY29sb3I6ICNGRTlDNDU7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn0iLCIuZW1haWwtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAyMHB4IDBweDtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVtYWlsLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5lbWFpbCAuY3VzdG9tLWljb24tZW1haWwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZW1haWwtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uZW1haWwtaXRlbSBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uYWxsLWxhYmVsLWxpc3Qge1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzhhODk4OTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5hbGwtbGFiZWwtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgY29sb3I6ICNmZTljNDU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmluYm94LWNvdW50IHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogI0ZFOUM0NTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3gtc2hhZG93OiAtMnB4IDRweCAyMHB4IDVweCAjZmU5YzQ1N2Q7XG59XG5cbi5zcGFtLWNvdW50IHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDE5NiwgMTQ3LCAwLjYxKTtcbiAgY29sb3I6ICNGRTlDNDU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/email/email.page.ts":
/*!*************************************!*\
  !*** ./src/app/email/email.page.ts ***!
  \*************************************/
/*! exports provided: EmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPage", function() { return EmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EmailPage = /** @class */ (function () {
    function EmailPage(util, navContrl) {
        this.util = util;
        this.navContrl = navContrl;
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCircle"];
    }
    EmailPage.prototype.ngOnInit = function () {
    };
    EmailPage.prototype.mailList = function () {
        this.navContrl.navigateForward("/mail-list");
    };
    EmailPage.prototype.composeMail = function () {
        this.navContrl.navigateForward("/compose-mail");
    };
    EmailPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    EmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! raw-loader!./email.page.html */ "./node_modules/raw-loader/index.js!./src/app/email/email.page.html"),
            styles: [__webpack_require__(/*! ./email.page.scss */ "./src/app/email/email.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], EmailPage);
    return EmailPage;
}());



/***/ })

}]);
//# sourceMappingURL=email-email-module-es5.js.map