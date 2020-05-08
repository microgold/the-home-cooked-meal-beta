import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { CityService } from '../service/city.service';
import {User} from '../model/User.model';
import { UserService } from '../service/user.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  selectedState: string;
  states: string[];
  cities: string[];
  snackbar: MatSnackBar;
  router: Router;

  constructor(private stateService: StateService,
              private cityService: CityService,
              private userService: UserService,
              private routerService: Router,
              snackbar: MatSnackBar ) {
                this.snackbar = snackbar;
                this.router = routerService;
              }

  ngOnInit() {
    this.states = this.stateService.getFullNameList();
    this.user = new User();
  }

  onStateChanged(selectedState: string) {
    this.cities = this.cityService.getCitiesByState(selectedState);
    this.selectedState = selectedState;
  }

  onRegisterUser() {
    this.userService.submitUser(this.user).subscribe(result => {
    this.openSnackBar();
    console.log(`${this.user.firstname} registered.`)
  });

    console.log(this.user);
  }

  openSnackBar() {
     const snackbarRef = this.snackbar.open('Registration Saved', 'Confirmation', {
        duration: 3000
    });

     snackbarRef.afterDismissed().subscribe(res =>
       this.router.navigate(['/', 'home']))
  }

}
