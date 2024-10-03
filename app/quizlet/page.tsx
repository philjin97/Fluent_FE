'use client'

import { useState, useRef, createElement, useEffect} from "react"
import Link from "next/link"
import { Button } from "../../@/components/ui/button"

import QuizletCard from "../../components/Quizlet/QuizletCard"
import WriteQuizlet from "../../components/Quizlet/WriteQuizlet"
import SelectQuizlet from "../../components/Quizlet/SelectQuizlet"
import QuizletModal from "../../components/Quizlet/QuizletModal"



type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
  };
  
  //edit button
  const content = {
    select: "Select Quizlet",
    edit: "click Edit",
    write: "Create Quizlet",
    check: "Check Diary"
  };

export default function Quizlet({ searchParams }: SearchParamProps){

    const show = searchParams?.show;
    const [selectQuizlet, setSelectQuizlet] = useState(false)
    const [selectCards, setSelectCards] = useState("")
    const [data, setData] = useState([])
    const [createData, setCreateData] = useState("")
    const [submitClicked, setSubmitClicked] = useState(false)
    const [cardsets, setCardsets] = useState([])

    function showQuizlet(){
        if (!selectQuizlet){
            cards()
            setSelectQuizlet(true)
        }
    }

    const cards = async () => {
        const cardData = await fetch("http://localhost:3001/quizlet")
        const jsonCardData = await cardData.json()
        console.log(jsonCardData)
        setData(jsonCardData)

    }

    function showQuizletCards(e){
        for (const item of data){
            if (item.date == e.target.value){
                const a = document.querySelector('.cardstitle')
                const b = document.querySelector('.cardfront')
                const c= document.querySelector('.cardback')
                a.textContent = item.date
                b.textContent = item.cards[0][0]
                c.textContent = item.cards[0][1]
                console.log(item.date)
            }
        }

    }
    // parameter로 안넣어주면, 처음 button이 render되었을 때의 변수의 값으로 저장이됨 (update 값이 아닌). 따라서 parameter에 넣어주면 됨. useEffect로 버튼이 클릭되면 변수값 업데이트를 시켜서 넣어줌.
    function createQuizletAPI(updated_data){


        console.log(createData)

        fetch("http://localhost:3001/quizlet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
              "date": updated_data,
              "cards": []
            }),
          })
    }

    useEffect(() => {
        if (submitClicked && createData){
            createQuizletAPI(createData)
            setSubmitClicked(false)
        }
    })

    function save(e){
        setCreateData(e.target.value)
        console.log(e.target.value)
    }

    function createQuizlet(){
        const a = document.createElement('textarea')
        const c = document.createElement('input')
        const b = document.querySelector('.inputQuizletData')

        a.classList.add('text-white')
        a.oninput = save
        c.type = "button"
        c.value = "Submit"
        c.onclick = () => setSubmitClicked(true)

        b.appendChild(a)
        b.appendChild(c)
    }

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-[20vw]">
                <Link href="quizlet/?show=true">
                    <WriteQuizlet id="write" content={content} />
                </Link>
                <div className="mt-8">
                    <SelectQuizlet id="select" content={content}/>
                    {cardsets.map((card) => <div key={card.date}>{card.date}</div>)}
                </div>
                
                
            </div>

            <div className="mt-5 px-10 h-[100vh]">
                <QuizletCard />
            </div>

            {show && <QuizletModal />}
        </div>
        )
    }


    {/* </div>
        <div className="flex">
            <div className="flex flex-col">
                <Button className="text-xl" onClick={createQuizlet}>Create Quizlet</Button>
                <div className="inputQuizletData"></div>
                <Button className="text-xl" onClick={showQuizlet}>Select Quizlet</Button>
                {selectQuizlet ? data.map((item) => <Button key={item.date} value={item.date} onClick={showQuizletCards}>{item.date}</Button>) : <h1 className="opacity-0">No Quizlet</h1>}
                
            </div>
            <div className="cards ml-10 text-4xl">
                <div className="cardstitle"></div>
                <div className="cardfront"></div>
                <div className="cardback"></div>
            </div>
        </div> */}
