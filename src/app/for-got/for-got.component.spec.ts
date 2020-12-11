import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForGotComponent } from './for-got.component';

describe('ForGotComponent', () => {
  let component: ForGotComponent;
  let fixture: ComponentFixture<ForGotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForGotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForGotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
