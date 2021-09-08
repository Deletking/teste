const phoneNumber = document.querySelector("#phoneNumber");


function formatterPhoneNumberField(field) {
  field.value = field.value.replace(/\D/g, ""); //Remove tudo o que não é dígito
  field.value = field.value.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  field.value = field.value.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return field.value;
}

window.addEventListener('load', () => phoneNumber.onkeyup = (event) => formatterPhoneNumberField(event.target))