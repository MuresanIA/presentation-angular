import { Component } from '@angular/core';
import { InitialContentComponent } from '../initial-content/initial-content.component';
import LargeComponent from '../large/large.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { AllUsersComponent } from './all-users/all-users.component';

@Component({
  selector: 'app-defer-detailed',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    LargeComponent,
    InitialContentComponent,
    AllUsersComponent,
  ],
  templateUrl: './defer-detailed.component.html',
  styleUrl: './defer-detailed.component.scss',
})
export  class DeferDetailedComponent {}

export default DeferDetailedComponent;
