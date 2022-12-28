//첫번째화면
import Main from "../components/template/Main";
function MainPage() {
    return (
        <div>
            <video width="100%" height="100%" muted autoPlay loop>
            <source src="gbsb-background.mp4" type="video/mp4"/>
            </video>
            <Main/>
        </div>
        
    );
}

export default MainPage;