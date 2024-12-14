(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-list-mail-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mail-list/mail-list.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mail-list/mail-list.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Email</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"email-empty-div\">\r\n    <ion-item lines=\"none\" class=\"email\">\r\n      <span slot=\"start\" class=\"head-title\">Inbox</span> <span slot=\"end\" class=\"custom-icon-email-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"email-content-div\">\r\n    <ion-list class=\"mail-list\">\r\n      <ion-item-sliding *ngFor=\"let mail of mailList; let i=index\">\r\n        <ion-item class=\"notification-item ion-no-padding\" lines=\"none\" (click)=\"viewMail()\">\r\n          <ion-row>\r\n            <ion-col size=\"2\" class=\"letter-icon-col\">\r\n              <div class=\"letter-icon\" [style.background-color]='colors[mail.initial]'>{{mail.initial}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"10\" class=\"details-col\">\r\n              <ion-row>\r\n                <h4 class=\"chat-name\">{{mail.subject}} </h4>\r\n                <img class=\"time-icon\" src=\"./assets/imgs/time.png\"><span class=\"chat-time\">17:14</span>\r\n              </ion-row>\r\n              <ion-row>\r\n                <h2 class=\"chat-text\"> {{mail.message}}</h2>\r\n                <img class=\"star-icon\" src=\"./assets/imgs/star.png\">\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"danger\" (click)=\"delete(i)\">Delete </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"composeMail()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/mail-list/mail-list-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/mail-list/mail-list-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MailListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListPageRoutingModule", function() { return MailListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mail_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail-list.page */ "./src/app/mail-list/mail-list.page.ts");




var routes = [
    {
        path: '',
        component: _mail_list_page__WEBPACK_IMPORTED_MODULE_3__["MailListPage"]
    }
];
var MailListPageRoutingModule = /** @class */ (function () {
    function MailListPageRoutingModule() {
    }
    MailListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MailListPageRoutingModule);
    return MailListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/mail-list/mail-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mail-list/mail-list.module.ts ***!
  \***********************************************/
/*! exports provided: MailListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListPageModule", function() { return MailListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mail_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mail-list-routing.module */ "./src/app/mail-list/mail-list-routing.module.ts");
/* harmony import */ var _mail_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-list.page */ "./src/app/mail-list/mail-list.page.ts");







var MailListPageModule = /** @class */ (function () {
    function MailListPageModule() {
    }
    MailListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _mail_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["MailListPageRoutingModule"]
            ],
            declarations: [_mail_list_page__WEBPACK_IMPORTED_MODULE_6__["MailListPage"]]
        })
    ], MailListPageModule);
    return MailListPageModule;
}());



/***/ }),

