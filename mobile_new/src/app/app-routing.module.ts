/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery - 3 This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'employee-list',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/employee/employee-list/employee-list.module').then(m => m.EmployeeListPageModule)
  },
  {
    path: 'employee-form',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/employee/employee-form/employee-form.module').then(m => m.EmployeeFormPageModule)
  },
  {
    path: 'attendance',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/attendance/attendance/attendance.module').then(m => m.AttendancePageModule)
  },
  {
    path: 'attendance-form',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/attendance/attendance-form/attendance-form.module').then(m => m.AttendanceFormPageModule)
  },
  {
    path: 'leave-list',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/leave/leave-list/leave-list.module').then(m => m.LeaveListPageModule)
  },
  {
    path: 'leave-form',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/leave/leave-form/leave-form.module').then(m => m.LeaveFormPageModule)
  },
  {
    path: 'claim-list',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/claim/claim-list/claim-list.module').then(m => m.ClaimListPageModule)
  },
  {
    path: 'claim-form',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/claim/claim-form/claim-form.module').then(m => m.ClaimFormPageModule)
  },
  {
    path: 'loan-list',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/loan/loan-list/loan-list.module').then(m => m.LoanListPageModule)
  },
  {
    path: 'loan-form',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/loan/loan-form/loan-form.module').then(m => m.LoanFormPageModule)
  },
  {
    path: 'tabs',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
  },
  {
    path: 'add-wishlist',
    loadChildren: () => import('./pages/add-wishlist/add-wishlist.module').then(m => m.AddWishlistPageModule)
  },
  {
    path: 'address-book',
    loadChildren: () => import('./pages/address-book/address-book.module').then(m => m.AddressBookPageModule)
  },  
  {
    path: 'brand-info',
    loadChildren: () => import('./pages/brand-info/brand-info.module').then(m => m.BrandInfoPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'change-password',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'payroll/run-payroll',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/hr/payroll/payroll-run/payroll-run.module').then(m => m.PayrollRunPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'contact-info',
    loadChildren: () => import('./pages/contact-info/contact-info.module').then(m => m.ContactInfoPageModule)
  },
  {
    path: 'country-code-picker',
    loadChildren: () => import('./pages/country-code-picker/country-code-picker.module').then(m => m.CountryCodePickerPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'forgot-password',    
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'invite-friends',
    loadChildren: () => import('./pages/invite-friends/invite-friends.module').then(m => m.InviteFriendsPageModule)
  },
  {
    path: 'languages-modal',
    loadChildren: () => import('./pages/languages-modal/languages-modal.module').then(m => m.LanguagesModalPageModule)
  },
  {
    path: 'loyal-programs',
    loadChildren: () => import('./pages/loyal-programs/loyal-programs.module').then(m => m.LoyalProgramsPageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./pages/new-password/new-password.module').then(m => m.NewPasswordPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./pages/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'product-info',
    loadChildren: () => import('./pages/product-info/product-info.module').then(m => m.ProductInfoPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'products-by-category',
    loadChildren: () => import('./pages/products-by-category/products-by-category.module').then(m => m.ProductsByCategoryPageModule)
  },
  {
    path: 'promo-codes',
    loadChildren: () => import('./pages/promo-codes/promo-codes.module').then(m => m.PromoCodesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'tracking-orders',
    loadChildren: () => import('./pages/tracking-orders/tracking-orders.module').then(m => m.TrackingOrdersPageModule)
  },
  {
    path: 'verify-reset',
    loadChildren: () => import('./pages/verify-reset/verify-reset.module').then(m => m.VerifyResetPageModule)
  },
  {
    path: 'verify-sign-up',
    loadChildren: () => import('./pages/verify-sign-up/verify-sign-up.module').then(m => m.VerifySignUpPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
