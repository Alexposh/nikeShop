import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStore } from './find-store';

describe('FindStore', () => {
  let component: FindStore;
  let fixture: ComponentFixture<FindStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
