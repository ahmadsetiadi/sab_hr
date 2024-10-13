import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HomePopOverComponent } from './home-pop-over/home-pop-over.component';

import {
  HTTP_INTERCEPTORS, HttpClientModule,
} from '@angular/common/http';
import { HttpConfigInterceptor } from './httpConfig.interceptor';
import { HTTP } from '@ionic-native/http/ngx';
import { ActionSheet } from '@ionic-native/action-sheet/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { CalendarModule } from "ion2-calendar";
import { EditInvoicePageModule } from './edit-invoice/edit-invoice.module';
import { EditProjectPageModule } from './edit-project/edit-project.module';
import { CreateProjectPageModule } from './create-project/create-project.module';
import { EditClientPageModule } from './edit-client/edit-client.module';
import { AddClientPageModule } from './add-client/add-client.module';
import { EditEmployeePageModule } from './edit-employee/edit-employee.module';
import { AddEmployeePageModule } from './add-employee/add-employee.module';
import { CreateInvoicePageModule } from './create-invoice/create-invoice.module';
import { ViewLeavePageModule } from './view-leave/view-leave.module';
import { AddLeaveTypePageModule } from './add-leave-type/add-leave-type.module';
import { EditLeaveTypePageModule } from './edit-leave-type/edit-leave-type.module';
import { AddDepartmentPageModule } from './add-department/add-department.module';
import { AddDesignationPageModule } from './add-designation/add-designation.module';
import { AddSalaryPageModule } from './add-salary/add-salary.module';
import { EditSalaryPageModule } from './edit-salary/edit-salary.module';
import { ChangePasswordPageModule } from './change-password/change-password.module';
import { CompanySettingsPageModule } from './company-settings/company-settings.module';
import { NotificationSettingsPageModule } from './notification-settings/notification-settings.module';
import { EmailSettingsPageModule } from './email-settings/email-settings.module';
import { LocationSettingsPageModule } from './location-settings/location-settings.module';
import { SalarySettingsPageModule } from './salary-settings/salary-settings.module';
import { InvoiceSettingsPageModule } from './invoice-settings/invoice-settings.module';
import { AddExpensePageModule } from './add-expense/add-expense.module';
import { EditExpensePageModule } from './edit-expense/edit-expense.module';
import { AddTaskPageModule } from './add-task/add-task.module';
import { Calendar } from '@ionic-native/calendar/ngx';
import { AddHolidayPageModule } from './add-holiday/add-holiday.module';
import { EditEstimatePageModule } from './edit-estimate/edit-estimate.module';
import { CreteEstimatePageModule } from './crete-estimate/crete-estimate.module';

// import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicStorageModule } from '@ionic/storage';

library.add(fas, far, fab);
@NgModule({
  declarations: [AppComponent,
    HomePopOverComponent],
  entryComponents: [HomePopOverComponent],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    // IonicStorageModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '_myDb',
      driverOrder: ['localstorage']
    }),
    AppRoutingModule,
    EditProjectPageModule,
    CreateProjectPageModule,
    EditClientPageModule,
    AddClientPageModule,
    EditEmployeePageModule,
    AddEmployeePageModule,
    CreateInvoicePageModule,
    ViewLeavePageModule,
    AddLeaveTypePageModule,
    EditLeaveTypePageModule,
    AddDepartmentPageModule,
    AddDesignationPageModule,
    AddSalaryPageModule,
    EditSalaryPageModule,
    ChangePasswordPageModule,
    CompanySettingsPageModule,
    NotificationSettingsPageModule,
    EmailSettingsPageModule,
    LocationSettingsPageModule,
    SalarySettingsPageModule,
    InvoiceSettingsPageModule, AddTaskPageModule,
    AddExpensePageModule,
    EditExpensePageModule,
    AddHolidayPageModule, EditInvoicePageModule,
    EditEstimatePageModule, CreteEstimatePageModule,
    ReactiveFormsModule, HttpClientModule,
     FontAwesomeModule, CalendarModule
  ],
  providers: [
    StatusBar,
    SplashScreen, HTTP,
    ActionSheet,
    Camera,
    FileTransfer, Calendar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
