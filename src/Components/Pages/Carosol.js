import React from "react";

const Carousol = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={'https://www.w3schools.com/bootstrap5/ny.jpg'}
              alt="New York"
              className="d-block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousol;
