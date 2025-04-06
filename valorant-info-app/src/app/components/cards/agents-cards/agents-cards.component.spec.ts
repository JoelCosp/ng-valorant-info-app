import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsCardsComponent } from './agents-cards.component';

describe('AgentsCardsComponent', () => {
  let component: AgentsCardsComponent;
  let fixture: ComponentFixture<AgentsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
