"use client";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import HomeVAway from "./homevAway";
import PerformersDisplay from "../performers/perfomersList";


export default function GamesList() {
  const [date, setDate] = useState(dayjs());
  const [gameList, setGameList] = useState([])
  // api retuns the perious days games need to move date by 1 to be correct
  let selectedDate = date.add(1,'day');
  async function getGames() {
    console.log(date.format('YYYY-MM-DD'))
    const apiKey = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY;
    const url = `https://api-nba-v1.p.rapidapi.com/games?date=${selectedDate.format('YYYY-MM-DD')}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key':  apiKey,
		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
	}
};

try {
	const request = await fetch(url, options);
	const result = await request.json();
	console.dir(result.response);
  setGameList(result.response)
} catch (error) {
	console.error(error);
}
    
  }

  useEffect(()=>{
    getGames();
  },[date]);

  return (
    <div className="flex flex-row">
      {/* <PerformersDisplay className=" " seasonYear={date.format("YYYY")} /> */}
      <div className="bg-secondaryColor ml-10 p-4   rounded-md">
      
      <div className="  text-center">
      <h2 className="text-2xl  flex justify-center mb-3  underline" >Scores  </h2>
        <LocalizationProvider dateAdapter={AdapterDayjs} className= "">
            {/* console.log(newDate.format('MM-DD-YYYY') ) */}
            <DatePicker label='Date' value={date} onChange={(newDate) => setDate(newDate )}/>
        </LocalizationProvider>
        {gameList.length === 0 ? <p className="mt-4">Sorry there are not game Scheduled for this date please pick a different date.  </p> : gameList.map((game) => <HomeVAway className="" key={game.id} gameObj={game}/>) }
      
      </div>
      {/* games list  */}
    </div>
    </div>
  );
}
