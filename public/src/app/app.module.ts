import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PollFormComponent } from './poll-form/poll-form.component';
import { PollsComponent } from './polls/polls.component';
import { PollsService } from './polls/polls.service';

@NgModule({
  declarations: [
    AppComponent,
    NewUserFormComponent,
    UsersComponent,
    NewUserFormComponent,
    LoginFormComponent,
    DashboardComponent,
    PageNotFoundComponent,
    PollFormComponent,
    PollsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, PollsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
