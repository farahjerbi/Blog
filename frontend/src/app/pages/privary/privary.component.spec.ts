import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivaryComponent } from './privary.component';

describe('PrivaryComponent', () => {
  let component: PrivaryComponent;
  let fixture: ComponentFixture<PrivaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivaryComponent]
    });
    fixture = TestBed.createComponent(PrivaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
