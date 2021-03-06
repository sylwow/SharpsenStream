import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamInfoComponent } from './stream-info.component';

describe('StreamInfoComponent', () => {
  let component: StreamInfoComponent;
  let fixture: ComponentFixture<StreamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
