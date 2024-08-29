import { useState } from "react";

function IterationComponent2(){

//1. 기존 가짜 데이터 -> 서버에서 받아오는 데이터
const data = [
  {id:1,topic:'helloworld'},
  {id:2,topic:'bye bye~~'}
];
let [list, setList] = useState(data);

//3.input 태그 state 관리
let [topic , setTopic] = useState('')



//4. 버튼 클릭시에 input state값을 배열에다가 추가
let handleClick = () => {
  if (topic.trim() === '') {
    alert("이름을 입력하세요."); // 빈 입력 방지
    return;
  }

  if (window.confirm(`${topic} 님의 입력값을 추가하시겠어요?`)) {
   let obj ={ id: list[list.length-1].id +1 , topic : topic}; // id는 리스트의 마지막 값 +1
   let newList = list.concat(obj); // 배열.concat(배열), 배열.concat(오브젝트)

   //state 업데이트 -> 리렌더링
   setList(newList); // 리스트에 새로운 항목 추가
   setTopic(''); // 입력 후 텍스트 필드 비우기

  }
}

let handleKeyUp = (e) => {
  if(e.key ==='Enter'){//엔터를 눌렀을 때
    handleClick();
  }
}

let handleRemove = (id)=> {//클릭한 대상의 id값

  //filter (해당 값이 true인 것만 삭제)
  let newList = list.filter(value=> value.id !== id) 
  //리턴에 실린 값이 true인 데이터만 필터링

  //필터링 시킨 데이터를 state로 변경 -> 렌더링
  setList(newList);
  
}



//2. 리스트를 이용해서 반복 처리 -> 이벤트가 태그보다 위쪽에 위치
//이벤트에 함수 매개변수를 주고 싶으면 () => {실행시킬함수(매개값)}
const newList = list.map(value => <li key={value.id} onDoubleClick={() => {handleRemove(value.id)}}>{value.topic}</li>)







  return(
    <>
    <h3>간단한 할일 목록 만들기</h3>
    <ul>
    {newList}
    </ul>

    <input type="text" value={topic} onChange={(e)=>setTopic(e.target.value)} onKeyUp={handleKeyUp}/>
    <button type="button" onClick={handleClick} >추가하기</button>
   

{/* <ul>
        {nameList.map((item, index) => (
          <li key={index}>{item}</li> // 추가된 이름들을 리스트로 표시
        ))}
      </ul> */}


    </>
  )
}
export default IterationComponent2;