/***/ "./src/app/mail-list/mail-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/mail-list/mail-list.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.email-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.email .custom-icon-email-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.mail-list {\n  top: 20px !important;\n  position: relative;\n  padding-right: 10px;\n}\n\n.chat-name {\n  display: inline-block !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  width: 85%;\n}\n\n.chat-time {\n  font-weight: 400 !important;\n  font-size: 14px !important;\n  line-height: 1.5 !important;\n  white-space: normal !important;\n  position: absolute;\n  right: 0;\n  top: 16px;\n}\n\n.chat-sub {\n  font-size: 14px;\n  color: #000;\n}\n\n.chat-text {\n  font-size: 15px;\n  white-space: normal;\n  max-height: 54px;\n  max-width: 92%;\n  overflow: hidden;\n  margin-top: 0px;\n}\n\n.notification-item {\n  background: #fff;\n  border-bottom: 1px solid #ada7a7;\n  margin-left: 16px;\n  --inner-padding-end: 0;\n  margin-right: 16px;\n}\n\n.letter-icon {\n  border-radius: 50px;\n  color: white;\n  text-align: center;\n  font-size: 30px;\n  height: 60px;\n  width: 60px;\n  padding-top: 8px;\n  margin: 24px auto;\n}\n\n.star-icon {\n  width: 20px;\n  position: absolute;\n  bottom: 30px;\n  right: 0;\n}\n\n.time-icon {\n  width: 15px;\n  position: absolute;\n  right: 35px;\n  top: 20px;\n}\n\n.details-col {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbC1saXN0L0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXG1haWwtbGlzdFxcbWFpbC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFpbC1saXN0L21haWwtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxnQkFBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0csb0JBQUE7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWFpbC1saXN0L21haWwtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1haWwtY29udGVudC1kaXYge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lbWFpbC1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5lbWFpbCAuY3VzdG9tLWljb24tZW1haWwtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWlsLWxpc3Qge1xyXG4gICB0b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0LW5hbWUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbn1cclxuXHJcbi5jaGF0LXRpbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTZweDtcclxufVxyXG5cclxuLmNoYXQtc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY2hhdC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBtYXgtaGVpZ2h0OiA1NHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MiU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhN2E3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ubGV0dGVyLWljb24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvO1xyXG59XHJcblxyXG4uc3Rhci1pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi50aW1lLWljb24ge1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzVweDtcclxuICAgIHRvcDogMjBweDtcclxufVxyXG5cclxuLmRldGFpbHMtY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufSIsIi5lbWFpbC1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZW1haWwtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmVtYWlsIC5jdXN0b20taWNvbi1lbWFpbC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlsLWxpc3Qge1xuICB0b3A6IDIwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2hhdC1uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5jaGF0LXRpbWUge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxNnB4O1xufVxuXG4uY2hhdC1zdWIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY2hhdC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBtYXgtaGVpZ2h0OiA1NHB4O1xuICBtYXgtd2lkdGg6IDkyJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FkYTdhNztcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmxldHRlci1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luOiAyNHB4IGF1dG87XG59XG5cbi5zdGFyLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4udGltZS1pY29uIHtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIHRvcDogMjBweDtcbn1cblxuLmRldGFpbHMtY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mail-list/mail-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/mail-list/mail-list.page.ts ***!
  \*********************************************/
/*! exports provided: MailListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListPage", function() { return MailListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var MailListPage = /** @class */ (function () {
    function MailListPage(util, navContrl) {
        this.util = util;
        this.navContrl = navContrl;
        this.mailList = [{
                from: 'Github', initial: 'G', subject: 'Why do we use it?', time: '1:04 AM', stared: true,
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
            },
            {
                from: 'Facebook', initial: 'F', subject: 'Why do we use it?', time: '1:04 AM', stared: false,
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
            },
            {
                from: 'Jhon Deo', initial: 'J', subject: 'Why do we use it?', time: '1:04 AM', stared: true,
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
            },
            {
                from: 'Arun', initial: 'A', subject: 'Why do we use it?', time: '1:04 AM', stared: false,
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
            },
            {
                from: 'Bala', initial: 'B', subject: 'Why do we use it?', time: '1:04 AM', stared: true,
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros'
            }];
        this.colors = {
            A: '#800080', B: '#008054', C: '#e74bec', D: '#4bd2ec',
            E: '#ec4b4b', F: '#4b87ec', G: '#800080', H: '#008054', I: '#e74bec', J: '#4bd2ec', K: '#ec4b4b',
            L: '#4b87ec', M: '#800080', N: '#008054', O: '#e74bec', P: '#4bd2ec',
            Q: '#ec4b4b', R: '#4b87ec', S: '#800080', T: '#008054', U: '#4682B4', V: '#7B68EE',
            W: '#D2691E', X: '#BC8F8F', Y: '#778899', Z: '#696969'
        };
    }
    MailListPage.prototype.ngOnInit = function () {
    };
    MailListPage.prototype.viewMail = function () {
        this.navContrl.navigateForward("/view-mail");
    };
    MailListPage.prototype.composeMail = function () {
        this.navContrl.navigateForward("/compose-mail");
    };
    MailListPage.prototype.delete = function (i) {
        var _this = this;
        this.util.deleteAlert("Confirm Delete", "Do you want to delete this mail").then(function (res) {
            _this.mailList.splice(i, 1);
            _this.util.showAlert("Smart HR", "Mail Removed Successfully");
        });
    };
    MailListPage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    MailListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mail-list',
            template: __webpack_require__(/*! raw-loader!./mail-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/mail-list/mail-list.page.html"),
            styles: [__webpack_require__(/*! ./mail-list.page.scss */ "./src/app/mail-list/mail-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], MailListPage);
    return MailListPage;
}());



/***/ })

}]);
//# sourceMappingURL=mail-list-mail-list-module-es5.js.map