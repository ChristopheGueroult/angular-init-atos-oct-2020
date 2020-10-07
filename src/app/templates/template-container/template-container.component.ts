import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
