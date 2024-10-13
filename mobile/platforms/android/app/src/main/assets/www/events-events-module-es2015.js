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

module.exports = ".calendar-date ion-col {\n  -webkit-box-flex: 0 !important;\n  flex: 0 0 14.2857142857% !important;\n  width: 14.2857142857% !important;\n  max-width: 14.2857142857% !important;\n}\n\n.content-div {\n  background: #fff;\n  border-radius: 50px 50px 0px 0px;\n  top: -50px;\n  position: relative;\n  width: 100%;\n  min-height: calc(100vh - 120px);\n  padding: 45px 20px 0 20px;\n}\n\n.empty-div {\n  background: #0A15D5;\n  height: 120px;\n}\n\n.empty-div ion-item {\n  margin-bottom: 10px;\n}\n\n.content-div ion-col {\n  text-align: center;\n  padding: 3px;\n  height: 40px !important;\n  border-bottom: 1px solid #efefef;\n}\n\n.content-div ion-col span {\n  padding: 3px;\n}\n\n.last-month,\n.next-month {\n  color: #999999;\n  font-size: 90%;\n}\n\n.selectedDate {\n  font-weight: bold;\n  background-color: #fe9c45;\n  color: white;\n  border-radius: 30px;\n  padding: 5px;\n  display: table;\n  /* height: 30px !important; */\n  width: 30px !important;\n  border-radius: 50px;\n  margin: 0 auto;\n  margin-top: -3px !important;\n}\n\n.currentDate,\n.otherDate {\n  padding: 5px;\n}\n\n.currentDate {\n  font-weight: bold;\n  background-color: #0163fc;\n  color: white;\n  border-radius: 50px;\n  width: 30px;\n  padding: 5px;\n  height: 30px;\n  display: block;\n  margin: 0 auto;\n  margin-top: -3px;\n}\n\n.calendar-header {\n  background-color: #FE9C45;\n  color: #FFFFFF;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.calendar-header ion-icon {\n  font-size: 30px;\n}\n\n.event-bullet {\n  margin: 2px auto;\n  height: 5px;\n  width: 5px;\n  background-color: green;\n  border-radius: 30px;\n}\n\n.selected-date {\n  width: 20px;\n  height: 2px;\n  background-color: blue;\n}\n\n.unselected-date {\n  border: none;\n}\n\n.calendar-body {\n  border: solid 1px #fe9c45;\n  border-top: 0px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.calendar-body ion-row {\n  padding: 0;\n}\n\n.calendar-body ion-col:last-child {\n  border-right: none;\n}\n\n.calendar-body .calendar-weekday,\n.calendar-body .calendar-date {\n  text-align: center;\n  margin: 0;\n}\n\n.calendar-body .calendar-weekday {\n  font-weight: bold;\n  border-bottom: solid 1px #FFFFFF;\n  background-color: #FFFFFF;\n}\n\n.calendar-body .calendar-date {\n  border-top: solid 1px #FFFFFF;\n  border-bottom: solid 1px #FFFFFF;\n}\n\n.selected-event .data {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  color: #0A15D5;\n}\n\n.selected-event .seg-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.selected-event .border {\n  border-top: solid 2px #FE9C45;\n  width: 80px;\n}\n\n.no-event {\n  font-size: 18px;\n  text-align: center;\n}\n\n.head-title {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.custom-icon-calendar-icon {\n  font-size: 35px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL0Q6XFxzaW5hclxcYXBwMi9zcmNcXGFwcFxcZXZlbnRzXFxldmVudHMucGFnZS5zY3NzIiwic3JjL2FwcC9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0ksbUJBQUE7QUNDUjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTs7RUFFSSxjQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7O0VBRUksWUFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURFSTtFQUNJLGVBQUE7QUNBUjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUEwQkkseUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQzFCSjs7QURGSTtFQUNJLFVBQUE7QUNJUjs7QURESTtFQUNJLGtCQUFBO0FDR1I7O0FEQUk7O0VBRUksa0JBQUE7RUFDQSxTQUFBO0FDRVI7O0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUNDUjs7QURFSTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7QUNBUjs7QURVSTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNQUjs7QURXSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ1RSOztBRFlJO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FDVlI7O0FEY0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURjQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNYSjs7QURjQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRhci1kYXRlIGlvbi1jb2wge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE0LjI4NTcxNDI4NTclICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTQuMjg1NzE0Mjg1NyUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTQuMjg1NzE0Mjg1NyUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbnQtZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDIwcHggMCAyMHB4O1xyXG59XHJcblxyXG4uZW1wdHktZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICMwQTE1RDU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudC1kaXYgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG59XHJcblxyXG4uY29udGVudC1kaXYgaW9uLWNvbCBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLmxhc3QtbW9udGgsXHJcbi5uZXh0LW1vbnRoIHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZERhdGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU5YzQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgLyogaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VycmVudERhdGUsXHJcbi5vdGhlckRhdGUge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uY3VycmVudERhdGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE2M2ZjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5jYWxlbmRhci1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFOUM0NTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ldmVudC1idWxsZXQge1xyXG4gICAgbWFyZ2luOiAycHggYXV0bztcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLWRhdGUge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi51bnNlbGVjdGVkLWRhdGUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2FsZW5kYXItYm9keSB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2w6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxlbmRhci13ZWVrZGF5LFxyXG4gICAgLmNhbGVuZGFyLWRhdGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGVuZGFyLXdlZWtkYXkge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRkZGRkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGVuZGFyLWRhdGUge1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZTljNDU7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1ldmVudCB7XHJcbiAgICAuZGF0YSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMEExNUQ1O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc2VnLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvcmRlciB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNGRTlDNDU7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uby1ldmVudCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jdXN0b20taWNvbi1jYWxlbmRhci1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsIi5jYWxlbmRhci1kYXRlIGlvbi1jb2wge1xuICAtd2Via2l0LWJveC1mbGV4OiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxNC4yODU3MTQyODU3JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTQuMjg1NzE0Mjg1NyUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNC4yODU3MTQyODU3JSAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMHB4IDBweDtcbiAgdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbiAgcGFkZGluZzogNDVweCAyMHB4IDAgMjBweDtcbn1cblxuLmVtcHR5LWRpdiB7XG4gIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gIGhlaWdodDogMTIwcHg7XG59XG4uZW1wdHktZGl2IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRlbnQtZGl2IGlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xufVxuXG4uY29udGVudC1kaXYgaW9uLWNvbCBzcGFuIHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ubGFzdC1tb250aCxcbi5uZXh0LW1vbnRoIHtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogOTAlO1xufVxuXG4uc2VsZWN0ZWREYXRlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTljNDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgLyogaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7ICovXG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAtM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXJyZW50RGF0ZSxcbi5vdGhlckRhdGUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jdXJyZW50RGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE2M2ZjO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4uY2FsZW5kYXItaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFOUM0NTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xufVxuLmNhbGVuZGFyLWhlYWRlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmV2ZW50LWJ1bGxldCB7XG4gIG1hcmdpbjogMnB4IGF1dG87XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLnNlbGVjdGVkLWRhdGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi51bnNlbGVjdGVkLWRhdGUge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYWxlbmRhci1ib2R5IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZlOWM0NTtcbiAgYm9yZGVyLXRvcDogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi5jYWxlbmRhci1ib2R5IGlvbi1yb3cge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhbGVuZGFyLWJvZHkgaW9uLWNvbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLXdlZWtkYXksXG4uY2FsZW5kYXItYm9keSAuY2FsZW5kYXItZGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLXdlZWtkYXkge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4uY2FsZW5kYXItYm9keSAuY2FsZW5kYXItZGF0ZSB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjRkZGRkZGO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0ZGRkZGRjtcbn1cblxuLnNlbGVjdGVkLWV2ZW50IC5kYXRhIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMEExNUQ1O1xufVxuLnNlbGVjdGVkLWV2ZW50IC5zZWctdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlbGVjdGVkLWV2ZW50IC5ib3JkZXIge1xuICBib3JkZXItdG9wOiBzb2xpZCAycHggI0ZFOUM0NTtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5uby1ldmVudCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY3VzdG9tLWljb24tY2FsZW5kYXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

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