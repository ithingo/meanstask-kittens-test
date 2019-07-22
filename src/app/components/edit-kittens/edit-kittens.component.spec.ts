import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKittensComponent } from './edit-kittens.component';

describe('EditKittensComponent', () => {
  let component: EditKittensComponent;
  let fixture: ComponentFixture<EditKittensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKittensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
