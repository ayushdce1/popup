document.addEventListener("click", (e) => {
  if (
    e.target.closest(".cross") ||
    e.target.closest(".save") ||
    e.target.closest(".cancel")
  ) {
    document.getElementsByClassName("pop_up")[0].classList.remove("pop_active");
  } else if (e.target.closest(".click_here")) {
    document.getElementsByClassName("pop_up")[0].classList.add("pop_active");
  } else if (e.target.closest(".pop_up")) {
  } else {
    document.getElementsByClassName("pop_up")[0].classList.remove("pop_active");
  }
});
