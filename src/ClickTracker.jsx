import { useRef, useState } from "react";

function ClickTracker() {
  const currentRef = useRef(0);
  const [fakeState, setFakeState] = useState(0);
  function handleClick() {
    currentRef.current++;
    setFakeState((prev) => prev + 1);
  }
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>UseRef Click Tracker</h2>
      <button onClick={handleClick}>Button Click</button>
      <p>Button Clicked : {currentRef.current}</p>
    </div>
  );
}

export default ClickTracker;

//============================Simple Tracker=======================
// import { useRef, useState } from "react";

// function ClickTracker() {
//   const countRef = useRef(0); // stores count without re-rendering
//   const [fakeState, setFakeState] = useState(false); // just to re-render manually

//   const handleClick = () => {
//     countRef.current++;
//     alert(`Button clicked ${countRef.current} times`);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>🔁 useRef Click Tracker</h2>
//       <button onClick={handleClick}>Click Me</button>
//       <br /><br />
//       <p>Open console or use alert to track internal count</p>
//     </div>
//   );
// }

// export default ClickTracker;
