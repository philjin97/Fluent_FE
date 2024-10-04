"use client";

import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import "react-day-picker/src/style.css";
import ScheduleTable from "../components/scheduletable";

const CustomDayPicker = styled(DayPicker)`
  .rdp {
    --rdp-caption-font-size: 18px; /* 기본 캡션 폰트 크기 */
    --rdp-accent-color: #0000ff; /* 선택된 날짜 배경 색 */
    --rdp-background-color: #e7edff; /* hover된 요소 배경 색 */
    --rdp-outline: 2px solid var(--rdp-accent-color); /* 포커스된 요소 테두리 */
    --rdp-outline-selected: 3px solid var(--rdp-accent-color); /* 선택된 요소 테두리 */
    --rdp-selected-color: #fff; /* 선택된 날짜 텍스트 색 */
    margin: 1em;
  }

  .rdp-caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    text-align: left;
    margin-bottom: 4rem;
  }

  .rdp-caption_label {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    margin: 0;
    padding: 0 0.25em;
    white-space: nowrap;
    color: currentColor;
    border: 0;
    font-family: inherit;
    font-weight: bold;
    font-size: 3rem;
  }
  .rdp-nav_button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    padding: 0.25em;
    border-radius: 100%;
  }
  .rdp-head_cell {
    vertical-align: baseline;
    font-weight: 700;
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0;
    border-bottom: 2px solid #0a0a76;
  }

  .rdp-cell {
    padding: 0;
    text-align: center;
    border: 2px solid #acacac;
  }

  .rdp-weeknumber,
  .rdp-day {
    display: flex;
    overflow: hidden;
    align-items: start;
    justify-content: center;
    box-sizing: border-box;
    font-weight: 500;
    border: 2px solid transparent;
    border-radius: 0%;
    width: var(--rdp-cell-size);
    height: var(--rdp-cell-size);
  }

  .rdp-day_today:not(.rdp-day_outside) {
    font-weight: 900;
    color: rgb(255, 13, 0);
    border: 2px solid rgb(255, 0, 0);
    font-size: 1.5rem;
  }

  .mybookedclass {
    border: 2px solid rgb(0, 38, 255);
    color: rgb(0, 38, 255);
  }

  /* 반응형 디자인 적용 */
  @media (min-width: 2000px) {
    .rdp {
      --rdp-cell-size: 200px;
    }

    .rdp-weeknumber,
    .rdp-day {
      --rdp-cell-size: 200px;
    }

    .mybookedclass {
      --rdp-cell-size: 200px;
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1600px) and (max-width: 1999px) {
    .rdp {
      --rdp-cell-size: 140px;
    }

    .rdp-weeknumber,
    .rdp-day {
      --rdp-cell-size: 140px;
    }
    .mybookedclass {
      --rdp-cell-size: 140px;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1100px) and (max-width: 1599px) {
    .rdp {
      --rdp-cell-size: 100px;
    }
    .rdp-caption_label {
      z-index: 1;
      padding: 0 0.25em;
      font-family: inherit;
      font-weight: bold;
      font-size: 2.4rem;
    }

    .rdp-weeknumber,
    .rdp-day {
      --rdp-cell-size: 100px;
    }
    .mybookedclass {
      --rdp-cell-size: 100px;
      font-size: 1.1rem;
    }
  }

  @media (max-width: 1099px) {
    .rdp {
      --rdp-cell-size: 80px;
    }
    .rdp-caption_label {
      z-index: 1;
      padding: 0 0.25em;
      font-family: inherit;
      font-weight: bold;
      font-size: 2rem;
    }
    .rdp-weeknumber,
    .rdp-day {
      --rdp-cell-size: 80px;
      font-size: 0.8rem;
    }

    .mybookedclass {
      --rdp-cell-size: 80px;
      font-size: 0.8rem;
    }
  }
`;

const ScheduleDayContent = styled.div`
  position: relative;

  .schedule-info {
    padding: 0 0.5rem;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: black;
    background: rgb(213, 232, 255);
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: blue;
    border-radius: 100%;
    margin-right: 0.5rem;
  }

  /* 반응형 디자인 적용 */

  @media (min-width: 2000px) {
    .schedule-info {
      font-size: 1rem; /* 큰 화면일 때 글자 크기 */
      padding: 0 0.75rem;
    }

    .dot {
      width: 12px;
      height: 12px;
    }
  }

  @media (min-width: 1100px) and (max-width: 1599px) {
    .schedule-info {
      font-size: 0.7rem;
      padding: 0 0.4rem;
    }

    .dot {
      width: 8px;
      height: 8px;
    }
  }
  @media (min-width: 1100px) and (max-width: 1599px) {
    .schedule-info {
      font-size: 0.8rem; /* 작은 화면일 때 글자 크기 */
      padding: 0 0.5rem;
      border-radius: 0.5rem;
    }

    .dot {
      width: 10px;
      height: 10px;
    }
    .time-info {
      display: none;
    }
  }

  @media (max-width: 1099px) {
    .schedule-info {
      width: 5rem;
      font-size: 0.6rem; /* 작은 화면일 때 글자 크기 */
      padding: 0 0.5rem;
      border-radius: 0.4rem;
      background: blue;
    }

    .dot {
      width: 10px;
      height: 10px;
    }
    .time-info {
      display: none;
    }
    .length-info {
      display: none;
    }
  }
`;

export default function ReadCalendar({ dates }) {
  const classes = dates.map((date) => ({
    date: new Date(date.date),
    time: date.time,
    length: date.length,
  }));

  // 특정 날짜에 수업 정보를 찾는 함수
  const findScheduleForDay = (day) => {
    const dayString = day.toLocaleDateString();
    return classes.filter(
      (schedule) => schedule.date.toLocaleDateString() === dayString
    );
  };

  return (
    <div>
      <CustomDayPicker
        className=" text-lg "
        defaultMonth={classes[0]} // 첫 번째 날짜를 기본 달로 설정
        modifiers={{
          booked: classes.map((c) => c.date), // 예약날짜
        }}
        modifiersClassNames={{
          booked: "mybookedclass", // 예약된 날짜에 커스텀 클래스 적용
        }}
        components={{
          DayContent: ({ date }) => {
            const scheduleForDay = findScheduleForDay(date);

            // 시간 순서로 일정 정렬
            const sortedSchedules = scheduleForDay
              ? scheduleForDay.sort((a, b) => {
                  const timeA = parseInt(a.time.replace(":", ""), 10); // HH:MM 형식 가정
                  const timeB = parseInt(b.time.replace(":", ""), 10);
                  return timeA - timeB;
                })
              : [];

            return (
              <ScheduleDayContent>
                <div>{date.getDate()}</div> {/* 날짜 표시 */}
                {scheduleForDay &&
                  scheduleForDay.map((schedule, index) => (
                    <div key={index} className="schedule-info">
                      <div className="dot"></div>
                      <span className="time-info">{schedule.time} -</span>
                      <span className="length-info">
                        {schedule.length}시간 수업
                      </span>
                    </div>
                  ))}
              </ScheduleDayContent>
            );
          },
        }}
      />
    </div>
  );
}
