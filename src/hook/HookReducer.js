import { useReducer } from "react";
import { myReducer } from "../util/MyReduce";

//리듀서 함수는 컴포넌트 외부에서 (상태값을 받아서 state를 체인지)
// const myReducer = (state,action) =>{ //state값 , 액션값
//   console.log(state);
//   console.log(action);

// //action에 따라서 state를 변경하는 작업을 거칠 수 있다.
// if(action=== "increase"){
//   state= {value : state.value+1};
// }else if(action==="decrease"){
//   state={value : state.value-1};
// }else{
//   state={value : 0};
// }

//   return state; // 여기서 반환되는 state는 reducer의 상태값으로 다시 반환이 됩니다.
// }

//컴포넌트
function HookReducer(){

//리듀스 훅 - 
//반환 = [state값,리듀서함수의 상태를 바꿀 수 있는 action함수]
  const [state,actionFunc] = useReducer(myReducer,{value:0}); //리듀서 함수 , 초기값
  
  const handleIncrease = () =>{
    actionFunc("increase"); //myReducer 함수에 action으로 전달 됨
  
  }

  return(
    <>
    
    <h3>useReducer</h3>
    

    리듀서로 관리되는 state 값 : {state.value}
    <button type="button" onClick={handleIncrease}>증가</button>
    <button type="button" onClick={()=> actionFunc("decrease")}>감소</button>
    <button type="button" onClick={()=> actionFunc("reset")}>초기화</button>

    </>
  )

}
export default HookReducer;