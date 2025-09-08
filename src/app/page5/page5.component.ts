import { Component } from '@angular/core';

@Component({
  selector: 'app-page5',
  standalone: false,
  templateUrl: './page5.component.html',
  styleUrl: './page5.component.css'
})
export class Page5Component {
    output01:string = '0'
    operation:string = ''
    num1: number = 0;
    num2: number = 0;

  click_number(num: string){
    this.output01 += num
    this.output01 = Number(this.output01).toString();
  }

  click_clear(){
    this.output01 = '0'
  }

  click_operation(op: string){
    this.operation = op
   // alert(this.operation)
   this.num1 = Number(this.output01)
   this.output01 = ''
  }

  click_ans(){
    this.num2 = Number(this.output01)
    if (this.operation == '+') {
      this.output01 = (this.num1 + this.num2).toString()
    } else if (this.operation == '-') {
      this.output01 = (this.num1 - this.num2).toString()
    } else if (this.operation == 'x') {
      this.output01 = (this.num1 * this.num2).toString()
    } else if (this.operation == '÷') {
      this.output01 = (this.num1 / this.num2).toString()
    }
  }

  click_dot() {
    this.output01 += '.'
  }
}