import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.css']
})
export class CashRegisterComponent implements OnInit {
  entryCost: number;
  exhibitionCost: number;
  entryCount: number;
  exhibitionCount: number;
  amountTendered: number;

  constructor() {    
  }

  ngOnInit() {
    this.reset();
  }

  entryTotal() : number {
    return this.entryCount * this.entryCost;
  }

  exhibitionTotal() : number {
    return this.exhibitionCount * this.exhibitionCost;
  }

  totalDue() : number {
    return this.entryTotal() + this.exhibitionTotal();
  }

  changeDue() : number {
    return this.amountTendered - this.totalDue();
  }

  incrementEntryCount(value: number) : void {
    var newCount = this.entryCount + value;
    if (newCount < 1) {
      return;
    }

    this.entryCount = newCount;
  }

  incrementExhibitionCount(value: number) : void {
    var newCount = this.exhibitionCount + value;
    if (newCount < 0) {
      return;
    }

    this.exhibitionCount = newCount;
  }

  reset() {
    this.entryCount = 1;
    this.entryCost = 35;
    this.exhibitionCount = 0;
    this.exhibitionCost = 4;
    this.amountTendered = null;
  }

}
