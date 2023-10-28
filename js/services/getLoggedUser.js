/**
 *
 * @returns Devuelve el usuario almacenado con la key "loggedUser"
 */

export const getLoggedUser = () => {
  let loggedUserJson = localStorage.getItem("loggedUser");
  if (loggedUserJson) {
    let loggedUser = JSON.parse(loggedUserJson);
    return loggedUser;
  } else {
    return null;
  }
};
