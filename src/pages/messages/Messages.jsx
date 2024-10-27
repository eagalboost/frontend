import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Messages.css";

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get("https://eaglesboost.com/api/conversations", {
          withCredentials: true,
        });
        setIsAdmin(localStorage.getItem("isAdmin") === "true"); // Check if admin
        setConversations(response.data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    fetchConversations();
  }, []);

  const handleRowClick = (conversationId) => {
    navigate(`/messages/${conversationId}`);
  };

  const handleReadBy = async (convId) => {
    try {
      const response = await axios.put(
        `https://eaglesboost.com/api/conversations/${convId}`,
        {},
        { withCredentials: true }
      );
      setConversations((prev) =>
        prev.map((conv) => (conv._id === convId ? response.data : conv))
      );
    } catch (error) {
      console.error("Error updating read status:", error);
    }
  };

  if (!conversations.length) return <p>Loading...</p>;

  return (
    <div className="conversation-table-container">
      <h2>{isAdmin ? "Admin Conversations" : "Your Conversations"}</h2>
      <table className="conversation-table">
        <thead>
          <tr>
            <th>{isAdmin ? "Buyer ID" : "Admin ID"}</th>
            <th>Last Message</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {conversations.map((conv) => (
            <tr key={conv._id} onClick={() => handleRowClick(conv._id)} className="conversation-row">
              <td>{isAdmin ? conv.buyerId : conv.adminId}</td>
              <td>{conv.lastMessage}</td>
              <td>{new Date(conv.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => handleReadBy(conv._id)} className="conversation-read-button">
                  {isAdmin ? "Mark as Read by Admin" : "Mark as Read by Buyer"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
