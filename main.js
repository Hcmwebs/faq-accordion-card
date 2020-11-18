let open = false;
const item = document.querySelector('.card__body--item');
const img = document.querySelector('img');
const paras = document.querySelectorAll('p');
const btns = document.querySelectorAll('button');

for(let btn of btns){
  btn.addEventListener('click', () => {

    for(let i = 0; i<paras.length; i++){




        if(!open){
              paras[i].classList.add('open');
              btn.classList.add('rotate');
              open = true;
            }else{
              paras[i].classList.remove('open');
              btn.classList.remove('rotate');
              open = false;

            }

    }
  })


}
