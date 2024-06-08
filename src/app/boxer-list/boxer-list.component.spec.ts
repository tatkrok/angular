import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxerListComponent } from './boxer-list.component';

describe('BoxerListComponent', () => {
  let component: BoxerListComponent;
  let fixture: ComponentFixture<BoxerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
