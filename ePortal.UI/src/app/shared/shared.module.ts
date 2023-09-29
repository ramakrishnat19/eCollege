import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule, DashboardModule
  ],
  exports:[
    HeaderComponent, SidebarComponent, FooterComponent
  ]
})
export class SharedModule { }
