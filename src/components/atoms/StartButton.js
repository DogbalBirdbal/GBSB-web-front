import { NavLink } from "react-router-dom";

function StartButton(){

    return(
        <nav className="absolute inset-3/4 z-0 font-bold">
        <NavLink to="/login" style={{color:"white" }}>
            Start
        </NavLink>
        </nav>
    );
    
}

export default StartButton;