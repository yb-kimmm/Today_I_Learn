import React from "react";

function Home() {
  return (
    <div>
      <div className="container mx-auto px-44 my-4 ">
        <img
          src={require("../static/main/okinawa.png")}
          alt=""
          className="mx-auto justify-center items-end pb-4 flex rounded-3xl "
        />
      </div>
    </div>
  );
}

export default Home;
