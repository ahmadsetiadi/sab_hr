(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contacts/contacts.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <!-- <ion-toolbar class=\"blues-nav\" *ngIf=\"!showsearchBar\">\r\n      <ion-item lines=\"none\">\r\n        <ion-icon class=\"nav-content\" (click)=\"util.popBack()\" name=\"arrow-back\"></ion-icon>\r\n        <ion-title class=\"nav-content\">Contact List</ion-title>\r\n        <ion-icon class=\"nav-content\" (click)=\"showsearchBar=!showsearchBar\" name=\"search\"></ion-icon>\r\n      </ion-item>\r\n    </ion-toolbar>\r\n    <ion-toolbar *ngIf=\"showsearchBar\">\r\n      <ion-searchbar animated showCancelButton=\"focus\" (ionCancel)=\"showsearchBar=!showsearchBar\" (ionChange)=\"search()\"\r\n        [(ngModel)]=\"searchStr\">\r\n      </ion-searchbar>\r\n    </ion-toolbar> -->\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Contact List</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- \r\n<ion-content class=\"background-content\">\r\n  <div *ngIf=\"!showSelectList\">\r\n    <ion-item lines=\"none\" *ngFor=\"let eachCont of contacts\" style=\"background: #fff;\" class=\"contact-item\">\r\n      <ion-label class=\"divide-list-label\" id=\"lbl-94\">\r\n        <h3 class=\"item-divideList\">{{eachCont.val}}</h3>\r\n        <ion-icon class=\"contactIcon\" ios=\"ios-contacts\" md=\"md-contacts\" role=\"img\" (click)=\"group()\"></ion-icon>\r\n        <ion-icon class=\"contactIcon\" ios=\"ios-chatbubbles\" md=\"md-chatbubbles\" role=\"img\" (click)=\"chat()\">\r\n        </ion-icon>\r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n  <div *ngIf=\"showSelectList\">\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let entry of contacts\" lines=\"none\">\r\n        <ion-label class=\"divide-list-label\">\r\n          <h3 class=\"item-divideList\">{{entry.val}}</h3>\r\n        </ion-label>\r\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n<ion-footer *ngIf=\"showSelectList\">\r\n  <ion-row>\r\n    <ion-col col-6>\r\n      <button class=\"group-footer-button-call\" clear ion-button (click)=\"chat()\">\r\n        <p>Message</p>\r\n      </button>\r\n    </ion-col>\r\n    <ion-col col-6>\r\n      <button class=\"group-footer-button\" clear ion-button (click)=\"cancel()\">\r\n        <p>Cancel</p>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->\r\n\r\n<!-- =================================== Contacts List =================================================== -->\r\n<ion-content>\r\n  <div class=\"contacts-empty-div\">\r\n    <ion-item lines=\"none\" class=\"contacts\">\r\n      <span slot=\"start\" class=\"head-title\">List of Contacts Info</span> <span slot=\"end\"\r\n        class=\"custom-icon-chat-contact-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"contacts-content-div\">\r\n    <ion-item lines=\"none\" class=\"contcts-items\">\r\n      <div slot=\"start\" class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n      <ion-label>\r\n        Barry Cuda\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"contacts-icons\">\r\n        <span class=\"custom-icon-chat-icon-1\" (click)=\"openChat()\"></span>\r\n        <span class=\"custom-icon-chat-add-group-icon\"></span>\r\n        <span class=\"custom-icon-arrow-icon\"></span>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"contcts-items\">\r\n      <div slot=\"start\" class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n      <ion-label>\r\n        Barry Cuda\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"contacts-icons\">\r\n        <span class=\"custom-icon-chat-icon-1\" (click)=\"openChat()\"></span>\r\n        <span class=\"custom-icon-chat-add-group-icon\"></span>\r\n        <span class=\"custom-icon-arrow-icon\"></span>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"contcts-items\">\r\n      <div slot=\"start\" class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n      <ion-label>\r\n        Barry Cuda\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"contacts-icons\">\r\n        <span class=\"custom-icon-chat-icon-1\" (click)=\"openChat()\"></span>\r\n        <span class=\"custom-icon-chat-add-group-icon\"></span>\r\n        <span class=\"custom-icon-arrow-icon\"></span>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"contcts-items\">\r\n      <div slot=\"start\" class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n      <ion-label>\r\n        Barry Cuda\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"contacts-icons\">\r\n        <span class=\"custom-icon-chat-icon-1\" (click)=\"openChat()\"></span>\r\n        <span class=\"custom-icon-chat-add-group-icon\"></span>\r\n        <span class=\"custom-icon-arrow-icon\"></span>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"contcts-items\">\r\n      <div slot=\"start\" class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n      <ion-label>\r\n        Barry Cuda\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"contacts-icons\">\r\n        <span class=\"custom-icon-chat-icon-1\" (click)=\"openChat()\"></span>\r\n        <span class=\"custom-icon-chat-add-group-icon\"></span>\r\n        <span class=\"custom-icon-arrow-icon\"></span>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"contcts-items\">\r\n      <div slot=\"start\" class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n      <ion-label>\r\n        Barry Cuda\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"contacts-icons\">\r\n        <span class=\"custom-icon-chat-icon-1\" (click)=\"openChat()\"></span>\r\n        <span class=\"custom-icon-chat-add-group-icon\"></span>\r\n        <span class=\"custom-icon-arrow-icon\"></span>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"contcts-items\">\r\n      <div slot=\"start\" class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n      <ion-label>\r\n        Barry Cuda\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"contacts-icons\">\r\n        <span class=\"custom-icon-chat-icon-1\" (click)=\"openChat()\"></span>\r\n        <span class=\"custom-icon-chat-add-group-icon\"></span>\r\n        <span class=\"custom-icon-arrow-icon\"></span>\r\n      </div>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/contacts/contacts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function() { return ContactsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.page */ "./src/app/contacts/contacts.page.ts");




var routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
    }
];
var ContactsPageRoutingModule = /** @class */ (function () {
    function ContactsPageRoutingModule() {
    }
    ContactsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ContactsPageRoutingModule);
    return ContactsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/contacts/contacts-routing.module.ts");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "./src/app/contacts/contacts.page.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/modal/modal.module.ts");








var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalPageModule"]
            ],
            declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divide-list-label {\n  margin: 0 !important;\n}\n\n.item-divideList {\n  display: unset;\n  margin: 2px 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.contactIcon {\n  font-size: 20px;\n  color: #0c0;\n  position: relative;\n  float: right;\n  margin-right: 5%;\n}\n\ncheckbox-icon {\n  border-radius: 10px;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-style: solid;\n}\n\nion-checkbox {\n  --border-color: #656161;\n  --border-radius: 10px;\n  margin: 9px 36px 9px 4px;\n}\n\n.group-footer-button-call {\n  border-color: transparent;\n  color: #fff !important;\n  background-color: #90ee90 !important;\n  margin: 0 !important;\n  box-shadow: none;\n  opacity: 1;\n  width: 100%;\n  height: 44px;\n}\n\n.group-footer-button {\n  border-color: transparent;\n  color: #fff !important;\n  background-color: #44bbec !important;\n  margin: 0 !important;\n  box-shadow: none;\n  opacity: 1;\n  width: 100%;\n  height: 44px;\n}\n\nion-footer {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  background: #e2e2e2 !important;\n  left: 0;\n  bottom: 0;\n  position: unset;\n  z-index: 10;\n  display: block;\n  width: 100%;\n}\n\n.contact-item {\n  --inner-padding-end: 0px;\n}\n\n.contacts-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 25px 20px 0px 20px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.contacts-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.contacts .custom-icon-chat-contact-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.contacts-icons {\n  margin: 0;\n}\n\n.contacts-icons .custom-icon-chat-icon-1 {\n  color: #fe9c45;\n  font-size: 20px;\n}\n\n.contacts-icons span {\n  padding: 8px;\n}\n\n.contcts-items {\n  border-bottom: solid 1px #dcdcdc;\n  padding: 4px 0;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.user-icon {\n  margin-right: 10px;\n}\n\n.user-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.user-icon .custom-icon-user-placeholder-img::before {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRDpcXHNpbmFyXFxhcHAyL3NyY1xcYXBwXFxjb250YWN0c1xcY29udGFjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtVQUFBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURLQTtFQUNHLGdCQUFBO0VBQ0MsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLFNBQUE7QUNGSjs7QURJSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRlI7O0FES0k7RUFDSSxZQUFBO0FDSFI7O0FET0E7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDSko7O0FET0E7RUFDSSxrQkFBQTtBQ0pKOztBRE1JO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSlI7O0FET0k7RUFDSSx1QkFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZS1saXN0LWxhYmVsIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1kaXZpZGVMaXN0IHtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgbWFyZ2luOiAycHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uY29udGFjdEljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwYzA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG5jaGVja2JveC1pY29uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuaW9uLWNoZWNrYm94IHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjNjU2MTYxO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA5cHggMzZweCA5cHggNHB4O1xyXG59XHJcblxyXG4uZ3JvdXAtZm9vdGVyLWJ1dHRvbi1jYWxsIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZWU5MCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4uZ3JvdXAtZm9vdGVyLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGJiZWMgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDRweDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBvcmRlcjogMTtcclxuICAgIGJhY2tncm91bmQ6ICNlMmUyZTIgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWN0LWl0ZW0ge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ29udGFjdHMgTGlzdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuXHJcbi5jb250YWN0cy1jb250ZW50LWRpdiB7XHJcbiAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI1cHggMjBweCAwcHggMjBweDtcclxufVxyXG5cclxuLmhlYWQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbnRhY3RzLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmNvbnRhY3RzIC5jdXN0b20taWNvbi1jaGF0LWNvbnRhY3QtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250YWN0cy1pY29ucyB7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLWNoYXQtaWNvbi0xIHtcclxuICAgICAgICBjb2xvcjogI2ZlOWM0NTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGN0cy1pdGVtcyB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RjZGNkYztcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxufVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNEMkQyRDI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLmRpdmlkZS1saXN0LWxhYmVsIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWRpdmlkZUxpc3Qge1xuICBkaXNwbGF5OiB1bnNldDtcbiAgbWFyZ2luOiAycHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uY29udGFjdEljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMGMwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuY2hlY2tib3gtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjNjU2MTYxO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogOXB4IDM2cHggOXB4IDRweDtcbn1cblxuLmdyb3VwLWZvb3Rlci1idXR0b24tY2FsbCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGVlOTAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLmdyb3VwLWZvb3Rlci1idXR0b24ge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiYmVjICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBvcmRlcjogMTtcbiAgYmFja2dyb3VuZDogI2UyZTJlMiAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhY3QtaXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuLmNvbnRhY3RzLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHggMjBweCAwcHggMjBweDtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhY3RzLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5jb250YWN0cyAuY3VzdG9tLWljb24tY2hhdC1jb250YWN0LWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhY3RzLWljb25zIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhY3RzLWljb25zIC5jdXN0b20taWNvbi1jaGF0LWljb24tMSB7XG4gIGNvbG9yOiAjZmU5YzQ1O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFjdHMtaWNvbnMgc3BhbiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNvbnRjdHMtaXRlbXMge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RjZGNkYztcbiAgcGFkZGluZzogNHB4IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnVzZXItaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi51c2VyLWljb24gLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogI0QyRDJEMjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnVzZXItaWNvbiAuY3VzdG9tLWljb24tdXNlci1wbGFjZWhvbGRlci1pbWc6OmJlZm9yZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/contacts/contacts.page.ts ***!
  \*******************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");





var ContactsPage = /** @class */ (function () {
    function ContactsPage(navContrl, modalController, util) {
        this.navContrl = navContrl;
        this.modalController = modalController;
        this.util = util;
        this.contacts = [];
        this.groupName = "";
        this.form = [];
        this.contactsCopy = [];
        this.searchStr = "";
        this.showSelectList = false;
        this.contacts = [
            { val: 'Barry Cuda', isChecked: false },
            { val: 'Catherine Manseau', isChecked: false },
            { val: 'Daniel Portar', isChecked: false },
            { val: 'John Doe', isChecked: false },
            { val: 'Loren Gatlin', isChecked: false },
            { val: 'Mike Litorus', isChecked: false },
            { val: 'Richard Miles', isChecked: false },
            { val: 'Steam smith', isChecked: false },
            { val: 'Wilmer Deluna', isChecked: false },
        ];
        this.contactsCopy = this.contacts;
    }
    ContactsPage.prototype.ngOnInit = function () {
    };
    ContactsPage.prototype.openChat = function () {
        this.navContrl.navigateForward("/view-chat");
    };
    ContactsPage.prototype.group = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null && detail.data && detail.data.groupName) {
                                console.log(detail);
                                _this.groupName = detail.data.groupName;
                                _this.showSelectList = true;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsPage.prototype.cancel = function () {
        this.showSelectList = false;
    };
    ContactsPage.prototype.search = function () {
        var _this = this;
        if (this.searchStr.length == 0) {
            this.contacts = this.contactsCopy;
        }
        else {
            this.contacts = this.contactsCopy.filter(function (contact) { return contact.val.toLocaleUpperCase().includes(_this.searchStr.toLocaleUpperCase()); });
        }
    };
    ContactsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
    ]; };
    ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.page.html */ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.page.html"),
            styles: [__webpack_require__(/*! ./contacts.page.scss */ "./src/app/contacts/contacts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], ContactsPage);
    return ContactsPage;
}());



/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module-es5.js.map