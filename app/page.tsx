"use client";

import Link from "next/link";
import TodayReadCalender from "../components/TodayReadcalendar";
import { useEffect, useState } from "react";
import Today from "../components/Today/Today";
import Btn from "../components/Btn/Btn";
import EnterButton from "../components/EnterButton/EnterButton";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Input } from "../@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../@/components/ui/card";
import { Button } from "../@/components/ui/button";

export default function Page() {
  const URL = "http://localhost:3001/schedule";
  const [classes, setClasses] = useState([]);
  const searchparams = useSearchParams();
  const [username, setUsername] = useState("");
  const user = searchparams.get("user");
  const student = searchparams.get("student");
  const router = useRouter();

  const content = {
    schedule: "Edit Schedule",
  };

  const detail = {
    main: "Quizlet",
    sub: "quizlet 설명란",
  };

  useEffect(() => {
    fetch(URL, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data); // Set the fetched data to state
      });
  }, []); // Empty dependency array means this effect runs once after the initial render


  function userLogin() {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((data) => {
        for (const u in data) {
          if (data[u].name == username) {
            console.log("success");
            router.push(`/?user=${data[u].name}&student=${data[u].student}`);
            return;
          }
        }
        router.push("/");
      });
  }

  return user ? (
    student == "true" ? (
      <div className="relative ">
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#3f4166] to-[#292956]  z-0"></div>

        <div className="relative z-10 flex justify-center gap-10 ">
          <div className="flex  justify-center mt-20">
            <div className="flex justify-center flex-col  w-[45rem] h-[40rem] border-[0.1rem] rounded-[0.5rem] hover:drop-shadow-xl bg-white shadow-lg shadow-slate-100/50  cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105  hover:border-blue-600">
              <Link href="/schedule">
                <div className="flex justify-center ">
                  <TodayReadCalender dates={classes} />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col  h-[40rem] justify-center  items-center mt-20">
            <legend className="relative flex  justify-center w-full h-[20rem] text-xl font-bold font-sans mb-8 bg-white rounded-[0.5rem] border-[0.1rem] border-slate-400 ">
              TO DO LIST
            </legend>

            <div className="flex gap-5">
              <Link href="/quizlet">
                <Btn id="quizlet" image="images/quizlet.svg" />
              </Link>
              <Link href="/diary">
                <Btn id="diary" image="images/diary.svg" />
                {/* <Diary /> */}
                {/* <DiaryBtn /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col justify-center ">
        <div className="flex justify-around   m-2 gap-20 ">
          <div className=" border-2 border-slate-500 rounded-3xl p-5">
            <TodayReadCalender dates={classes} />
            <div className="">
              <Link href="/schedule">
                <EnterButton id="schedule" content={content} />
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
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full" onClick={userLogin}>
            Log in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
