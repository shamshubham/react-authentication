import { useEffect } from "react";
import { useRouter } from "next/router";

const Logout = ({ setIsLoggedIn }) => {
  const router = useRouter();

  useEffect(() => {
    // Call logout api to invalidate session
    // You need to implement this logic

    setIsLoggedIn(false); //update isLoggedIn state
    router.push("/login"); //redirect to login page after logout
  }, []);

  return null;
};

export default Logout;
