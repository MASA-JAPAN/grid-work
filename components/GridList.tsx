import React from "react";

export default function GridList() {
  return (
    <div>
      <div className="container">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item big">4</div>
      </div>
      <style jsx>{`
        .container {
          top: 0px;
          right: 0px;
          position: fixed;
          width: 100vw;
          height: 100vh;

          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        }
        .item {
          margin: 10px;
          background: darkturquoise;
        }
        .big {
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
        }
      `}</style>
    </div>
  );
}
