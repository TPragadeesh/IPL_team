import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { player } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {
  
  addPlayerMessage:string|undefined;
  
  constructor(private product: ProductService){}

  submit(data:player){
    console.warn(data);
    if(localStorage.getItem("manager") ){
      let teamStore = localStorage.getItem("manager");
      if(teamStore){
        let teamData = JSON.parse(teamStore);
        console.warn(teamData);
        data.team = teamData.teamName;
      }
    }
    this.product.addPlayer(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.addPlayerMessage = "Player added successfully";
      }
    });

    setTimeout(() => {
      this.addPlayerMessage=undefined;
    }, 3000);
  
  }
}
