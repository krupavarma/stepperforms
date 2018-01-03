import { FormBuilder,FormGroup,FormsModule,Form,Validators,ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './stepper/stepper.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule,MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,StepperComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatButtonModule,MatCheckboxModule,MatStepperModule,
    FormsModule,ReactiveFormsModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
