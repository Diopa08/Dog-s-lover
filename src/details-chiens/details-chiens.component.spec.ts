import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChiensComponent } from './details-chiens.component';

describe('DetailsChiensComponent', () => {
  let component: DetailsChiensComponent;
  let fixture: ComponentFixture<DetailsChiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsChiensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsChiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
