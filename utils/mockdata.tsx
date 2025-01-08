import React from "react";

export interface EventData {
  id: string; // Unique identifier for each event
  eventname: string;
  category: string;
  description: string;
  image: string;
  rules: React.ReactNode; // Allows JSX like <li> elements
}

export const mockData: EventData[] = [
  {
    id: "rangmunch",
    eventname: "RANGMANCH",
    category: "Dramatics",
    description:
      "The skit competition allows teams to showcase their creativity and acting skills through short dramatic performances. The focus is on storytelling , dialogue delivery ,and audience engagement",
    image: "/Event_03-5pCd__fD.jpg",
    rules: (
      <>
        <div
          title="Rules of Rangmanch"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300"
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 1 :{" "}
            </span>{" "}
            Performances can be in Hindi or English.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 2 :{" "}
            </span>{" "}
            Maximum performance time is 20 minutes.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 3 :{" "}
            </span>{" "}
            Background Music and props are allowed but should be arranged by the
            team.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 4 :{" "}
            </span>{" "}
            Themes should not contain offensive or controversial content.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 5 :{" "}
            </span>{" "}
            No. of Participants can be 5 to 10 members per team.
          </p>
        </div>
        <p
          className=" mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra " style={{ letterSpacing: "1px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 20,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            VENUE :{" "}
          </span>{" "}
          Open Air Theatre.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            CONTACT :{" "}
          </span>{" "}
          Drishti Suman(9122449189)
        </p>
      </>
    ),
  },

  {
    id: "THEME QUIZ: World in Miniature",
    eventname: "THEME QUIZ: World in Miniature",
    category: "Quizzing",
    description:
      "It is a quizzing event under Culfest'25,the cultural fest hosted by NITJSR (QuNITE).The event aims to test participants knowledge in various fields reflecting the theme of Culfest'25. It includes interconnected wordly things , geography , common history & food, etc.",
    image: "/qor.jpg",
    rules: (
      <>
        <div
          title="Details of THEME QUIZ stage 1"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">STAGE 1 : Prelims</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              DATE AND TIME :{" "}
            </span>{" "}
            Culfest'25 Dates and time.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              QUIZ PLATFORM :{" "}
            </span>{" "}
            Diamond Jubilee Lecture Hall Complex.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              QUIZ DURATION :{" "}
            </span>{" "}
            2 hours.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              NUMBER OF QUESTIONS :{" "}
            </span>{" "}
            As per the Quiz Master (Expected 16-25).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              QUIZ MASTER :{" "}
            </span>{" "}
            To be decided.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              SELECTION :{" "}
            </span>{" "}
            Based on Performance , 6-8 teams will advance to the finals.The
            number of advancing teams will depend on the total number of
            participating teams.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              REQUIREMENTS FOR STAGE 1 :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span>1.Team Composition : </span> Teams should consist of [1-2]
            members.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span>2.WhatsApp Group : </span> The link to the Whatsapp group will
            be provided for communication and updates.
          </p>
        </div>

        <div
          title="Details of THEME QUIZ stage 2"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">STAGE 2 : Finals</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              DATE AND TIME :{" "}
            </span>{" "}
            Culfest'25 Dates and time.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              VENUE :{" "}
            </span>{" "}
            NIT JSR DJLHC.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              QUIZ DURATION :{" "}
            </span>{" "}
            2 hours.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              QUIZ ROUNDS :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. It will consist of different rounds , exploring their genre.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Teams will engage in competitive rounds designed to test their
            Knowledge , teamwork, and problem-solving skills.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              FINALS AND WINNER :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. The team with the best overall performance in the final round
            will be declared the winner.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              REQUIREMENTS FOR STAGE 2 :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1.Identification : Participants must carry valid identification for
            on-campus verification.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.Quiz Materials : Teams are not allowed to bring any study
            materials or electronic devices int o the quiz venue.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3.Buzzers : Needed for Buzzing rounds.
          </p>
        </div>

        <div
          title="General Rules and Regulations"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">
              GENERAL RULES AND REGULATIONS :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Teams are expected to adhere to the principles of fair play and
            sportsmanship.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Any form of cheating or plagiarism will result in immediate
            disqualification.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            The decisions of the organizers and quizmasters are final and
            binding.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            For any queries or concerns,participants can contact the event
            organizers.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 15,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            VENUE:{" "}
          </span>{" "}
          Diamond JUbilee Lecture Hall Complex.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            {" "}
            Contact :{" "}
          </span>{" "}
          Abhishek Agrahari(9931356095)
        </p>
      </>
    ),
  },

  {
    id: "Hind ka Sitara",
    eventname: "HIND KA SITARA",
    category: "Quizzing",
    description:
      "The genre for this quiz revolves around Indian stardom and trivias including bollywood , Indian Cinema, shows and sports.",
    image: "/quiz2.avif",
    rules: (
      <>
        <div
          title="Details of stage 1"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">STAGE 1 : Prelims</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              DATE AND TIME :{" "}
            </span>{" "}
            Culfest'25 Dates and time.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ PLATFORM :{" "}
            </span>{" "}
            Diamond Jubilee Lecture Hall Complex.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ DURATION :{" "}
            </span>{" "}
            2 hours.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              NUMBER OF QUESTIONS :{" "}
            </span>{" "}
            As per the Quiz Master (Expected 16-25).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ MASTER :{" "}
            </span>{" "}
            To be decided.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              SELECTION :{" "}
            </span>{" "}
            Based on Performance , 6-8 teams will advance to the finals.The
            number of advancing teams will depend on the total number of
            participating teams.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              REQUIREMENTS FOR STAGE 1 :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1.Team Composition : Teams should consist of [1-2] members.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.WhatsApp Group : The link to the Whatsapp group will be provided
            for communication and updates.
          </p>
        </div>

        <div
          title="Details of stage 2"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">STAGE 2 : Finals</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              DATE AND TIME :{" "}
            </span>{" "}
            Culfest'25 Dates and time.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              VENUE :{" "}
            </span>{" "}
            NIT JSR DJLHC.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ DURATION :{" "}
            </span>{" "}
            2 hours.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ ROUNDS :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. It will consist of different rounds , exploring their genre.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Teams will engage in competitive rounds designed to test their
            Knowledge , teamwork, and problem-solving skills.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              FINALS AND WINNER :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            The team with the best overall performance in the final round will
            be declared the winner.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              REQUIREMENTS FOR STAGE 2 :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1.Identification : Participants must carry valid identification for
            on-campus verification.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.Quiz Materials : Teams are not allowed to bring any study
            materials or electronic devices int o the quiz venue.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3.Buzzers : Needed for Buzzing rounds.
          </p>
        </div>

        <div
          title="General Rules and Regulations"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">
              GENERAL RULES AND REGULATIONS :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Teams are expected to adhere to the principles of fair play and
            sportsmanship.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Any form of cheating or plagiarism will result in immediate
            disqualification.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. The decisions of the organizers and quizmasters are final and
            binding.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4. For any queries or concerns,participants can contact the event
            organizers.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 15,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            VENUE:{" "}
          </span>{" "}
          Diamond JUbilee Lecture Hall Complex.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Sandeep(8252073605)
        </p>
      </>
    ),
  },

  {
    id: "Vocal for Local",
    eventname: "VOCAL FOR LOCAL",
    category: "Quizzing",
    description:
      "The genre for this quiz revolves around Indian startups , business, and anything indian that can shine on international stage like art,GI tags ,etc.",
    image: "/quiz3.avif",
    rules: (
      <>
        <div
          title="Details of stage 1"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">STAGE 1 : Prelims</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              DATE AND TIME :{" "}
            </span>{" "}
            Culfest'25 Dates and time.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ PLATFORM :{" "}
            </span>{" "}
            Diamond Jubilee Lecture Hall Complex.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ DURATION :{" "}
            </span>{" "}
            2 hours.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              NUMBER OF QUESTIONS :{" "}
            </span>{" "}
            As per the Quiz Master (Expected 16-25).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ MASTER :{" "}
            </span>{" "}
            To be decided.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              SELECTION :{" "}
            </span>{" "}
            Based on Performance , 6-8 teams will advance to the finals.The
            number of advancing teams will depend on the total number of
            participating teams.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              REQUIREMENTS FOR STAGE 1 :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1.Team Composition : Teams should consist of [1-2] members.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.WhatsApp Group : The link to the Whatsapp group will be provided
            for communication and updates.
          </p>
        </div>

        <div
          title="Details of stage 2"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">STAGE 2 : Finals</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              DATE AND TIME :{" "}
            </span>{" "}
            Culfest'25 Dates and time.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              VENUE :{" "}
            </span>{" "}
            NIT JSR DJLHC.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ DURATION :{" "}
            </span>{" "}
            2 hours.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              QUIZ ROUNDS :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. It will consist of different rounds , exploring their genre.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Teams will engage in competitive rounds designed to test their
            Knowledge , teamwork, and problem-solving skills.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              FINALS AND WINNER :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            The team with the best overall performance in the final round will
            be declared the winner.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              REQUIREMENTS FOR STAGE 2 :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1.Identification : Participants must carry valid identification for
            on-campus verification.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.Quiz Materials : Teams are not allowed to bring any study
            materials or electronic devices int o the quiz venue.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3.Buzzers : Needed for Buzzing rounds.
          </p>
        </div>

        <div
          title="General Rules and Regulations"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">
              GENERAL RULES AND REGULATIONS :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Teams are expected to adhere to the principles of fair play and
            sportsmanship.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Any form of cheating or plagiarism will result in immediate
            disqualification.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. The decisions of the organizers and quizmasters are final and
            binding.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4. For any queries or concerns,participants can contact the event
            organizers.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 15,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            VENUE:{" "}
          </span>{" "}
          Diamond JUbilee Lecture Hall Complex.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            For any Query, Contact :{" "}
          </span>{" "}
          Srinjoy(6287750834)
        </p>
      </>
    ),
  },

  {
    id: "Jagruti",
    eventname: "JAGRUTI",
    category: "Dramatics",
    description:
      "Nukkad, a street play competition, focuses on raising awareness about pressing social issues through the medium of impactful performances in open spaces. It encourages participants to use humor, drama, and emotion to engage the audience and deliver a strong message.",
    image: "/Event_03-5pCd__fD.jpg",
    rules: (
      <>
        <div
          title="Rules of Jagruti"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300"
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 1 :{" "}
            </span>
            The Performance must be in Hindi or English.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 2 :{" "}
            </span>
            Use of Abusive Language is strictly prohibited.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 3 :{" "}
            </span>
            Maximum performance time is 30 minutes.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 4 :{" "}
            </span>
            Teams must bring their own props and musical instruments.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 5 :{" "}
            </span>
            No. of Participants can be 10 to 15 members per team.
          </p>
        </div>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            PRIZE MONEY :{" "}
          </span>
          Rs 25,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            VENUE :{" "}
          </span>
          Open Air Theatre.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            CONTACT :{" "}
          </span>
          Ankit Singh (9128631228)
        </p>
      </>
    ),
  },

  {
    id: "Panch Parmeshwar",
    eventname: "PANCH PARMESHWAR",
    category: "Dramatics",
    description:
      "Panch Parmeshwar is a debate-style event governed by the sarpanch where two sides present their points in a comical manner. The topic is provided by the sarpanch at the moment, ensuring spontaneity and humor in the discussions.",
    image: "/Event_03-5pCd__fD.jpg",
    rules: (
      <>
        <div
          title="Rules of Panch Parmeshwar"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300"
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 1 :
            </span>{" "}
            The debate must be conducted in Hindi.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 2 :
            </span>{" "}
            Each side is given 5 minutes to present their points.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 3 :
            </span>{" "}
            The sarpanch will moderate the debate and ensure decorum is
            maintained.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 4 :
            </span>{" "}
            Humor should be lighthearted and non-offensive.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 5 :
            </span>{" "}
            Teams can use minimal props if necessary.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
              RULE 6 :
            </span>{" "}
            Teams must consist of 4 - 6 members.
          </p>
        </div>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            PRIZE MONEY :
          </span>{" "}
          Rs 10,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            VENUE :
          </span>{" "}
          Open Air Theatre.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "1px" }}>
            CONTACT :
          </span>{" "}
          SHREYA PRIYADARSHINI (9431508984)
        </p>
      </>
    ),
  },

  {
    id: "Choreo Nights",
    eventname: "CHOREO NIGHTS",
    category: "Dance",
    description:
      "Synchronize your steps to the beats. Come to the CULFEST and let your team create to win hearts. This gala event promises to give you lifelong memories.",
    image: "/dance1.webp",
    rules: (
      <>
        <div
          title="Rules of Choreo Nights"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 1 :{" "}
            </span>{" "}
            A team can consist of a minimum of 8 and a maximum of 40 performing
            members..
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 2 :{" "}
            </span>{" "}
            The music must be submitted in mp3 format to the organizer 1 hour
            before the event begins.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 3 :{" "}
            </span>{" "}
            Performance duration must lie between 8-15 minutes.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 4 :{" "}
            </span>{" "}
            Props can also be used for the Performance like hats,sticks,etc. But
            the use of hazardous props are not allowed.Eg: fire,knifes,etc.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 5 :{" "}
            </span>{" "}
            Performance may or may not be theme based.
          </p>
        </div>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 35,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Main stage.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Rohan Kumar(8757428586) , Rishita(6302541684)
        </p>
      </>
    ),
  },

  {
    id: "Foot loose",
    eventname: "FOOT LOOSE",
    category: "Dance",
    description: `"GREAT DANCERS ARE NOT GREAT BECAUSE OF THEIR TECHNIQUE,IT'S BECAUSE OF THEIR PASSION." It doesn't matter if you are a jazz dancer or a "Chak de Phatte" bhangra specialist.Put your dancing shoes on and compete in the solo dance competiton to prove that you are a connoisseur when it comes to grooving to beats.`,
    image: "/dance1.webp",
    rules: (
      <>
        <div
          title="Rules of Foot Loose"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 1 :{" "}
            </span>{" "}
            The competition will take place in two rounds the prelims and the
            finals.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 2 :{" "}
            </span>{" "}
            The music to be used must be submitted to the organiser in mp3
            format at least one hour before the event.
          </p>
        </div>

        <div
          title="Details of Prelims"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">PRELIMS</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 1 :{" "}
            </span>
            The participants must showcase a demo of their performance, for the
            final round.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 2 :{" "}
            </span>{" "}
            The duration of performance should be 1 to 1.5 minutes.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 3 :{" "}
            </span>{" "}
            Props are allowed.
          </p>
        </div>

        <div
          title="Details of Finals"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">FINALS</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 1 :{" "}
            </span>
            The performance time for each participant is 2 to 3 minutes.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 2 :{" "}
            </span>{" "}
            Songs should be a mixture of a minimum of 2 songs
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 3 :{" "}
            </span>
            The creative use of props is allowed in this round and it does fetch
            points in this round.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 4 :{" "}
            </span>
            Vulgarity of any form will not be allowed in the competition and can
            lead to immediate disqualification.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 8,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Open Air Theatre.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Manish Kumar(9523120247) , SUZY(8084365518)
        </p>
      </>
    ),
  },

  {
    id: "Battle of Dance",
    eventname: "BATTLE OF DANCE",
    category: "Dance",
    description: `To dance is to be out of your self.If you think you have that "Dance ka Keeda" in you, our stage awaits your "Dhamakedaar Entry". Be it classical , contemporary,hip hop, or the like; if you think you can dance anytime,anywhere , in any dance form show us what you've got and set the stage ablaze with your dance moves in one of the most exciting and fun filled events of culfest 25.`,
    image: "/dance1.webp",
    rules: (
      <>
        <div
          title="Details of Prelims"
          className="space-y-2  rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">PRELIMS</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 1 :{" "}
            </span>
            2 or 4 (based on the number of participants) participants are
            randomly called to perform on some random music played on the spot..
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 2 :{" "}
            </span>
            Best of 2 or 4 participants will qualify for the final round from
            each round.
          </p>
        </div>

        <div
          title="Details of Finals"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">FINALS</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 1 :{" "}
            </span>
            2 participants from among the finalists are randomly called to
            perform on random music played on the spot.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 2 :{" "}
            </span>
            Instant choreographic skills and synchronization to music fetch more
            points.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 8,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Open Air Theatre.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Akshat(9569261496) , ANUJ(6201103153)
        </p>
      </>
    ),
  },

  {
    id: "Vibrant Visages",
    eventname: "VIBRANT VISAGES",
    category: "Fine Arts",
    description: `Face Painting Frenzy Event`,
    image: "/facepaint.jpg",
    rules: (
      <>
        <div
          title="Rules of Vibrant Visages"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              TEAM :{" "}
            </span>
            Team of two individual painter and painters pair.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              REGISTRATION :{" "}
            </span>
            Pre-register online before the event.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              MATERIALS :{" "}
            </span>
            Face Paint,brushes will be provided.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              THEME :{" "}
            </span>
            wil be given on the spot.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              TIME DURATION :{" "}
            </span>
            2 hours.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              JUDGING :{" "}
            </span>
            wil be on the basis of creativity ,neatness and theme display.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 20,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Lecture Hall Complex.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            For any Query , Contact :{" "}
          </span>{" "}
          Neeraj Kumar(9430373926) ,Sahil Raj(8284354442)
        </p>
      </>
    ),
  },

  {
    id: "Clay Cottages",
    eventname: "CLAY COTTAGES",
    category: "Fine Arts",
    description: `Pot Painting Palooza event`,
    image: "/potpaint.jpg",
    rules: (
      <>
        <div
          title="Rules of Clay Cottages"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              TEAM :{" "}
            </span>
            Teams of two individual in pair.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              REGISTRATION :{" "}
            </span>
            Pre-register online before the event.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              MATERIALS :{" "}
            </span>
            Paint,brushes will be provided, you can also bring your own brushes.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              THEME :{" "}
            </span>
            will be given on the spot.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              TIME DURATION :{" "}
            </span>
            2 hours.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              JUDGING :{" "}
            </span>
            will be on the basis of creativity ,neatness and theme display.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            Use of marker is prohibited.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 20,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Lecture Hall Complex.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            For any Query , Contact :{" "}
          </span>{" "}
          Abhishek Gourav(7366038037) ,Shrinkhala Shringar(7643841711)
        </p>
      </>
    ),
  },

  {
    id: "Frame by Frame",
    eventname: "FRAME BY FRAME",
    category: "Photography",
    description: `Frame by Frame invites participants to test their filmmaking skills by recreating selected scenes from iconic movies. In this challenge, participants will be provided footage and must replicate the scenes as closely as possible within a limited timeframe. This event emphasizes precision in camera work , editing , sound design and storytelling while fostering creativity and teamwork.`,
    image: "/framebyframe.jpg",
    rules: (
      <>
        <div
          title="Details"
          className="space-y-2  rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              PARTICIPANTS :{" "}
            </span>
            Team of 3 to 5 members
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              THEME :{" "}
            </span>
            Footages will be provided.
          </p>
        </div>

        <div
          title="Format"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">FORMAT : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              FILMMAKING PROCESS :{" "}
            </span>
            Teams can prepare or present a video filmed during january 2025.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              SUBMISSION :{" "}
            </span>
            Completed video must be submitted in a specific format by the
            deadline.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              SCREENING AND JUDGING :{" "}
            </span>
            Video will be Screened for an Audience.
          </p>
        </div>

        <div
          title="Technical Guidelines"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">
              TECHNICAL GUIDELINES :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Use of any camera is allowed(smartphone , DSLR ,etc).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Teams must be present with the raw clips to verify in case of
            complaints.
          </p>
        </div>

        <div
          title="Judging criteria"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">JUDGING CRITERIA : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              1.ACCURACY :{" "}
            </span>
            Faithfulness to the original scene in visuals, dialogues, and
            composition.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              2.TECHNICAL QUALITY :{" "}
            </span>
            Excellence in camera Work , editing ,sound ,and lighting.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              3.TEAMWORK :{" "}
            </span>
            Effective Collaboration and time management.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              4.CREATIVITY :{" "}
            </span>
            Innovative adaptation while retaining the essence of the original.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 20,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Harshit Raj(7014425052) , Prithvi(6297119117)
        </p>
      </>
    ),
  },

  {
    id: "Candid",
    eventname: "CANDID",
    category: "Photography",
    description: `"Candid" is a thematic photography contest that challenges participants to showcase their skills in capturing compelling images based on a secret theme revealed at the Culfest25 inauguration. Participants must interpret the theme creatively, submit 3–4 photographs, and provide their RAW files with metadata for authenticity. This event celebrates originality and technical mastery while promoting an appreciation for storytelling through photography.`,
    image: "/candid.webp",
    rules: (
      <>
        <div
          title="Details"
          className="space-y-2  rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              PARTICIPANTS :{" "}
            </span>
            Individual entries or teams of up to 2 members.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              THEME :{" "}
            </span>
            To be disclosed during the Culfest25 inauguration.
          </p>
        </div>

        <div
          title="Format"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">FORMAT : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              PHOTOGRAPHY CHALLENGE :{" "}
            </span>
            Participants will have a limited timeframe (48 hours) to capture and
            submit their entries
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              SUBMISSION REQUIREMENTS :{" "}
            </span>
            Participants will have to submit Edited photos in high resolution
            (JPEG/PNG) and Corresponding RAW image files with metadata via a
            shared portal or link by the deadline.
          </p>
        </div>

        <div
          title="Technical Guidelines"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">
              TECHNICAL GUIDELINES :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              1.EQUIPMENT :{" "}
            </span>{" "}
            Any camera (DSLR, smartphone, mirrorless, etc.) is allowed.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              2.EDITING RULES :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            - Basic adjustments like cropping, exposure, color correction, and
            masking are permitted.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            - AI-generated content and heavy manipulations are strictly
            prohibited.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              3.METADATA REQUIREMENTS :{" "}
            </span>
            RAW files with metadata must be submitted to ensure authenticity.
          </p>
        </div>

        <div
          title="Judging criteria"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">JUDGING CRITERIA : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              1.THEME RELEVENCE :{" "}
            </span>
            How well the images interpret and reflect the theme. (30%)
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              2.TECHNICAL SKILL :{" "}
            </span>
            Quality of focus, exposure, and other technical aspects. (20%)
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              3.COMPLIANCE :{" "}
            </span>
            Adherence to rules and submission requirements. (20%)
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              4.CREATIVITY :{" "}
            </span>
            Unique perspective and artistic composition. (30%)
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 10,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Pratyush Gupta(9199396460) , Subhmoy Maji (6297119117)
        </p>
      </>
    ),
  },

  {
    id: "COUTURE CRAFT",
    eventname: "COUTURE CRAFT",
    category: "Fashion",
    description: `The event "Couture Craft," organized by Quod Invicta as part of Culfest '25, invites participants to showcase their creative flair and craftsmanship. This exciting activity challenges individuals to transform fabric and accessories into stunning, wearable works of art. It's an opportunity for designers, artists, and fashion enthusiasts to demonstrate their skills in couture, fashion design, and textile manipulation. Whether participants are working with intricate patterns, unique materials, or embellishments, the goal is to create pieces that are not just fashion statements but artistic masterpieces. This event emphasizes creativity, innovation, and craftsmanship, allowing participants to push the boundaries of traditional fashion and bring their artistic visions to life. It is an exciting blend of fashion and art, offering a platform to display talent in a fun, vibrant atmosphere as part of the larger Culfest '25 celebration. `,
    image: "/invicta1.png",
    rules: (
      <>
        <div
          title="RULES"
          className="space-y-2  rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 1:{" "}
            </span>
            The event is open to teams (of 2), 1 model and 1 designer, of all
            skill levels, from beginners to experienced designers
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 2 :{" "}
            </span>
            Participants will have to be equipped with a basic kit containing
            fabric, thread, and some accessories (e.g., buttons, beads, ribbons,
            etc.), they are also encouraged to bring their own additional
            materials, such as unique fabrics, embellishments, or sewing tools.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 3 :{" "}
            </span>
            The use of pre-made clothing or fully assembled garments is not
            allowed. All designs must be created from scratch during the event.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 4 :{" "}
            </span>
            The event will have a set time frame (e.g., 2 to 4 hours) for
            participants to complete their designs. This will be communicated in
            advance.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 5 :{" "}
            </span>
            Participants must submit their completed creations within the time
            limit.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 6 :{" "}
            </span>
            participants must ensure that their creations align with the theme
            or creative guidelines provided.
          </p>
        </div>

        <div
          title="ELIGIBILITY"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">ELIGIBILITY : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            It is a team event. A team must consist of 2 members only, 1 model
            and 1 designer. The event is open to individuals or teams (if
            specified) of all skill levels, from beginners to experienced
            designers. All designs should be original and reflect creativity,
            skill, and innovation. Plagiarism of designs is strictly prohibited.
          </p>
        </div>

        <div
          title="Requirements"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">REQUIREMENTS : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span>1. </span> While prior experience with fashion design or craft
            skills is not mandatory, a basic understanding of working with
            fabric, sewing, or textile manipulation is recommended.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span>2. </span>Participants should be available for the full
            duration of the event (e.g., 2 to 4 hours). Time management is
            crucial as they will need to complete their design within the
            allotted time.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span>3. </span>If there is a specific theme for the event (e.g.,
            futuristic, nature-inspired, etc.), participants must ensure that
            their creations align with the theme or creative guidelines
            provided.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE :{" "}
          </span>{" "}
          LECTURE HALL COMPLEX
        </p>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 15,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Aryan (7870196307), Anjali roy (9279941865)
        </p>
      </>
    ),
  },

  {
    id: "PANACHE",
    eventname: "PANACHE",
    category: "Fashion",
    description: `When the lights, camera and heart-pounding music are on, the vision of models sashaying down the ramp is absolutely enthralling, for the students, professors, and judges alike. The young budding designers are rearing to come up with some gorgeous garments which will eventually come alive on the runway. The dazzling appearances of the hunks and the beauties shall set the heartbeats racing and the temperature soaring.  `,
    image: "/invicta2.png",
    rules: (
      <>
        <div
          title="RULES"
          className="space-y-2  rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 1:{" "}
            </span>{" "}
            A team must consist of minimum 12 models and maximum up to 18
            models. A team must have a minimum of 4 boys or 4 girls.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 2 :{" "}
            </span>
            You are free to choose any theme and will be marked accordingly to
            the relevance of the outfits to the theme. Teams must bring their
            own costumes and props.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 3 :{" "}
            </span>{" "}
            Emphasis and the performance would be judged on the clothing,
            walking style, originality, attitude, representation of the theme
            and the music mix.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 4 :{" "}
            </span>{" "}
            A team must consist of minimum 12 models and maximum up to 18
            models. A team must have a minimum of 4 boys or 4 girls. All the
            members should be dressed according to the theme given.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 5 :{" "}
            </span>{" "}
            Defined themes for clothing (e.g., traditional, futuristic,
            ecofriendly).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 6 :{" "}
            </span>
            Outfits that fit the theme and models.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 7 :{" "}
            </span>
            Complementing jewellery, shoes, and props.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 8 :{" "}
            </span>{" "}
            Curated music tracks to match the event's pace and mood.
          </p>
        </div>

        <div
          title="ELIGIBILITY"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">ELIGIBILITY : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            It is a team event. A team must consist of minimum 12 models and
            maximum up to 18 models. A team must have a minimum of 4 boys or 4
            girls. All the members should be dressed according to the theme
            given.
          </p>
        </div>

        <div
          title="Requirements"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">REQUIREMENTS : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span>1. </span>Defined themes for clothing (e.g., traditional,
            futuristic, ecofriendly).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span>2. </span>Outfits that fit the theme and models.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span>3. </span>Complementing jewellery, shoes, and props.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span>4. </span>Curated music tracks to match the event's pace and
            mood.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE :{" "}
          </span>{" "}
          MAIN STAGE
        </p>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 25,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            For any Query , Contact :{" "}
          </span>{" "}
          Sumit dogra (9596288658), kajal shaw (7439329759)
        </p>
      </>
    ),
  },

  {
    id: "FABLES IN FASHION",
    eventname: "FABLES IN FASHION",
    category: "Fashion",
    description: `Cosplay- participants dress up as a character from a movie, book or video game. The event promises a visual feast where creativity knows no bounds. Whether it's an iconic character faithfully recreated or a unique, original creation, each participant will captivate the audience with their attention to detail and commitment to the character. `,
    image: "/invicta3.jpg",
    rules: (
      <>
        <div
          title="RULES"
          className="space-y-2  rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 1:{" "}
            </span>{" "}
            This cosplay event is for individual participants only. No group
            entries are allowed.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 2 :{" "}
            </span>
            Participants can cosplay as characters from anime, manga, comics,
            movies, TV shows, video games, or any other pop culture source.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 3 :{" "}
            </span>{" "}
            Each participant will have a maximum of 5 minutes for a brief
            on-stage presentation to showcase their character.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              RULE 4 :{" "}
            </span>{" "}
            Original characters and mash-ups are allowed, but participants must
            provide a brief description of their character.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE :{" "}
          </span>
          OPEN AIR THEATRE
        </p>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 15,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Hrishita (943376535) , Aanchal (9380690526)
        </p>
      </>
    ),
  },

  {
    id: "JOURNALISM",
    eventname: "JOURNALISM",
    category: "Literary",
    description:
      "Anybody can be a journalist. There are opportunities for all of us to contribute to stories. If you’re an intellectually curious person- let’s assume that you are- you are likely to have embraced a number of notions about how the world works, how it should work and who should be running it. There should be no strings attached to your opinions, no one asking you to tone it down, and nobody that really wishes you to just shut the hell up and report just the fluffy pieces. You should also lack the warm and fuzzy attitude of your naysayers( and the trolls) who are always right when they spout off at the mouth in the comment section or on social media. In the age of the internet and social media, what does it mean to be a journalist? What is journalism? 1. Getting accurate information and treating it sceptically. 2. Doing it carefully, properly and ethically. 3. No matter what the medium. ",
    image: "/journalism.jpg",
    rules: (
      <>
        <div
          title="Details of stage 1"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">STAGE 1 : Prelims</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              TEAM COMPOSITION :{" "}
            </span>
            A minimum of 2 members and a maximum of 3 members are allowed in a
            team.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              SUBMISSION GUIDELINES :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o All the teams have to submit a write-up, PowerPoint presentation,
            or a video as their Prelims entry.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Word limit: 250 words for write-ups.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Video limit: 180 seconds.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o The abstract must be emailed to gensec.lds@nitjsr.ac.in by 25th
            February (12 noon).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              TOPICS FOR PRELIMS :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o For students who are present in and around the campus:
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Write an editorial-style article on the topic or create a video on
            the same:<b>"Impact of Western TV shows on Indian youth"</b>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o The write-up/video can be either in English or Hindi.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o The chosen language in prelims will remain the language of
            reporting throughout the competition if selected for the finals.
          </p>
        </div>

        <div
          title="Details of stage 2"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">STAGE 2 : Finals</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              TEAM COMPOSITION :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Team members cannot be replaced
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o The mode of communication/reporting must remain the same as chosen
            in prelims.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              REPORTING RULES :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Teams will be allotted equipment for 30 minutes each day.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Reporting must cover events between 9 AM and 5 PM.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Main stage reporting is not allowed.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Teams may choose the events they wish to cover, take interviews,
            and report ongoing activities as they find suitable.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              SUBMISSION GUIDELINES :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Submit video clippings and a report covering all three days of
            activities.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Video clippings must be submitted day-wise to the coordinator
            before 6 PM.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            o Basic video editing is allowed.
          </p>
        </div>

        <div
          title="General Rules and Regulations"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">
              GENERAL RULES AND REGULATIONS :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. No obscenity or inappropriate behaviour is allowed in the video.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Equipment must be handled carefully; any damage will be
            penalized.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. The decision of the judge will be final and binding.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4. Any team violating the rules will be disqualified.
          </p>
        </div>

        <div
          title="JUDGEMENT CRITERIA"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">JUDGEMENT CRITERIA : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Number of events covered.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Clarity, Grammatical pronunciations and presentation .
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. Diversity and creativity of the content.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 20,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Diamond JUbilee Lecture Hall Complex.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Arin Choudhary (8949004861) , Pranjal Mishra (8858641124)
        </p>
      </>
    ),
  },

  {
    id: "JUST A MINUTE",
    eventname: "JUST A MINUTE",
    category: "Literary",
    description:
      "Grammar Nazis! In a world with ever increasing usage of slang and incorrect grammar, we share your concern for the English language and understand the importance of maintaining the language in its untouched form. So, here’s an opportunity to show the world how it’s done. Just-A-Minute (or JAM) is an all-round fun event that is all about the control of the mind over the mouth. Can you make it through sixty seconds of non-stop talking without hesitation, repetition, or deviation? Or will the shear make you crumbled and have your competitors’ pounds on you in an instant? It is a fun filled literary event where the participants have to speak on the given topic for a maximum of 1 minute. While speaking, they cannot make certain errors. If any of the fellow participants spots and error while participant is speaking, he/she can clap and point out the error for which they will be rewarded points. Points are also awarded for the time span for which a participant speak. So f ill that unforgiving minute with sixty seconds worth of impeccable English and you would be the winner.",
    image: "/jam.jpeg",
    rules: (
      <>
        <div
          title="Errors"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">ERRORS</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            The errors which will be considered are-
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1.Plagiarism
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.Queens’s English
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3.Standard format
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4.Late start
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            5.Early start
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            6.Gesticulation
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            7.Over dramatization
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            8.Post qualification
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            9.Beating around the bush
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            10.Grammatical error
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">PRELIMS:</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            This will be an abstract submission round .Participants need to
            write an abstract on the topic: We create our own devils Word limit:
            250 words. The submission must be mailed to gensec.lds@nitjsr.ac.in.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">FINALS:</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            16 people from the prelims will head to the finals It will be a JAM
            session with all the standard rules .
          </p>
        </div>

        <div
          title="JUDGEMENT CRITERIA"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">JUDGEMENT CRITERIA : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            Normal JAM marking based on the number of errors committed by the
            speaker, number of minutes spoken , number of errors pointed will be
            considered while judging .
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 12,500.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Diamond Jubilee Lecture Hall Complex.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            {" "}
            Contact :{" "}
          </span>{" "}
          Aanchal Sikarwar - (9380690526) ,Neha Singh - (9431751248) ,Ritisha
          Ranjan - (9341107928)
        </p>
      </>
    ),
  },

  {
    id: "PEOPLE'S PARLEY",
    eventname: "PEOPLE'S PARLEY",
    category: "Literary",
    description: `“For good ideas and true innovation, you need human interaction, conflict, argument, debate.” What is a better place to put your opinions on the table and get yourself seen than a podium? Debates have always been the medium for people to conversate conflicting point of views and reach at legible conclusions. It promotes healthy but fierce, intellectually stimulating discussions. So here we are with an enticing event for all the orators out there, put on your thinking cap’s and get ready for the battle of the words as we present to you ‘People’s Parley.’`,
    image: "/peopleparley.jpg",
    rules: (
      <>
        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">RULES :</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1 .Initial Shortlisting of the participants will be done on the
            basis of an abstract submission round.<br></br>
            2. Participants need to submit an abstract on the topic: "AI a
            friend or enemy".(Word Limit : 250 Words)<br></br>
            3. The submission must be mailed to gensec.lds@nitjsr.ac.in.
            <br></br>
            4. Only individual participation is allowed. <br></br>
            5. The event will consist of 3 rounds – Extempore, Turncoat Debate,
            Oxford Union-Style Debate.<br></br>
            6. The topic or the prompt for extempore will be given on spot.
            <br></br>
            7. The participant will be given 2-3 mins to think and 1-2 mins to
            speak on it.This will be an eliminating round. The qualifying
            participants will move on to the next round.<br></br>
            8. Participants will be given a motion, and they will have to speak
            both for and against it in the turncoat round. Only two people will
            move on to the finals. <br></br>9 .The last round will be an Oxford
            Union debate where the two finalists will participate ina battle of
            wits.
          </p>
        </div>

        <div
          title="JUDGEMENT CRITERIA"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">JUDGEMENT CRITERIA : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Number of arguments/ideas presented.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.Overall Content on the opening speech, conclusion and rebuttal.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. Questions asked during QNA.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4. Answers given by the participants to the questions asked.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            5. Speech delivery, pronunciation and grammatical errors made.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 10,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Diamond Jubilee Lecture Hall Complex.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            For any Query, Contact :{" "}
          </span>{" "}
          Aanchal Sikarwar - (9380690526) ,Neha Singh - (9431751248) , Arin
          Choudhary- (8949004861 )
        </p>
      </>
    ),
  },

  {
    id: "Harmonic trio",
    eventname: "HARMONIC TRIO",
    category: "Music",
    description: `A musical experience brought to you by a talented trio, blending their unique talents to craft an unforgettable journey of sound and emotion. Each member brings their distinct artistry to the stage, creating a seamless fusion of melody, rhythm, and innovation. Together, they weave a tapestry of harmonies that captivate the senses and resonate with the soul. This evening, prepare to witness music come alive through the harmony, creativity, and passion of three extraordinary performers who unite as one to deliver a truly magical performance.`,
    image: "/music1.jpg",
    rules: (
      <>
        <div
          title="Rules"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">RULES : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1.The time limit for the performance, including the time allotted
            for sound check is 10 minutes (Stage in and stage out).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2 . The team should comprise 3 members including one as a vocalist.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. Teams must bring their own musical instruments. Drums are not
            allowed for the performance.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4. No pre-recorded audio or midi interfaces are allowed. However,
            teams can use looper pedals for live looping.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            5. All original compositions must have their lyrics printed/
            written.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            6.There is no restriction of the language of the song.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            7.Decision of the judges and the organising team will be final and
            abiding.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            8.Any team violating any rule will be disqualified.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            9.No of participants should be 3 members per team
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 20,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE :{" "}
          </span>{" "}
          Open air theatre
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            For any Query , Contact :{" "}
          </span>{" "}
          Adarsh Kumar (9508850611) ,Saksham maurya (7521925326)
        </p>
      </>
    ),
  },

  {
    id: "culfest idol",
    eventname: "CULFEST IDOL",
    category: "Music",
    description: `Admirer of the rich folk culture and music? Don’t feel lost in this rock and jazz buzzing western environment because here is your chance to win the day. Participate in this event and tune the audience to your strings. Give everyone a glimpse of the kishore da or the lata mangeshkar hidden inside you.`,
    image: "/music1.jpg",
    rules: (
      <>
        <div
          title="Rules"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">RULES : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1.Participants can sing eastern songs of any genre (preferably
            hindi).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Maximum time allotted is 5 minutes.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. They will need to carry a proper karaoke track or Instrument for
            their performances (compulsory).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4. Marks shall be deducted if the time limit is exceeded.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            5. The decision of the judges will be final and binding
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            6.No of participant should be 1 (i.e this is an individual event).
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 10,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE :{" "}
          </span>{" "}
          Open air theatre
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Saurabh kumar (8511918420), shreya sharma (7033618603)
        </p>
      </>
    ),
  },

  {
    id: "unplugged(instrumental)",
    eventname: "UNPLUGGED",
    category: "Music",
    description: `And the night shall be filled with music and the cares that infest the day shall fold their tents like the Arabs and silently steal away. Music is peace, thought, wisdom. Music is forever. If music soothes and softens your soul as well, if you are willing to give a go at the notes and skilfully play any musical instrument, then Euphony is the perfect platform for you. Euphony is a solo instrumental competition in Culfest’25. Let your instrument do the magic and mesmerize everyone.`,
    image: "/music2.jpg",
    rules: (
      <>
        <div
          title="Rules"
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-4xl">RULES : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Maximum 3 members are allowed in a team.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Participants have to perform musical piece on instruments only.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. Maximum time limit is 7 minutes.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4. Karaoke is not allowed but supporting music for beats and rhythm
            is allowed.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            5. Their instrumentation skills will be taken into account for
            judgement.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            6. Marks will be deducted if the time limit is exceeded or for
            violation of any rule.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            7. The decision of judges will be final and binding.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 20,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE :{" "}
          </span>{" "}
          Open air theatre
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Kaustav (9569261496) ,arsh mishra (8171349941)
        </p>
      </>
    ),
  },

  {
    id: "call break",
    eventname: "CALL BREAK",
    category: "Informals",
    description: `Fun card game`,
    image: "/informal1.jpg",
    rules: (
      <>
        <div
          title="Rules of call break"
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">RULES : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              NO. OF PLAYERS :{" "}
            </span>
            Call Break is played with 4 players using a standard 52-card deck.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              OBJECTIVE :{" "}
            </span>
            The goal is to win the exact number of tricks (or more) called
            during the bidding phase.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              CARD RANKING :{" "}
            </span>
            The cards rank from Ace (highest) to 2 (lowest). Spades are always
            the trump suit..
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              DEALING :{" "}
            </span>
            Each player is dealt 13 cards, one card at a time in clockwise
            order.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              BIDDING :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Each player declares the minimum number of tricks they aim to win
            in a clockwise manner.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. The bids are made before gameplay starts and cannot be changed.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              GAMEPLAY :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. The player to the dealer’s right leads the first trick.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Players must follow suit if possible. If they cannot, they may
            play any card, including a trump card (spade).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. The highest trump wins the trick. If no trumps are played, the
            highest card of the suit led wins.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              SCORING :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. If a player wins at least the number of tricks they bid, they
            score points equal to their bid.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. For every extra trick won, they score 0.1 additional points.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. If a player fails to meet their bid, they lose points equal to
            their bid.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              ROUNDS :{" "}
            </span>
            The game is usually played over 5 rounds. The player with the
            highest total score at the end wins.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              TIE BREAKER :{" "}
            </span>
            If there’s a tie, an additional round can be played to determine the
            winner.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              PENALTIES :{" "}
            </span>
            Any violations, such as bidding less than 1 or showing cards
            intentionally, result in penalties or disqualification.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 5,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Lecture Hall Complex.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            For any Query , Contact :{" "}
          </span>{" "}
          Abhinav Raj (7488849924)
        </p>
      </>
    ),
  },

  {
    id: "photo scavenger hunt",
    eventname: "PHOTO SCAVENGER HUNT",
    category: "Informals",
    description: `A fun and interactive game where participants race to capture photos of specific items, scenes, or activities from a predefined list within a set time. It encourages creativity, teamwork, and exploration!`,
    image: "/informal2.avif",
    rules: (
      <>
        <div
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">TEAM COMPOSITION : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Each team must consist of 4-5 members.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Teams should register prior to the start of the event.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">EVENT STRUCTURE : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Teams will be provided with 5-6 prompts or questions.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Each prompt will require teams to interpret, locate, and
            photograph something that matches the description.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. Accuracy will be key to scoring.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">TIMING : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Teams will have a total of [specified time, e.g., 90 minutes] to
            complete the hunt.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Late submissions will result in penalties or disqualification.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">
              PHOTOGRAPH REQUIREMENTS :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Photographs must be clicked during the event timeframe.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Each photograph must include at least one team member as proof of
            authenticity.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. Photos should be unedited and submitted in their original form.
            Submission :
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">SUBMISSION : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Teams must submit all photographs before the deadline.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Submissions should be made via the designated platform or to the
            assigned event coordinators.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">JUDGING CRITERIA : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Accuracy: How well the photograph matches the prompt.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.Completion: Number of correct submissions.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">
              PROHIBITED ACTIVITIES :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Plagiarism: Submitting pre-existing or sourced photographs.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Tampering: Editing or altering the photographs.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. Misconduct: Interfering with other teams or event facilitators.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 10,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Campus.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            For any Query , Contact :{" "}
          </span>{" "}
          SHRINKHALA (7643841711) , pratyush (9199396460)
        </p>
      </>
    ),
  },

  {
    id: "LOOT AND SHOOT",
    eventname: "LOOT AND SHOOT",
    category: "Informals",
    description: `Compete in squads of 4 in this high-stakes BGMI tournament featuring 3 matches on Erangel, Sanhok, and Miramar. Earn points through kills and placement to climb the leaderboard, with cumulative scores deciding the winners. Play fair, join on time, and showcase your skills to dominate the battlegrounds!!`,
    image: "/informal3.webp",
    rules: (
      <>
        <div
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">NO OF PLAYERS : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            Each game features 100 players divided into 25 squads, with each
            squad consisting of 4 players only.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">OBJECTIVE : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            The goal is to survive, secure kills, and achieve the highest
            cumulative points across all matches to win the tournament.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">GAME FORMAT : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            There will be 3 matches.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">MAPS : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            Matches will be played on Erangel, Sanhok, and Miramar (one match on
            each map).
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">WINNING CRITERIA : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            Final standings will be based on cumulative points earned from kills
            and placement across all matches.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">SCORING : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Kill Points: Teams earn points for each opponent eliminated.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.Placement Points: Teams earn points based on their final rank in
            each match.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3.Total Points: The sum of kill and placement points determines the
            final standing.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">GENERAL RULES: </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. All participants must play using the BGMI app (official version).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Cheating, unauthorized software, or exploiting bugs will result
            in immediate disqualification.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. Conduct : Players must maintain sportsmanship and avoid toxic
            behavior
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4. Match Integrity : Squads failing to join the lobby on time will
            forfeit their match.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            5. Penalties : Violations like team stacking, or unsportsmanlike
            conduct will result in penalties or disqualification.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            6. Registration Requirements : Each squad must register with exactly
            4 players.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 5,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            LOCATION:{" "}
          </span>{" "}
          ONLINE.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Shresth (8226907863), pratyush (9199396460)
        </p>
      </>
    ),
  },

  {
    id: "Bonded Arts And Beauty",
    eventname: "BONDED ARTS AND BEAUTY",
    category: "Informals",
    description: `Bonded Arts & Beauty is a unique two-round event designed to test teamwork, creativity, and precision in a fun-filled competition for couples. In Round 1, partners tackle the Blindfold Makeup Challenge, where one applies makeup while blindfolded, judged on neatness and creativity. Only the top 10 teams advance to Round 2, Bonded Arts, where partners work together with tied hands to cut out a given pattern using limited resources. Teams are scored on accuracy and completeness, with the winner crowned for their skillful collaboration. Strict rules ensure fairness, with disqualification for unsportsmanlike behavior. Let your bond shine through art and beauty!`,
    image: "/informal4.jpg",
    rules: (
      <>
        <div
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">TEAM COMPOSITION : </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Each team must consist of two members (a couple).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Teams should register prior to the start of the event.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">
              Round 1: Blindfold Makeup Challenge (Elimination Round)
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. One partner will be blindfolded and will have to apply makeup to
            the other partner.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. The makeup kit will be provided by the organizers.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3.Time Limit: 5 minutes.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              JUDGING CRITERIA :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Neatness and balance of the makeup application.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Creativity and overall appearance.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              ELIMINATION CRITERIA :{" "}
            </span>{" "}
            This is an elimination round. Only the top 10 teams will qualify for
            Round 2.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">Round 2: Bonded Arts</span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. The right hand of both partners will be tied together with a
            ribbon.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Using only their left hands, couples must cut out a given pattern
            from a page.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3.Each team will be provided with a pattern and a pair of scissors.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4.The team that cuts out the perfect pattern within the time limit
            in Round 2 will be declared the winner.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
              JUDGING AND SCORING CRITERIA :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Accuracy of the cut.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Completeness of the pattern.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. The judging panel’s decisions will be final and binding.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4. Scores will be based on the criteria outlined for each round.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">
              PROHIBITED ACTIVITIES :{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. Tampering with the ribbons or scissors.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2. Seeking external help or using non-provided materials.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3. Any form of cheating or unsportsmanlike behavior will lead to
            disqualification.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 5,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          OAT/Any LHC room.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          SHRINKHALA (7643841711) , priyanka bardhan (8108573623)
        </p>
      </>
    ),
  },

  {
    id: "Trust Run",
    eventname: "TRUST RUN AND BLIND MAZE MARATHON",
    category: "Informals",
    description: `A unique two-round event where teamwork, communication, and trust are key. Teams of two compete to showcase their coordination and navigation skills in a race against time. `,
    image: "/informal5.jpg",
    rules: (
      <>
        <div
          className="space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">
              ROUND 1 : TIED LEG SPRINT{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. The adjacent legs of both team members (e.g., left leg of one and
            right leg of the other) will be tied together.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.Teams must race from a starting point to an endpoint.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3.Teams must maintain the tie throughout the race.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4.Falling or losing the tie leads to disqualification.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            5.Top 10 teams with the fastest completion times qualify for the
            second round.
          </p>
        </div>

        <div
          className="mt-4 space-y-2 rounded-md border-2 p-4 transition-all duration-300 "
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            <span className="font-Piedra text-3xl">
              ROUND 2 : BLIND MAZE CHALLENGE{" "}
            </span>
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            1. One team member will be the *Guide* (who can see the maze), while
            the other will be the *Runner* (who will be blindfolded).
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            2.The Guide must navigate the blindfolded Runner verbally through
            the maze.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            3.Guide : Gives only verbal directions to the Runner.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            4.Runner : Blindfolded and must strictly follow the Guide’s
            instructions.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            5.Time Limit : Each team will get 10-15 minutes to complete the
            maze. Teams that fail to finish in this time will be disqualified.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            6.No Peeking : The Runner cannot see the maze at any point.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            7.No Physical Assistance : The Guide cannot physically assist the
            Runner in any way.
          </p>
          <p className="font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl">
            8. Winning : The team with the fastest time to complete the maze
            wins.
          </p>
        </div>

        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            PRIZE MONEY :{" "}
          </span>{" "}
          Rs 5,000.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            VENUE:{" "}
          </span>{" "}
          Downs Ground.
        </p>
        <p
          className="mt-2 rounded-lg border-2 p-2 font-serif text-[14px] text-white drop-shadow-[0_0_3px_black] dark:text-white sm:text-3xl lg:text-3xl"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <span className="font-Piedra" style={{ letterSpacing: "2px" }}>
            Contact :{" "}
          </span>{" "}
          Shresth (8226907863) , Ammar (9122246709)
        </p>
      </>
    ),
  },
];
