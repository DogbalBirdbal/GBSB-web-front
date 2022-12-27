import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";

function FooterT(){
  const movePage=useNavigate();
  function handleClick(e){
    movePage('/login');
  }
  
    return(
        <>
      <div className="w-full h-200 bg-real-blue flex justify-center items-center">
        <div className="flex flex-col self-center space-y-3">
          <strong className=" text-white self-center justify-center items-center">이 여행이 마음에 든다면?</strong>
          <button onClick={handleClick} className="relative text-white justify-center items-center border border-2 p-2">
              위시리스트에 추가하기
          </button>
        </div>
        
      </div>
        </>
    );
}
export default FooterT;