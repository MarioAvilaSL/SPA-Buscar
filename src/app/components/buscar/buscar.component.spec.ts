import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarComponent } from './buscar.component';

describe('BuscadorComponent', () => {
  let component: BuscarComponent;
  let fixture: ComponentFixture<BuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
