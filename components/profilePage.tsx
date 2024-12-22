import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const ProfilePage = ({ session, res }: any) => {
  const [user, setUser] = useState<any>(null);
  const status = session?.status;

  // Update user state when session is authenticated
  // console.log("session?.data?.user", session?.data?.user);
  // console.log(res);

  useEffect(() => {
    if (status === "authenticated" && session?.data?.user) {
      setUser({
        ...session?.data?.user, // Use session data to overwrite dummy values
      });
    }
  }, [session, status]);

  if (!user) {
    return <div>Loading...</div>; // Show loading until user data is available
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center p-5"
      style={{
        backgroundImage: `url('party3.png'), radial-gradient(circle, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <Link href="/" className="absolute left-5 top-5">
        <img
          src="colorLogo.png"
          alt="CULFEST Logo"
          className="animate-bounce-slow h-auto w-20 rounded-lg bg-gray-800 bg-opacity-50 p-2 backdrop-blur-md md:w-28"
        />
      </Link>

      {/* Profile Card */}
      <div className="w-[90%] max-w-md rounded-lg bg-black bg-opacity-60 p-5 text-white shadow-lg md:w-[35%] md:p-8">
        <div className="mb-4 flex justify-center">
          <img
            src="colorLogo.png"
            alt="CULFEST LOGO"
            className="animate-logo w-[60%] object-contain"
          />
        </div>
        <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">
          PROFILE
        </h2>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-400">Username:</label>
            <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
              {user.name}
            </div>
          </div>
          <div>
            <label className="block text-gray-400">Email:</label>
            <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
              {user.email}
            </div>
          </div>
          <div>
            <label className="block text-gray-400">Phone:</label>
            <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
              {user.phone}
            </div>
          </div>
          <div>
            <label className="block text-gray-400">City:</label>
            <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
              {user.city}
            </div>
          </div>
          <div>
            <label className="block text-gray-400">State:</label>
            <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
              {user.state}
            </div>
          </div>
          <div>
            <label className="block text-gray-400">College:</label>
            <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
              {user.college}
            </div>
          </div>
          <div>
            <label className="block text-gray-400">Gender:</label>
            <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
              {user.gender}
            </div>
          </div>
          <div>
            <label className="block text-gray-400">Graduation Year:</label>
            <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
              {user.graduationYear}
            </div>
          </div>

          {/* Payment Section */}
          {res?.data?.status === "success" ? (
            <>
              <div>
                <label className="block text-gray-400">Payment Status:</label>
                <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-2xl text-green-700">
                  {res?.data?.status.toUpperCase()}
                </div>
              </div>
              <div>
                <label className="block text-gray-400">Payment ID:</label>
                <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
                  {res?.data?.paymentId}
                </div>
              </div>
              <div>
                <label className="block text-gray-400">Order ID:</label>
                <div className="w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-white">
                  {res?.data?.orderId}
                </div>
              </div>
            </>
          ) : (
            <div className="mt-4 flex flex-col items-center space-y-4">
              <Link
                href="/payme"
                className="w-[80%] max-w-xs transform rounded-md bg-purple-600 py-2 text-center font-semibold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-purple-700 active:bg-purple-800"
              >
                Payment
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
