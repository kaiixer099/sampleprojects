$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
        }else{
          $('.scroll-up-btn').removeClass("show");
        }
    });

    
    
    
    //slide up
    $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0})
    });




   
   // toggle menu/navbar script

   $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  //typing text animated

  var typed = new Typed(".typing",{
      strings: ["dreams","future","plans"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
  });











  //owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      }
    }
  });
  
});

//remove nav label / retain icons


$(document).ready(function(){
    $(".menu-btn").click(function(){
      $(".menu span").toggle();
    });
   
  });























/*script for side navbar*/ 

/*  $(document).ready(function(){
    $(window).resize(function(){
      if(window.matchMedia("(max-width: 900px)").matches){
        $('.menu .label').removeClass("active");
      }
      else{
        $('.menu .label').addClass("active");
      }
    });
  }); */







  