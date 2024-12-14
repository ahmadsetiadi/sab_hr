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

module.exports = ".divide-list-label {\n  margin: 0 !important;\n}\n\n.item-divideList {\n  display: unset;\n  margin: 2px 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.contactIcon {\n  font-size: 20px;\n  color: #0c0;\n  position: relative;\n  float: right;\n  margin-right: 5%;\n}\n\ncheckbox-icon {\n  border-radius: 10px;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-style: solid;\n}\n\nion-checkbox {\n  --border-color: #656161;\n  --border-radius: 10px;\n  margin: 9px 36px 9px 4px;\n}\n\n.group-footer-button-call {\n  border-color: transparent;\n  color: #fff !important;\n  background-color: #90ee90 !important;\n  margin: 0 !important;\n  box-shadow: none;\n  opacity: 1;\n  width: 100%;\n  height: 44px;\n}\n\n.group-footer-button {\n  border-color: transparent;\n  color: #fff !important;\n  background-color: #44bbec !important;\n  margin: 0 !important;\n  box-shadow: none;\n  opacity: 1;\n  width: 100%;\n  height: 44px;\n}\n\nion-footer {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  background: #e2e2e2 !important;\n  left: 0;\n  bottom: 0;\n  position: unset;\n  z-index: 10;\n  display: block;\n  width: 100%;\n}\n\n.contact-item {\n  --inner-padding-end: 0px;\n}\n\n.contacts-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  padding: 25px 20px 0px 20px;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.contacts-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.contacts .custom-icon-chat-contact-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.contacts-icons {\n  margin: 0;\n}\n\n.contacts-icons .custom-icon-chat-icon-1 {\n  color: #fe9c45;\n  font-size: 20px;\n}\n\n.contacts-icons span {\n  padding: 8px;\n}\n\n.contcts-items {\n  border-bottom: solid 1px #dcdcdc;\n  padding: 4px 0;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.user-icon {\n  margin-right: 10px;\n}\n\n.user-icon .custom-icon-user-placeholder-img {\n  border-radius: 50px;\n  background: #D2D2D2;\n  padding: 10px;\n  font-size: 15px;\n}\n\n.user-icon .custom-icon-user-placeholder-img::before {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRDpcXF9QUk9KRUNUXFxOU0FcXFByb2plY3RfSFJcXG1vYmlsZS9zcmNcXGFwcFxcY29udGFjdHNcXGNvbnRhY3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7VUFBQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FES0E7RUFDRyxnQkFBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxTQUFBO0FDRko7O0FESUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREtJO0VBQ0ksWUFBQTtBQ0hSOztBRE9BO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7QUNKSjs7QURNSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0pSOztBRE9JO0VBQ0ksdUJBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGUtbGlzdC1sYWJlbCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tZGl2aWRlTGlzdCB7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmNvbnRhY3RJY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMGMwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuY2hlY2tib3gtaWNvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbmlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogIzY1NjE2MTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogOXB4IDM2cHggOXB4IDRweDtcclxufVxyXG5cclxuLmdyb3VwLWZvb3Rlci1idXR0b24tY2FsbCB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGVlOTAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDRweDtcclxufVxyXG5cclxuLmdyb3VwLWZvb3Rlci1idXR0b24ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiYmVjICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgb3JkZXI6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFjdC1pdGVtIHtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxufVxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IENvbnRhY3RzIExpc3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcblxyXG4uY29udGFjdHMtY29udGVudC1kaXYge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb250YWN0cy1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0cyAuY3VzdG9tLWljb24tY2hhdC1jb250YWN0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGFjdHMtaWNvbnMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIC5jdXN0b20taWNvbi1jaGF0LWljb24tMSB7XHJcbiAgICAgICAgY29sb3I6ICNmZTljNDU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRjdHMtaXRlbXMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkY2RjZGM7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDJEMkQyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZzo6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi5kaXZpZGUtbGlzdC1sYWJlbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1kaXZpZGVMaXN0IHtcbiAgZGlzcGxheTogdW5zZXQ7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmNvbnRhY3RJY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzBjMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbmNoZWNrYm94LWljb24ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1jb2xvcjogIzY1NjE2MTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDlweCAzNnB4IDlweCA0cHg7XG59XG5cbi5ncm91cC1mb290ZXItYnV0dG9uLWNhbGwge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlZTkwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5ncm91cC1mb290ZXItYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YmJlYyAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgb3JkZXI6IDE7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTIgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogdW5zZXQ7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWN0LWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbi5jb250YWN0cy1jb250ZW50LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNXB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250YWN0cy1lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uY29udGFjdHMgLmN1c3RvbS1pY29uLWNoYXQtY29udGFjdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWN0cy1pY29ucyB7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250YWN0cy1pY29ucyAuY3VzdG9tLWljb24tY2hhdC1pY29uLTEge1xuICBjb2xvcjogI2ZlOWM0NTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhY3RzLWljb25zIHNwYW4ge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb250Y3RzLWl0ZW1zIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkY2RjZGM7XG4gIHBhZGRpbmc6IDRweCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi51c2VyLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4udXNlci1pY29uIC5jdXN0b20taWNvbi11c2VyLXBsYWNlaG9sZGVyLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNEMkQyRDI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi51c2VyLWljb24gLmN1c3RvbS1pY29uLXVzZXItcGxhY2Vob2xkZXItaW1nOjpiZWZvcmUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */"

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