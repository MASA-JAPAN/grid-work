import React from "react";

export default function GridList() {
  return (
    <div>
      <div className="container">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <style jsx>{`
        .container {
          top: 0px;
          right: 0px;
          position: fixed;
          width: 100vw;
          height: 100vh;

          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        .item {
          margin: 10px;
          background: darkturquoise;
        }
      `}</style>
    </div>
  );
}
