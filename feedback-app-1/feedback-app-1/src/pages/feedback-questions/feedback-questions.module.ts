import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackQuestionsPage } from './feedback-questions';

@NgModule({
  declarations: [
    FeedbackQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackQuestionsPage),
  ],
})
export class FeedbackQuestionsPageModule {}
