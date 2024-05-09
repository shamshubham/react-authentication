import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LoginForm from "../components/LoginForm";
import { emitWarning } from "process";

const Login = ({ setIsLoggedIn, setUser }) => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (credentials) => {
    try {
      // Call API login with credentials
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error("Invalid Credentials");
      }

      const responseData = await response.json();
      console.log("Response Data:", responseData);
      setUser({
        ...responseData.data.user,
        token: responseData.data.token,
      });
      setIsLoggedIn(true);
      console.log(credentials);
      router.push("/");
      // Redirect to login page upon successfull login
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
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <LoginForm onlogin={handleLogin} />
            <p className="mt-4 text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <i className="text-blue-500">Signup</i>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
