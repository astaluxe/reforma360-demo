const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const button = form.querySelector("button");

  button.textContent = "Solicitud preparada ✓";
  button.disabled = true;

  setTimeout(() => {
    alert(
      "Esto es una demostración. En una web real, aquí se enviaría la solicitud al negocio."
    );

    form.reset();
    button.textContent = "Solicitar presupuesto";
    button.disabled = false;
  }, 500);
});
