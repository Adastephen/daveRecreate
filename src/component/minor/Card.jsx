import React from "react";

// custom card
function Card({ title, text, action, icon1, icon2 }) {
  return (
    // the cards
    <div className="bg-indigo-950 flex justify-between  min-w-52 max-w-72 min-h-72 rounded-3xl py-5 ">
      <div className="flex flex-col justify-center items-center m-3 w-full gap-3 ">
        <h3 className="text-white font-semibold h-1/3 ">{title}</h3>
        <p className="text-indigo-400 text-xs h-1/3 flex justify-center px-3">{text}</p>
        <img
          src={icon1}
          alt="icon logo"
          className="w-14 h-1/3 mt-3"
        />
        <div className="text-orange-400 flex text-xs whitespace-nowrap gap-1 w-fit px-4 pt-0s">
          <p className="">{action}</p>
          <img
            src={icon2}
            alt="arrowlosgo"
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
