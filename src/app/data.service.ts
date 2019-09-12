import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['go on an adventure','trip to the moon','experience a déjà vu', 'living out a metaphor','shake the head and say "yes"','solve the travelling salesman problem','experience a déjà vu']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
