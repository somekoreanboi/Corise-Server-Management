import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snd2Component } from './snd2.component';

describe('Snd2Component', () => {
  let component: Snd2Component;
  let fixture: ComponentFixture<Snd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snd2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Snd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
