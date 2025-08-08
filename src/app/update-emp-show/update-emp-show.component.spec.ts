import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpShowComponent } from './update-emp-show.component';

describe('UpdateEmpShowComponent', () => {
  let component: UpdateEmpShowComponent;
  let fixture: ComponentFixture<UpdateEmpShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
