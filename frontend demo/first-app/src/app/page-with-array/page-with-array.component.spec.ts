import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithArrayComponent } from './page-with-array.component';

describe('PageWithArrayComponent', () => {
  let component: PageWithArrayComponent;
  let fixture: ComponentFixture<PageWithArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWithArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
