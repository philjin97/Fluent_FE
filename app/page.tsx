"use client";

import Link from "next/link";
import Record from "../components/record";
import ReadCalendar from "../components/readcalendar";
import { useEffect, useState } from "react";
import { Button } from "../@/components/ui/button";

import Quizlet from "../components/Button/Quizlet/Quizlet";
import Diary from "../components/Button/Diary/Diary";
import Youtube from "../components/Button/Youtube/YouTube";
import AiBtn from "../components/Button/AI/AI";

import EditSchedule from "../components/EditSchedule/EditSchedule";
import Today from "../components/Today/Today";
import DiaryBtn from "../components/DiaryBtn/DiaryBtn";
import Lesson from "../components/Lesson/Lesson";
import Video from "../components/Video/Video";
import AI from "../components/AIButton/AI";

export default function Page() {
  const URL = "http://localhost:3001/schedule";
  const [classes, setClasses] = useState([]);

  const content = {
    schedule: "Edit Schedule",
  };

  useEffect(() => {
    fetch(URL, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data); // Set the fetched data to state
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-around px-12  mb-2">
        <div className=" border-2 border-slate-500 rounded-3xl p-5">
          <ReadCalendar dates={classes} />
          <div className="mt-10 pl-5">
            <Link href="/schedule">
              <EditSchedule id="schedule" content={content} />
            </Link>
          </div>
        </div>
        <div className="w-[1000px] flex-col ">
          <Today />

          <div className="grid grid-cols-3 gap-10 mt-10">
            <div className="flex justify-start">
              <Link href="/quizlet">
                <Quizlet />
              </Link>
            </div>
            <div className="flex justify-center">
              <Link href="/Ai">
                <AiBtn />
              </Link>
            </div>
            <div className="flex justify-end">
              <Link href="/diary">
                <Diary />
              </Link>
            </div>
            <div className="flex justify-start col-span-3">
              <Youtube />
            </div>
          </div>
        </div>
      </div>

      {/* <Record /> */}
    </div>
  );
}
