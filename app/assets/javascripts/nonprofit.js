$(document).on("click", ".toggle-non-desc-modal", function(event) {
  event.preventDefault();

  var nonId = $(this).attr("id");

  $("#non-desc-modal-body").html($("#non-description-" + nonId).val());

  $("#non-desc-modal").modal("show");
});