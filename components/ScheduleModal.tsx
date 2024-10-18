import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import EditSchedule from "./EnterButton/EnterButton";

interface ScheduleModalProps {
  selected: Date;
  setSelected: (date: Date) => void;
  time: string;
  setTime: (time: string) => void;
  length: string;
  setLength: (length: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  content: { submit: string; edit: string };
  closeModal: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  selected,
  setSelected,
  time,
  setTime,
  length,
  setLength,
  handleSubmit,
  content,
  closeModal,
}) => {
  return (
    <dialog id="my_modal_3" className="modal bg-slate-400 bg-opacity-50" open>
      <div className=" max-w-[54rem] rounded-[1rem] relative  bg-white pt-[1.5rem] px-[1.5rem]">
        <form method="dialog">
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {/* 모달창 안 내용입니다  */}
        <div className="my-9 w-full flex">
          <div className="flex justify-center">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              modifiersClassNames={{
                booked: " mybookedclass",
              }}
            />
          </div>

          <div className="mt-8 ml-24">
            <p className=" text-lg font-semibold">When is your class?</p>
            <p className="mt-3">{selected.toLocaleDateString()}</p>
            <form
              className=" pt-10 flex flex-col gap-2"
              onSubmit={handleSubmit}
            >
              <fieldset className="mb-5">
                <legend className="mb-3  text-lg font-semibold">
                  What time is your class?
                </legend>
                <div>
                  <label htmlFor="time"></label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    onChange={(e) => setTime(e.target.value)}
                  />
                  {/* <ul>
                            <input type="radio" id="time1" name="time" value="14" onChange={(e) => setTime(e.target.value)}/>
                            <label htmlFor="time1">14:00</label>
                        </ul>
                        <ul>
                            <input type="radio" id="time2" name="time" value="16" onChange={(e) => setTime(e.target.value)}/>
                            <label htmlFor="time2">16:00</label>
                        </ul>
                        <ul>
                            <input type="radio" id="time3" name="time" value="18" onChange={(e) => setTime(e.target.value)}/>
                            <label htmlFor="time3">18:00</label>
                        </ul> */}
                </div>
              </fieldset>

              <fieldset className="mb-5  w-[200px]">
                <legend className="mb-3 text-lg font-semibold">
                  How long is your class?
                </legend>
                <div>
                  <ul>
                    <label
                      htmlFor="length1"
                      className="flex w-[200px] items-center rounded-full   mb-2 cursor-pointer transition-all duration-300 hover:bg-gray-100"
                    >
                      <input
                        type="radio"
                        id="length1"
                        name="length"
                        value="1"
                        className="absolute left-0 top-0 w-1 h-1 opacity-0 z-[-1]"
                        onChange={(e) => setLength(e.target.value)}
                      />
                      <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-blue-700 to-sky-500 relative">
                        <div
                          className={`absolute inset-0 bg-gray-200 rounded-full transition-transform duration-300 ${
                            length === "1" ? "scale-0" : "scale-[1.1]"
                          }`}
                        ></div>
                      </div>
                      <span className="ml-4 uppercase tracking-widest font-extrabold text-gray-500 text-lg transition-colors duration-300">
                        1 hour
                      </span>
                    </label>
                  </ul>

                  <ul className="w-[400px]">
                    <label
                      htmlFor="length1.5"
                      className="flex w-[240px]  items-center rounded-full mb-2 cursor-pointer transition-all duration-300 hover:bg-gray-100"
                    >
                      <input
                        type="radio"
                        id="length1.5"
                        name="length"
                        value="1.5"
                        className="absolute left-0 top-0 w-1 h-1 opacity-0 z-[-1]"
                        onChange={(e) => setLength(e.target.value)}
                      />
                      <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-green-400 to-blue-500 relative">
                        <div
                          className={`absolute inset-0 bg-gray-200 rounded-full transition-transform duration-300 ${
                            length === "1.5" ? "scale-0" : "scale-[1.1]"
                          }`}
                        ></div>
                      </div>
                      <span className="ml-4 uppercase tracking-widest font-extrabold text-gray-500 text-[1rem] transition-colors duration-300">
                        1 hour 30 minutes
                      </span>
                    </label>
                  </ul>

                  <ul>
                    <label
                      htmlFor="length2"
                      className="flex w-[200px]  items-center rounded-full mb-2 cursor-pointer transition-all duration-300 hover:bg-gray-100"
                    >
                      <input
                        type="radio"
                        id="length2"
                        name="length"
                        value="2"
                        className="absolute left-0 top-0 w-1 h-1 opacity-0 z-[-1]"
                        onChange={(e) => setLength(e.target.value)}
                      />
                      <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-green-400 to-teal-300 relative">
                        <div
                          className={`absolute inset-0 bg-gray-200 rounded-full transition-transform duration-300 ${
                            length === "2" ? "scale-0" : "scale-[1.1]"
                          }`}
                        ></div>
                      </div>
                      <span className="ml-4 uppercase tracking-widest font-extrabold text-gray-500 text-lg transition-colors duration-300">
                        2 hours
                      </span>
                    </label>
                  </ul>
                </div>
              </fieldset>

              <button className="relative mr-[7rem] mt-10" type="submit">
                <EditSchedule id="submit" content={content} />
              </button>
            </form>
          </div>
        </div>
        {/* 여기까지 모달창 안 내용 */}
      </div>
    </dialog>
  );
};
