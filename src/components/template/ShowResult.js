import { useLocation } from "react-router-dom";
import FirstBox from "../molecules/FirstBox";
import SecondBox from "../molecules/SecondBox";

import FooterT from "../organisms/FooterT";

function ShowResult() {
    const location = useLocation();
    const list = location.state.list; //이건 이렇게 넘김(?) 받고

    return(
        <div className="flex flex-col">
            <div>
                {list.map((items, idx)=> {
                    if (idx % 2 === 0) {
                        return <FirstBox props={items} />
                    } else {
                        return <SecondBox props={items} />
                    }
                })}
            </div>
            <FooterT />
        </div>
    );
}

export default ShowResult;