import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptesFormulariComponent } from './receptes-formulari.component';

describe('ReceptesFormulariComponent', () => {
  let component: ReceptesFormulariComponent;
  let fixture: ComponentFixture<ReceptesFormulariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptesFormulariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptesFormulariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
