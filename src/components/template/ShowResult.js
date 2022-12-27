import FirstBox from "../molecules/FirstBox";
import SecondBox from "../molecules/SecondBox";
import ThirdBox from "../organisms/ThirdBox";
import FooterT from "../organisms/FooterT";
import HeaderT from "../organisms/HeaderT";
import Footer from "../organisms/footer";
function ShowResult(){
    return(
        <div className="flex flex-col">
            <HeaderT/>
            <FirstBox/>
            <SecondBox />
            <ThirdBox/>
            <FooterT/>
            <Footer/>
        </div>
    )
    

}

export default ShowResult;