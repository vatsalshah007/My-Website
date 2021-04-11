let navElement = document.getElementById('sticky_nav')
    let sticky = navElement.offsetTop
    
window.onscroll = fixNav => {
    if (window.pageYOffset > sticky) {
        navElement.classList.add('fixed')
        navElement.classList.add('top-3')
    } else {
        navElement.classList.remove('fixed')
        navElement.classList.remove('top-3')
    }
} 