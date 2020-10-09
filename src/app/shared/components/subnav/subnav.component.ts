import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/core/interfaces/link';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss']
})
export class SubnavComponent implements OnInit {
  @Input() links: Link[];
  constructor() { }

  ngOnInit(): void {
  }

}
