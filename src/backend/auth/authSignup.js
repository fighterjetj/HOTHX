import { auth, db } from "../firebase"
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import errorCodes from "../errorCodes.json"

/* 
Function that, when passed an email, password, and a confirmation of password attempts to sign user up
If it runs into a problem, will return the error message
Otherwise returns an empty string
The error is set to the output of this function
*/

async function authSignup(name, email, password, confirm) {
  let user = null;
  // Checking that the password and its confirmation are the same
  if (name.length === 0){
    throw new Error("Must Provide a Name");
  }
  if (password !== confirm){
    //console.log("Password no match");
    throw new Error("Passwords Do Not Match");
  }
  if (password.length < 6){
    throw new Error("Password must be at least six characters long");
  }
  let toReturn = await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    user = userCredential.user;
    return null;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    console.log (`Error code ${errorCode} with message ${errorMessage}`);
    for (const errorType in errorCodes){
      const errorObj = errorCodes[errorType];
      if (errorObj.code === errorCode){
        throw new Error(errorObj.error);
      }
    }
    throw new Error("Ran into an issue creating account");
  });
  // Setting up the user document in the users collection
  if (user !== null){
    const docData = {
      name: name,
      email: user.email,
      num_transactions_ranked: 0,
      own_transactions: [],
    };
    await setDoc(doc(db, "users", user.uid), docData);
  }
  return toReturn;
  };

export default authSignup;
  