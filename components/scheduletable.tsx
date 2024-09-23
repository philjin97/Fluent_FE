import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../@/components/ui/table";
import { useState, useEffect } from "react";

const URL1 = "http://localhost:3001/schedule?_sort=date";

export default function ScheduleTable() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch(URL1, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setSchedules(data);
      });
  });

  return (
    <Table>
      <TableCaption className="text-2xl mb-5">수업 스케줄</TableCaption>
      <TableHeader>
        <TableRow className="text-lg">
          <TableHead>날짜</TableHead>
          <TableHead>시작시간</TableHead>
          <TableHead>시수</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {schedules.map((schedule) => (
          <TableRow key={schedule.date} className="text-center">
            <TableCell className="w-[33%]">{schedule.date}</TableCell>
            <TableCell className="w-[33%]">{schedule.time}</TableCell>
            <TableCell className="w-[33%]">{schedule.length}시간</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
