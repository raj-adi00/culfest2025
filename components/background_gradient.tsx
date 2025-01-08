"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { MovingBorderDemo3 } from "./MovingBorder3";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
export function BackgroundGradientDemo({ total }: any) {
  const [participants, setParticipants] = useState<string[]>([""]); // Initial empty email input
  const [teamName, setTeamName] = useState<any>(null);
  const [error, setError] = useState<string | null>(null); // Error message for duplicate emails
  const [failedupdates, setFailedupdates] = useState<any>(null);
  const [successfullyUpdated, setSuccessfulupdates] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const handleAddParticipant = () => {
    setParticipants([...participants, ""]); // Add a new empty email input
    setError(null); // Clear any existing errors
  };

  const handleParticipantChange = (index: number, value: string) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index] = value.trim(); // Trim spaces to avoid duplicate "example@gmail.com " and "example@gmail.com"
    setParticipants(updatedParticipants);
    setError(null); // Clear any existing errors while typing
  };

  const validateEmails = (): boolean => {
    const emailSet = new Set(participants);
    if (emailSet.size !== participants.length) {
      setError("All email addresses must be unique.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (validateEmails()) {
      // console.log("Participants:", participants, teamName);
      // alert(`Participants: ${JSON.stringify(participants)}`);
      try {
        const response = await axios.post("/api/registerEvent", {
          userEmails: participants,
          event: total?.eventname,
          session: total?.session,
          teamName: teamName,
        });
        // console.log(response);
        if (
          response.status === 200 &&
          response?.data?.message === "no of participants not satisfied"
        ) {
          setError("Number of participants not satisfied");
        }
        setFailedupdates(response.data.data.failedUpdates);
        setSuccessfulupdates(response.data.data.successfulUpdates);
        setLoading(false);
      } catch (error: any) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };
  const event = total?.event;
  const mssg = total?.message;
  return (
    <div className="p-4">
      <BackgroundGradient className="rounded-[22px] bg-white p-2 dark:bg-zinc-900 sm:p-6 lg:p-10">
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {/* Logo */}
          <Link href="/">
            <div>
              <img
                src="/colorLogo.png"
                alt="Logo"
                className="absolute left-2 top-2 h-10 animate-pulse sm:h-20 "
              />
            </div>
          </Link>

          {/* Event Name */}
          <div className="text-center sm:text-left">
            <div className="mb-4 mt-6 font-AnotherFont text-5xl text-white drop-shadow-[0_0_5px_black] sm:text-6xl lg:text-8xl">
              {event?.eventname}
              {`!!`}
            </div>
          </div>

          {/* Event Image */}
          <div className="w-full max-w-[350px] border-none bg-gradient-to-r from-purple-500 to-pink-500 p-1 sm:max-w-[400px] lg:max-w-[500px]">
            <Image
              src={event?.image}
              alt="Event Image"
              height={600}
              width={600}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Event Description */}
        <div className="mt-8 p-6 text-center font-Piedra text-2xl text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-4xl lg:text-4xl">
          {event?.description}
        </div>
      </BackgroundGradient>

      {/* Rules Section */}

      <div
        className=" mt-6 rounded-[22px]  border-2 p-4 font-serif text-base font-bold text-white shadow-lg sm:p-6 sm:text-lg lg:text-xl"
        style={{
          backgroundImage: "url('/bg120.jpg')", // Add the path to your background image
          backgroundSize: "cover", // Ensures the image covers the full screen
          backgroundPosition: "center", // Centers the image
          backgroundAttachment: "fixed", // Keeps the background image fixed when scrolling
          minHeight: "100vh",
        }}
      >
        <div className="mb-6  mt-6 text-center font-AnotherFont text-5xl text-white drop-shadow-[0_0_5px_black] sm:text-6xl lg:text-7xl">
          {`DETAILS OF THE EVENT`}
        </div>
        {total?.rules ? total?.rules : "No rules available."}
        <div>
          {total?.status == "unauthenticated" && (
            <Link href={"/login"}>
              <Button className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                Login to Participate
              </Button>
            </Link>
          )}
          {mssg && mssg === "Payment not found" && (
            <Link href={"/payme"}>
              <Button className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                Pay to Participate
              </Button>
            </Link>
          )}
          {mssg && mssg === "User not found" && (
            <Link href={"/login"}>
              <Button className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                Login to Participate
              </Button>
            </Link>
          )}
          {total &&
            total?.session &&
            total?.session?.data &&
            total?.session?.data?.user &&
            total?.session?.data?.user?.registeredEvents &&
            total?.session?.data?.user?.registeredEvents.includes(
              total?.eventName
            ) && (
              <div className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                Already Registered
              </div>
            )}
          {total &&
            total?.session &&
            total?.session?.data &&
            total?.session?.data?.user &&
            total?.session?.data?.user?.registeredEvents &&
            !total?.session?.data?.user?.registeredEvents.includes(
              total?.eventName
            ) &&
            mssg &&
            mssg === "Payment verified successfully" && (
              <Dialog>
                <DialogTrigger className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                  Participate in {total?.eventname}
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Participate in {total?.eventname}</DialogTitle>
                    <DialogDescription>
                      <div className="w-full max-w-md rounded bg-white p-6 shadow-lg">
                        <h2 className="mb-4 text-xl font-bold">
                          Add Participants
                        </h2>
                        <form onSubmit={handleSubmit}>
                          <input
                            type="text"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            placeholder={"Enter Team Name"}
                            className="mb-5 w-full gap-5 rounded border border-black px-3 py-2"
                            required
                          />
                          {participants.map((email, index) => (
                            <div key={index} className="mb-3 flex items-center">
                              <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                  handleParticipantChange(index, e.target.value)
                                }
                                placeholder={`Participant ${index + 1} Email`}
                                className="w-full rounded border border-gray-300 px-3 py-2"
                                required
                              />
                            </div>
                          ))}
                          {error && (
                            <p className="mb-3 text-sm text-red-600">{error}</p>
                          )}
                          <button
                            type="button"
                            onClick={handleAddParticipant}
                            className="flex items-center font-semibold text-blue-600 hover:text-blue-800"
                          >
                            <span className="mr-2">+</span> Add Participant
                          </button>
                          <button
                            type="submit"
                            className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                          >
                            {loading ? "Loading..." : "Submit"}
                          </button>
                        </form>
                        {/* Display success and failure messages */}
                        <div className="mt-6">
                          {successfullyUpdated?.length > 0 && (
                            <div className="mb-4">
                              <h3 className="text-lg font-semibold text-green-600">
                                Successful Updates:
                              </h3>
                              <ul className="list-disc pl-5">
                                {successfullyUpdated.map(
                                  (email: any, index: any) => (
                                    <li key={index} className="text-gray-800">
                                      {email}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                          {failedupdates?.length > 0 && (
                            <div>
                              <h3 className="text-lg font-semibold text-red-600">
                                Failed Updates:
                              </h3>
                              <ul className="list-disc pl-5">
                                {failedupdates.map((fail: any, index: any) => (
                                  <li key={index} className="text-gray-800">
                                    {fail.email} - {fail.reason}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            )}
        </div>
      </div>
    </div>
  );
}
