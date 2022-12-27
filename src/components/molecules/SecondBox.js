import axios from 'axios';
import { useLocation } from 'react-router-dom';

function SecondBox(props){
    const name=props.name;
    const url="https://www.naver.com";

    const {state} = useLocation();

    function handleClick(e){
        //window.open(url)
        console.log(state);
    }

    return(
        <div className="w-full h-full flex">
                <div className="w-2/5 h-96 bg-real-blue flex flex-col justify-center items-center">
                    <strong className="text-white place-content-center place-items-center whitespace-pre-wrap">
                     해운대 블루라인파크
                    </strong>
                    
                    <strong className="text-white place-content-center place-items-center">부산 부산진구 서전로38번길 62-9 2층</strong>
                    <button onClick={handleClick} className="relative text-white justify-center items-center border border-2 p-2 my-2">
                     숙소 예매하러가기
                    </button>
                </div>

                <img className="w-full h-96" src="images/second.jpg" alt="pic"/> 
        </div>  
    );
}
export default SecondBox;