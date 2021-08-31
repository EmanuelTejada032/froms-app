import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  myForm: FormGroup = this.formBuilder.group({
    name: ['Legion Y540', [Validators.required, Validators.minLength(3)]],
    price: [ 1200, [Validators.required, Validators.min(0), Validators.max(2500)] ],
    stock: [ 10 , [Validators.required, Validators.min(0)] ],
  })
  // myForm: FormGroup = new FormGroup({
  //   name : new FormControl('Legion Y540'),
  //   price: new FormControl(1200),
  //   stock: new FormControl(10),
  // })

  constructor(private formBuilder: FormBuilder) { }


}
