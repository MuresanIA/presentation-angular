import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryLargeComponentComponent } from './very-large-component.component';

describe('VeryLargeComponentComponent', () => {
  let component: VeryLargeComponentComponent;
  let fixture: ComponentFixture<VeryLargeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeryLargeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeryLargeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
