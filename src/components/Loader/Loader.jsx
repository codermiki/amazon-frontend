import React from "react";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <SyncLoader />
    </div>
  );
};

export default Loader;
