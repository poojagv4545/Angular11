import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TwoWay';
//   value1:any;
//   txt2:any;
//   myfun()
//   {
//     const el=document.getElementById("txt1") as HTMLInputElement;
// this.value1=el.value;
// // alert(this.value1)
//   }
em1!:string;
n1!:number;
clicky(){
  alert(`sucessfully logined \n ${this.em1} \n ${this.n1}`)
}
}
