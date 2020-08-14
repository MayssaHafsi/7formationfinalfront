import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemedevisComponent } from './themedevis.component';

describe('ThemedevisComponent', () => {
  let component: ThemedevisComponent;
  let fixture: ComponentFixture<ThemedevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemedevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemedevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
