"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import DiaryBg from "../../public/images/diarymain.svg";
import DiaryModal from "../../components/modaldiary";
import DiaryCard from "../../components/carddiary";
import WriteDiary from "../../components/DiaryBtn/WriteDiary";
import EnterButton from "../../components/EnterButton/EnterButton";
import Navigation from "../../components/DiaryNavigation";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

//edit button
const content = {
  submit: "submit",
  edit: "click Edit",
  write: "Write Diary",
};

export default async function Diary({ searchParams }: SearchParamProps) {
  const variants: {} = {
    hidden: {
      opacity: 0.2,
      y: 15,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  const show = searchParams?.show;
  let diarydata = [];

  const URL = "http://localhost:3001/diary";
  await fetch(URL, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => {
      diarydata = data;
      console.log(diarydata[0]);
    });

  return (
    <>
      <div className="relative">
        <div className="flex justify-center">
          {" "}
          <Navigation />
        </div>

        <div className="h-[100vh] w-[100vw] overflow-hidden relative flex justify-center items-center">
          <Image
            src={DiaryBg}
            alt="diarymain"
            layout="fill" // 부모 요소를 꽉 채우기 위해 layout="fill" 사용
            objectFit="cover" // 이미지가 부모 요소의 크기에 맞게 조정
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <span className="text-white text-3xl">Write, your Diary.</span>
            <span className="animate-blink text-white text-4xl">|</span>
          </div>

          {/* 아래 가운데 배치된 SCROLL DOWN 텍스트 */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variants}
              className="text-white text-[3rem]"
            >
              ↓
            </motion.span>
          </div>
        </div>

        <div className=" px-60  relative ">
          <div className=" relative px-60 h-[80vh] hide-scrollbar">
            <DiaryCard
              diarydata={diarydata.sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )}
            />
          </div>
        </div>

        {/* 모달 창 */}
        {show && (
          <div className="z-30 relative">
            <DiaryModal />
          </div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
