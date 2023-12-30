
let clients = document.querySelectorAll('.client');
let popInner = document.getElementById('pop');
clients.forEach((e)=>{
  e.addEventListener('click',()=>{
    popInner.style.display='flex';
  })
})


let closePop = document.getElementById('closePop');

closePop.addEventListener('click',()=>{
  popInner.style.display='none';
})

