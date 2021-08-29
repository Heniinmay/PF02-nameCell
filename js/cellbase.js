AOS.init();

//aside

let sidemenu = document.querySelector(".sidemenu");
let menuAll = sidemenu.querySelector(".menu_all");
let gnbWrap = document.querySelector(".gnb-wrap");

menuAll.addEventListener("click", function () {
  sidemenu.classList.toggle("active");
  menuAll.classList.toggle("active");
  gnbWrap.classList.toggle("active");
});

let sideMenu = $(".sidemenu"),
  sdMenuLG = sideMenu.find(".sidelogo");

sdMenuLG.click(function () {
  //$(this).attr('href','./index.html'); //temp
  sideMenu
    .find("a.sidelogo")
    .attr("href", "http://yumgme.dothome.co.kr/celltrion");
});
