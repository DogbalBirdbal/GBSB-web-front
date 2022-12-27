import { useState } from "react";
import Announcement from "../organisms/announcement.js";
import RandomModal from "../molecules/RandomModal.js";

import { Link, useNavigate, useLocation } from "react-router-dom";

function SelectRestaurant() {

    const navigate = useNavigate();
    const location = useLocation();

    const actList = location.state.actList;
    const hotel = location.state.hotel;

    const onClickHandler = () => {
        navigate("/result", { })
    }

    const [fopen, setFopen] = useState(0);
    const [lopen, setLopen] = useState(0);
    const [lunch, setLunch] = useState({ name: "점심을 선택해 주세요.", pic_url: ""});
    const [dinner, setDinner] = useState({ name: "저녁을 선택해 주세요.", pic_url: ""});


    const fopenModal = () => {
        setFopen(1);
    }

    const fcloseModal = () => {
        setFopen(0);
    }

    const lopenModal = () => {
        setLopen(1);
    }

    const lcloseModal = () => {
        setLopen(0);
    }

    console.log("Fopen: " + fopen);
    console.log("Lopen: " + lopen);

    return (
        <div className="w-full px-default">
            <Announcement
                props="여행 경로를 확정해 주세요" />
            <div>
                <div>
                    <ul className="flex flex-col gap-y-5 my-5">
                        <div className="flex justify-center items-center gap-x-5">
                            <div className="flex flex-col gap-2">
                                <div className="w-60 h-36 border rounded-lg flex justify-center items-center"></div>
                                <p className="text-sm">{actList[0].name}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-60 h-36 border rounded-lg flex justify-center items-center">
                                    <button onClick={fopenModal}>
                                        { lunch.pic_url ? <img className="w-60 h-36 rounded-lg object-cover" src={lunch.pic_url} alt="default"></img> : "Click!"}
                                    </button>
                                    { fopen ? <RandomModal close={fcloseModal} name={actList[0].name} select={setLunch} /> : "" }
                                </div>
                                <p className="text-sm">{lunch.name}</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-x-5">
                            <div className="flex flex-col gap-2">
                                <div className="w-60 h-36 border rounded-lg flex justify-center items-center">활동1</div>
                                <p className="text-sm">{actList[1].name}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-60 h-36 border rounded-lg flex justify-center items-center">활동1</div>
                                <p className="text-sm">{actList[2].name}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-60 h-36 border rounded-lg flex justify-center items-center">
                                    <button onClick={lopenModal}>
                                        { dinner.pic_url ? <img className="w-60 h-36 rounded-lg object-cover" src={dinner.pic_url} alt="default"></img> : "Click!"}
                                    </button>
                                    { lopen ? <RandomModal close={lcloseModal} name={actList[2].name} select={setDinner} /> : "" }
                                </div>
                                <p className="text-sm">{dinner.name}</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-x-5">
                            <div className="flex flex-col gap-2">
                                <div className="w-60 h-36 border rounded-lg flex justify-center items-center">숙소</div>
                                <p className="text-sm">{hotel.name}</p>
                            </div>
                        </div>
                    </ul>
                    <div className="w-full h-150 flex justify-center items-center">
                        <button className="w-24 h-10 border rounded-md flex justify-center items-center" onClick={onClickHandler}>확정!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectRestaurant;