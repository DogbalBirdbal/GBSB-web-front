import { Link } from "react-router-dom"

function HeaderT(){
    return(
        
        <div class="static h-30 ">
        <div className="w-full h-16 white px-default flex items-center justify-between">
        <div>
            
        </div>
        <div>
            <img className="w-20 mr-auto" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
        </div>

        <div className="w-full ml-8 text-lg">
            <strong className="text-real-blue">여행 갈까?</strong>
        </div>
        <div className="flex w-full  text-real-blue text-lg">
            <div className="ml-auto ">
            <Link to='/login' style={{ textDecoration: "none" }}>
                <p>로그인</p>
            </Link>

            </div>
            
            
        </div>
        </div>
   
    </div>
    );
}
export default HeaderT;