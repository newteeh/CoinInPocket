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

var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
    output1.innerHTML = this.value;
}

$(document).ready(function($) {
    //Check if an element was in a screen
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom));
    }
    //Count up code
    function countUp() {
        $('.counter__1 ,.counter__2, .counter__3, .counter__4, .counter__5 ').each(function() {
          var $this = $(this), // <- Don't touch this variable. It's pure magic.
              countTo = $this.attr('data-count');
              ended = $this.attr('ended');

        if ( ended != "true" && isScrolledIntoView($this) ) {
            $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 1000, //duration of counting
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        $this.attr('ended', 'true');
        }
        });
    }
    //Start animation on page-load
    if ( isScrolledIntoView(".counter__1") ) {
        countUp();
    }
    //Start animation on screen
    $(document).scroll(function() {
        if ( isScrolledIntoView(".counter__1") ) {
            countUp();
        }
    });
});


let InputBox = document.querySelector('.firstInputBox');
let Input = document.querySelector('.firstInput__body > form > input');

Input.onfocus = function(){
    InputBox.classList.add('active');
};
Input.onblur = function(){
    InputBox.classList.remove('active');
};

let InputBox2 = document.querySelector('.secondInputBox');
let Input2 = document.querySelector('.secondInput__body > form > input');

Input2.onfocus = function(){
    InputBox2.classList.add('active');
};
Input2.onblur = function(){
    InputBox2.classList.remove('active');
};













