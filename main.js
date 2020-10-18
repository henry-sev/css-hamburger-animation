let menuBtn = document.querySelector(".menu_btn");
let menuOpen = false;
menuBtn.addEventListener("click", function() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  }
  else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
