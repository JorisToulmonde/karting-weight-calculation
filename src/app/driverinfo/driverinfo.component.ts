import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Driver} from '../driver';
import {CalculatorServiceService} from '../calculator-service.service';

@Component({
  selector: 'app-driverinfo',
  templateUrl: './driverinfo.component.html',
  styleUrls: ['./driverinfo.component.css']
})
export class DriverinfoComponent implements OnInit {

  @Input() driverNumber: number;
  showListBoolean = false;

  drivers: Driver[];

  driversFromService: Driver[];

  constructor(private calculatorService: CalculatorServiceService) { }

  ngOnInit() {
    this.calculatorService.initDrivers();
    this.calculatorService.getDrivers()
      .subscribe(drivers => this.drivers = drivers);
  }

  showList(): void {
    //Au moment du click sur appuyer
    for (let i = 0; i < this.drivers.length; i++) {
      if (this.drivers[i].name == null || this.drivers[i].weight == null) {
        this.showListBoolean = false;
        return;
      }
    }
    this.drivers = this.calculatorService.drivers;
    this.showListBoolean = true;
  }

  modalClose(): void {
    this.showListBoolean = false;
  }

}
