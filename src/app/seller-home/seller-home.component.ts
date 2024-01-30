import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { player } from '../data-type';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})

export class SellerHomeComponent {

  playerList:undefined | player[];
  
  playerMessage:undefined|string;
  
  bcolor:string = "#0082e6";

  constructor(private activeRoute: ActivatedRoute, private product:ProductService, private manager: SellerService) {}

 
  ngOnInit():void {
    let teamName =this.activeRoute.snapshot.paramMap.get("teamName");
    console.warn(teamName);
    teamName && this.list(teamName);
    teamName && this.manager.getManagerById(teamName).subscribe((result)=>{
      if(result){
        this.bcolor = result.color;
      }
    })
  }

  deletePlayer(id:string, teamName:string){
    console.warn(id);
    this.product.deletePlayer(id).subscribe((result)=>{
      if(result){
        this.playerMessage = 'Product is deleted';
      }
    });
    setTimeout(() => {
      this.playerMessage = undefined;
    }, 3000);
    this.list(teamName);
  }

  list(teamName :string){
    this.product.playerListByTeam(teamName).subscribe((result)=>{
      if(result){
        console.warn(result);
        this.playerList=result;
      }
    })
  }

  
  

}
