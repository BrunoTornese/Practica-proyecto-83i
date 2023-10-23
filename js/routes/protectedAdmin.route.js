import { getLoggedUser } from "../services/getLoggedUser.js";

/**
 *
 * @returns Si no hay usuario logeaedo, o el usuario logeado no es administrador, debe redirigir a la página principal
 */

export const protectedAdminRoute = () => {
  let user = getLoggedUser();
  if (!user || user.role !== "admin") {
    window.location.href = "../index.html";
  }
};
