"use client";

import Link from "next/link";
import DiaryModal from "../../components/modaldiary";
import DiaryCard from "../../components/carddiary";
import WriteDiary from "../../components/DiaryBtn/WriteDiary";

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
      <Link href="diary/?show=true">
        <WriteDiary id="write" content={content} />
      </Link>

      <div className="mt-5 px-10 min-h-[100vh]">
        <DiaryCard diarydata={diarydata} />
      </div>

      {show && <DiaryModal />}
    </>
  );
}
