import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  myForm: FormGroup = this.formBuilder.group({
    name: ['Legion Y540', ],
    price: [ 1200, ],
    stock: [ 10 , ],
  })
  // myForm: FormGroup = new FormGroup({
  //   name : new FormControl('Legion Y540'),
  //   price: new FormControl(1200),
  //   stock: new FormControl(10),
  // })

  constructor(private formBuilder: FormBuilder) { }


}
