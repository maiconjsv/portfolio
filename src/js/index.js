//Lógica dos botões de trocar o idioma
const translate = {
    br:{
        jobTitle:"Desenvolvedor Web",
        descriptionTitle:"Olá, sou um desenvolvedor web full stack com grande foco em aplicações e sites responsivos, seguros e com bom desempenho. Te convido a dar uma espiada nos meus projetos e à entrar em contato comigo :)",
        projects:"Projetos",
        contact:"Contato",
        skillsH1:"Habilidades",
        projectsH1:"Projetos",
        webDeveloperFooter:"Desenvolvedor Web | maiconjsv@gmail.com | Londrina PR",
        h2Project1: "Sistema Web de controle de pátio",
        h2project2: "Royal Peças",
        descriptionProject1: "Sistema de controle de pátio para equipe da Localiza Seminovos no Catuai Shopping - Londrina, feito com integração ao Firebase",
        descriptionProject2: "Projeto pessoal em desenvolvimento com intuito de catalogar peças paralelas compativeis com modelos Royal Enfield.",
        saberMaisProject1: "Saber mais",
        saberMaisProject2: "Saber Mais"
    },
    en:{
        jobTitle:'Web Developer',
        descriptionTitle:"Hi, I'm a full-stack web developer with a strong focus on responsive, secure, and performant applications and websites. I invite you to take a look at my projects and get in touch :)",
        projects:"Projects",
        contact:"Contact",
        skillsH1:"Skills",
        projectsH1:"Projects",
        webDeveloperFooter:"Web Developer | maiconjsv@gmail.com | Londrina PR",
        h2Project1: "Web system for yard control",
        h2project2: "Royal Parts",
        descriptionProject1: "Yard control system for the Localiza Seminovos team at Catuai Shopping - Londrina, made with Firebase integration",
        descriptionProject2: "Personal project under development with the aim of cataloging parallel parts compatible with Royal Enfield models.",
        saberMaisProject1: "Read More",
        saberMaisProject2: "Read More"
    }
}

const jobTitle = document.getElementById('jobTitle')
const descriptionTitle = document.getElementById('descriptionTitle')
const project = document.getElementById('projects')
const contact = document.getElementById('contact')
const skillsH1 = document.getElementById('skillsH1')
const projectsH1 = document.getElementById('projectsH1')
const webDeveloperFooter = document.getElementById('webDeveloperFooter')
const h2Project1 = document.getElementById('h2Project1')
const h2project2 = document.getElementById('h2Project2')
const descriptionProject1 = document.getElementById('descriptionProject1')
const descriptionProject2 = document.getElementById('descriptionProject2')
const saberMaisProject1 = document.getElementById('saberMaisProject1')
const saberMaisProject2 = document.getElementById('saberMaisProject2')

document.querySelector('.br-flag').addEventListener('click', () =>{
    jobTitle.textContent = translate.br.jobTitle;
    descriptionTitle.textContent = translate.br.descriptionTitle
    project.textContent = translate.br.projects
    contact.textContent = translate.br.contact
    skillsH1.textContent = translate.br.skillsH1
    projectsH1.textContent = translate.br.projectsH1
    webDeveloperFooter.textContent = translate.br.webDeveloperFooter
    h2Project1.textContent = translate.br.h2Project1
    h2project2.textContent = translate.br.h2project2
    descriptionProject1.textContent = translate.br.descriptionProject1
    descriptionProject2.textContent = translate.br.descriptionProject2

})

document.querySelector('.us-flag').addEventListener('click', () =>{
    jobTitle.textContent = translate.en.jobTitle
    descriptionTitle.textContent = translate.en.descriptionTitle
    project.textContent = translate.en.projects
    contact.textContent = translate.en.contact
    skillsH1.textContent = translate.en.skillsH1
    projectsH1.textContent = translate.en.projectsH1
    webDeveloperFooter.textContent = translate.en.webDeveloperFooter
    h2Project1.textContent = translate.en.h2Project1
    h2project2.textContent = translate.en.h2project2
    descriptionProject1.textContent = translate.en.descriptionProject1
    descriptionProject2.textContent = translate.en.descriptionProject2
    saberMaisProject1.textContent = translate.en.saberMaisProject1;
    saberMaisProject2.textContent = translate.en.saberMaisProject2;
})



//scroll dos botões
const flags = document.querySelector('.flags')

window.addEventListener('scroll' , () =>{
    if(window.scrollY > 180){
        flags.classList.add('scrolled')
    }
    else{
        flags.classList.remove('scrolled')
    }
})



//Lógica dos botões de links internos
const link1 = document.getElementById('link-1')
const link2 = document.getElementById('link-2')
const projects = document.querySelector('.projects')

link1.addEventListener('click', ()=>{
    projects.scrollIntoView({behavior: "smooth"})
})
link2.addEventListener('click', () =>{
    window.location.href =
        'mailto: maiconjnsv@gmail.com';
    
})

//Swiper
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
  });

  //Links para projetos
  document.getElementById('saberMaisProject1').addEventListener('click', () =>{
    //window.open('project1.html', '_blank')
    window.location.href =
        'mailto: maiconjnsv@gmail.com';
  })
