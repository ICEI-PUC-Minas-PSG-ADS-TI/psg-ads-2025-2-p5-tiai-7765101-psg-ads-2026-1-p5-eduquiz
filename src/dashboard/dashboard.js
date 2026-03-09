import { auth } from "../db/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuário logado:", user.email);
  } else {
    window.location.href = "../login/login.html";
  }
});

window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "../login/login.html";
  });
};
