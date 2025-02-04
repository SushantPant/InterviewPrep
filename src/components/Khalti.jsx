import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const Khalti = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically verify payment when redirected back
    const pidx = searchParams.get("pidx");
    const status = searchParams.get("status");

    if (status === "canceled") {
      setPaymentStatus("❌ Payment Canceled");
    } else if (status === "success") {
      setPaymentStatus("✅ Payment Successful");
    }
    setTimeout(() => {
      setPaymentStatus(null);
      navigate("/");
    }, 2000);
  }, [searchParams]);

  const handlePaymentInitiation = async () => {
    const itemDetails = {
      itemId: "dummy-item-id",
      totalPrice: 1000, // Dummy price in NPR
      website_url: "http://localhost:5173/khalti", // Make sure this matches the frontend route!
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/initialize-khali",
        itemDetails
      );

      if (response.data.success) {
        window.location.href = response.data.payment.payment_url;
      } else {
        alert("Khalti initialization failed");
      }
    } catch (error) {
      console.error("Error during payment initiation:", error);
      alert("There was an error initiating the payment");
    }
  };

  const verifyPayment = async (pidx) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/complete-khalti-payment",
        {
          params: { pidx },
        }
      );

      if (response.data.success) {
        setPaymentStatus("✅ Khalti Payment Successful!");
      } else {
        setPaymentStatus("❌ Khalti Payment Failed!");
      }
    } catch (error) {
      console.error("Error during payment verification:", error);
      setPaymentStatus("⚠️ Error verifying payment.");
    }
  };

  return (
    <div>
      <h1>Pay with Khalti</h1>
      <button onClick={handlePaymentInitiation}>Initiate Khalti</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Khalti;
