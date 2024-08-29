import { useEffect, useState } from "react";


function HookEffect(){

//useState훅
  const [data,setData] = useState('');
  const [age,setAge] = useState('');

//useEffect => 컴포넌트 라이프 사이클 관리
// useEffect(()=>{
//   console.log('마운트 이후에 동작 됨(렌더링 이후에 동작됨 횟수 제한 X)');
// });

  // useEffect(()=>{
  //   console.log('마운트 이후에 딱 한번만 실행됨');
  // },[]);

// useEffect(()=>{
//   console.log('특정 값이 변경되서 렌더링 될 때 동작됨');
// },[data,age])

  // useEffect(()=>{
  //   console.log('effect 실행됨');
  //   return ()=>{
  //     console.log('unmount(소멸) 되기 전에 실행 됨');
      
  //   }
    
  // },[data]); //데이터가 변경될때 (소멸되기전에 실행)

  // //useEffect는 여러개 일 수 도 있습니다.
  // useEffect(()=>{
  //   console.log('effect 실행됨 22222~');
    
  // })

//무한 루프에 빠질 수 있는 코드
// const [ex,setEx] = useState({name : '홍길동'});
// useEffect(()=>{
//   let copy = {...ex};
//   setEx(copy);
// },[ex])


  //useEffect(()=>{}.[]) : 마운트 이후 단 한번 실행됨.(네트워크상으로 데이터를 가지고 올 때 사용함)
  //useEffect(()=>{}) : 마운트 이후 동작 (렌더링 이후 동작 횟수 제한 x)
//useEffect(()=>{},[data]) : '특정한 [data] 값이 변경되서 렌더링 될 때 동작됨 ([]안에 콤마로 여러개 넣을 수 있음)
console.log('코드 실행됨');


  return(
    <>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
      {data},
      {age}
    </>
  )

}
export default HookEffect;