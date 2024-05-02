import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss',
})
export class IfComponent {
  item = 'ItemOne';
  descItemOne = 'ItemOne data';
  descItemTwo = 'ItemTwo data';
  descItemThree = 'ItemThree data';

  setItems(item: 'ItemOne' | 'ItemTwo' | 'ItemThree') {
    this.item = item;
  }
}

export default IfComponent;
