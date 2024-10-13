import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UtilService } from '../util.service';
import { ApiService } from '../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public departments;
  public designation;
  public designate = false;
  public reporting = false;
  public username1 = false;
  public password1 = false;
  public email1 = false;
  public reporting_officer: any;
  public phone1 = false;
  employeeForm: FormGroup;
  public primaryColor: any;
  public keywords: any = {};
  leads: any;
  public fixed = false;
  constructor(public fb: FormBuilder, public referenceService: UtilService,
    public apiService: ApiService, public navCtrl: NavController) {
    this.employeeForm = fb.group({
      'username': ['', [Validators.required, this.nameValidator.bind(this)]],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), this.passwordValidator.bind(this)]],
      'email': ['', [Validators.required, this.emailValidator.bind(this)]],
      'fullname': ['', Validators.compose([Validators.required])],
      'designation_id': ['', Validators.compose([Validators.required])],
      'department_id': ['', Validators.compose([Validators.required])],
      'emp_doj': ['', Validators.compose([Validators.required])],
      'phone': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), this.phoneValidator.bind(this)]],
      'reporting_to': ['', Validators.compose([Validators.required])],
    });
    this.primaryColor = localStorage.getItem('primary_color');
  }

  ngOnInit() {
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };

  addEmployee() {
    this.referenceService.showAlert('Success', 'Employee Added successfully');
    this.referenceService.dismissModal();
  };

  isValid(field: string) {
    let formField = this.employeeForm.get(field);
    return formField.valid || formField.pristine;
  };

  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return { invalidName: true };
    }
    else {
      this.username1 = false;
    }
  };

  passwordValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')) {
      //console.log(control.value);
      return { invalidPassword: true };
    }
    else {
      //console.log(control.value);
      this.password1 = false;
    }
  };

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.toLowerCase().match('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'))) {
      return { invalidEmail: true };
    }
    else {
      this.email1 = false;
    }
  };

  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.match('[0-9]+'))) {
      return { invalidPhone: true };
    }
    else {
      this.phone1 = false;
    }
  };
}
