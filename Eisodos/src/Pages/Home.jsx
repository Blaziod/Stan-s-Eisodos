import React from "react";
import "../Styles/Home.css";
import { FeaturedEvents } from "../Helpers/featuredEvents";
import FeaturedItem from "../components/featuredItem";

function Home() {
  return (
    <div className="home">
        <div className="featuredEvents" style={{ padding: 100 }}>
          <h1 id="FE">Featured Events</h1>
      <div className="menu">
        
          <div className="feContents">
            {FeaturedEvents.map((featuredItem, key) => {
              return (
                <div>
                  <FeaturedItem
                    key={key}
                    image={featuredItem.image}
                    eventName={featuredItem.eventName}
                    date={featuredItem.date}
                    description={featuredItem.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <br></br>
      <div className="upcomingEvents" style={{ padding: 10 }}>
        <h1 id="FE">Upcoming Events</h1>
        <div className="menu">
        
          <div className="feContents">
            {FeaturedEvents.map((featuredItem, key) => {
              return (
                <div>
                  <FeaturedItem
                    key={key}
                    image={featuredItem.image}
                    eventName={featuredItem.eventName}
                    date={featuredItem.date}
                    description={featuredItem.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
