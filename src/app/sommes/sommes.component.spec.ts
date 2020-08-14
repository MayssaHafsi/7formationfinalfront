import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SommesComponent } from './sommes.component';

describe('SommesComponent', () => {
  let component: SommesComponent;
  let fixture: ComponentFixture<SommesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SommesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
