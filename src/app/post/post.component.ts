import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  ngOnInit(): void {}
  title = 'Ипотечный калькулятор';
  logo = '../18.png';
}
function calculator(): void {
  let sum: any, fee: any, percent: any, term: any, result: any;
  sum = document.getElementById('sum').nodeValue;
  sum = parseInt(sum);
  fee = document.getElementById('fee').nodeValue;
  fee = parseInt(fee);
  percent = document.getElementById('percent').nodeValue;
  percent = parseInt(percent);
  term = document.getElementById('term').nodeValue;
  term = parseInt(term);
  let creditAmount: number = sum - fee;
  let creditRate: number = percent / 100 / 12;
  let annuityPayment: number =
    (creditRate * Math.pow(1 + creditRate, term)) /
    (Math.pow(1 + creditRate, term) - 1);
  let monthlyLnstallment: number = annuityPayment * creditAmount;
  let overpayment: number = sum - monthlyLnstallment * percent;

  result =
    'Ежемесячный платеж' +
    ' ' +
    '=' +
    ' ' +
    monthlyLnstallment.toFixed(4) +
    ',' +
    ' ' +
    'a переплата' +
    ' ' +
    '=' +
    ' ' +
    Math.abs(+overpayment.toFixed(4));
  document.getElementById('monthlyLnstallment').innerHTML = result;
}
console.log(123);
