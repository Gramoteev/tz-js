import { Component, OnInit } from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.css'],
  providers: [CounterService]
})
export class ChildCounterComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }

}
