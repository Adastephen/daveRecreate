import React from "react";
import { Card } from "./index.js";

function Cards() {
  const CardList = [
    {
      title: "Cloud Computing",
      text: "We offer Cloud Solutions including the design implementation, management and maintainance of cloud",
      icon1: "icon/cloud.svg",
      action: "FIND OUR MORE",
      icon2: "icon/arrow.svg",
    },
    {
      title: "Cyber Security",
      text: "Protect your business from malware. hackers, viruses and the most commonly security",
      icon1: "icon/security.svg",
      action: "PROTECT YOUR BUSINESS",
      icon2: "icon/arrow.svg",
    },
    {
      title: "Corporate Training",
      text: "We offer a comprehensive range of corporate training packages for all sixes of business",
      icon1: "icon/careers.svg",
      action: "FIND OUT MORE",
      icon2: "icon/arrow.svg",
    },
    {
      title: "IT Consultancy",
      text: "Out IT consulting team will provide you with the highly available technology platform that you need",
      icon1: "icon/contacts.svg",
      action: "SEE ALL CONSULTANCY",
      icon2: "icon/arrow.svg",
    },
  ];
  return (
    <div className="w-full ">
      <div className="w-11/12 m-auto my-5">
        <div className="flex gap-3 justify-between overflow-auto no-scrollbar w-full">
          {CardList.map((list, index) => (
            <Card key={index} {...list} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
