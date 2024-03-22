import React from "react";
import { DiscussionData } from "../data/DiscussionData";

const DiscussionForum = () => {
  return (
    <div>
      {DiscussionData.map((discussion) => (
        <div key={discussion.id} className="p-6  border-2 border-b-4 my-7 ">
          <div className="flex flex-col space-y-4  md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src={discussion.image}
              alt=""
              className="self-center flex-shrink-0 w-18 h-18 border rounded-full md:justify-self-start"
            />
            <div className="flex flex-col ">
              <h4 className="text-lg font-semibold text-center md:text-left ">
                {discussion.name}
                <span className="bg-blue-800 md:mx-10 text-sm p-1 px-2 m-1 rounded-full text-white">
                  Sector {discussion.sector}
                </span>
                <span className="text-blue-800 md:ml-[40%] text-sm">{discussion.timing}</span>
              </h4>
              <p className="md:my-1">{discussion.paragraph}</p>
            </div>
          </div>
          <div className="flex justify-center pt-4 space-x-20 align-center">
            <div className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md text-black hover:text-violet-400"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
              </a>
              <span>{discussion.heart}K</span>
            </div>
            <div className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Dribble"
                className="p-2 rounded-md text-black hover:text-violet-400"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </a>
              <span>{discussion.eye}K</span>
            </div>
            <div className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md text-black hover:text-violet-400"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                  />
                </svg>
              </a>
              <span>{discussion.comment}K</span>
            </div>
            <div className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Email"
                className="p-2 rounded-md text-black hover:text-violet-400"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
              </a>
              <span>Share</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionForum;
