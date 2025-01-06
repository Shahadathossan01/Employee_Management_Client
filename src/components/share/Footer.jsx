const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                We are dedicated to providing the best web solutions for your
                business. Our team ensures top-notch service and support.
              </p>
            </div>
  
           
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
     
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm">Email: info@yourwebsite.com</p>
              <p className="text-sm">Phone: +123 456 789</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.494v-9.294H9.847V11.41h2.972V8.797c0-2.937 1.796-4.545 4.415-4.545 1.254 0 2.33.093 2.645.134v3.065h-1.816c-1.427 0-1.702.678-1.702 1.671v2.186h3.41l-.445 3.296h-2.965V24h5.818c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.826 9.826 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.924 4.924 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.573A4.904 4.904 0 01.964 9.7v.061a4.923 4.923 0 003.95 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417A9.869 9.869 0 010 21.54a13.946 13.946 0 007.548 2.211c9.057 0 14.01-7.506 14.01-14.01 0-.213-.004-.426-.013-.637A10.006 10.006 0 0024 4.557z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.729C24 .774 23.208 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.711c-1.12 0-2.03-.915-2.03-2.042 0-1.127.91-2.042 2.03-2.042 1.12 0 2.03.915 2.03 2.042 0 1.127-.91 2.042-2.03 2.042zM20.452 20.452h-3.5v-5.729c0-1.365-.027-3.115-1.897-3.115-1.897 0-2.19 1.482-2.19 3.012v5.832h-3.5V9h3.363v1.561h.049c.47-.89 1.617-1.83 3.33-1.83 3.56 0 4.215 2.344 4.215 5.39v6.331z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            &copy; {new Date().getFullYear()} Employee Management. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  