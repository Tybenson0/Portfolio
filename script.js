$(document).ready(function(){

      //below is the click functions for rocket animations
      $(".home-travel").click(function(){
          $(".shuttle").addClass("shoot-off");
        });
      $(".travel-item").click(function(){
          $(".shuttle-travel").addClass("shoot-off-right");
        });
      $(".travel-item-back").click(function(){
          $(".station").addClass("shoot-off-back");
        });
      $(".lander").click(function(){
          $(".lander").addClass("shoot-off-back");
        });
      $(".station").click(function(){
          $(".station").addClass("shoot-off-back");
        });

     
        $('#project-1').on('click', function() {
          
          if ($('#project-1').css('opacity') == .88) $('#project-1').css('opacity', 0);
          else $('#project-1').css('opacity', .88);
        });
        $('#project-2').on('click', function() {
          if ($('#project-2').css('opacity') == .88) $('#project-2').css('opacity', 0);
          else $('#project-2').css('opacity', .88);
        });
        $('#project-3').on('click', function() {
          if ($('#project-3').css('opacity') == .88) $('#project-3').css('opacity', 0);
          else $('#project-3').css('opacity', .88);
        });
      

    
      //below adds a slight delay to page load to allow for rocket animation to complete
      $('.waitBeforeNavigate').on("click", function (ev) {
        ev.preventDefault();                // prevent default anchor behavior
        const goTo = $(this).attr("href");  // store anchor href
             
        // do something while timeOut ticks ... 
             
        setTimeout(function(){
          window.location = goTo;
        }, 300);                           // time in ms
      }); 
});





