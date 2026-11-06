import { Component, input, output } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle-list-response';

@Component({
  imports: [],
  selector: 'app-vehicle-item-component',
  styleUrl: './vehicle-item-component.css',
  templateUrl: './vehicle-item-component.html',
})
export class VehicleItemComponent {

  vehicle = input<Vehicle>();

  vehicleClicked = output<string>();
  id: string = '';

  getVehicleId() {
    this.id = this.vehicle()?.url.split("/")[5]!;
    return this.id;
  }

  emitCharacterClicked() {
    const id = this.getVehicleId();
    this.vehicleClicked.emit(id);
  }
}
