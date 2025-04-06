import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponDataCardsComponent } from './weapon-data-cards.component';

describe('WeaponDataCardsComponent', () => {
  let component: WeaponDataCardsComponent;
  let fixture: ComponentFixture<WeaponDataCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponDataCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponDataCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
