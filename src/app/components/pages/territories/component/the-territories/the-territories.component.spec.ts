import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTerritoriesComponent } from './the-territories.component';

describe('TheTerritoriesComponent', () => {
  let component: TheTerritoriesComponent;
  let fixture: ComponentFixture<TheTerritoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheTerritoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheTerritoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
