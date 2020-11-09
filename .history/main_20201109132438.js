let open = true;
const item = document.querySelector('.card__body--item');
const img = document.querySelector('img');
const p = document.querySelector ('p');
const btns = document.querySelectorAll('button');
for(let btn of btns){
  btn.addEventListener('click', () => {

  if(!open){
    p.classList.add('d-N');
    btn.classList.remove('rotate');
    open = false;
  }else{
    p.classList.remove('d-N');
    btn.classList.add('rotate');
    open = true;

  }


  })
}
