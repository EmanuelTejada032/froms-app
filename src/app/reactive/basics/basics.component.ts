import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: [  , [Validators.required, Validators.minLength(3)]],
    price: [ , [Validators.required, Validators.min(1.99), Validators.max(2500)] ],
    stock: [ , [Validators.required, Validators.min(0)] ],
  })
  // myForm: FormGroup = new FormGroup({
  //   name : new FormControl('Legion Y540'),
  //   price: new FormControl(1200),
  //   stock: new FormControl(10),
  // })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.myForm.reset({ //this.myForm.setValue 
      name: '',
      price: 0,
      stock: null
    })
  }

  isValidField(field:string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched 
  }

  save(){
    if(this.myForm.invalid){
      console.log("Not valid form no data send")
      this.myForm.markAllAsTouched()
      return;
    }

    console.log("Data sent", this.myForm.value)
    this.myForm.reset();
  }
}
