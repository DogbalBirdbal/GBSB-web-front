import styles from "./styles/modal.module.scss"
import CasinoIcon from '@mui/icons-material/Casino';
import FoodList from "../../data/FoodList";

import { useState } from "react";

const RandomModal = (props) => {

    const { open, close } = props;

    const [hover, setHover] = useState(0);
    const [list, setList] = useState(FoodList.slice(0, 3));
    const [item, setItem] = useState("");

    const RandomHandler = (e) => {
        setList(FoodList.sort(() => Math.random() - 0.5).slice(0, 3));
    }

    return(
        <div>
            { open ? (
                <div className={styles.modalContainer}>
                    <div className={styles.bodyContainer}>
                        <div className={styles.titleContainer}>
                            <p>식당을 선택해 주세요.</p>
                        </div>
                        <div className={styles.contentContainer}>
                            <div className={styles.articleContainer}>
                                {list.map(item => {
                                    return (
                                        <div className={styles.randomContainer} onMouseOver={() => setHover(1)} onMouseOut={() => setHover(0)} onClick={() => {setItem(item.title)}}>
                                            <img src={item.imgSrc} alt="default"></img>
                                            {hover ? (
                                                <div className="absolute top-0 w-40 h-40 rounded-xl opacity-0 hover:bg-blue-main hover:opacity-90 duration-500 flex justify-center items-center">
                                                    <p className="text-white">{item.title}</p>
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
                            <p>{item}</p>
                            <button className={styles.closeButton} onClick={close}>선택</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default RandomModal;