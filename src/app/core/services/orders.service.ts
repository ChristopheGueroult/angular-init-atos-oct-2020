import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { StateOrder } from '../enums/state-order.enum';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private collection$: Observable<Order[]>;
  private urlApi = environment.urlApi;
  public myItem$ = new BehaviorSubject<Order>(null);
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      tap((data) => {
        this.myItem$.next(data[0]);
      })
    );
  }

  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  /**
   *
   * @example
   * this.ordersService.update(item).subscribe(
   *  (res) => {//res API}
   * );
   *
   * @description - This function allows you to modify a service in the orders collection
   * @param item - Object sent to the API which must be of type Order
   * @return - use HttpClient and return an Observable to subscribe to retrieve the response from the API
   */
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // delete

  // get item by id
  public getItemById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
