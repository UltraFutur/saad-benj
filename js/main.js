// Charger le header
fetch("./template/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("./template/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// Accordéons
let accordionButtons = document.querySelectorAll(".accordion-button");
let accordionCollapse = document.querySelectorAll(".accordion-collapse");

accordionButtons.forEach(function (buttonEl) {
  buttonEl.addEventListener("click", function () {
    let targetCollapse = buttonEl.parentElement.nextElementSibling; // Trouve l'élément .accordion-collapse associé
    let arrowDownIcon = buttonEl.querySelector(".bi-arrow-down");

    // Boucle pour fermer tous les autres panels
    accordionCollapse.forEach(function (collapseEl) {
      if (collapseEl !== targetCollapse) {
        collapseEl.classList.remove("show");
        collapseEl.style.maxHeight = "0"; // Réinitialiser la hauteur pour les autres panels

        // Réinitialiser la rotation de la flèche pour les autres panels
        let prevArrowDownIcon =
          collapseEl.previousElementSibling.querySelector(".bi-arrow-down");
        if (prevArrowDownIcon) {
          prevArrowDownIcon.style.transform = "rotate(0)";
        }
      }
    });

    // Bascule l'affichage du collapse correspondant
    if (targetCollapse.classList.contains("show")) {
      targetCollapse.style.maxHeight = "0"; // Ferme le panel en réduisant la hauteur à 0
      targetCollapse.classList.remove("show");
      arrowDownIcon.style.transform = "rotate(0)";
    } else {
      targetCollapse.classList.add("show");
      targetCollapse.style.maxHeight = targetCollapse.scrollHeight + "px"; // Ouvre le panel en ajustant à la hauteur de contenu
      arrowDownIcon.style.transform = "rotate(180deg)";
    }
  });
});
