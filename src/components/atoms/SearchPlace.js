import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function SearchPlace({props}){

    const [open, setOpen] = useState(0);
    const [click, setClick] = useState(null);
    const [place, setPlace] = useState("어디로 가세요?");

    const toggleHandler = () => {
        setOpen(open => !open);
    }

    const placeList = ["대구", "부산", "수원", "제주"]

    return(
        <div>
            <div className="w-full h-12 bg-gray-light border border-solid border-gray-main flex items-center justify-between px-0.8vw">
                <div className="flex gap-x-5 items-center">
                    <SearchIcon className="scale-125" />
                    <p>{place}</p>
                </div>
                {open ? <ExpandLessIcon className="scale-125" onClick={toggleHandler} /> : <ExpandMoreIcon className="scale-125" onClick={toggleHandler} />}
            </div>
            {open ? (
                <div>
                    <div className="w-full bg-gray-light border-t border-x border-solid border-gray-main mt-0.5vw">
                        {placeList.map((item, idx) => {
                                return (
                                    <div
                                        className={(idx === click ? "w-full h-12 border-b border-solid border-gray-main flex items-center px-0.8vw bg-blue-main text-white" : "w-full h-12 border-b border-solid border-gray-main flex items-center px-0.8vw hover:bg-blue-light duration-200")}    
                                        onClick={() => {setPlace(item); props(item); setClick(idx);}}>{item}</div>
                                )}
                            )}
                    </div>
                </div>
            ) : ""}
        </div>
    );
}

export default SearchPlace;