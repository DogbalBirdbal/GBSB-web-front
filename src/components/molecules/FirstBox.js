function FirstBox(props){
    const name = props.name;
    const url="https://www.naver.com";
    function handleClick(e){
        window.open(url)
    }

        return(
            <div className="w-full h-full relative">
                <img className="w-full h-96 object-cover object-center" src="images/first.jpg" />
                <div className="absolute flex-col top-1/2 left-1/2 place-content-center justify-center items-center">
                    <strong className="flex text-white">해운대 블루라인파크</strong>
                    <strong className="flex text-white place-content-center place-items-center whitespace-pre-wrap bg-transparent">
                    부산 해운대구 청사포로 116
                    </strong>
                    <button onClick={handleClick} className="relative text-white justify-center items-center border border-2 p-2 my-2">
                    장소 사이트 더 알아보기
                    </button>
                </div>
                
            </div>
        );
    }
export default FirstBox;