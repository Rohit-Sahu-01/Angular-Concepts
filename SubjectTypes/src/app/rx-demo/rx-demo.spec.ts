import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxDemo } from './rx-demo';

describe('RxDemo', () => {
  let component: RxDemo;
  let fixture: ComponentFixture<RxDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
