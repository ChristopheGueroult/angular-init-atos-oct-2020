var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/login","pathMatch":"full"},{"path":"orders","loadChildren":"./orders/orders.module#OrdersModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/orders/orders-routing.module.ts","module":"OrdersRoutingModule","children":[{"path":"","component":"PageListOrdersComponent","children":[{"path":"","redirectTo":"detail","pathMatch":"full"},{"path":"detail","component":"DetailOrderComponent"},{"path":"comment","component":"CommentOrderComponent"}],"data":{"title":"Orders"}},{"path":"add","component":"PageAddOrderComponent"}],"kind":"module"}],"module":"OrdersModule"}]},{"path":"clients","loadChildren":"./clients/clients.module#ClientsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/clients/clients-routing.module.ts","module":"ClientsRoutingModule","children":[{"path":"","component":"PageListClientsComponent"},{"path":"add","component":"PageAddClientComponent"}],"kind":"module"}],"module":"ClientsModule"}]},{"path":"**","loadChildren":"./page-not-found/page-not-found.module#PageNotFoundModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/page-not-found/page-not-found-routing.module.ts","module":"PageNotFoundRoutingModule","children":[{"path":"","component":"PageNotFoundComponent"}],"kind":"module"}],"module":"PageNotFoundModule"}]}],"kind":"module"}]}
