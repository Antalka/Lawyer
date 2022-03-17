
$(".down-arrow").click(function(){
    var element = document.getElementById("main");
    element.scrollIntoView({ behavior: 'smooth' });
    console.log(element);
})
$('.personal').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    adaptiveHeight:true,
    responsive: [
        {
          breakpoint: 950,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        },
        {
            breakpoint: 850,
            settings: {
              centerMode: false,
              slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
            }
          }
    ]
  });
