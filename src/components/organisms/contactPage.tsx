import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Contact Information */}
          <div className="flex flex-col justify-start space-y-8">
            <div>
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Let's Build{" "}
                <span 
                  className="bg-clip-text font-light"
                  style={{
                    WebkitTextFillColor: "transparent",
                    backgroundImage: "linear-gradient(92.2deg, rgb(119, 235, 255) 5.5%, rgb(84, 118, 239) 21.5%, rgb(3, 146, 255) 48.5%, rgb(119, 235, 255) 75.5%, rgb(0, 69, 223) 102.5%)"
                  }}
                >
                  Something Amazing Together
                </span>
              </h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Share your project details and let's create beautiful, functional digital experiences.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:hello@dappstudio.com" className="text-white text-base hover:underline transition-all">
                  hello@dappstudio.com
                </a>
              </div>

              {/* Telegram */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: 'rotate(45deg)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <a href="https://t.me/dappstudio" target="_blank" rel="noopener noreferrer" className="text-white text-base hover:underline transition-all">
                  @dappstudio
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full">
            <div className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-white text-sm block mb-2 font-normal">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border-0 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 placeholder:text-zinc-600"
                    placeholder="Ex. Micheal Bay"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white text-sm block mb-2 font-normal">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border-0 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 placeholder:text-zinc-600"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>

              {/* Phone and Communication Method Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-white text-sm block mb-2 font-normal">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border-0 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 placeholder:text-zinc-600"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-white text-sm block mb-2 font-normal">
                    Fastest Way to Reach You
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border-0 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 placeholder:text-zinc-600"
                    placeholder="e.g. Telegram, Discord, WhatsApp, etc."
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="text-white text-sm block mb-2 font-normal">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-zinc-900 border-0 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 placeholder:text-zinc-600 resize-none"
                  placeholder="Your Message"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-black font-semibold text-base py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
                >
                  Submit Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}