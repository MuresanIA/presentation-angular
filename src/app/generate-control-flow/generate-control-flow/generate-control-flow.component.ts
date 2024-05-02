import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generate-control-flow.component.html',
  styleUrl: './generate-control-flow.component.scss',
})
export class GenerateControlFlowComponent {
  itemForSwitch = 'ItemOneForSwitch';
  descItemOneForSwitch = 'ItemOneForSwtich description';
  descItemTwoForSwitch = 'ItemTwoForSwitch description';
  descItemThreeForSwitch = 'ItemThreeForSwitch description';

  itemForIf = 'ItemOne';
  descItemOneForIf = 'ItemOne description';
  descItemTwoForIf = 'ItemTwo description';
  descItemThreeForIf = 'ItemThree description';

  setItemsForIf(itemForIf: 'ItemOneForIf' | 'ItemTwoForIf' | 'ItemThreeForIf') {
    this.itemForIf = itemForIf;
  }

  setItemsForSwitch(
    itemForSwitch:
      | 'ItemOneForSwitch'
      | 'ItemTwoForSwitch'
      | 'ItemThreeForSwitch'
      | 'Default'
  ) {
    this.itemForSwitch = itemForSwitch;
  }

  items: string[] = [];

  generateItems() {
    this.items = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
    ];
  }

  removeItems() {
    this.items = [];
  }
}

export default GenerateControlFlowComponent;
