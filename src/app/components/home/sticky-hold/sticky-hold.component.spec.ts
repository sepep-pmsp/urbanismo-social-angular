import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyHoldComponent } from './sticky-hold.component';

describe('StickyHoldComponent', () => {
  let component: StickyHoldComponent;
  let fixture: ComponentFixture<StickyHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyHoldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
