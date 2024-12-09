"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaNewspaper, FaRegNewspaper } from "react-icons/fa6";

export default function ArticlesDisplay() {
  const [articleList, setArticleList] = useState([]);

  async function GetNews() {
    const apiKey = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY;

    const url =
      'https://nba-latest-news.p.rapidapi.com/articles?limit=8';
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": 'nba-latest-news.p.rapidapi.com'
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      
      setArticleList(result);
    } catch (error) {
      console.error(error);
    }
    
  }

  useEffect(() => {
    GetNews();
  }, []);
  
  

  return (
    <div className="bg-secondaryColor text-center w-1/4 p-4 ml-10 rounded-md">
      <h2 className="text-lg underline flex justify-center " > Current News <FaRegNewspaper className="ml-2 mt-1 "/>  </h2>

      {articleList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        articleList.map((article, index) => (
          <Article key={index} articleObj={article} />
        ))
      )}
    </div>
  );
}

function Article({articleObj}) {
  let {
    title,
    url,
    source,
  } = articleObj;
  source =  source.charAt(0).toUpperCase() + source.slice(1);
  source = source.replace(/_/g, " ");
 
  return (
    <div className=" p-2 border-b-2 border-black">
      <h3 >{title}</h3>
      <p className="text-sm">Source: {source}</p>
      <Link href={url} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Continue Reading </Link>
    </div>
  );
}
