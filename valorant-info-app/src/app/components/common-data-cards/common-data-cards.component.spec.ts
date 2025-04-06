import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDataCardsComponent } from './common-data-cards.component';

describe('CommonDataCardsComponent', () => {
  let component: CommonDataCardsComponent;
  let fixture: ComponentFixture<CommonDataCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonDataCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonDataCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
