import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Order } from 'src/app/core/models/order';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {
  public myItem$ = new Subject<Order>();
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.myItem$ = this.os.myItem$;
  }

}
