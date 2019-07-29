import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisaComponent } from './divisa.component';

describe('DivisaComponent', () => {
  let component: DivisaComponent;
  let fixture: ComponentFixture<DivisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
