import { useState, useEffect } from "react";
import Announcement from "../organisms/announcement.js";
import RandomModal from "../molecules/RandomModal.js";

import axios from 'axios';

import { Link, useNavigate, useLocation } from "react-router-dom";

function SelectResult() {

    const navigate = useNavigate();
    const location = useLocation();

    const onClickHandler = () => {
        navigate("/select/food", { state: { actList: selectList, hotel: selectHotel } })
    }

    const [firstactList, setFirstActList] = useState("");
    const [lastactList, setLastActList] = useState("");

    const [selectList, setSelectList] = useState("");
    const [selectHotel, setSelectHotel] = useState("");

    const [firstHotel, setFirstHotel] = useState("");
    const [lastHotel, setLastHotel] = useState("");

    const [firstClicked, setFirstClicked] = useState(0);
    const [lastClicked, setLastClicked] = useState(0);

    const place = location.state.place;
    const firstDate = location.state.firstDate;
    const lastDate = location.state.lastDate;
    const theme = location.state.theme;

    const placeInput = place + " " + theme;
    const hotelInput = place + "_" + firstDate + "_" + lastDate; 

    useEffect(() => {

        axios.get(`/api/choicepath/${placeInput}`).then((response) => {
            console.log("Successfully Connected")
            setFirstActList(response.data);
            console.log(response.data);
        }).catch(() => {
            console.log("Error")
        });

        axios.get(`/api/choicepath/${placeInput}`).then((response) => {
            console.log("Successfully Connected")
            setLastActList(response.data);
            console.log(response.data);
        }).catch(() => {
            console.log("Error")
        });

        axios.get(`/api/crawlinghotel/${hotelInput}`).then((response) => {
            console.log("Successfully Connected")
            setFirstHotel(response.data);
        }).catch(() => {
            console.log("Error")
        });

        axios.get(`/api/crawlinghotel/${hotelInput}`).then((response) => {
            console.log("Successfully Connected")
            setLastHotel(response.data);
        }).catch(() => {
            console.log("Error")
        });

    },[]);

    if (firstactList && lastactList) {
        return (
            <div className="w-full px-default">
                <Announcement
                    props="여행 경로를 선택해 주세요" />
                <div>
                    <div>
                        <strong className="flex justify-center items-center">Type A</strong>
                        <div className={(firstClicked === 1 ? "flex justify-center gap-x-5 gap-y-5 my-5 rounded-lg bg-blue-light" : "flex justify-center gap-x-5 gap-y-5 my-5 rounded-lg hover:bg-blue-light duration-200")}
                            onClick={() => {setFirstClicked(1); setLastClicked(0); setSelectList(firstactList); setSelectHotel(firstHotel);}}>
                            {firstactList.map(item => {
                                return (
                                    <div className="flex flex-col gap-2 py-5">
                                        <li className="w-52 h-36 flex justify-center items-center">
                                            <img className="w-52 h-36 border rounded-lg object-cover" src={item.pic_url} alt="default"></img>
                                        </li>
                                        <p className="w-52 text-sm">{item.name}</p>
                                    </div>
                                )}
                            )}
                            <div className="flex flex-col gap-2 py-5">
                                <li className="w-52 h-36 flex justify-center items-center">
                                    <img className="w-52 h-36 border rounded-lg object-cover" src={firstHotel.pic_url} alt="default"></img>
                                </li>
                                <p className="w-52 text-sm">{firstHotel.name}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <strong className="flex justify-center items-center mt-5">Type B</strong>
                        <div className={(lastClicked === 1 ? "flex justify-center gap-x-5 gap-y-5 my-5 rounded-lg bg-blue-light" : "flex justify-center gap-x-5 gap-y-5 my-5 rounded-lg hover:bg-blue-light duration-200")}
                            onClick={() => {setFirstClicked(0); setLastClicked(1); setSelectList(lastactList); setSelectHotel(lastHotel);}}>
                            {lastactList.map(item => {
                                return (
                                    <div className="flex flex-col gap-2 py-5">
                                        <li className="w-52 h-36 flex justify-center items-center">
                                            <img className="w-52 h-36 border rounded-lg object-cover" src={item.pic_url} alt="default"></img>
                                        </li>
                                        <p className="w-52 text-sm">{item.name}</p>
                                    </div>
                                )}
                            )}
                            <div className="flex flex-col gap-2 py-5">
                                <li className="w-52 h-36 flex justify-center items-center">
                                    <img className="w-52 h-36 border rounded-lg object-cover" src={lastHotel.pic_url} alt="default"></img>
                                </li>
                                <p className="w-52 text-sm">{lastHotel.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-150 flex justify-center items-center">
                        <button className="w-24 h-10 border rounded-md flex justify-center items-center" onClick={onClickHandler}>다음</button>
                    </div>
                </div>
            </div>
        );
    } else return null;
}

export default SelectResult;