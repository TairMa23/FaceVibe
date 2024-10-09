import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Rating from "../../../components/Rating/Rating";
import Button from "../../../components/Button/Button";
import { toast } from "react-hot-toast"; // Import react-hot-toast
import { useRatingStore } from "../../../store/ratingStore";
import ThankYouModal from "../../../components/Rating/ThankYouModal";
import axiosInstance from "../../../store/axiosConfig";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffede9",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #ddd",
  borderRadius: "20px",
  margin: "0 60px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
  width: "100%",
  height: "auto",
  maxWidth: "900px",
}));

const Questions: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { ratings, setRating } = useRatingStore();

  const handleRatingChange = (index: number, rating: number | null) => {
    setRating(index, rating);
  };

  useEffect(() => {
    console.log("Updated ratings:", ratings);
  }, [ratings]);

  const allQuestionsAnswered = ratings.every((rating) => rating !== null);

  const handleSendClick = async () => {
    console.log(allQuestionsAnswered);

    if (allQuestionsAnswered) {
      try {
        await axiosInstance.post("/api/data/submit-ratings", {
          ratings,
        });
        setOpen(true); // Open the modal
        console.log("Ratings submitted successfully");
      } catch (error) {
        console.error("Error submitting ratings:", error);
        toast.error("Failed to submit ratings. Please try again.");
      }
    } else {
      toast.error("Please answer all the questions before proceeding.", {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="dark:bg-dark-background relative ">
        <div className="dark:bg-dark-background h-10"></div>
        <div className="text-center">
          <h2 className="text-sectionTitle text-6xl text-se fnt font-bold dark:text-dark-text">
            Rate Your Experience
          </h2>
        </div>
        <Box sx={{ width: "100%", padding: "20px" }}>
          <Stack spacing={3} alignItems="center">
            <Item>
              <Rating
                question="How enjoyable was your overall experience on our website?"
                onChange={(rating) => handleRatingChange(0, rating)}
              />
            </Item>
            <Item>
              <Rating
                question="How accurate were the results or recommendations you received on our website?"
                onChange={(rating) => handleRatingChange(1, rating)}
              />
            </Item>
            <Item>
              <Rating
                question="Was the time allocated for each image suitable in your opinion? "
                onChange={(rating) => handleRatingChange(2, rating)}
              />
            </Item>
            <Item>
              <Rating
                question="How do you feel about our service?"
                onChange={(rating) => handleRatingChange(3, rating)}
              />
            </Item>
            <Item>
              <Rating
                question="How likely are you to recommend FaceVibe to your friend?"
                onChange={(rating) => handleRatingChange(4, rating)}
              />
            </Item>
          </Stack>
        </Box>
        <div className="text-center mt-4">
          <Button
            className="bg-my-pink px-6 py-3 rounded-3xl text-white fnt font-semibold"
            onClick={handleSendClick}
            title="Send"
          />
        </div>

        <ThankYouModal open={open} onClose={handleClose} />
      </div>
    </>
  );
};

export default Questions;
