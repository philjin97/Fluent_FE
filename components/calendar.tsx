import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";
import { useState } from "react";
import "react-day-picker/src/style.css"

export default function MyDatePicker() {
    const [selected, setSelected] = useState<Date>(new Date());
    console.log(Date())
    return (
        <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={
            selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
        }
        />
    );
}