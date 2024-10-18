"use client";

import EnterButton from "../../components/EnterButton/EnterButton";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { DayPicker } from "react-day-picker";
import ReadCalendar from "../../components/readcalendar";
import "react-day-picker/dist/style.css";
import ScheduleTable from "../../components/scheduletable";
import { ScheduleModal } from "../../components/ScheduleModal";
import { set } from "date-fns";

export default function Page() {
  const [time, setTime] = useState("");
  const [length, setLength] = useState("");
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  //readcalendar
  const URL = "http://localhost:3001/schedule";
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(URL, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  //edit button
  const content = {
    submit: "submit",
    edit: "click Edit",
  };

  // Calendar
  const [selected, setSelected] = useState<Date>(new Date());

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(time, length, selected);
    const date = selected.toLocaleDateString();

    // Because this is a client side (because we use 'use client on top'), so we don't have to add http in the api
    await fetch("http://localhost:3001/schedule", {
      method: "POST", // Method put is to create
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        time,
        length,
      }),
    })
      .then((res) => {
        if (res.ok) {
          // 요청이 성공한 경우
          alert("완료되었습니다!"); // 완료 메시지
          window.location.reload(); // 강제로 페이지 새로고침
        } else {
          console.error("Submit failed");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const URL1 = "http://localhost:3001/schedule?_sort=date";

  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch(URL1, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setSchedules(data);
      });
  });

  const bookedDays = [
    new Date(2024, 8, 10),
    new Date(2024, 8, 14),
    new Date(2024, 8, 21),
  ];

  return (
    <div className="flex bg-gradient-to-b from-[#3f4166] to-[#292956]">
      <div className="flex-col bg-white w-1/8 min-h-screen ">
        <div className="flex m-5 mb-14 justify-center">
          <Link href="/" className="btn btn-ghost  text-xl font-['Playwrite']">
            Fluent
          </Link>
        </div>

        <div className="h-fit" onClick={openModal}>
          <p className="px-5 my-8 text-gray-400 text-sm font-semibold">
            달력관리
          </p>
          <EnterButton id="edit" content={content} />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white  relative w-[95%] h-[95%] rounded-xl p-5 shadow-lg shadow-black">
          <div className="flex justify-center ">
            <ReadCalendar dates={classes} />
          </div>
        </div>
      </div>
      {/* <ScheduleTable /> */}

      {isModalOpen && (
        <ScheduleModal
          selected={selected}
          setSelected={setSelected}
          time={time}
          setTime={setTime}
          length={length}
          setLength={setLength}
          handleSubmit={handleSubmit}
          content={content}
          closeModal={closeModal} // 모달 닫기 함수 전달
        />
      )}

      {/* 여기까지  */}
    </div>
  );
}
