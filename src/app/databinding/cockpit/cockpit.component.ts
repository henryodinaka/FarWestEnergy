import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serviceCreated = new EventEmitter<{serviceName: string, serviceContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serviceName: string, serviceContent: string}>();
  // newServiceName = '';
  // newServiceContent = '';
  @ViewChild('serviceContentInput') serviceContentInput: ElementRef;
  onAddServer(nameInput: HTMLInputElement) {
    // this.serviceCreated.emit({ serviceName: this.newServiceName, serviceContent: this.newServiceContent});
    this.serviceCreated.emit({ serviceName: nameInput.value, serviceContent: this.serviceContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.bluePrintCreated.emit({ serviceName: this.newServiceName, serviceContent: this.newServiceContent});
    this.bluePrintCreated.emit({ serviceName: nameInput.value, serviceContent: this.serviceContentInput.nativeElement.value});
  }
  constructor() { }

  ngOnInit() {
  }

}
