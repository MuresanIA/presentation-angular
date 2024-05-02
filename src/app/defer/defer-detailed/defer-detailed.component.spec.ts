import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferDetailedComponent } from './defer-detailed.component';

describe('DeferDetailedComponent', () => {
  let component: DeferDetailedComponent;
  let fixture: ComponentFixture<DeferDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferDetailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
