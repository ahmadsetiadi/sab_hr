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

module.exports = ".settings-item {\n  --padding-start: 0;\n  --detail-icon-color:rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px;\n}\n\n.content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.custom-icon-settings-icon {\n  font-size: 35px;\n}\n\n.settings-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 30px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.settings-list .settings-content {\n  padding: 0 10px;\n}\n\n.settings-content {\n  top: 0;\n  width: 100%;\n}\n\n.settings-content ion-item {\n  --padding-start: 0;\n}\n\n.settings-name {\n  font-weight: bold;\n}\n\n.settings-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.settings-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.settings-container {\n  position: relative;\n  background-color: inherit;\n  padding: 5px 0px;\n}\n\n/* The circles on the timeline */\n\n.settings-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 32px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.settings-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.settings-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.settings-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\nion-fab {\n  position: fixed !important;\n  z-index: 999;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXHNpbmFyXFxhcHAyL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDbERGOztBRHFEQTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2xERjs7QURxREE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNsREY7O0FEcURBO0VBQ0UsZUFBQTtBQ2xERjs7QURxREE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0RBQUE7QUNsREY7O0FEcURBO0VBQ0UsZUFBQTtBQ2xERjs7QURxREE7RUFDRSxNQUFBO0VBQ0EsV0FBQTtBQ2xERjs7QURvREU7RUFDRSxrQkFBQTtBQ2xESjs7QURzREE7RUFDRSxpQkFBQTtBQ25ERjs7QURzREE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNuREo7O0FEc0RBLDZDQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDbkRGOztBRHNEQSw2QkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ25ERjs7QURzREEsZ0NBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ25ERjs7QURzREE7RUFDRSx5QkFBQTtBQ25ERjs7QURzREE7RUFDRSx5QkFBQTtBQ25ERjs7QURzREEsb0NBQUE7O0FBQ0E7RUFDRSxPQUFBO0FDbkRGOztBRHNEQSxtQ0FBQTs7QUFDQTtFQUNFLFVBQUE7QUNuREY7O0FEc0RBLCtDQUFBOztBQUNBOztFQUVFLFVBQUE7QUNuREY7O0FEdURBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0FDcERGOztBRHVEQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7QUNwREY7O0FEdURBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3BERiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5wcm9maWxlLWxpc3Qge1xyXG4vLyAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuLy8gICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4vLyAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWl0ZW0ge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3ICFpbXBvcnRhbnQ7XHJcbi8vICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaXRlbS1pbm5lciB7XHJcbi8vICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuYmx1ZXMtbmF2IHtcclxuLy8gICAtLWJhY2tncm91bmQ6IHJnYig2OCwgMTg3LCAyMzYpO1xyXG4vLyB9XHJcblxyXG4vLyBpb24taXRlbSB7XHJcbi8vICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuLy8gfVxyXG5cclxuLy8gLm5hdi1jb250ZW50IHtcclxuLy8gICBjb2xvcjogI2ZmZjtcclxuLy8gfVxyXG5cclxuLy8gLmJhY2tncm91bmQtY29udGVudCB7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiAjZTJlMmUyICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5oZWFkZXItbWQ6YWZ0ZXIge1xyXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAucHJvZmlsZS10aXRsZSB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrIWltcG9ydGFudDtcclxuLy8gICBmb250LXNpemU6IDE2cHghaW1wb3J0YW50O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiAzMDAhaW1wb3J0YW50O1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDVweCFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLnByb2ZpbGUtaW5uZXItaXRlbSB7XHJcbi8vICAgY29sb3I6ICM4ZThlOTM7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0OyBcclxuLy8gICBmb250LXNpemU6IDE2cHg7XHJcbi8vIH1cclxuXHJcblxyXG4uc2V0dGluZ3MtaXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tZGV0YWlsLWljb24tY29sb3I6cmdiKDI1NCwgMTU2LCA2OSk7XHJcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uY29udGVudC1kaXYge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgdG9wOiAtNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW1wdHktZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1zZXR0aW5ncy1pY29uIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDQ1cHg7XHJcbiAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNClcclxufVxyXG5cclxuLnNldHRpbmdzLWxpc3QgLnNldHRpbmdzLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLnNldHRpbmdzLWNvbnRlbnQge1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNldHRpbmdzLW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2V0dGluZ3MtdGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRvcDogMzBweDtcclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4uc2V0dGluZ3MtdGltZWxpbmU6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cclxuLnNldHRpbmdzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogNXB4IDBweDtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcbi5zZXR0aW5ncy1jb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcbi5sZWZ0IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLnNldHRpbmdzLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgbGVmdDogMzFweDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbi5sZWZ0OjphZnRlcixcclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgbGVmdDogMTVweDtcclxufVxyXG5cclxuXHJcbmlvbi1mYWIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCIuc2V0dGluZ3MtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjpyZ2IoMjU0LCAxNTYsIDY5KTtcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uY3VzdG9tLWljb24tc2V0dGluZ3MtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnNldHRpbmdzLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDQ1cHg7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuXG4uc2V0dGluZ3MtbGlzdCAuc2V0dGluZ3MtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnNldHRpbmdzLWNvbnRlbnQge1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNldHRpbmdzLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbi5zZXR0aW5ncy1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZXR0aW5ncy10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDMwcHg7XG59XG5cbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cbi5zZXR0aW5ncy10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLnNldHRpbmdzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXG4uc2V0dGluZ3MtY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5zZXR0aW5ncy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uc2V0dGluZ3MtY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XG59XG5cbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cbi5sZWZ0IHtcbiAgbGVmdDogMDtcbn1cblxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXG4uc2V0dGluZ3MtdGltZWxpbmU6OmFmdGVyIHtcbiAgbGVmdDogMzFweDtcbn1cblxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXG4ubGVmdDo6YWZ0ZXIsXG4ucmlnaHQ6OmFmdGVyIHtcbiAgbGVmdDogMTVweDtcbn1cblxuaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5mYWItYWRkLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

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