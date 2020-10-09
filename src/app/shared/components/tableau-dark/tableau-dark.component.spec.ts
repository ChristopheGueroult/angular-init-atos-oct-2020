import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDarkComponent } from './tableau-dark.component';

describe('TableauDarkComponent', () => {
  let component: TableauDarkComponent;
  let fixture: ComponentFixture<TableauDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
