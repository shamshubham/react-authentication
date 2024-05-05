// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Next.js Auth App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <i className="text-white hover:text-gray-200">Home</i>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <i className="text-white hover:text-gray-200">Login</i>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <i className="text-white hover:text-gray-200">Signup</i>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <i className="text-white hover:text-gray-200">Profile</i>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <i className="text-white hover:text-gray-200">Logout</i>
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
