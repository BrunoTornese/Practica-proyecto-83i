import { User } from "../classes/user.class.js";
import { getUsers } from "./getUsers.js";

/**
 *
 * @param {string} email Recibe un email válido
 * @param {string} password Recibe una contraseña válida
 * @return Crea un nuevo usuario y lo setea en localStorage con la key "users"
 */

export const createUser = ({ email, password }) => {
  if (email && password) {
    const newUser = new User({ email, password, role: "user" });
    let usuariosExistentes = getUsers() || [];
    usuariosExistentes.push(newUser);
    localStorage.setItem("users", JSON.stringify(usuariosExistentes));
  }
};
