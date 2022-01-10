import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);

  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른글, 누른글변경] = useState(0);
  let [글발행, 글발행변경] = useState("");

  function 따봉갯수() {
    따봉변경(따봉 + 1);
  }

  function 글수정() {
    let 글2 = [...글제목];
    글2[0] = "여자코트 추천";
    글제목변경(글2);
  }

  function 글수정2() {
    let 글2 = [...글제목];
    글2[글2.length] = 글발행;
    글제목변경(글2);
  }

  function 모달상태변경() {
    if (modal === false) {
      modal변경(true);
    } else if (modal === true) {
      modal변경(false);
    }
  }

  return (
    <div className="App">
      <div className="App">
        <div className="black-nav">
          <div>개발 blog</div>
        </div>
        <button onClick={글수정}>버튼</button>
        {글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h3>
                {a} <span onClick={따봉갯수}>👍</span> {따봉}
              </h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          );
        })}
      </div>

      {/* <input
        onChange={e => {
          인풋글변경(e.target.value);
        }}
      /> */}

      <div className="publish">
        <input
          onChange={e => {
            글발행변경(e.target.value);
          }}
        />
        <button onClick={글수정2}>저장</button>
      </div>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        열고닫기
      </button>

      <button
        onClick={() => {
          누른글변경(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          누른글변경(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          누른글변경(2);
        }}
      >
        버튼3
      </button>
      {modal === true ? <Modal 글제목={글제목} 누른글={누른글} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른글]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
