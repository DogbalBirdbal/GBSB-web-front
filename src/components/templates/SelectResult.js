import { useState, useEffect } from "react";
import Announcement from "../organisms/announcement.js";
import RandomModal from "../molecules/RandomModal.js";

import axios from 'axios';

import { Link, useNavigate, useLocation } from "react-router-dom";

function SelectResult() {

    const navigate = useNavigate();
    const location = useLocation();

    const onClickHandler = () => {
        navigate("/select/food", { state: { actList: selectList, hotel: hotel } })
    }

    const [firstactList, setFirstActList] = useState("");
    const [lastactList, setLastActList] = useState("");
    const [selectList, setSelectList] = useState("");

    const [hotel, setHotel] = useState("");

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
            setHotel(response.data);
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
                        <p className="flex justify-center items-center">Type A</p>
                        <ul className={(firstClicked === 1 ? "flex justify-center gap-x-5 gap-y-5 my-5 rounded-lg bg-blue-light" : "flex justify-center gap-x-5 gap-y-5 my-10 mb-10 rounded-lg hover:bg-blue-semilight w-172 duration-200")}
                            onClick={() => {setFirstClicked(1); setLastClicked(0); setSelectList(lastactList)}}>
                            {firstactList.map(item => {
                                return (
                                    <div className="flex flex-col justify-center items-center">
                                        <li className="w-60 h-40 flex justify-center items-center">
                                            <img className="w-60 h-36 border rounded-lg object-cover" src={item.pic_url} alt="default"></img>
                                        </li>
                                        <p className="text-sm">{item.name}</p>
                                    </div>
                                )}
                            )}
                            <div className="flex flex-col justify-center items-center">
                                <li className="w-60 h-40 flex justify-center items-center">
                                    <img className="w-60 h-36 border rounded-lg object-cover" src={hotel.pic_url} alt="default"></img>
                                </li>
                                <p className="text-sm">{hotel.name}</p>
                            </div>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <p className="flex justify-center items-center mt-5">Type B</p>
                        <ul className={(lastClicked === 1 ? "flex justify-center gap-x-5 gap-y-5 my-5 rounded-lg bg-blue-light" : "flex justify-center gap-x-5 gap-y-5 my-5 rounded-lg hover:bg-blue-semilight duration-200")}
                            onClick={() => {setFirstClicked(0); setLastClicked(1); setSelectList(lastactList)}}>
                            {lastactList.map(item => {
                                return (
                                    <div className="flex flex-col justify-center items-center">
                                        <li className="w-60 h-40 flex justify-center items-center">
                                            <img className="w-60 h-36 border rounded-lg object-cover" src={item.pic_url} alt="default"></img>
                                        </li>
                                        <p className="text-sm ">{item.name}</p>
                                    </div>
                                )}
                            )}
                            <div className="flex flex-col justify-center items-center">
                                <li className="w-60 h-40 flex justify-center items-center">
                                    <img className="w-60 h-36 border rounded-lg object-cover" src={hotel.pic_url} alt="default"></img>
                                </li>
                                <p className="text-sm">{hotel.name}</p>
                            </div>
                        </ul>
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