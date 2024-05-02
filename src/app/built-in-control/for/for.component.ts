import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss',
})
export default class ForComponent {
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

// export default ForComponent;
