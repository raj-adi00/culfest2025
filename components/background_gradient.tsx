import React, { useState, useEffect } from "react";
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
import { useSession } from "next-auth/react";

export function BackgroundGradientDemo({ total }: any) {
  const session = useSession();
  const [participants, setParticipants] = useState<string[]>([""]);
  const [teamName, setTeamName] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [failedupdates, setFailedupdates] = useState<any>(null);
  const [successfullyUpdated, setSuccessfulupdates] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  // Fetch registered events from API
  const fetchRegisteredEvents = async () => {
    try {
      if (session?.status === "authenticated") {
        const response = await axios.post("/api/registeredEvents", {
          user: total?.session?.data?.user,
        });
        setRegisteredEvents(response.data.events || []);
        // console.log(registeredEvents);
      }
    } catch (error) {
      console.error("Error fetching registered events:", error);
    }
  };

  // Call fetchRegisteredEvents when component mounts
  useEffect(() => {
    if (session?.status === "authenticated") fetchRegisteredEvents();
  }, [session]);

  const handleAddParticipant = () => {
    setParticipants([...participants, ""]);
    setError(null);
  };

  const handleRemoveParticipant = (index: number) => {
    const updatedParticipants = participants.filter((_, i) => i !== index);
    setParticipants(updatedParticipants);
    setError(null); // Clear any existing errors
  };

  const handleParticipantChange = (index: number, value: string) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index] = value.trim();
    setParticipants(updatedParticipants);
    setError(null);
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
    setError(null);
    if (validateEmails()) {
      try {
        const response = await axios.post("/api/registerEvent", {
          userEmails: participants,
          event: total?.eventname.toString().toLowerCase(),
          session: session,
          teamName: teamName,
        });

        if (response.status === 200) {
          if (response?.data?.message === "no of participants not satisfied") {
            setError("Number of participants not satisfied");
          } else if (
            response?.data?.message === "Event registration processed"
          ) {
            setFailedupdates(response.data.data.failedUpdates);
            setSuccessfulupdates(response.data.data.successfulUpdates);
            

            setParticipants([]); // Reset email inputs
          }
        }
        // console.log(response);
        if (
          response.status === 200 &&
          response?.data?.message === "no of participants not satisfied"
        ) {
          setError("Number of participants not satisfied");
        }
        setFailedupdates(response.data.data.failedUpdates);
        if (response?.data?.data?.failedUpdates?.length > 0) {
          setError(response.data.message);
          setTimeout(() => {
            setError(null);
          }, 2000);
        }
        setSuccessfulupdates(response.data.data.successfulUpdates);
        setLoading(false);
      } catch (error: any) {

        // setError();
        if (error?.response?.data?.data?.failedUpdates?.length > 0)
          setFailedupdates(error.response.data.data.failedUpdates);
        else setError(error?.response?.data?.data?.message || "Failed to register");
      } finally {

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
          <Link href="/">
            <div>
              <img
                src="/colorLogo.png"
                alt="Logo"
                className="absolute left-2 top-2 h-10 animate-pulse sm:h-20 "
              />
            </div>
          </Link>

          <div className="text-center sm:text-left">
            <div className="mb-4 mt-6 font-AnotherFont text-5xl text-white drop-shadow-[0_0_5px_black] sm:text-6xl lg:text-8xl">
              {event?.eventname}
              {`!!`}
            </div>
          </div>

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

        <div className="mt-8 p-6 text-center font-Piedra text-2xl text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-4xl lg:text-4xl">
          {event?.description}
        </div>
      </BackgroundGradient>

      <div
        className="mt-6 rounded-[22px] border-2 p-4 font-serif text-base font-bold text-white shadow-lg sm:p-6 sm:text-lg lg:text-xl"
        style={{
          backgroundImage: "url('/bg120.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <div className="mb-6 mt-6 text-center font-AnotherFont text-5xl text-white drop-shadow-[0_0_5px_black] sm:text-6xl lg:text-7xl">
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
          {registeredEvents.includes(
            total?.eventname.toString().toLowerCase()
          ) && <div className="m-2">Already Registered</div>}
          {total &&
            session &&
            session?.data &&
            session?.data?.user &&
            registeredEvents &&
            !registeredEvents.includes(
              total?.eventname.toString().toLowerCase()
            ) &&
            mssg &&
            mssg === "Payment verified successfully" && (
              <>
                <Dialog>
                  <DialogTrigger className="mt-16 transform bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105">
                    Participate in {total?.eventname}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Participate in {total?.eventname}
                      </DialogTitle>
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
                              <div
                                key={index}
                                className="mb-3 flex items-center"
                              >
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) =>
                                    handleParticipantChange(
                                      index,
                                      e.target.value
                                    )
                                  }
                                  placeholder={`Participant ${index + 1} Email`}
                                  className="w-full rounded border border-gray-300 px-3 py-2"
                                  required
                                />
                                {participants.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleRemoveParticipant(index)
                                    }
                                    className="ml-2 text-red-500"
                                  >
                                    -
                                  </button>
                                )}
                              </div>
                            ))}
                            {error && (
                              <p className="mb-3 text-sm text-red-600">
                                {error}
                              </p>
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
                        </div>
                        <div className="mt-6">
                          {successfullyUpdated?.length > 0 && (
                            <div className="mb-4">
                              <h3 className="text-lg font-semibold text-green-500">
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
                                {failedupdates.map(
                                  (
                                    update: { email: string; reason: string },
                                    index: number
                                  ) => (
                                    <li key={index} className="text-gray-800">
                                      <p>Email: {update.email}</p>
                                      <p>Reason: {update.reason}</p>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
