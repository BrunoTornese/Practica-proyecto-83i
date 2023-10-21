/**
 *
 * @returns Devuelve el arreglo de todos los usuarios almacenados en localStorage bajo la key "users"
 */

export const getUsers = () => {
  const usersString = localStorage.getItem("users");
  if (usersString) {
    return JSON.parse(usersString);
  } else {
    return [];
  }
};
