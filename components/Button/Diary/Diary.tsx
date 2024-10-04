import Link from "next/link";
import Image from "next/image";

import "./DiaryStyles.css";
export default function DiaryBtn() {
  return (
    <button className="Diarybutton ">
      <div className="text-gray-300  font-[bw] text-[2rem] ">Diary</div>
      {/* <div className="star-1">
        <Image src="/icon.png" alt="" width={100} height={100} />
      </div>
      <div className="star-2">
        <Image src={"/images/date.png"} alt="" width={100} height={100} />
      </div>
      <div className="star-3">
        <Image src="/icon.png" alt="" width={100} height={100} />
      </div>
      <div className="star-4">
        <Image src="/icon.png" alt="" width={100} height={100} />
      </div>{" "}
      <div className="star-6">
        <Image src="/icon.png" alt="" width={100} height={100} />
      </div> */}
    </button>
  );
}
