import { Component, OnInit, Input, OnChanges } from '@angular/core';
/**
 * This is a page template where all page elements display on a full width container
 */
@Component({
  selector: 'app-template-fullwidth',
  templateUrl: './template-fullwidth.component.html',
  styleUrls: ['./template-fullwidth.component.scss']
})

export class TemplateFullwidthComponent implements OnInit {
  /**
   *  this is an optional title that appears at the top of the page
   */
  @Input() title: string;
  /**
   *  this is an optional subtitle that appears at the top of the page
   */
  @Input() subtitle: string;
  /**
   * this boolean allows you to apply color 2 to the page template and to certain elements instantiated in this page
   */
  @Input() color2: boolean;
  constructor() {

  }


  ngOnInit(): void {
  }

}
