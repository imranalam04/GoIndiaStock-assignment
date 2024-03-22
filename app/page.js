"use client"
import React, { useState } from "react";
import DiscussionForum from "./components/discussion/DiscussionForum";
import MarketStories from "./components/market/MarketStories";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  const [showDiscussion, setShowDiscussion] = useState(true);

  return (
    <div>
      <Sidebar />
      <div className="text-center grid grid-col-1 md:grid-cols-2 gap-1 ">
        <h1
          className={`text-3xl md:bg-gray-200 bg-slate-800 text-white font-semibold md:text-red-500 col-span-1 md:mx-[-40%] md:ml-[36%] text-center cursor-pointer ${
            showDiscussion ? 'border-b-2 border-red-500' : ''
          }`}
          onClick={() => setShowDiscussion(true)}
        >
          DISCUSSION FORUM
        </h1>
        <h1
          className={`text-3xl md:bg-gray-200 bg-slate-800 text-white md:text-red-500 font-semibold md:ml-[40%] text-center cursor-pointer ${
            !showDiscussion ? 'border-b-2 border-red-500' : ''
          }`}
          onClick={() => setShowDiscussion(false)}
        >
          MARKET STORIES
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-1 ">
        <div className={`md:mx-[-40%] md:ml-[37%] ${showDiscussion ? '' : 'hidden'}`}>
          <DiscussionForum />
        </div>
        <div className={`md:ml-[45%] md:my-5 flex flex-col justify-between ${showDiscussion ? '' : ''}`}>
          <MarketStories />
        </div>
      </div>
    </div>
  );
}
