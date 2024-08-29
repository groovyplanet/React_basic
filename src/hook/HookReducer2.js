import { useReducer } from "react";

const nameReducer =(state , action)=>{
//state는 유지하면서 전달되는 name에 따라서 key를 바꿈
state ={...state , [action.key]:action.value};
  
  return state;
}


function HookReducer2(){

//name과 age를 동시에 처리할 수 있는 nameReducer 함수를 생성합니다.
//초기값은 {name : '', age : 0}
//리듀서 함수 안에서는 객체값을 state= {...state , [키]:value};
//action 함수는 매개변수를 값을 주면 됩니다.
const [state,actionFunc] = useReducer(nameReducer,{name:'',value:0}); //리듀서 함수 , 초기값


let handleChange =(e)=>{
    actionFunc({key : e.target.name, value : e.target.value});
}

  return(
<>
<input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={state.age}
        onChange={handleChange}
      />
      <p>리듀서를 통해서 변경된 값 : 이름 : {state.name}, 나이: {state.age}</p>
</>
    
  )
}

export default HookReducer2;