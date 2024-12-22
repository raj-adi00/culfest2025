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
    eventname: "RANGMANCH",
    description:
      "The rangmanch event beckons teams of 6-15 members, with a designated person for music or props.The single round allows a 25-minute performance.Language options include Hindi or English, with the freedom to present a musical drama. Teams manage their music, background tracks, and sound effects, coordinating with organizers 30 minutes before the show. . Teams are self-reliant for costumes, props, and instruments, and crossing limits or using offensive language results in negative marking or disqualification. In this theatrical arena, creativity thrives within the boundaries of respect and artistic integrity.",
    image: "/Event_03-5pCd__fD.jpg",
    rules: (
      <ul className="space-y-4 border-2 border-black">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: This is a group event. Each team can consist of 6-15 members. Apart from that one person can be there to look after the music or the props.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Teams can pre-register online or by person.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 3: Each participant should be registered in Culfest’23 failing which, the whole team would be disqualified.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 4: There will be only one round for the competition. The maximum time allotted for the play is 25 minutes. This given time is from the empty stage to empty stage.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 5: If the play exceeds the given maximum time i.e. 25 minutes, 20% marks per minutes will be deducted from the final marks of the responsible team.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 6: Language of the play can be Hindi or English.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 7: The performance can also be a musical drama/play. Participants must bring their own music and background tracks they wish to play.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 8: Participants must bring their own laptops/PDs for the sound effects and must contact the organizer at least 30 minutes.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 9: prior to their performance if they wish to play any background tracks during the play.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 10: Naked flames/animals/colors and other objectionable objects or things are strictly not allowed in the competition.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 11: All the costumes and probes are to be arranged by their respective participating team for their play.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 12: They must take care of their own instruments in green room.
        </li>
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 13: Issues like crossing the limits, using abusive language or vulgarity will lead to negative marking and if required, disqualification.
        </li>
      </ul>
    ),
  },
  {
    id: "technoblast",
    eventname: "TechnoBlast",
    description: "",
    image: "/tb.jpg",
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
    image: "/qor.jpg",
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
    image: "/av1.jpg",
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
    image: "/ca.jpg",
    rules: (
      <ul className="space-y-4">
        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 1: Only team entries are allowed.
        </li>

        <li className="transform rounded-lg  bg-opacity-20 p-4 transition-all duration-300 hover:scale-105 hover:bg-opacity-40">
          Rule 2: Each team should have 2-4 members.
        </li>
``
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
    image: "/pf.jpg",
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
    image: "/rb.jpg",
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
    image: "/gp2.jpg",
    rules: (
      <ul className="space-y-4">
        <li>Participants must use the provided gaming setup.</li>
        <li>Strictly follow the time slots.</li>
        <li>Team size depends on the game format.</li>
      </ul>
    ),
  },
  {
    id: "foodfiesta",
    eventname: "Food Fiesta",
    description: "A food fest to delight your taste buds.",
    image: "/fof.jpg",
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
    image: "/ff1.jpg",
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
