import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleListComponent } from './triangle-list.component';

describe('TriangleListComponent', () => {
  let component: TriangleListComponent;
  let fixture: ComponentFixture<TriangleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TriangleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriangleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
