import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Add TODO" />
        <button>ADD</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Inconplete</p>
        <ul>
          <div className="list-row">
            <li>ああああ</li>
            <button>DONE</button>
            <button>DELETE</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>DONE</button>
            <button>DELETE</button>
          </div>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">Conplete</p>
        <ul>
          <div className="list-row">
            <li>うううう</li>
            <button>RETURN</button>
          </div>
          <div className="list-row">
            <li>ええええ</li>
            <button>RETURN</button>
          </div>
        </ul>
      </div>
    </>
  );
};
