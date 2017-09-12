import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { Question1Component } from './question-1/question-1.component';
import { Question2Component } from './question-2/question-2.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    Question1Component,
    Question2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot([
    //   {
    //     path : 'myComponent',
    //     component: 'MyComponentComponent'
    //   },
    //   {
    //     path: 'question-1',
    //     component: 'Question1Component'
    //   },
    //   {
    //     path: 'question-2',
    //     component: 'Question2Component'
    //   }
    // ]),
    RouterModule.forRoot([
      {
        path : 'question-1',
        component: Question1Component,
      },
      {
        path: 'question-2',
        component: Question2Component,
      },
      {
        path: 'myComponent',
        component: MyComponentComponent,
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
