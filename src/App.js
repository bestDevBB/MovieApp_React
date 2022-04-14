// import Button from "./button";
// import styles from "./App.module.css";

// function App() { // Component
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!!!</h1>
//       <Button text={"Continue"} />
//     </div>
//   );
// };

// export default App;


import { useState, useEffect } from "react";

function App() {
  const [counter, setCount] = useState(0); // array, state 초기값 0
  // react 안에서 실행 중이므로 React 생략 가능
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value); // event listener
  // console.log("I run all the time.");

  useEffect(() => { // refresh 되도 코드가 한 번만 실행할 수 있게 보호해준다.
    // console.log("CALL THE API...");
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    // if(keyword != "" && keyword.length > 5) {
    //   console.log("SEARCH FOR", keyword);
    // }
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // keyword가 변화할 때마다 코드를 실행할거라고 react.js에게 알려줌

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter change.");
  }, [keyword, counter]);

  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      {/* value를 줘서 state와 연결 */}
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
};

export default App;