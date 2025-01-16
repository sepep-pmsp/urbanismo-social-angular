import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorioPageComponent } from './territorio-page.component';

describe('TerritorioPageComponent', () => {
  let component: TerritorioPageComponent;
  let fixture: ComponentFixture<TerritorioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritorioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerritorioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
