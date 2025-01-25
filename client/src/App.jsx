import React, { useState } from "react"
import axios from "axios"
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react"
import "./App.css"
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"

function App() {
  // Initializing Message, and enabling messages using useState
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ELITA, your virtual nurse! How can I assist you today?",
      sentTime: "just now",
      sender: "ELITA",
      direction: "incoming",
    },
  ]);

  //typing Indicator is initialized using useState, and is automatically set to false
  const [isTyping, setIsTyping] = useState(false);

  //how the user sends messages, and the ai responnds
  const handleSend = async (userMessage) => {
    //how the message is displayed in the message container when the user sends it. ...prev refers to all previous messages
    setMessages((prev) => [...prev, { message: userMessage, direction: "outgoing", sender: "User" }]);

    //after the user sends a message, typing indicator is automatically set to true
    setIsTyping(true);
    
    try {
      // Send the user's message to the backend API
      const response = await axios.post("http://localhost:8080/api/chat", {
        message: userMessage, // Pass the user's message in the request body
      });
    
      // Extract the AI's response from the API response
      const { ai_response } = response.data;
    
      // Add the AI's response to the chat message list
      setMessages((prev) => [
        ...prev, 
        { message: ai_response, direction: "incoming", sender: "ELITA" }
      ]);
    } catch (error) {
      // Handle any errors during the API call
      console.error("Error:", error);
    
      // Add an error message to the chat message list
      setMessages((prev) => [
        ...prev,
        {
          message: "Oops! Something went wrong. Please try again later.",
          direction: "incoming",
          sender: "ELITA",
        },
      ]);
    } finally {
      // Stop showing the typing indicator
      setIsTyping(false);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>ELITA Ai</h1>
      </header>
      <div
        style={{
          position: "relative",
          height: "85vh",
          width: "100%",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <MainContainer>
          <ChatContainer>
            <MessageList typingIndicator={isTyping ? <TypingIndicator content="ELITA is typing..." /> : null}>
              {messages.map((message, i) => (
                <Message key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Ask a question..." onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;