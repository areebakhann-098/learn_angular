import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { BodyComponent } from './body/body.component';
import { CalenderComponent } from './calender/calender.component';
import { CustomersComponent } from './customers/customers.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, ClientComponent, BodyComponent, CalenderComponent, CustomersComponent, MarketingComponent, FooterTopComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}


