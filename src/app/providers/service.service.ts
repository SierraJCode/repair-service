import { Injectable } from '@angular/core';
import { Service } from '../interface/service.model';
import { SERVICES } from '../data/data';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: Service[] = SERVICES;

  constructor() { }

  getServices(): Service[] {
    return this.services;
  }

  getServiceByMarca(marca: string): Service[] {
    return this.services.filter(service => service.marca === marca);
  }

  getServiceByName(name: string): Service | undefined {
    return this.services.find(service => service.name === name);
  }
}
