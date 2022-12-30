import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";

function FooterT({props}) {

  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const navigate = useNavigate();

  console.log(props);
  const movePage = useNavigate();
  const handleClick = (e) => {
    if (cookies.user === undefined) {
      navigate('/login');
    } else {
      axios({
        method: "post",
        url: "api/myinfo/wishlist/",
        data: {
          id: cookies.user,
          route: JSON.stringify(props)
        }
      }).then(() => {
        console.log("Successfully connected");
        alert("위시리스트에 정상적으로 추가되었습니다.");
      }).catch(() => {
        alert("데이터 베이스 에러");
      });
    }
  }

  return(
      <div className="px-default">
        <div className="w-full h-200 bg-real-blue flex justify-center items-center">
          <div className="flex flex-col self-center space-y-3">
            <strong className=" text-white self-center justify-center items-center">이 여행이 마음에 든다면?</strong>
            <button onClick={handleClick} className="relative text-white justify-center items-center border border-2 p-2">
                위시리스트에 추가하기
            </button>
          </div>
        </div>
      </div>
  );

}
export default FooterT;