import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  img1="https://m.media-amazon.com/images/I/71sERFosMeL._SY425_.jpg";
  // title1="Book1";
  img2="https://m.media-amazon.com/images/I/51xwFZin4pL._SY425_.jpg";
  // title2="Book2";
  img3="https://m.media-amazon.com/images/I/61zU3jQhlCL._SX342_SY445_.jpg";
  // title3="Book3";
  c=0;
 incr(){
this.c++;
 }
 decr(){
  this.c--;
 }
 
}
