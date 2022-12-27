import React, { useState } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai'

function SearchPlace(props){

    const[inputs, setInputs] = useState({
        SearchStart: "",
        SearchFinal: "",
    });
    const{ Start, Final } = inputs;

    const onChange=(e)=>{
        //e를 통해 변화가 일어난 input의 정보를 받을 수 있다.
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    return(
        <div className="h-12 m-10 mx-44 bg-gray-light border border-solid border-gray-main rounded-3xl grid grid-cols-2 divide-x divide-black">
            <div className="m-2 flex justify-center">
                <input placeholder="어디서 출발하세요?" type="text" name="Start" value={Start} onChange={onChange}/>
            </div>

            <div className="m-2">
                <input className="input" placeholder="어디로 가세요?" type="text" name="Final" value={Final} onChange={onChange}/>
            </div>

            <div>
                {/* <AiOutlineSearch/> */}
            </div>
        </div>
    );
}

export default SearchPlace;