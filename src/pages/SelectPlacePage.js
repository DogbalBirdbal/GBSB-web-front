import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import SelectPlaceBox from "../components/atoms/SearchPlace";
import Map from "../components/atoms/Map";
function SelectPlacePage(){
    return (
        <>
        <Header />
        <SelectPlaceBox/>
        <Map/>
        <Footer />
        </>
        
    );
}
export default SelectPlacePage;