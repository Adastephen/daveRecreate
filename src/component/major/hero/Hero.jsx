import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-[url('../../../src/assets/icon/bgLogo.jpg')] h-5/6 bg-cover">
        <div className="w-11/12 flex m-auto border-yellow-400 border ">
          <div className="text-white border flex flex-end ">
            <div className="">
              <h3 className="text-4xl">WE ARE DOMINION SYSTEMS</h3>
              <span className="text-6xl">SECURITY</span>
              <hr className="w-32 my-5 "></hr>
              <h4 className="text-2xl">
                We help great companies simplify and take control of their IT
              </h4>
              <p className="underline decoration-semibold py-5">Get a free consultation</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
