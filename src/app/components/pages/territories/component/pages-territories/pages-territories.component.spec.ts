import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTerritoriesComponent } from './pages-territories.component';

describe('PagesTerritoriesComponent', () => {
  let component: PagesTerritoriesComponent;
  let fixture: ComponentFixture<PagesTerritoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesTerritoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesTerritoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
