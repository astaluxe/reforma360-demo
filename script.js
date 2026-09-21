// ==========================================
// REFORMA360 - JAVASCRIPT COMPLETO
// ==========================================


// ==========================================
// FORMULARIO DEMOSTRATIVO
// ==========================================

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



// ==========================================
// PORTFOLIO INTERACTIVO
// ==========================================

const projects = document.querySelectorAll(".project");

const modal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalText = document.getElementById("modalText");

const closeModalButton = document.getElementById("closeModal");



function abrirProyecto(project) {

  if (!modal) return;

  modalImage.src = project.dataset.image;

  modalTitle.textContent = project.dataset.title;

  modalText.textContent = project.dataset.text;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";


  // Esto permite que el botón atrás del móvil
  // cierre primero el proyecto.

  history.pushState(
    { modalOpen: true },
    "",
    "#proyecto"
  );

}



function cerrarProyecto(cambiarHistorial = true) {

  if (!modal) return;

  modal.classList.remove("active");

  document.body.style.overflow = "";


  if (
    cambiarHistorial &&
    window.location.hash === "#proyecto"
  ) {

    history.back();

  }

}



// ==========================================
// ABRIR PROYECTOS
// ==========================================

projects.forEach(project => {

  project.addEventListener("click", function () {

    abrirProyecto(project);

  });

});



// ==========================================
// BOTÓN X
// ==========================================

if (closeModalButton) {

  closeModalButton.addEventListener("click", function () {

    cerrarProyecto();

  });

}



// ==========================================
// TOCAR FUERA DE LA VENTANA
// ==========================================

if (modal) {

  modal.addEventListener("click", function (event) {

    if (event.target === modal) {

      cerrarProyecto();

    }

  });

}



// ==========================================
// TECLA ESCAPE
// ==========================================

document.addEventListener("keydown", function (event) {

  if (
    event.key === "Escape" &&
    modal &&
    modal.classList.contains("active")
  ) {

    cerrarProyecto();

  }

});



// ==========================================
// BOTÓN ATRÁS DEL MÓVIL
// ==========================================

window.addEventListener("popstate", function () {

  if (
    modal &&
    modal.classList.contains("active")
  ) {

    modal.classList.remove("active");

    document.body.style.overflow = "";

  }

});
