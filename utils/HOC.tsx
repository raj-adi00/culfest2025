// src/components/protectedRoute.tsx
"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: any) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const checkstatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Please Login");
          router.replace("/login");
          return;
        }

        const response = await axios.post(
          "  https://serverculfest25.vercel.app/api/v1/user/verify",
          {
            token: token,
          }
        );
        // console.log(response.data.userId);
        if (response.data.userId) {
          setIsAuthenticated(true);
        } else if (response.status === 400) {
          alert("Please Login");
          router.replace("/login"); // Redirect to a success page
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    checkstatus();
    // if (!isAuthenticated) {
    //   router.replace("/login"); // Redirect to login if not authenticated
    // }
  }, [router]);

  return children;
};

export default ProtectedRoute;
