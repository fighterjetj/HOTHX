import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import errorCodes from "../errorCodes.json";

async function authLogin(email, password){
  let toReturn = await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    console.log(`Logged in user ${email}, ${user.uid}`);
    return user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log (`Error code ${errorCode} with message ${errorMessage}`);
    for (const errorType in errorCodes){
      const errorObj = errorCodes[errorType];
      if (errorObj.code === errorCode){
        throw new Error(errorObj.error);
      }
    }
    throw new Error("Ran into an error signing in");
  });
  return toReturn;
}

export default authLogin;