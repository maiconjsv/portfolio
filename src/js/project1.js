//flags
const flags = document.querySelector('.flags')

window.addEventListener('scroll' , () =>{
    if(window.scrollY > 180){
        flags.classList.add('scrolled')
    }
    else{
        flags.classList.remove('scrolled')
    }
})

//links internos
document.getElementById('arrow_downward').addEventListener('click', () =>{
    const main = document.getElementById('main')
    main.scrollIntoView({behavior:'smooth'})
})