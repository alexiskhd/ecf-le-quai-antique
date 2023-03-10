import flatpickr from 
"https://cdn.skypack.dev/flatpickr@4.6.13";

const initFlatpickr = () => {
    const FP = document.getElementId('date');
    Flatpickr(FP, {
        disable: [(date)=>(
            [0, 6].includes(date.getDay())
        )],
        enableTime: true,
    })
}
initFlatpickr();


// menu Burger //
const menuHamburger = document.querySelector('.menuHamburger')
const navLinks = document.querySelector('.nav__links')
    
menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
    })
    var btncontainer=document.getElementsByClassName("nav__links");
    var btns=document.getElementsByClassName("nav__btn");
    
    for(var i=0; i<btns.length; i++){
        btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active"),
            this.className += " active";
        })
    };

    const burger = document.querySelector('burger')

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('active)')
    });


