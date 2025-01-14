import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernancaComponent } from './governanca.component';

describe('GovernancaComponent', () => {
  let component: GovernancaComponent;
  let fixture: ComponentFixture<GovernancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
