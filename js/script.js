if ($(window).width() < 771) {
  document.getElementById("loading").style.display = "flex";
  const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

  const setVisible = (elementOrSelector, visible) => 
    (typeof elementOrSelector === 'string'
      ? document.querySelector(elementOrSelector)
      : elementOrSelector
    ).style.display = visible ? 'block' : 'none';

  setVisible('.page', false);
  setVisible('#loading', true);

  document.addEventListener('DOMContentLoaded', () =>
    wait(2000).then(() => {
      setVisible('.page', true);
      setVisible('#loading', false);
  }));
}






const navLink = document.querySelectorAll('.navigation__link');
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(document.documentElement.scrollTop == 0){
        current = "home";
      }
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLink.forEach((a) => {
    //   console.log(`navigation__link-${current}`);
    a.classList.remove("navigation__link--active");
    if (a.classList.contains(`navigation__link-${current}`)) {
      a.classList.add("navigation__link--active");
    }
  });
});

function scroll(location) {
    findLocation = $('html, body').animate({scrollTop: $(`#${location}`).offset().top}, 2000);
    return findLocation;
}

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        navLink[i].classList.contains('navigation__link-home') ? scroll('home') : null;
        navLink[i].classList.contains('navigation__link-about') ? scroll('about') : null;
        navLink[i].classList.contains('navigation__link-services') ? scroll('services') : null;
        navLink[i].classList.contains('navigation__link-projects') ? scroll('projects') : null;
        navLink[i].classList.contains('navigation__link-contact') ? scroll('contact') : null;
    });
}