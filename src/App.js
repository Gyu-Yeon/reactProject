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

  function 따봉갯수() {
    따봉변경(따봉 + 1);
  }

  function 글수정() {
    let 글2 = [...글제목];
    글2[0] = "여자코트 추천";
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
        {글제목.map(function (a) {
          return (
            <div className="list">
              <h3>
                {a} <span onClick={따봉갯수}>👍</span> {따봉}
              </h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        버튼
      </button>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
