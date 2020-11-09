let open = true;
const item = document.querySelector('.card__body--item');
const img = document.querySelector('img');
const paras = document.querySelectorAll('p');
const btns = document.querySelectorAll('button');
for(let btn of btns){
  btn.addEventListener('click', open)

  for( let para of paras){
    if(!open){
      para.classList.add('d-N');
      btn.classList.remove('rotate');
      open = false;
    }else{
      para.classList.remove('d-N');
      btn.classList.add('rotate');
      open = true;

    }
  }

}

