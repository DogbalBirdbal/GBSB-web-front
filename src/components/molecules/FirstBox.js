function FirstBox({props}){

    function handleClick(e){
        window.open(props.info)
    }

    return(
        <div className="w-full h-full relative">
            <img className="w-full h-96 object-cover object-center" src={props.pic_url} alt="default" />
            <div className="absolute flex-col top-1/2 left-1/2 place-content-center justify-center items-center">
                <strong className="flex text-white">{props.name}</strong>
                <strong className="flex text-white place-content-center place-items-center whitespace-pre-wrap bg-transparent">
                    부산 해운대구 청사포로 116
                </strong>
                <button onClick={handleClick} className="relative text-white justify-center items-center border-2 p-2 my-2">
                    더 알아보기
                </button>
            </div>
            
        </div>
    );

}

export default FirstBox;