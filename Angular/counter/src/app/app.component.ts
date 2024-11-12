import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter';
  count:number=0
  isDisabled=false;
  isDisabled1=false
    isEven="Even"
  isEven1=true
    checkoddandeven(){
      if(this.count%2==1)
      {
        this.isEven="odd";
        this.isEven1=false;
      }
      else{
        this.isEven="Even";
        this.isEven1=true;
      }
    }

  incr(){
    if(this.count>=20)
    {
      this.isDisabled=true

    }
    else{
      this.count++;

    }
    this.checkoddandeven();
  }
  
  deccr(){
    if(this.count<=0)
    {
      this.isDisabled1=true

    }
  
    else{
      this.count--;

    }
    
  }
  reset(){
    this.count=0;
  }
}
