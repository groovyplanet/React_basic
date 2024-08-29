import { useReducer, useRef } from "react";

const workReduce =(state , work)=>{
    //state는 유지하면서 전달되는 name에 따라서 key를 바꿈
    state ={...state , [work.key]:work.value};
      
      return state;
    }



const HookQ2 = () => {
    /*
    실습(할일목록 만들기 )
    1. state는 {todo: '', list: []} 로 관리합니다.
    2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
    3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요.

    */
    const [state,actionFunc] = useReducer(workReduce,{todo:'', list:[]}); 
    //리듀서 함수 , 초기값
    const inputRef = useRef(null);

    //인풋 데이터 핸들링
    let handleChange =(e)=>{
      actionFunc({key : 'todo' , value : e.target.value});
    }
    
    
    let handleClick = () => {

        if (state.todo.trim() !== '') { // 빈 입력 방지
          actionFunc({ key: 'list', value: [...state.list, state.todo] }); 
          //state.list 배열 안에 state.todo 추가
          actionFunc({ key: 'todo', value: '' }); // 입력란 초기화
          inputRef.current.focus();
                    
        }else{
            alert(`공백은 입력할 수 없습니다.`);
            return;
        }
        
      }
      // Enter 키로도 입력 가능하게 하기
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }
  

    return (
        <div>
            <input type="text" name="name" value={state.todo} 
            onChange={handleChange} onKeyPress={handleKeyPress} placeholder="할일 목록을 작성하세요" ref={inputRef} 
            />
            <button type="button" onClick={handleClick} >등록</button>
            <ul>
            {state.list.map((item, index) => (
            <li key={index}>{index+1}. {item}</li>))}
            </ul>
        </div>
    )
}

export default HookQ2;