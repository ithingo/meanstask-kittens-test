import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittensFormComponent } from './kittens-form.component';

describe('KittensFormComponent', () => {
  let component: KittensFormComponent;
  let fixture: ComponentFixture<KittensFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittensFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittensFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
