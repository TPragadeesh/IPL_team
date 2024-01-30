import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { player } from '../data-type';
import { CommonModule } from '@angular/common';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

    playerData:undefined|player;
   

    constructor(private activeRoute: ActivatedRoute, private product:ProductService) {}

    ngOnInit(): void {
      let playerId = this.activeRoute.snapshot.paramMap.get("id");
      console.warn(playerId);
      playerId && this.product.getPlayer(playerId).subscribe((result) => {
        console.warn(result);
        this.playerData = result;
      })
      
    }

    
}
