"use client";

import Link from "next/link";
import Record from "../../components/record";
import ReadCalendar from "../../components/readcalendar";
import TodayReadCalender from "../../components/TodayReadcalendar";
import { useEffect, useState } from "react";
import EnterButton from "../../components/EnterButton/EnterButton";
import Today from "../../components/Today/Today";
import Btn from "../../components/Btn/Btn";
import Youtube from "../../components/Button/Youtube/YouTube";

export default function onboard() {
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
        setClasses(data);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#3f4166] to-[#292956]  z-0"></div>

      <div className="relative z-10 flex flex-col justify-center ">
        <div className="flex mb-[10rem] justify-center ">
          <div className="flex-col w-[50rem] h-[31rem] border-[0.1rem] border-slate-500 rounded-[3rem]  bg-white shadow-lg shadow-slate-100/50">
            <div className="flex justify-center">
              {" "}
              <TodayReadCalender dates={classes} />
            </div>

            <Link href="/schedule">
              <EnterButton id="schedule" content={content} />
            </Link>
          </div>
        </div>

        <div className="flex justify-center m-12 ">
          <Today />
        </div>

        {/* 문구 */}
        <div className="flex-col">
          <h1 className="flex justify-center text-3xl font-bold font-sans mt-10 mb-4">
            멋있는 제목
          </h1>
          <p className="flex justify-center text-gray-400 text-base font-sans mb-8">
            {" "}
            여기는 멋있는 문구로 소개란
          </p>
        </div>
        {/* 링크 버튼 */}
        <div className="flex justify-center mb-[10rem]">
          <Link href="/quizlet">
            <Btn id="quizlet" image="images/quizlet.svg" />
          </Link>
          <Link href="/Ai">
            <Btn id="ai" image="images/ai.svg" />
          </Link>
          <Link href="/diary">
            <Btn id="diary" image="images/diary.svg" />
            {/* <Diary /> */}
            {/* <DiaryBtn /> */}
          </Link>
        </div>

        <div className="flex justify-center col-span-3">
          <Youtube />
        </div>
      </div>
    </div>
  );
}
