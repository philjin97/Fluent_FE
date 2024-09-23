export default function DiaryCard({ diarydata }) {
  return (
    <div>
      {diarydata.map((diary) => (
        <div key={diary.date} className="  my-3">
          <h1 className=" my-6 ml-16 font-[bw] text-2xl">{diary.date}</h1>
          <h3 className="text-xl ml-28 pb-10 border-b whitespace-pre-wrap">
            {diary.content}
          </h3>
        </div>
      ))}
    </div>
  );
}
