import { Link } from "react-router-dom"

function HeaderT(){
    return(
        <div class="static">
        <div className="w-full h-16 white px-default flex items-center justify-between">
        <div>
            <img className="w-20" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
        </div>

        <div className="w-full ml-8 text-blue-dark text-lg">
            <strong>여행 갈까?</strong>
        </div>
        <div className="flex w-full ml-10  text-blue-dark text-lg">
            <div>
            <Link to='/login' style={{ textDecoration: "none" }}>
                <p>로그인</p>
            </Link>
            </div>
            <div className="ml-10">
            <Link to='/more' style={{ textDecoration: "none" }}>
                <p>더보기</p>
            </Link>
            </div>
            
        </div>
        </div>
   
    </div>
    );
}
export default HeaderT;