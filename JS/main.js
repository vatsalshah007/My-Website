  
window.onscroll = () => {
    let navElement = document.getElementById('sticky_nav')
    let sticky = navElement.offsetTop
    if (window.pageYOffset > sticky) {
        navElement.classList.add('fixed')
        navElement.classList.add('top-3')
    } else {
        navElement.classList.remove('fixed')
        navElement.classList.remove('top-3')
    }
} 

//Nav Home Button on Click
let homeClick = () => {
    let homebtn = document.getElementById('homeBtn')
    // console.log(homebtn)
    homebtn.classList.add('shadow-navBgOffset')
    let contactbtn = document.getElementById('contactBtn')
    contactbtn.classList.remove('shadow-navBgOffset')
    let projectsbtn = document.getElementById('projectsBtn')
    projectsbtn.classList.remove('shadow-navBgOffset')
    let intro = document.getElementById('intro')
    intro.classList.add('block')
    intro.classList.remove('hidden')
    let partition = document.querySelectorAll('#hPartition') //adds horizontal partitions
    // console.log(partition)
    partition.forEach((div) => {
        div.classList.add('block')
        div.classList.remove('hidden')
    });
    let about = document.getElementById('aboutMe')
    about.classList.add('block')
    about.classList.remove('hidden')
    let projects = document.getElementById('myProjects')
    projects.classList.add('block')
    projects.classList.remove('hidden')
    let contact = document.getElementById('contactMe')
    contact.classList.add('block')
    window.onscroll = () => {
        let navElement = document.getElementById('sticky_nav')
        let sticky = navElement.offsetTop
        let main = document.getElementsByTagName('main')
        if (window.pageYOffset > sticky) {
            navElement.classList.add('fixed')
            navElement.classList.add('top-3')
        } else {
            navElement.classList.remove('fixed')
            navElement.classList.remove('top-3')
        }
    } 
}

//Nav Contact Button on Click
let contactClick = () => {

    let contact = document.getElementById('contactMe')
    contact.classList.add('block')
    let homebtn = document.getElementById('homeBtn')
    // console.log(homebtn)
    homebtn.classList.remove('shadow-navBgOffset')
    let projectsbtn = document.getElementById('projectsBtn')
    projectsbtn.classList.remove('shadow-navBgOffset')
    let contactbtn = document.getElementById('contactBtn')
    contactbtn.classList.add('shadow-navBgOffset')
    let projects = document.getElementById('myProjects')
    projects.classList.add('hidden')
    let about = document.getElementById('aboutMe')
    about.classList.add('hidden')
    let intro = document.getElementById('intro')
    intro.classList.add('hidden')
    let partition = document.querySelectorAll('#hPartition') //removes horizontal partitions
    // console.log(partition)
    partition.forEach((div) => {
        div.classList.add('hidden')
    });
    window.onscroll = () => {
        let navElement = document.getElementById('contactHeader')
        let sticky = navElement.offsetTop
        if (window.pageYOffset > sticky) {
            navElement.classList.add('fixed')
            navElement.classList.add('top-3')
        } else {
            navElement.classList.remove('fixed')
            navElement.classList.remove('top-3')
        }
    } 
}