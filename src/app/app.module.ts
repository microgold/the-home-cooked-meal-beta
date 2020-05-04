import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing/routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChefSignupComponent } from './chef-signup/chef-signup.component';
import { SignupComponent } from './signup/signup.component';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChefSignupComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    LayoutModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
