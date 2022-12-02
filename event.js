document
  .querySelector(".main__nav-content-about")
  .addEventListener("click", aboutDetail);
document
  .querySelector(".main__nav-content-service")
  .addEventListener("click", serviceDetail);
document
  .querySelector(".main__nav-content-portfolio")
  .addEventListener("click", portfolioDetail);
document
  .querySelector(".main__nav-content-contact")
  .addEventListener("click", contactDetail);
function aboutDetail() {
  document.querySelector(".about").style = "display:block;";
  document.querySelector(".home").style = "display:none;";
}
function serviceDetail() {
  document.querySelector(".service").style = "display:block;";
  document.querySelector(".home").style = "display:none;";
}
function contactDetail() {
  document.querySelector(".contact").style = "display:block;";
  document.querySelector(".home").style = "display:none;";
}
function portfolioDetail() {
  document.querySelector(".portfolio").style = "display:block;";
  document.querySelector(".home").style = "display:none;";
}
[...document.querySelectorAll(".button-close")].map((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".about").style = "display:none;";
    document.querySelector(".service").style = "display:none;";
    document.querySelector(".portfolio").style = "display:none;";
    document.querySelector(".contact").style = "display:none;";
    document.querySelector(".home").style = "display:block;";
  });
});
[...document.querySelectorAll(".button-close-black")].map((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".about").style = "display:none;";
    document.querySelector(".service").style = "display:none;";
    document.querySelector(".portfolio").style = "display:none;";
    document.querySelector(".contact").style = "display:none;";
    document.querySelector(".home").style = "display:block;";
  });
});
document.getElementById("all-click").addEventListener("click", function () {
  [...document.querySelectorAll(".all")].map((item) => {
    item.style = "display:block";
    document.querySelector(".portfolio__container-left-info-content").style =
      "display:grid";
  });
});
document
  .getElementById("photography-click")
  .addEventListener("click", function () {
    [...document.querySelectorAll(".all")].map((item) => {
      item.style = "display:none";
    });
    [...document.querySelectorAll(".photography")].map((item) => {
      item.style = "display:block";
    });
    document.querySelector(".portfolio__container-left-info-content").style =
      "display:flex";
  });
document.getElementById("studio-click").addEventListener("click", function () {
  [...document.querySelectorAll(".all")].map((item) => {
    item.style = "display:none";
  });
  [...document.querySelectorAll(".studio")].map((item) => {
    item.style = "display:block";
  });
  document.querySelector(".portfolio__container-left-info-content").style =
    "display:flex";
});
document
  .getElementById("interior-click")
  .addEventListener("click", function () {
    [...document.querySelectorAll(".all")].map((item) => {
      item.style = "display:none";
    });
    [...document.querySelectorAll(".interior")].map((item) => {
      item.style = "display:block";
    });
    document.querySelector(".portfolio__container-left-info-content").style =
      "display:flex";
  });
document
  .getElementById("illustration-click")
  .addEventListener("click", function () {
    [...document.querySelectorAll(".all")].map((item) => {
      item.style = "display:none";
    });
    [...document.querySelectorAll(".illustration")].map((item) => {
      item.style = "display:block";
    });
    document.querySelector(".portfolio__container-left-info-content").style =
      "display:flex";
  });
