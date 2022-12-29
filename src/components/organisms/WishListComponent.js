import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function WishListComponent(){

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [wishList, setWishList] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get(`/api/myinfo/${cookies.user}`).then((response) => {
            console.log("Successfully Connected")
            console.log(response.data.name);
            setName(response.data.name);
            setWishList(JSON.parse(response.data.result));
            console.log(JSON.parse(response.data.result));
        }).catch(() => {
            console.log("Error");
        });
    }, [])

    if (wishList.length !== 0) {
        return (
            <div className="w-full px-default mb-5">
                <div className="w-full h-100 flex flex-col justify-center items-center">
                    <strong className="text-lg">반갑습니다, {name} 님!</strong>
                </div>
                {Object.entries(wishList.wishBoxContainer).map((lists, idx) => {
                    return (
                        <div className="flex flex-col pb-5 mb-3">
                            <div className="flex pb-3 gap-x-1">
                                <FmdGoodIcon />
                                <strong>나의 위시리스트 {idx + 1} 번</strong>
                            </div>
                            <div className="flex flex-col gap-y-3 p-6 border">
                                <div className="flex justify-center items-center">
                                    {Object.entries(lists[1].wishLists).map((items, idx) => {
                                        if ((idx < 3)) {
                                            return (
                                                <div className="flex items-center">
                                                    <div className="flex flex-col gap-y-2">
                                                        <div className="h-24 rounded-lg flex items-center">
                                                            <img className="w-44 h-24 rounded-lg object-cover mx-1" src={items[1].picURL} alt="default"></img>
                                                            <div className="w-7"><KeyboardDoubleArrowRightIcon /></div>
                                                        </div>
                                                        <p className="text-sm">{items[1].name}</p>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="flex justify-center items-center">
                                    {Object.entries(lists[1].wishLists).map((items, idx) => {
                                        if ((idx > 2)) {
                                            return (
                                                <div className="flex items-center">
                                                    <div className="flex flex-col gap-y-2">
                                                        <div className="h-24 rounded-lg flex items-center">
                                                            <img className="w-44 h-24 rounded-lg object-cover mx-1" src={items[1].picURL} alt="default"></img>
                                                            <div className="w-7"><KeyboardDoubleArrowRightIcon /></div>
                                                        </div>
                                                        <p className="text-sm">{items[1].name}</p>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    } else {
        return (
            <div className="w-full h-100 flex flex-col justify-center items-center">
                <strong className="text-lg">반갑습니다, {name} 님!</strong>
            </div>
        );
    }
}
export default WishListComponent;