import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  myForm: FormGroup = new FormGroup({
    'name': new FormControl('Legion Y540')
  })

  constructor() { }
}
