import { useState, useEffect } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("bye :(");
  // };

  // function hiFn() {
  //   console.log("created :)");
  //   return byeFn; // component가 언제 파괴될지 알 수 있다.
  // };

  // useEffect(() => {
  //   console.log("hi :)");
  //   return () => console.log("bye :(");
  // }, []);

  useEffect(function() {
    console.log("hi :)");
    return function() {
      console.log("bye :(")
    }
  }, []);
  // useEffect(hiFn, []);

  // useEffect(() => {
  //   console.log("created :)");
  //   return () => console.log("destroyed :("); // component가 destroy될 때 실행
  // }, []);

  return <h1>Hello</h1>;
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};

export default App;