let open = false;
const item = document.querySelector('.card__body--item');
const img = document.querySelector('img');

const p = document.querySelector ('p');
const btns = document.querySelectorAll('button');
for(let btn of btns){
  btn.addEventListener('click', () => {

p.classList.remove('d-N');
btn.img.classList.add('rotate')
open = true;

  })
}
