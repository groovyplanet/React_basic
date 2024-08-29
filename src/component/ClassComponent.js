import { Component } from "react";

//함수형 vs 클래스형
class classComponent extends Component{
  constructor(props){//프롭스가 전달됩니다.
    super(props);//생성자 연결
    this.state = {
      a : 1,
      b : this.props.name
    }
  }

  //렌더 함수 오버라이딩
  render(){
    let {name,age} = this.props; // 프롭스는 멤버변수에 저장이 됩니다.
    let {a,b} = this.state;
    
    return(
      <div>
        클래스형 컴포넌트 예제
        <br/>
        props1: {name} , props2 : {age}
        <br/>
        state1:{a} , state2:{b}
      </div>
    )
  }


}
export default classComponent;