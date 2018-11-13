// $(".container").hide();

$(".hero-3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function() {
    // $(".hero").addClass("minHero");
    $(".container").addClass("showContent");
    // $(".container").show();
  });

$(".hero").one('webkitTransitionEnd otransitionend msTransitionEnd transitionend',   
    function() {
    // $(".hero").hide();
  });