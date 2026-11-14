const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu')
const mediaQuery = window.matchMedia("(min-width:601px)")

menuToggle.addEventListener('click',() => {
 const isOpen = menu.classList.toggle('active')
 menuToggle.setAttribute('aria-expanded',isOpen)
})

mediaQuery.addEventListener('change',(event) => {
    if(event.matches){
        menu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded','false')
    }
})
