(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-salary-employee-salary-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-salary/employee-salary.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-salary/employee-salary.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"util.isModal\">\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Employee Salary</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngClass]=\"util.isModal\">\r\n  <div class=\"estimates-empty-div\">\r\n    <ion-item lines=\"none\" class=\"estimates\">\r\n      <span slot=\"start\" class=\"head-title\">List of Pay Slips</span> <span slot=\"end\"\r\n        class=\"custom-icon-estimate-icon\"></span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"estimates-content-div\">\r\n    <div class=\"estimates-timeline\">\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Jhon Deo</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-accepted\" (click)=\"generatePayslip()\">Generate Payslip</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Android Developer</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">$5000\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Jhon Deo</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-accepted\" (click)=\"generatePayslip()\">Generate Payslip</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Android Developer</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">$5000\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Jhon Deo</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-accepted\" (click)=\"generatePayslip()\">Generate Payslip</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Android Developer</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">$5000\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Jhon Deo</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-accepted\" (click)=\"generatePayslip()\">Generate Payslip</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Android Developer</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">$5000\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Jhon Deo</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-accepted\" (click)=\"generatePayslip()\">Generate Payslip</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Android Developer</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">$5000\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Jhon Deo</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-accepted\" (click)=\"generatePayslip()\">Generate Payslip</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Android Developer</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">$5000\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Jhon Deo</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-accepted\" (click)=\"generatePayslip()\">Generate Payslip</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Android Developer</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">$5000\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n      <div class=\"estimates-container left\">\r\n        <ion-list class=\"estimates-list\">\r\n          <ion-item-sliding>\r\n            <ion-item class=\"slide-item\" detail>\r\n              <div class=\"estimates-content\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\">\r\n                    <ion-row style=\"white-space: nowrap;\">\r\n                      <div class=\"id\">Jhon Deo</div>&nbsp;&nbsp;\r\n                      <div class=\"status est-accepted\" (click)=\"generatePayslip()\">Generate Payslip</div>\r\n                    </ion-row>\r\n                    <div class=\"name\">Android Developer</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div class=\"amount\">$5000\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"success\" (click)=\"edit()\">Edit</ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"fab-add-btn\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n<!-- \r\n<ion-content class=\"background-content\">\r\n  <ion-list class=\"noti-list\" *ngFor=\"let eachDesign of salaryList\">\r\n    <ion-item-sliding>\r\n      <ion-item lines=\"none\" class=\"item-md\">\r\n        <ion-avatar class=\"item-start\">\r\n          <img src=\"assets/imgs/user.jpg\">\r\n        </ion-avatar>\r\n        <ion-label class=\"label label-md\">\r\n          <h2 class=\"payroll-name\">{{eachDesign.eachEmp}}</h2>\r\n          <p class=\"payroll-designation\">{{eachDesign.designation}}</p>\r\n          <p class=\"payroll-empid\">{{eachDesign.eid}}</p>\r\n          <div class=\"holiday-day\">\r\n            <h2 class=\"payroll-salary\">{{eachDesign.salary}}</h2>\r\n            <h2 (click)=\"generatePayslip()\" class=\"leave-status\" style=\"margin-top:0px !important;\">Generate\r\n              Payslip</h2>\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"edit(eachDesign.salary)\" color=\"success\">\r\n          Edit\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content> -->"

/***/ }),

/***/ "./src/app/employee-salary/employee-salary-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employee-salary/employee-salary-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeSalaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSalaryPageRoutingModule", function() { return EmployeeSalaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_salary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-salary.page */ "./src/app/employee-salary/employee-salary.page.ts");




var routes = [
    {
        path: '',
        component: _employee_salary_page__WEBPACK_IMPORTED_MODULE_3__["EmployeeSalaryPage"]
    }
];
var EmployeeSalaryPageRoutingModule = /** @class */ (function () {
    function EmployeeSalaryPageRoutingModule() {
    }
    EmployeeSalaryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EmployeeSalaryPageRoutingModule);
    return EmployeeSalaryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/employee-salary/employee-salary.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee-salary/employee-salary.module.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeSalaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSalaryPageModule", function() { return EmployeeSalaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employee_salary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-salary-routing.module */ "./src/app/employee-salary/employee-salary-routing.module.ts");
/* harmony import */ var _employee_salary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-salary.page */ "./src/app/employee-salary/employee-salary.page.ts");







