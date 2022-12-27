import SelectPlaceBox from "../atoms/SearchPlace";
import DateSelector from "../molecules/dateSelector.js";
import NumberSelector from "../molecules/numberSelector.js";
import TransSelector from "../molecules/transSelector.js";
import ThemeSelector from "../molecules/themeSelector.js";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SelectorBoard() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        console.log(place);
        console.log(theme);
        console.log(firstDate);
        console.log(lastDate);
        navigate("/select/result", { state: { place : place, firstDate : firstDate, lastDate: lastDate, theme: theme } })
    }

    const [place, setPlace] = useState("");
    const [firstDate, setFirstDate] = useState("");
    const [lastDate, setLastDate] = useState("");
    const [number, setNumber] = useState("");
    const [trans, setTrans] = useState("");
    const [theme, setTheme] = useState("");



    return(
        <div>
            <div className="w-full px-default">
                <div className="flex flex-col gap-y-selector-gap">
                    <div className="flex flex-col gap-y-1vw justify-center">
                        <p>위치</p>
                        <div>
                            <SelectPlaceBox props={setPlace} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1vw justify-center">
                        <p>날짜</p>
                        <div>
                            <DateSelector first={setFirstDate} last={setLastDate} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1vw justify-center">
                        <p>인원</p>
                        <div>
                            <NumberSelector />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1vw justify-center">
                        <p>이동 수단</p>
                        <div>
                            <TransSelector />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1vw justify-center">
                        <p>테마별</p>
                        <div className="flex justify-center">
                            <ThemeSelector props={setTheme} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-150 flex justify-center items-center">
                    <button className="w-24 h-10 border rounded-md flex justify-center items-center" onClick={onClickHandler}>다음</button>
            </div>
        </div>
    );
}

export default SelectorBoard;