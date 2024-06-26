import {
  ChangeDetectorRef,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { Item } from '../../shared/models/item';
import { ItemsService } from '../../shared/service/items.service';
import { FormsModule } from '@angular/forms';
import { ItemViewComponent } from '../item-view/item-view.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemViewComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export default class ItemsComponent implements OnInit {
  private itemService = inject(ItemsService);
  destroyRef = inject(DestroyRef);
  public changeDetectionRef = inject(ChangeDetectorRef);

  constructor() {
    console.log('signal value from constructor', this.quantity());
    // this.quantity.update((qty) => qty * 2);
  }

  quantity = signal<number>(1);
  qtyAvailable = signal<number[]>([1, 2, 3, 4, 5]);

  qtyEffect = effect(() =>
    console.log('signal value from effect:', this.quantity())
  );

  selectedItemView!: Item;
  selectedItemViewSignal = signal<Item>(this.selectedItemView);

  selectedItem = signal<Item>({
    id: 14,
    name: 'Signal Item',
    description: 'some description',
    price: 22,
  });
   computedPrice = computed(() => this.selectedItem().price * this.quantity());

  protected itemsArray: Item[] = [];
  // using signal from async
  protected itemsSignal = this.itemService.itemsSignal;
  protected itemObservable$ = toObservable(this.itemService.itemsSignal).pipe(
    takeUntilDestroyed(this.destroyRef)
  );

  data$ = interval(1000);
  items$ = this.itemService.items$;


  ngOnInit(): void {
    console.log('signal value from OnInit', this.quantity());
    // this.changePriceValue();

    // this.data$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
    //   console.log('data', data);
    // });
  }

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
    // this.quantity.set(42);
    // this.quantity.set(2);
    // this.quantity.set(33);
    // this.quantity.set(44);
    // this.quantity.set(11);
  }

  selectItem(item: Item) {
    this.selectedItemViewSignal.set(item);
  }
}
