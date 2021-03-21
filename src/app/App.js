
import {slides} from './slides.js';

 slides()

 const cards = Array.from(document.querySelectorAll('.card'));
 const sliderContainer = document.querySelector('.slider-container');
 const main = document.querySelector("main")
const homes = Array.from(document.querySelectorAll('.fa-home'));
const body = document.querySelector("body")

 cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
  
        main.style.display = "none";
        sliderContainer.style.display = "inline-flex"
      
     })

 })
 homes.forEach((home)=>{
    home.addEventListener('click', ()=>{

        main.style.display = "block";
        sliderContainer.style.display = "none";
  
     })

 })