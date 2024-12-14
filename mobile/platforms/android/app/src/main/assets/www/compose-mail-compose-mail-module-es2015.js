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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _compose_mail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compose-mail.page */ "./src/app/compose-mail/compose-mail.page.ts");




const routes = [
    {
        path: '',
        component: _compose_mail_page__WEBPACK_IMPORTED_MODULE_3__["ComposeMailPage"]
    }
];
let ComposeMailPageRoutingModule = class ComposeMailPageRoutingModule {
};
ComposeMailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComposeMailPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _compose_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compose-mail-routing.module */ "./src/app/compose-mail/compose-mail-routing.module.ts");
/* harmony import */ var _compose_mail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compose-mail.page */ "./src/app/compose-mail/compose-mail.page.ts");







let ComposeMailPageModule = class ComposeMailPageModule {
};
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



/***/ }),

/***/ "./src/app/compose-mail/compose-mail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/compose-mail/compose-mail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 20px 20px 0px 20px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.email-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.email .custom-icon-email-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.settings-item {\n  --padding-start: 0;\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px;\n}\n\n.settings-item .label-fixed {\n  max-width: 65px !important;\n  min-width: 65px !important;\n}\n\n.actions-row span {\n  font-size: 12px;\n}\n\n.actions-row ion-icon {\n  font-size: 25px;\n}\n\n.loginButton ion-icon {\n  color: white;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9zZS1tYWlsL0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXGNvbXBvc2UtbWFpbFxcY29tcG9zZS1tYWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9zZS1tYWlsL2NvbXBvc2UtbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDSTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUNDUjs7QURJSTtFQUNJLGVBQUE7QUNEUjs7QURJSTtFQUNJLGVBQUE7QUNGUjs7QURNQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb3NlLW1haWwvY29tcG9zZS1tYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbC1jb250ZW50LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lbWFpbC1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5lbWFpbCAuY3VzdG9tLWljb24tZW1haWwtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHJnYigyNTQsIDE1NiwgNjkpO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuXHJcbiAgICAubGFiZWwtZml4ZWQge1xyXG4gICAgICAgIG1heC13aWR0aDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9ucy1yb3cge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn0iLCIuZW1haWwtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZW1haWwtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmVtYWlsIC5jdXN0b20taWNvbi1lbWFpbC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZXR0aW5ncy1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBwYWRkaW5nOiA0cHg7XG59XG4uc2V0dGluZ3MtaXRlbSAubGFiZWwtZml4ZWQge1xuICBtYXgtd2lkdGg6IDY1cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb25zLXJvdyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmFjdGlvbnMtcm93IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubG9naW5CdXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");



let ComposeMailPage = class ComposeMailPage {
    constructor(util) {
        this.util = util;
    }
    ngOnInit() {
    }
    send() {
        this.util.showAlert("Smart HR", "Mail Sent Successfully");
        this.util.popBack();
    }
};
ComposeMailPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
];
ComposeMailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compose-mail',
        template: __webpack_require__(/*! raw-loader!./compose-mail.page.html */ "./node_modules/raw-loader/index.js!./src/app/compose-mail/compose-mail.page.html"),
        styles: [__webpack_require__(/*! ./compose-mail.page.scss */ "./src/app/compose-mail/compose-mail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
], ComposeMailPage);



/***/ })

}]);
//# sourceMappingURL=compose-mail-compose-mail-module-es2015.js.map