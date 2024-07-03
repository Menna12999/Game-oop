//------------------------------style--------------------------------------------

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
        delay:4000
  }
      });
$(document).ready(function(){
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
})

$(window).scroll(function(){
    let top = $(window).scrollTop();
    if(top>100){
     $('.navbar').hide();
    }
    else{
     $('.navbar').show();
    }
 
 })


//---------------------------------------main file---------------------------------------------------------




import { Ui } from "./ui.js";
const chooseCategory = document.getElementById('chooseCategory');
export const showGames = document.getElementById('showGames');
const details = document.getElementById('details');
export const fixedBox =document.getElementById('fixed-box');
const closeBtn = document.getElementById('closeBtn');

let displayGamesUi = new Ui();
chooseCategory.addEventListener('click',function(e){
const list = document.querySelectorAll('.nav-pills .nav-link');
for(let i=0;i<list.length;i++){
  list[i].classList.remove('active')  ;
}
const clickedCategory = e.target.id;
const clickedCategoryEle = document.getElementById(clickedCategory);
clickedCategoryEle.classList.add('active');
displayGamesUi.displayGames(clickedCategory)
})
displayGamesUi.displayGames('mmorpg');
$(document).ready(function(){
  
})

showGames.addEventListener('click',function(e){
  let targetId = e.target.id;
  console.log(targetId);
  if(targetId !== ""){
  details.classList.replace('d-none', 'd-block');
  $("body").css("overflow-y", "hidden");
  $("#details").css("overflow-y", "auto");
  displayGamesUi.displayDetails(targetId);
  }
  
  
})


closeBtn.addEventListener('click',function(){
  details.classList.replace('d-block', 'd-none');
  $("body").css("overflow-y", "visible");
})





