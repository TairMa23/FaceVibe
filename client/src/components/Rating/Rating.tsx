import React, { useState } from 'react';
import './Rating.css';

const emojis: { src: string; description: string }[] = [
  { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.gif', description: 'Oh God! Why?!' },
  { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f614/512.gif', description: 'It sucks...' },
  { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif', description: "It's ok. I guess." },
  { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif', description: 'This is great!' },
  { src: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif', description: 'OMG! I love it!' }
];

interface RatingProps {
  question: string;
  isRequired?: boolean;
  onChange?: (rating: number | null) => void; // Add this prop
}

const Rating: React.FC<RatingProps> = ({ question, isRequired = true, onChange }) => {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    const newSelectedEmoji = selectedEmoji === index ? null : index;
    setSelectedEmoji(newSelectedEmoji);
    onChange && onChange(newSelectedEmoji); // Call onChange when emoji is selected
  };

  return (
    <div className="emoji-rating-container">
      <div className="question">
        {question} {isRequired && <span className="required">*</span>}
      </div>
      <div className="emojis">
        {emojis.map((emoji, index) => (
          <div key={index} className="emoji-wrapper" onClick={() => handleSelect(index)}>
            <img src={emoji.src} alt={`emoji-${index}`} className="emoji" />
            {selectedEmoji === index && (
              <div className="emoji-description">{emoji.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
