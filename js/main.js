$(document).ready(function () {
 //$("#ads").slideDown();

  $("#close").click(function () {
    $(".ads").slideUp()
   
  });


  let isOpen = true;
  $("#toggle").click(function () { 
    $(".info-bar").slideToggle();

    if (isOpen) {
      $("#toggle").removeClass("fa-angle-up").addClass("fa-angle-down");
   
      isOpen = false
    }else{
      $("#toggle").removeClass("fa-angle-down").addClass("fa-angle-up");
  
      isOpen = true
    }

    
 
    
  });




});