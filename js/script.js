 const mario = document.querySelector('.mario') //pegar a classe mario
 const pipe = document.querySelector('.pipe') //pegar a classe pipe

const jump= () =>{
    mario.classList.add('jump'); //criar o pulo adicionando a classe jump na class mario
    setTimeout(()=> {
        mario.classList.remove('jump'); 
    }, 500);
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 80){
 
        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'; 
        mario.style.bottom  = `${marioPosition}px`;
        mario.src = './imagens/pika.gif';
        mario.style.width = "85px";
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)
