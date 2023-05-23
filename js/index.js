let burger = document.querySelector('.burger')
let menu = document.querySelector('.header-nav')
let menulinks = document.querySelectorAll('.header-a')

burger.addEventListener('click',
function(){
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header-nav--active');

    document.body.classList.toggle('stop-scroll');
})

menulinks.forEach(
    function(el){
        el.addEventListener('click', function(){
            burger.classList.remove('burger--active');

            menu.classList.remove('header-nav--active');

            document.body.classList.remove('stop-scroll');
        })
    }
)

let searchBtn = document.querySelector('.left-button');

let rightBtn = document.querySelector('.right-button');

let leftBtn = document.querySelector('.left-button');

let textarea = document.querySelector('.header-textarea');

let searchDiv = document.querySelector('.header-div_search');

searchBtn.addEventListener('click',
function(){
    rightBtn.classList.add('active');

    leftBtn.classList.add('left-button--active');

    textarea.classList.add('active');

    searchDiv.classList.add('header-div_search--active');
});

rightBtn.addEventListener('click',
function(){
    rightBtn.classList.remove('active');

    leftBtn.classList.remove('left-button--active');

    textarea.classList.remove('active');

    searchDiv.classList.remove('header-div_search--active');
});

let ulBtn = document.querySelectorAll('.ul-button');

let content = document.querySelectorAll('.work-container');


ulBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        ulBtn.forEach(function(btn){btn.classList.remove('ul-button--active')});
        e.currentTarget.classList.add('ul-button--active');

        content.forEach(function(element){element.classList.remove('work-container--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('work-container--active');
    });
});

let questionBtn = document.querySelectorAll('.questions-button');

right = false;  

questionBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        questionBtn.forEach(function(btn){btn.classList.remove('questions-button--active')});
        
        e.currentTarget.classList.add('questions-button--active');
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });