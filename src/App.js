// import React, { useEffect, useState } from "react";
// import axios from "axios";
import React, { useState } from "react";
import Review from "./components/Review";
import NewReview from "./components/NewReview";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([
    {
      title: "Perfect",
      rating: 5,
      user: "User 1",
      date: "01/01/20",
      review:
        "Lorem Khaled Ipsum is a major key to success. Look at the sunset, life is amazing, life is beautiful, life is what you make it. The key to more success is to get a massage once a week, very important, major key, cloth talk. Wraith talk. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough?"
    },
    {
      title: "Great device!",
      rating: 4,
      user: "User 2",
      date: "01/01/20",
      review:
        "Look at the sunset, life is amazing, life is beautiful, life is what you make it. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat."
    },
    {
      title: "Easy installation",
      rating: 4,
      user: "User 3",
      date: "01/01/20",
      review:
        "Every chance I get, I water the plants, Lion! Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh."
    },
    {
      title: "Not bad",
      rating: 3,
      user: "User 4",
      date: "01/01/20",
      review:
        " Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat."
    }
  ]);

  const [modal, setModal] = useState(false);

  // const [reviews, setReviews] = useState([]);
  // const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   async function getReviews() {
  //     const res = await axios.get("/api/reviews");
  //     console.log(res.data);
  //     setReviews(res.data);
  //   }
  //   getReviews();
  // }, []);

  return (
    <div>
      {/* <h1>Roadies Challenge</h1> */}

      <div>
        <img src="https://i.imgur.com/G3A6jwC.jpg" alt="roadie_pic" />
      </div>

      <div>
        <h2>Roadie Communicator - Includes Installation Software</h2>
        <span>by Roadie</span>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque
          beatae illo dignissimos quo culpa omnis magnam labore at molestias,
          laudantium sequi minus. Excepturi sapiente atque pariatur? Aliquid,
          quo ullam.
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            nihil vel veritatis aliquid pariatur quae quis voluptatem possimus
            maxime quasi ad quia, repellendus quibusdam eveniet.
          </li>
        </ul>
      </div>

      <div>
        <button onClick={() => setModal(!modal)}>Leave Review</button>
        <button>Add to Cart</button>
      </div>

      <span>Customer Reviews</span>
      <div>
        <div>This components will filter reviews!</div>

        <div>
          {reviews.map((review, i) => {
            return <Review review={review} key={i} />;
          })}
        </div>
      </div>
      {modal ? <NewReview setModal={setModal}/> : null}
    </div>
  );
}

export default App;
