import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../../shared/models/item';
import { ItemsService } from '../../shared/service/items.service';

export const newResolver: ResolveFn<Observable<Item[]>> = (route, state) => {
  console.log('new data resolver');
  return inject(ItemsService).getItems();
};
