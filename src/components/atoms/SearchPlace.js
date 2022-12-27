import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchPlace(props){

    const{ SelectStart, setSelectStart} = useState('');
    const{ SelectFinal, setSelectFinal} = useState('');

    
    const onStartChange = (e) =>{
        setSelectStart(e.target.value)
    };

    const onFinalChange = (e) =>{
        setSelectFinal(e.target.value)
    }
    const movePage=useNavigate();

    function clickFunc(e){
        e.preventDefault();
        console.log('You Clicked submit');
        movePage('/select/another');
    }

    const onKeyPress=(e)=>{
        
            try{
                console.log(e);
                axios.post('/select/another',{
                    startplace: SelectStart,
                    finalplace: SelectFinal
                });
                
                
            } catch (error){
                console.error(error);
            }
        
            
    }

    return(
        <label class="relative block w-250">
            <input class="placeholder:italic placeholder:text-slate-400 block w-10020 border" placeholder="출발지를 입력해주세요..." type="text" name="Start"></input>
        </label>
    );

   /*
    return(
        <div className="relative">
        <div className=" h-12 m-10 mx-44 bg-gray-light border border-solid border-gray-main rounded-3xl">
            <form className="flex justify-center items-center"onSubmit={onKeyPress}>
                <div className="w-full top-0 flex justify-between items-center grid grid-cols-2 divide-x divide-black">
                    <input class="m-2 flex placeholder:italic justify-center items-center" placeholder="출발지를 입력해주세요..." type="text" name="Start" value={SelectStart} onChange={onStartChange} onKeyPress={onKeyPress}/>
                    <input class="m-2 flex placeholder:italic justify-center" placeholder="도착지를 입력해주세요..." type="text" name="Final" value={SelectFinal} onChange={onFinalChange} onKeyPress={onKeyPress}/>
                </div>

            </form>
            <button className="static justify-between top-100 right-10 w-full" onClick={clickFunc} >검색</button>           
        </div>
        </div>
        

    );*/
}

export default SearchPlace;