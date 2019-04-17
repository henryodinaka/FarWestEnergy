import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-service-element',
  templateUrl: './service-element.component.html',
  styleUrls: ['./service-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Can be None, Native
})
export class ServiceElementComponent implements OnInit {
@Input() element: { type: string, name: string, content: string };
  constructor() { }

  ngOnInit() {
  }

}
