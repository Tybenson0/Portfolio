$(document).ready(function(){
      $(".nav-item").click(function(){
          $(".shuttle").addClass("shoot-off");
        });
      $(".travel-item").click(function(){
          $(".shuttle-travel").addClass("shoot-off-right");
        });
      $(".lander").click(function(){
          $(".lander").addClass("shoot-off-back");
        });
      $(".station").click(function(){
          $(".station").addClass("shoot-off-back");
        });
      
    

      $('.waitBeforeNavigate').on("click", function (ev) {
        ev.preventDefault();                // prevent default anchor behavior
        const goTo = $(this).attr("href");  // store anchor href
             
        // do something while timeOut ticks ... 
             
        setTimeout(function(){
          window.location = goTo;
        }, 300);                           // time in ms
      }); 
});



