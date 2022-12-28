import { useState } from 'react';
import Calendar from 'react-calendar';
import './styles/Calendar.css';

function ReactCalendar({props}) {
    // const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(new Date());

    props(date);

    return (
        <div className="w-full bg-gray-light border border-solid border-gray-main mt-0.5vw p-2.5">
            <div>
                <Calendar 
                    onChange={setDate}
                    value={date}
                    formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
                    showDoubleView
                    selectRange={true}
                />
            </div>
        </div>
    )  
}

export default ReactCalendar;