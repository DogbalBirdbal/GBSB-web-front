import { NavLink } from "react-router-dom";

function StartButton(){

    return(
        <nav className="absolute inset-3/4 z-0 font-bold">
        <NavLink to="/select/another" style={{color:"white" }}>
            Start
        </NavLink>
        </nav>
    );
    
}

export default StartButton;