import "./styles.css";

export default function Today() {
  return (
    <div className="wrap  rounded-[30px] max-w-[900px] h-[470px] lg:flex hidden ">
      <div id="slide1" className="video   relative w-screen">
        <legend className="checkbox-group-legend flex justify-center ">
          TO DO LIST
        </legend>
        <p className="flex justify-center text-gray-400 text-base font-sans mb-8">
          {" "}
          여기는 멋있는 문구로 소개란
        </p>
        <fieldset className="checkbox-group flex">
          <div className="checkbox">
            <label className="checkbox-wrapper">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-tile ">
                <span className="checkbox-label">Schedule</span>
              </span>
            </label>
          </div>
          <div className="checkbox">
            <label className="checkbox-wrapper">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-tile ">
                <span className="checkbox-label">Ai</span>
              </span>
            </label>
          </div>
          <div className="checkbox">
            <label className="checkbox-wrapper">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-tile ">
                {/* <span className="checkbox-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <polygon
                      points="72 40 184 40 240 104 128 224 16 104 72 40"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></polygon>
                    <polygon
                      points="177.091 104 128 224 78.909 104 128 40 177.091 104"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></polygon>
                    <line
                      x1="16"
                      y1="104"
                      x2="240"
                      y2="104"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></line>
                  </svg>
                </span> */}
                <span className="checkbox-label">Quizlet</span>
              </span>
            </label>
          </div>

          <div className="checkbox">
            <label className="checkbox-wrapper">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-tile">
                {/* <span className="checkbox-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <circle
                      cx="128"
                      cy="128"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></circle>
                    <rect
                      x="36"
                      y="36"
                      width="184"
                      height="184"
                      rx="48"
                      strokeWidth="12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    ></rect>
                    <circle cx="180" cy="75.99998" r="10"></circle>
                  </svg>
                </span> */}
                <span className="checkbox-label">Diary</span>
              </span>
            </label>
          </div>

          {/* <div className="checkbox">
            <label className="checkbox-wrapper">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-tile">
                <span className="checkbox-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="12"
                    ></circle>
                    <g>
                      <path
                        d="M179.1333,108.32931a112.19069,112.19069,0,0,0-102.3584.04859"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="12"
                      ></path>
                      <path
                        d="M164.29541,136.71457a79.94058,79.94058,0,0,0-72.68359.04736"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="12"
                      ></path>
                      <path
                        d="M149.47217,165.07248a47.97816,47.97816,0,0,0-43.03662.04736"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="12"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span className="checkbox-label">AI</span>
              </span>
            </label>
          </div> */}
          {/* <div className="checkbox">
            <label className="checkbox-wrapper">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-tile">
                <span className="checkbox-icon">
                 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></circle>
                    <path
                      d="M71.0247,205.78953c12.21914-40.066,37.80046-74.74723,72.78529-95.31707a187.75508,187.75508,0,0,0-87.6118-10.402"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></path>
                    <path
                      d="M61.8008,55.01135a191.79763,191.79763,0,0,1,58.82185,83.63941,191.87655,191.87655,0,0,1,69.516-4.79354"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></path>
                    <path
                      d="M195.0324,192.64721A191.80523,191.80523,0,0,0,89.48943,69.357"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></path>
                  </svg>
                </span>
                <span className="checkbox-label">Lesson</span>
              </span>
            </label>
          </div> */}
        </fieldset>
      </div>
    </div>
  );
}
