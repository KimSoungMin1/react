//메모배열 저장
//초기값
const initalState ={
    memolist : [
        {
            id:1,
            name : "",
            text : ""
        }
    ],
    id:2,
}

export const addmemo =(memo)=>({type:"addMemo",payload:memo})



//리듀서값 작성
function memo(state=initalState,action){
    switch (action.type) {
        //새로운 메모
        case "addMemo":
            const newMemo = {
                id:state.id,
                name :action.payload.name,
                text : action.payload.text
            }
            const newMenoList =state.memolist.concat(newMemo)
            //새로운 메모를 가지는 리스트
            return {...state ,memolist : newMenoList , id:state.id+1}
        default:
            return {...state , id:state.id+1}
    }
}
export default memo