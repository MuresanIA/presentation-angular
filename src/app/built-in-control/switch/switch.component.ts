import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent {
  item = 'ItemOne';
  descItemOne = 'ItemOne description';
  descItemTwo = 'ItemTwo description';
  descItemThree = 'ItemThree description';

  setItems(item: 'ItemOne' | 'ItemTwo' | 'ItemThree' | 'Default') {
    this.item = item;
  }
}

export default SwitchComponent;