var EmployeeSalaryPageModule = /** @class */ (function () {
    function EmployeeSalaryPageModule() {
    }
    EmployeeSalaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _employee_salary_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeSalaryPageRoutingModule"]
            ],
            declarations: [_employee_salary_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeSalaryPage"]]
        })
    ], EmployeeSalaryPageModule);
    return EmployeeSalaryPageModule;
}());



/***/ }),

/***/ "./src/app/employee-salary/employee-salary.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/employee-salary/employee-salary.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estimates-content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.estimates-empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.estimates .custom-icon-estimate-icon {\n  font-size: 40px;\n  color: white;\n}\n\n.estimates-list {\n  background: none;\n  border-radius: 50px;\n  padding: 0;\n  margin: 10px 10px 10px 45px;\n  box-shadow: -7px 10px 18px 7px rgba(0, 0, 0, 0.14);\n}\n\n.estimates-list .estimates-content {\n  padding: 10px 0px 10px 15px;\n}\n\n.estimates-content {\n  top: 0;\n  width: 100%;\n}\n\n.estimates-content span {\n  font-size: 12px;\n  color: #949494;\n}\n\n.estimates-timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  top: 30px;\n  padding-right: 10px;\n}\n\n/* The actual timeline (the vertical ruler) */\n\n.estimates-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background-color: #D2D2D2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n}\n\n/* Container around content */\n\n.estimates-container {\n  position: relative;\n  background-color: inherit;\n}\n\n/* The circles on the timeline */\n\n.estimates-container::after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 25px;\n  border-radius: 50%;\n  z-index: 1;\n  margin-left: 9px;\n}\n\n.estimates-container:nth-of-type(odd)::after {\n  background-color: #0A15D5;\n}\n\n.estimates-container:nth-of-type(even)::after {\n  background-color: #FF9F55;\n}\n\n/* Place the container to the left */\n\n.left {\n  left: 0;\n}\n\n/* Place the timelime to the left */\n\n.estimates-timeline::after {\n  left: 31px;\n}\n\n/* Make sure all circles are at the same spot */\n\n.left::after,\n.right::after {\n  left: 15px;\n}\n\n.estimates-content .id {\n  font-family: \"Poppins-Medium\";\n  font-size: 14px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: calc(100% - 115px);\n}\n\n.estimates-content .name {\n  font-family: \"Poppins-Light\";\n  color: #8c8b8b;\n  font-size: 12px;\n}\n\n.estimates-content .status {\n  font-size: 11px;\n  margin: auto 0;\n  border-radius: 50px;\n  padding: 0px 5px;\n  color: white;\n  margin-top: unset !important;\n}\n\n.estimates-content .est-accepted {\n  background: #22D165;\n}\n\n.estimates-content .est-pending {\n  background: #FE9C45;\n}\n\n.estimates-content .est-rejected {\n  background: #F10A0A;\n}\n\n.estimates-content .amount {\n  font-size: 15px;\n  margin-top: 12px;\n  text-align: end;\n  color: #8c8b8b;\n  white-space: nowrap;\n  padding-right: 5px;\n}\n\n.estimates-content .amount ion-icon {\n  color: #FF9F55;\n}\n\n.fab-add-btn {\n  --border-radius: 15px !important;\n  --background: #FE9C45;\n}\n\n.slide-item {\n  --detail-icon-color: rgb(254, 156, 69);\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtc2FsYXJ5L0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXGVtcGxveWVlLXNhbGFyeVxcZW1wbG95ZWUtc2FsYXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wbG95ZWUtc2FsYXJ5L2VtcGxveWVlLXNhbGFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtEQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksTUFBQTtFQUNBLFdBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ1I7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBLDZDQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0EsNkJBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0EsZ0NBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0Esb0NBQUE7O0FBQ0E7RUFDSSxPQUFBO0FDQUo7O0FER0EsbUNBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDQUo7O0FER0EsK0NBQUE7O0FBQ0E7O0VBRUksVUFBQTtBQ0FKOztBRElJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNEUjs7QURJSTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNGUjs7QURLSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0hSOztBRE1JO0VBQ0ksbUJBQUE7QUNKUjs7QURPSTtFQUNJLG1CQUFBO0FDTFI7O0FEUUk7RUFDSSxtQkFBQTtBQ05SOztBRFNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDUFI7O0FEU1E7RUFDSSxjQUFBO0FDUFo7O0FEWUE7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0FDVEo7O0FEWUE7RUFDSSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLXNhbGFyeS9lbXBsb3llZS1zYWxhcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzdGltYXRlcy1jb250ZW50LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIC5jdXN0b20taWNvbi1lc3RpbWF0ZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzdGltYXRlcy1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggNDVweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpXHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtbGlzdCAuZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXN0aW1hdGVzLXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRDJEMjtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcbi5lc3RpbWF0ZXMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtY29udGFpbmVyOm50aC1vZi10eXBlKG9kZCk6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTE1RDU7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtY29udGFpbmVyOm50aC1vZi10eXBlKGV2ZW4pOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcbi5sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4uZXN0aW1hdGVzLXRpbWVsaW5lOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG59XHJcblxyXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuLmxlZnQ6OmFmdGVyLFxyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXMtY29udGVudCB7XHJcbiAgICAuaWQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDExNXB4KTtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xyXG4gICAgICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHVzIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtYWNjZXB0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMkQxNjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVzdC1wZW5kaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc3QtcmVqZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGMTBBMEE7XHJcbiAgICB9XHJcblxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgIGNvbG9yOiAjOGM4YjhiO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkY5RjU1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZhYi1hZGQtYnRuIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5QzQ1O1xyXG59XHJcblxyXG4uc2xpZGUtaXRlbSB7XHJcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiByZ2IoMjU0LCAxNTYsIDY5KTtcclxuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcclxufVxyXG5cclxuLy8gLm5vdGktbGlzdCB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbi8vIH1cclxuXHJcbi8vIC5wYXlyb2xsLW5hbWUge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaXRlbS1tZCBoMiB7XHJcbi8vICAgICBtYXJnaW46IDJweCAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyB9XHJcblxyXG4vLyAuaXRlbS1tZCBwIHtcclxuLy8gICAgIG1hcmdpbjogMCAwIDJweDtcclxuLy8gICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG4vLyAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbi8vICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4vLyAgICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuLy8gICAgIGNvbG9yOiAjNjY2O1xyXG4vLyB9XHJcblxyXG4vLyAucGF5cm9sbC1lbXBpZCB7XHJcbi8vICAgICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDIxcHggIWltcG9ydGFudDtcclxuLy8gICAgIG1heC1oZWlnaHQ6IDQycHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAucGF5cm9sbC1kZXNpZ25hdGlvbiB7XHJcbi8vICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmhvbGlkYXktZGF5IHtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMjZweDtcclxuLy8gICAgIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAucGF5cm9sbC1zYWxhcnkge1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDE4cHg7XHJcbi8vICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgIGNvbG9yOiAjOGU4ZTkzO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gfVxyXG5cclxuLy8gLmxlYXZlLXN0YXR1cyB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogMThweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4vLyAgICAgbWluLXdpZHRoOiA3NnB4O1xyXG4vLyAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5pdGVtLXN0YXJ0IHtcclxuLy8gICAgIG1hcmdpbjogOHB4IDE2cHggOHB4IDA7XHJcbi8vIH0iLCIuZXN0aW1hdGVzLWNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lc3RpbWF0ZXMtZW1wdHktZGl2IHtcbiAgYmFja2dyb3VuZDogIzBBMTVENTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmVzdGltYXRlcyAuY3VzdG9tLWljb24tZXN0aW1hdGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXN0aW1hdGVzLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDQ1cHg7XG4gIGJveC1zaGFkb3c6IC03cHggMTBweCAxOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuXG4uZXN0aW1hdGVzLWxpc3QgLmVzdGltYXRlcy1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQge1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmVzdGltYXRlcy1jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTQ5NDk0O1xufVxuXG4uZXN0aW1hdGVzLXRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkQyRDI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLmVzdGltYXRlcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLmVzdGltYXRlcy1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLmVzdGltYXRlcy1jb250YWluZXI6bnRoLW9mLXR5cGUob2RkKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExNUQ1O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRhaW5lcjpudGgtb2YtdHlwZShldmVuKTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5RjU1O1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuLmVzdGltYXRlcy10aW1lbGluZTo6YWZ0ZXIge1xuICBsZWZ0OiAzMXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlcixcbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uZXN0aW1hdGVzLWNvbnRlbnQgLmlkIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMTVweCk7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLm5hbWUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLUxpZ2h0XCI7XG4gIGNvbG9yOiAjOGM4YjhiO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZXN0aW1hdGVzLWNvbnRlbnQgLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiBhdXRvIDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogdW5zZXQgIWltcG9ydGFudDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuZXN0LWFjY2VwdGVkIHtcbiAgYmFja2dyb3VuZDogIzIyRDE2NTtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuZXN0LXBlbmRpbmcge1xuICBiYWNrZ3JvdW5kOiAjRkU5QzQ1O1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5lc3QtcmVqZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRjEwQTBBO1xufVxuLmVzdGltYXRlcy1jb250ZW50IC5hbW91bnQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6ICM4YzhiOGI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5lc3RpbWF0ZXMtY29udGVudCAuYW1vdW50IGlvbi1pY29uIHtcbiAgY29sb3I6ICNGRjlGNTU7XG59XG5cbi5mYWItYWRkLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNGRTlDNDU7XG59XG5cbi5zbGlkZS1pdGVtIHtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogcmdiKDI1NCwgMTU2LCA2OSk7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/employee-salary/employee-salary.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/employee-salary/employee-salary.page.ts ***!
  \*********************************************************/
