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
    width: var(--rdp-cell-size);
    height: 100%;
    height: var(--rdp-cell-size);
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
  /* 16인치 맥북 (최소 1400px) */
  @media (min-width: 1400px) {
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

  /* 14인치 맥북 (1200px ~ 1400px) */
  @media (min-width: 1200px) and (max-width: 1399px) {
    .rdp {
      --rdp-cell-size: 100px;
    }
    .rdp-weeknumber,
    .rdp-day {
      --rdp-cell-size: 60px;
    }
    .mybookedclass {
      --rdp-cell-size: 60px;
      font-size: 1.2rem;
    }
  }

  /* 태블릿 (768px ~ 1199px) */
  @media (min-width: 768px) and (max-width: 1199px) {
    .rdp {
      --rdp-cell-size: 80px;
    }
    .rdp-weeknumber,
    .rdp-day {
      --rdp-cell-size: 40px;
    }
    .mybookedclass {
      --rdp-cell-size: 40px;
      font-size: 1.1rem;
    }
  }

  /* 아이폰 및 작은 화면 (최대 767px) */
  @media (max-width: 767px) {
    .rdp {
      --rdp-cell-size: 60px;
    }
    .rdp-weeknumber,
    .rdp-day {
      --rdp-cell-size: 20px;
      font-size: 0.8rem;
    }

    .mybookedclass {
      --rdp-cell-size: 20px;
      font-size: 0.8rem;
    }
  }
`;

const URL = "http://localhost:3001/schedule";

export default function ReadCalendar({ dates }) {
  const classes = dates.map((date) => ({
    date: new Date(date.date),
    time: date.time,
    length: date.length,
  }));

  // 특정 날짜에 수업 정보를 찾는 함수
  const findScheduleForDay = (day) => {
    const dayString = day.toLocaleDateString();
    return classes.find(
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

            return (
              <div style={{ position: "relative" }}>
                <div>{date.getDate()}</div> {/* 날짜 표시 */}
                {scheduleForDay && (
                  <div
                    style={{
                      padding: "0 1rem",
                      marginTop: "0.5rem",
                      fontSize: "0.8rem",
                      color: "black",
                      background: "rgb(213, 232, 255)",
                      borderRadius: "0.5rem",
                      display: "flex", // Flexbox to align items
                      alignItems: "center", // Align vertically
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "blue",
                        borderRadius: "100%",
                        marginRight: "0.5rem",
                      }}
                    ></div>
                    {scheduleForDay.time}분 - {scheduleForDay.length}시간 수업
                  </div>
                )}
              </div>
            );
          },
        }}
      />
    </div>
  );
}
