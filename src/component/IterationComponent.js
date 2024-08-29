function IterationComponent(){

  const arr = [1,2,3,4,5];
  
//     const newArr=arr.map((value,index)=> value*10);
// console.log(newArr);

//li태그는 리액트 element -> 반드시 고유한 key props를 전달하도록 권고
const newArr = arr.map((value,index)=> {
  return <li key={index}>값:{value}</li>
})
console.log(newArr);


  return(
    <div>
      컴포넌트 반복
      <ul>
        {newArr}
      </ul>
    </div>
  )
}

export default IterationComponent;