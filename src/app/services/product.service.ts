import { Injectable } from '@angular/core';
import { player } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "http://localhost:8080/player";
  constructor(private http:HttpClient) { }
  
  addPlayer(data:player) {
    console.warn("service is called");
    return this.http.post(this.url, data);
  }

  playerListByTeam(teamName:string) {
    return this.http.get<player[]>(this.url + `/team/${teamName}`);
  }

  deletePlayer(playerName:string){
    return this.http.delete(this.url + `/${playerName}`);
  }
  
  getPlayer(playerName:string){//anything from url is string
    return this.http.get<player>(this.url + `/${playerName}`);
  }

  updatePlayer(player: player){
    return this.http.put(this.url + `/${player.playerName}`, player);
  }

  expensivePlayers(){
    return this.http.get<player[]>(this.url + '/expensive');
  }

  getCategory(category:string){
    return this.http.get<player[]>(this.url + `/${category}`);
  }

  getMatchPlayer(playerName:string){
    return this.http.get<player[]>(this.url + `/match/${playerName}`);
  }
}
