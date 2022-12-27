import { Link } from "react-router-dom"

function Header() {
    return(
        <div className="w-full h-16 px-default flex items-center justify-between border-b">
            <div>
                <img className="w-10" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
            </div>
            <div className="flex gap-x-5 text-blue-main">
                <Link to='/login' style={{ textDecoration: "none" }}>
                    <p>로그인</p>
                </Link>
                <p>회원가입</p>
            </div>
        </div>
    );
}

export default Header;