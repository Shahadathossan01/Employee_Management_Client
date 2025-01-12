
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const {user,logOut}=useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = () => {
    logOut()
  };
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link className="text-2xl font-bold">
              Employee Management
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            {
              user?.role=='admin'?(
                ""
              ):
            (
            <Link
              to="/register"
              className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Register
            </Link>
            )
            }
            {
              user?
            <Link
              onClick={handleLogout}
              className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </Link>
            :
            <Link
              to="/login"
              className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            }
            {
              user?.role=='employee'&&
            <Link
              to="/employee_dashboard"
              className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            }
            {
            user?.role=='admin' &&
            <Link
              to="/admin_dashboard"
              className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            }
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-500">
          {
              user?.role=='admin'?(
                ""
              ):
            (
            <Link
              to="/register"
               className="block px-4 py-2 text-sm hover:bg-blue-400"
            >
              Register
            </Link>
            )
            }
            {
              user?
            <Link
              onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-red-400"
            >
              Logout
            </Link>
            :
            <Link
            to="/login"
            className="block px-4 py-2 text-sm hover:bg-blue-400"
          >
            Login
          </Link>
            }
          {
              user?.role=='employee'&&
            <Link
              to="/employee_dashboard"
              className="block px-4 py-2 text-sm hover:bg-blue-400"
            >
              Dashboard
            </Link>
            }
            {
            user?.role=='admin' &&
            <Link
              to="/admin_dashboard"
              className="block px-4 py-2 text-sm hover:bg-blue-400"
            >
              Dashboard
            </Link>
            }
        </div>
      )}
    </nav>
  );
};

export default Navbar;
