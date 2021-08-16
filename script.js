$(document).ready(function () {
  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('nav').addClass("skicky");
    }else{
        $('nav').removeClass("skicky");
    }
  }
})