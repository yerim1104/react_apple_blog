import React, {useState} from 'react' ;
import './App.css';

function App() {

  let [title, titletrans] = useState(['남자 코트 추천','춤추기','노래하기']);
  let [count, counttrans] = useState(0);

  let [modal, modaltrans] = useState(false);

  return (
    <div className="App">

      <div className="black-nav">
        <div style = {{fontsize: '30px'}}>개발 Blog</div>
      </div>
      
      <div className='list'>
      <h3 onClick={()=>{modaltrans(true);}}>{ title[0] }<span onClick = {()=>{counttrans(count+1)}}>👍</span>{count}</h3>
      <p>2월 17일 발행</p>
      <hr/>
      </div>
      
      <div className='list'>
      <h3 onClick={()=>{modaltrans(true);}}>{ title[1] }<span onClick={()=>{counttrans(count+1)}}>👍</span>{count}</h3>
      <p>2월 17일 발행</p>
      <hr/>
      </div>

      <div className='list'>
      <h3 onClick={()=>{modaltrans(true);}} >{ title[2] }<span onClick={()=>{counttrans(count+1)}}>👍</span>{count}</h3>
      <p>2월 17일 발행</p>
      <hr/>
      </div>

      <button onClick={()=>{modaltrans(!modal);}}>열기/닫기</button>
      
      {
        modal===true
        ? <Modal/>
        : null
      }

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h3>제목</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
