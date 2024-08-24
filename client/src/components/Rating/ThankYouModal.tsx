import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../Button/Button";

interface ThankYouModalProps {
  open: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ open, onClose }) => {
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
          width: 400,
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

        <Button
          className="bg-my-pink px-6 py-3 rounded-3xl text-white fnt font-semibold mt-4"
          onClick={onClose}
          title="Back To Home"
          link="/"
        />
      </Box>
    </Modal>
  );
};

export default ThankYouModal;
