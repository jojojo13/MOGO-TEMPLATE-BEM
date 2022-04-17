// ---------Accordion-----------------
let accordion = document.querySelectorAll(".accordion");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle('active')
    let text = this.nextElementSibling;
    if (this.classList.contains('active')) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
}

// ----------Header responsive ------------------
let menu = document.querySelector('.header-options-pages-detail--menu');
let menuList = document.querySelector('.header-options-pages--responesive');

function toggleMenuList() {
  let menuList = document.querySelector('.header-options-pages--responesive');
  menuList.classList.toggle('active')
  if (menuList.classList.contains('active')) {
    menuList.style.opacity = "0.9";
    menuList.style.visibility = 'visible'
    menuList.style.height = "auto";
  } else {
    menuList.style.height = "0";
    menuList.style.opacity = "0";
    menuList.style.visibility = 'hidden'
  }
}
menu.addEventListener('click', toggleMenuList, false)

function showNavbar() {
  let navbar = document.querySelector('.header-options');
  let sticky = navbar.offsetTop;
  if (window.pageYOffset > sticky) {
    navbar.style.position = 'fixed'
    navbar.style.opacity = '0.9'
    navbar.classList.add("sticky")
  } else {
    navbar.style.position = 'relative'
    navbar.style.opacity = '1'
    navbar.classList.remove("sticky");
  }
}
window.addEventListener('scroll', showNavbar)




