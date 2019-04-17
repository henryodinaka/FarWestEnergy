import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CockpitComponent } from './databinding/cockpit/cockpit.component';
import { ServiceElementComponent } from './databinding/service-element/service-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AboutComponent,
    ServicesComponent,
    DatabindingComponent,
    CockpitComponent,
    ServiceElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
