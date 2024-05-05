import React, { useState } from "react";
import Link from "next/link";
import SignupForm from "../components/SignupForm";
import { useRouter } from "next/router";

const Signup = ({ isLoggedIn, setIsLoggedIn }) => {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleSignup = async (userData) => {
    try {
      // Call signup API with userdata
      // const response = await fetch("/api/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // });

      // if (!response.ok) {
      //   throw new Error("Signup failed");
      // }

      setIsLoggedIn(true);
      router.push("/");
      // Redirect to login page upon successfull signup
      // You need to implement client side routing here
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto flex justify-center items-center h-full">
          <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
            <h1 className="text-3xl font-bold mb-4">Signup</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <SignupForm onSignup={handleSignup} />
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-blue-500">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
