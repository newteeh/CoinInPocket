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

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}
