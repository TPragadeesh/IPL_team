import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { manager, player } from '../data-type';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';
import { SellerService } from '../services/seller.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  managers:undefined|manager[];

  expensivePlayers:undefined|player[];
  
  constructor(private player: ProductService, private manager : SellerService) {}

  ngOnInit(): void {
    this.manager.getManager().subscribe((data) => {
      this.managers = data;
    })
    this.player.expensivePlayers().subscribe((data)=>{
      this.expensivePlayers=data;
    })
  }
}
