//import StartButton from "./StartButton";

import {NavLink} from "react-router-dom";

function MainIndex(){
    return(
        <div>
            <div className="absolute inset-y-1/2 left-1/2 text-white" >
                <div>
                    <p class="text-9xl font-bold">
                        여행갈까?
                    </p>
                    <p class="text-4xl ml-5">
                        : 또 나만 진심이지
                    </p>
                    <div>
                        <NavLink to="/login" style={{color:"white" }}>
                            Start
                        </NavLink>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default MainIndex;
