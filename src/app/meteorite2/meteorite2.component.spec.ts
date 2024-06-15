import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meteorite2Component } from './meteorite2.component';

describe('Meteorite2Component', () => {
  let component: Meteorite2Component;
  let fixture: ComponentFixture<Meteorite2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Meteorite2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Meteorite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
