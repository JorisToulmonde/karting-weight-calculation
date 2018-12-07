import { Injectable } from '@angular/core';
import {Driver} from './driver';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  driverNumber: number;
  kartWeight: number;
  weightGoal: number;

  drivers: Driver[];

  constructor() { }

  setDriverNumber(driverNumber: number): void {
    this.driverNumber = driverNumber;
  }

  getDriverNumber(): number {
    return this.driverNumber;
  }

  setKartWeight(kartWeight: number): void {
    this.kartWeight = kartWeight;
  }

  getKartWeight(): number {
    return this.kartWeight;
  }

  setWeightGoal(weightGoal: number): void {
    this.weightGoal = weightGoal;
  }

  getWeightGoal(): number {
    return this.weightGoal;
  }

  setDrivers(drivers: Driver[]): void {
   this.drivers = drivers;
  }

  getDrivers(): Observable<Driver[]> {
    return of(this.drivers);
  }

  initDrivers(): void {
    this.drivers = new Array<Driver>();
    for (let i = 0; i < this.driverNumber; i++) {
      this.drivers.push(new Driver());
    }
  }
}
