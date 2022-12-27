import { useState } from "react";
import Announcement from "../organisms/announcement.js";
import RandomModal from "../molecules/RandomModal.js";

import { Link, useNavigate } from "react-router-dom";

function SelectRestaurant() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/result", { })
    }

    const [open, setOpen] = useState(0);

    const openModal = () => {
        setOpen(1);
    }

    const closeModal = () => {
        setOpen(0);
    }

    return (
        <div className="w-full px-default">
            <Announcement
                props="여행 경로를 확정해 주세요" />
            <div>
                <div>
                    <ul className="flex flex-col gap-y-5 my-5">
                        <div className="flex justify-center items-center gap-x-5">
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">활동1</li>
                                <p className="text-sm">활동 이름입니다.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">
                                    <button onClick={openModal}>Click!</button>
                                    <RandomModal open={open} close={closeModal} />
                                </li>
                                <p className="text-sm">점심을 선택해 주세요.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-x-5">
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">활동1</li>
                                <p className="text-sm">활동 이름입니다.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">활동1</li>
                                <p className="text-sm">활동 이름입니다.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">
                                    <button onClick={openModal}>Click!</button>
                                    <RandomModal open={open} close={closeModal} />
                                </li>
                                <p className="text-sm">저녁을 선택해 주세요.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-x-5">
                            <div className="flex flex-col gap-2">
                                <li className="w-60 h-36 border rounded-lg flex justify-center items-center">숙소</li>
                                <p className="text-sm">숙소 이름입니다.</p>
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