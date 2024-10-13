(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/clients.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/clients.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"referenceservice.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceservice.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Clients</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"referenceservice.isModal\">\r\n  <div class=\"full-div\">\r\n    <div class=\"empty-div\">\r\n    </div>\r\n    <div class=\"content-div\">\r\n      <div class=\"card-list\">\r\n        <ion-row>\r\n          <ion-col id=\"{{i}}\" size=\"6\" [ngClass]=\"cssClass\" *ngFor=\"let client of clientList; let i=index;\">\r\n            <ion-card class=\"employee-card\">\r\n              <ion-card-header>\r\n                <div class=\"employee-options-icon\">\r\n                  <span class=\"custom-icon-delete-icon\" (click)=\"delete(i); $event.stopPropagation()\"></span>\r\n                  <span class=\"custom-icon-edit-icon\" (click)=\"edit(client); $event.stopPropagation()\"></span>\r\n                </div>\r\n              </ion-card-header>\r\n              <ion-card-content (click)=\"openClientProfile(client)\">\r\n                <div class=\"user-icon\">\r\n                  <span class=\"custom-icon-user-placeholder-img\"></span>\r\n                </div>\r\n                <div class=\"user-name\">{{client.company_name}}</div>\r\n                <div class=\"user-design\">{{ client.fullname }}</div>\r\n                <div class=\"user-design\">{{ client.designation }}</div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"addClient()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/clients/clients-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/clients/clients-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ClientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageRoutingModule", function() { return ClientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients.page */ "./src/app/clients/clients.page.ts");




var routes = [
    {
        path: '',
        component: _clients_page__WEBPACK_IMPORTED_MODULE_3__["ClientsPage"]
    }
];
var ClientsPageRoutingModule = /** @class */ (function () {
    function ClientsPageRoutingModule() {
    }
    ClientsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ClientsPageRoutingModule);
    return ClientsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.module.ts":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/*! exports provided: ClientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageModule", function() { return ClientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients-routing.module */ "./src/app/clients/clients-routing.module.ts");
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients.page */ "./src/app/clients/clients.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var ClientsPageModule = /** @class */ (function () {
    function ClientsPageModule() {
    }
    ClientsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _clients_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientsPageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            declarations: [_clients_page__WEBPACK_IMPORTED_MODULE_6__["ClientsPage"]]
        })
    ], ClientsPageModule);
    return ClientsPageModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.page.scss":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-icon {\n  text-align: center;\n  font-size: 65px;\n}\n\n.user-name {\n  font-family: \"Poppins-Bold\";\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.user-design {\n  font-size: 12px;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.employee-card {\n  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.08);\n  border-radius: 25px;\n  background: white;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  margin: 0;\n  height: 200px;\n}\n\n.employee-card .card-content-md,\n.card-content-ios {\n  margin-top: -10px;\n}\n\n.employee-card ion-card-header {\n  padding: 10px 18px 0px 18px;\n}\n\n.content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  margin-top: -50px;\n  width: 100%;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 160px;\n}\n\n.card-list {\n  top: -70px;\n  position: relative;\n  padding: 0 15px 0 15px;\n}\n\n.custom-icon-edit-icon {\n  font-size: 30px;\n  color: #FE9C45;\n  border: solid 1px #FE9C45;\n  border-radius: 20px;\n  font-weight: 500;\n  position: absolute;\n  right: 18px;\n}\n\n.custom-icon-delete-icon {\n  font-size: 30px;\n  color: #F11818;\n  border: solid 1px #F11818;\n  border-radius: 20px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXGNsaWVudHNcXGNsaWVudHMucGFnZS5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7O0VBRUksaUJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1pY29uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxufVxyXG5cclxuLnVzZXItbmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLUJvbGRcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi51c2VyLWRlc2lnbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uZW1wbG95ZWUtY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5lbXBsb3llZS1jYXJkIC5jYXJkLWNvbnRlbnQtbWQsXHJcbi5jYXJkLWNvbnRlbnQtaW9zIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG4uZW1wbG95ZWUtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4IDBweCAxOHB4O1xyXG59XHJcblxyXG4uY29udGVudC1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLmNhcmQtbGlzdCB7XHJcbiAgICB0b3A6IC03MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLWVkaXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI0ZFOUM0NTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNGRTlDNDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tZGVsZXRlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNGMTE4MTg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRjExODE4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8vIC5lbXBsb3llZS1tb3JlIHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xyXG4vLyAgICAgcmlnaHQ6IC0xMHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBjb2xvcjogIzc3NyAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZW1wLW5hbWUge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdsYXRvLVJlZ3VsYXInO1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmVtcC1kZXNpZ25hdGlvbiB7XHJcbi8vICAgICBmb250LWZhbWlseTogJ2xhdG8tUmVndWxhcic7XHJcbi8vICAgICBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZW1wbG95ZWUtZmlyc3RuYW1lIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjQUFBQUFBO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICBmb250LXNpemU6IDI0cHg7XHJcbi8vICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgICBmb250LWZhbWlseTogJ2xhdG8tUmVndWxhcic7XHJcbi8vICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiA1MHB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAubW9yZS1pY29uIHtcclxuLy8gICAgIHdpZHRoOiAzMnB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9IiwiLnVzZXItaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA2NXB4O1xufVxuXG4udXNlci1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1Cb2xkXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnVzZXItZGVzaWduIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZW1wbG95ZWUtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmVtcGxveWVlLWNhcmQgLmNhcmQtY29udGVudC1tZCxcbi5jYXJkLWNvbnRlbnQtaW9zIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5lbXBsb3llZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMThweCAwcHggMThweDtcbn1cblxuLmNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTYwcHg7XG59XG5cbi5jYXJkLWxpc3Qge1xuICB0b3A6IC03MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XG59XG5cbi5jdXN0b20taWNvbi1lZGl0LWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjRkU5QzQ1O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRkU5QzQ1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxOHB4O1xufVxuXG4uY3VzdG9tLWljb24tZGVsZXRlLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjRjExODE4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRjExODE4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/clients/clients.page.ts":
