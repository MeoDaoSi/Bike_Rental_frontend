// import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MessengerChat } from "react-messenger-chat-plugin";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <MessengerChat
      pageId="334884689697859"
      language="sv_SE"
      themeColor={"#000000"}
      bottomSpacing={300}
      loggedInGreeting="loggedInGreeting"
      loggedOutGreeting="loggedOutGreeting"
      greetingDialogDisplay={"show"}
      debugMode={true}
      onMessengerShow={() => {
        console.log("onMessengerShow");
      }}
      onMessengerHide={() => {
        console.log("onMessengerHide");
      }}
      onMessengerDialogShow={() => {
        console.log("onMessengerDialogShow");
      }}
      onMessengerDialogHide={() => {
        console.log("onMessengerDialogHide");
      }}
      onMessengerMounted={() => {
        console.log("onMessengerMounted");
      }}
      onMessengerLoad={() => {
        console.log("onMessengerLoad");
      }}
    />
    <ToastContainer />
    <App />
  </>
  // </React.StrictMode>,
)
