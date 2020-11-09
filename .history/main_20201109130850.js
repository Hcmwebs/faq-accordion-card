let open = false;
const item = document.querySelector('.card__body--item')
const p = document.querySelector ('p')
const btns = document.querySelectorAll('button');
for(let btn of btns){
  btn.addEventListener('click', () => {

p.classList.add(open);
open = true;

  })
}
