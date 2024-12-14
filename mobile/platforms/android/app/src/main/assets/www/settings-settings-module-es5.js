(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"util.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Settings</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <div class=\"empty-div\">\r\n    <ion-item lines=\"none\">\r\n      <span slot=\"start\" class=\"head-title\">List of Settings</span> <span slot=\"end\"\r\n        class=\"custom-icon-settings-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"content-div\">\r\n    <div class=\"settings-timeline\">\r\n      <div class=\"settings-container left\">\r\n        <ion-list class=\"settings-list\" (click)=\"changePassword()\">\r\n          <div class=\"settings-content\">\r\n            <ion-item lines=\"none\" detail class=\"settings-item\">\r\n              <ion-label class=\"settings-name\">Change Password</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"settings-container left\">\r\n        <ion-list class=\"settings-list\" (click)=\"companySettings()\">\r\n          <div class=\"settings-content\">\r\n            <ion-item lines=\"none\" detail class=\"settings-item\">\r\n              <ion-label class=\"settings-name\">Company Settings</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"settings-container left\">\r\n        <ion-list class=\"settings-list\" (click)=\"locationSettings()\">\r\n          <div class=\"settings-content\">\r\n            <ion-item lines=\"none\" detail class=\"settings-item\">\r\n              <ion-label class=\"settings-name\">Localization</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"settings-container left\">\r\n        <ion-list class=\"settings-list\" (click)=\"emailSettings()\">\r\n          <div class=\"settings-content\">\r\n            <ion-item lines=\"none\" detail class=\"settings-item\">\r\n              <ion-label class=\"settings-name\">Email Settings</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"settings-container left\">\r\n        <ion-list class=\"settings-list\" (click)=\"invoiceSettings()\">\r\n          <div class=\"settings-content\">\r\n            <ion-item lines=\"none\" detail class=\"settings-item\">\r\n              <ion-label class=\"settings-name\">Invoice Settings</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"settings-container left\">\r\n        <ion-list class=\"settings-list\" (click)=\"salarySettings()\">\r\n          <div class=\"settings-content\">\r\n            <ion-item lines=\"none\" detail class=\"settings-item\">\r\n              <ion-label class=\"settings-name\">Salary Settings</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"settings-container left\">\r\n        <ion-list class=\"settings-list\" (click)=\"notificationSettings()\">\r\n          <div class=\"settings-content\">\r\n            <ion-item lines=\"none\" detail class=\"settings-item\">\r\n              <ion-label class=\"settings-name\">Notifications</ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
var SettingsPageRoutingModule = /** @class */ (function () {
    function SettingsPageRoutingModule() {
    }
    SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SettingsPageRoutingModule);
    return SettingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-item {\n  --padding-start: 0;\n  --detail-icon-color:rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px;\n}\n\n.content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.custom-icon-settings-icon {\n  font-size: 35px;\n}\n\n.settings-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 30px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.settings-list .settings-content {\n  padding: 0 10px;\n}\n\n.settings-content {\n  top: 0;\n  width: 100%;\n}\n\n.settings-content ion-item {\n  --padding-start: 0;\n}\n\n.settings-name {\n  font-weight: bold;\n}\n\n.settings-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.settings-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.settings-container {\n  position: relative;\n  background-color: inherit;\n  padding: 5px 0px;\n}\n\n/* The circles on the timeline */\n\n.settings-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 32px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.settings-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.settings-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.settings-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\nion-fab {\n  position: fixed !important;\n  z-index: 999;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EQTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ2xERjs7QURxREE7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNsREY7O0FEcURBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDbERGOztBRHFEQTtFQUNFLGVBQUE7QUNsREY7O0FEcURBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtEQUFBO0FDbERGOztBRHFEQTtFQUNFLGVBQUE7QUNsREY7O0FEcURBO0VBQ0UsTUFBQTtFQUNBLFdBQUE7QUNsREY7O0FEb0RFO0VBQ0Usa0JBQUE7QUNsREo7O0FEc0RBO0VBQ0UsaUJBQUE7QUNuREY7O0FEc0RBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDbkRKOztBRHNEQSw2Q0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ25ERjs7QURzREEsNkJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNuREY7O0FEc0RBLGdDQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNuREY7O0FEc0RBO0VBQ0UseUJBQUE7QUNuREY7O0FEc0RBO0VBQ0UseUJBQUE7QUNuREY7O0FEc0RBLG9DQUFBOztBQUNBO0VBQ0UsT0FBQTtBQ25ERjs7QURzREEsbUNBQUE7O0FBQ0E7RUFDRSxVQUFBO0FDbkRGOztBRHNEQSwrQ0FBQTs7QUFDQTs7RUFFRSxVQUFBO0FDbkRGOztBRHVEQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQ3BERjs7QUR1REE7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FDcERGOztBRHVEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNwREYiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAucHJvZmlsZS1saXN0IHtcclxuLy8gICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcclxuLy8gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS1pdGVtIHtcclxuLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTdlNyAhaW1wb3J0YW50O1xyXG4vLyAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLml0ZW0taW5uZXIge1xyXG4vLyAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmJsdWVzLW5hdiB7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2IoNjgsIDE4NywgMjM2KTtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWl0ZW0ge1xyXG4vLyAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbi8vIH1cclxuXHJcbi8vIC5uYXYtY29udGVudCB7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vIH1cclxuXHJcbi8vIC5iYWNrZ3JvdW5kLWNvbnRlbnQge1xyXG4vLyAgIC0tYmFja2dyb3VuZDogI2UyZTJlMiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaGVhZGVyLW1kOmFmdGVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLnByb2ZpbGUtdGl0bGUge1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDtcclxuLy8gICBmb250LXdlaWdodDogMzAwIWltcG9ydGFudDtcclxuLy8gICBtYXJnaW4tYm90dG9tOiA1cHghaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC5wcm9maWxlLWlubmVyLWl0ZW0ge1xyXG4vLyAgIGNvbG9yOiAjOGU4ZTkzO1xyXG4vLyAgIGZsb2F0OiByaWdodDsgXHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyB9XHJcblxyXG5cclxuLnNldHRpbmdzLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWRldGFpbC1pY29uLWNvbG9yOnJnYigyNTQsIDE1NiwgNjkpO1xyXG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLmNvbnRlbnQtZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gIHRvcDogLTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmVtcHR5LWRpdiB7XHJcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tc2V0dGluZ3MtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA0NXB4O1xyXG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpXHJcbn1cclxuXHJcbi5zZXR0aW5ncy1saXN0IC5zZXR0aW5ncy1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1jb250ZW50IHtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1uYW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNldHRpbmdzLXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDMwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLnNldHRpbmdzLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5zZXR0aW5ncy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG4uc2V0dGluZ3MtY29udGFpbmVyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHRvcDogMzJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbi5zZXR0aW5ncy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gIGxlZnQ6IDMxcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4ubGVmdDo6YWZ0ZXIsXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gIGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5pb24tZmFiIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5mYWItYWRkLWJ0biB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59IiwiLnNldHRpbmdzLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tZGV0YWlsLWljb24tY29sb3I6cmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmN1c3RvbS1pY29uLXNldHRpbmdzLWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5zZXR0aW5ncy1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA0NXB4O1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLnNldHRpbmdzLWxpc3QgLnNldHRpbmdzLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5zZXR0aW5ncy1jb250ZW50IHtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZXR0aW5ncy1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuXG4uc2V0dGluZ3MtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2V0dGluZ3MtdGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAzMHB4O1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4uc2V0dGluZ3MtdGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5zZXR0aW5ncy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLnNldHRpbmdzLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uc2V0dGluZ3MtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcbn1cblxuLnNldHRpbmdzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLnNldHRpbmdzLXRpbWVsaW5lOjphZnRlciB7XG4gIGxlZnQ6IDMxcHg7XG59XG5cbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuLmxlZnQ6OmFmdGVyLFxuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbmlvbi1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uZmFiLWFkZC1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../change-password/change-password.page */ "./src/app/change-password/change-password.page.ts");
/* harmony import */ var _company_settings_company_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../company-settings/company-settings.page */ "./src/app/company-settings/company-settings.page.ts");
/* harmony import */ var _notification_settings_notification_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notification-settings/notification-settings.page */ "./src/app/notification-settings/notification-settings.page.ts");
/* harmony import */ var _email_settings_email_settings_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../email-settings/email-settings.page */ "./src/app/email-settings/email-settings.page.ts");
/* harmony import */ var _location_settings_location_settings_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../location-settings/location-settings.page */ "./src/app/location-settings/location-settings.page.ts");
/* harmony import */ var _salary_settings_salary_settings_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../salary-settings/salary-settings.page */ "./src/app/salary-settings/salary-settings.page.ts");
/* harmony import */ var _invoice_settings_invoice_settings_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../invoice-settings/invoice-settings.page */ "./src/app/invoice-settings/invoice-settings.page.ts");












