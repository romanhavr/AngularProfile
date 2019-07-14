import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyProfileComponent } from './technology-profile.component';

describe('TechnologyProfileComponent', () => {
  let component: TechnologyProfileComponent;
  let fixture: ComponentFixture<TechnologyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
