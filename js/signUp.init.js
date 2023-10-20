import Navbar from "./components/Navbar.js";
import { validateExistingEmail } from "./validators/validateExistingEmail.js";
import { validateSignUpPassword } from "./validators/validateSignUpPassword.js";
import { validateRepeatPassword } from "./validators/validateRepeatPassword.js";
import { validateEmail } from "./validators/validateEmail.js";
import { showPassword } from "./utils/showPassword.js";
import { redirectIndex } from "./utils/redirectIndex.js";
import { createUser } from "./services/createUser.js";
import { setLoggedUser } from "./services/setLoggedUser.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
});

const showPasswordButton = document.getElementById("showPasswordBtn");

showPasswordButton.addEventListener("click", (e) => {
  showPassword(e);
});

const signUpForm = document.getElementById("signUpForm");
const signUpFormEmailInput = document.getElementById("emailSignUpInput");
const signUpFormPasswordInput = document.getElementById("emailSignUpPassword");
const signUpFormRepeatPassword = document.getElementById(
  "repeatSignUpPassword"
);

signUpFormRepeatPassword.addEventListener("paste", (e) => e.preventDefault());

/**
 *
 * @param {string} email Recibe un email
 * @returns {boolean} Debe mostrar el feedback de email válido o inválido según corresponda y devuelve un booleano.
 */

const emailFeedback = (email) => {
  signUpFormEmailInput.classList.remove("is-valid", "is-invalid");
  const isEmailValid = validateEmail(email) && validateExistingEmail(email);
  if (isEmailValid) {
    signUpFormEmailInput.classList.add("is-valid");
  } else {
    signUpFormEmailInput.classList.add("is-invalid");
  }
  return isEmailValid;
};
/**
 *
 * @param {string} password Recibe una contraseña.
 * @returns Debe mostrar el feedback de contraseña valida o invalida segun corresponda,devuelve un booleano.
 */

const passwordFeedback = (password) => {
  signUpFormPasswordInput.classList.remove("is-valid", "is-invalid");
  const isPasswordValid = validateSignUpPassword(password);
  if (isPasswordValid) {
    signUpFormPasswordInput.classList.add("is-valid");
  } else {
    signUpFormPasswordInput.classList.add("is-invalid");
  }
  return isPasswordValid;
};

/**
 *
 * @param {string} password Recibe una contraseña
 * @param {string} repeatPassword  Recibe otra contraseña
 * @returns Debe mostrar el feedback de comparación de contraseñas valida o invalida segun corresponda, devuelve un booleano.
 */

const repeatPasswordFeedback = (password, repeatPassword) => {
  signUpFormRepeatPassword.classList.remove("is-valid", "is-invalid");
  const isRepeatPasswordValid = validateRepeatPassword(
    password,
    repeatPassword
  );
  if (isRepeatPasswordValid) {
    signUpFormRepeatPassword.classList.add("is-valid");
  } else {
    signUpFormRepeatPassword.classList.add("is-invalid");
  }
  return isRepeatPasswordValid;
};

/**
 *
 * @param {object} e Recibe el evento de submit del formulario
 * @returns Si la información del formulario es valida, debe registrar al usuario, logearlo, mostrar el modal de registro exitoso y redirigirlo a la página principal.
 */
const signUpSubmit = (e) => {
  e.preventDefault();
  const isEmailValid = emailFeedback(signUpFormEmailInput.value);
  const isPasswordValid = passwordFeedback(signUpFormPasswordInput.value);
  const isRepeatPasswordValid = repeatPasswordFeedback(
    signUpFormPasswordInput.value,
    signUpFormRepeatPassword.value
  );
  if (isEmailValid && isPasswordValid && isRepeatPasswordValid) {
    showSuccesfulSignUpModal();
    redirectIndex();
  }
};

signUpForm.addEventListener("submit", signUpSubmit);
