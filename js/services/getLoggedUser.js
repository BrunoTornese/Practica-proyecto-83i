/**
 *
 * @returns Devuelve el usuario almacenado con la key "loggedUser"
 */

export const getLoggedUser = () => {
  const userLoged = localStorage.getItem("loggedUser");
  if (userLoged) {
    const user = JSON.parse(userLoged);
    return user;
  }
  return null;
};
