import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Giriş yapıldı:", user.email);
    } else {
        console.log("Giriş yapılmadı.");
    }
});
