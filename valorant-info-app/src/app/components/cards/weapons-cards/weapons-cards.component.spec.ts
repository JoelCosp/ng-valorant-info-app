import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsCardsComponent } from './weapons-cards.component';

describe('WeaponsCardsComponent', () => {
  let component: WeaponsCardsComponent;
  let fixture: ComponentFixture<WeaponsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
