import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaCity,
  FaUniversity,
} from "react-icons/fa";

const ProfilePage = ({ session, res }: any) => {
  const [user, setUser] = useState<any>(null);
  const status = session?.status;

  useEffect(() => {
    if (status === "authenticated" && session?.data?.user) {
      setUser({
        ...session?.data?.user,
        registeredevents: session?.data?.user.registeredevents || [],
      });
    }
  }, [session, status]);

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center text-xl text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-5">
      {/* Logo */}
      <Link href="/" className="absolute left-5 top-5">
        <img
          src="colorLogo.png"
          alt="CULFEST Logo"
          className="h-auto w-20 animate-bounce md:w-28"
        />
      </Link>

      {/* Profile Card */}
      <div className="w-[90%] max-w-2xl rounded-lg bg-white bg-opacity-90 p-8 text-gray-800 shadow-2xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-purple-700">
          Your Profile
        </h2>

        {/* Profile Details */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <ProfileField
            icon={<FaUserCircle />}
            label="Username"
            value={user.name}
          />
          <ProfileField
            icon={<FaEnvelope />}
            label="Email"
            value={user.email}
          />
          <ProfileField icon={<FaPhone />} label="Phone" value={user.phone} />
          <ProfileField icon={<FaCity />} label="City" value={user.city} />
          <ProfileField
            icon={<FaUniversity />}
            label="College"
            value={user.college}
          />
          <ProfileField
            icon={<FaUniversity />}
            label="State"
            value={user.state}
          />
          <ProfileField
            icon={<FaUniversity />}
            label="Gender"
            value={user.gender}
          />
          <ProfileField
            icon={<FaUniversity />}
            label="Graduation Year"
            value={user.graduationYear}
          />
        </div>

        {/* Registered Events */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-purple-700">
            Registered Events
          </h3>
          {user.registeredevents.length > 0 ? (
            <ul className="mt-2 space-y-2">
              {user.registeredevents.map((event: string, index: number) => (
                <li
                  key={index}
                  className="rounded-md bg-purple-100 p-3 text-purple-700 shadow-md"
                >
                  {event}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-2 rounded-md bg-purple-50 p-3 text-gray-600">
              No events registered.
            </div>
          )}
        </div>

        {/* Payment Section */}
        <div className="mt-6">
          {res?.data?.status === "success" ? (
            <>
              <div>
                <h3 className="text-lg font-semibold text-green-700">
                  Payment Successful
                </h3>
                <p className="text-sm text-gray-500">
                  Payment ID: {res?.data?.paymentId}
                </p>
                <p className="text-sm text-gray-500">
                  Order ID: {res?.data?.orderId}
                </p>
              </div>
            </>
          ) : (
            <div className="mt-4 flex justify-center">
              <Link
                href="/payme"
                className="transform rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
              >
                Make Payment
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Profile Field Component
const ProfileField = ({
  icon,
  label,
  value,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
}) => (
  <div className="flex items-center space-x-4 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 p-4 shadow-md">
    <div className="text-xl text-purple-600">{icon}</div>
    <div className="min-w-0">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="break-words font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default ProfilePage;
