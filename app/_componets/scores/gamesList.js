"use client";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from "react";
import dayjs from "dayjs";


export default function GamesList() {
  const [date, setDate] = useState(dayjs());

  return (
    <div className="bg-secondaryColor  p-4 rounded-md">
      <div className="  text-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* console.log(newDate.format('MM-DD-YYYY') ) */}
            <DatePicker label='Date' value={date} onChange={(newDate) => setDate(newDate )}/>
        </LocalizationProvider>
      
      </div>
      {/* games list  */}
    </div>
  );
}
