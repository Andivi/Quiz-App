import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuestionModule { }
