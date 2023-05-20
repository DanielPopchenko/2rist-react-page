import { useState } from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function StarsRating({ rating, setRating }) {
  // const [rating, setRating] = useState(0);

  return (
    <Rating
      size="small"
      name="simple-controlled"
      value={rating}
      onChange={(event, newValue) => {
        // console.log(event);
        // console.log(newValue);
        setRating(newValue);
      }}
    />
  );
}
