import { Component, OnInit } from '@angular/core';
import {CalculatorServiceService} from '../calculator-service.service';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styleUrls: ['./generalinfo.component.css']
})
export class GeneralinfoComponent implements OnInit {

  driverNumber: number;
  kartWeight: number;
  weightGoal: number;

  constructor(private calculatorService: CalculatorServiceService) { }

  ngOnInit() {
    this.kartWeight = this.calculatorService.getKartWeight();
    this.weightGoal = this.calculatorService.getWeightGoal();
  }

  changementDriverNumber(): void {
    this.calculatorService.setDriverNumber(this.driverNumber);
  }

}
