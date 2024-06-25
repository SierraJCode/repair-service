import { Component, OnInit } from '@angular/core';
import { Facility } from '../../interface/Facility';
import { ActivatedRoute } from '@angular/router';
import { RepairService } from '../../providers/repair.service';

@Component({
  selector: 'app-show-repair',
  templateUrl: './show-repair.component.html',
  styleUrl: './show-repair.component.css'
})
export class ShowRepairComponent implements OnInit{
  facilities: Facility[] = [];

  constructor(
    private route: ActivatedRoute,
    private repairService: RepairService
  ){}

  ngOnInit(): void {
    this.facilities = this.repairService.getFacilities();
  }

}
