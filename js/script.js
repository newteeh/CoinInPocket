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
output.innerHTML = slider.value; // Отображение значения ползунка по умолчанию

// Обновите текущее значение ползунка (при каждом перетаскивании маркера ползунка)
slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; // Отображение значения ползунка по умолчанию

// Обновите текущее значение ползунка (при каждом перетаскивании маркера ползунка)
slider2.oninput = function() {
  output2.innerHTML = this.value;
}
