let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 100){
    nav.classList.add('color');
  }else{
    nav.classList.remove('color');
  }
})


menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
  resultInner.classList.remove("showSearch");
});

let drop = document.querySelectorAll(".drop");

drop.forEach((e) => {
  e.addEventListener("click", () => {
    drop.forEach((el) => {
      el !== e ? el.classList.remove("showDrop"):""
      
    });
    e.classList.toggle("showDrop");
  });

});

let goTop = document.querySelector('.goTop');
goTop.addEventListener('click',()=>{
  window.scrollTo(0,0)
})

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 400){
    goTop.style.display='block'
  }else{
    goTop.style.display='none'
  }
})