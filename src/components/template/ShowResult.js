import { useLocation } from "react-router-dom";
import FirstBox from "../molecules/FirstBox";
import SecondBox from "../molecules/SecondBox";

import { useState } from "react";

import FooterT from "../organisms/FooterT";

function ShowResult() {

    const [list, setList] = useState([])

    const location = useLocation();
    const actList = location.state.actList;
    const lunch = location.state.lunch;
    const dinner = location.state.dinner;
    const hotel = location.state.hotel;

    actList.splice(1, 0, lunch);
    actList.splice(4, 0, dinner);
    actList.push(hotel);

    return(
        <div className="flex flex-col w-8/12 left-1/2 m-auto">
            <div>
                {actList.map((items, idx)=> {
                    if (idx % 2 === 0) {
                        return <FirstBox props={items} />
                    } else {
                        return <SecondBox props={items} />
                    }
                })}
            </div>
            <FooterT props={actList} />
        </div>
    );
}
export default ShowResult;