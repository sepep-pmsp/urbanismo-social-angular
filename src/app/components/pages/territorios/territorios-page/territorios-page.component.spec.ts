import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoriosPageComponent } from './territorios-page.component';

describe('TerritoriosPageComponent', () => {
  let component: TerritoriosPageComponent;
  let fixture: ComponentFixture<TerritoriosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritoriosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerritoriosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
