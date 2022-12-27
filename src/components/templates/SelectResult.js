import { useState, useEffect } from "react";
import Announcement from "../organisms/announcement.js";
import RandomModal from "../molecules/RandomModal.js";

import axios from 'axios';

import { Link, useNavigate, useLocation } from "react-router-dom";

function SelectResult() {

    const navigate = useNavigate();
    const location = useLocation();

    const onClickHandler = () => {
        navigate("/select/food", { })
    }

    const [actList, setActList] = useState("");
    const [hotel, setHotel] = useState("");

    const place = location.state.place;
    const firstDate = location.state.firstDate;
    const lastDate = location.state.lastDate;
    const theme = location.state.theme;

    const placeInput = place + " " + theme;
    const hotelInput = place + "_" + firstDate + "_" + lastDate; 

    useEffect(() => {

        axios.get(`api/choicepath/${placeInput}`).then((response) => {
            console.log("Successfully Connected")
            setActList(response.data);
        }).catch(() => {
            console.log("Error")
        });

        axios.get(`api/choicepath/${hotelInput}`).then((response) => {
            console.log("Successfully Connected")
            setHotel(response.data);
        }).catch(() => {
            console.log("Error")
        });

    }, []);


    return (
        <div className="w-full px-default">
            <Announcement
                props="여행 경로를 선택해 주세요" />
            <div>
                <div>
                    <p className="flex justify-center items-center">Type A</p>
                    <ul className="flex justify-center gap-x-5 gap-y-5 my-5">
                        {actList.map(item => {
                            return (
                                <div className="flex flex-col gap-2">
                                    <li className="w-60 h-36 border rounded-lg flex justify-center items-center">활동1</li>
                                    <p className="text-sm">활동 이름입니다.</p>
                                </div>
                            )}
                        )}
                        <div className="flex flex-col gap-2">
                            <li className="w-60 h-36 border rounded-lg flex justify-center items-center">숙소</li>
                            <p className="text-sm">숙소 이름입니다.</p>
                        </div>
                    </ul>
                </div>
                <hr />
                <div>
                    <p className="flex justify-center items-center mt-5">Type B</p>
                    <ul className="flex justify-center gap-x-5 gap-y-5 my-5">
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">활동1</li>
                                <p className="text-sm">활동 이름입니다.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">활동1</li>
                                <p className="text-sm">활동 이름입니다.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">활동1</li>
                                <p className="text-sm">활동 이름입니다.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">숙소</li>
                                <p className="text-sm">숙소 이름입니다.</p>
                            </div>
                    </ul>
                </div>
                <div className="w-full h-150 flex justify-center items-center">
                    <button className="w-24 h-10 border rounded-md flex justify-center items-center" onClick={onClickHandler}>다음</button>
                </div>
            </div>
        </div>
    );
}

export default SelectResult;