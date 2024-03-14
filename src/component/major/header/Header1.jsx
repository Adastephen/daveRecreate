import React from "react";

function Header1() {
  return (
    <div className="w-full bg-white">
      <div className="w-10/12 m-auto flex justify-between py-3">
        <div>
          {/* the now hiring */}
          <h5 className="text-blue-700 gap-2 flex items-center text-sm font-semibold">

            <div className="">
                Now Hiring:<span className="font-semibold"> IT Support Engineer</span>
            </div>
           
          </h5>
        </div>
        {/* the dominion system logo */}
        <div className="justify-center">
            <img src="../../../src/assets/icon/logoo.jpg" alt="" className="w-36 h-12"/>
        </div>
        {/* toggle */}
        <div>
            <img src="../../../src/assets/icon/bar.svg" alt="" className="w-8 h-8 lg:hidden block" />
        </div>
      </div>
    </div>
  );
}

export default Header1;
