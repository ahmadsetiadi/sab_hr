import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { JsonService } from '../json.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  public basicInformation = true;
  public experienceInformation = false;
  public educationInformation = false;
  public user: any = {};
  public education_details: any = {};
  public temp: any = {};
  public experience_information: any = {};
  public editprofilePage = this;
  public currentTime;
  public day;
  public year;
  public month;
  public educationfrom: any = [];
  public experiencefrom: any = [];
  primaryColor = '#44bbec';
  secondryColor = '#0163fc';
  public gender = [
    {
      name: 'Male',
      value: 'Male'
    },
    {
      name: 'Female',
      value: 'Female'
    }]
  userForm: FormGroup;
  constructor(public util: UtilService, public fb: FormBuilder, public dataService: JsonService, public navContrl: NavController) {

    this.userForm = fb.group({
      'education': fb.array([this.educationForm()]),
      'experience': fb.array([this.experienceForm()])
    });
  }

  ngOnInit() {
    this.user = this.dataService.employeeProfile;
    let isEdu = typeof (this.user.education_details) === 'string';
    let isExp = typeof (this.user.experience_information) === 'string'
    this.user.education_details = (isEdu) ? JSON.parse(this.user.education_details) : this.user.education_details;
    this.user.experience_information = (isExp) ? JSON.parse(this.user.experience_information) : this.user.experience_information;
    if (this.user.education_details != []) {
      const control = <FormArray>this.userForm.controls.education;
      control.removeAt(0)
      this.user.education_details.forEach((value, key) => {
        const control = <FormArray>this.userForm.controls.education;
        // control.value[key].patchValue(value)
        control.push(this.educationForm());
      });
      this.userForm.patchValue({
        education: this.user.education_details
      })
    }
    if (this.user.experience_information != []) {
      const control = <FormArray>this.userForm.controls.experience;
      control.removeAt(0)
      this.user.experience_information.forEach((value, key) => {
        const control = <FormArray>this.userForm.controls.experience;
        // control.value[key].patchValue(value)
        control.push(this.experienceForm());
      });
      this.userForm.patchValue({
        experience: this.user.experience_information
      })
    }
    this.currentTime = new Date();
    this.year = this.currentTime.getFullYear();
    this.month = this.currentTime.getMonth() + 1;
    this.day = this.currentTime.getDate() - 1;
    if (this.month < 10) { this.month = '0' + this.month; }
    if (this.day < 10) { this.day = '0' + this.day; }
    this.currentTime = this.year + '-' + this.month + '-' + this.day;
  }
  educationForm(): FormGroup {
    return this.fb.group({
      'institution': new FormControl('', Validators.required),
      'subject': new FormControl('', Validators.required),
      'start_year': new FormControl('', Validators.required),
      'complete_year': new FormControl('', Validators.required),
      'degree': new FormControl('', Validators.required),
      'grade': new FormControl('', Validators.required),
    })
  };

  experienceForm(): FormGroup {
    return this.fb.group({
      'company': new FormControl('', Validators.required),
      'location': new FormControl('', Validators.required),
      'jop_position': new FormControl('', Validators.required),
      'period_from': new FormControl('', Validators.required),
      'period_to': new FormControl('', Validators.required),
    })
  }
  BasicInformation() {
    this.basicInformation = true;
    this.experienceInformation = false;
    this.educationInformation = false;
  }

  EducationInformation() {
    this.basicInformation = false;
    this.educationInformation = true;
    this.experienceInformation = false;
  }
  ExperienceInformation() {
    var keepGoing = true;
    var a = 0;
    this.userForm.value.education.forEach((value) => {
      if (keepGoing)
        if (value.institution != '' && value.subject != '' && value.start_year != '' && value.complete_year != '' && value.degree != '' && value.grade != '') {
          a++;
        }
        else {
          this.util.showAlert('Smart HRMS', 'Please fill all the empty fields');
          keepGoing = false;
        }
      if (this.userForm.value.education.length == a) {
        this.basicInformation = false;
        this.educationInformation = false;
        this.experienceInformation = true;
      }
    });
    if (this.userForm.value.education.length == 0) {
      this.basicInformation = false;
      this.educationInformation = false;
      this.experienceInformation = true;
    }
  };

  selectFrom() {
    this.userForm.value.education.forEach((value, key) => {
      this.educationfrom[key] = value.start_year;
    });
  };

  selectFrom1() {
    this.userForm.value.experience.forEach((value, key) => {
      this.experiencefrom[key] = value.period_from;
    });
  };

  addEducation(): void {
    const control = <FormArray>this.userForm.controls.education;
    control.push(this.educationForm());
  };

  removeEducation(value): void {
    const control = <FormArray>this.userForm.controls.education;
    control.removeAt(value);
  };
  removeExperience(value): void {
    const control = <FormArray>this.userForm.controls.experience;
    control.removeAt(value);
  };

  addExperience() {
    const control = <FormArray>this.userForm.controls.experience;
    control.push(this.experienceForm());
  };
  moveFocus(nextElement) {
    nextElement.setFocus();
  };

  submit() {
    var keepGoing = true;
    var a = 0;
    this.userForm.value.experience.forEach((value) => {
      if (keepGoing)
        if (value.company != '' && value.location != '' && value.period_from != '' && value.period_to != '' && value.jop_position != '') {
          a++;
        }
        else {
          this.util.showAlert('Smart HRMS', 'Please fill all the empty fields');
          keepGoing = false;
        }
      if (this.userForm.value.experience.length == a) {
        this.editemployee();
      }
    });
    if (this.userForm.value.experience.length == 0) {
      this.editemployee();
    }
  };

  editemployee() {
    this.util.showAlert('Success', 'Profile updated successfully');
    this.navContrl.back();
  }
  getHeaderStyle() {
    return { 'background': this.primaryColor }
  };
}
