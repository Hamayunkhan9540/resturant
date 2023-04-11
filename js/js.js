
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
       x.className += " responsive";
     } else {
      x.className = "topnav";
   }
   }
$('.owl-carousel').owlCarousel({
  autoHeight:true,
    sfluidSpeed:true,
      loop: true,
      margin: 20,
      padding:5,
      // nav: true,
      navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {

        0: {
          items:1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        }
      }
    })
  
    AOS.init();

    // gallery
    $('.owl-carousel').owlCarousel({
      items:1,
      merge:true,
      loop:true,
      margin:10,
      video:true,
      lazyLoad:true,
      center:true,
      responsive:{
          480:{
              items:2
          },
          600:{
              items:4
          }
      }
  })