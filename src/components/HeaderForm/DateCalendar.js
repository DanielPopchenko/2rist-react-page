import React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateCalendar({ date, setDate }) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Choose date" value={date} onChange={setDate} slotProps={{ textField: { size: 'small' } }} />
      </LocalizationProvider>
    </div>
  );
}
