import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeformationComponent } from './themeformation.component';

describe('ThemeformationComponent', () => {
  let component: ThemeformationComponent;
  let fixture: ComponentFixture<ThemeformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
