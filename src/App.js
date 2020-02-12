import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    async function getReviews() {
      const res = await axios.get("/api/reviews");
      setReviews(res.data);
    }
    getReviews();
  }, []);
  return (
    <div>
      <h1>Roadies Challenge</h1>
    </div>
  );
}

export default App;
