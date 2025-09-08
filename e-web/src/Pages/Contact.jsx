import React, { useState } from "react";
import { Helmet } from "react-helmet";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost/PHP/save_contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Server response:", result);

      if (result.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Failed to send: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | My Website</title>
      </Helmet>

      <div className="text-white bg-gray-900 min-h-screen px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-6">
            Contact <span className="text-yellow-400">Us</span>
          </h1>

          <p className="text-gray-300 text-lg mb-10">
            We’d love to hear from you! Use the form below to reach out.
          </p>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Back to Home */}
          <div className="mt-10">
            <a href="/" className="inline-block text-yellow-400 hover:underline">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
