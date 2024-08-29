import { useState } from "react";

function EventComponentQ() {
  // 이름을 저장할 배열 상태와 현재 입력 중인 이름을 관리할 상태
  let [form, setForm] = useState({data:'',result:''});

  let handleNameChange = (e) => {
    setForm({data:e.target.value, result : form.result}); // name 상태를 입력값으로 업데이트
  };

  let handleClick = () => {
    if (form.data.trim() === '') {
      alert("이름을 입력하세요."); // 빈 입력 방지
      return;
    }

    if (window.confirm(`${form.data} 님의 입력값을 추가하시겠어요?`)) {
      setForm({data:'', result : form.data}); // 기존 리스트에 새로운 이름 추가
 
    }
  };

  return (
    <div>
      인풋데이터 핸들링<br />
      <input
        type="text"
        value={form.data}
        onChange={handleNameChange}
        placeholder="이름 입력"
      />
      <br />
      <button type="button" onClick={handleClick}>추가하기</button>
      <br />
      <h3>결과 값 :</h3>
      <p>{form.result}</p>
      {/* <ul>
        {nameList.map((item, index) => (
          <li key={index}>{item}</li> // 추가된 이름들을 리스트로 표시
        ))}
      </ul> */}
    </div>
  );
}

export default EventComponentQ;
