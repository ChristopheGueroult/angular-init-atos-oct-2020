import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss']
})
export class TableauLightComponent implements OnInit {
  @Input() headers: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
