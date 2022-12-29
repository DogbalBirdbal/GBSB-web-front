import axios from "axios";
import { useEffect, useState } from "react";

function WishListComponent(){

    const [wishList, setWishList] = useState([]);

    const id = "1234"

    useEffect(() => {
        axios.get(`/api/myinfo/${id}`).then((response) => {
            console.log("Successfully Connected")
            // setWishList(((response.data.route).substring(1, ((response.data.route).length) - 1)).split('],['));
            console.log(response.data);
            // console.log(response.data.wishLists);
        }).catch(() => {
            console.log("Error");
        });
    }, [])

    return(
        <div>
            {wishList.map((lists, idx) => {
                return (
                    <div>
                    <div>나의 위시리스트 {idx + 1} 번</div>
                    <div className="flex gap-x-3">

                        {/*{lists.map(items => {*/}
                        {/*    return (*/}
                        {/*        <div>*/}
                        {/*        <div className="w-40 h-24 rounded-lg"><img className="w-40 h-24 rounded-lg object-cover" src={items.pic_url} alt="default"></img></div>*/}
                        {/*        <div>{items.name}</div>*/}
                        {/*        </div>*/}
                        {/*    );*/}
                        {/*})}*/}
                    </div>
                    </div>
                );
            })}
        </div>
    )
}
export default WishListComponent;