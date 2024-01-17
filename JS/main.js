const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
console.log(searchInputEl);

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('.badges');
const topEl = document.querySelector('#to_top');

window.addEventListener('scroll',_.throttle(function(){
    //console.log('scroll~');
    //console.log(window.scrollY);
    if(window.scrollY > 500){ // 배찌 숨기기
        //badgeEl.style.display = 'none';
        //gsap.to(요소,지속시간,옵션);
        gsap.to(badgeEl,0.5,{
            opacity:0,
            display:'none'
        });
        //TOP 보이기
        gsap.to(topEl , 0.2 ,{
            x:0
        });
    }else{// 배지 보이기
       //badgeEl.style.display = 'block';
        gsap.to(badgeEl,0.5,{
            opacity:1,
            display:'block'
        });
        //TOP 숨기기
        gsap.to(topEl , 0.2 ,{
            x:100
        });  
    }
},300));

topEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo: 0
    });
});

const fadeEls =document.querySelectorAll('.section1 .fade-in');
console.log(fadeEls);

fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1) * .5,
        opacity:1
    });
});

new Swiper('.inner_left .swiper',{
    direction :'vertical',
    autoplay: true,
    loop: true,
    speed :100
});

new Swiper('.promotion .swiper',{
    slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    autoplay : true,
    centeredSlides : true,
    loop : true,
    pagination :{
        el: '.promotion .swiper-pagination',
        clickable : true
    },
    navigation :{
        prevEl: '.promotion .swiper-button-prev',
        nextEl: '.promotion .swiper-button-next'
    }
});

new Swiper('.section9 .swiper',{
    slidesPerView : 5,
    spaceBetween : 30,
    autoplay : true,
    loop : true,
    navigation :{
        prevEl: '.section9 .swiper-button-prev',
        nextEl: '.section9 .swiper-button-next'
    }  
});

const promotionToggleEl =document.querySelector('.toggle-promotion');
const promotionEl = document.querySelector('.promotion');
let isHidePromotion = false;

promotionToggleEl.addEventListener('click',function(){
    isHidePromotion =! isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add('open');
        promotionToggleEl.classList.add('open');
    }else{
        promotionEl.classList.remove('open');
        promotionToggleEl.classList.remove('open');
    }
});

const spyEls = document.querySelectorAll('div.scroll-spy');

spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({
        triggerElements:spyEl, // 내가 감지해야할 요소 지정
        triggerHook: .8        // -초 마다 탐색
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller()); // 애니메이션 실행하기 위한 옵션
});
