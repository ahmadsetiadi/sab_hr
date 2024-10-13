(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-profile/edit-profile.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-item lines=\"none\">\r\n      <ion-icon class=\"nav-content nav-icon\" (click)=\"util.popBack()\" name=\"arrow-back\"></ion-icon>\r\n      <ion-title class=\"nav-content nav-title\">Edit Profile</ion-title>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"scroll-cont\">\r\n  <div *ngIf=\"basicInformation\">\r\n    <h4 class=\"editprofile-title\">Basic Informations</h4>\r\n    <div class=\"inputList\">\r\n      <ion-list class=\"inputLabel\">\r\n        <ion-item class=\"inputItem\">\r\n          <ion-label class=\"addInput-Label\" position=\"floating\">Full Name</ion-label>\r\n          <ion-input class=\"addInput\" (keyup.enter)=\"moveFocus(b)\" [(ngModel)]=\"user.fullname\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"inputItem\">\r\n          <ion-label class=\"addInput-Label\" position=\"floating\">Birth Date</ion-label>\r\n          <ion-datetime displayFormat=\"MMM DD YYYY\" max=\"{{currentTime}}\" [(ngModel)]=\"user.dob\" type=\"text\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n        <ion-item class=\"inputItem item-leave-height\">\r\n          <ion-label class=\"addInput-Label\" stacked>Gender</ion-label>\r\n          <ion-select interface=\"action-sheet\" placeholder=\"Select Gender\" [(ngModel)]=\"user.gender\">\r\n            <ion-select-option *ngFor=\"let gen of gender\" [value]=\"gen.value\">{{gen.name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item class=\"inputItem\">\r\n          <ion-label class=\"addInput-Label\" position=\"floating\">Address</ion-label>\r\n          <ion-input class=\"addInput\" #b (keyup.enter)=\"moveFocus(c)\" [(ngModel)]=\"user.address\" type=\"text\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"inputItem\">\r\n          <ion-label class=\"addInput-Label\" position=\"floating\">City</ion-label>\r\n          <ion-input class=\"addInput\" #c (keyup.enter)=\"moveFocus(d)\" [(ngModel)]=\"user.city\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"inputItem\">\r\n          <ion-label class=\"addInput-Label\" position=\"floating\">Country</ion-label>\r\n          <ion-input class=\"addInput\" #d (keyup.enter)=\"moveFocus(e)\" [(ngModel)]=\"user.country\" type=\"text\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"inputItem\">\r\n          <ion-label class=\"addInput-Label\" position=\"floating\">Phone Number</ion-label>\r\n          <ion-input class=\"addInput\" #contactnumber=\"ngModel\" #e (keyup.enter)=\"moveFocus(f)\" [(ngModel)]=\"user.phone\"\r\n            pattern=\"[0-9]{10,15}\" maxlength=\"15\" required type=\"tel\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"md-errors-spacer\" [hidden]=\"contactnumber.valid || contactnumber.untouched\">\r\n          <div class=\"validation\" *ngIf=\"contactnumber.errors && contactnumber.errors.pattern\">\r\n            Phone is invalid\r\n          </div>\r\n        </div>\r\n        <ion-item class=\"inputItem\">\r\n          <ion-label class=\"addInput-Label\" position=\"floating\">Email</ion-label>\r\n          <ion-input class=\"addInput\" #contactemail=\"ngModel\" #f [(ngModel)]=\"user.email\" type=\"text\"\r\n            pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" required></ion-input>\r\n        </ion-item>\r\n        <div class=\"md-errors-spacer\" [hidden]=\"contactemail.valid || contactemail.untouched\">\r\n          <div class=\"validation\" *ngIf=\"contactemail.errors && contactemail.errors.pattern\">\r\n            Email is invalid\r\n          </div>\r\n        </div>\r\n      </ion-list>\r\n      <ion-button class=\"loginButton\" expand=\"block\" (click)=\"EducationInformation()\">Next </ion-button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"educationInformation\">\r\n    <h4 class=\"editprofile-title\">Education Informations</h4>\r\n    <div class=\"inputList\">\r\n      <form (ngSubmit)=\"addEducation()\" [formGroup]=\"userForm\">\r\n        <div formArrayName=\"education\">\r\n          <div class=\"profile-form\" [formGroupName]=\"i\"\r\n            *ngFor=\"let edu of userForm.get('education')['controls']; let i = index\">\r\n            <h4 class=\"editprofile-title\">{{i+1}}. Information <span class=\"removeDetail\">\r\n                <ion-icon ios=\"ios-trash\" (click)=\"removeEducation(i)\" md=\"md-trash\"></ion-icon>\r\n              </span></h4>\r\n            <!-- <p>{{educationfrom[i]}}</p> -->\r\n            <ion-list class=\"inputLabel\">\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Institution</ion-label>\r\n                <ion-input class=\"addInput\" (keyup.enter)=\"moveFocus(i)\" formControlName=\"institution\" type=\"text\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Subject</ion-label>\r\n                <ion-input class=\"addInput\" formControlName=\"subject\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Starting Year</ion-label>\r\n                <ion-datetime displayFormat=\"YYYY\" (ionChange)=\"selectFrom()\" formControlName=\"start_year\" type=\"text\">\r\n                </ion-datetime>\r\n              </ion-item>\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Complete Year</ion-label>\r\n                <ion-datetime displayFormat=\"YYYY\" min=\"{{educationfrom[i]}}\" formControlName=\"complete_year\"\r\n                  type=\"text\"></ion-datetime>\r\n              </ion-item>\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Degree</ion-label>\r\n                <ion-input class=\"addInput\" formControlName=\"degree\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Grade</ion-label>\r\n                <ion-input class=\"addInput\" formControlName=\"grade\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"add-more\" (click)=\"addEducation()\">\r\n        <a class=\"add-more-btn\" href=\"#\">\r\n          <i class=\"fa fa-plus\"></i> Add More Education</a>\r\n      </div>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" class=\"backButton\" (click)=\"BasicInformation()\" expand=\"block\">Back</ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" class=\"loginButton\" (click)=\"ExperienceInformation()\" expand=\"block\">Next\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"experienceInformation\">\r\n    <h4 class=\"editprofile-title\">Experience Informations</h4>\r\n    <div class=\"inputList\">\r\n      <form (ngSubmit)=\"addEducation()\" [formGroup]=\"userForm\">\r\n        <div formArrayName=\"experience\">\r\n          <div class=\"profile-form\" [formGroupName]=\"i\"\r\n            *ngFor=\"let exp of userForm.get('experience')['controls']; let i= index\">\r\n            <h4 class=\"editprofile-title\">{{i+1}}. Information <span class=\"removeDetail\">\r\n                <ion-icon ios=\"ios-trash\" (click)=\"removeExperience(i)\" md=\"md-trash\"></ion-icon>\r\n              </span></h4>\r\n            <ion-list class=\"inputLabel\">\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Company Name</ion-label>\r\n                <ion-input class=\"addInput\" formControlName=\"company\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Location</ion-label>\r\n                <ion-input class=\"addInput\" formControlName=\"location\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Job Position</ion-label>\r\n                <ion-input class=\"addInput\" formControlName=\"jop_position\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Period From</ion-label>\r\n                <ion-datetime displayFormat=\"YYYY\" (ionChange)=\"selectFrom1()\" formControlName=\"period_from\"\r\n                  type=\"text\"></ion-datetime>\r\n              </ion-item>\r\n              <ion-item class=\"inputItem\">\r\n                <ion-label class=\"addInput-Label\" position=\"floating\">Period To</ion-label>\r\n                <ion-datetime displayFormat=\"YYYY\" min=\"{{experiencefrom[i]}}\" formControlName=\"period_to\" type=\"text\">\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"add-more\" (click)=\"addExperience()\">\r\n        <a class=\"add-more-btn\" href=\"#\">\r\n          <i class=\"fa fa-plus\"></i> Add More Experience</a>\r\n      </div>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" class=\"backButton\" (click)=\"EducationInformation()\" expand=\"block\">Back</ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" class=\"loginButton\" [ngStyle]=\"getHeaderStyle()\" (click)=\"submit()\" expand=\"block\">\r\n            Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/edit-profile/edit-profile.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "./src/app/edit-profile/edit-profile-routing.module.ts");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/edit-profile/edit-profile.page.ts");







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editprofile-title {\n  color: #000 !important;\n  font-weight: 700 !important;\n  font-size: 16px;\n}\n\n.inputList {\n  border-bottom: 1px solid #e7e7e7;\n  border-top: 1px solid #e7e7e7;\n}\n\n.removeDetail {\n  float: right;\n  color: red;\n  font-size: 18px;\n}\n\n.add-more-btn {\n  background-color: #3a57c4;\n  border-radius: 4px;\n  color: #fff !important;\n  display: inline-block;\n  font-size: 14px;\n  padding: 5px 10px;\n  text-decoration: none;\n}\n\n.backButton {\n  --background: #fa424a;\n  border-color: #fa424a;\n  border-radius: 5px;\n  height: 45px;\n  margin-top: 20px;\n  font-size: 16px;\n  margin-bottom: 5%;\n}\n\n.loginButton {\n  border-radius: 5px;\n  height: 45px;\n  margin-top: 20px;\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n\n.scroll-cont {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n\n.inputItem {\n  --padding-start: 0px !important;\n  --padding-inner-end: 0px !important ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcZWRpdC1wcm9maWxlXFxlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLG9DQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0cHJvZmlsZS10aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaW5wdXRMaXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuXHJcbi5yZW1vdmVEZXRhaWwge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmFkZC1tb3JlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1N2M0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYmFja0J1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYTQyNGE7XHJcbiAgICBib3JkZXItY29sb3I6ICNmYTQyNGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmlucHV0SXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWlubmVyLWVuZDogMHB4ICFpbXBvcnRhbnRcclxufSIsIi5lZGl0cHJvZmlsZS10aXRsZSB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW5wdXRMaXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U3ZTc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xufVxuXG4ucmVtb3ZlRGV0YWlsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5hZGQtbW9yZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1N2M0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmFja0J1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZhNDI0YTtcbiAgYm9yZGVyLWNvbG9yOiAjZmE0MjRhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmxvZ2luQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNjcm9sbC1jb250IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uaW5wdXRJdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWlubmVyLWVuZDogMHB4ICFpbXBvcnRhbnQgO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let EditProfilePage = class EditProfilePage {
    constructor(util, fb, dataService, navContrl) {
        this.util = util;
        this.fb = fb;
        this.dataService = dataService;
        this.navContrl = navContrl;
        this.basicInformation = true;
        this.experienceInformation = false;
        this.educationInformation = false;
        this.user = {};
        this.education_details = {};
        this.temp = {};
        this.experience_information = {};
        this.editprofilePage = this;
        this.educationfrom = [];
        this.experiencefrom = [];
        this.primaryColor = '#44bbec';
        this.secondryColor = '#0163fc';
        this.gender = [
            {
                name: 'Male',
                value: 'Male'
            },
            {
                name: 'Female',
                value: 'Female'
            }
        ];
        this.userForm = fb.group({
            'education': fb.array([this.educationForm()]),
            'experience': fb.array([this.experienceForm()])
        });
    }
    ngOnInit() {
        this.user = this.dataService.employeeProfile;
        let isEdu = typeof (this.user.education_details) === 'string';
        let isExp = typeof (this.user.experience_information) === 'string';
        this.user.education_details = (isEdu) ? JSON.parse(this.user.education_details) : this.user.education_details;
        this.user.experience_information = (isExp) ? JSON.parse(this.user.experience_information) : this.user.experience_information;
        if (this.user.education_details != []) {
            const control = this.userForm.controls.education;
            control.removeAt(0);
            this.user.education_details.forEach((value, key) => {
                const control = this.userForm.controls.education;
                // control.value[key].patchValue(value)
                control.push(this.educationForm());
            });
            this.userForm.patchValue({
                education: this.user.education_details
            });
        }
        if (this.user.experience_information != []) {
            const control = this.userForm.controls.experience;
            control.removeAt(0);
            this.user.experience_information.forEach((value, key) => {
                const control = this.userForm.controls.experience;
                // control.value[key].patchValue(value)
                control.push(this.experienceForm());
            });
            this.userForm.patchValue({
                experience: this.user.experience_information
            });
        }
        this.currentTime = new Date();
        this.year = this.currentTime.getFullYear();
        this.month = this.currentTime.getMonth() + 1;
        this.day = this.currentTime.getDate() - 1;
        if (this.month < 10) {
            this.month = '0' + this.month;
        }
        if (this.day < 10) {
            this.day = '0' + this.day;
        }
        this.currentTime = this.year + '-' + this.month + '-' + this.day;
    }
    educationForm() {
        return this.fb.group({
            'institution': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'subject': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'start_year': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'complete_year': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'degree': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'grade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    ;
    experienceForm() {
        return this.fb.group({
            'company': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'location': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'jop_position': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'period_from': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'period_to': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    BasicInformation() {
        this.basicInformation = true;
        this.experienceInformation = false;
        this.educationInformation = false;
    }
    EducationInformation() {
        this.basicInformation = false;
        this.educationInformation = true;
        this.experienceInformation = false;
    }
    ExperienceInformation() {
        var keepGoing = true;
        var a = 0;
        this.userForm.value.education.forEach((value) => {
            if (keepGoing)
                if (value.institution != '' && value.subject != '' && value.start_year != '' && value.complete_year != '' && value.degree != '' && value.grade != '') {
                    a++;
                }
                else {
                    this.util.showAlert('Smart HRMS', 'Please fill all the empty fields');
                    keepGoing = false;
                }
            if (this.userForm.value.education.length == a) {
                this.basicInformation = false;
                this.educationInformation = false;
                this.experienceInformation = true;
            }
        });
        if (this.userForm.value.education.length == 0) {
            this.basicInformation = false;
            this.educationInformation = false;
            this.experienceInformation = true;
        }
    }
    ;
    selectFrom() {
        this.userForm.value.education.forEach((value, key) => {
            this.educationfrom[key] = value.start_year;
        });
    }
    ;
    selectFrom1() {
        this.userForm.value.experience.forEach((value, key) => {
            this.experiencefrom[key] = value.period_from;
        });
    }
    ;
    addEducation() {
        const control = this.userForm.controls.education;
        control.push(this.educationForm());
    }
    ;
    removeEducation(value) {
        const control = this.userForm.controls.education;
        control.removeAt(value);
    }
    ;
    removeExperience(value) {
        const control = this.userForm.controls.experience;
        control.removeAt(value);
    }
    ;
    addExperience() {
        const control = this.userForm.controls.experience;
        control.push(this.experienceForm());
    }
    ;
    moveFocus(nextElement) {
        nextElement.setFocus();
    }
    ;
    submit() {
        var keepGoing = true;
        var a = 0;
        this.userForm.value.experience.forEach((value) => {
            if (keepGoing)
                if (value.company != '' && value.location != '' && value.period_from != '' && value.period_to != '' && value.jop_position != '') {
                    a++;
                }
                else {
                    this.util.showAlert('Smart HRMS', 'Please fill all the empty fields');
                    keepGoing = false;
                }
            if (this.userForm.value.experience.length == a) {
                this.editemployee();
            }
        });
        if (this.userForm.value.experience.length == 0) {
            this.editemployee();
        }
    }
    ;
    editemployee() {
        this.util.showAlert('Success', 'Profile updated successfully');
        this.navContrl.back();
    }
    getHeaderStyle() {
        return { 'background': this.primaryColor };
    }
    ;
};
EditProfilePage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.page.html"),
        styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/edit-profile/edit-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=edit-profile-edit-profile-module-es2015.js.map