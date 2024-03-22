import React from "react";
import { MarketingData } from "../data/MarketData";

const MarketStories = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
    {MarketingData.map((market) => (
      <div key={market.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow black:bg-gray-800 black:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={market.image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight black:text-white">
            {market.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 black:text-gray-400">
            {market.para}
          </p>

        </div>
      </div>
    ))}
    </div>
    
  );
};

export default MarketStories;
