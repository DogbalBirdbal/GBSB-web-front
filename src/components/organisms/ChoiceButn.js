import {Link} from "react-router-dom"
import { useState } from "react";
import "./ChoiceButn.css";
function ChoiceButn(){
    let data = ["Day1", "Day2", "Day3"];
    let [btnActive, setBtnActive] = useState(false);

    const toggleActive= (e) => {
        setBtnActive((prev)=>{
            return !prev;
        });
    };
    return(
        <div className="flex">
            <div className="w-btn-outline">
                {data.map((item, idx)=>{
                    return(
                        <>
                        <button className={"btn"+(btnActive ? " active" : "")}
                            onClick={toggleActive}
                        >
                            {item}
                        </button>
                        </>
                    )
                })}
            </div>
        
        </div>
    )   
}
export default ChoiceButn;