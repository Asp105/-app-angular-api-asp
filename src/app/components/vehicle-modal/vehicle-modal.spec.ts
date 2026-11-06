import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleModal } from './vehicle-modal';

describe('VehicleModal', () => {
  let component: VehicleModal;
  let fixture: ComponentFixture<VehicleModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleModal],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
