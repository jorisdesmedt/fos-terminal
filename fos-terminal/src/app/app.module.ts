import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { ViewComponent } from './view/view.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebase = {
  piKey: "AIzaSyA19HmgnAyzvMlFnMkuOq-7AbpIsi5LLdA",
  authDomain: "fos-terminal-b7b2c.firebaseapp.com",
  databaseURL: "wss://fos-terminal-b7b2c.firebaseio.com",
  projectId: "fos-terminal-b7b2c",
  storageBucket: "fos-terminal-b7b2c.appspot.com",
  messagingSenderId: "185271082136"
};

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
