//Lógica dos botões de trocar o idioma
const translate = {
    br:{
        jobTitle:"Desenvolvedor Web",
        descriptionTitle:"Olá, sou um desenvolvedor web full stack com grande foco em aplicações e sites responsivos, seguros e com bom desempenho. Te convido a dar uma espiada nos meus projetos e à entrar em contato comigo :)",
        projects:"Projetos",
        contact:"Contato",
        skillsH1:"Habilidades",
        projectsH1:"Projetos",
        h4HigienWindow:"Sistema web de controle de pátio",
        pHigienWindow:"lalala",
        webDeveloperFooter:"Desenvolvedor Web | maiconjsv@gmail.com | Londrina PR"
    },
    en:{
        jobTitle:'Web Developer',
        descriptionTitle:"Hi, I'm a full-stack web developer with a strong focus on responsive, secure, and performant applications and websites. I invite you to take a look at my projects and get in touch :)",
        projects:"Projects",
        contact:"Contact",
        skillsH1:"Skills",
        projectsH1:"Projects",
        h4HigienWindow:"Web system for yard control",
        pHigienWindow:"lululu",
        webDeveloperFooter:"Web Developer | maiconjsv@gmail.com | Londrina PR"
    }
}

const jobTitle = document.getElementById('jobTitle')
const descriptionTitle = document.getElementById('descriptionTitle')
const project = document.getElementById('projects')
const contact = document.getElementById('contact')
const skillsH1 = document.getElementById('skillsH1')
const projectsH1 = document.getElementById('projectsH1')
const h4HigienWindow = document.getElementById('h4HigienWindow')
const pHigienWindow = document.getElementById('pHigienWindow')
const webDeveloperFooter = document.getElementById('webDeveloperFooter')

document.querySelector('.br-flag').addEventListener('click', () =>{
    jobTitle.textContent = translate.br.jobTitle;
    descriptionTitle.textContent = translate.br.descriptionTitle
    project.textContent = translate.br.projects
    contact.textContent = translate.br.contact
    skillsH1.textContent = translate.br.skillsH1
    projectsH1.textContent = translate.br.projectsH1
    h4HigienWindow.textContent = translate.br.h4HigienWindow
    pHigienWindow.textContent = translate.br.pHigienWindow
    webDeveloperFooter.textContent = translate.br.webDeveloperFooter
})

document.querySelector('.us-flag').addEventListener('click', () =>{
    jobTitle.textContent = translate.en.jobTitle;
    descriptionTitle.textContent = translate.en.descriptionTitle
    project.textContent = translate.en.projects
    contact.textContent = translate.en.contact
    skillsH1.textContent = translate.en.skillsH1
    projectsH1.textContent = translate.en.projectsH1
    h4HigienWindow.textContent = translate.en.h4HigienWindow
    pHigienWindow.textContent = translate.en.pHigienWindow
    webDeveloperFooter.textContent = translate.en.webDeveloperFooter
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