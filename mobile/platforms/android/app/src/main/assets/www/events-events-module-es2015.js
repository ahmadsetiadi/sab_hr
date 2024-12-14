(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/events/events.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/events.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"blues-nav\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" class=\"nav-back\">\r\n        <span class=\"custom-icon-back-arrow-icon\" (click)=\"util.popBack()\">\r\n          <span class=\"path1\"></span> <span class=\"path2\"></span> </span>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"nav-content\">\r\n        <ion-title>\r\n          <span>Events</span>\r\n        </ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"empty-div\">\r\n    <ion-item lines=\"none\" class=\"project-view\">\r\n      <span slot=\"start\" class=\"head-title\">Events</span>\r\n      <span slot=\"end\" class=\"custom-icon-calendar-icon\">\r\n      </span>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"content-div\">\r\n    <div class=\"calendar-header\">\r\n      <ion-row class=\"calendar-month\">\r\n        <ion-col size=\"2\" style=\"padding: 6px;\" (click)=\"goToLastMonth()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"8\" style=\"padding: 6px;\">{{currentMonth}} {{currentYear}}</ion-col>\r\n        <ion-col size=\"2\" style=\"padding: 6px;\" (click)=\"goToNextMonth()\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"calendar-body\">\r\n      <ion-grid>\r\n        <ion-row class=\"calendar-weekday\">\r\n          <ion-col>Su</ion-col>\r\n          <ion-col>Mo</ion-col>\r\n          <ion-col>Tu</ion-col>\r\n          <ion-col>We</ion-col>\r\n          <ion-col>Th</ion-col>\r\n          <ion-col>Fr</ion-col>\r\n          <ion-col>Sa</ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"calendar-date\">\r\n          <ion-col size=\"1\" *ngFor=\"let lastDay of daysInLastMonth\" class=\"last-month\" (click)=\"goToLastMonth()\">\r\n            {{lastDay}}\r\n          </ion-col>\r\n          <ion-col size=\"1\" *ngFor=\"let day of daysInThisMonth\" (click)=\"selectDate(day)\">\r\n            <span class=\"currentDate\" *ngIf=\"currentDate === day; else otherDate\">{{day}}</span>\r\n            <ng-template #otherDate class=\"otherDate\">\r\n              <span class=\"selectedDate\" *ngIf=\"daySelected === day;\">{{day}}</span>\r\n              <span *ngIf=\"daySelected !== day;\">{{day}}</span>\r\n              <div class=\"event-bullet\" *ngIf=\"checkEvent(day)\"></div>\r\n            </ng-template>\r\n          </ion-col>\r\n          <ion-col size=\"1\" *ngFor=\"let nextDay of daysInNextMonth\" class=\"next-month\" (click)=\"goToNextMonth()\">\r\n            {{nextDay}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div class=\"selected-event\" *ngIf=\"isSelected\">\r\n      <ion-list>\r\n        <div *ngFor=\"let se of selectedEvent\">\r\n          <h4 class=\"seg-title\">{{se.title}} </h4>\r\n          <div class=\"border\"></div>\r\n          <div class=\"data\">Start Date: {{se.dtstart | date}}&nbsp; &nbsp; &nbsp; &nbsp;\r\n            End Date: {{se.dtend | date}}</div>\r\n        </div>\r\n      </ion-list>\r\n    </div>\r\n    <div class=\"selected-event\" *ngIf=\"!isSelected\">\r\n      <ion-list>\r\n        <h3 class=\"no-event\">No Events Found</h3>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/events/events-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/events/events-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EventsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function() { return EventsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.page */ "./src/app/events/events.page.ts");




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventsPageRoutingModule);



/***/ }),

/***/ "./src/app/events/events.module.ts":
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-routing.module */ "./src/app/events/events-routing.module.ts");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.page */ "./src/app/events/events.page.ts");







let EventsPageModule = class EventsPageModule {
};
EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"]
        ],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
    })
], EventsPageModule);



/***/ }),

