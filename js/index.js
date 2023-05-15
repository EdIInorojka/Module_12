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

