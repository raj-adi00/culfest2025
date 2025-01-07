import React from "react";
import Head from "next/head";

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Culfest</title>
        <meta
          name="description"
          content="Terms and conditions for Culfest event ticket policies."
        />
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="mb-4 text-3xl font-bold">Terms and Conditions</h1>
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">1. Eligibility</h2>
          <p className="mb-1">
            - Tickets are available for individuals aged 18 and above unless
            otherwise specified.
          </p>
          <p>- Valid identification must be presented at entry.</p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">2. Ticket Usage</h2>
          <p className="mb-1">
            - Tickets are non-transferable and valid only for the specified
            event date and time.
          </p>
          <p>- Unauthorized duplication of tickets may prevent entry.</p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">3. Event Changes</h2>
          <p>
            - The organizer reserves the right to reschedule, postpone, or
            cancel the event due to unforeseen circumstances.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">
            4. Prohibited Activities
          </h2>
          <p className="mb-1">
            - The resale or redistribution of tickets is strictly prohibited.
          </p>
          <p>
            - Attendees must adhere to event-specific guidelines and venue
            rules.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">5. Liability</h2>
          <p>
            - The organizer is not responsible for personal belongings or
            injuries during the event.
          </p>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
