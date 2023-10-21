import { getUsers } from "../services/getUsers.js";

/**
 *
 * @param {email} email  Recibe un email
 * @param {password} password Recibe una contraseña
 * @returns {bool} Devuelvue un booleano si las credenciales del usuario estan registradas.
 */

export const validateLoginUser = ({ email, password }) => {
  const users = getUsers();
  for (const user of users) {
    if (user.email === email && user.password === password) {
      return true;
    }
  }
  return false;
};
