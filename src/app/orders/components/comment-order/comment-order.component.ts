import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-comment-order',
  templateUrl: './comment-order.component.html',
  styleUrls: ['./comment-order.component.scss']
})
export class CommentOrderComponent implements OnInit {
  // public myItem$ = new Subject<Order>();
  public comment = new FormControl('test');
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.os.myItem$.subscribe((item) => {
      this.comment.setValue(item.comment);
    });

    this.comment.valueChanges
    .pipe(
      debounceTime(400)
    )
    .subscribe((text) => {
      console.log(text);
      this.os.myItem$.value.comment = text;
      console.log(this.os.myItem$.value);
      this.os.update(this.os.myItem$.value).subscribe();
    });
  }

}
