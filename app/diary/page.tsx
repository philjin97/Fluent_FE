"use client";

import Link from "next/link";
import DiaryModal from "../../components/modaldiary";
import DiaryCard from "../../components/carddiary";
import EditSchedule from "../../components/EditSchedule/EditSchedule";

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
      <button
        className="absolute left-10 top-28"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <EditSchedule id="write" content={content} />
      </button>

      <dialog id="my_modal_3" className=" modal">
        <div className=" max-w-[45rem] rounded-[1rem] relative  bg-white pt-[1.5rem] px-[1.5rem]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>

      {/* <Link href="diary/?show=true">
        <EditSchedule id="write" content={content} />
      </Link> */}

      <div className="mt-5 px-10 max-h-[700px] overflow-y-auto">
        <DiaryCard diarydata={diarydata} />
      </div>
      {/* 
      {show && <DiaryModal />} */}
    </>
  );
}
