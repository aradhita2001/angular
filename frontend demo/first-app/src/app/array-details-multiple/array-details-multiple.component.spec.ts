import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDetailsMultipleComponent } from './array-details-multiple.component';

describe('ArrayDetailsMultipleComponent', () => {
  let component: ArrayDetailsMultipleComponent;
  let fixture: ComponentFixture<ArrayDetailsMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayDetailsMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayDetailsMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
