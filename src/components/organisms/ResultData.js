import axios from 'axios';
function ResultData(){

    
    //통신 메서드
    fetch('https://localhost:5050')
        .then((res)=>res.json())
        .then((res)=>{
            const resfood = res.crawlingfood;
            const res

            
        })

    return(
        <>

        </>
    );
}
export default ResultData;