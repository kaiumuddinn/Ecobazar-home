// MOBILE NAVBAR
let menuTab = document.querySelector(".menuTab")
let categoryTab = document.querySelector(".categoryTab")
let menuContent = document.querySelector(".tab-content")
let categoryContent = document.querySelector("#categoryContent")

menuTab.addEventListener("click", () => {
    menuTab.classList.add("active");
    categoryTab.classList.remove("active");
    menuContent.style.display = "block";
    categoryContent.style.display = "none";
});

categoryTab.addEventListener("click", () => {
    categoryTab.classList.add("active");
    menuTab.classList.remove("active");
    categoryContent.style.display = "block";
    menuContent.style.display = "none";
});
// MOBILE NAVBAR END


// BANNER SLIDER
$(document).ready(function(){
    $('.bannerSlider').slick({
        autoplay: true,
        prevArrow: '#banner .leftArrow',
        nextArrow: '#banner .rightArrow',
        dots: true,
        dotsClass: 'bannerDots',
    });
    
    // FINAL COUNTDOWN JS
    $('.timer').countdown($('.timer').attr('data-date'), function(event) {
        // $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
        $('.timer .days').html(event.strftime('%D'))
        $('.timer .hrs').html(event.strftime('%H'))
        $('.timer .mins').html(event.strftime('%M'))
        $('.timer .secs').html(event.strftime('%S'))
      });

    // FEATURED PRODUCT SLIDER
    $('.productSlider').slick({
        slidesToShow: 5,
        prevArrow: '#featuredProduct .leftArrow',
        nextArrow: '#featuredProduct .rightArrow',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: true,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    })

    // CLIENT FEEDBACK SLIDER
    $('.feedbackSlider').slick({
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    })

    // VENOBOX VIDEO BUTTON
    new VenoBox({
      selector: '.playBtn',
      spinner: 'flow',
  });
  });
// BANNER SLIDER END