import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Link } from 'src/app/core/interfaces/link';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection$: Observable<Order[]>;
  public headers: string[];
  public states = Object.values(StateOrder);
  public myLinks: Link[];
  public title: string;
  constructor(
    private os: OrdersService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
    this.myLinks = [
      {
        route: 'detail',
        label: 'Order details'
      },
      {
        route: 'comment',
        label: 'Order comment'
      }
    ];
    this.collection$ = this.os.collection;
    this.headers = [
      'Actions',
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  public popup(): void {
    console.log('open popup');
  }

  public changeState(item: Order, event): void {
    const state = event.target.value;
    this.os.changeState(item, state).subscribe((res) => {
      item.state = res.state;
      this.ref.detectChanges();
    });
  }

  public getDetails(item): void {
    this.os.myItem$.next(item);

  }

  public goToEdit(item): void {
    this.router.navigate(['orders', 'edit', item.id]);
  }

}
