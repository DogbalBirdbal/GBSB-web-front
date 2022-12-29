import { Link } from "react-router-dom"

import { useCookies } from 'react-cookie';
import { useState } from "react";
import { useEffect } from "react";

function Header() {

    const [cookies, setCookie, removeCookie] = useCookies(['id']);
    const [login, setLogin] = useState(false);

    const authCheck = () => {
        const token = cookies.id;

        if (token !== undefined) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    useEffect(() => {
        authCheck();
    }, [])

    return(
        <div className="w-full h-16 px-default flex items-center justify-between border-b">
            {!login ?
                <>
                    <div>
                        <Link to='/' style={{ textDecoration: "none" }}>
                            <img className="w-10" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                        </Link>
                    </div>
                    <div className="flex gap-x-5 text-blue-main">
                        <Link to='/login' style={{ textDecoration: "none" }}>
                            <p>로그인</p>
                        </Link>
                        <Link to='/signup' style={{ textDecoration: "none" }}>
                            <p>회원가입</p>
                        </Link>
                    </div>
                </>
            :     
                <>
                    <div>
                        <Link to='/' style={{ textDecoration: "none" }}>
                            <img className="w-10" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                        </Link>
                    </div>
                    <div className="flex gap-x-5 text-blue-main">
                        <Link to='/mypage' style={{ textDecoration: "none" }}>
                            <p>마이페이지</p>
                        </Link>
                        <p onClick={() => {removeCookie('id');}}>로그아웃</p>
                    </div>
                </>
            }
        </div>
    );
}

export default Header;