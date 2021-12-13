import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


enum genders {
  male= "M",
  female="F"
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})

export class SwitchesComponent implements OnInit {


  switchesForm: FormGroup = this.formBuilder.group({
    gender: [genders.male, Validators.required],
    notifications: [false, Validators.required],
    termsAndConditions: [ false, Validators.requiredTrue]
  })


  person = {
    gender: "F",
    notifications: true,
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reset();
  }

 

  save(){
    if(this.switchesForm.invalid)return;
    const { gender, notifications} = this.switchesForm.value
    this.person = {gender, notifications}
    console.log("Person data sent", this.switchesForm.value);
    this.reset();
  }


  reset(){
    this.switchesForm.reset({
      ...this.person,
      termsAndConditions: false
    })
  }

}
