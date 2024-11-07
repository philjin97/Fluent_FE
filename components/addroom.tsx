"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../@/components/ui/card"
import { Input } from "../@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../@/components/ui/select"
import { Button } from "../@/components/ui/button"
import { Label } from "../@/components/ui/label"

export default function addRoom() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [roomList, setRoomList] = useState()
  const [room, setRoom] = useState("")
  const [duration, setDuration] = useState("1")
  const [teacherName, setTeacherName] = useState("")
  const [studentName, setStudentName] = useState("")




  // Click on Search Available Rooms button to initiate this function. 
  // This function sends date and time data to API and receives a list of rooms. 
  async function searchRooms(){
    const all_rooms = await fetch(
      `http://43.201.252.152/schedules/search_rooms/${date}/${time}/`
    )
    const json_all_rooms = await all_rooms.json()

    console.log(json_all_rooms)

    setRoomList(json_all_rooms)

  }

  function selectRoom(e){
    console.log(e.target.id)
    setRoom(e.target.id)
  }

  async function saveClass(){
    const response = await fetch(
      `http://43.201.252.152/schedules/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
          room_name: room,
          date: date,
          time: time,
          duration: duration,
          teacher_name: teacherName,
          student_name: studentName,
        }),
      }
    )

    if (response.status == 200){
      const currentSchedule = await fetch(
        `http://43.201.252.152/schedules/oneday_oneteacher/${date}/${teacherName}`)
      const data_currentSchedule = await currentSchedule.json()
      console.log(data_currentSchedule)
      
      const allDivs = document.querySelectorAll(".scheduleTable")
      for (const div of Array.from(allDivs)) {
        div.innerHTML = '';
      }

      for (const each of data_currentSchedule){
        
        console.log(each)
        const titleDiv = document.getElementById("title")
        const selectedDiv = document.getElementById(`${parseInt(each.time)}`)
        titleDiv.innerHTML = `${teacherName}'s Schedule for ${date}`
        selectedDiv.innerHTML = `${each.student_name} ${each.time_range}`
      }
      
    }
  }

  return (
    <div className="flex flex-row">
      <div className="border-2 border-slate-500 rounded-3xl p-5">
        <Card className="w-[350px] border-none">
          <CardHeader>
            <CardTitle>Add Class</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="number"
                placeholder="Enter time (24-hour format)"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            {roomList ? (
              <>
                <Button onClick={searchRooms} className="w-full">Search Available Rooms</Button>
                <div className="flex justify-center">
                  {roomList.map((room_name, index) => (
                    <div key={index} id={room_name} onClick={selectRoom} className="px-1 mx-3 bg-blue-500">{room_name}</div>
                  ))}
                </div>
                <div>
                  <div className="text-sm">Room</div>
                  <h5>{room}</h5>
                </div>
              </>
            ) : (
              <Button onClick={searchRooms} className="w-full">Search Available Rooms</Button>
            )}

            {room != "" ? (
            <>
              <div className="space-y-2 mb-3">
                <Label htmlFor="duration">Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="2">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacher-name">Teacher Name</Label>
                <Input
                  id="teacher-name"
                  placeholder="Enter teacher's name"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student-name">Student Name</Label>
                <Input
                  id="student-name"
                  placeholder="Enter student's name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>
            </>
            ) : (
            <></>
            )}


          </CardContent>
    
          <CardFooter className="flex flex-col items-stretch">
            <Button onClick={saveClass} className="w-full">Add Class</Button>
          </CardFooter> 
        </Card>
      </div>
      
      <div className=" border-2 border-slate-500 rounded-3xl p-5 w-[350px] flex flex-col ">
        <div id="title" className="text-xl font-bold"></div>
        <div id="12" className="border border-2 border-black w-[full] h-[10%] text-center font-bold scheduleTable"></div>
        <div id="13" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="14" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="15" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="16" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="17" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="18" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="19" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="20" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="21" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="22" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
        <div id="23" className="border border-2 border-black h-[10%] text-center font-bold scheduleTable"></div>
      </div>
    </div>
  )
}
