$(document).ready(function() {
  $("#intro-comment-1").fadeIn(2000, function() {
    setTimeout(function() {
      $("#intro-comment-1").fadeOut(2000, function() {
        $("#intro-comment-2").fadeIn(2000, function() {
          $(this).fadeOut(6000, function() {
            init();
            animate();
            $("#main-stage").fadeIn(2000, function() {
              $("#center").fadeIn(500);
              $(".actstat-input").fadeIn(600).dequeue();
            });
          });
        }).css('display','table-cell');
      });
    }, 1000);
  }).css('display','table-cell');
});