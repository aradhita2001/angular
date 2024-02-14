import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamReceiverComponent } from './query-param-receiver.component';

describe('QueryParamReceiverComponent', () => {
  let component: QueryParamReceiverComponent;
  let fixture: ComponentFixture<QueryParamReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryParamReceiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryParamReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
