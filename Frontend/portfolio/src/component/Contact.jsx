import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server error, please try again later.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0d1117] flex items-center justify-center px-4 py-8" id="contact">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-[#111827] rounded-2xl shadow-lg p-8">

        {/* Left Side - Contact Info */}
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-6">Contact <span className="text-cyan-400">Me</span></h1>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            I'm open to opportunities in web development, Java, database, and collaborative projects. 
            Reach out using the form or via the contact info below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3"><FaMapMarkerAlt className="text-cyan-400 text-xl" /> <p>Pune, Maharashtra</p></div>
            <div className="flex items-center space-x-3"><FaPhoneAlt className="text-cyan-400 text-xl" /> <p>+91 766419871</p></div>
            <div className="flex items-center space-x-3"><FaEnvelope className="text-cyan-400 text-xl" /> 
              <a href="mailto:gulhanea76@gmail.com" className="text-cyan-400 hover:underline">gulhanea76@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
            className="w-full p-3 rounded-lg bg-[#0a0f1c] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required
            className="w-full p-3 rounded-lg bg-[#0a0f1c] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
          <input type="text" name="phone" placeholder="Your Number" value={formData.phone} onChange={handleChange} required
            className="w-full p-3 rounded-lg bg-[#0a0f1c] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
          <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required
            className="w-full p-3 rounded-lg bg-[#0a0f1c] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
          <button type="submit"
            className="w-full p-3 bg-cyan-400 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-500 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
