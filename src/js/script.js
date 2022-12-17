"use strict";


$(document).ready(function() {
  $('.about__carousel_wrapper').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    
  });
});


$('.brands__carousel_wrapper').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  draggable: true,
  
  
  

});

/* Tabs */

window.addEventListener('DOMContentLoaded', function() {

 
  const tabs = document.querySelectorAll('.works__tabs_link'),
        tabsContent = document.querySelectorAll('.works__tabs_content'),
        tabsParent = document.querySelector('.works__tabs');

    function hideTabContent() {
    tabsContent.forEach(item => {
    item.style.display = 'none';
    });

    tabs.forEach(item => {
    item.classList.remove('works__tabs_link_active');
    });

    }

    function showTabContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('works__tabs_link_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target && target.classList.contains('works__tabs_link')) {
    tabs.forEach((item, i) => {
    if(target == item) {
      hideTabContent();
      showTabContent(i);
    }
});
}
});
        

       
















});




