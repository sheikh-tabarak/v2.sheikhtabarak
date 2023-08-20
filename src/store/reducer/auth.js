// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";


// const firebaseConfig = { 
//     apiKey: "AIzaSyCbtqO_Bjp2k8yT5NL86KTWXLg6-BoS5V8",
//     authDomain: "sheikhtabarak-1019.firebaseapp.com",
//     projectId: "sheikhtabarak-1019",
//     storageBucket: "sheikhtabarak-1019.appspot.com",
//     messagingSenderId: "937342048244",
//     appId: "1:937342048244:web:79b8fd2a3b5f15dc538ba1",
//     measurementId: "G-R77PC48PBW",
//   };

// const app = initializeApp(firebaseConfig);
// const auth= getAuth();




const initialState="test";

const checkLoginApp=(state= initialState, action)=>{

    switch (action.type) {

        case "LOGIN": {
            console.log("inside inside the function + ");
            return true;
        }
        
      

        case "LOGOUT": return false;

        default: return state
    }

}

export default checkLoginApp;