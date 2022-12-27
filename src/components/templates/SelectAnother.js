import Header from "../organisms/Header.js"
import Announcement from "../organisms/announcement.js";
import SelectorBoard from "../organisms/selectorBoard.js";
import Footer from '../organisms/Footer.js'

function SelectAnother() {
    return (
        <>
            <Header />
            <Announcement
                props="여행 계획을 선택해 주세요" />
            <SelectorBoard />
            <Footer />
        </>
        
    );
}

export default SelectAnother;