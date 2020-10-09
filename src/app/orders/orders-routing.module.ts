import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentOrderComponent } from './components/comment-order/comment-order.component';
import { DetailOrderComponent } from './components/detail-order/detail-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';


const routes: Routes = [
  {
    path: '',
    component: PageListOrdersComponent,
    children: [
      { path: '', redirectTo: 'detail', pathMatch: 'full' },
      { path: 'detail', component: DetailOrderComponent },
      { path: 'comment', component: CommentOrderComponent },
    ],
    data: {title: 'Orders'}
  },
  { path: 'add', component: PageAddOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
