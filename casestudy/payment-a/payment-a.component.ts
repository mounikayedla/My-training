import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-a',
  templateUrl: './payment-a.component.html',
  styleUrls: ['./payment-a.component.css']
})
export class PaymentAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveit(){

    window.open('/success');
    }
}
