import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolinearrayComponent } from './gasolinearray.component';

describe('GasolinearrayComponent', () => {
  let component: GasolinearrayComponent;
  let fixture: ComponentFixture<GasolinearrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasolinearrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasolinearrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
