import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaComment } from "react-icons/fa";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("https://eaglesboost.com/api/orders", {
          withCredentials: true,
        });
        const { data } = response;

        setIsAdmin(data.isAdmin);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/orders/${orderId}`);
  };

  const handleMessageClick = async (order, event) => {
    event.stopPropagation();

    const adminId = isAdmin ? order.adminId : order.buyerId;
    const buyerId = isAdmin ? order.buyerId : order.adminId;

    console.log("Creating conversation with:", {
      buyerId: buyerId,
      adminId: adminId,
    });

    try {
      const response = await axios.post(
        "https://eaglesboost.com/api/conversations",
        {
          buyerId: buyerId,
          adminId: adminId,
        },
        { withCredentials: true }
      );

      const conversationId = response.data._id;
      navigate(`/messages/${conversationId}`);
    } catch (error) {
      console.error("Error creating conversation:", error);
    }
  };

  if (!orders.length) return <p>No orders found.</p>;

  return (
    <div className="orders-page">
      <h2>{isAdmin ? "Admin Orders" : "Your Orders"}</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              onClick={() => handleRowClick(order._id)}
              style={{ cursor: "pointer" }}
            >
              <td>{order.buyerUsername}</td>
              <td style={{ textAlign: "center" }}>
                <img src={order.image} alt={order.title} width="50" />
              </td>
              <td>{order.title}</td>
              <td>${order.price}</td>
              <td style={{ textAlign: "center" }}>
                <FaComment
                  onClick={(event) => handleMessageClick(order, event)} // Pass the entire order object
                  style={{ cursor: "pointer", color: "#fff" }}
                  className="message-icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
