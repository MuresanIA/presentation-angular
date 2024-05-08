import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../../shared/models/item';
import { ItemsService } from '../../shared/service/items.service';

@Injectable({ providedIn: 'root' })
export class OldResolver implements Resolve<Item[]> {
  constructor(private itemService: ItemsService) {}
  resolve(): Observable<Item[]> {
    return this.itemService.getItems();
  }
}
