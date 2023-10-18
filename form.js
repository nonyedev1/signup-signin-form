const sign = document.querySelectorAll('.sign')
for(signs of sign){
  signs.addEventListener('click', ()=>{
    document.querySelector('.content').classList.toggle('hide')
    document.querySelector('.contentDisplay').classList.toggle('hide')
  })
  
}

