import React from "react";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";

function App() {
  return (
    <div className="App d-flex" style={{backgroundColor: 'rgb(255, 246, 233)'}}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
