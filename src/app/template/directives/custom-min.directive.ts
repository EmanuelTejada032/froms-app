import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";


@Directive({
    selector: '[customMin][ngModel]',
    providers:[
        {
            provide: NG_VALIDATORS,
            useExisting: CustomMinDirective,
            multi: true
        }
    ]

})


export class CustomMinDirective implements Validator{

    @Input() minstock!: number;

    constructor(){}

    //This directive function is triggered on first render and everytime the input change
    validate( control: FormControl){
        let inputValue = control.value;
        console.log(inputValue)
        console.log('minstock', this.minstock)
        return (inputValue < this.minstock)
               ? {'customMin': true}
               : null;
    }


}