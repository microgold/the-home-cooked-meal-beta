import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing/routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChefSignupComponent } from './chef-signup/chef-signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChefSignupComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    LayoutModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
