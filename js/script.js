const select1 = new ItcCustomSelect('#select-1');

// $(document).ready(function(){
//     $('.header__burger').click(function(event){
//         $('.header__burger, .header__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });
// console.log('HelloWorld');
let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
menuBtn.addEventListener('click',function(){
    console.log('WTF?')
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})