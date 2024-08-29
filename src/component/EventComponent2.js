import { useState } from "react";

function EventComponent2(){

  let [form, setForm] = useState({name:'', topic:''}) // 초기값이 객체

  let handleForm = (e) =>{
      //어떤 태그가 , 어떤 값을 가지는지

      let copy = {...form, [e.target.name] : e.target.value} 
      // 기존 값을 복사하고 , 특정 키만 바꾸는 코드 spread operator
      setForm(copy);
      
  }
  let handleClick=()=>{
    alert(`${form.name} 님의 할일 ${form.topic} 하세요`);
    setForm({name:'',topic:''});
  }

  return(
    <div>
  인풋태그 객체로 핸들링하기<br/>
  <input type="text" name="name" value={form.name} onChange={handleForm}/>
  <button >화긴</button>
  <br/>
  결과 state 값 : {form.name}
  <br/>

  <input type="text" name="topic" value={form.topic} onChange={handleForm}/>
  <br/>
  결과 state 값 : {form.topic}
  <br/>
  <button trpe="button" onClick={handleClick}>클릭 이벤트</button>
  </div>

  )
}

export default EventComponent2;