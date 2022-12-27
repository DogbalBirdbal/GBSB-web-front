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
    const movePage=useNavigate();

    function clickFunc(e){
        e.preventDefault();
        console.log('You Clicked submit');
        movePage('/select/another');
    }

    const placeList = ["서울", "부산", "수원", "제주"]

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

   /*
    return(
        <div className="relative">
        <div className=" h-12 m-10 mx-44 bg-gray-light border border-solid border-gray-main rounded-3xl">
            <form className="flex justify-center items-center"onSubmit={onKeyPress}>
                <div className="w-full top-0 flex justify-between items-center grid grid-cols-2 divide-x divide-black">
                    <input class="m-2 flex placeholder:italic justify-center items-center" placeholder="출발지를 입력해주세요..." type="text" name="Start" value={SelectStart} onChange={onStartChange} onKeyPress={onKeyPress}/>
                    <input class="m-2 flex placeholder:italic justify-center" placeholder="도착지를 입력해주세요..." type="text" name="Final" value={SelectFinal} onChange={onFinalChange} onKeyPress={onKeyPress}/>
                </div>

            </form>
            <button className="static justify-between top-100 right-10 w-full" onClick={clickFunc} >검색</button>           
        </div>
        </div>
        

    );*/
}

export default SearchPlace;