import styles from "./styles/modal.module.scss"
import CasinoIcon from '@mui/icons-material/Casino';

import { useState, useEffect } from "react";
import axios from "axios";

const RandomModal = ({open, close, name, select}) => {

    const [hover, setHover] = useState(0);
    const [list, setList] = useState("");
    const [item, setItem] = useState("");

    useEffect(() => {
        console.log(name);
        if (name) {
            axios.get(`/api/crawlingfood/${name}`).then((response) => {
                console.log("Successfully Connected")
                setList(response.data);
                console.log(response.data);
            }).catch(() => {
                console.log("Error")
            });
        }
    }, [open])

    const RandomHandler = (e) => {
        if (name) {
            axios.get(`/api/crawlingfood/${name}`).then((response) => {
                console.log("Successfully Connected")
                setList(response.data);
                console.log(response.data);
            }).catch(() => {
                console.log("Error")
            });
        }
    }

    if (list) {
        return(
            <div>
                <div className={styles.modalContainer}>
                    <div className={styles.bodyContainer}>
                        <div className={styles.titleContainer}>
                            <p>식당을 선택해 주세요.</p>
                        </div>
                        <div className={styles.contentContainer}>
                            <div className={styles.articleContainer}>
                                {list.map(item => {
                                    return (
                                        <div className={styles.randomContainer} onMouseOver={() => setHover(1)} onMouseOut={() => setHover(0)} onClick={() => {setItem(item)}}>
                                            <img src={item.pic_url} alt="default"></img>
                                            {hover ? (
                                                <div className="absolute top-0 w-40 h-40 rounded-xl opacity-0 hover:bg-blue-main hover:opacity-90 duration-500 flex justify-center items-center">
                                                    <p className="text-white">{item.name}</p>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    )}
                                )}
                                <CasinoIcon fontSize="large" style={{ fill: '#3b398e' }} onClick={RandomHandler} />
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <p>{item.name}</p>
                            <div onClick={() => {select(item)}}>
                                <button className={styles.closeButton} onClick={close}>선택</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else return null;
}

export default RandomModal;