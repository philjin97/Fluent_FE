"use client";

import Link from "next/link";
import DiaryModal from "../../components/modaldiary";
import DiaryCard from "../../components/carddiary";
import WriteDiary from "../../components/DiaryBtn/WriteDiary";
import EnterButton from "../../components/EnterButton/EnterButton";

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
      <div className="z-0 relative">
        {/* 상단 프로필 부분 */}
        <div className="sticky top-0 h-[300px] w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#292956] via=[#e6d9ff] to-[#d9e9ff] z-20">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 bg-black rounded-full mb-4 sm:w-20 sm:h-20"></div>
            <h1 className="text-[20rem] font-bold sm:text-xl">Student</h1>
          </div>
        </div>

        <div className=" px-60 z-20 relative bg-white">
          <div className="flex  items-center h-32">
            <Link href="diary/?show=true">
              <EnterButton id="write" content={content} />
            </Link>
          </div>

          <div className="z-10 relative px-60 h-[80vh]  bg-white overflow-y-scroll hide-scrollbar">
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
