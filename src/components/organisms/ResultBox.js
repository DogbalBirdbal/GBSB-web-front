function ResultBox(){
    var new_arr = [];

    function findEven(element){
        if(element%2===0){
            for(var i=0; i<element.length; i++){
                new_arr[i] = element;
                console.log(new_arr[i]);
            }
        }
    }

    


}
export default ResultBox;