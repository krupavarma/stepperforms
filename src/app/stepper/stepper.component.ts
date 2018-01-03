import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  isLinear = false;
  createCampaignFormGroup: FormGroup;
  addContactsFormGroup: FormGroup;
  newsLetterFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createCampaignFormGroup = this._formBuilder.group({
      CompaignNameCtrl: ['', Validators.required],
      subjectCtrl: ['', Validators.required],
      fromEmailCtrl: ['', Validators.required],
      fromNameCtrl: ['', Validators.required]
    });
    this.addContactsFormGroup = this._formBuilder.group({
      addressCtrl: ['', Validators.required],
      nameCtrl: ['', Validators.required],
      siriCtrl: ['', Validators.required],
    });
    this.newsLetterFormGroup = this._formBuilder.group({
      address2Ctrl: ['', Validators.required]
    });
  }
}
