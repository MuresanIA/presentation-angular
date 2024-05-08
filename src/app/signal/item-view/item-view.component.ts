import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  NgZone,
  OnInit,
  signal,
} from '@angular/core';
import { Item } from '../../shared/models/item';

@Component({
  selector: 'app-item-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-view.component.html',
  styleUrl: './item-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemViewComponent implements OnInit {
  item = input.required<Item>();
  public changeDetectionRef = inject(ChangeDetectorRef);
  // updatedPrice = signal<number>(10);
  updatedPrice = 10;

  ngOnInit(): void {
    setInterval(() => {
      this.updatePrice();
    }, 1000);
  }

  updatePrice() {
    if (this.item()) {
      // this.updatedPrice.update(() =>
      //   Math.floor(Math.random() * this.item()?.price)
      // );
      // console.log(this.updatedPrice());

      this.updatedPrice = Math.floor(Math.random() * this.item()?.price);
      console.log('updated price', this.updatedPrice);
      this.changeDetectionRef.markForCheck();
    }
  }
}
