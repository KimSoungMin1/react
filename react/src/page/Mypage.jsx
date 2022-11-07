import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo} from "../modules/memo";
import{Link}from "react-router-dom"

const Mypage = () => {
    const memolist =useSelector((state)=>state.memo.memolist)
    const [text,setText]=useState('')
    const [name,setName]=useState('')


    const dispatch =useDispatch();

    
    const addMemo =useCallback(()=>{
        setName("");
        setText("");
        dispatch(addmemo({name:name,text:text}))},[dispatch,name,text])
    
    return ( 
        <div className="inner">
            <h1>방명록을 작성해 주세요</h1>
            <Link to={'/'}><p>Home</p></Link>
            <div className="cont">
                <div>
                    <span>이름</span>
                    <input type="id" onChange={(e)=>{setName(e.target.value)}} value={name}/>
                    <input type="text" onChange={(e)=>{setText(e.target.value)}}  value={text}/>
                    <button onClick={addMemo}>작성</button>
                </div>
            </div>
            <ul>
            {
                memolist.filter((memo)=>(memo.id>1)).map((memo)=>(
                    <li key={memo.id}>
                        <span>{memo.name}:</span>
                        <span>{memo.text}</span>
                    </li>
            ))
            }
            </ul>
        </div>
    );
}

export default Mypage;