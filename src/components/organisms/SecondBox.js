function SecondBox(props){
    const name = props.name;

        return(
            <div className="w-full h-full relative">
                <img className="w-full h-96 object-cover object-center" src="images/second.jpg" />
                <div className="absolute top-1/2 left-1/2 place-content-center justify-center items-center">
                    <strong className="text-white">{name}</strong>
                </div>
            </div>
        );
    }
export default SecondBox;