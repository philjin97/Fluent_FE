"use client";

import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";

import "./ReadCalenderStyles.css";

const URL = "http://localhost:3001/schedule";

export default function ReadCalendar({ dates }) {
  const classes = dates.map((date) => new Date(date.date));

  return (
    <div>
      <DayPicker
        className=" text-lg "
        style={
          {
            "--rdp-caption-font-size": "30px",
            "--rdp-cell-size": "120px",
            "--rdp-font-size": "2rem",
          } as React.CSSProperties
        }
        defaultMonth={classes[0]}
        modifiers={{
          booked: classes,
        }}
        modifiersClassNames={{
          booked: " mybookedclass",
          // booked:
          //   "w-16 h-16 flex items-center justify-center bg-blue-800 text-white",
        }}
      />
    </div>
  );
}
