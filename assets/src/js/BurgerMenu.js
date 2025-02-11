const menuBurguer = document.getElementById("menu-burguer");
const closeMenuButton = document.getElementById("close-menu_button");

menuBurguer.addEventListener("click", function () {
  document.getElementById("menu-content").classList.add("visible"); //Muetsra el menu hamburguesa
});

closeMenuButton.addEventListener("click", function () {
  document.getElementById("menu-content").classList.remove("visible"); //Quita el menu hamburguesa
});

/*--------------------MUEVE HACIA ABAJO CUANDO CLICKEA UNA SECCION--------------------*/
const aboutMe = document.querySelector("#about-me_button a");

aboutMe.addEventListener("click", function () {
  const descriptionSection = document.getElementById("my-description");
  descriptionSection.scrollIntoView({ behavior: "smooth" }); // Desplaza a la sección
  document.getElementById("menu-content").classList.remove("visible");
});

const myWorks = document.querySelector("#my-works_button a");

myWorks.addEventListener("click", function () {
  const descriptionSection = document.getElementById("my-works");
  descriptionSection.scrollIntoView({ behavior: "smooth" }); // Desplaza a la sección
  document.getElementById("menu-content").classList.remove("visible");
});

const contactMe = document.querySelector("#contact_button a");

contactMe.addEventListener("click", () => {
  const contactMeSection = document.getElementById("contact-me");
  contactMeSection.scrollIntoView({ behavior: "smooth" });
  document.getElementById("menu-content").classList.remove("visible");
});

/*const mySocials = document.querySelector('#my-social_button a');

mySocials.addEventListener('click', () => {
  const mySocialSection = document.getElementById('my-socials');
  mySocialSection.scrollIntoView({behavior: 'smooth'});
  document.getElementById('menu-content').classList.remove('visible');
});*/
