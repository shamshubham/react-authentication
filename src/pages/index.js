import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RouteKind } from "next/dist/server/future/route-kind";

const HomePage = () => {
  const HomePage = ({ isLoggedIn }) => {
    const router = useRouter();
    useEffect(() => {
      // Check if the user is authenticated
      // If not then redirect to the login page

      if (!isLoggedIn) {
        router.push("/login");
      }
    }, [isLoggedIn, router]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main
        className="
        flex-grow
        flex
        flex-col
        items-center
        justify-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App!</h1>
        <p className="text-lg text-gray-600">This is the homepage.</p>
      </main>
    </div>
  );
};

export default HomePage;
