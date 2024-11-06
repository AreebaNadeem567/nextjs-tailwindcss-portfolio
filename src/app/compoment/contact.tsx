import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-black p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6 sm:mb-8">Contact Us</h1>
      <form className="w-full max-w-md sm:max-w-lg bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;