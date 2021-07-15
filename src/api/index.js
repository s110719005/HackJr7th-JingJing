import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";


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
//ALL PRODUCTS
const allProductsCollectionRef = firebase.firestore().collection("allProducts");
//SAVE USER PUBLIC DATA
const allUserRef = firebase.firestore().collection("allUser");

//REFERENCE AUTH
const auth = firebase.auth();

export const getHeaderTitle = (url) => {
  switch (url) {
    case "/":
      return "home";
    case "/Product/All":
      return "product";
    case "/About":
      return "about";
    case "/Account":
      return "account";
    case "/SignInUp":
      return "signIn";
    default:
      return "home";
  }
};

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  //console.log(jsonInfo.find(element => element.url === url));
  const collectionName = collection.name || "products";
  //const collectionName = "allProducts";
  
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  if (collectionName === "products")
    querySnapshot = await allProductsCollectionRef.get();
  else
    querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}
export const getRelativeProducts = async (categoryName,id) => {
  const collectionName = categoryName;
  //const collectionName = "allProducts";
  
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
    if(doc.data().id===id){}
    else
      jsonProducts.push(doc.data());
  });
  console.log(jsonProducts);
  return jsonProducts;
}

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}

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