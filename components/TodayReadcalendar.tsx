"use client";

import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import "react-day-picker/src/style.css";

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
    margin-bottom: 5rem;
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
    font-size: var(--rdp-caption-font-size);
  }

  .rdp-head_cell {
    vertical-align: middle;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 0;
    border-bottom: 2px solid #0a0a76;
  }

  .rdp-weeknumber,
  .rdp-day {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-weight: 500;
    border: 2px solid transparent;
    border-radius: 30%;
    margin: 5px;
  }

  .rdp-day_today:not(.rdp-day_outside) {
    font-weight: 700;
  }

  .mybookedclass {
    background-color: rgb(0, 38, 255);
    color: white;
  }

  /* 반응형 디자인 적용 */
  /* 16인치 맥북 (최소 1400px) */
  @media (min-width: 1400px) {
    .rdp {
      --rdp-cell-size: 100px;
    }

    .rdp-weeknumber,
    .rdp-day {
      --rdp-cell-size: 100px;
    }

    .mybookedclass {
      --rdp-cell-size: 100px;
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
  const classes = dates.map((date) => new Date(date.date));

  return (
    <div>
      <CustomDayPicker
        className=" text-lg "
        defaultMonth={classes[0]} // 첫 번째 날짜를 기본 달로 설정
        modifiers={{
          booked: classes, // 예약된 날짜
        }}
        modifiersClassNames={{
          booked: "mybookedclass", // 예약된 날짜에 커스텀 클래스 적용
        }}
      />
    </div>
  );
}
