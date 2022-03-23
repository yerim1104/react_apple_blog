import React, {useState} from 'react' ;
import './App.css';

function App() {

  let [title, titletrans] = useState(['남자 코트 추천','춤추기','노래하기','여자 코트 추천']);
  let [count, counttrans] = useState(0);
  let [male, female] = useState(title[0]);



  return (
    <div className="App">
      <button onClick = { ()=>{female(title[3])}}>change</button>

      <div className="black-nav">
        <div style = {{fontsize: '30px'}}>개발 Blog</div>
      </div>

      <div className='list'>
      <h4>{ male }<span onClick = {()=>{counttrans(count+1)}}>👍</span>{count}</h4>
      <p>2월 17일 발행</p>
      <hr/>
      </div>
      
      <div className='list'>
      <h4>{ title[1] }</h4>
      <p>2월 17일 발행</p>
      <hr/>
      </div>

      <div className='list'>
      <h4>{ title[2] }</h4>
      <p>2월 17일 발행</p>
      <hr/>
      </div>
      
    </div>
  );
}

export default App;
