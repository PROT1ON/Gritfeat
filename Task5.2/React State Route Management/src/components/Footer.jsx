import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-screen-lg mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Copyright */}
        <p className="text-sm text-gray-400">
          &copy; 2026 All Rights Reserved.
        </p>

        {/* Right side: Social Media Links or Other Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;