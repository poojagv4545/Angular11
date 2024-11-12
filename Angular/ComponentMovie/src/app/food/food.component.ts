import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
@Input() img!:string;
@Input() title!:string;
count:number=0;
incr(){
this.count++;
}
decr(){
this.count--;
}
submit(){
alert(`Sucessfully order Food \n ${this.count} Plates`)
}
}
