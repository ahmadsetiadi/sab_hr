(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoices-invoices-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/invoices/invoices.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invoices/invoices.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"referenceservice.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceservice.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Invoices</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [ngClass]=\"referenceservice.isModal\">\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">List of Invoices</span> <span slot=\"end\"\r\n        class=\"custom-icon-estimate-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"estimates-timeline\">\r\n      <div class=\"estimates-container left\" *ngFor=\"let invoice of invoicesList; let i=index;\">\r\n        <ion-list class=\"estimates-list\" id=\"{{i}}\" [ngClass]=\"cssClass\" [ngStyle]=\"{ 'animation-delay': invoice.time + 's' }\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\" (click)=\"openInvoice(invoice)\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">#{{ invoice.reference_no }}</div>&nbsp;&nbsp;\r\n                      <div *ngIf=\"invoice.status == 'Paid'\" class=\"status est-accepted\">Paid</div>\r\n                      <div *ngIf=\"invoice.status == 'Unpaid'\" class=\"status est-rejected\">Unpaid</div>\r\n                      <div *ngIf=\"invoice.status == 'Partial'\" class=\"status est-pending\">Partialy Paid</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">{{ invoice.company_name }}</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\"> {{ invoice.converted_total_cost }}\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit(invoice)\">Edit</ion-item-option>\r\n              <ion-item-option color=\"danger\" (click)=\"delete(i)\">Delete</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"createInvoice()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/invoices/invoices-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/invoices/invoices-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: InvoicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPageRoutingModule", function() { return InvoicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _invoices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoices.page */ "./src/app/invoices/invoices.page.ts");




const routes = [
    {
        path: '',
        component: _invoices_page__WEBPACK_IMPORTED_MODULE_3__["InvoicesPage"]
    }
];
let InvoicesPageRoutingModule = class InvoicesPageRoutingModule {
};
InvoicesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvoicesPageRoutingModule);



/***/ }),

/***/ "./src/app/invoices/invoices.module.ts":
/*!*********************************************!*\
  !*** ./src/app/invoices/invoices.module.ts ***!
  \*********************************************/
/*! exports provided: InvoicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPageModule", function() { return InvoicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invoices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoices-routing.module */ "./src/app/invoices/invoices-routing.module.ts");
/* harmony import */ var _invoices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoices.page */ "./src/app/invoices/invoices.page.ts");







let InvoicesPageModule = class InvoicesPageModule {
};
InvoicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _invoices_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoicesPageRoutingModule"]
        ],
        declarations: [_invoices_page__WEBPACK_IMPORTED_MODULE_6__["InvoicesPage"]]
    })
], InvoicesPageModule);



/***/ }),

