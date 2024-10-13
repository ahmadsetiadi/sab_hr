(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"referenceService.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"referenceService.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Employee Profile</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"referenceService.isModal\">\r\n  <div class=\"profile-empty-div\">\r\n    <div class=\"employee-div\">\r\n      <div class=\"edit-icon\">\r\n        <span class=\"custom-icon-edit-icon\" (click)=\"edit()\"></span>\r\n      </div>\r\n      <div class=\"user-icon\">\r\n        <span class=\"custom-icon-user-placeholder-img\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"employee-name\">John Doe</div>\r\n    <div class=\"employee-design\">Android Developer</div>\r\n  </div>\r\n\r\n  <div class=\"profile-content-div\">\r\n    <ion-segment class=\"profile-segment\" [(ngModel)]=\"profile\">\r\n      <ion-segment-button value=\"personal\" checked=\"true\">\r\n        <div class=\"seg-btn-1\">\r\n          <span class=\"custom-icon-dashboard-client-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"education\">\r\n        <div class=\"seg-btn\">\r\n          <span class=\"custom-icon-education-info-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"overview\">\r\n        <div class=\"seg-btn\">\r\n          <span class=\"custom-icon-career-info-icon selected-icon\"></span>\r\n        </div>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div [ngSwitch]=\"profile\">\r\n      <div *ngSwitchCase=\"'personal'\" class=\"seg-content\">\r\n        <h4 class=\"seg-title\">Personal Info</h4>\r\n        <div class=\"border\"></div>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Employee ID\r\n          </ion-label>\r\n          <span slot=\"end\">05</span>\r\n        </ion-item>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Phone\r\n          </ion-label>\r\n          <span slot=\"end\">1234567890</span>\r\n        </ion-item>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Email\r\n          </ion-label>\r\n          <span slot=\"end\">steve05@gmail.com</span>\r\n        </ion-item>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Birthday\r\n          </ion-label>\r\n          <span slot=\"end\">1989-01-01</span>\r\n        </ion-item>\r\n        <ion-item detail class=\"profile-item\">\r\n          <ion-label>\r\n            Gender\r\n          </ion-label>\r\n          <span slot=\"end\">Male</span>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'education'\">\r\n        <div class=\"profile-education-timeline\">\r\n          <h4 class=\"seg-title profile-education-list\">Education Info</h4>\r\n          <div class=\"border profile-education-list\"></div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2003-2007</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">International College of Arts & Science (UG)</ion-item>\r\n              <span>Bsc Computer Science</span>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2003-2007</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">International College of Arts & Science (UG)</ion-item>\r\n              <span>Bsc Computer Science</span>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2003-2007</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">International College of Arts & Science (UG)</ion-item>\r\n              <span>Bsc Computer Science</span>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'overview'\">\r\n        <div class=\"profile-education-timeline\">\r\n          <h4 class=\"seg-title profile-education-list\">Career Experience</h4>\r\n          <div class=\"border profile-education-list\"></div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2016-2018</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">Zeeong Technologies PVT Limited</ion-item>\r\n              <span>Web Designer</span>\r\n            </ion-list>\r\n          </div>\r\n          <div class=\"profile-education-container left\">\r\n            <ion-list class=\"profile-education-list\">\r\n              <ion-list-header>\r\n                <ion-label>2018 to present</ion-label>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">Mazinow Info Tech PVT Limited</ion-item>\r\n              <span>Sr. Web Designer</span>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
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



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.profile-empty-div {\n  background: #0A15D5;\n  height: 300px;\n}\n\n.user-icon {\n  font-size: 85px;\n  margin: 10px;\n}\n\n.employee-div {\n  text-align: center;\n  border: solid 1px #dcdcdc;\n  border-radius: 80px;\n  background: #fff;\n  height: 149px;\n  width: 150px;\n  margin: 0 auto;\n}\n\n.employee-name {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n  margin-top: 8px;\n}\n\n.employee-design {\n  font-size: 16px;\n  text-align: center;\n  color: white;\n}\n\n.custom-icon-edit-icon {\n  font-size: 35px;\n  color: white;\n  font-weight: 500;\n}\n\n.edit-icon {\n  background: #FE9C45;\n  border-radius: 20px;\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  margin-left: 100px;\n}\n\n.profile-segment {\n  border-radius: 50px;\n  margin: auto;\n  width: calc(100% - 10%);\n  top: -20px;\n  position: relative;\n  margin-bottom: 20px;\n  background: white;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n  --background-checked: none;\n  --indicator-color-checked: none;\n}\n\n.profile-segment .segment-button-checked .seg-btn {\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n  background: #fe9c45;\n  border-radius: 50px;\n  padding-top: 10px;\n}\n\n.profile-segment .segment-button-checked .seg-btn-1 {\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n  background: #fe9c45;\n  border-radius: 50px;\n  padding-top: 2.5px !important;\n}\n\n.profile-segment .segment-button-checked .selected-icon {\n  color: white !important;\n}\n\n.profile-segment ion-segment-button {\n  margin: 10px;\n  --border-color: #fff0;\n}\n\n.profile-segment ion-segment-button .custom-icon-dashboard-client-icon {\n  font-size: 45px;\n  color: black;\n}\n\n.profile-segment ion-segment-button .custom-icon-career-info-icon,\n.profile-segment ion-segment-button .custom-icon-education-info-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.seg-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.border {\n  border-top: solid 2px #FE9C45;\n  width: 80px;\n}\n\n.seg-content {\n  padding: 0 20px;\n}\n\n.profile-item {\n  --padding-start: 0;\n  --detail-icon-color:rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 4px;\n}\n\n.profile-item span {\n  font-weight: bold;\n  max-width: 65%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.profile-education-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.profile-education-list {\n  margin-left: 50px;\n}\n\n.profile-education-list ion-list-header {\n  padding-left: 0;\n}\n\n.profile-education-list ion-item {\n  --padding-start: 0;\n}\n\n.profile-education-list span {\n  font-weight: bold;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.profile-education-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.profile-education-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.profile-education-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 20px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.profile-education-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.profile-education-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.profile-education-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcc2luYXJcXGFwcDIvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtLQTtFQUNHLGdCQUFBO0VBQ0MsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDaktKOztBRG9LQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ2pLSjs7QURvS0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ2pLSjs7QURvS0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ2pLSjs7QURvS0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDaktKOztBRG9LQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNqS0o7O0FEb0tBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2pLSjs7QURvS0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDaktKOztBRG9LQTtFQUNFLG1CQUFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBQ2pLSjs7QURvS1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNsS1o7O0FEcUtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDbktaOztBRHNLUTtFQUNJLHVCQUFBO0FDcEtaOztBRHdLSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ3RLUjs7QUR3S1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ3RLWjs7QUR5S1E7O0VBRUksZUFBQTtFQUNBLFlBQUE7QUN2S1o7O0FENEtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDektKOztBRDRLQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQ3pLSjs7QUQ0S0E7RUFDSSxlQUFBO0FDektKOztBRDRLQTtFQUNJLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ3pLSjs7QUQyS0k7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN6S1I7O0FEOEtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUMzS0o7O0FEOEtBO0VBQ0ksaUJBQUE7QUMzS0o7O0FENktJO0VBQ0ksZUFBQTtBQzNLUjs7QUQ4S0k7RUFDSSxrQkFBQTtBQzVLUjs7QUQrS0k7RUFDSSxpQkFBQTtBQzdLUjs7QURpTEEsNkNBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUM5S0o7O0FEaUxBLDZCQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQzlLSjs7QURpTEEsZ0NBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQzlLSjs7QURpTEE7RUFDSSx5QkFBQTtBQzlLSjs7QURpTEE7RUFDSSx5QkFBQTtBQzlLSjs7QURpTEEsb0NBQUE7O0FBQ0E7RUFDSSxPQUFBO0FDOUtKOztBRGlMQSxtQ0FBQTs7QUFDQTtFQUNJLFVBQUE7QUM5S0o7O0FEaUxBLCtDQUFBOztBQUNBOztFQUVJLFVBQUE7QUM5S0o7O0FEaUxBO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQzlLSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAucHJvZmlsZS1jYXJkIHtcclxuLy8gICAgIGhlaWdodDogMTc1cHg7XHJcbi8vICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLXBpYyB7XHJcbi8vICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtaGVhZGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IDAgMDtcclxuLy8gICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICB0b3A6IDEwcHg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiAxMDBweDtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtaGVhZGVyLWZpZWxkIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtbmFtZSB7XHJcbi8vICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWRlc2lnbmF0aW9uIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmNhcmQtbWQgaDIge1xyXG4vLyAgICAgbWFyZ2luOiAycHggMDtcclxuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vIH1cclxuXHJcbi8vIC5zYy1pb24tc2VnbWVudC1tZC1oIHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4vLyAgICAgLS1jb2xvcjogIzhlOGU5MztcclxuLy8gfVxyXG5cclxuLy8gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gfVxyXG5cclxuLy8gLnNlZy1idG4gaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuLy8gICAgIHdpZHRoOiAwO1xyXG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vICAgICBtaW4td2lkdGg6IGNhbGMoMTAwJS8zKTtcclxuLy8gICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS1saXN0IHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS10aXRsZSB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWlubmVyLWl0ZW0ge1xyXG4vLyAgICAgY29sb3I6ICM4ZThlOTM7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWxhYmVsIHtcclxuLy8gICAgIG1hcmdpbjogMTNweCA4cHggMTNweCAwO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS1pdGVtIHtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9maWxlLWl0ZW0gaDQge1xyXG4vLyAgICAgbWFyZ2luOiAycHggMDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbi8vIH1cclxuXHJcbi8vIC5ob2xpZGF5LXRpdGxlIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtYWRkcmVzcyB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA5cHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4vLyAgICAgY29sb3I6ICM5ZTllOWU7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAudGltZWxpbmUtY29udGVudCBzcGFuLm5hbWUge1xyXG4vLyAgICAgY29sb3I6ICM2MTYxNjE7XHJcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyB9XHJcblxyXG4vLyAudGltZWxpbmUtY29udGVudCBkaXYge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gfVxyXG5cclxuLy8gLnRpbWUge1xyXG4vLyAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmN1cy1zcGFuIHtcclxuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gfVxyXG5cclxuLy8gLnByb2ZpbGUtbGFiZWwgcCB7XHJcbi8vICAgICBtYXJnaW46IDAgMCAycHg7XHJcbi8vICAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG4vLyAgICAgY29sb3I6ICM2NjY7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzEwcHgpIHtcclxuXHJcbi8vICAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuLy8gICAgIFtjbGFzcyo9XCJjdXMtc3BhblwiXSB7XHJcbi8vICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbi8vICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gUHJvZmlsZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC0tPlxyXG5cclxuLnByb2ZpbGUtY29udGVudC1kaXYge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDg1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5lbXBsb3llZS1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2RjZGNkYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAxNDlweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZW1wbG95ZWUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmVtcGxveWVlLWRlc2lnbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1lZGl0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmVkaXQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1zZWdtZW50IHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogLTdweCAxMHB4IDE4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IG5vbmU7XHJcblxyXG4gICAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICAgIC5zZWctYnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZTljNDU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlZy1idG4tMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmU5YzQ1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMi41cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3RlZC1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmMDtcclxuXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1jbGllbnQtaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLWNhcmVlci1pbmZvLWljb24sXHJcbiAgICAgICAgLmN1c3RvbS1pY29uLWVkdWNhdGlvbi1pbmZvLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWctdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNGRTlDNDU7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLnNlZy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtaXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOnJnYigyNTQsIDE1NiwgNjkpO1xyXG4gICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXgtd2lkdGg6IDY1JTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ucHJvZmlsZS1lZHVjYXRpb24tdGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnByb2ZpbGUtZWR1Y2F0aW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4ucHJvZmlsZS1lZHVjYXRpb24tdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4ucHJvZmlsZS1lZHVjYXRpb24tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG4ucHJvZmlsZS1lZHVjYXRpb24tY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLnByb2ZpbGUtZWR1Y2F0aW9uLWNvbnRhaW5lcjpudGgtb2YtdHlwZShvZGQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xyXG59XHJcblxyXG4ucHJvZmlsZS1lZHVjYXRpb24tY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcbi5sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4ucHJvZmlsZS1lZHVjYXRpb24tdGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4ubGVmdDo6YWZ0ZXIsXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59IiwiLnByb2ZpbGUtY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLnVzZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogODVweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZW1wbG95ZWUtZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGNkY2RjO1xuICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDE0OXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZW1wbG95ZWUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5lbXBsb3llZS1kZXNpZ24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWljb24tZWRpdC1pY29uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5lZGl0LWljb24ge1xuICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLnByb2ZpbGUtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XG4gIHRvcDogLTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogbm9uZTtcbn1cbi5wcm9maWxlLXNlZ21lbnQgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLnNlZy1idG4ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI2ZlOWM0NTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucHJvZmlsZS1zZWdtZW50IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5zZWctYnRuLTEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI2ZlOWM0NTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZy10b3A6IDIuNXB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZmlsZS1zZWdtZW50IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5zZWxlY3RlZC1pY29uIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucHJvZmlsZS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmYwO1xufVxuLnByb2ZpbGUtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1jbGllbnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnByb2ZpbGUtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLmN1c3RvbS1pY29uLWNhcmVlci1pbmZvLWljb24sXG4ucHJvZmlsZS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiAuY3VzdG9tLWljb24tZWR1Y2F0aW9uLWluZm8taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2VnLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjRkU5QzQ1O1xuICB3aWR0aDogODBweDtcbn1cblxuLnNlZy1jb250ZW50IHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4ucHJvZmlsZS1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWRldGFpbC1pY29uLWNvbG9yOnJnYigyNTQsIDE1NiwgNjkpO1xuICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi5wcm9maWxlLWl0ZW0gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtd2lkdGg6IDY1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9maWxlLWVkdWNhdGlvbi10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucHJvZmlsZS1lZHVjYXRpb24tbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLnByb2ZpbGUtZWR1Y2F0aW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLnByb2ZpbGUtZWR1Y2F0aW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG4ucHJvZmlsZS1lZHVjYXRpb24tbGlzdCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cbi5wcm9maWxlLWVkdWNhdGlvbi10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLnByb2ZpbGUtZWR1Y2F0aW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXG4ucHJvZmlsZS1lZHVjYXRpb24tY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5wcm9maWxlLWVkdWNhdGlvbi1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4ucHJvZmlsZS1lZHVjYXRpb24tY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XG59XG5cbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cbi5sZWZ0IHtcbiAgbGVmdDogMDtcbn1cblxuLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXG4ucHJvZmlsZS1lZHVjYXRpb24tdGltZWxpbmU6OmFmdGVyIHtcbiAgbGVmdDogMzFweDtcbn1cblxuLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXG4ubGVmdDo6YWZ0ZXIsXG4ucmlnaHQ6OmFmdGVyIHtcbiAgbGVmdDogMTVweDtcbn1cblxuLmZhYi1hZGQtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0ZFOUM0NTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/action-sheet/ngx */ "./node_modules/@ionic-native/action-sheet/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-employee/edit-employee.page */ "./src/app/edit-employee/edit-employee.page.ts");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");











let ProfilePage = class ProfilePage {
    constructor(referenceService, navCtrl, activeRoute, apiService, camera, actionSheet, modalController, transfer, dataService) {
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
    ngOnInit() {
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
    }
    editBasic() {
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
    }
    ;
    edit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_employee_edit_employee_page__WEBPACK_IMPORTED_MODULE_9__["EditEmployeePage"],
                componentProps: { employee: this.dataService.employeeProfile },
                cssClass: 'custom-modal',
            });
            this.referenceService.isModal = "blurPage";
            yield modal.present();
            yield modal.onWillDismiss().then(data => {
                console.log(data);
                this.referenceService.isModal = "";
            });
        });
    }
    ionViewWillEnter1() {
        var data = { user_id: this.user_id };
        this.url = this.apiService.profile();
        this.token = localStorage.getItem('token');
        //console.log(this.token);
        var token = { 'token': this.token };
        this.referenceService.postService(this.url, data, token)
            .then((data) => {
            this.resp = JSON.parse(data.data);
            //console.log(this.resp)
            if (this.resp.message == "Invalid token or Token missing") {
                this.referenceService.showAlert("Session Expired", 'Oops!! your session is expired please login and try again');
                // this.navCtrl.popAll();
                //  this.loading.dismiss();
                localStorage.clear();
                this.navCtrl.navigateRoot('/login');
            }
            if (this.resp.message == "Success") {
                this.profileData = this.resp.data;
                if (this.profileData.employee_details.address == 'null') {
                    this.profileData.employee_details.address = '';
                }
                if (this.profileData.employee_details.city == 'null') {
                    this.profileData.employee_details.city = '';
                }
                if (this.profileData.employee_details.country == 'null') {
                    this.profileData.employee_details.country = '';
                }
                this.profileImage = this.profileData.avatar;
                this.educationDetails = this.profileData.education_details;
                if (this.educationDetails.length == 0) {
                    this.noEducation = true;
                }
                this.exprienceInfo = this.profileData.experience_details;
                if (this.exprienceInfo.length == 0) {
                    this.noExperience = true;
                }
                //console.log(this.profileData.employee_details)
                //console.log(this.profileData.employee_details.city)
                //console.log(this.profileData.employee_details.address)
                this.isprofile = true;
                //console.log(this.profileData);
                //  this.loading.dismiss();
            }
        })
            .catch(error => {
            //console.log(error);
            //  this.loading.dismiss();
            this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
        });
    }
    editpersonal() {
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
    }
    ;
    editEmergency() {
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
    }
    ;
    editBankInfo() {
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
    }
    ;
    getstyle() {
        return {
            background: "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
        };
    }
    getProgresstyle() {
        return {
            background: "linear-gradient(to right," + this.secondryColor + "," + this.primaryColor + ")"
        };
    }
    getHeaderStyle() {
        return { background: this.primaryColor };
    }
    editProfile() {
        this.navCtrl.navigateForward('/edit-profile', { state: { 'profile': this.profileData } });
    }
    getImage() {
        let buttonLabels = ['Using Camera', 'Open Library'];
        let options = {
            title: 'Upload image',
            subtitle: 'Choose an action',
            buttonLabels: buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            destructiveButtonLast: true
        };
        this.actionSheet.show(options).then((buttonIndex) => {
            //console.log('Button pressed: ' + buttonIndex);
            this.imageUpload(buttonIndex);
        });
    }
    ;
    imageUpload(type) {
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
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //console.log(imageData)
            this.imagePath = imageData;
            this.upload();
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            this.referenceService.showAlert("SMART HRMS", 'Selected image is not supported please choose JPEG or PNG image');
            // Handle error
        });
    }
    ;
    upload() {
        const fileTransfer = this.transfer.create();
        this.token = localStorage.getItem('token');
        var token = { 'token': this.token };
        let options1 = {
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
            .then((data) => {
            var resp = JSON.parse(data.response);
            this.profileImage = resp.data;
            //  this.loading.dismiss();
            // success
        }, (err) => {
            //console.log(err)
            //  this.loading.dismiss();
            this.referenceService.showAlert("SMART HRMS", 'Unable to reach server at the moment');
            // error
        });
    }
    ;
    setDefaultPic() {
        this.profileImage = "assets/imgs/user.jpg";
    }
};
ProfilePage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_6__["ActionSheet"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_10__["JsonService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map