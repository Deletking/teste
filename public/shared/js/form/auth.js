function hasError(field) {
  const validity = field.validity;

  if (validity.valid) return;

  if (validity.valueMissing) return "Campo obrigatório.";

  if (validity.patternMismatch) return "formato inválido.";

  if (validity.tooShort) {
    const min = field.getAttribute("minLength");
    const numbersOfCharactersEntered = field.value.length;

    return `O mínimo de caracteres são ${min}. por favor acrescente ao menos mais ${
      min - numbersOfCharactersEntered
    } caractere(s)`;
  }
}

function showError(field, error) {
  field.classList.add("error");

  const id = field.id;

  if (!id) return;

  let message = field.form.querySelector(".error-message#error-for-" + id);

  if (!message) {
    message = document.createElement("div");
    message.className = "error-message text-danger  mt-1";
    message.id = "error-for-" + id;
    field.parentNode.insertBefore(message, field.nextSibling);
  }

  message.innerHTML = error;

  message.style.display = "block";
}

function removeError(field) {
  field.classList.remove("error");

  const id = field.id;
  if (!id) return;

  let message = field.form.querySelector(".error-message#error-for-" + id + "");
  if (!message) return;

  message.innerHTML = "";
  message.style.display = "none";
}

function touchedField(event) {
  const error = hasError(event.target);

  if (error) {
    showError(event.target, error);
    return;
  }

  removeError(event.target);
}

export default touchedField;
