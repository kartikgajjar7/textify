"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Caler from "./Caler";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Stock Market Surge Expected",
    time: "12:00 PM - 2:00 PM",
    description:
      "Analysts predict a significant surge in stock prices due to favorable market conditions and increased investor confidence.",
  },
  {
    id: 2,
    title: "Tech Stocks Rallying",
    time: "12:00 PM - 2:00 PM",
    description:
      "Major tech stocks are experiencing a rally with strong earnings reports and positive outlooks for the sector.",
  },
  {
    id: 3,
    title: "Stock Market Volatility Expected",
    time: "12:00 PM - 2:00 PM",
    description:
      "Experts are warning of potential volatility in the stock market due to global economic uncertainties.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Caler />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
