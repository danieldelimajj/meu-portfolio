function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);        
    });
}

const titulo = document.querySelector('.text-effect');
ativaLetra(titulo);


const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .nav-list')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})