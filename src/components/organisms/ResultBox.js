import { useLocation } from "react-router-dom";
import FirstBox from "../molecules/FirstBox";
import SecondBox from "../molecules/SecondBox";

function ResultBox(props){
    const location=useLocation();
    const list=location.state.list; //이건 이렇게 넘김(?) 받고


    const ResultCard=({list})=>{
        return(
            <div className="w-full px-default">
                <div>
                    {list.map((items, idx)=> {
                        if (idx % 2 === 0) {
                            return <FirstBox props={items} />
                        } else {
                            return <SecondBox props={items} />
                        }
                    })}
                </div>
            </div>
        )
    }
}
export default ResultBox;