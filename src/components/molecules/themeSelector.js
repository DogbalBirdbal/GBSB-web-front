import ThemeButton from "../atoms/themeButton";
import ThemeList from "../../data/ThemeList";
import { useState } from "react";

function ThemeSelector({props}) {

    const [clicked, setClicked] = useState("");

    return(
        <div>
            <div>{clicked}</div>
            <div className="flex gap-x-theme-gap">
                {ThemeList.map(({ title, imgSrc }, idx) => (
                        <ThemeButton
                            idx={idx}
                            title={title}
                            imgSrc={imgSrc}
                            clicked={setClicked}
                            theme={props}
                        />
                ))}
            </div>
        </div>
    );
}

export default ThemeSelector;