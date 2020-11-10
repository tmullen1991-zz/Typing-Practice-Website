import React from "react";
import Sidecard from "../components/Sidecard";
import "./style.css";

export default function Example() {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="container py-3">
      <div className="row">
        {/*contains side card difficulty choices*/}
        <div className="col-3">
          <a href="/easy">
            <Sidecard
              onClick={reload}
              difficulty="Easy Mode"
              description="Top 1000 Typed Words"
            />
          </a>
          <a href="/hard">
            <Sidecard
              onClick={reload}
              difficulty="Hard Mode"
              description="Randoms Words"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
