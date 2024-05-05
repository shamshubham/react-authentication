import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileInfo from "../components/ProfileInfo";

const Pofile = () => {
  [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch user profile data
    // You need to implement this logic
    setUsername("example_user"); // Dummu username for demonstration
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
          <div className="bg-white p-8 rounded shadow-md">
            <ProfileInfo username={username} />
            {/* Add profile page content here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
