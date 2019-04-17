import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  // styleUrls: ['./services.component.css']
  styles: [`
    .available {
      color: white;
    }
  `]
})
export class ServicesComponent implements OnInit {
  serviceId = 10;
  serviceStatus = 'available';
  constructor() {
    this.serviceStatus = Math.random() > 0.5 ? 'available' : 'unavailable';
  }

  getServiceStatus() {
    return this.serviceStatus;
  }
  getColor() {
    return this.serviceStatus === 'available' ? 'green' : 'red';
  }
  ngOnInit() {
  }

}
