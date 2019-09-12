import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import {person} from '../person';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  elias: person = {
    first_name: 'Elias',
    last_name: 'Wipfli',
    age: 25
  };

  goals: any;

  constructor(private route: ActivatedRoute,
            private router: Router,
            private _data: DataService) {

    this.route.params.subscribe(res => console.log(res.id))
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }
  
  sendMeHome(){
    this.router.navigate(['']);
  }
}
