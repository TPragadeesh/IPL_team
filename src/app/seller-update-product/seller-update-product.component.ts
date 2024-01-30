import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { player } from '../data-type';
@Component({
  selector: 'app-seller-update-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css'
})
export class SellerUpdateProductComponent {
  playerData:undefined|player;
  playerMessage:undefined|string;
  constructor(private route:ActivatedRoute, private product:ProductService) {}

  ngOnInit():void {
    let playerId = this.route.snapshot.paramMap.get('id');
    console.warn(playerId);
    playerId &&this.product.getPlayer(playerId).subscribe((data) => {
      console.warn(data);
      this.playerData = data;
    })
  }
  submit(data:player){
    console.warn(data);
    if(this.playerData){
      data.playerName = this.playerData.playerName;
    }
    this.product.updatePlayer(data).subscribe((result) => {
      this.playerMessage="Player has updated";
    })
    setTimeout(() => {
      this.playerMessage = undefined;
    }, 3000);
  }

}
