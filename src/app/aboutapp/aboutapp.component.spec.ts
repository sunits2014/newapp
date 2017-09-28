import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutappComponent } from './aboutapp.component';

describe('AboutappComponent', () => {
  let component: AboutappComponent;
  let fixture: ComponentFixture<AboutappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
