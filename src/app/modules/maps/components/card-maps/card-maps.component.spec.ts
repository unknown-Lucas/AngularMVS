import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMapsComponent } from './card-maps.component';

describe('CardMapsComponent', () => {
  let component: CardMapsComponent;
  let fixture: ComponentFixture<CardMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMapsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
