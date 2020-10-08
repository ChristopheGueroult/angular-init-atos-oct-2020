import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public headers: string[];
  public states = Object.values(StateClient);
  constructor(
    private cs: ClientsService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.collection$ = this.cs.collection;
    this.headers = [
      'Non',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  public popup(): void {
    console.log('open popup');
  }

  public changeState(item: Client, event): void {
    const state = event.target.value;
    this.cs.changeState(item, state).subscribe((res) => {
      item.state = res.state;
      this.ref.detectChanges();
    });
  }

}
