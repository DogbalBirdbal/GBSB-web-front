function announcement({props}) {
    return(
        <div className="w-full h-100 bg-white px-default flex items-center justify-center">
            <p>{props}</p>
        </div>
    );
}

export default announcement;