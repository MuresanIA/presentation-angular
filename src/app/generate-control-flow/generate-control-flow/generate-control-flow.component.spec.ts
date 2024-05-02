import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateControlFlowComponent } from './generate-control-flow.component';

describe('GenerateControlFlowComponent', () => {
  let component: GenerateControlFlowComponent;
  let fixture: ComponentFixture<GenerateControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateControlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
