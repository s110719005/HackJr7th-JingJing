import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// INITIALIZE FIREBASE
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
  };

firebase.initializeApp(firebaseConfig);

//SAVE USER PUBLIC DATA
const allUserRef = firebase.firestore().collection("allUser");

//REFERENCE AUTH
const auth = firebase.auth();

export const signInWithEmailPassword = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  }

export const registerWithEmailPassword = async (email, password, name,birthday,phoneNumber) => {
    await auth.createUserWithEmailAndPassword(email, password);
    const user = auth.currentUser;
  
    await user.updateProfile({
      displayName: name,
    })
    const userRef = await allUserRef.doc(auth.currentUser.uid);
    const id = userRef.id;
    await userRef.set({
      uid: auth.currentUser.uid,  
      name: name,
      email:email,
      birthday:"",
      phoneNumber: phoneNumber,
    });
    return user;
  }

  export const signOut = () => {
    auth.signOut();
  }
  
  export const checkLoginApi = () => {
    const user = auth.currentUser;
    return user.uid?  true : false;
  }