/*! exports provided: EmployeeSalaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSalaryPage", function() { return EmployeeSalaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _add_salary_add_salary_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-salary/add-salary.page */ "./src/app/add-salary/add-salary.page.ts");
/* harmony import */ var _edit_salary_edit_salary_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-salary/edit-salary.page */ "./src/app/edit-salary/edit-salary.page.ts");






var EmployeeSalaryPage = /** @class */ (function () {
    function EmployeeSalaryPage(navContrl, util, modalController) {
        this.navContrl = navContrl;
        this.util = util;
        this.modalController = modalController;
        this.salaryList = [];
        this.salaryList = [{ designation: "Web Backend Developer", eid: "2", salary: "800000" },
            { designation: "Web UI Developer", eid: "2", salary: "100000" },
            { designation: "Mobile Backend Developer", eid: "2", salary: "860000" },
            { designation: "Mobile UI Developer", eid: "2", salary: "750000" },
            { designation: "Backend Developer", eid: "2", salary: "680000" }];
    }
    EmployeeSalaryPage.prototype.ngOnInit = function () {
    };
    EmployeeSalaryPage.prototype.generatePayslip = function () {
        this.navContrl.navigateForward("/pay-slip");
    };
    EmployeeSalaryPage.prototype.addSalary = function () {
        this.navContrl.navigateForward("/add-salary");
    };
    EmployeeSalaryPage.prototype.add = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_salary_add_salary_page__WEBPACK_IMPORTED_MODULE_4__["AddSalaryPage"],
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
    EmployeeSalaryPage.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_salary_edit_salary_page__WEBPACK_IMPORTED_MODULE_5__["EditSalaryPage"],
                            componentProps: {
                                "invoice": "invoice"
                            },
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
    EmployeeSalaryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    EmployeeSalaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-salary',
            template: __webpack_require__(/*! raw-loader!./employee-salary.page.html */ "./node_modules/raw-loader/index.js!./src/app/employee-salary/employee-salary.page.html"),
            styles: [__webpack_require__(/*! ./employee-salary.page.scss */ "./src/app/employee-salary/employee-salary.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EmployeeSalaryPage);
    return EmployeeSalaryPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-salary-employee-salary-module-es5.js.map