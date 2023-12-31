import { getLoggedUser } from "../services/getLoggedUser.js";

/**
 *
 * @returns Si el usuario no esta logeado, debe redirigir a la página de Login
 */

export const notLoggedRoute = () => {
  let usuarioLog = getLoggedUser();
  if (!usuarioLog) {
    window.location.href = "views/login.html";
  }
};
