import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StateClient } from '../enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private collection$: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  get collection(): Observable<Client[]> {
    return this.collection$;
  }

  set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }

  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }

  // delete

  // get item by id
}
