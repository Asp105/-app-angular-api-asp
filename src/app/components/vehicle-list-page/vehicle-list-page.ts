import { Component, inject, input, OnInit, signal } from '@angular/core';
import { VehicleItemComponent } from '../vehicle-item-component/vehicle-item-component';
import { VehicleService } from '../../services/vehicle-service';
import { Vehicle } from '../../interfaces/vehicle-list-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleModal } from '../vehicle-modal/vehicle-modal';

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicle-list-page',
  styleUrl: './vehicle-list-page.css',
  templateUrl: './vehicle-list-page.html',
})
export class VehicleListPage implements OnInit{

  vehicleService = inject(VehicleService)
  vehicleList = signal<Vehicle[]>([]);
  private modalService = inject(NgbModal)

  ngOnInit(): void {
      
    this.vehicleService.getAll().subscribe(resp => {
      this.vehicleList.set(resp.results);
    });

  }

    openVehicleModal(id: string){
      this.vehicleService.getOne(id).subscribe(resp =>{
        const modalRef = this.modalService.open(VehicleModal);
        modalRef.componentInstance.vehicleDetail = resp;
      })
    }

}
