import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPagesComponent } from './text-pages.component';

describe('TextPagesComponent', () => {
  let component: TextPagesComponent;
  let fixture: ComponentFixture<TextPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
