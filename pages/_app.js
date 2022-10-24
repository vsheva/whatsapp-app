import '../styles/globals.css'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import React, {useEffect} from "react";
import Login from "./Login.js";
import Loading from "../components/Loading";
import firebase from "firebase/compat/app";


function MyApp({Component, pageProps}) {
    const [user, loading] = useAuthState(auth);

    //firebase
    useEffect(()=>{
        if(user) {
            db.collection('users').doc(user.uid).set({
                email:user.email,
                lastSeen:firebase.firestore.FieldValue.serverTimestamp(), /*for different timezones*/
                photoURL:user.photoURL,
            },
                {merge: true});
        }
    }, [user]);

    if (loading) return <Loading/>;
    if (!user) return <Login/>;


    return <>
        <Component {...pageProps} />
    </>
}

export default MyApp
