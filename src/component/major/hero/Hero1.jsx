import React from "react";
import { Cards } from '../../minor/index.js'

function Hero1() {
  return (
    <div className="w-full bg-white">
        {/* div that carries the bacground colour */}
      <div className="bg-gray-100 w-11/12 m-auto">
        {/* div that contails all the content */}
        <div className="flex justify-between gap-8 py-10">
          {/* div af the first side of the second hero  */}
          <div className="flex flex-col w-1/2 justify-start gap-7">
            <h2 className="text-i ndigo-700 font-bold text-3xl">
              DOMINION SYSTEMS RESOLVES 3 KEY PROBLEMS FOR BUSINESSES
            </h2>
            <p className="text-indigo-700">
              We have always knoen that for businesses large and small, IT can
              be a ral challenge to manage. Staying on the topof yout technology
              includes controlling the costs associated with keeping in-house
              staff up-topdate with training certifications and current trends.
            </p>
            <button className="border w-fit rounded-xl bg-orange-300 p-3">
              DISCOVER OUR SERVICES
            </button>
          </div>
          {/* the first list on the second hero */}
          <div className="w-1/2 justify-end flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="text-4xl font-bold text-indigo-700 border items-center pt-4">
                <h1 className="">1</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-indigo-700 text-lg">
                  Poor IT Performanance & Services Delivery
                </h2>
                <p className="text-indigo-700 text-sm">
                  Poorly performance IT partners ans IT Service reduce
                  productivity and risk the integrity of your business
                </p>
              </div>
            </div>

            {/* the second the list services */}
            <div className="flex gap-5">
              <div className="text-4xl font-bold text-indigo-700 border items-center pt-4">
                <h1 className="">2</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-indigo-700 text-lg">
                  Controlling IT Costs
                </h2>
                <p className="text-indigo-700 text-sm">
                  IT Services are one of the largest sunken or ongoing costs in
                  any business therefore important to manage
                </p>
              </div>
            </div>
            {/* the third services  */}
            <div className="flex gap-5">
              <div className="text-4xl font-bold text-indigo-700 border items-center pt-4">
                <h1 className="">3</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-indigo-700 text-lg">
                  Distraction from Business Priorities
                </h2>
                <p className="text-indigo-700 text-sm">
                  Our typical customer does not want to be distracted by IT
                  Services that do not add direct value to their customers
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="stroke-black "></hr>
        <p className="flex justify-center text-sm text-indigo-700">Custom IT services and solutions built specifically for your business</p>
        <Cards/>
      </div>
      <p x
      className="flex justify-center m-9 bg-yellow-400 font-bold ">Copyright by stephen</p>
    </div>
  );
}

export default Hero1;
