function FirstBox({props}){

    function handleClick(e){
        window.open(props.info)
    }

    return(
        <div className="relative w-full h-full relative px-default">
            <img className="w-full h-96 object-cover object-center" src={props.pic_url} alt="default" />
            <div className="absolute flex-col top-1/2 left-1/2 justify-center items-center transform-y-main-center">
                <strong className="flex text-white drop-shadow-lg">{props.name}</strong>
                <strong className="flex text-white place-content-center place-items-center whitespace-pre-wrap bg-transparent">
                    {props.address}
                </strong>
                <button onClick={handleClick} className="relative text-white justify-center items-center border-2 p-2 my-2">
                    더 알아보기
                </button>
            </div>

        </div>
    );
}

export default FirstBox;