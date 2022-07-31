import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snd3Component } from './snd3.component';

describe('Snd3Component', () => {
  let component: Snd3Component;
  let fixture: ComponentFixture<Snd3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snd3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Snd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
