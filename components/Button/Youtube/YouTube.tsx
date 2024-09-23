import Link from "next/link";
import Image from "next/image";
import Lesson from "../../Video/Video";

import "./YoutubeStyles.css";
export default function Video() {
  return (
    <button className="videobutton font-[bw] ">
      <Lesson />
      <div className="star-1">
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
      </div>
      {/* <div className="star-5">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 784.11 815.53"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                className="fil0"
              ></path>
            </svg>
          </div>
          */}
    </button>
  );
}
