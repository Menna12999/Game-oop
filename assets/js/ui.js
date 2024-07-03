import { Categories } from "./games.js";
import { Details } from "./details.js";
import {showGames,fixedBox} from "./main.js"
export class Ui {
constructor(){

}

    async displayGames(category){
        let box=``
        let currentCategory = new Categories(category);
        let allGames = await currentCategory.getGames();
        for(let i=0;i<allGames.length;i++){
            box+=` <div class="col-lg-3 col-md-6 mb-3">
                <div class="content p-3 rounded-3" id=${allGames[i].id}>
                  <div class="content-img mb-3" id=${allGames[i].id}>
                 <img src="${allGames[i].thumbnail}" class="w-100 h-100 rounded-top-2" id=${allGames[i].id}>
                </div>
                 <div class="d-flex justify-content-between align-items-center mb-3 text-white" id=${allGames[i].id}>
                  <h4 id=${allGames[i].id}>${allGames[i].title}</h4>
                  <span class="badge-custom d-flex align-items-center px-1 rounded-1" id=${allGames[i].id}>free</span>
                 </div>
                 <p class="text-center" id=${allGames[i].id}>${allGames[i].short_description.split(' ').slice(0,4)}<br>
                 ${allGames[i].short_description.split(' ').slice(4,8)}</p>
                 <div class="d-flex justify-content-between align-items-center  text-white content-footer pt-3 m-0" id=${allGames[i].id}>
                  <span class="badge-custom d-flex align-items-center px-1 rounded-1" id=${allGames[i].id}>${allGames[i].genre}</span>
                  <span class="badge-custom d-flex align-items-center px-1 rounded-1" id=${allGames[i].id}>${allGames[i].platform}</span>
                </div>
              </div>
            </div>
            `
        }
        console.log(allGames);
        showGames.innerHTML =box;
        
    }
    async displayDetails(gameId) 
    {
      const game = new Details(gameId)
      let gameDetails = await game.getGameDetails()
       console.log(gameDetails)
      let box = `
              
                   <div class="col-md-4 ">
                     <img class="w-100 mb-4" src=${gameDetails.thumbnail} alt="game">
                   </div>
                   <div class="col-md-8  ps-md-5">
                     <h2>Title:${gameDetails.title}</h2>
                     <p>Category :<span class="badge-custom p-1 px-3 ms-2 rounded-2">
                     ${gameDetails.genre}</span></p>
                     <p >Platform:<span class="badge-custom p-1 px-3 ms-2 rounded-2""
                     >${gameDetails.platform}</span></p>
                     <p>Status:<span class="badge-custom p-1 px-3 ms-2 rounded-2""
                     >${gameDetails.status}</span></p>
                     <p>${gameDetails.description}</p>
                     <a href=${gameDetails.game_url} target="_blank"><button class="btn-style btn-custome-1 fw-bold border-0">Show Game</button></a>
                  
        `;
    
    fixedBox.innerHTML =box
    
    }   } 
    
    
        
        
    