/***/ "./src/app/events/events.page.scss":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendar-date ion-col {\n  -webkit-box-flex: 0 !important;\n  flex: 0 0 14.2857142857% !important;\n  width: 14.2857142857% !important;\n  max-width: 14.2857142857% !important;\n}\n\n.content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  min-height: calc(100vh - 120px);\n  padding: 45px 20px 0 20px;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.empty-div ion-item {\n  margin-bottom: 10px;\n}\n\n.content-div ion-col {\n  text-align: center;\n  padding: 3px;\n  height: 40px !important;\n  border-bottom: 1px solid #efefef;\n}\n\n.content-div ion-col span {\n  padding: 3px;\n}\n\n.last-month,\n.next-month {\n  color: #999999;\n  font-size: 90%;\n}\n\n.selectedDate {\n  font-weight: bold;\n  background-color: #fe9c45;\n  color: white;\n  border-radius: 30px;\n  padding: 5px;\n  display: table;\n  /* height: 30px !important; */\n  width: 30px !important;\n  border-radius: 50px;\n  margin: 0 auto;\n  margin-top: -3px !important;\n}\n\n.currentDate,\n.otherDate {\n  padding: 5px;\n}\n\n.currentDate {\n  font-weight: bold;\n  background-color: #0163fc;\n  color: white;\n  border-radius: 50px;\n  width: 30px;\n  padding: 5px;\n  height: 30px;\n  display: block;\n  margin: 0 auto;\n  margin-top: -3px;\n}\n\n.calendar-header {\n  background-color: #FE9C45;\n  color: #FFFFFF;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.calendar-header ion-icon {\n  font-size: 30px;\n}\n\n.event-bullet {\n  margin: 2px auto;\n  height: 5px;\n  width: 5px;\n  background-color: green;\n  border-radius: 30px;\n}\n\n.selected-date {\n  width: 20px;\n  height: 2px;\n  background-color: blue;\n}\n\n.unselected-date {\n  border: none;\n}\n\n.calendar-body {\n  border: solid 1px #fe9c45;\n  border-top: 0px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.calendar-body ion-row {\n  padding: 0;\n}\n\n.calendar-body ion-col:last-child {\n  border-right: none;\n}\n\n.calendar-body .calendar-weekday,\n.calendar-body .calendar-date {\n  text-align: center;\n  margin: 0;\n}\n\n.calendar-body .calendar-weekday {\n  font-weight: bold;\n  border-bottom: solid 1px #FFFFFF;\n  background-color: #FFFFFF;\n}\n\n.calendar-body .calendar-date {\n  border-top: solid 1px #FFFFFF;\n  border-bottom: solid 1px #FFFFFF;\n}\n\n.selected-event .data {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  color: #0A15D5;\n}\n\n.selected-event .seg-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.selected-event .border {\n  border-top: solid 2px #FE9C45;\n  width: 80px;\n}\n\n.no-event {\n  font-size: 18px;\n  text-align: center;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.custom-icon-calendar-icon {\n  font-size: 35px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL0Q6XFxfUFJPSkVDVFxcTlNBXFxQcm9qZWN0X0hSXFxtb2JpbGUvc3JjXFxhcHBcXGV2ZW50c1xcZXZlbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDSTtFQUNJLG1CQUFBO0FDQ1I7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7O0VBRUksY0FBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdBOztFQUVJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQUo7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FESUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBMEJJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUMxQko7O0FERkk7RUFDSSxVQUFBO0FDSVI7O0FEREk7RUFDSSxrQkFBQTtBQ0dSOztBREFJOztFQUVJLGtCQUFBO0VBQ0EsU0FBQTtBQ0VSOztBRENJO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FDQ1I7O0FERUk7RUFDSSw2QkFBQTtFQUNBLGdDQUFBO0FDQVI7O0FEVUk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDUFI7O0FEV0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNUUjs7QURZSTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQ1ZSOztBRGNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDWEo7O0FEY0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsZW5kYXItZGF0ZSBpb24tY29sIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDAgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNC4yODU3MTQyODU3JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDE0LjI4NTcxNDI4NTclICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDE0LjI4NTcxNDI4NTclICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250ZW50LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xyXG4gICAgcGFkZGluZzogNDVweCAyMHB4IDAgMjBweDtcclxufVxyXG5cclxuLmVtcHR5LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnQtZGl2IGlvbi1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcclxufVxyXG5cclxuLmNvbnRlbnQtZGl2IGlvbi1jb2wgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5sYXN0LW1vbnRoLFxyXG4ubmV4dC1tb250aCB7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG59XHJcblxyXG4uc2VsZWN0ZWREYXRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlOWM0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIC8qIGhlaWdodDogMzBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IC0zcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1cnJlbnREYXRlLFxyXG4ub3RoZXJEYXRlIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmN1cnJlbnREYXRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNjNmYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcblxyXG4uY2FsZW5kYXItaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTlDNDU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXZlbnQtYnVsbGV0IHtcclxuICAgIG1hcmdpbjogMnB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1kYXRlIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4udW5zZWxlY3RlZC1kYXRlIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNhbGVuZGFyLWJvZHkge1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY29sOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsZW5kYXItd2Vla2RheSxcclxuICAgIC5jYWxlbmRhci1kYXRlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxlbmRhci13ZWVrZGF5IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0ZGRkZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxlbmRhci1kYXRlIHtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI0ZGRkZGRjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmU5YzQ1O1xyXG4gICAgYm9yZGVyLXRvcDogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtZXZlbnQge1xyXG4gICAgLmRhdGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzBBMTVENTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnNlZy10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3JkZXIge1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCAjRkU5QzQ1O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubm8tZXZlbnQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCIuY2FsZW5kYXItZGF0ZSBpb24tY29sIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTQuMjg1NzE0Mjg1NyUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDE0LjI4NTcxNDI4NTclICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTQuMjg1NzE0Mjg1NyUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDBweCAwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gIHBhZGRpbmc6IDQ1cHggMjBweCAwIDIwcHg7XG59XG5cbi5lbXB0eS1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMEExNUQ1O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuLmVtcHR5LWRpdiBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb250ZW50LWRpdiBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcbn1cblxuLmNvbnRlbnQtZGl2IGlvbi1jb2wgc3BhbiB7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmxhc3QtbW9udGgsXG4ubmV4dC1tb250aCB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDkwJTtcbn1cblxuLnNlbGVjdGVkRGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU5YzQ1O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIC8qIGhlaWdodDogMzBweCAhaW1wb3J0YW50OyAqL1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xufVxuXG4uY3VycmVudERhdGUsXG4ub3RoZXJEYXRlIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY3VycmVudERhdGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNjNmYztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMzBweDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLmNhbGVuZGFyLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTlDNDU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbn1cbi5jYWxlbmRhci1oZWFkZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5ldmVudC1idWxsZXQge1xuICBtYXJnaW46IDJweCBhdXRvO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5zZWxlY3RlZC1kYXRlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4udW5zZWxlY3RlZC1kYXRlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2FsZW5kYXItYm9keSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZTljNDU7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4uY2FsZW5kYXItYm9keSBpb24tcm93IHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYWxlbmRhci1ib2R5IGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5jYWxlbmRhci1ib2R5IC5jYWxlbmRhci13ZWVrZGF5LFxuLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLWRhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbi5jYWxlbmRhci1ib2R5IC5jYWxlbmRhci13ZWVrZGF5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLWRhdGUge1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI0ZGRkZGRjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNGRkZGRkY7XG59XG5cbi5zZWxlY3RlZC1ldmVudCAuZGF0YSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzBBMTVENTtcbn1cbi5zZWxlY3RlZC1ldmVudCAuc2VnLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWxlY3RlZC1ldmVudCAuYm9yZGVyIHtcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNGRTlDNDU7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4ubm8tZXZlbnQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmN1c3RvbS1pY29uLWNhbGVuZGFyLWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/events/events.page.ts":
/*!***************************************!*\
  !*** ./src/app/events/events.page.ts ***!
  \***************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");





;
let EventsPage = class EventsPage {
    constructor(util, calendar, alertCtrl) {
        this.util = util;
        this.calendar = calendar;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.primaryColor = localStorage.getItem('primary_color');
        this.date = new Date();
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.getDaysOfMonth();
        this.loadEventThisMonth();
    }
    getHeaderStyle() {
        return { 'background': this.primaryColor };
    }
    ;
    getDaysOfMonth() {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var j = 0; j < thisNumOfDays; j++) {
            this.daysInThisMonth.push(j + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
        for (var k = 0; k < (6 - lastDayThisMonth); k++) {
            this.daysInNextMonth.push(k + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
                this.daysInNextMonth.push(l);
            }
        }
    }
    goToLastMonth() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    }
    goToNextMonth() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    }
    loadEventThisMonth() {
        this.eventList = [{ "calendar_id": "3", "id": "50", "event_id": "50", "title": "New Year's Day", "dtstart": 1580463873000, "dtend": 1580463893000, "eventLocation": "", "allDay": 1 }, { "calendar_id": "3", "id": "51", "event_id": "51", "title": "Guru Govind Singh Jayanti", "dtstart": 1547404200000, "dtend": 1547577000000, "eventLocation": "", "allDay": 1 }, { "calendar_id": "3", "id": "95", "event_id": "96", "title": "Lohri", "dtstart": 1547663400000, "dtend": 1547836200000, "eventLocation": "", "allDay": 1 }, { "calendar_id": "3", "id": "96", "event_id": "97", "title": "New event", "dtstart": 1546281000000, "dtend": 1546885800000, "eventLocation": "", "allDay": 1 }, { "calendar_id": "3", "id": "52", "event_id": "52", "title": "Pongal", "dtstart": 1547749800000, "dtend": 1548354600000, "eventLocation": "", "allDay": 1 }, { "calendar_id": "1", "id": "136", "event_id": "157", "title": "Test", "dtstart": 1548613800000, "dtend": 1548873000000, "eventLocation": "Tret", "allDay": 0 }];
    }
    checkEvent(day) {
        var hasEvent = false;
        var thisDate1 = this.date.getFullYear() + "/" + (this.date.getMonth() + 1) + "/" + day;
        var thisDate2 = this.date.getFullYear() + "/" + (this.date.getMonth() + 1) + "/" + day;
        var time1 = new Date(thisDate1).getTime();
        var time2 = new Date(thisDate2).getTime();
        this.eventList.forEach(event => {
            if (((event.dtstart >= time1) && (event.dtstart <= time2)) || ((event.dtend >= time1) && (event.dtend <= time2))) {
                hasEvent = true;
            }
        });
        return hasEvent;
    }
    selectDate(day) {
        this.daySelected = day;
        this.isSelected = false;
        this.selectedEvent = new Array();
        var thisDate1 = this.date.getFullYear() + "/" + (this.date.getMonth() + 1) + "/" + day;
        var thisDate2 = this.date.getFullYear() + "/" + (this.date.getMonth() + 1) + "/" + day;
        var time1 = new Date(thisDate1).getTime();
        var time2 = new Date(thisDate2).getTime();
        this.eventList.forEach(event => {
            if (((event.dtstart >= time1) && (event.dtstart <= time2)) || ((event.dtend >= time1) && (event.dtend <= time2))) {
                this.isSelected = true;
                this.selectedEvent.push(event);
            }
        });
    }
    deleteEvent(evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Confirm Delete',
                message: 'Are you sure want to delete this event?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then((msg) => {
                                this.loadEventThisMonth();
                                this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
                            }, (err) => {
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
EventsPage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__["Calendar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: __webpack_require__(/*! raw-loader!./events.page.html */ "./node_modules/raw-loader/index.js!./src/app/events/events.page.html"),
        styles: [__webpack_require__(/*! ./events.page.scss */ "./src/app/events/events.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__["Calendar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], EventsPage);



/***/ })

}]);
//# sourceMappingURL=events-events-module-es2015.js.map