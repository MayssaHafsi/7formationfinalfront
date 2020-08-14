import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrireformationComponent } from './inscrireformation.component';

describe('InscrireformationComponent', () => {
  let component: InscrireformationComponent;
  let fixture: ComponentFixture<InscrireformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscrireformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrireformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
