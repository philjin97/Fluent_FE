'use client'

import { useEffect, useState } from "react"



export default function QuizletCard({content}){

    const date = content.date
    const words = content.cards
    const [card, setCard] = useState(0);
    const [cardface, setCardface] = useState(0);
    
    


    return (
        <div className="flex flex-col justify-center items-center mt-5">
            {content.date ? <div className="text-2xl font-bold mb-3">{date}</div> : <div className="text-2xl font-bold mb-3">Please Select a Quizlet</div>}
            <div className="flex flex-col justify-center items-center w-[70vw] h-[60vh] rounded overflow-hidden shadow-xl border-2" onClick={()=> cardface == 0 ? setCardface(1) : setCardface(0)}>
                <div className="flex items-center px-6 py-4">
                    {content.cards ? <div className="font-bold text-3xl mb-2 text-center">{words[card][cardface]}</div> : <div></div>}
                </div>
                {content.cards ? <div className="absolute bottom-[20vh]">{card + 1}/{words.length}</div> : <div></div>}
            </div>
            <div className="mt-3 quizlet-card-button">
                <div className="inline text-4xl hover:animate-pulse" onClick={()=> {card == 0 ? setCard(words.length - 1) : setCard(card - 1); setCardface(0)}}>👈</div>
                <div className="inline text-4xl ml-5 hover:animate-pulse" onClick={()=> {card + 1 == words.length ? setCard(0) : setCard(card + 1); setCardface(0)}}>👉</div>
            </div >
         </div>


    )
}


// .vocab[card][cardface]