import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Service } from '../../interface/service.model';
import { ServiceService } from '../../providers/service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;

  constructor(
    private route: ActivatedRoute, 
    private serviceService: ServiceService, 
    private router: Router) 
  { }

  ngOnInit(): void {
    const serviceName = this.route.snapshot.paramMap.get('name');
    this.service = this.serviceService.getServiceByName(serviceName!);
    console.log(this.service);
  }
  

  backToServices(): void {
    this.router.navigate(['/services']);
  }
}
