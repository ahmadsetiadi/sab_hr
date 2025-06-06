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

module.exports = ".email-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 30px 20px 0px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.email-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.email .custom-icon-email-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.email-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px;\n}\n\n.email-item img {\n  width: 20px;\n  margin: 0 auto;\n  margin-right: 8px;\n}\n\n.all-label-list {\n  border-top: solid 1px #8a8989;\n  margin-top: 10px;\n}\n\n.all-label-list ion-list-header {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  color: #fe9c45;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.inbox-count {\n  border-radius: 50px;\n  background: #FE9C45;\n  color: white;\n  padding: 0 15px;\n  margin: 0;\n  margin-right: 15px;\n  box-shadow: -2px 4px 20px 5px #fe9c457d;\n}\n\n.spam-count {\n  border-radius: 50px;\n  background: rgba(252, 196, 147, 0.61);\n  color: #FE9C45;\n  padding: 0 15px;\n  margin: 0;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcZW1haWxcXGVtYWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1haWwvZW1haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZ0JBQUE7RUFDQyxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0k7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NSOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZW1haWwvZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsLWNvbnRlbnQtZGl2IHtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4IDBweDtcclxufVxyXG5cclxuLmhlYWQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVtYWlsLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmVtYWlsIC5jdXN0b20taWNvbi1lbWFpbC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVtYWlsLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XHJcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uZW1haWwtaXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYWxsLWxhYmVsLWxpc3Qge1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYigxMzgsIDEzNywgMTM3KTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgICAgICBjb2xvcjogI2ZlOWM0NTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG5cclxuLmluYm94LWNvdW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogLTJweCA0cHggMjBweCA1cHggI2ZlOWM0NTdkO1xyXG59XHJcblxyXG4uc3BhbS1jb3VudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDE5NiwgMTQ3LCAwLjYxKTtcclxuICAgIGNvbG9yOiAjRkU5QzQ1O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59IiwiLmVtYWlsLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggMjBweCAwcHg7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbWFpbC1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uZW1haWwgLmN1c3RvbS1pY29uLWVtYWlsLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVtYWlsLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xuICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmVtYWlsLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmFsbC1sYWJlbC1saXN0IHtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICM4YTg5ODk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYWxsLWxhYmVsLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIGNvbG9yOiAjZmU5YzQ1O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbmJveC1jb3VudCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNGRTlDNDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm94LXNoYWRvdzogLTJweCA0cHggMjBweCA1cHggI2ZlOWM0NTdkO1xufVxuXG4uc3BhbS1jb3VudCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAxOTYsIDE0NywgMC42MSk7XG4gIGNvbG9yOiAjRkU5QzQ1O1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */"

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