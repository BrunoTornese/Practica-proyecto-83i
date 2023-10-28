import { getUsers } from "./getUsers.js";

/**
 *
 * @param {string} email Recibe un email
 * @returns Crea una key en el localStorage llamada "loggedUser" que va a almacenar el objeto del usuario logeado
 */

export const setLoggedUser = (email) => {
  const users = getUsers();
  const user = users.find((user) => user.email === email);
  if (user) {
    // Almacena el objeto de usuario en localStorage
    const userJson = JSON.stringify(user);
    localStorage.setItem("loggedUser", userJson);
    console.log("Usuario autenticado:", user);
  } else {
    console.log("Usuario no encontrado");
  }
};