var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCntrl, route, util, modalController) {
        this.navCntrl = navCntrl;
        this.route = route;
        this.util = util;
        this.modalController = modalController;
        this.isPop = false;
    }
    SettingsPage.prototype.ngOnInit = function () {
        this.isPop = (this.route.getCurrentNavigation().extras.state && this.route.getCurrentNavigation().extras.state.pageType && this.route.getCurrentNavigation().extras.state.pageType === "push");
        console.log(this.route.getCurrentNavigation());
    };
    SettingsPage.prototype.openModal = function (component) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: component,
                            cssClass: 'custom-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        this.util.isModal = "blurPage";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss().then(function (data) {
                                console.log(data);
                                _this.util.isModal = "";
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.changePassword = function () {
        var component = _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"];
        this.openModal(component);
    };
    SettingsPage.prototype.companySettings = function () {
        var component = _company_settings_company_settings_page__WEBPACK_IMPORTED_MODULE_6__["CompanySettingsPage"];
        this.openModal(component);
    };
    SettingsPage.prototype.notificationSettings = function () {
        var component = _notification_settings_notification_settings_page__WEBPACK_IMPORTED_MODULE_7__["NotificationSettingsPage"];
        this.openModal(component);
    };
    SettingsPage.prototype.emailSettings = function () {
        var component = _email_settings_email_settings_page__WEBPACK_IMPORTED_MODULE_8__["EmailSettingsPage"];
        this.openModal(component);
    };
    SettingsPage.prototype.locationSettings = function () {
        var component = _location_settings_location_settings_page__WEBPACK_IMPORTED_MODULE_9__["LocationSettingsPage"];
        this.openModal(component);
    };
    SettingsPage.prototype.salarySettings = function () {
        var component = _salary_settings_salary_settings_page__WEBPACK_IMPORTED_MODULE_10__["SalarySettingsPage"];
        this.openModal(component);
    };
    SettingsPage.prototype.invoiceSettings = function () {
        var component = _invoice_settings_invoice_settings_page__WEBPACK_IMPORTED_MODULE_11__["InvoiceSettingsPage"];
        this.openModal(component);
    };
    SettingsPage.prototype.leaveType = function () {
        this.navCntrl.navigateForward('/leave-type');
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map