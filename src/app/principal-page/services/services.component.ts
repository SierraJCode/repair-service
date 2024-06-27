import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../interface/service.model';
import { ServiceService } from '../../providers/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  filteredServices: Service[] = [];
  marcas = ['Opel', 'Audi', 'BMW', 'Mercedes'];

  constructor(
    private serviceService: ServiceService, 
    private router: Router) { }

  ngOnInit(): void {
    this.services = this.serviceService.getServices();
    this.filteredServices = this.services;
  }

  filterByMarca(marca: string): void {
    this.filteredServices = marca ? this.serviceService.getServiceByMarca(marca) : this.services;
  }

  onFilterByMarca(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.filterByMarca(target.value);
    }
  }

  viewDetails(service: Service): void {
    this.router.navigate(['/service-detail', service.name]);
  }
}
