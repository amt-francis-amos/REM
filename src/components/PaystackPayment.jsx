import React, { useState } from "react";
import { loadScript } from "paystack-js";

const PaystackPayment = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!email || !amount) {
      alert("Please enter all fields");
      return;
    }

    const paystack = await loadScript();

    let handler = paystack.Pop.setup({
      key: "pk_live_4e354fe66089b2677910f80a9a1b6818a66fbd42", 
      email: email,
      amount: amount * 100, 
      currency: "GHS",
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), 
      onClose: function () {
        alert("Payment window closed.");
      },
      callback: function (response) {
        alert(`Payment complete! Reference: ${response.reference}`);
      },
    });

    handler.openIframe();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Donate with Paystack
      </h2>
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Amount (GHS)</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default PaystackPayment;
