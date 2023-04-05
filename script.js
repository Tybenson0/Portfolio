$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".shuttle").addClass("shoot-off");
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

const swup  = new Swup()


