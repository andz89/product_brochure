(()=>{"use strict";!function(){const e=document.querySelector(".slider-container"),t=Array.from(document.querySelectorAll(".slide"));let n=!1,o=0,r=0,i=0,c=0,a=0;function s(t){return function(r){a=t,o=u(r),n=!0,c=requestAnimationFrame(m),e.classList.add("grabbing")}}function d(){n=!1,cancelAnimationFrame(c);const o=r-i;o<-100&&a<t.length-1&&a++,o>100&&a>0&&a--,r=a*-window.innerWidth,i=r,y(),e.classList.remove("grabbing")}function l(e){if(n){const t=u(e);r=i+t-o}}function u(e){return e.type.includes("mouse")?e.pageX:e.touches[0].clientX}function m(){y(),n&&requestAnimationFrame(m)}function y(){e.style.transform=`translateX(${r}px)`}window.oncontextmenu=function(e){return e.preventDefault(),e.stopPropagation(),!1},t.forEach(((e,t)=>{e.querySelector("img").addEventListener("dragstart",(e=>{e.preventDefault()})),e.addEventListener("touchstart",s(t)),e.addEventListener("touchend",d),e.addEventListener("touchmove",l),e.addEventListener("mousedown",s(t)),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("mousemove",l)}))}();const e=Array.from(document.querySelectorAll(".card")),t=document.querySelector(".slider-container"),n=document.querySelector("main"),o=Array.from(document.querySelectorAll(".fa-home")),r=document.querySelector("body");e.forEach((e=>{e.addEventListener("click",(()=>{n.style.display="none",t.style.display="inline-flex",r.style.overflow="hidden"}))})),o.forEach((e=>{e.addEventListener("click",(()=>{n.style.display="block",t.style.display="none",r.style.overflow="auto"}))}))})();