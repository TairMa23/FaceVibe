import React, { useState, ChangeEvent } from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Rating from "../../components/Rating/Rating";
import Result from "../../Section/Feedback/Result/Result";

const Feedback: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);

  const handleRatingChange = (event: ChangeEvent<{}>, newValue: number | null) => {
    setRating(newValue);
  };

  return (
    <div>
      <HeaderBar />
      <Header />
       <Result/>
      <Rating
        name="feedbackRating"
        stars={rating}
        onChange={handleRatingChange}
        question="How would you rate our service?"
        required={true}
      />
      <Footer />
    </div>
  );
};

export default Feedback;
