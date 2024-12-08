"use client";

import { useEffect, useState } from "react";
import { FaChartLine } from "react-icons/fa6";

export default function PerformersDisplay({ seasonYear }) {
  const [performers, setPerformers] = useState([]);
  async function getPerformers() {
    const apiKey = process.env.NEXT_PUBLIC_SPORTRADAR_KEY;

  

    const url = `https://api.sportradar.com/nba/trial/v8/en/seasons/${seasonYear}/REG/leaders.json?api_key=${apiKey}`;
    const options = {
      method: "GET",
      headers: {
       accept: 'application/json'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      setPerformers(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPerformers();
  }, []);
  return (
    <div className="bg-secondaryColor text-center basis-1/2  p-4  ml-10 rounded-md ">
      <h2 className="text-lg underline flex  justify-center  ">
        Top performers <FaChartLine className="ml-2 mt-1 " />{" "}
      </h2>
    </div>
  );
}
