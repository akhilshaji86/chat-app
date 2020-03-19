import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {ChatContentComponent} from './chat-content/chat-content.component';
import {FormsModule} from "@angular/forms";
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatFooterComponent } from './chat-footer/chat-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ChatContentComponent,
    ChatHeaderComponent,
    ChatFooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
