import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allowNewServer = false;
newService = 'No service available';
serviceName = '';
serviceAdded = false;
services = ['TestService' , 'TestService 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
onAddService() {
    this.services.push(this.serviceName);
    this.newService = 'New Service has been added. Name is : ' + this.serviceName;
    this.serviceAdded = true;
}
onUpdateService(event: any) {
    this.serviceName = (<HTMLInputElement>event.target).value;
}
}
