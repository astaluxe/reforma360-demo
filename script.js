// ===============================
// FORMULARIO DEMOSTRATIVO
// ===============================

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    const button = form.querySelector("button");

    button.textContent = "Solicitud preparada ✓";
    button.disabled = true;

    setTimeout(() => {

      alert(
        "Esto es una demostración. En una web real aquí se enviaría la solicitud al negocio."
      );

      form.reset();

      button.textContent = "Solicitar presupuesto";
      button.disabled = false;

    }, 500);

  });

}


// ===============================
// PORTFOLIO INTERACTIVO
// ===============================

const projects = document.querySelectorAll(".project");

const modal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const closeModal = document.getElementById("closeModal");


projects.forEach(project => {

  project.addEventListener("click", () => {

    modalImage.src = project.dataset.image;

    modalTitle.textContent = project.dataset.title;

    modalText.textContent = project.dataset.text;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


function cerrarModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


closeModal.addEventListener("click", cerrarModal);


modal.addEventListener("click", event => {

  if (event.target === modal) {
    cerrarModal();
  }

});


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    cerrarModal();
  }

});
