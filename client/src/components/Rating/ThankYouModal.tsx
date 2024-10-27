import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../Button/Button";
import { useEmotionStore } from "../../store/useEmotionStore";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import toast from "react-hot-toast";
import axiosInstance from "../../store/axiosConfig";

interface ThankYouModalProps {
  open: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ open, onClose }) => {
  const [saveData, setSaveData] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const stylePercentages = useEmotionStore((state) => state.styleScores);
  const emotionPercentages = useEmotionStore(
    (state) => state.emotionPercentages
  );

  const handleSaveDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSaveData(event.target.checked);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setShowEmailError(false); // הסרת ההודעה על שגיאה אם המייל הוזן
  };

  const handleSave = async () => {
    if (saveData && email) {
      try {
        await axiosInstance.post("/api/data/submit-data", {
          email,
          stylePercentages,
          emotionPercentages,
        });
        toast.success("Data saved successfully!");
      } catch (error) {
        console.error("Error saving data:", error);
        toast.error("Failed to save data. Please try again.");
      }
    } else {
      setShowEmailError(true); // הצגת ההודעה אם המייל לא הוזן
    }
  };

  const handleHomeRedirect = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 450,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 6,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Thank You!
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2, mb: 3 }}>
          Your ratings have been submitted successfully.
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={saveData}
              onChange={handleSaveDataChange}
              color="primary"
            />
          }
          label="Save my data"
        />
        {saveData && (
          <>
            <TextField
              fullWidth
              label="Enter your email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              sx={{ mt: 2, mb: 2 }}
            />
            {showEmailError && (
              <Typography color="error" sx={{ mb: 2 }}>
                Please enter your email to save the data.
              </Typography>
            )}
            <Button
              className={`px-6 py-3 rounded-3xl mr-6 fnt font-semibold ${
                email
                  ? "bg-green-500 text-white"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              onClick={handleSave}
              title="Save"
              disabled={!email}
            />
          </>
        )}
        <Button
          className="bg-my-pink px-6 py-3 rounded-3xl text-white fnt font-semibold mt-4"
          onClick={handleHomeRedirect}
          title="Back To Home"
          link="/"
        />
      </Box>
    </Modal>
  );
};

export default ThankYouModal;
