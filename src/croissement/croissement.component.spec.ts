import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroissementComponent } from './croissement.component';

describe('CroissementComponent', () => {
  let component: CroissementComponent;
  let fixture: ComponentFixture<CroissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CroissementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CroissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
