import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgcompComponent } from './svgcomp.component';

describe('SvgcompComponent', () => {
  let component: SvgcompComponent;
  let fixture: ComponentFixture<SvgcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
