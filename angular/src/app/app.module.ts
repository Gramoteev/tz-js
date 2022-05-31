import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './my-component/my.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';
import { ChildCounterComponent } from './parent-counter/child-counter/child-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    ParentCounterComponent,
    ChildCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
