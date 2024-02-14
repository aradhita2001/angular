import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamCallerComponent } from './query-param-caller.component';

describe('QueryParamCallerComponent', () => {
  let component: QueryParamCallerComponent;
  let fixture: ComponentFixture<QueryParamCallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryParamCallerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryParamCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
