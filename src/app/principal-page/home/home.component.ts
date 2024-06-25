import { Component, OnInit } from '@angular/core';

import { icon } from '../../icons';
import { RepairService } from '../../providers/repair.service';
import { Facility } from '../../interface/Facility';

@Component({
  selector: 'principal-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  icon = icon;

  facilities: Facility[] = [];

  constructor(private repairService: RepairService){}

  ngOnInit(): void {
    this.facilities = this.repairService.getFacilities();
  }




}
