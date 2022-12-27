import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
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