/***/ "./src/app/invoices/invoices.page.scss":
/*!*********************************************!*\
  !*** ./src/app/invoices/invoices.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.estimates-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 10px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.estimates-list .estimates-content {\n  padding: 10px 0px 10px 15px;\n}\n\n.estimates-content {\n  top: 0;\n  width: 100%;\n}\n\n.estimates-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.estimates-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-right: 10px;\n  padding-top: 30px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.estimates-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 30px;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.estimates-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.estimates-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 35px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.estimates-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.estimates-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.estimates-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.estimates-content .id {\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n}\n\n.estimates-content .name {\n  font-family: \"Poppins-Light\";\n  color: #8c8b8b;\n  font-size: 14px;\n}\n\n.estimates-content .status {\n  font-size: 11px;\n  margin: auto 0;\n  border-radius: 50px;\n  padding: 0px 5px;\n  color: white;\n  margin-top: unset !important;\n}\n\n.estimates-content .est-accepted {\n  background: #22D165;\n}\n\n.estimates-content .est-pending {\n  background: #FE9C45;\n}\n\n.estimates-content .est-rejected {\n  background: #F10A0A;\n}\n\n.estimates-content .amount {\n  font-size: 14px;\n  margin-top: 14px;\n  text-align: end;\n  color: #8c8b8b;\n  white-space: nowrap;\n}\n\n.estimates-content .amount ion-icon {\n  color: #FF9F55;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.slide-item {\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZXMvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcaW52b2ljZXNcXGludm9pY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW52b2ljZXMvaW52b2ljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrREFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLE1BQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NSOztBREdBO0VBQ0csa0JBQUE7RUFDQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0EsNkNBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNBSjs7QURHQSw2QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQSxnQ0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQSxvQ0FBQTs7QUFDQTtFQUNJLE9BQUE7QUNBSjs7QURHQSxtQ0FBQTs7QUFDQTtFQUNJLFVBQUE7QUNBSjs7QURHQSwrQ0FBQTs7QUFDQTs7RUFFSSxVQUFBO0FDQUo7O0FESUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNEUjs7QURJSTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNGUjs7QURLSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0hSOztBRE1JO0VBQ0ksbUJBQUE7QUNKUjs7QURPSTtFQUNJLG1CQUFBO0FDTFI7O0FEUUk7RUFDSSxtQkFBQTtBQ05SOztBRFNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1BSOztBRFNRO0VBQ0ksY0FBQTtBQ1BaOztBRFlBO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQ1RKOztBRFlBO0VBQ0ksc0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9pbnZvaWNlcy9pbnZvaWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1lc3RpbWF0ZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzdGltYXRlcy1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggNDVweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpXHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtbGlzdCAuZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXN0aW1hdGVzLXRpbWVsaW5lIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4uZXN0aW1hdGVzLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cclxuLmVzdGltYXRlcy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcbi5lc3RpbWF0ZXMtY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUoZXZlbik6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cclxuLmxlZnQge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbi5lc3RpbWF0ZXMtdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4ubGVmdDo6YWZ0ZXIsXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLmVzdGltYXRlcy1jb250ZW50IHtcclxuICAgIC5pZCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTGlnaHRcIjtcclxuICAgICAgICBjb2xvcjogIzhjOGI4YjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXR1cyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZXN0LWFjY2VwdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjJEMTY1O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtcGVuZGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZFOUM0NTtcclxuICAgIH1cclxuXHJcbiAgICAuZXN0LXJlamVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjEwQTBBO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbW91bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICBjb2xvcjogIzhjOGI4YjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY5RjU1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59XHJcblxyXG4uc2xpZGUtaXRlbSB7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcclxufVxyXG5cclxuLy8gLmhvbGlkYXktbGlzdCB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LWRheXMtZGl2IHtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gfVxyXG5cclxuLy8gLmxlYXZlLXR5cGUge1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LXRpdGxlIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS1kYXkge1xyXG4vLyAgICAgdG9wOiAzMXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5sZWF2ZS1zdGF0dXMtcGFpZCB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogMThweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWluLXdpZHRoOiA3NnB4O1xyXG4vLyAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDk2NCAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5sZWF2ZS1zdGF0dXMtdW5wYWlkIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwZDBkICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmxlYXZlLXN0YXR1cy1wYXJ0aWFsIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZhYzBkICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktZGF5IHtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMjZweDtcclxuLy8gICAgIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4vLyB9IiwiLmVzdGltYXRlcy1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXN0aW1hdGVzLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5lc3RpbWF0ZXMgLmN1c3RvbS1pY29uLWVzdGltYXRlLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVzdGltYXRlcy1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCA0NXB4O1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cblxuLmVzdGltYXRlcy1saXN0IC5lc3RpbWF0ZXMtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTVweDtcbn1cblxuLmVzdGltYXRlcy1jb250ZW50IHtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cblxuLmVzdGltYXRlcy10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMzBweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmVzdGltYXRlcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLmVzdGltYXRlcy1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBsZWZ0OiAzMXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlcixcbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQgLmlkIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xuICBjb2xvcjogIzhjOGI4YjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5zdGF0dXMge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogYXV0byAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1hY2NlcHRlZCB7XG4gIGJhY2tncm91bmQ6ICMyMkQxNjU7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLmVzdC1wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuZXN0LXJlamVjdGVkIHtcbiAgYmFja2dyb3VuZDogI0YxMEEwQTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuYW1vdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiAjOGM4YjhiO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5hbW91bnQgaW9uLWljb24ge1xuICBjb2xvcjogI0ZGOUY1NTtcbn1cblxuLmZhYi1hZGQtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcbn1cblxuLnNsaWRlLWl0ZW0ge1xuICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/invoices/invoices.page.ts":
/*!*******************************************!*\
  !*** ./src/app/invoices/invoices.page.ts ***!
  \*******************************************/
