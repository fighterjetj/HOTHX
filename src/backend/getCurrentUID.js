import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


// Listener that detects if the uid changes, and sets the uid to the new one if it does
let uid;
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
  } else {
    uid = null;
  }
});

// If uid is null, no one is logged in
function getCurrentUID(){
  return uid;
}
export default getCurrentUID;
