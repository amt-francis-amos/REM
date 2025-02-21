import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const exchangeRate = 15; 

const Donate = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("GHS"); 
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const convertAmount = () => {
    return currency === "USD" ? parseFloat(amount) * exchangeRate : parseFloat(amount);
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!email || !amount || !firstName || !lastName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (parseFloat(amount) < 1) {
      toast.error("Amount must be at least 1.");
      return;
    }

    if (!window.PaystackPop) {
      toast.error("Payment gateway is not available. Please try again.");
      return;
    }

    if (currency === "USD") {
      toast.error("USD transactions require special approval. Please use GHS instead.");
      return;
    }

    let handler = window.PaystackPop.setup({
      key: "pk_live_4e354fe66089b2677910f80a9a1b6818a66fbd42",
      email,
      amount: convertAmount() * 100, 
      currency,
      ref: "DONATE-" + Math.floor(Math.random() * 1000000000 + 1),
      channels: ["card", "mobile_money"], 
      metadata: {
        custom_fields: [
          {
            display_name: "Donor Name",
            variable_name: "donor_name",
            value: `${firstName} ${lastName}`,
          },
        ],
      },
      onClose: () => toast.warn("Payment process was cancelled."),
      callback: (response) => {
        toast.success(`Payment successful! Ref: ${response.reference}`);
      },
    });

    handler.openIframe();
  };

  return (
    <motion.section
      className="bg-gray-100 min-h-screen py-12 px-6"
      initial="hidden"
      animate="visible"
    >
      <ToastContainer position="top-center" autoClose={3000} />

      <motion.div className="relative" variants={fadeIn}>
        <div className="bg-gray-800 text-white py-16 text-center rounded-lg shadow-lg">
          <motion.h1 className="text-4xl font-bold" variants={fadeIn}>
            Always Give Without Remembering,
            <br /> Always Receive Without Forgetting
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={fadeIn}
      >
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Fill in the Form to Donate
          </h2>
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 font-medium">Amount</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full p-3 border rounded-lg"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Currency</label>
                <select
                  className="w-full p-3 border rounded-lg"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="GHS">GHS (Ghana Cedis)</option>
                  <option value="USD">USD (US Dollars)</option>
                </select>
                {currency === "USD" && (
                  <p className="text-red-600 text-sm mt-2">
                    ⚠️ USD transactions require Paystack approval.
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-lg"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-lg"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

         
            <div>
              <label className="block text-gray-600 font-medium">Payment Method</label>
              <select
                className="w-full p-3 border rounded-lg"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="card">Credit/Debit Card</option>
                <option value="momo">Mobile Money</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
            >
              Donate Now
            </button>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Donate;
