import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Service } from '../../interface/service.model';
import { ServiceService } from '../../providers/service.service';

import { icon } from '../../icons';

@Component({
  selector: 'principal-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  icon = icon;

  facilities: Service[] = [];

  constructor(
    private serviceService: ServiceService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.facilities = this.serviceService.getServicesHome();
  }

  viewDetails(service: Service): void {
    this.router.navigate(['/service-detail', service.name]);
  }

}
