import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMasterComponent } from './logo-master.component';

describe('LogoMasterComponent', () => {
  let component: LogoMasterComponent;
  let fixture: ComponentFixture<LogoMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
