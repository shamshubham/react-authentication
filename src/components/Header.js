// components/Header.js
import Link from "next/link";

const Header = ({ isLoggedIn }) => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2x1 font-bold">Your App Name</h1>
        <nav>
          <ul className="flex space-x-4">
            {isLoggedIn ? (
              <>
                <li>
                  <Link href="/">
                    <span className="hover:text-gray-300">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <span className="hover:text-gray-300">Profile</span>
                  </Link>
                </li>
                <li>
                  <Link href="/logout">
                    <span className="hover:text-gray-300">Logout</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">
                    <span className="hover:text-gray-300">Login</span>
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    <span className="hover:text-gray-300">Signup</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
