import { getFeaturedEvents } from "../helpers/api-util";
import Head from "next/head";

import EventList from "../components/events/event-list";

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();
  // () => {
  //   Parse.initialize(
  //     "lGQ805rTTSVHXzS74loDrd22GN8mOvWAr8siI8pb",
  //     "8ePR4FUKlaAyw6cZMuFsIRLUWpj0z8zoigl3elKw"
  //   );
  //   Parse.serverURL = "https://parseapi.back4app.com/";
  //   const myEvents = new Parse.Query("nextjs_demo");
  //   console.log(myEvents);
  // };

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot nice damn things about Great Coding  Events"
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
export default HomePage;