/*! exports provided: InvoicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPage", function() { return InvoicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _create_invoice_create_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create-invoice/create-invoice.page */ "./src/app/create-invoice/create-invoice.page.ts");
/* harmony import */ var _edit_invoice_edit_invoice_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-invoice/edit-invoice.page */ "./src/app/edit-invoice/edit-invoice.page.ts");








let InvoicesPage = class InvoicesPage {
    constructor(referenceservice, navContrl, dataService, alertController, apiService, events, modalController) {
        this.referenceservice = referenceservice;
        this.navContrl = navContrl;
        this.dataService = dataService;
        this.alertController = alertController;
        this.apiService = apiService;
        this.events = events;
        this.modalController = modalController;
        this.invoicesList = [];
        this.time = 0;
        this.keywords = {};
        this.pageNumber = 1;
        // time = 0;
        this.page = false;
        this.noData = false;
        this.role = localStorage.getItem("role");
        this.roleId = localStorage.getItem("role_id");
        this.primaryColor = localStorage.getItem("primary_color");
        this.keywords = JSON.parse(localStorage.getItem('keywords'));
    }
    ngOnInit() {
        this.invoicesList = JSON.parse(JSON.stringify(this.dataService.invoiceList));
        this.invoicesList.sort((a, b) => a.invoice_id - b.invoice_id);
        this.invoicesList.forEach(element => {
            this.time = this.time + 0.2;
            element.time = this.time;
            element.converted_total_cost = '$' + element.total_cost;
            element.converted_payment_made = '$' + element.payment_made;
        });
        this.applyClassBySelection("bounceInRight");
    }
    edit(invoice) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_invoice_edit_invoice_page__WEBPACK_IMPORTED_MODULE_7__["EditInvoicePage"],
                componentProps: {
                    "invoice": invoice
                },
                cssClass: 'custom-modal',
            });
            this.referenceservice.isModal = "blurPage";
            yield modal.present();
            yield modal.onWillDismiss().then(data => {
                console.log(data);
                this.referenceservice.isModal = "";
            });
        });
    }
    createInvoice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _create_invoice_create_invoice_page__WEBPACK_IMPORTED_MODULE_6__["CreateInvoicePage"],
                cssClass: 'custom-modal',
                componentProps: {
                    "invoice": ''
                }
            });
            this.referenceservice.isModal = "blurPage";
            yield modal.present();
            yield modal.onWillDismiss().then(data => {
                console.log(data);
                this.referenceservice.isModal = "";
            });
        });
    }
    applyClassBySelection(effect) {
        this.cssClass = "animated " + effect;
    }
    openInvoice(invoice) {
        this.cssClass = "";
        this.navContrl.navigateForward('/view-invoice', { state: { 'invoice': invoice } });
    }
    generatePayslip(payslip) {
        this.cssClass = "";
        this.navContrl.navigateForward('/pay-slip', payslip);
    }
    getHeaderStyle() {
        return { background: this.primaryColor };
    }
    delete(index) {
        this.cssClass = '';
        this.referenceservice.deleteAlert("Confirm Delete", "Do you want to delete this invoice").then(res => {
            this.onDeleteConfirm(index);
        });
    }
    onDeleteConfirm(i) {
        let element = document.getElementById(i);
        element.classList.add('animated', 'rollOut', 'slow');
        element.addEventListener('animationend', (e => {
            this.invoicesList.splice(i, 1);
            this.referenceservice.showAlert('Smart HR', 'Invoice Removed successfully');
        }));
    }
};
InvoicesPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
InvoicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoices',
        template: __webpack_require__(/*! raw-loader!./invoices.page.html */ "./node_modules/raw-loader/index.js!./src/app/invoices/invoices.page.html"),
        styles: [__webpack_require__(/*! ./invoices.page.scss */ "./src/app/invoices/invoices.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], InvoicesPage);



/***/ })

}]);
//# sourceMappingURL=invoices-invoices-module-es2015.js.map