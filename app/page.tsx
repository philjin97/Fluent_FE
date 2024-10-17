"use client";

import Link from "next/link";
import Record from "../components/record";
import ReadCalendar from "../components/readcalendar";
import TodayReadCalender from "../components/TodayReadcalendar";
import { useEffect, useState } from "react";
import EnterButton from "../components/EnterButton/EnterButton";
import Today from "../components/Today/Today";
import Btn from "../components/Btn/Btn";

import Youtube from "../components/Button/Youtube/YouTube";

import DiaryBtn from "../components/DiaryBtn/DiaryBtn";
import Lesson from "../components/Lesson/Lesson";
import Video from "../components/Video/Video";
import AI from "../components/AIButton/AI";
import Quizlet from "../components/Button/Quizlet/Quizlet";
import Diary from "../components/Button/Diary/Diary";
import AiBtn from "../components/Button/AI/AI";

export default function Page() {
  const URL = "http://localhost:3001/schedule";
  const [classes, setClasses] = useState([]);

  const content = {
    schedule: "Edit Schedule",
  };

  const detail = {
    main: "Quizlet",
    sub: "quizlet 설명란",
  };

  useEffect(() => {
    fetch(URL, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data); // Set the fetched data to state
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#3f4166] to-[#292956]  z-0"></div>

      <div className="relative z-10 flex justify-center gap-10 ">
        <div className="flex  justify-center mt-20">
          <div className="flex justify-center flex-col  w-[45rem] h-[40rem] border-[0.1rem] rounded-[0.5rem] hover:drop-shadow-xl bg-white shadow-lg shadow-slate-100/50  cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105  hover:border-blue-600">
            <Link href="/schedule">
              <div className="flex justify-center ">
                <TodayReadCalender dates={classes} />
              </div>
            </Link>
          </div>
        </div>

        {/* 문구 */}
        {/* <div className="flex-col">
          <h1 className="flex justify-center text-3xl font-bold font-sans  mb-4">
            멋있는 제목
          </h1>
          <p className="flex justify-center text-gray-400 text-base font-sans mb-8">
            {" "}
            여기는 멋있는 문구로 소개란
          </p>
        </div> */}
        {/* 링크 버튼 */}
        <div className="flex flex-col  h-[40rem] justify-center  items-center mt-20">
          <legend className="relative flex  justify-center w-full h-[20rem] text-xl font-bold font-sans mb-8 bg-white rounded-[0.5rem] border-[0.1rem] border-slate-400 ">
            TO DO LIST
          </legend>

          <div className="flex gap-5">
            <Link href="/quizlet">
              <Btn id="quizlet" image="images/quizlet.svg" />
            </Link>
            <Link href="/diary">
              <Btn id="diary" image="images/diary.svg" />
              {/* <Diary /> */}
              {/* <DiaryBtn /> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
