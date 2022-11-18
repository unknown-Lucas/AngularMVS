import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexCharactersComponent } from './flex-characters.component';

describe('FlexCharactersComponent', () => {
  let component: FlexCharactersComponent;
  let fixture: ComponentFixture<FlexCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexCharactersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlexCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
