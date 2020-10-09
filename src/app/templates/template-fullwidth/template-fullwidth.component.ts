import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-template-fullwidth',
  templateUrl: './template-fullwidth.component.html',
  styleUrls: ['./template-fullwidth.component.scss']
})
export class TemplateFullwidthComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() color2: boolean;
  constructor() {

  }


  ngOnInit(): void {
  }

}
