import StartButton from "../atoms/StartButton";
import MainIndex from "../atoms/MainIndex";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

function MainBoard(){

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);


    const handleOnClick = () => {
        if (cookies.user === undefined) {
            navigate('/login');
        } else {
            navigate('/select/another');
        }
    }

    return(
        <>
            <div className="w-full relative">
                <video className="w-full h-screen object-cover" muted autoPlay loop>
                    <source src="gbsb-background.mp4" type="video/mp4"/>
                </video>
                <div>
                    <div className="absolute top-1/2 left-1/2 text-white translate-y-main-center">
                        <div className="flex flex-col gap-y-5">
                            <div className="flex flex-col gap-y-3">
                                <p className="text-9xl font-bold">
                                    여행갈까?
                                </p>
                                <div className="flex justify-between items-center mx-5">
                                <p className="text-4xl">
                                    : 또 나만 진심이지
                                </p>
                                <div className="text-xl font-bold border-2 rounded-lg border-white px-10 py-2 hover:bg-white hover:text-black duration-500" onClick={handleOnClick}>Start</div>
                                </div>
                            </div>
                            {/*<div className="flex items-center ml-10">*/}
                            {/*    <NavLink to="/login" style={{color: "white"}}>*/}
                            {/*        <div className="text-xl font-bold border-2 rounded-lg border-white px-10 py-2">Start</div>*/}
                            {/*    </NavLink>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainBoard;