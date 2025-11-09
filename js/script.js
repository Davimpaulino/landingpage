//navbar - cor de fundo
$(window).scroll(function(){
  if($(window).scrollTop()>100){
    $("nav").addClass("navbar-scrolled")
  } else{
    $("nav").removeClass("navbar-scrolled")
  }
});


