import React, { useState } from "react";

function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState({ type: null, text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setSubmitStatus({ type: "success", text: "🎉 Thank you! Your message has been sent." });
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ type: "error", text: "⚠️ Oops! Something went wrong. Please try again." });
    }
  };

  return (
    <div
      className="py-12 bg-gray-100 flex items-center justify-center px-2"
      id="contact"
    >
  <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white p-3 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#0f2940]">
          Get In Touch
        </h2>

        <form
          action="https://formsubmit.co/arpitakalburgi7@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New portfolio contact!" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f16e44]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f16e44]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="3"
              placeholder="Write your message..."
              required
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f16e44]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f16e44] text-white py-2 rounded-md font-semibold hover:bg-[#e05a30] transition duration-300 text-sm"
          >
            Send Message
          </button>

          {/* Inline status message below the submit button */}
          {submitStatus.type && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-3 text-sm ${
                submitStatus.type === "success"
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {submitStatus.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
