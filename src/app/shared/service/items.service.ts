import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private apiUrl = 'http://localhost:3000/items';
  private readonly http = inject(HttpClient);
  private items: Item[] = [];

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  items$ = this.http.get<Item[]>(this.apiUrl).pipe(
    tap((result) => (this.items = result)),
    catchError((err) => {
      console.error(err);
      return EMPTY;
    })
  );

  //turning async into signal
  itemsSignal = toSignal<Item[], Item[]>(this.items$, {
    initialValue: [],
  });

}
