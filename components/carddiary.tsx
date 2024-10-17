export default function DiaryCard({ diarydata }) {
  return (
    <div>
      {diarydata.map((diary) => {
        const date = new Date(diary.date);
        const year = parseInt(
          date.toLocaleDateString("ko-KR", { year: "numeric" })
        );
        const month = parseInt(
          date.toLocaleDateString("ko-KR", { month: "2-digit" }),
          10
        );
        const day = parseInt(
          date.toLocaleDateString("ko-KR", { day: "2-digit" }),
          10
        );
        const weekday = date
          .toLocaleDateString("en-US", { weekday: "long" })
          .toUpperCase();

        return (
          <div
            key={diary.date}
            className="justify-start z-30  my-3  flex border-b-[0.1rem] "
          >
            <div className="flex ">
              <div className="flex flex-col justify-start m-6 font-[bw] text-[#3f4166] ">
                <div className="flex flex-col font-bold justify-center text-center text-white bg-[#3f4166] rounded-[100%] w-20 h-20 border-[#3f4166]  border-[0.2rem]">
                  <h2 className="text-lg">{year}</h2>
                  <h1 className="text-2xl ">{month}</h1>
                </div>
              </div>

              <div className="flex flex-col justify-end  my-12  text-[#3f4166] ">
                <h1 className="flex text-xl px-5 font-bold justify-start">
                  {day} . {weekday}
                </h1>
                <h3 className="text-lg bg-white   p-5  rounded-[0%]  whitespace-pre-wrap">
                  {diary.content}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
