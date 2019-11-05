import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcurtionsComponent } from './excurtions.component';

describe('ExcurtionsComponent', () => {
  let component: ExcurtionsComponent;
  let fixture: ComponentFixture<ExcurtionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcurtionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcurtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
