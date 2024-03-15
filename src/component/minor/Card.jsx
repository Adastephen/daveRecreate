import React from "react";

// custom card
function Card({ title, text, action, icon1, icon2 }) {
  return (
    // the cards
    <div className="bg-indigo-950 flex justify-between">
      <div className="flex flex-col justify-center items-center m-3 w-full gap-3 ">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-indigo-400 text-xs">{text}</p>
        <img
          src="../../../src/assets/icon/contactus.svg"
          alt="icon logo"
          className="w-14 h-14"
        />
        <div className="text-green-400 flex text-xs whitespace-nowrap gap-1">
          <p>{action}</p>
          <img
            src="../../../src/assets/icon/contactus.svg"
            alt="arrowlosgo"
            className="w-5 h-5 te"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
