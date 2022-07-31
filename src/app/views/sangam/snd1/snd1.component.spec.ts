import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snd1Component } from './snd1.component';

describe('Snd1Component', () => {
  let component: Snd1Component;
  let fixture: ComponentFixture<Snd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snd1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Snd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
