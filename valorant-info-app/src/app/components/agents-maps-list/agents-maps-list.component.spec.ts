import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsMapsListComponent } from './agents-maps-list.component';

describe('AgentsMapsListComponent', () => {
  let component: AgentsMapsListComponent;
  let fixture: ComponentFixture<AgentsMapsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentsMapsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsMapsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
