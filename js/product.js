let productImgs = document.querySelectorAll(".mySwiper6 .swiper-slide");
let mainImg = document.querySelector(".mainImg img");
let next = document.querySelector('.next3');
let prev = document.querySelector('.prev3');

next.addEventListener('click',()=>{
  let swiperActive = document.querySelector('.swiper-slide-active');
  productImgs.forEach((e) => {
    e.classList.remove("active");
  });
  swiperActive.classList.add("active");
  mainImg.src = swiperActive.firstElementChild.src;
  console.log('tes');
})
prev.addEventListener('click',()=>{
  let swiperActive = document.querySelector('.swiper-slide-active');
  productImgs.forEach((e) => {
    e.classList.remove("active");
  });
  swiperActive.classList.add("active");
  mainImg.src = swiperActive.firstElementChild.src;
  console.log('tes');
})

productImgs.forEach((e) => {
  e.addEventListener("click", () => {
    productImgs.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    mainImg.src = e.firstElementChild.src;
  });
});

let products = document.querySelectorAll('.product');
let popInner = document.getElementById('pop');

products.forEach((e)=>{
  e.addEventListener('click',()=>{
    popInner.style.display='flex';
  })
})


let closePop = document.getElementById('closePop');

closePop.addEventListener('click',()=>{
  popInner.style.display='none';
})