import Router from "./router.js";

const router = Router;

router.add("/", "/pages/home.html");
router.add("/exploration", "/pages/exploration.html");
router.add("/universe", "/pages/universe.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();

window.route = () => router.route();

const headerMenu = document.querySelector("header nav ul");

function setCurrentMenu({ target }) {
  for (const menu of headerMenu.children) {
    if (menu.firstElementChild === target) {
      menu.classList.add("current");
    } else {
      menu.classList.remove("current");
    }
  }
}

for (const menu of headerMenu.children) {
  menu.addEventListener("click", setCurrentMenu);
}
