$(document).on("click", ".toggle-non-desc-modal", function(event) {
  event.preventDefault();

  var nonId = $(this).attr("id");

  $("#non-desc-modal-body").html($("#non-description-" + nonId).val());

  $("#non-desc-modal").modal("show");
});
  // var nonprofitId = $(".nonprofit-id").val();
$(document).ready(function(){
  $(".addFavorite").on("click", function(e){
    $(this).fadeOut(300);
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "/favorite",
      dataType: "json",
      data: {
        favorite:{
          user_id: $(".user-id").text(),
          nonprofit_id: $(this).attr("data-non")
        }
      },
      success: function(data){
        console.log(data);
      },
      error: function(err){
        console.log("oops! Something went wrong",err);
      },
    });
  });
});
