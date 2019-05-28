import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { CityService } from '../service/city.service';
import {User} from '../model/User.model';

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
  constructor(private stateService: StateService,
              private cityService: CityService) {

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
    console.log(this.user);
  }

}
