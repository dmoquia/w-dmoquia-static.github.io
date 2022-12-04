const navBtn = document.querySelector("#btn-menu");
const navbar = document.querySelector("#links");
const navClose = document.querySelector("#btn-close");
const body = document.querySelector("body");

navBtn.addEventListener("click", () => {
  console.log(navbar.classList);
  navbar.classList.add("show-links");
  navClose.classList.add("show-close");
  body.classList.replace("body", "body-blue");
});

navClose.addEventListener("click", () => {
  console.log("remove");
  navbar.classList.remove("show-links");
  navClose.classList.remove("show-close");
  body.classList.replace("body-blue", "body");
});
