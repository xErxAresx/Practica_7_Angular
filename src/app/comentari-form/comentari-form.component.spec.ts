import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComentariFormComponent } from './comentari-form.component';

describe('ComentariFormComponent', () => {
  let component: ComentariFormComponent;
  let fixture: ComponentFixture<ComentariFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
