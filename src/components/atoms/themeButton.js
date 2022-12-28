import { useState } from "react";

function ThemeButton({idx, title, imgSrc, clicked, theme}) {

    const [hover, setHover] = useState(0);
    const [index, setIndex] = useState(null);

    return(
        <div className="relative w-theme-width h-theme-height rounded-xl" onMouseOver={() => setHover(1)} onMouseOut={() => setHover(0)} onClick={() => {clicked(title); theme(title); setIndex(idx)}}>
            <div>
                <img className="w-theme-width h-theme-height object-cover rounded-xl" src={imgSrc} alt="default"></img>
            </div>
            {hover ? (
                <div className="absolute top-0 w-theme-width h-theme-height rounded-xl opacity-0 hover:bg-blue-light hover:opacity-80 duration-500 flex justify-center items-center">
                    <p className="text-white">{title}</p>
                </div>
            ) : (
                ""
            )}
        </div>
    );

}

export default ThemeButton;