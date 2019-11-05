import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestersWeddingsComponent } from './westers-weddings.component';

describe('WestersWeddingsComponent', () => {
  let component: WestersWeddingsComponent;
  let fixture: ComponentFixture<WestersWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestersWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestersWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
