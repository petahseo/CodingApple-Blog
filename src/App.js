import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "가 코트 추천",
    "다 코트 추천",
    "나 코트 추천",
  ]);

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "teal", fontSize: "20px" }}>React Blog</h4>
      </div>

      <button
        onClick={() => {
          let sort = [...title];
          setTitle(sort.sort());
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          let newTitle = [...title];
          newTitle[0] = "여자 코트 추천";
          setTitle(newTitle);
        }}
      >
        제목수정
      </button>

      <div className="list">
        <h4>
          {" "}
          {title[0]}{" "}
          <span
            onClick={() => {
              setCount(count + 1);
            }}
          >
            👍
          </span>
          {count}
        </h4>
        <p>8월 23일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>8월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>8월 23일 발행</p>
      </div>

      <Modal />
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
