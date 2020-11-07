import React, { useState, useEffect } from "react";

/** 되는기능
 * a+b = c
 * a+b = c + d = e = ...
 * a+b+c+d+e+...
 * a+b = c <ac없이> d+e=f
 * ad구현했는데, 바로 다른 숫자쓰면 넘어감
 * history(어떤 연산 했는지) 남기고 싶은데 잘 안 된다.
 */
function Calc() {
  const [prev, setPrev] = useState("0");
  const [score, setScore] = useState("0");
  const [curoperator, setCuroperator] = useState("");
  const [change, setChange] = useState(1);

  // const [history, setHistory] = useState(""); // history기능을 구현하고 싶다.

  // useEffect(() => {
  //   setHistory(history + score.substr(score.length - 1));
  // }, [score])
  // useEffect(() => {
  //   setHistory(history + curoperator);
  // }, [curoperator])
  const onNumberClick = (props) => {
    /* TODO: number click envent */
    if (change || score === "0") {
      setScore(props);
      setPrev(score);
    } else setScore(score + props);
    setChange(0);
  };

  const calculateResult = () => {
    const a = parseInt(prev, 10);
    const b = parseInt(score, 10);
    if (curoperator === "+") setScore(a + b);
    else if (curoperator === "-") setScore(a - b);
    else if (curoperator === "×") setScore(a * b);
    else if (curoperator === "÷") setScore(a / b);
  };

  const onOperatorClick = (props) => {
    console.log("실행");
    calculateResult();
    setCuroperator("");
    if (props === "+") setCuroperator("+");
    else if (props === "-") setCuroperator("-");
    else if (props === "×") setCuroperator("×");
    else if (props === "÷") setCuroperator("÷");
    // setHistory(history + curoperator);
    setPrev(score);
    setChange(1);
  };

  const onACClick = () => {
    setScore("0");
    setPrev("0");
    setCuroperator("");
    // setHistory("");
  };

  return (
    <div className="calc">
      <div className="calc__title">용량이 없어</div>
      <div className="calc__score">{score}</div>
      {/* <div className="calc__history">{history}</div> */}
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac" onClick={onACClick}>
            AC
          </div>
          <div className="calc__keyboard__number">
            {new Array(3).fill().map((_, line) => {
              return (
                <div key={line} className="calc__keyboard__number__line">
                  {new Array(3).fill().map((_, idx) => {
                    const num = line * 3 + idx + 1;
                    return (
                      <div
                        key={num}
                        className="button button--blue"
                        onClick={() => onNumberClick(num.toString())}
                      >
                        {num}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div
            className="button button--blue--big"
            onClick={() => onNumberClick("0")}
          >
            0
          </div>
        </div>
        <div className="calc__keyboard__operator">
          <div
            className="button button--deepblue"
            onClick={() => onOperatorClick("+")}
          >
            +
          </div>
          <div
            className="button button--deepblue"
            onClick={() => onOperatorClick("-")}
          >
            -
          </div>
          <div
            className="button button--deepblue"
            onClick={() => onOperatorClick("×")}
          >
            ×
          </div>
          <div
            className="button button--deepblue"
            onClick={() => onOperatorClick("÷")}
          >
            ÷
          </div>
          <div
            className="button button--pink"
            onClick={() => onOperatorClick("=")}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
