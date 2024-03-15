import React from "react";

// custom card
function Card({ title, text, action, icon1, icon2 }) {
  return (
    // the cards
    <div className="bg-indigo-950 flex justify-between  w-full rounded-3xl py-5 shadow-md ">
      <div className="flex flex-col justify-center items-center m-3 w-full gap-3 ">
        <h3 className="text-white font-semibold h-1/3 ">{title}</h3>
        <p className="text-indigo-400 text-xs h-1/3 flex justify-center">{text}</p>
        <img
          src={icon1}
          alt="icon logo"
          className="w-14 h-1/3"
        />
        <div className="text-orange-400 flex text-xs whitespace-nowrap gap-1 w-fit px-4">
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
