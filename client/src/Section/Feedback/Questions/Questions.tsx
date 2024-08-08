import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Rating from '../../../components/Rating/Rating';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F2F0FF',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '1px solid #ddd', // גבולות קלות סביב ה-Item
  borderRadius: '20px', // פינות עגולות
  margin: '0 60px', // רווחים בצידי העמוד
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // הוספת הצללה למסגרת
  position: 'relative', // Ensure emoji-description is positioned relative to Item
}));

const Questions: React.FC = () => {
  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      <Stack spacing={2}>
        <Item>
          <Rating question="How enjoyable was your overall experience on our website ?" />
        </Item>
        <Item>
          <Rating question="How accurate were the results or recommendations you received on our website ?" />
        </Item>
        <Item>
          <Rating question="Rate your satisfaction from our website." />
        </Item>
        <Item>
          <Rating question="How do you feel about our service ?" />
        </Item>
        <Item>
          <Rating question="How likely are you to recommend FaceVibe to your friend ?" />
        </Item>
      </Stack>
    </Box>
  );
};

export default Questions;
