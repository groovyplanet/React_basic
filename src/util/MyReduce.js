//다른 컴포넌트에서도 'export'로 인해 사용이 가능
export const myReducer = (state,action) =>{ //state값 , 액션값
//export : 이 함수 외부에서 이 이름으로 쓸 수 있게 하겠다.
  console.log(state);
  console.log(action);

//action에 따라서 state를 변경하는 작업을 거칠 수 있다.
if(action=== "increase"){
  state= {value : state.value+1};
}else if(action==="decrease"){
  state={value : state.value-1};
}else{
  state={value : 0};
}

  return state; // 여기서 반환되는 state는 reducer의 상태값으로 다시 반환이 됩니다.
}
