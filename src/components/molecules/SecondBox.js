function SecondBox({props}){

    function handleClick(e){
        window.open(props.info)
    }

    return(
        <div className="w-full h-full flex px-default">
            <div className="w-2/5 h-96 bg-real-blue flex flex-col justify-center items-center">
                <strong className="text-white place-content-center  place-items-center whitespace-pre-wrap">
                    {props.name}
                </strong>
                <strong className="text-white place-content-center place-items-center">{props.address}</strong>
                <button onClick={handleClick} className="relative text-white justify-center items-center border-2 p-2 my-2">
                    더 보러 가기
                </button>
            </div>
            <div className="w-3/5">
                <img className="w-full h-96 object-fill object-cover object-fill object-center" src={props.pic_url} alt="pic"/>
            </div>
        </div>
    );
}
export default SecondBox;