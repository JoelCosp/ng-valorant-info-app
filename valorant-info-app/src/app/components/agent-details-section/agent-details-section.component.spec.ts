import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDetailsSectionComponent } from './agent-details-section.component';

describe('AgentDetailsSectionComponent', () => {
  let component: AgentDetailsSectionComponent;
  let fixture: ComponentFixture<AgentDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentDetailsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
