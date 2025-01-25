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
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ELITA, your virtual nurse! How can I assist you today?",
      sentTime: "just now",
      sender: "ELITA",
      direction: "incoming",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (userMessage) => {
    setMessages((prev) => [...prev, { message: userMessage, direction: "outgoing", sender: "User" }]);

    setIsTyping(true);
    try {
      const response = await axios.post("http://localhost:8080/api/chat", {
        message: userMessage,
      });

      const { ai_response } = response.data;

      setMessages((prev) => [...prev, { message: ai_response, direction: "incoming", sender: "ELITA" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          message: "Oops! Something went wrong. Please try again later.",
          direction: "incoming",
          sender: "ELITA",
        },
      ]);
    } finally {
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