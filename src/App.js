import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const auth = firebase.auth();
const firestore = firebase.firestore();

import { useAuthState } from 'react-firebase-hooks/auth'
import {useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  // config
  apiKey: "AIzaSyDlHNflPY1yx-Z9fw3ua_llWH_zox1eYHQ",
  authDomain: "simplychat-6310a.firebaseapp.com",
  projectId: "simplychat-6310a",
  storageBucket: "simplychat-6310a.appspot.com",
  messagingSenderId: "509451643319",
  appId: "1:509451643319:web:343ae8314fe94424972032"
})

const SignIn = () => {
  // sign in method
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

    return(
      <button onClick={signInWithGoogle}>Sign in with Google!</button>
    )
    
  }
}

const SignOut = () => {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

const ChatRoom = () => {
  const messagesRef = firestore.collection('messages')
}

const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}



export default App;
