import React from "react";
import courtZones from "../pics/courtZones.png";

const Zone3 = () => {
  return (
    <div className="zone3">
      <h2>Zone 3 - Advanced Level</h2> <img src={courtZones} />
      <p>
        ZONE 3:The remaining court area from the elbow up. The wings outside of
        15ft and the remaining area outside of the 'short corner' sidelines.{" "}
      </p>
      <br />
    </div>
  );
};

export default Zone3;
