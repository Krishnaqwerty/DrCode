import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    try {
      const API_KEY = "YOUR_API_KEY_HEREAIzaSyDoFLfdbGJWvgv4fZ6mvswvntmEXdW5Bdw"; // Replace with actual API key
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${API_KEY}`;

      const res = await axios.post(API_URL, {
        prompt: { text: message }, // Correct API format
      });

      setResponse(res.data.candidates?.[0]?.output || "No response from AI.");
    } catch (error) {
      setResponse("Error: " + (error.response?.data?.error?.message || error.message));
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Chat with Gemini AI</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ padding: "10px", width: "80%" }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          cursor: "pointer",
          background: "#007bff",
          color: "white",
          border: "none",
        }}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
      <p style={{ marginTop: "20px" }}>
        <strong>Response:</strong> {response}
      </p>
    </div>
  );
};

export default Chat;
