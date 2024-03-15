import React from "react";

function Header1() {
  return (
    <div className="w-full bg-white">
      <div className="w-11/12 m-auto flex justify-between py-3">
        <div>
          {/* the now hiring */}
          <h5 className="text-indigo-950 flex text-sm font-semibold">

            <div className="w-1/3 flex justify-start whitespace-nowrap">
                Now Hiring:<span className="font-semibold"> IT Support Engineer</span>
            </div>
           
          </h5>
        </div>
        {/* the dominion system logo */}
        <div className="w-1/3">
            <img src="../../..//icon/logoo.jpg" alt="" className="w-36 h-12"/>
        </div>
        {/* toggle */}
        <div className="">
            <img src="/icon/bar.svg" alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default Header1;
