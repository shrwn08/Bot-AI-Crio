import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const RatingComponent = ({ ratingValue, setRatingValue }) => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={ratingValue}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
        }}
      />
    </Box>
  );
};



export default RatingComponent;
