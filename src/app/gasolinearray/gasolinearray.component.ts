import { Component, OnInit } from '@angular/core';
import {CalculatorServiceService} from '../calculator-service.service';
import {Driver} from '../driver';
import {Leste} from '../leste';

@Component({
  selector: 'app-gasolinearray',
  templateUrl: './gasolinearray.component.html',
  styleUrls: ['./gasolinearray.component.css']
})
export class GasolinearrayComponent implements OnInit {

  kartWeight: number;
  weightGoal: number;
  driverNumber: number;
  drivers: Driver[];

  leste = new Array<Leste>();

  constructor(private calculatorService: CalculatorServiceService) { }

  ngOnInit() {
    this.kartWeight = this.calculatorService.getKartWeight();
    this.weightGoal = this.calculatorService.getWeightGoal();
    this.driverNumber = this.calculatorService.getDriverNumber();
    this.drivers = this.calculatorService.drivers;
    this.calculLeste();
  }

  calculLeste(): void {
    for (let i = 0; i < this.drivers.length; i++) {
      const leste = new Leste();
      const driver = this.drivers[i];
      leste.driver = driver;
      const fullGazoline = Number(this.weightGoal) - (Number(driver.weight) + Number(this.kartWeight) + 7);
      const halfGazoline = Number(this.weightGoal) - (Number(driver.weight) + Number(this.kartWeight) + 3.5);
      const emptyGazoline = Number(this.weightGoal) - (Number(driver.weight) + Number(this.kartWeight));
      if (fullGazoline <= 0) {
        leste.fullGazoline = 0;
      } else {
        leste.fullGazoline = fullGazoline;
      }
      if (halfGazoline <= 0) {
        leste.halfGazoline = 0;
      } else {
        leste.halfGazoline = halfGazoline;
      }
      if (emptyGazoline <= 0) {
        leste.emptyGazoline = 0;
      } else {
        leste.emptyGazoline = emptyGazoline;
      }
      this.leste.push(leste);
    }
  }

}
