(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compose-mail-compose-mail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/compose-mail/compose-mail.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compose-mail/compose-mail.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Email</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"email-empty-div\">\r\n    <ion-item lines=\"none\" class=\"email\">\r\n      <span slot=\"start\" class=\"head-title\">New Message</span> <span slot=\"end\" class=\"custom-icon-email-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"email-content-div\">\r\n    <ion-row class=\"actions-row\">\r\n      <ion-col size=\"9\">\r\n        <span>Compose</span>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"attach\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"more\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-item detail class=\"settings-item\">\r\n      <ion-label position=\"fixed\">From</ion-label>\r\n      <ion-input value=\"test@gmail.com\"></ion-input>\r\n    </ion-item>\r\n    <ion-item detail class=\"settings-item\">\r\n      <ion-label position=\"fixed\">To</ion-label>\r\n      <ion-input></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"settings-item\">\r\n      <ion-label position=\"fixed\">Subject</ion-label>\r\n      <ion-input></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"settings-item\">\r\n      <ion-label position=\"stacked\">Compose Mail</ion-label>\r\n      <ion-textarea class=\"compose-text\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" class=\"loginButton\" (click)=\"send()\">\r\n      <ion-icon name=\"send\"></ion-icon>&nbsp; Send Email\r\n    </ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/compose-mail/compose-mail-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/compose-mail/compose-mail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ComposeMailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeMailPageRoutingModule", function() { return ComposeMailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _compose_mail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compose-mail.page */ "./src/app/compose-mail/compose-mail.page.ts");




var routes = [
    {
        path: '',
        component: _compose_mail_page__WEBPACK_IMPORTED_MODULE_3__["ComposeMailPage"]
    }
];
var ComposeMailPageRoutingModule = /** @class */ (function () {
    function ComposeMailPageRoutingModule() {
    }
    ComposeMailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ComposeMailPageRoutingModule);
    return ComposeMailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/compose-mail/compose-mail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/compose-mail/compose-mail.module.ts ***!
  \*****************************************************/
/*! exports provided: ComposeMailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeMailPageModule", function() { return ComposeMailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _compose_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compose-mail-routing.module */ "./src/app/compose-mail/compose-mail-routing.module.ts");
/* harmony import */ var _compose_mail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compose-mail.page */ "./src/app/compose-mail/compose-mail.page.ts");







var ComposeMailPageModule = /** @class */ (function () {
    function ComposeMailPageModule() {
    }
    ComposeMailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _compose_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComposeMailPageRoutingModule"]
            ],
            declarations: [_compose_mail_page__WEBPACK_IMPORTED_MODULE_6__["ComposeMailPage"]]
        })
    ], ComposeMailPageModule);
    return ComposeMailPageModule;
}());



/***/ }),

/***/ "./src/app/compose-mail/compose-mail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/compose-mail/compose-mail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 20px 20px 0px 20px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.email-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.email .custom-icon-email-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.settings-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px;\n}\n\n.settings-item .label-fixed {\n  max-width: 65px !important;\n  min-width: 65px !important;\n}\n\n.actions-row span {\n  font-size: 12px;\n}\n\n.actions-row ion-icon {\n  font-size: 25px;\n}\n\n.loginButton ion-icon {\n  color: white;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9zZS1tYWlsL0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcY29tcG9zZS1tYWlsXFxjb21wb3NlLW1haWwucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb3NlLW1haWwvY29tcG9zZS1tYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENJO0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtBQ0NSOztBRElJO0VBQ0ksZUFBQTtBQ0RSOztBRElJO0VBQ0ksZUFBQTtBQ0ZSOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvc2UtbWFpbC9jb21wb3NlLW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsLWNvbnRlbnQtZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAwcHggMjBweDtcclxufVxyXG5cclxuLmhlYWQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVtYWlsLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmVtYWlsIC5jdXN0b20taWNvbi1lbWFpbC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNldHRpbmdzLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XHJcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG5cclxuICAgIC5sYWJlbC1maXhlZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb25zLXJvdyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ2luQnV0dG9uIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufSIsIi5lbWFpbC1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbWFpbC1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uZW1haWwgLmN1c3RvbS1pY29uLWVtYWlsLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNldHRpbmdzLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xuICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi5zZXR0aW5ncy1pdGVtIC5sYWJlbC1maXhlZCB7XG4gIG1heC13aWR0aDogNjVweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDY1cHggIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbnMtcm93IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uYWN0aW9ucy1yb3cgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5sb2dpbkJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/compose-mail/compose-mail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/compose-mail/compose-mail.page.ts ***!
  \***************************************************/
/*! exports provided: ComposeMailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeMailPage", function() { return ComposeMailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");



var ComposeMailPage = /** @class */ (function () {
    function ComposeMailPage(util) {
        this.util = util;
    }
    ComposeMailPage.prototype.ngOnInit = function () {
    };
    ComposeMailPage.prototype.send = function () {
        this.util.showAlert("Smart HR", "Mail Sent Successfully");
        this.util.popBack();
    };
    ComposeMailPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
    ]; };
    ComposeMailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compose-mail',
            template: __webpack_require__(/*! raw-loader!./compose-mail.page.html */ "./node_modules/raw-loader/index.js!./src/app/compose-mail/compose-mail.page.html"),
            styles: [__webpack_require__(/*! ./compose-mail.page.scss */ "./src/app/compose-mail/compose-mail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], ComposeMailPage);
    return ComposeMailPage;
}());



/***/ })

}]);
//# sourceMappingURL=compose-mail-compose-mail-module-es5.js.map