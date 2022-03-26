import React, {useState} from 'react' ;
import './App.css';

function App() {

  let [title, titletrans] = useState(['남자 코트 추천','춤추기','노래하기']);
  let [count, counttrans] = useState([0,0,0]);
  let [modal, modaltrans] = useState(false);
  let [detail, detailtrans] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function newchange(a){
    let newArray=[...count];
    newArray[a]++
    counttrans(newArray);
  }


  return (
    <div className="App">

      <div className="black-nav">
        <div style = {{fontsize: '30px'}}>개발 Blog</div>
      </div>
  

      {
        title.map(function(a,i){
          return(
            <div key={i}>
                  <div className='list'  >
                <h3 onClick={()=>{modaltrans(!modal); detailtrans(i);}} >{ a }
                
                <span onClick={()=>{newchange(i)}}>👍</span>
                  
                  {count[i]}</h3>
                <p>2월 17일 발행</p>
                <hr/>
                </div>
      
              </div>

          )

        })

      }

      <div className="publish">
        <input onChange={(e)=>{입력값변경(e.target.value)}}/>
        <button onClick={()=>{
          var arrayCopy=[...title];
            arrayCopy.unshift(입력값);
            titletrans=(arrayCopy)
            
            }}>저장</button>
      </div>


      {
        modal===true
        ? <Modal title={title} detail={detail}/>
        : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h3>{props.title[props.detail]}</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
