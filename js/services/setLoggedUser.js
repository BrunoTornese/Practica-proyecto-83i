import { getUsers } from "./getUsers.js";

/**
 *
 * @param {string} email Recibe un email
 * @returns Crea una key en el localStorage llamada "loggedUser" que va a almacenar el objeto del usuario logeado
 */

export const setLoggedUser = (email) => {
  let users = getUsers();
  let user = users.find((user) => user.email === email);
  let userJson = localStorage(JSON.stringify(user));
  localStorage.setItem("loggedUser", userJson);
};
