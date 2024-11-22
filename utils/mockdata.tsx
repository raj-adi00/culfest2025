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
    description: "A cultural fest with vibrant events.",
    image: "/1.png",
    rules: (
      <>
        <li>Participants must register in advance.</li>
        <li>Each team should consist of 2-4 members.</li>
        <li>Follow event timings strictly.</li>
      </>
    ),
  },
  {
    id: "technoblast",
    eventname: "TechnoBlast",
    description: "A thrilling tech event.",
    image: "/2.png",
    rules: (
      <>
        <li>No plagiarism is allowed.</li>
        <li>Team size: 1-3 members.</li>
        <li>Follow the guidelines provided.</li>
      </>
    ),
  },
  {
    id: "quizorama",
    eventname: "Quiz-O-Rama",
    description: "A quiz competition to test your knowledge.",
    image: "/3.png",
    rules: (
      <>
        <li>Each team can have a maximum of 2 members.</li>
        <li>No use of electronic devices during the quiz.</li>
        <li>Decisions of the quizmaster are final.</li>
      </>
    ),
  },
  {
    id: "artsyvibes",
    eventname: "Artsy Vibes",
    description: "Showcase your artistic talent in this event.",
    image: "/4.png",
    rules: (
      <>
        <li>All materials must be brought by participants.</li>
        <li>Time limit: 2 hours.</li>
        <li>Individual participation only.</li>
      </>
    ),
  },
  {
    id: "codearena",
    eventname: "Code Arena",
    description: "A competitive coding contest.",
    image: "/5.png",
    rules: (
      <>
        <li>Use of external libraries is allowed.</li>
        <li>Team size: 1-2 members.</li>
        <li>No sharing of code during the contest.</li>
      </>
    ),
  },
  {
    id: "photofrenzy",
    eventname: "Photo Frenzy",
    description: "Capture the moment in this photography contest.",
    image: "/6.png",
    rules: (
      <>
        <li>Only original photographs are allowed.</li>
        <li>Editing should be minimal and realistic.</li>
        <li>Submit photos in the required format.</li>
      </>
    ),
  },
  {
    id: "robotica",
    eventname: "Robotica",
    description: "Build and battle robots in this event.",
    image: "/7.png",
    rules: (
      <>
        <li>Robots must adhere to the size constraints.</li>
        <li>Maximum team size: 4 members.</li>
        <li>Follow all safety guidelines strictly.</li>
      </>
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
      <>
        <li>Participants must bring their own ingredients.</li>
        <li>Each dish should be prepared within 1 hour.</li>
        <li>Judging criteria: Taste, Presentation, and Creativity.</li>
      </>
    ),
  },
  {
    id: "fashionflick",
    eventname: "Fashion Flick",
    description: "Showcase your style on the runway.",
    image: "/10.png",
    rules: (
      <>
        <li>Participants must follow the theme.</li>
        <li>Each walk should not exceed 5 minutes.</li>
        <li>Judging will be based on creativity and presentation.</li>
      </>
    ),
  },
];
