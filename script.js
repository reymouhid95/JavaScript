// Faire apparaître les éléments "p" après le click sur l'élément h2
$(function () {
  $("p").hide();
  $("h2").on("click", function () {
    $("body").css("background-color", "purple");
    $("p").show(1000);
  });
});
