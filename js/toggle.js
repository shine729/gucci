var fToggle = false;
$(".favorite").on("click", function () {
  if (fToggle == false) {
    fToggle = true;
    $(this).children("img").attr("src", "img/favorite.png");
  } else {
    fToggle = false;
    $(this).children("img").attr("src", "img/fill.png");
  }
});

