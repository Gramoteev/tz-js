import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements  OnChanges {
  @Input() parent?: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.hasOwnProperty('parent') && !changes['parent'].firstChange) {
        alert('make ajax request');
      }
  }

}
