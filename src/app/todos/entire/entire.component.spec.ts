import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntireComponent } from './entire.component';

describe('EntireComponent', () => {
  let component: EntireComponent;
  let fixture: ComponentFixture<EntireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
