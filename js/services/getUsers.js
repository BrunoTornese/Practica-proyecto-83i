/**
 *
 * @returns Devuelve el arreglo de todos los usuarios almacenados en localStorage bajo la key "users"
 */

export const getUsers = () => {
  const Users = localStorage.getItem(JSON.parse("users"));
  return Users;
};
