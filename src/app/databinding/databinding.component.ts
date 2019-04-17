import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  serviceElements = [{type: 'service', name: 'TestService', content: 'Just a test!'}];


  constructor() { }

  ngOnInit() {
  }

  onServiceAdded(serviceData: {serviceName: string, serviceContent: string}) {
    this.serviceElements.push({
      type: 'service',
      name: serviceData.serviceName,
      content: serviceData.serviceContent
    });
  }

  onBlueprintAdded(bluePrintData: {serviceName: string, serviceContent: string}) {
    this.serviceElements.push({
      type: 'blueprint',
      name: bluePrintData.serviceName,
      content: bluePrintData.serviceContent
    });
  }
}
