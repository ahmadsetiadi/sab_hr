(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"referenceService.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceService.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Employee Profile xx</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"referenceService.isModal\">\r\n  <div class=\"profile-empty-div\">\r\n    <div class=\"employee-div\">\r\n      <div class=\"edit-icon\">\r\n        <span class=\"custom-icon-edit-icon\" (click)=\"edit()\"></span>\r\n      </div>\r\n      <div class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"employee-name\">John Doe</div>\r\n    <div class=\"employee-design\">Android Developer</div>\r\n  </div>\r\n\r\n  <div class=\"profile-content-div\">\r\n    <ion-segment class=\"profile-segment\" [(ngModel)]=\"profile\">\r\n      <ion-segment-button value=\"personal\" checked=\"true\">\r\n        <div class=\"seg-btn-1\">\r\n          <span class=\"custom-icon-dashboard-client-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"education\">\r\n        <div class=\"seg-btn\">\r\n          <span class=\"custom-icon-education-info-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"overview\">\r\n        <div class=\"seg-btn\">\r\n          <span class=\"custom-icon-career-info-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div [ngSwitch]=\"profile\">\r\n      <div *ngSwitchCase=\"'personal'\" class=\"seg-content\">\r\n        <h4 class=\"seg-title\">Personal Info</h4>\r\n        <div class=\"border\"></div>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Employee ID\r\n          </ion-label>\r\n          <span slot=\"end\">05</span>\r\n        </ion-item>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Phone\r\n          </ion-label>\r\n          <span slot=\"end\">1234567890</span>\r\n        </ion-item>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Email\r\n          </ion-label>\r\n          <span slot=\"end\">steve05@gmail.com</span>\r\n        </ion-item>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Birthday\r\n          </ion-label>\r\n          <span slot=\"end\">1989-01-01</span>\r\n        </ion-item>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Gender\r\n          </ion-label>\r\n          <span slot=\"end\">Male</span>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'education'\">\r\n        <div class=\"profile-education-timeline\">\r\n          <h4 class=\"seg-title profile-education-list\">Education Info</h4>\r\n          <div class=\"border profile-education-list\"></div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2003-2007</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">International College of Arts & Science (UG)</ion-item>\r\n              <span>Bsc Computer Science</span>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2003-2007</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">International College of Arts & Science (UG)</ion-item>\r\n              <span>Bsc Computer Science</span>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2003-2007</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">International College of Arts & Science (UG)</ion-item>\r\n              <span>Bsc Computer Science</span>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'overview'\">\r\n        <div class=\"profile-education-timeline\">\r\n          <h4 class=\"seg-title profile-education-list\">Career Experience</h4>\r\n          <div class=\"border profile-education-list\"></div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2016-2018</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">Zeeong Technologies PVT Limited</ion-item>\r\n              <span>Web Designer</span>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2018 to present</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">Mazinow Info Tech PVT Limited</ion-item>\r\n              <span>Sr. Web Designer</span>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.profile-empty-div {\n  background: #0A15D5;\n  height: 300px;\n}\n\n.user-icon {\n  font-size: 85px;\n  margin: 10px;\n}\n\n.employee-div {\n  text-align: center;\n  border: solid 1px #dcdcdc;\n  border-radius: 80px;\n  background: #fff;\n  height: 149px;\n  width: 150px;\n  margin: 0 auto;\n}\n\n.employee-name {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n  margin-top: 8px;\n}\n\n.employee-design {\n  font-size: 16px;\n  text-align: center;\n  color: white;\n}\n\n.custom-icon-edit-icon {\n  font-size: 35px;\n  color: white;\n  font-weight: 500;\n}\n\n.edit-icon {\n  background: #FE9C45;\n  border-radius: 20px;\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  margin-left: 100px;\n}\n\n.profile-segment {\n  border-radius: 50px;\n  margin: auto;\n  width: calc(100% - 10%);\n  top: -20px;\n  position: relative;\n  margin-bottom: 20px;\n  background: white;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n  --background-checked: none;\n  --indicator-color-checked: none;\n}\n\n.profile-segment .segment-button-checked .seg-btn {\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n  background: #fe9c45;\n  border-radius: 50px;\n  padding-top: 10px;\n}\n\n.profile-segment .segment-button-checked .seg-btn-1 {\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n  background: #fe9c45;\n  border-radius: 50px;\n  padding-top: 2.5px !important;\n}\n\n.profile-segment .segment-button-checked .selected-icon {\n  color: white !important;\n}\n\n.profile-segment ion-segment-button {\n  margin: 10px;\n  --border-color: #fff0;\n}\n\n.profile-segment ion-segment-button .custom-icon-dashboard-client-icon {\n  font-size: 45px;\n  color: black;\n}\n\n.profile-segment ion-segment-button .custom-icon-career-info-icon,\n.profile-segment ion-segment-button .custom-icon-education-info-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.seg-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.border {\n  border-top: solid 2px #FE9C45;\n  width: 80px;\n}\n\n.seg-content {\n  padding: 0 20px;\n}\n\n.profile-item {\n  --padding-start: 0;\n  --detail-icon-color:rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px;\n}\n\n.profile-item span {\n  font-weight: bold;\n  max-width: 65%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.profile-education-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.profile-education-list {\n  margin-left: 50px;\n}\n\n.profile-education-list ion-list-header {\n  padding-left: 0;\n}\n\n.profile-education-list ion-item {\n  --padding-start: 0;\n}\n\n.profile-education-list span {\n  font-weight: bold;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.profile-education-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.profile-education-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.profile-education-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 20px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.profile-education-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.profile-education-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.profile-education-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcX1BST0pFQ1RcXE5TQVxcUHJvamVjdF9IUlxcbW9iaWxlL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrS0E7RUFDRyxnQkFBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2pLSjs7QURvS0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNqS0o7O0FEb0tBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNqS0o7O0FEb0tBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNqS0o7O0FEb0tBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2pLSjs7QURvS0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDaktKOztBRG9LQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNqS0o7O0FEb0tBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2pLSjs7QURvS0E7RUFDRSxtQkFBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUNqS0o7O0FEb0tRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDbEtaOztBRHFLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ25LWjs7QURzS1E7RUFDSSx1QkFBQTtBQ3BLWjs7QUR3S0k7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUN0S1I7O0FEd0tRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUN0S1o7O0FEeUtROztFQUVJLGVBQUE7RUFDQSxZQUFBO0FDdktaOztBRDRLQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ3pLSjs7QUQ0S0E7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUN6S0o7O0FENEtBO0VBQ0ksZUFBQTtBQ3pLSjs7QUQ0S0E7RUFDSSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUN6S0o7O0FEMktJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDektSOztBRDhLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDM0tKOztBRDhLQTtFQUNJLGlCQUFBO0FDM0tKOztBRDZLSTtFQUNJLGVBQUE7QUMzS1I7O0FEOEtJO0VBQ0ksa0JBQUE7QUM1S1I7O0FEK0tJO0VBQ0ksaUJBQUE7QUM3S1I7O0FEaUxBLDZDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDOUtKOztBRGlMQSw2QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUM5S0o7O0FEaUxBLGdDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUM5S0o7O0FEaUxBO0VBQ0kseUJBQUE7QUM5S0o7O0FEaUxBO0VBQ0kseUJBQUE7QUM5S0o7O0FEaUxBLG9DQUFBOztBQUNBO0VBQ0ksT0FBQTtBQzlLSjs7QURpTEEsbUNBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDOUtKOztBRGlMQSwrQ0FBQTs7QUFDQTs7RUFFSSxVQUFBO0FDOUtKOztBRGlMQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7QUM5S0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnByb2ZpbGUtY2FyZCB7XHJcbi8vICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS1waWMge1xyXG4vLyAgICAgd2lkdGg6IDEwMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWhlYWRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbi8vICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgdG9wOiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWhlYWRlci1maWVsZCB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLW5hbWUge1xyXG4vLyAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS1kZXNpZ25hdGlvbiB7XHJcbi8vICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJkLW1kIGgyIHtcclxuLy8gICAgIG1hcmdpbjogMnB4IDA7XHJcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyB9XHJcblxyXG4vLyAuc2MtaW9uLXNlZ21lbnQtbWQtaCB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuLy8gICAgIC0tY29sb3I6ICM4ZThlOTM7XHJcbi8vIH1cclxuXHJcbi8vIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vIH1cclxuXHJcbi8vIC5zZWctYnRuIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbi8vICAgICB3aWR0aDogMDtcclxuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4vLyAgICAgbWluLXdpZHRoOiBjYWxjKDEwMCUvMyk7XHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtbGlzdCB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcclxuLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtdGl0bGUge1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS1pbm5lci1pdGVtIHtcclxuLy8gICAgIGNvbG9yOiAjOGU4ZTkzO1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS1sYWJlbCB7XHJcbi8vICAgICBtYXJnaW46IDEzcHggOHB4IDEzcHggMDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtaXRlbSB7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTdlNyAhaW1wb3J0YW50O1xyXG4vLyAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS1pdGVtIGg0IHtcclxuLy8gICAgIG1hcmdpbjogMnB4IDA7XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4vLyB9XHJcblxyXG4vLyAuaG9saWRheS10aXRsZSB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWFkZHJlc3Mge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogOXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50aW1lbGluZS1jb250ZW50IHtcclxuLy8gICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLnRpbWVsaW5lLWNvbnRlbnQgc3Bhbi5uYW1lIHtcclxuLy8gICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gfVxyXG5cclxuLy8gLnRpbWVsaW5lLWNvbnRlbnQgZGl2IHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vIH1cclxuXHJcbi8vIC50aW1lIHtcclxuLy8gICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5jdXMtc3BhbiB7XHJcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWxhYmVsIHAge1xyXG4vLyAgICAgbWFyZ2luOiAwIDAgMnB4O1xyXG4vLyAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbi8vICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4vLyAgICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuLy8gICAgIGNvbG9yOiAjNjY2O1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxMHB4KSB7XHJcblxyXG4vLyAgICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbi8vICAgICBbY2xhc3MqPVwiY3VzLXNwYW5cIl0ge1xyXG4vLyAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFByb2ZpbGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAtLT5cclxuXHJcbi5wcm9maWxlLWNvbnRlbnQtZGl2IHtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1lbXB0eS1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogIzBBMTVENTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA4NXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uZW1wbG95ZWUtZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogMTQ5cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmVtcGxveWVlLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5lbXBsb3llZS1kZXNpZ24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tZWRpdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5lZGl0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZDogI0ZFOUM0NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtc2VnbWVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XHJcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiBub25lO1xyXG5cclxuICAgIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgICAuc2VnLWJ0biB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmU5YzQ1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWctYnRuLTEge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlOWM0NTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0ZWQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2ZmZjA7XHJcblxyXG4gICAgICAgIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtY2xpZW50LWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jdXN0b20taWNvbi1jYXJlZXItaW5mby1pY29uLFxyXG4gICAgICAgIC5jdXN0b20taWNvbi1lZHVjYXRpb24taW5mby1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VnLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCAjRkU5QzQ1O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5zZWctY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjpyZ2IoMjU0LCAxNTYsIDY5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2NSU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnByb2ZpbGUtZWR1Y2F0aW9uLXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5wcm9maWxlLWVkdWNhdGlvbi1saXN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG5cclxuICAgIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLnByb2ZpbGUtZWR1Y2F0aW9uLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cclxuLnByb2ZpbGUtZWR1Y2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuLnByb2ZpbGUtZWR1Y2F0aW9uLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWVkdWNhdGlvbi1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcclxufVxyXG5cclxuLnByb2ZpbGUtZWR1Y2F0aW9uLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUY1NTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuLnByb2ZpbGUtZWR1Y2F0aW9uLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG59XHJcblxyXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuLmxlZnQ6OmFmdGVyLFxyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5mYWItYWRkLWJ0biB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcclxufSIsIi5wcm9maWxlLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi51c2VyLWljb24ge1xuICBmb250LXNpemU6IDg1cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmVtcGxveWVlLWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2RjZGNkYztcbiAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxNDlweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmVtcGxveWVlLW5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uZW1wbG95ZWUtZGVzaWduIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1pY29uLWVkaXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZWRpdC1pY29uIHtcbiAgYmFja2dyb3VuZDogI0ZFOUM0NTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5wcm9maWxlLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xuICB0b3A6IC0yMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAtN3B4IDEwcHggMThweCA3cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IG5vbmU7XG59XG4ucHJvZmlsZS1zZWdtZW50IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5zZWctYnRuIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZTljNDU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnByb2ZpbGUtc2VnbWVudCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuc2VnLWJ0bi0xIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZTljNDU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAyLjVweCAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGUtc2VnbWVudCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuc2VsZWN0ZWQtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGUtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmMDtcbn1cbi5wcm9maWxlLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtY2xpZW50LWljb24ge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5wcm9maWxlLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIC5jdXN0b20taWNvbi1jYXJlZXItaW5mby1pY29uLFxuLnByb2ZpbGUtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLmN1c3RvbS1pY29uLWVkdWNhdGlvbi1pbmZvLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNlZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggI0ZFOUM0NTtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5zZWctY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnByb2ZpbGUtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjpyZ2IoMjU0LCAxNTYsIDY5KTtcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBwYWRkaW5nOiA0cHg7XG59XG4ucHJvZmlsZS1pdGVtIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWF4LXdpZHRoOiA2NSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ucHJvZmlsZS1lZHVjYXRpb24tdGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2ZpbGUtZWR1Y2F0aW9uLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5wcm9maWxlLWVkdWNhdGlvbi1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5wcm9maWxlLWVkdWNhdGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuLnByb2ZpbGUtZWR1Y2F0aW9uLWxpc3Qgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4ucHJvZmlsZS1lZHVjYXRpb24tdGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEMkQyO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5wcm9maWxlLWVkdWNhdGlvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLnByb2ZpbGUtZWR1Y2F0aW9uLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4ucHJvZmlsZS1lZHVjYXRpb24tY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTVENTtcbn1cblxuLnByb2ZpbGUtZWR1Y2F0aW9uLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLnByb2ZpbGUtZWR1Y2F0aW9uLXRpbWVsaW5lOjphZnRlciB7XG4gIGxlZnQ6IDMxcHg7XG59XG5cbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuLmxlZnQ6OmFmdGVyLFxuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbi5mYWItYWRkLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/action-sheet/ngx */ "./node_modules/@ionic-native/action-sheet/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-employee/edit-employee.page */ "./src/app/edit-employee/edit-employee.page.ts");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");











