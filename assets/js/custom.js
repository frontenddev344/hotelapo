$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".close").click(function(){
    $("body").removeClass("menuToggle");
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('.site-header').addClass('fixed-header');
    }
    else {
        $('.site-header').removeClass('fixed-header');
    }
});

$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Les mer") {
    $(this).text("lese mindre")
  } else {
    $(this).text("Les mer")
  }
});




$('.contless-button').click(function() {
    var $this = $(this);
    var $moreText = $this.closest('.hotel-text').find('.moretextt');
  
    $moreText.slideToggle();
    if ($this.text() == "Les mer") {
      $this.text("lese mindre");
    } else {
      $this.text("Les mer");
    }
  });
