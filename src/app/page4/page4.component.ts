import { Component } from '@angular/core';

@Component({
  selector: 'app-page4',
  standalone: false,
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.css'
})
export class Page4Component {

  /*num1: number = 0;
  num2: number = 0;*/
 num1:string = ''
 num2:string = ''
 ans:string = ''

submit_click() {
  //alert(this.num1 + this.num2);
  if (this.num1 != '' && this.num2 != '') {
  this.ans = this.num1 + ' + ' + this.num2 + ' = ' + (this.num1 + this.num2);
  this.num1 = ''
  this.num2 = ''
} else {
  alert('กรอกตัวเลขด้วย')
}
}

reset_click(){
  this.num1 = ''
  this.num2 = ''
  this.ans = ''
}
}