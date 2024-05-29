import { Component, NgModule } from '@angular/core';
import { ServicesService } from '../services.service';

// export interface itemInterface{
//   text: string;
//   Price:string;
//   img: string;
// }

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [ ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  constructor(public storeservice:ServicesService){}

  public item:any={}

  ngOnInit(){
    this.storeservice.sendItem.subscribe(data=>{
      //console.log(data);
      this.item = data
      
    })
  }
}
