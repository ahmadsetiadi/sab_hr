(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-buttons slot=\"start\" class=\"nav-content\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <div class=\"notification-div\">\r\n      <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"showModal($event)\" class=\"notificationIcon nav-content optn-btn\">\r\n      </ion-icon>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <div class=\"profile-card-div\">\r\n      <ion-card class=\"home-card\">\r\n        <div class=\"home-header\">\r\n          <img src=\"./assets/imgs/Logo-new.png\" class=\"whiteLogo slide-in\" />\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n    <div class=\"home-data-card\">\r\n      <div class=\"dashboard-area\">\r\n        <ion-row class=\"dashboard-row\">\r\n          <ion-col class=\"dashboard-col\" [ngClass]=\"cssClass\" size=\"6\" (click)=\"openProject()\">\r\n            <div class=\"dash-widget\">\r\n              <div class=\"dash-widget-icon\">\r\n                <span class=\"custom-icon-dashboard-project-icon\"></span>\r\n              </div>\r\n              <div class=\"dash-widget-info\">\r\n                <h4 class=\"dash-amount\">140</h4>\r\n                <p class=\"dash-text\">Projects</p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [ngClass]=\"cssClass\" class=\"dashboard-col\" (click)=\"openClient()\">\r\n            <div class=\"dash-widget\">\r\n              <div class=\"dash-widget-icon\">\r\n                <span class=\"custom-icon-dashboard-client-icon\"></span>\r\n              </div>\r\n              <div class=\"dash-widget-info\">\r\n                <h4 class=\"dash-amount\">50</h4>\r\n                <p class=\"dash-text\">Clients</p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [ngClass]=\"cssClass\" class=\"dashboard-col\" (click)=\"openEmployee()\">\r\n            <div class=\"dash-widget\">\r\n              <div class=\"dash-widget-icon\">\r\n                <span class=\"custom-icon-dashboard-employee-icons\"></span>\r\n              </div>\r\n              <div class=\"dash-widget-info\">\r\n                <h4 class=\"dash-amount\">14</h4>\r\n                <p class=\"dash-text\">Employees</p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [ngClass]=\"cssClass\" class=\"dashboard-col\" (click)=\"openInvoices()\">\r\n            <div class=\"dash-widget\">\r\n              <div class=\"dash-widget-icon\">\r\n                <span class=\"custom-icon-dashboard-invoice-icons\"></span>\r\n              </div>\r\n              <div class=\"dash-widget-info\">\r\n                <h4 class=\"dash-amount\">140</h4>\r\n                <p class=\"dash-text\">Invoices</p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.home-data-card {\n  position: relative;\n  margin-top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #0A15D5;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.dashboard-area {\n  top: -100px;\n  position: relative;\n  width: 100%;\n  padding: 0 20px;\n}\n\n.dashboard-col {\n  padding: 10px !important;\n  height: 180px;\n}\n\n.dashboard-col:nth-of-type(even) {\n  margin-top: 50px;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.dash-widget {\n  background: #fff;\n  border: 1px solid #e7e7e7;\n  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.08);\n  margin-bottom: 10px;\n  overflow: hidden;\n  padding: 15px;\n  height: 180px;\n  text-align: center;\n  margin: 0 auto;\n  border-radius: 25px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.background-content {\n  --background: #e2e2e2 !important;\n}\n\n.dash-amount {\n  font-size: 22px;\n  font-weight: 800;\n  margin-top: 5px;\n  margin-bottom: 2px;\n}\n\n.dash-text {\n  font-size: 18px;\n  margin-top: 0;\n  font-weight: normal;\n  white-space: nowrap;\n}\n\n.blues-nav {\n  --background: #0A15D5;\n}\n\nion-item {\n  --ion-background-color: rgba(255, 255, 255, 0);\n}\n\n.nav-content {\n  color: #fff;\n}\n\n.optn-btn {\n  font-size: 26px;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n\n.dash-widget-icon fa-icon {\n  border-radius: 50%;\n  font-size: 40px;\n  height: 50px;\n  line-height: 48px;\n  font-weight: 400;\n  text-align: center;\n  width: 50px;\n}\n\nion-menu-button {\n  color: #fff;\n}\n\n.dash-widget-icon span {\n  font-size: 80px;\n  border-radius: 50px;\n  border: solid 1px;\n}\n\n.dash-widget-icon .custom-icon-dashboard-project-icon,\n.dash-widget-icon .custom-icon-dashboard-employee-icons {\n  border-color: #fe9c45;\n}\n\n.dash-widget-icon .custom-icon-dashboard-project-icon:before,\n.dash-widget-icon .custom-icon-dashboard-employee-icons:before {\n  color: #fe9c45;\n}\n\n.dash-widget-icon .custom-icon-dashboard-client-icon,\n.dash-widget-icon .custom-icon-dashboard-invoice-icons {\n  border-color: #0a15d5;\n}\n\n.dash-widget-icon .custom-icon-dashboard-client-icon:before,\n.dash-widget-icon .custom-icon-dashboard-invoice-icons:before {\n  color: #0a15d5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDRSx3QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLDhDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEVUU7O0VBRUUscUJBQUE7QUNQSjs7QURVRTs7RUFFRSxjQUFBO0FDUko7O0FEV0U7O0VBRUUscUJBQUE7QUNUSjs7QURZRTs7RUFFRSxjQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhvbWUtZGF0YS1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtYXJlYSB7XHJcbiAgICB0b3A6IC0xMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNvbCB7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTgwcHhcclxufVxyXG5cclxuLmRhc2hib2FyZC1jb2w6bnRoLW9mLXR5cGUoZXZlbikge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5ob21lLWNhcmQge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhc2gtd2lkZ2V0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmhvbWUtaGVhZGVyIHtcclxuICBoZWlnaHQ6IDE0NHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNlMmUyZTIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhc2gtYW1vdW50IHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4uZGFzaC10ZXh0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5ibHVlcy1uYXYge1xyXG4gIC0tYmFja2dyb3VuZDogIzBBMTVENTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuXHJcbi5uYXYtY29udGVudCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5vcHRuLWJ0biB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW1kOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXNoLXdpZGdldC1pY29uIGZhLWljb24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4vLyAuc2MtaW9uLWNhcmQtbWQtcyBpbWcge1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIHdpZHRoOiA4MCU7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbi8vIH1cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5kYXNoLXdpZGdldC1pY29uIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG59XHJcblxyXG4uZGFzaC13aWRnZXQtaWNvbiB7XHJcblxyXG4gIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtcHJvamVjdC1pY29uLFxyXG4gIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtZW1wbG95ZWUtaWNvbnMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmU5YzQ1O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1wcm9qZWN0LWljb246YmVmb3JlLFxyXG4gIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtZW1wbG95ZWUtaWNvbnM6YmVmb3JlIHtcclxuICAgIGNvbG9yOiAjZmU5YzQ1O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1jbGllbnQtaWNvbixcclxuICAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWludm9pY2UtaWNvbnMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGExNWQ1O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1jbGllbnQtaWNvbjpiZWZvcmUsXHJcbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1pbnZvaWNlLWljb25zOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogIzBhMTVkNTtcclxuICB9XHJcbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ob21lLWRhdGEtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtY2FyZC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDI4MHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaGJvYXJkLWFyZWEge1xuICB0b3A6IC0xMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNvbCB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLmRhc2hib2FyZC1jb2w6bnRoLW9mLXR5cGUoZXZlbikge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uaG9tZS1jYXJkIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtd2lkZ2V0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5ob21lLWhlYWRlciB7XG4gIGhlaWdodDogMTQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYmFja2dyb3VuZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTJlMmUyICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5kYXNoLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5ibHVlcy1uYXYge1xuICAtLWJhY2tncm91bmQ6ICMwQTE1RDU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLm5hdi1jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vcHRuLWJ0biB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtd2lkZ2V0LWljb24gZmEtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRhc2gtd2lkZ2V0LWljb24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XG59XG5cbi5kYXNoLXdpZGdldC1pY29uIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtcHJvamVjdC1pY29uLFxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1lbXBsb3llZS1pY29ucyB7XG4gIGJvcmRlci1jb2xvcjogI2ZlOWM0NTtcbn1cbi5kYXNoLXdpZGdldC1pY29uIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtcHJvamVjdC1pY29uOmJlZm9yZSxcbi5kYXNoLXdpZGdldC1pY29uIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtZW1wbG95ZWUtaWNvbnM6YmVmb3JlIHtcbiAgY29sb3I6ICNmZTljNDU7XG59XG4uZGFzaC13aWRnZXQtaWNvbiAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWNsaWVudC1pY29uLFxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1pbnZvaWNlLWljb25zIHtcbiAgYm9yZGVyLWNvbG9yOiAjMGExNWQ1O1xufVxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1jbGllbnQtaWNvbjpiZWZvcmUsXG4uZGFzaC13aWRnZXQtaWNvbiAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWludm9pY2UtaWNvbnM6YmVmb3JlIHtcbiAgY29sb3I6ICMwYTE1ZDU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_pop_over_home_pop_over_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-pop-over/home-pop-over.component */ "./src/app/home-pop-over/home-pop-over.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");








let HomePage = class HomePage {
    constructor(popoverController, events, navController, referenceservice, apiservice, statusBar) {
        this.popoverController = popoverController;
        this.events = events;
        this.navController = navController;
        this.referenceservice = referenceservice;
        this.apiservice = apiservice;
        this.statusBar = statusBar;
        this.faCubes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCubes"];
        this.faUsd = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDollarSign"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"];
        this.keywords = {};
        this.count = {};
        this.one = 30;
        this.call = false;
        events.subscribe('homeOptions', (btn) => {
            this.onPopOverDismiss(btn);
        });
        this.roleId = localStorage.getItem("role_id");
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#0A15D5');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.applyClassBySelection("zoomIn");
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#0A15D5');
    }
    showModal(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _home_pop_over_home_pop_over_component__WEBPACK_IMPORTED_MODULE_3__["HomePopOverComponent"],
                event: ev,
                translucent: true,
                componentProps: {
                    "type": "homeOptions"
                }
            });
            console.log(ev);
            // popover.style.cssText = 'background:#fff;';
            return yield popover.present();
        });
    }
    getHeaderStyle() {
        return { background: this.primaryColor };
    }
    onPopOverDismiss(btn) {
        if (btn === "settings") {
            this.navController.navigateForward('/settings', { state: { pageType: "push" } });
        }
        else if (btn === "profile") {
            this.navController.navigateForward('/profile/12');
        }
        else if (btn === "logout") {
            this.logout();
        }
    }
    openInvoices() {
        this.navController.navigateForward("/invoices");
    }
    openEstimates() {
        this.navController.navigateForward("/estimates");
    }
    openClient() {
        this.navController.navigateForward("/clients");
    }
    openEmployee() {
        this.navController.navigateForward("/employee-list");
    }
    openTask() {
        this.navController.navigateForward("/task");
    }
    openPayroll() {
        this.navController.navigateForward("/employee-salary");
    }
    openAttedance() {
        this.navController.navigateForward("/attendance");
    }
    getstyle() {
        return {
            background: "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
        };
    }
    applyClassBySelection(effect) {
        this.cssClass = "animated " + effect;
    }
    getFontstyle() {
        return { color: this.secondryColor };
    }
    getProgresstyle() {
        return {
            background: "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
        };
    }
    logout() {
        this.referenceservice.logout("Confirm", "Are you sure want to logout?", this.color);
    }
    openProject() {
        this.navController.navigateForward("/project-list");
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map