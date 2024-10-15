import { template } from "./template/template";

import "./style/style.css";

document.querySelector("#app").innerHTML = template;

const form = document.querySelector("form");

let formFields = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = Object.fromEntries(new window.FormData(e.target));

  formFields.push(fields);
  console.log(formFields);
});


