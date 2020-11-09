let open = false;
const item = document.querySelector('.card__body--item');
const img = document.querySelector('img');
const paras = document.querySelectorAll('p');
const btns = document.querySelectorAll('button');

for(let btn of btns){
  btn.addEventListener('click', () => {

    for(let para of paras){
        if(!open){
              para.classList.add('open');
              btn.classList.add('rotate');
              open = true;
            }else{
              para.classList.remove('open');
              btn.classList.remove('rotate');
              open = false;

            }

    }
  })


}
