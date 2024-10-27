import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./OrderDetails.css"

const OrderDetails = () => {
  const { orderId } = useParams(); 
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`https://eaglesboost.com/api/orders/${orderId}`, {
          withCredentials: true,
        });
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!order) return <p>Loading order details...</p>;

  return (
    <div className="order-details">
      <h2>Order Details</h2>
      <p><strong>Service ID:</strong> {order.serviceId}</p>
      <img src={order.image} alt={order.title} width="100" />
      <p><strong>Title:</strong> {order.title}</p>
      <p><strong>Price:</strong> ${order.price}</p>
      <p><strong>Admin ID:</strong> {order.adminId}</p>
      <p><strong>Buyer ID:</strong> {order.buyerId}</p>
      <p><strong>Status:</strong> <span className="status">{order.isCompleted ? "Completed" : "In Progress"}</span></p>
    </div>
  );
};

export default OrderDetails;
