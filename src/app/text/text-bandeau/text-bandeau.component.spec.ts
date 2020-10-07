import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBandeauComponent } from './text-bandeau.component';

describe('TextBandeauComponent', () => {
  let component: TextBandeauComponent;
  let fixture: ComponentFixture<TextBandeauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBandeauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBandeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
