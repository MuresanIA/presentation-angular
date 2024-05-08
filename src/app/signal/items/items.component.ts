import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { Item } from '../../shared/models/item';
import { ItemsService } from '../../shared/service/items.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export default class ItemsComponent implements OnInit {
  constructor() {
    console.log('from constructor', this.quantity());
    this.quantity.update((qty) => qty * 2);
  }

  private itemService = inject(ItemsService);
  destroyRef = inject(DestroyRef);

  protected itemsArray: Item[] = [];
  // using signal from async
  protected itemsSignal = this.itemService.itemsSignal;

  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5]);
  qtyEffect = () => console.log('Latest quantity:', this.quantity());

  data$ = interval(1000);
  items$ = this.itemService.items$;

  /**
   * Todo
   *
   * Signals effect
   * Signals changeDetection example
   * takeUntilDestroyed
   */

  ngOnInit(): void {
    this.data$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      console.log('data', data);
    });
  }

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);

    this.quantity.set(45);
  }
}
