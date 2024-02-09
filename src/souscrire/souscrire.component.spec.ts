import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscrireComponent } from './souscrire.component';

describe('SouscrireComponent', () => {
  let component: SouscrireComponent;
  let fixture: ComponentFixture<SouscrireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SouscrireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SouscrireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
