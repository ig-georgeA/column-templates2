import { Component, OnInit } from '@angular/core';
import { EmployeesType } from '../models/northwind/employees';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-grid-with-templates',
  templateUrl: './grid-with-templates.component.html',
  styleUrls: ['./grid-with-templates.component.scss']
})
export class GridWithTemplatesComponent implements OnInit {
  public northwindEmployees!: EmployeesType[];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('EmployeesType').subscribe(data => this.northwindEmployees = data);
  }
}
