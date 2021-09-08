const menuItem = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");

function InsertStyleForCurrentLink(nav) {
  const currentLocation = location.href;
  if (nav.href === currentLocation) {
    nav.classList.add("active");
  }
}

menuItem.forEach((nav) => InsertStyleForCurrentLink(nav));
