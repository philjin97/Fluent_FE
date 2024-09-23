"use client"

import { useEffect, useState } from "react";

const URL = "http://localhost:3001/test"

export default function Record() {
    const [tests, setTests] = useState([])

    useEffect(() => {
        fetch(URL, {cache: 'no-store'})
        .then((res) => res.json())
        .then((data) => {
            setTests(data)
        })
    })

    return (
        <div>
            {JSON.stringify(tests)}
        </div>
    )
}