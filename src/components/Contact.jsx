import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    preferredContact: "phone",
    heardAbout: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Left Section - Contact Info */}
      <div className="space-y-6 p-8">
        <h2 className="text-4xl font-bold text-amber-600 font-mono">Get in Touch</h2>
        <p className="text-gray-300 font-mono">
          Feel free to reach out! Whether you have a question or just want to drop a
          message, I'll do my best to get back to you.
        </p>

        <div className="space-y-4">
          {/* Location */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-mono text-amber-600">Location</h3>
              <p className="text-gray-300 font-mono">Amravati, Maharashtra, 444604</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-mono text-amber-600">Email</h3>
              <p className="text-gray-300 font-mono">sujalbhugul08@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-mono text-amber-600">Phone</h3>
              <p className="text-gray-300 font-mono">+91 9322733751 (WhatsApp)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-black/80 backdrop-blur-lg p-8 rounded-lg border border-white/10">
        <div>
          <label className="block text-amber-600 font-mono mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-black/20 border border-violet-600/30 text-white focus:outline-none focus:border-violet-600 font-mono"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-amber-600 font-mono mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black/20 border border-violet-600/30 text-white focus:outline-none focus:border-violet-600 font-mono"
            />
          </div>
          <div>
            <label className="block text-amber-600 font-mono mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black/20 border border-violet-600/30 text-white focus:outline-none focus:border-violet-600 font-mono"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-amber-600 font-mono mb-2">Subject</label>
          <div className="relative">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black/20 border border-violet-600/30 text-white focus:outline-none focus:border-violet-600 font-mono appearance-none cursor-pointer hover:border-amber-500 transition-colors duration-300"
              required
            >
              <option value="" disabled className="bg-black/90">Select Subject</option>
              <option value="project" className="bg-black/90">🚀 Project Inquiry</option>
              <option value="collaboration" className="bg-black/90">🤝 Collaboration</option>
              <option value="job" className="bg-black/90">💼 Job Opportunity</option>
              <option value="other" className="bg-black/90">💭 Other</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-amber-600 font-mono mb-2">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-black/20 border border-violet-600/30 text-white focus:outline-none focus:border-violet-600 font-mono resize-none"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-amber-600 font-mono mb-2">Preferred Contact Method</label>
            <div className="space-x-4">
              <label className="text-gray-300 font-mono">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === "phone"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Phone
              </label>
              <label className="text-gray-300 font-mono">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Email
              </label>
            </div>
          </div>
          <div>
            <label className="block text-amber-600 font-mono mb-2">How did you hear about me?</label>
            <input
              type="text"
              name="heardAbout"
              value={formData.heardAbout}
              onChange={handleChange}
              placeholder="Friends, Social Media, etc."
              className="w-full px-4 py-2 rounded-lg bg-black/20 border border-violet-600/30 text-white focus:outline-none focus:border-violet-600 font-mono"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 bg-violet-600 text-white rounded-lg font-mono hover:bg-amber-600 transition-colors duration-300"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;