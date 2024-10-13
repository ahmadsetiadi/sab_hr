import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UtilService } from '../util.service';
import { ApiService } from '../api.service';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {
  public selected;
  public selected1;
  public loading;
  public url;
  public token;
  public resp;
  public departments;
  public designation;
  public username1 = false;
  public email1 = false;
  public phone1 = false;
  public designate = false;
  employeeForm: FormGroup;
  public employee;
  public primaryColor: any;
  public dept: any;
  public keywords: any = {};
  constructor(public fb: FormBuilder, public referenceService: UtilService,
    public apiService: ApiService, public navCtrl: NavController, public navParam: NavParams) {
    this.employeeForm = fb.group({
      // 'username': ['', [Validators.required, Validators.minLength(3), this.nameValidator.bind(this)]],
      'email': ['', [Validators.required, this.emailValidator.bind(this)]],
      'fullname': [null, Validators.compose([Validators.required])],
      'designation_id': [null, Validators.compose([Validators.required])],
      'department_id': [null, Validators.compose([Validators.required])],
      'phone': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), this.phoneValidator.bind(this)]],
    });
  }

  ngOnInit() {
    this.employee = this.navParam.get('employee');
  }

  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };


  addEmployee() {
    this.referenceService.showAlert('Success', 'Employee Updated successfully');
    this.referenceService.dismissModal();
  };

  isValid(field: string) {
    let formField = this.employeeForm.get(field);
    return formField.valid || formField.pristine;
  }

  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value != "") {
      //console.log(control.value)
      if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
        return { invalidName: true };
      }
    }
    else {
      this.username1 = false;
    }
  }
  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value != "") {
      if (!(control.value.toLowerCase().match('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'))) {
        return { invalidEmail: true };
      }
      else {
        this.email1 = false;
      }
    }
  }
  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.match('[0-9]+'))) {
      return { invalidPhone: true };
    }
    else {
      this.phone1 = false;
    }
  }
}
