import {Component, Input, OnInit} from '@angular/core';
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
    console.log(this.calculatorService.getDriverNumber());
    this.calculatorService.initDrivers();
    this.calculatorService.getDrivers()
      .subscribe(drivers => this.drivers = drivers);
  }

  showList(): void {
    //Au moment du click sur appuyer
    this.drivers = this.calculatorService.drivers;
    this.showListBoolean = true;
  }

}