var ProfilePage = /** @class */ (function () {
    function ProfilePage(referenceService, navCtrl, activeRoute, apiService, camera, actionSheet, modalController, transfer, dataService) {
        this.referenceService = referenceService;
        this.navCtrl = navCtrl;
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.camera = camera;
        this.actionSheet = actionSheet;
        this.modalController = modalController;
        this.transfer = transfer;
        this.dataService = dataService;
        this.profile = "personal";
        this.profileData = {};
        this.keywords = {};
        this.noEducation = false;
        this.noExperience = false;
        this.isprofile = false;
        this.showPage = false;
        // this.role = localStorage.getItem('role');
        // this.roleId = localStorage.getItem('role_id');
        this.keywords = JSON.parse(localStorage.getItem('keywords'));
        // if (this.activeRoute.snapshot.paramMap.get('empId')) {
        //   this.id = this.activeRoute.snapshot.paramMap.get('empId');
        // }
        // else {
        //   this.id = localStorage.getItem('user_id');
        // }
        // this.colorCode = {
        //   'background-color': localStorage.getItem('colorCode'),
        // }
        // this.primaryColor = localStorage.getItem("primary_color");
        // this.secondryColor = localStorage.getItem("secondry_color");
        // if (this.id) {
        //   this.user_id = this.id
        // }
        // else {
        //   this.user_id = "";
        // }
        // this.loading = this.referenceService.loading();
        // //  this.loading.present();
        // //console.log(this.resp)
        // var data = { user_id: this.user_id };
        // this.url = this.apiService.profile();
        // this.token = localStorage.getItem('token')
        // //console.log(this.token);
        // var token = { 'token': this.token };
        // this.referenceService.postService(this.url, data, token)
        //   .then((data: any) => {
        //     this.showPage = true
        //     this.resp = JSON.parse(data.data);
        //     console.log(this.resp)
        //     if (this.resp.message == "Invalid token or Token missing") {
        //       this.referenceService.showAlert("Session Expired", 'Oops!! your session is expired please login and try again');
        //       // this.navCtrl.popAll();
        //       //  this.loading.dismiss();
        //       localStorage.clear();
        //       this.navCtrl.navigateRoot('/login');
        //     }
        //     if (this.resp.message == "Success") {
        //       this.profileData = this.resp.data;
        //       if (this.profileData.employee_details.address == 'null') {
        //         this.profileData.employee_details.address = '';
        //       }
        //       if (this.profileData.employee_details.city == 'null') {
        //         this.profileData.employee_details.city = '';
        //       }
        //       if (this.profileData.employee_details.country == 'null') {
        //         this.profileData.employee_details.country = '';
        //       }
        //       this.profileImage = this.profileData.avatar;
        //       this.educationDetails = this.profileData.education_details;
        //       if (this.educationDetails.length == 0) {
        //         this.noEducation = true;
        //       }
        //       this.exprienceInfo = this.profileData.experience_details;
        //       if (this.exprienceInfo.length == 0) {
        //         this.noExperience = true;
        //       }
        //       //console.log(this.profileData.employee_details)
        //       //console.log(this.profileData.employee_details.city)
        //       //console.log(this.profileData.employee_details.address)
        //       this.isprofile = true;
        //       //console.log(this.profileData);
        //       //  this.loading.dismiss();
        //     }
        //   })
        //   .catch(error => {
        //     //console.log(error);
        //     //  this.loading.dismiss();
        //     this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
        // });
    }
    ProfilePage.prototype.ngOnInit = function () {
        // var data = { user_id: this.user_id };
        // this.url = this.apiService.profile();
        // this.token = localStorage.getItem('token')
        // //console.log(this.token);
        // var token = { 'token': this.token };
        // this.referenceService.postService(this.url, data, token)
        //   .then((data: any) => {
        //     this.resp = JSON.parse(data.data);
        //     //console.log(this.resp)
        //     if (this.resp.message == "Invalid token or Token missing") {
        //       this.referenceService.showAlert("Session Expired", 'Oops!! your session is expired please login and try again');
        //       // this.navCtrl.popAll();
        //       //  this.loading.dismiss();
        //       localStorage.clear();
        //       this.navCtrl.navigateRoot('/login');
        //     }
        //     if (this.resp.message == "Success") {
        //       this.profileData = this.resp.data;
        //       if (this.profileData.employee_details.address == 'null') {
        //         this.profileData.employee_details.address = '';
        //       }
        //       if (this.profileData.employee_details.city == 'null') {
        //         this.profileData.employee_details.city = '';
        //       }
        //       if (this.profileData.employee_details.country == 'null') {
        //         this.profileData.employee_details.country = '';
        //       }
        //       this.profileImage = this.profileData.avatar;
        //       this.educationDetails = this.profileData.education_details;
        //       if (this.educationDetails.length == 0) {
        //         this.noEducation = true;
        //       }
        //       this.exprienceInfo = this.profileData.experience_details;
        //       if (this.exprienceInfo.length == 0) {
        //         this.noExperience = true;
        //       }
        //       //console.log(this.profileData.employee_details)
        //       //console.log(this.profileData.employee_details.city)
        //       //console.log(this.profileData.employee_details.address)
        //       this.isprofile = true;
        //       //console.log(this.profileData);
        //       //  this.loading.dismiss();
        //     }
        //   })
        //   .catch(error => {
        //     //console.log(error);
        //     //  this.loading.dismiss();
        //     this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
        //   });
    };
    ProfilePage.prototype.editBasic = function () {
        // let modal = this.modalCtrl.create(BasicInfoPage, {
        //   user: this.profileData.employee_details
        // });
        // modal.onDidDismiss((data) => {
        //   if (data != undefined) {
        //     if (data == "close") {
        //       this.ionViewWillEnter();
        //       this.content.scrollToTop();
        //     }
        //     else {
        //     }
        //   }
        // });
        // modal.present();
        // //console.log("modal")
    };
    ;
    ProfilePage.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_9__["EditEmployeePage"],
                            componentProps: { employee: this.dataService.employeeProfile },
                            cssClass: 'custom-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        this.referenceService.isModal = "blurPage";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss().then(function (data) {
                                console.log(data);
                                _this.referenceService.isModal = "";
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.ionViewWillEnter1 = function () {
        var _this = this;
        var data = { user_id: this.user_id };
        this.url = this.apiService.profile();
        this.token = localStorage.getItem('token');
        //console.log(this.token);
        var token = { 'token': this.token };
        this.referenceService.postService(this.url, data, token)
            .then(function (data) {
            _this.resp = JSON.parse(data.data);
            //console.log(this.resp)
            if (_this.resp.message == "Invalid token or Token missing") {
                _this.referenceService.showAlert("Session Expired", 'Oops!! your session is expired please login and try again');
                // this.navCtrl.popAll();
                //  this.loading.dismiss();
                localStorage.clear();
                _this.navCtrl.navigateRoot('/login');
            }
            if (_this.resp.message == "Success") {
                _this.profileData = _this.resp.data;
                if (_this.profileData.employee_details.address == 'null') {
                    _this.profileData.employee_details.address = '';
                }
                if (_this.profileData.employee_details.city == 'null') {
                    _this.profileData.employee_details.city = '';
                }
                if (_this.profileData.employee_details.country == 'null') {
                    _this.profileData.employee_details.country = '';
                }
                _this.profileImage = _this.profileData.avatar;
                _this.educationDetails = _this.profileData.education_details;
                if (_this.educationDetails.length == 0) {
                    _this.noEducation = true;
                }
                _this.exprienceInfo = _this.profileData.experience_details;
                if (_this.exprienceInfo.length == 0) {
                    _this.noExperience = true;
                }
                //console.log(this.profileData.employee_details)
                //console.log(this.profileData.employee_details.city)
                //console.log(this.profileData.employee_details.address)
                _this.isprofile = true;
                //console.log(this.profileData);
                //  this.loading.dismiss();
            }
        })
            .catch(function (error) {
            //console.log(error);
            //  this.loading.dismiss();
            _this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
        });
    };
    ProfilePage.prototype.editpersonal = function () {
        // let modal = this.modalCtrl.create(PersonalInfoPage, {
        //   user_personal: this.profileData.personal_info,
        //   user_id: this.profileData.employee_details.user_id
        // });
        // modal.onDidDismiss((data) => {
        //   if (data != undefined) {
        //     if (data == "close") {
        //       this.ionViewWillEnter();
        //       this.content.scrollToTop();
        //     }
        //     else {
        //     }
        //   }
        // });
        // modal.present();
        // //console.log("modal")
    };
    ;
    ProfilePage.prototype.editEmergency = function () {
        // let modal = this.modalCtrl.create(PersonalInfoPage, {
        //   user: this.profileData.emergency_info,
        //   user_id: this.profileData.employee_details.user_id
        // });
        // modal.onDidDismiss((data) => {
        //   if (data != undefined) {
        //     if (data == "close") {
        //       this.ionViewWillEnter();
        //       this.content.scrollToTop();
        //     }
        //     else {
        //     }
        //   }
        // });
        // modal.present();
        // //console.log("modal")
    };
    ;
    ProfilePage.prototype.editBankInfo = function () {
        // let modal = this.modalCtrl.create(BankInfoPage, {
        //   user: this.profileData.personal_info,
        //   user_id: this.profileData.employee_details.user_id
        // });
        // modal.onDidDismiss((data) => {
        //   if (data != undefined) {
        //     if (data == "close") {
        //       this.ionViewWillEnter();
        //       this.content.scrollToTop();
        //     }
        //     else {
        //     }
        //   }
        // });
        // modal.present();
        // //console.log("modal")
    };
    ;
    ProfilePage.prototype.getstyle = function () {
        return {
            background: "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
        };
    };
    ProfilePage.prototype.getProgresstyle = function () {
        return {
            background: "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
        };
    };
    ProfilePage.prototype.getHeaderStyle = function () {
        return { background: this.primaryColor };
    };
    ProfilePage.prototype.editProfile = function () {
        this.navCtrl.navigateForward('/edit-profile', { state: { 'profile': this.profileData } });
    };
    ProfilePage.prototype.getImage = function () {
        var _this = this;
        var buttonLabels = ['Using Camera', 'Open Library'];
        var options = {
            title: 'Upload image',
            subtitle: 'Choose an action',
            buttonLabels: buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            destructiveButtonLast: true
        };
        this.actionSheet.show(options).then(function (buttonIndex) {
            //console.log('Button pressed: ' + buttonIndex);
            _this.imageUpload(buttonIndex);
        });
    };
    ;
    ProfilePage.prototype.imageUpload = function (type) {
        var _this = this;
        if (type == 1) {
            var options = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.CAMERA
            };
        }
        if (type == 2) {
            var options = {
                quality: 50,
                targetWidth: 600,
                targetHeight: 600,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
        }
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //console.log(imageData)
            _this.imagePath = imageData;
            _this.upload();
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            _this.referenceService.showAlert("SMART HRMS", 'Selected image is not supported please choose JPEG or PNG image');
            // Handle error
        });
    };
    ;
    ProfilePage.prototype.upload = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        this.token = localStorage.getItem('token');
        var token = { 'token': this.token };
        var options1 = {
            fileKey: 'file',
            fileName: '.jpg',
            httpMethod: 'post',
            mimeType: "image/jpg/png/jpeg",
            chunkedMode: false,
            headers: token
        };
        this.url = this.apiService.imageUpload();
        //console.log(options1)
        this.loading = this.referenceService.loading();
        //  this.loading.present();
        fileTransfer.upload(this.imagePath, this.url, options1)
            .then(function (data) {
            var resp = JSON.parse(data.response);
            _this.profileImage = resp.data;
            //  this.loading.dismiss();
            // success
        }, function (err) {
            //console.log(err)
            //  this.loading.dismiss();
            _this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
            // error
        });
    };
    ;
    ProfilePage.prototype.setDefaultPic = function () {
        this.profileImage = "assets/imgs/user.jpg";
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_6__["ActionSheet"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
        { type: _json_service__WEBPACK_IMPORTED_MODULE_10__["JsonService"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_6__["ActionSheet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _json_service__WEBPACK_IMPORTED_MODULE_10__["JsonService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map