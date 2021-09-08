import "./formatting.js";
import touchedField from "./auth.js";

const form = document.querySelector(".form");

form.addEventListener("blur", (event) => touchedField(event), true);