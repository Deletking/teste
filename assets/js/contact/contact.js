$(document).ready(function () {
  $("#formSend").submit(function () {
    const serializedData = $(this).serialize();

    $.post("contact.php", serializedData, (result) => {
      console.log("success", result);
      sendEmail();
    }).fail((error) => console.error(`Error: ${error.status}`));

    return false;
  });

  function sendEmail() {
    const $sendEmail = document.querySelector("#sendEmail");
    const $formEmail = document.querySelector("#formEmail");

    $sendEmail.classList.remove("d-none");
    $formEmail.classList.remove("d-flex");
    $formEmail.classList.add("d-none");
  }
});
