function Main() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-full relative">
                <video className="w-full h-screen object-cover" muted="muted" autoPlay="autoplay" loop="loop" volumn="0" src={process.env.PUBLIC_URL + '/main.mp4'} type="video/mp4" />
            </div>
            <div className="absolute text-white">
                <div className="text-center ">
                    <p>여행 갈까?</p>
                    <p>: 또 나만 진심이지</p>
                </div>
                <div className="">
                    <p>오늘도 어디를 갈지 고민하는 당신을 위해</p>
                    <p>클릭 한 번으로 해결!</p>
                </div>
                <div className="">
                    <p>시작하기</p>
                </div>
            </div>
        </div>
    );
}

export default Main;