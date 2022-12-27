function SecondBox({props}){

    function handleClick(e){
        window.open(props.info)
    }

    return(
        <div className="w-full h-full flex">
                <div className="w-2/5 h-96 bg-real-blue flex flex-col justify-center items-center">
                    <strong className="text-white place-content-center place-items-center whitespace-pre-wrap">
                        {props.name}
                    </strong>
                    
                    <strong className="text-white place-content-center place-items-center">부산 부산진구 서전로38번길 62-9 2층</strong>
                    <button onClick={handleClick} className="relative text-white justify-center items-center border-2 p-2 my-2">
                        더 보러 가기
                    </button>
                </div>

                <img className="w-full h-96" src={props.pic_url} alt="pic"/> 
        </div>  
    );
}
export default SecondBox;