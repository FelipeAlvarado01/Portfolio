/*----------------------------------------CAMBIO DE COLOR----------------------------------*/
const rangeInput = document.getElementById("slider-change");
const cardsColor = document.querySelectorAll("#scrolling-card");
let colorValue;

// Se ejecuta cuando el valor del input cambia
rangeInput.addEventListener("input", function () {
  colorValue = rangeInput.value;
  const threeContainer = document.querySelector("#three-container");
  const myDescription = document.querySelector("#my-description");
  const myWorks = document.querySelector("#my-works");
  const contactMe = document.querySelector("#contact-me");
  const ths = document.querySelectorAll("th");
  const mainTitles = document.querySelectorAll("#main-titles");
  const menu = document.querySelector("#menu-content");

  menu.style.backgroundColor = interpolateColor(
    { r: 33, g: 50, b: 146 },
    { r: 0, g: 0, b: 0 }
  );

  threeContainer.style.backgroundColor = interpolateColor(
    { r: 33, g: 50, b: 146 },
    { r: 0, g: 0, b: 0 }
  );
  threeContainer.style.borderBottomWidth = "2px";
  threeContainer.style.borderBottomStyle = "solid";
  threeContainer.style.borderBottomColor = interpolateColor(
    { r: 0, g: 0, b: 0 },
    { r: 51, g: 67, b: 158 }
  );

  document.querySelector("main").style.backgroundColor = interpolateColor(
    { r: 255, g: 255, b: 255 },
    { r: 0, g: 0, b: 0 }
  );

  myDescription.style.borderBottomWidth = "2px";
  myDescription.style.borderBottomStyle = "solid";
  myDescription.style.borderBottomColor = interpolateColor(
    { r: 0, g: 0, b: 0 },
    { r: 51, g: 67, b: 158 }
  );

  myWorks.style.borderBottomWidth = "2px";
  myWorks.style.borderBottomStyle = "solid";
  myWorks.style.borderBottomColor = interpolateColor(
    { r: 0, g: 0, b: 0 },
    { r: 51, g: 67, b: 158 }
  );

  contactMe.style.borderBottomWidth = "2px";
  contactMe.style.borderBottomStyle = "solid";
  contactMe.style.borderBottomColor = interpolateColor(
    { r: 0, g: 0, b: 0 },
    { r: 51, g: 67, b: 158 }
  );

  document.querySelector("#slider-change").style.backgroundColor =
    interpolateColor({ r: 245, g: 130, b: 65 }, { r: 51, g: 67, b: 158 });
  document.querySelector("#menu-burguer img").style.backgroundColor =
    interpolateColor({ r: 32, g: 46, b: 128 }, { r: 51, g: 67, b: 158 });
  document.querySelector("#down-button img").style.backgroundColor =
    interpolateColor({ r: 32, g: 46, b: 128 }, { r: 51, g: 67, b: 158 });
  document.querySelector("#form-section").style.backgroundColor =
    interpolateColor({ r: 33, g: 50, b: 146 }, { r: 51, g: 67, b: 158 });
  document.querySelector("#request-text").style.color = interpolateColor(
    { r: 0, g: 0, b: 0 },
    { r: 255, g: 255, b: 255 }
  );
  document.querySelector("#my-socials").style.backgroundColor =
    interpolateColor({ r: 16, g: 26, b: 83 }, { r: 0, g: 0, b: 0 });
  document.querySelector("#my-socials hr").style.backgroundColor =
    interpolateColor({ r: 0, g: 0, b: 0 }, { r: 51, g: 67, b: 158 });

  ths.forEach((th) => {
    th.style.backgroundColor = interpolateColor(
      { r: 33, g: 50, b: 146 },
      { r: 51, g: 67, b: 158 }
    );
  });

  mainTitles.forEach((title) => {
    title.style.color = interpolateColor(
      { r: 0, g: 0, b: 0 },
      { r: 51, g: 67, b: 158 }
    );
  });
  cardsColor.forEach((card) => {
    card.style.backgroundColor = interpolateColor(
      { r: 33, g: 50, b: 146 },
      { r: 51, g: 67, b: 158 }
    );
  });
});

function interpolateColor(initialColor, finalColor) {
  //Funcion de para cambiar de color progresivamente
  let value = colorValue;
  const r = Math.round(
    initialColor.r + (finalColor.r - initialColor.r) * (value / 1)
  );
  const g = Math.round(
    initialColor.g + (finalColor.g - initialColor.g) * (value / 1)
  );
  const b = Math.round(
    initialColor.b + (finalColor.b - initialColor.b) * (value / 1)
  );
  //console.log("rgb");
  return `rgb(${r}, ${g}, ${b})`;
}

/*--------------------MUEVE EL BOTON HACIA ABAJO----------------------------*/
const icon = document.querySelector(".down-button img");

icon.addEventListener("click", function () {
  icon.style.transition = "transform 0.1s ease"; // Agrega una clase para deslizar hacia abajo
  icon.style.transform = "translateY(10px)";

  const descriptionSection = document.getElementById("my-description");
  descriptionSection.scrollIntoView({ behavior: "smooth" }); // Desplaza a la sección
  document.getElementById("menu-content").classList.remove("visible"); //cierra el menu hamburguesa si es necesario

  setTimeout(function () {
    icon.style.transform = "translateY(0)";
  }, 200);
});
/*--------------------LIMPIA FORM----------------------------*/
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
