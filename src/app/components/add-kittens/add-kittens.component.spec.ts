import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKittensComponent } from './add-kittens.component';

describe('AddKittensComponent', () => {
  let component: AddKittensComponent;
  let fixture: ComponentFixture<AddKittensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKittensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
