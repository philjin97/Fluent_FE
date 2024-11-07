import Link from "next/link";
import "./styles.css";

export default function DiaryBtn() {
  return (
    <Link href="/fluent">
      <div
        tabIndex={0}
        className="w-[250px] h-[180px] lg:w-[300px] lg:h-[286px] 3xl:w-[450px] 3xl:h-[286px] rounded-[20px]"
        // style={{ boxShadow: "0 9px 30px -5px rgba(78, 78, 78, 0.25)" }}
      >
        {" "}
        <section>
          <div className="container">
            <div className="card">
              <div className="card-inner" {{ "--clr": "#fff" } as React.CSSProperties}>
                <div className="box">
                  <div className="imgBox">
                    <img
                      src="https://img.freepik.com/premium-vector/music-video-edits-cuts-footage-and-marketing-on-computer-monitor-motion-vlog-movie-cartoon-minimal-style-on-pink-background-3d-vector-illustration_145666-1641.jpg"
                      alt="Video"
                    />
                  </div>
                  <div className="icon">
                    <a href="#" className="iconBox">
                      <span className="material-symbols-outlined">go</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li style={{ "--clr-tag": "#fcc8e9" } as React.CSSProperties} className="branding">
                    Video
                  </li>
                  <li
                    style={{ "--clr-tag": "#ff735b", color: "white" } as React.CSSProperties}
                    className="packaging"
                  >
                    Lesson
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Link>
  );
}
