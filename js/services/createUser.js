import { User } from "../classes/user.class.js";
import { getUsers } from "./getUsers.js";
/**
 *
 * @param {string} email Recibe un email valido
 * @param {string} password Recibe una contraseña valido
 * @return Crea un nuevo usuario y lo setea en localStorage con la key "users"
 */

export const createUser = ({ email, password }) => {
  if (email.isValid && password.isValid) {
    let user = {
      email: email.value,
      password: password.value,
    };
    let userJSON = JSON.stringify(user);
    localStorage.setItem("users", userJSON);
  }
};
