import React from "react";
import "../Styles/Home.css";
import { FeaturedEvents } from "../Helpers/featuredEvents";
import { UpcomingEvents } from "../Helpers/upcomingEvents";
import FeaturedItem from "../components/featuredItem";
import UpcomingItem from "../components/upcomingItem";
import MYOE from "../assets/MYOE.png"

function Home() {
  return (
    <div className="home">
       <h1 id="FE">Featured Events</h1>
        <div className="featuredEvents">    
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
      <div className="MYOE"> 
      <img src={MYOE}></img>
      <div>
      <h2>Make your own Event </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <button>Create Events</button>
      </div>
      </div>
      <h1 id="UE">Upcoming Events</h1>
      <div className="upcomingEvents">
        <div className="menu">
          <div className="ueContents">
            {UpcomingEvents.map((upcomingItem, key) => {
              return (
                <div>
                  <UpcomingItem
                    key={key}
                    image={upcomingItem.image}
                    eventName={upcomingItem.eventName}
                    date={upcomingItem.date}
                    description={upcomingItem.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button className="Lm">Load More</button>
    </div>
  );
}

export default Home;
