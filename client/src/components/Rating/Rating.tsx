import { Box, Typography } from "@mui/material";
import React, { useState, ChangeEvent } from "react";

// תגיות עבור הרמות השונות של הסקר
const DEFAULT_RATING_LABELS: { [key: number]: string } = {
  1: "Very Unsatisfied",
  2: "Unsatisfied",
  3: "Neutral",
  4: "Satisfied",
  5: "Very Satisfied"
};

type QuestionProps = {
  name: string;
  stars: number | null;
  onChange: (event: ChangeEvent<{}>, newValue: number | null) => void;
  question: string;
  required: boolean;
};

// רכיב דירוג עם תמונות אמוג'י לצורך פיתוח
export default function Rating({
  name,
  stars,
  onChange,
  question,
  required,
}: QuestionProps): JSX.Element {
  const [hover, setHover] = useState(-1);

  // רשימת תמונות האמוג'י
  const emojis = [
    { static: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/angry-face_1f620.png", animated: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/angry-face_1f620.png" },
    { static: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/pensive-face_1f614.png", animated: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/pensive-face_1f614.png" },
    { static: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/neutral-face_1f610.png", animated: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/neutral-face_1f610.png" },
    { static: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/slightly-smiling-face_1f642.png", animated: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/slightly-smiling-face_1f642.png" },
    { static: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/smiling-face-with-heart-eyes_1f60d.png", animated: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/smiling-face-with-heart-eyes_1f60d.png" },
  ];

  return (
    <>
      <Typography variant="h2">{question}</Typography>
      <Box display="flex" alignItems="center">
        {emojis.map((emoji, index) => (
          <Box
            key={index}
            sx={{
              width: '50px',
              height: '50px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${
                hover !== -1 && hover === index + 1
                  ? emoji.animated
                  : emoji.static
              })`,
              cursor: 'pointer',
              border: '1px solid #ddd',
              margin: '0 4px' // הוספת מרווחים בין התמונות
            }}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(-1)}
            onClick={() => onChange({} as ChangeEvent<{}>, index + 1)}
          />
        ))}
        {stars !== null && (
          <Box ml={2}>
            {DEFAULT_RATING_LABELS[hover !== -1 ? hover : stars]}
          </Box>
        )}
      </Box>
      {required && <Typography variant="subtitle2">(Required)</Typography>}
    </>
  );
}
