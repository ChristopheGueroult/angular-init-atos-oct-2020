import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentOrderComponent } from './comment-order.component';

describe('CommentOrderComponent', () => {
  let component: CommentOrderComponent;
  let fixture: ComponentFixture<CommentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
