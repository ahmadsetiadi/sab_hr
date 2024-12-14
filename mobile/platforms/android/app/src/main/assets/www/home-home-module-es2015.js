(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-buttons slot=\"start\" class=\"nav-content\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <div class=\"notification-div\">\r\n      <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"showModal($event)\" class=\"notificationIcon nav-content optn-btn\">\r\n      </ion-icon>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <div class=\"profile-card-div\">\r\n      <ion-card class=\"home-card\">\r\n        <div class=\"home-header\">\r\n          <!-- <img src=\"./assets/imgs/Logo-new.png\" class=\"whiteLogo slide-in\" /> -->\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n    <div class=\"home-data-card\">\r\n      <div class=\"dashboard-area\">\r\n        <ion-row class=\"dashboard-row\">\r\n          <ion-col class=\"dashboard-col\" [ngClass]=\"cssClass\" size=\"6\" (click)=\"openProject()\">\r\n            <div class=\"dash-widget\">\r\n              <div class=\"dash-widget-icon\">\r\n                <span class=\"custom-icon-dashboard-project-icon\"></span>\r\n              </div>\r\n              <div class=\"dash-widget-info\">\r\n                <h4 class=\"dash-amount\">140</h4>\r\n                <p class=\"dash-text\">Projects</p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [ngClass]=\"cssClass\" class=\"dashboard-col\" (click)=\"openClient()\">\r\n            <div class=\"dash-widget\">\r\n              <div class=\"dash-widget-icon\">\r\n                <span class=\"custom-icon-dashboard-client-icon\"></span>\r\n              </div>\r\n              <div class=\"dash-widget-info\">\r\n                <h4 class=\"dash-amount\">50</h4>\r\n                <p class=\"dash-text\">Clients</p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [ngClass]=\"cssClass\" class=\"dashboard-col\" (click)=\"openEmployee()\">\r\n            <div class=\"dash-widget\">\r\n              <div class=\"dash-widget-icon\">\r\n                <span class=\"custom-icon-dashboard-employee-icons\"></span>\r\n              </div>\r\n              <div class=\"dash-widget-info\">\r\n                <h4 class=\"dash-amount\">14</h4>\r\n                <p class=\"dash-text\">Employees</p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [ngClass]=\"cssClass\" class=\"dashboard-col\" (click)=\"openInvoices()\">\r\n            <div class=\"dash-widget\">\r\n              <div class=\"dash-widget-icon\">\r\n                <span class=\"custom-icon-dashboard-invoice-icons\"></span>\r\n              </div>\r\n              <div class=\"dash-widget-info\">\r\n                <h4 class=\"dash-amount\">140</h4>\r\n                <p class=\"dash-text\">Invoices</p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

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

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.home-data-card {\n  position: relative;\n  margin-top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #10dc60;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.dashboard-area {\n  top: -100px;\n  position: relative;\n  width: 100%;\n  padding: 0 20px;\n}\n\n.dashboard-col {\n  padding: 10px !important;\n  height: 180px;\n}\n\n.dashboard-col:nth-of-type(even) {\n  margin-top: 50px;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.dash-widget {\n  background: #fff;\n  border: 1px solid #e7e7e7;\n  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.08);\n  margin-bottom: 10px;\n  overflow: hidden;\n  padding: 15px;\n  height: 180px;\n  text-align: center;\n  margin: 0 auto;\n  border-radius: 25px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.background-content {\n  --background: #e2e2e2 !important;\n}\n\n.dash-amount {\n  font-size: 22px;\n  font-weight: 800;\n  margin-top: 5px;\n  margin-bottom: 2px;\n}\n\n.dash-text {\n  font-size: 18px;\n  margin-top: 0;\n  font-weight: normal;\n  white-space: nowrap;\n}\n\n.blues-nav {\n  --background: #10dc60;\n}\n\nion-item {\n  --ion-background-color: rgba(255, 255, 255, 0);\n}\n\n.nav-content {\n  color: #fff;\n}\n\n.optn-btn {\n  font-size: 26px;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n\n.dash-widget-icon fa-icon {\n  border-radius: 50%;\n  font-size: 40px;\n  height: 50px;\n  line-height: 48px;\n  font-weight: 400;\n  text-align: center;\n  width: 50px;\n}\n\nion-menu-button {\n  color: #fff;\n}\n\n.dash-widget-icon span {\n  font-size: 80px;\n  border-radius: 50px;\n  border: solid 1px;\n}\n\n.dash-widget-icon .custom-icon-dashboard-project-icon,\n.dash-widget-icon .custom-icon-dashboard-employee-icons {\n  border-color: #fe9c45;\n}\n\n.dash-widget-icon .custom-icon-dashboard-project-icon:before,\n.dash-widget-icon .custom-icon-dashboard-employee-icons:before {\n  color: #fe9c45;\n}\n\n.dash-widget-icon .custom-icon-dashboard-client-icon,\n.dash-widget-icon .custom-icon-dashboard-invoice-icons {\n  border-color: #0a15d5;\n}\n\n.dash-widget-icon l .custom-icon-dashboard-client-icon:before,\n.dash-widget-icon .custom-icon-dashboard-invoice-icons:before {\n  color: #10dc60;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0UsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSw4Q0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsaUNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFdFOztFQUVFLHFCQUFBO0FDUko7O0FEV0U7O0VBRUUsY0FBQTtBQ1RKOztBRFlFOztFQUVFLHFCQUFBO0FDVko7O0FEWUE7O0VBR0ksY0FBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ob21lLWRhdGEtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkLWRpdiB7XHJcbiAgYmFja2dyb3VuZDogIzEwZGM2MDsvLyMwQTE1RDU7XHJcbiAgLy8gYmFja2dyb3VuZDogIzBBMTVENTtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWFyZWEge1xyXG4gICAgdG9wOiAtMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jb2wge1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE4MHB4XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY29sOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uaG9tZS1jYXJkIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXNoLXdpZGdldCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5ob21lLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiAxNDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZTJlMmUyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXNoLWFtb3VudCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLmRhc2gtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYmx1ZXMtbmF2IHtcclxuICAtLWJhY2tncm91bmQ6ICMxMGRjNjA7Ly8jMEExNUQ1O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuLm5hdi1jb250ZW50IHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm9wdG4tYnRuIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQ6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhc2gtd2lkZ2V0LWljb24gZmEtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi8vIC5zYy1pb24tY2FyZC1tZC1zIGltZyB7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgd2lkdGg6IDgwJTtcclxuLy8gICBtYXJnaW4tbGVmdDogMjVweDtcclxuLy8gfVxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLmRhc2gtd2lkZ2V0LWljb24gc3BhbiB7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbn1cclxuXHJcbi5kYXNoLXdpZGdldC1pY29uIHtcclxuXHJcbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1wcm9qZWN0LWljb24sXHJcbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1lbXBsb3llZS1pY29ucyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZTljNDU7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWljb24tZGFzaGJvYXJkLXByb2plY3QtaWNvbjpiZWZvcmUsXHJcbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1lbXBsb3llZS1pY29uczpiZWZvcmUge1xyXG4gICAgY29sb3I6ICNmZTljNDU7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWNsaWVudC1pY29uLFxyXG4gIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtaW52b2ljZS1pY29ucyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwYTE1ZDU7XHJcbiAgfVxyXG5sXHJcbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1jbGllbnQtaWNvbjpiZWZvcmUsXHJcbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1pbnZvaWNlLWljb25zOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogIzEwZGM2MDsvL2wjMGExNWQ1O1xyXG4gIH1cclxufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhvbWUtZGF0YS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZS1jYXJkLWRpdiB7XG4gIGJhY2tncm91bmQ6ICMxMGRjNjA7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoYm9hcmQtYXJlYSB7XG4gIHRvcDogLTEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY29sIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4uZGFzaGJvYXJkLWNvbDpudGgtb2YtdHlwZShldmVuKSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5ob21lLWNhcmQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaC13aWRnZXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlMmUyZTIgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtYW1vdW50IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmRhc2gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJsdWVzLW5hdiB7XG4gIC0tYmFja2dyb3VuZDogIzEwZGM2MDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4ubmF2LWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm9wdG4tYnRuIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaC13aWRnZXQtaWNvbiBmYS1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZGFzaC13aWRnZXQtaWNvbiBzcGFuIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweDtcbn1cblxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1wcm9qZWN0LWljb24sXG4uZGFzaC13aWRnZXQtaWNvbiAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWVtcGxveWVlLWljb25zIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmU5YzQ1O1xufVxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1wcm9qZWN0LWljb246YmVmb3JlLFxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1lbXBsb3llZS1pY29uczpiZWZvcmUge1xuICBjb2xvcjogI2ZlOWM0NTtcbn1cbi5kYXNoLXdpZGdldC1pY29uIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtY2xpZW50LWljb24sXG4uZGFzaC13aWRnZXQtaWNvbiAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWludm9pY2UtaWNvbnMge1xuICBib3JkZXItY29sb3I6ICMwYTE1ZDU7XG59XG4uZGFzaC13aWRnZXQtaWNvbiBsIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtY2xpZW50LWljb246YmVmb3JlLFxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1pbnZvaWNlLWljb25zOmJlZm9yZSB7XG4gIGNvbG9yOiAjMTBkYzYwO1xufSJdfQ== */"

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