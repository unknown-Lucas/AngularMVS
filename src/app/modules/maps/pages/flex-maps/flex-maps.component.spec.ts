import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexMapsComponent } from './flex-maps.component';

describe('FlexMapsComponent', () => {
  let component: FlexMapsComponent;
  let fixture: ComponentFixture<FlexMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexMapsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlexMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
