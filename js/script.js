/* Responsive Nav Menu */

const navMenu = () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navList = document.querySelector(".nav-list");

  navbarToggler.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    navbarToggler.classList.toggle("toggle-active");
  });
  navList.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    navbarToggler.classList.toggle("toggle-active");
  });
};

navMenu();

/*Services Slider*/

const serviceChange = () => {
  let firstChild, lastChild;
  const arrowLeft = document.querySelector("#arrow-left");
  const arrowRight = document.querySelector("#arrow-right");
  const servicesAll = document.querySelector("#services-slider");

  document.addEventListener("click", () => {
    if (event.target === arrowLeft) {
      lastChild = servicesAll.lastElementChild;
      servicesAll.insertAdjacentElement("afterbegin", lastChild);
    } else if (event.target === arrowRight) {
      firstChild = servicesAll.firstElementChild;
      servicesAll.insertAdjacentElement("beforeend", firstChild);
    }
  });
};

serviceChange();