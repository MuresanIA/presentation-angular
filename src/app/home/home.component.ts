import { Component } from '@angular/core';
import LargeComponent from '../defer/large/large.component';
import { InitialContentComponent } from '../defer/initial-content/initial-content.component';
import { VeryLargeComponentComponent } from '../defer/very-large-component/very-large-component.component';
import { LoadingSpinnerComponent } from '../defer/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LargeComponent, InitialContentComponent, VeryLargeComponentComponent, LoadingSpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

export default HomeComponent;
