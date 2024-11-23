import React from "react";

export interface EventData {
  id: string; // Unique identifier for each event
  eventname: string;
  description: string;
  image: string;
  rules: React.ReactNode; // Allows JSX like <li> elements
}

export const mockData: EventData[] = [
  {
    id: "rangmunch",
    eventname: "Rangmunch",
    description:
      "Get ready for an intellectual showdown at the upcoming event where minds clash and ideas resonate. In this engaging competition, teams of (4-6) members will delve into a pool of thought-provoking cases. As the event unfolds, each team will randomly select a case from a set, armed with a sheet outlining the rules, regulations, and a brief on the chosen scenario. With two teams facing off on a single case, one advocating in favor and the other against, the atmosphere becomes charged with debate and discourse. The Panchs, acting as impartial judges, will carefully weigh the arguments, determining the victorious stance.",
    image: "/1.png",
    rules: (
      <ul className="space-y-4 border-2 border-black">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Registration fees are Rs 200 per team.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: Top 2 teams will proceed to finals.
        </li>
      </ul>
    ),
  },
  {
    id: "technoblast",
    eventname: "TechnoBlast",
    description: "A thrilling tech event.",
    image: "/2.png",
    rules: (
      <ul className="space-y-4">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Registration fees are Rs 200 per team.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: Top 2 teams will proceed to finals.
        </li>
      </ul>
    ),
  },
  {
    id: "quizorama",
    eventname: "Quiz-O-Rama",
    description: "A quiz competition to test your knowledge.",
    image: "/3.png",
    rules: (
      <ul className="space-y-4">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Registration fees are Rs 200 per team.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: Top 2 teams will proceed to finals.
        </li>
      </ul>
    ),
  },
  {
    id: "artsyvibes",
    eventname: "Artsy Vibes",
    description: "Showcase your artistic talent in this event.",
    image: "/4.png",
    rules: (
      <ul className="space-y-4">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Registration fees are Rs 200 per team.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: Top 2 teams will proceed to finals.
        </li>
      </ul>
    ),
  },
  {
    id: "codearena",
    eventname: "Code Arena",
    description: "A competitive coding contest.",
    image: "/5.png",
    rules: (
      <ul className="space-y-4">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Registration fees are Rs 200 per team.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: Top 2 teams will proceed to finals.
        </li>
      </ul>
    ),
  },
  {
    id: "photofrenzy",
    eventname: "Photo Frenzy",
    description: "Capture the moment in this photography contest.",
    image: "/6.png",
    rules: (
      <ul className="space-y-4">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Registration fees are Rs 200 per team.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: Top 2 teams will proceed to finals.
        </li>
      </ul>
    ),
  },
  {
    id: "robotica",
    eventname: "Robotica",
    description: "Build and battle robots in this event.",
    image: "/7.png",
    rules: (
      <ul className="space-y-4">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Registration fees are Rs 200 per team.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: Top 2 teams will proceed to finals.
        </li>
      </ul>
    ),
  },
  {
    id: "gamersparadise",
    eventname: "Gamer's Paradise",
    description: "Compete in an electrifying gaming tournament.",
    image: "/8.png",
    rules: (
      <>
        <li>Participants must use the provided gaming setup.</li>
        <li>Strictly follow the time slots.</li>
        <li>Team size depends on the game format.</li>
      </>
    ),
  },
  {
    id: "foodfiesta",
    eventname: "Food Fiesta",
    description: "A food fest to delight your taste buds.",
    image: "/9.png",
    rules: (
      <ul className="space-y-4">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Registration fees are Rs 200 per team.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: Top 2 teams will proceed to finals.
        </li>
      </ul>
    ),
  },
  {
    id: "fashionflick",
    eventname: "Fashion Flick",
    description: "Showcase your style on the runway.",
    image: "/10.png",
    rules: (
      <ul className="space-y-4">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Registration fees are Rs 200 per team.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: Top 2 teams will proceed to finals.
        </li>
      </ul>
    ),
  },
];
