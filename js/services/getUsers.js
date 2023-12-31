/**
 *
 * @returns Devuelve el arreglo de todos los usuarios almacenados en localStorage bajo la key "users"
 */

export const getUsers = () => {
  let users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};
