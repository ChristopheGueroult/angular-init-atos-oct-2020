import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public item$: Observable<Order>;
  constructor(
    private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.os.getItemById(id);
      })
    );
  }

  public edit(item: Order): void {
    this.os.update(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });
  }

}
