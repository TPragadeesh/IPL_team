import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { player } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  menuType:string = "default";
  teamName:string = "";
  searchResult:undefined|player[];
  bcolor:string = "#0082e6";

  constructor(private route:Router, private product: ProductService, private manager: SellerService){}

  ngOnInit(): void{
    
    this.route.events.subscribe((val:any) =>{
      
      if(val.url){
        console.warn(val.url);
        if(val.url.includes("manager") && localStorage.getItem("manager")){
          let teamStore = localStorage.getItem("manager");
          console.warn(teamStore);
          if(teamStore){
            let teamData = JSON.parse(teamStore);
            console.warn(teamData);
            this.teamName = teamData.teamName;
            console.warn(this.teamName);
          }
          console.warn("this is manager area");
          this.menuType = "manager";
          this.teamName && this.manager.getManagerById(this.teamName).subscribe((result)=>{
            if(result){
              this.bcolor = result.color;
            }
          })
          
        }else { 
          console.warn("outside of manager area");
          this.menuType = "default"
          this.bcolor = "#0082e6";
      
        }
      }

    })

  }
  redirectTo(player:string){
    this.route.navigate([`/details/${player}`]);
  }

  submitSearch(val:string){
    console.warn(val);
    this.route.navigate([`search/${val}`]);
  }
  logout () {
    localStorage.removeItem("manager");
    this.route.navigate(['/']);
  }
  searchPlayer(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      console.warn(element.value);
      this.product.getMatchPlayer(element.value).subscribe((result) => {
        console.warn(result);
        this.searchResult=result;
      });
    }
  }
  hideSearch(){
    this.searchResult = undefined;
  }
}
