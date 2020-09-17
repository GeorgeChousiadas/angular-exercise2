import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})


export class ReactiveFormComponent implements OnInit {

  myNewForm: FormGroup;
  programmingLanguages = ['TS', 'JS', 'C#'];

  constructor() { }

  ngOnInit() {

    this.myNewForm = new FormGroup({
        firstName : new FormControl(null, [Validators.required,Validators.minLength(3)]),
        lastName : new FormControl(null, [Validators.required]),
        isExpirienced: new FormControl(null, Validators.required),
        angularPreference : new FormControl(null, Validators.required),
        favouriteLanguage : new FormControl(null, [Validators.required]),
        jsversion : new FormControl(null, [Validators.required])
    });

    this.myNewForm.get('favouriteLanguage').valueChanges.subscribe( (value) => {
      const formControl = this.myNewForm.get('jsversion');
      if (value === "JS") {
        formControl.setValidators(Validators.required);
        } else {
        formControl.clearValidators();
        }
        formControl.updateValueAndValidity();
    });
  }

}
