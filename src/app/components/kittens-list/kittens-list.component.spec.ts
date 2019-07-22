import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittensListComponent } from './kittens-list.component';

describe('KittensListComponent', () => {
  let component: KittensListComponent;
  let fixture: ComponentFixture<KittensListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittensListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