/*!*****************************************!*\
  !*** ./src/app/clients/clients.page.ts ***!
  \*****************************************/
/*! exports provided: ClientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPage", function() { return ClientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _edit_client_edit_client_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edit-client/edit-client.page */ "./src/app/edit-client/edit-client.page.ts");
/* harmony import */ var _add_client_add_client_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-client/add-client.page */ "./src/app/add-client/add-client.page.ts");










var ClientsPage = /** @class */ (function () {
    function ClientsPage(navCtrl, apiService, popoverCtrl, popoverController, referenceservice, modalController, http, events, dataService) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.popoverCtrl = popoverCtrl;
        this.popoverController = popoverController;
        this.referenceservice = referenceservice;
        this.modalController = modalController;
        this.http = http;
        this.events = events;
        this.dataService = dataService;
        this.faEllipsis = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEllipsisV"];
        this.pageNumber = 1;
        this.page = false;
        this.noData = false;
        this.role = localStorage.getItem('role');
        this.roleId = localStorage.getItem('role_id');
        this.primaryColor = localStorage.getItem('primary_color');
        this.keywords = JSON.parse(localStorage.getItem('keywords'));
    }
    ClientsPage.prototype.ionViewWillEnter = function () {
        this.clientList = JSON.parse(JSON.stringify(this.dataService.clientList));
    };
    ;
    ClientsPage.prototype.ngOnInit = function () {
        this.applyClassBySelection('rollIn');
    };
    ClientsPage.prototype.getHeaderStyle = function () {
        return { 'background': this.primaryColor };
    };
    ;
    ClientsPage.prototype.applyClassBySelection = function (effect) {
        this.cssClass = "animated " + effect;
    };
    ClientsPage.prototype.addClient = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_client_add_client_page__WEBPACK_IMPORTED_MODULE_9__["AddClientPage"],
                            cssClass: 'custom-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        this.referenceservice.isModal = "blurPage";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss().then(function (data) {
                                console.log(data);
                                _this.referenceservice.isModal = "";
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientsPage.prototype.openClientProfile = function (client) {
        this.cssClass = '';
        this.navCtrl.navigateForward('/client-profile/1', { state: { 'client': client } });
    };
    ClientsPage.prototype.edit = function (project) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_client_edit_client_page__WEBPACK_IMPORTED_MODULE_8__["EditClientPage"],
                            componentProps: { client: project },
                            cssClass: 'custom-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        this.referenceservice.isModal = "blurPage";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss().then(function (data) {
                                console.log(data);
                                _this.referenceservice.isModal = "";
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientsPage.prototype.delete = function (i) {
        var _this = this;
        this.referenceservice.deleteAlert("Confirm Delete", "Do you want to delete this client").then(function (res) {
            _this.onConfirmClicked(i);
        });
    };
    ClientsPage.prototype.onConfirmClicked = function (id) {
        var _this = this;
        var element = document.getElementById(id);
        (id % 2) ? element.classList.add('animated', 'zoomOutRight') : element.classList.add('animated', 'zoomOutLeft');
        setTimeout(function () {
            _this.clientList.splice(id, 1);
            _this.referenceservice.showAlert('Success', 'Client Removed successfully');
        }, 1000);
    };
    ClientsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _json_service__WEBPACK_IMPORTED_MODULE_7__["JsonService"] }
    ]; };
    ClientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! raw-loader!./clients.page.html */ "./node_modules/raw-loader/index.js!./src/app/clients/clients.page.html"),
            styles: [__webpack_require__(/*! ./clients.page.scss */ "./src/app/clients/clients.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _json_service__WEBPACK_IMPORTED_MODULE_7__["JsonService"]])
    ], ClientsPage);
    return ClientsPage;
}());



/***/ })

}]);
//# sourceMappingURL=clients-clients-module-es5.js.map