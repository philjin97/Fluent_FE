"use client";

import Link from "next/link";
import Record from "../components/record";
import ReadCalendar from "../components/readcalendar";
import TodayReadCalender from "../components/TodayReadcalendar";
import { useEffect, useState } from "react";
import { Button } from "../@/components/ui/button";

import Quizlet from "../components/Button/Quizlet/Quizlet";
import Diary from "../components/Button/Diary/Diary";
import Youtube from "../components/Button/Youtube/YouTube";
import AiBtn from "../components/Button/AI/AI";

import EditSchedule from "../components/EditSchedule/EditSchedule";
import Today from "../components/Today/Today";
import DiaryBtn from "../components/DiaryBtn/DiaryBtn";
import Lesson from "../components/Lesson/Lesson";
import Video from "../components/Video/Video";
import AI from "../components/AIButton/AI";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Input } from "../@/components/ui/input"; 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../@/components/ui/card"


export default function Page() {
  const URL = "http://localhost:3001/schedule";
  const [classes, setClasses] = useState([]);
  const searchparams = useSearchParams()
  const [username, setUsername] = useState('')
  const user = searchparams.get('user')
  const student = searchparams.get('student')
  const router = useRouter()

  const content = {
    schedule: "Edit Schedule",
  };

  useEffect(() => {
    fetch(URL, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data); // Set the fetched data to state
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();  // Prevent Enter key default action
    }
  }

  function userLogin(){
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((data) => {
        for (const u in data){
          if (data[u].name == username){
            console.log("success")
            router.push(`/?user=${data[u].name}&student=${data[u].student}`)
            return
          }
        } 
        router.push('/')
      })
    
  }

  return (
    user ? ( student == "true" ? (

      <div className="flex flex-col justify-center ">
        <div className="flex justify-around   m-2 gap-20 ">
          <div className=" border-2 border-slate-500 rounded-3xl p-5">
            <TodayReadCalender dates={classes} />
            <div className="">
              <Link href="/schedule">
                <EditSchedule id="schedule" content={content} />
              </Link>
            </div>
          </div>

          <div className="w-screen flex-col ">
            <Today />

            <div className="grid grid-cols-3 gap-10 mt-10">
              <div className="flex justify-start">
                <Link href="/quizlet">
                  <Quizlet />
                </Link>
              </div>
              <div className="flex justify-center">
                <Link href="/Ai">
                  <AiBtn />
                </Link>
              </div>
              <div className="flex justify-end">
                <Link href="/diary">
                  <Diary />
                  {/* <DiaryBtn /> */}
                </Link>
              </div>
              {/* <div className="flex justify-start col-span-3">
                <Youtube />
              </div> */}
            </div>

          </div>
        </div>

      {/* <Record /> */}
    </div>
    
    ) : (
      <div className="flex flex-col justify-center ">
        <div className="flex justify-around   m-2 gap-20 ">
          <div className=" border-2 border-slate-500 rounded-3xl p-5">
            <TodayReadCalender dates={classes} />
            <div className="">
              <Link href="/schedule">
                <EditSchedule id="schedule" content={content} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
      
    ) : (

      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <Card className="w-[15vw]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter Student ID</CardDescription>
          </CardHeader>
          <CardContent>
            
              <div className="grid items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
              </div>
            
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full" onClick={userLogin}>Log in</Button>
          </CardFooter>
        </Card>
      </div>

    ))}

