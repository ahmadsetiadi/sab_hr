import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'company-settings',
    loadChildren: () => import('./company-settings/company-settings.module').then(m => m.CompanySettingsPageModule)
  },
  {
    path: 'notification-settings',
    loadChildren: () => import('./notification-settings/notification-settings.module').then(m => m.NotificationSettingsPageModule)
  },
  {
    path: 'email-settings',
    loadChildren: () => import('./email-settings/email-settings.module').then(m => m.EmailSettingsPageModule)
  },
  {
    path: 'location-settings',
    loadChildren: () => import('./location-settings/location-settings.module').then(m => m.LocationSettingsPageModule)
  },
  {
    path: 'salary-settings',
    loadChildren: () => import('./salary-settings/salary-settings.module').then(m => m.SalarySettingsPageModule)
  },
  {
    path: 'invoice-settings',
    loadChildren: () => import('./invoice-settings/invoice-settings.module').then(m => m.InvoiceSettingsPageModule)
  },
  {
    path: 'leave-type',
    loadChildren: () => import('./leave-type/leave-type.module').then(m => m.LeaveTypePageModule)
  },
  {
    path: 'add-leave-type',
    loadChildren: () => import('./add-leave-type/add-leave-type.module').then(m => m.AddLeaveTypePageModule)
  },
  {
    path: 'edit-leave-type',
    loadChildren: () => import('./edit-leave-type/edit-leave-type.module').then(m => m.EditLeaveTypePageModule)
  },
  {
    path: 'profile/:empId',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)
  },
  {
    path: 'time-sheets',
    loadChildren: () => import('./time-sheets/time-sheets.module').then(m => m.TimeSheetsPageModule)
  },
  {
    path: 'time-sheets-details/:timeSheetTask',
    loadChildren: () => import('./time-sheets-details/time-sheets-details.module').then(m => m.TimeSheetsDetailsPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendancePageModule)
  },
  {
    path: 'pay-slip',
    loadChildren: () => import('./pay-slip/pay-slip.module').then(m => m.PaySlipPageModule)
  },
  {
    path: 'employee-salary',
    loadChildren: () => import('./employee-salary/employee-salary.module').then(m => m.EmployeeSalaryPageModule)
  },
  {
    path: 'edit-salary/:netSalary',
    loadChildren: () => import('./edit-salary/edit-salary.module').then(m => m.EditSalaryPageModule)
  },
  {
    path: 'add-salary',
    loadChildren: () => import('./add-salary/add-salary.module').then(m => m.AddSalaryPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsPageModule)
  },
  {
    path: 'payment-details/:paymentDetails',
    loadChildren: () => import('./payment-details/payment-details.module').then(m => m.PaymentDetailsPageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesPageModule)
  },
  {
    path: 'edit-expense',
    loadChildren: () => import('./edit-expense/edit-expense.module').then(m => m.EditExpensePageModule)
  },
  {
    path: 'add-expense',
    loadChildren: () => import('./add-expense/add-expense.module').then(m => m.AddExpensePageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesPageModule)
  },
  {
    path: 'edit-invoice/:invoice',
    loadChildren: () => import('./edit-invoice/edit-invoice.module').then(m => m.EditInvoicePageModule)
  },
  {
    path: 'create-invoice',
    loadChildren: () => import('./create-invoice/create-invoice.module').then(m => m.CreateInvoicePageModule)
  },
  {
    path: 'estimates',
    loadChildren: () => import('./estimates/estimates.module').then(m => m.EstimatesPageModule)
  },
  {
    path: 'edit-estimate',
    loadChildren: () => import('./edit-estimate/edit-estimate.module').then(m => m.EditEstimatePageModule)
  },
  {
    path: 'create-estimate',
    loadChildren: () => import('./crete-estimate/crete-estimate.module').then(m => m.CreteEstimatePageModule)
  },
  {
    path: 'voice-call',
    loadChildren: () => import('./voice-call/voice-call.module').then(m => m.VoiceCallPageModule)
  },
  {
    path: 'incoming-call',
    loadChildren: () => import('./incoming-call/incoming-call.module').then(m => m.IncomingCallPageModule)
  },
  {
    path: 'video-call',
    loadChildren: () => import('./video-call/video-call.module').then(m => m.VideoCallPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then(m => m.EmailPageModule)
  },
  {
    path: 'mail-list',
    loadChildren: () => import('./mail-list/mail-list.module').then(m => m.MailListPageModule)
  },
  {
    path: 'view-mail',
    loadChildren: () => import('./view-mail/view-mail.module').then(m => m.ViewMailPageModule)
  },
  {
    path: 'project-list',
    loadChildren: () => import('./project-list/project-list.module').then(m => m.ProjectListPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsPageModule)
  },
  {
    path: 'add-client',
    loadChildren: () => import('./add-client/add-client.module').then(m => m.AddClientPageModule)
  },
  {
    path: 'employee-list',
    loadChildren: () => import('./employee-list/employee-list.module').then(m => m.EmployeeListPageModule)
  },
  {
    path: 'edit-client/:clientId',
    loadChildren: () => import('./edit-client/edit-client.module').then(m => m.EditClientPageModule)
  },
  {
    path: 'client-profile/:clientId',
    loadChildren: () => import('./client-profile/client-profile.module').then(m => m.ClientProfilePageModule)
  },
  {
    path: 'view-projects',
    loadChildren: () => import('./view-projects/view-projects.module').then(m => m.ViewProjectsPageModule)
  },
  {
    path: 'view-estimates',
    loadChildren: () => import('./view-estimates/view-estimates.module').then(m => m.ViewEstimatesPageModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./edit-employee/edit-employee.module').then(m => m.EditEmployeePageModule)
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./add-employee/add-employee.module').then(m => m.AddEmployeePageModule)
  },
  {
    path: 'create-project',
    loadChildren: () => import('./create-project/create-project.module').then(m => m.CreateProjectPageModule)
  },
  {
    path: 'edit-project',
    loadChildren: () => import('./edit-project/edit-project.module').then(m => m.EditProjectPageModule)
  },
  {
    path: 'departments',
    loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsPageModule)
  },
  {
    path: 'designations',
    loadChildren: () => import('./designations/designations.module').then(m => m.DesignationsPageModule)
  },
  {
    path: 'holiday-list',
    loadChildren: () => import('./holiday-list/holiday-list.module').then(m => m.HolidayListPageModule)
  },
  {
    path: 'attendance-list',
    loadChildren: () => import('./attendance-list/attendance-list.module').then(m => m.AttendanceListPageModule)
  },
  {
    path: 'attendance-log',
    loadChildren: () => import('./attendance-log/attendance-log.module').then(m => m.AttendanceLogPageModule)
  },
  {
    path: 'view-chat',
    loadChildren: () => import('./view-chat/view-chat.module').then(m => m.ViewChatPageModule)
  },
  {
    path: 'compose-mail',
    loadChildren: () => import('./compose-mail/compose-mail.module').then(m => m.ComposeMailPageModule)
  },
  {
    path: 'view-invoice',
    loadChildren: () => import('./view-invoice/view-invoice.module').then(m => m.ViewInvoicePageModule)
  },
  {
    path: 'view-leave',
    loadChildren: () => import('./view-leave/view-leave.module').then(m => m.ViewLeavePageModule)
  },
  {
    path: 'add-department',
    loadChildren: () => import('./add-department/add-department.module').then(m => m.AddDepartmentPageModule)
  },
  {
    path: 'add-designation',
    loadChildren: () => import('./add-designation/add-designation.module').then(m => m.AddDesignationPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule)
  },
  {
    path: 'view-expense',
    loadChildren: () => import('./view-expense/view-expense.module').then(m => m.ViewExpensePageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsPageModule)
  },
  {
    path: 'leave-list',
    loadChildren: () => import('./leave-list/leave-list.module').then(m => m.LeaveListPageModule)
  },
  {
    path: 'add-holiday',
    loadChildren: () => import('./add-holiday/add-holiday.module').then(m => m.AddHolidayPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
