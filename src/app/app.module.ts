import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketFormComponent } from './ticket/ticket-form/ticket-form.component';
import { Routes,RouterModule } from '@angular/router';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { RegisterFormComponent } from './user/register-form/register-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes =[
 { path:'app-ticket',component: TicketComponent},
 { path:'app-ticket-form',component: TicketFormComponent},
 { path:'app-ticket-detail/:id',component: TicketDetailComponent},
 { path:'',component: LoginFormComponent},
 { path:'app-register-form', component:RegisterFormComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketDetailComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
