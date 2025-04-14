import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsCardsComponent } from './maps-cards.component';

describe('MapsCardsComponent', () => {
  let component: MapsCardsComponent;
  let fixture: ComponentFixture<MapsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
