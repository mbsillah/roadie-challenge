import React, { useState, useEffect } from "react";
import axios from "axios";
import Review from "./components/Review";
import NewReview from "./components/NewReview";
import Filter from "./components/Filter";
import Modal from "react-modal";
import Rating from "react-rating";
import { MdClose, MdStar, MdStarBorder } from "react-icons/md";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  // const [reviews, setReviews] = useState({
  //   originalReviews: [
  //     {
  //       title: "Perfect",
  //       rating: 5,
  //       user: "User 1",
  //       date: "01/01/2020",
  //       review:
  //         "Lorem Khaled Ipsum is a major key to success. Look at the sunset, life is amazing, life is beautiful, life is what you make it. The key to more success is to get a massage once a week, very important, major key, cloth talk. Wraith talk. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough?"
  //     },
  //     {
  //       title: "Great device!",
  //       rating: 4,
  //       user: "User 2",
  //       date: "01/01/2020",
  //       review:
  //         "Look at the sunset, life is amazing, life is beautiful, life is what you make it. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat."
  //     },
  //     {
  //       title: "Easy installation",
  //       rating: 4,
  //       user: "User 3",
  //       date: "01/01/2020",
  //       review:
  //         "Every chance I get, I water the plants, Lion! Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh."
  //     },
  //     {
  //       title: "Not bad",
  //       rating: 3,
  //       user: "User 4",
  //       date: "01/01/2020",
  //       review:
  //         " Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat."
  //     }
  //   ],
  //   filterReviews: [],
  //   average: 0,
  //   percentages: {
  //     "1": 0,
  //     "2": 0,
  //     "3": 0,
  //     "4": 0,
  //     "5": 0
  //   }
  // });

  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({
    isActive: false,
    filterBy: null
  });

  const [reviews, setReviews] = useState({
    originalReviews: [],
    filterReviews: [],
    percentages: {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    }
  });

  const addReview = review => {
    const updatedReviews = reviews.originalReviews;
    review.rating = parseInt(review.rating);
    updatedReviews.push(review);
    setReviews({
      ...reviews,
      originalReviews: updatedReviews
    });
    setModal(!modal);
  };

  const calculateReviewAverages = () => {
    const newPercentages = reviews.percentages;

    for (const key in reviews.percentages) {
      const currentReviews = reviews.originalReviews.filter(
        review => review.rating === parseInt(key)
      );
      const newPercentage = (currentReviews.length / 5) * 100;
      newPercentages[key] = newPercentage;
    }

    setReviews({
      ...reviews,
      percentages: newPercentages
    });
  };

  const average = () => {
    const average = Math.ceil(
      reviews.originalReviews.reduce((acc, cv) => acc + cv.rating, 0) /
        reviews.originalReviews.length
    );

    return (
      <div style={{ margin: ".5rem 0rem" }}>
        <Rating
          initialRating={average ? average : 0}
          readonly
          emptySymbol={<MdStarBorder className="stars" />}
          fullSymbol={<MdStar className="stars" />}
        />
        <span style={{ marginLeft: "0.5rem" }}>
          {average ? average : 0} out of 5
        </span>
      </div>
    );
    // console.log("review Total: ",reviews.reduce((acc, cv) => acc + cv.rating, 0))
    // console.log("review Total Amount: ",reviews.length)
  };

  const filterReviews = (e, id) => {
    e.preventDefault();
    if (filter.isActive) {
      setReviews({
        ...reviews,
        filterReviews: []
      });
      setFilter({
        isActive: false,
        filterBy: null
      });
    } else {
      const filteredReviews = reviews.originalReviews.filter(
        review => review.rating === parseInt(id)
      );
      setReviews({
        ...reviews,
        filterReviews: filteredReviews
      });
      setFilter({
        isActive: true,
        filterBy: id
      });
    }
  };

  const renderFiltered = () => {
    if (reviews.filterReviews.length > 0) {
      return (
        <React.Fragment>
          {reviews.filterReviews.map((review, i) => {
            return <Review review={review} key={i} />;
          })}
        </React.Fragment>
      );
    } else {
      return <div>No reviews!!!</div>;
    }
  };

  useEffect(() => {
    async function getReviews() {
      const res = await axios.get("/api/reviews");
      setReviews({
        ...reviews,
        originalReviews: res.data
      });
    }
    getReviews();
  }, []);

  useEffect(() => {
    calculateReviewAverages();
  }, [reviews.originalReviews.length]);

  return (
    <div>
      <div className="nav"></div>
      <div className="main">
        <div className="itemContainer" style={{ marginBottom: "2rem" }}>
          <img
            className="itemPic"
            src="https://i.imgur.com/G3A6jwC.jpg"
            alt="roadie_pic"
          />

          <div className="descriptionContainer">
            <h2 className="title">
              Roadie Communicator - Includes Installation Software
            </h2>
            <span>by Roadie</span>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque
                beatae illo dignissimos quo culpa omnis magnam labore at
                molestias, laudantium sequi minus. Excepturi sapiente atque
                pariatur? Aliquid, quo ullam.
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates nihil vel veritatis aliquid pariatur quae quis
                  voluptatem possimus maxime quasi ad quia, repellendus
                  quibusdam eveniet.
                </li>
              </ul>
            </div>

            <div className="buttonContainer">
              <button
                style={{ marginRight: ".5rem" }}
                className="button"
                onClick={() => setModal(!modal)}
              >
                Leave Review
              </button>
              <button
                style={{ marginLeft: ".5rem" }}
                className="button"
                id="actionButton"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <span className="title" style={{ fontSize: "25px" }}>
          Customer Reviews
        </span>
        <div className="itemContainer">
          <div style={{ flex: ".55" }}>
            {average()}
            <div style={{ margin: ".5rem 0rem" }}>
              {reviews.originalReviews.length} reviews
            </div>
            <Filter
              filter={filter}
              setFilter={setFilter}
              percentages={reviews.percentages}
              filterReviews={filterReviews}
            />
          </div>

          <div className="reviewsContainer">
            {filter.isActive
              ? renderFiltered()
              : reviews.originalReviews.map((review, i) => {
                  return <Review review={review} key={i} />;
                })}
          </div>
        </div>

        <Modal
          isOpen={modal}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.5)"
            },
            content: {
              top: "10%",
              left: "18%",
              right: "auto",
              bottom: "auto",
              padding: "0"
            }
          }}
        >
          <div style={{ textAlign: "right" }}>
            <button className="close">
              <MdClose onClick={() => setModal(!modal)} />
            </button>
          </div>
          <NewReview modal={modal} setModal={setModal} addReview={addReview} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
