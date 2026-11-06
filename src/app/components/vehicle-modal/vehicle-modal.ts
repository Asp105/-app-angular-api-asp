import { Component, inject, input, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetailResponse } from '../../interfaces/vehicle-detail-response';

@Component({
  imports: [],
  selector: 'app-vehicle-modal',
  styleUrl: './vehicle-modal.css',
  templateUrl: './vehicle-modal.html',
})
export class VehicleModal {

  activeModal = inject(NgbActiveModal)

  @Input() vehicleDetail: VehicleDetailResponse | undefined
}
