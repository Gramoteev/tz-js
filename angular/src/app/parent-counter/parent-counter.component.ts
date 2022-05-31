import { Component, OnInit } from '@angular/core';
import {CounterService} from "../services/counter.service";

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.css'],
})
export class ParentCounterComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }

}
