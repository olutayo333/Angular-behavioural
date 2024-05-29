import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SecondComponent } from '../second/second.component';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [ CommonModule, SecondComponent ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  public img1 = "../assets/images/categorylink.png" ;
  public img2 = "../assets/images/cpap mask.png" ;
  public img3 = "../assets/images/cpap supplies.png" ;
  public img4 = "../assets/images/craplink.png" ;
  public img5 = "../assets/images/Frame9.png" ;
  public img6 = "../assets/images/Frame1.434b9b65158973f690ad (1).png" ;
  public img7 = "../assets/images/Frame2.72d71c69db77031b9c89.png" ;
  public img8 = "../assets/images/Frame3.bb4b649204715da9f628.png" ;
  public img9 = "../assets/images/Frame4.e7122fd27f9b6d5d9de2.png" ;
  public img10 = "../assets/images/humidifier.png" ;
  public img11 = "../assets/images/Imagesfive.9721d92beb50cf432e80 (1).png" ;
  public img12 = "../assets/images/oxygen.png" ;
 
  
    public generalArray  = [
    { id: 1, img: this.img1, text:"CPAP Machines", Price:"#6,000" }, { id: 2, img: this.img2, text:"CPAP Masks", Price:"#10,000" },
    { id: 3, img: this.img3, text:"CPAP Supllies", Price:"#3,000"}, { id: 4, img: this.img4, text:"Humidifiers & Parts",Price:"#10,000"},
    { id: 5, img: this.img5, text:"Oxygen & Supplies",Price:"#5,000" }, { id: 6, img: this.img6, text:"Category Link",Price:"#10,000"},
    { id:8, img:this.img8, text:'Catregi lind', Price:"#10,000"}, { id: 9, img: this.img9, text:"CPAP Machines", Price:"#6,000" },
    { id: 10, img: this.img10, text:"CPAP Supllies", Price:"#3,000"}, { id: 11, img: this.img11, text:"Humidifiers & Parts",Price:"#10,000"},
    { id: 12, img: this.img12, text:"Oxygen & Supplies",Price:"#5,000" }, 
  ]  ;

  constructor(public storeservice:ServicesService){}
  sendItemsDetails(item:object){
    this.storeservice.sendItem.next(item)
  }
}
