import React from "react";
import courtZones from "../pics/courtZones.png";
import Poole from "../pics/Poole.jpg";

const Zone2 = () => {
  return (
    <div className="zone2">
      <h2>Zone 2 - Intermediate Level</h2> <img src={courtZones} />
      <p>
        Extends from 1st hash up the lane to the 3rd hash/lane marker. Mid range
        on the wings (10-15 ft) and out to the “short corners”.
      </p>
      <div className="card2">
        <img src={Poole} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Reverse</h3>
          <p className="card2-info">
            <b>How:</b>started by showing the ball on one side of the basket and
            finishing with the layup on the other side of the rim. Could be shot
            facing the basket (see pic) or with the players back to the basket;
            facing the opponents basket.
            <p>
              <b>Why:</b> the first side to shoot becomes blocked by a defender
              or looks like it will be blocked so the player shows the ball and
              then use the opposite side to shoot because it is now free{" "}
            </p>
            <p>
              <b>When:</b> used when driving baseline from the wing or corner
              area of the floor
            </p>
          </p>
        </div>
      </div>
      <div className="card2">
        <img src={Poole} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Reverse</h3>
          <p className="card2-info">
            <b>How:</b>started by showing the ball on one side of the basket and
            finishing with the layup on the other side of the rim. Could be shot
            facing the basket (see pic) or with the players back to the basket;
            facing the opponents basket.
            <p>
              <b>Why:</b> the first side to shoot becomes blocked by a defender
              or looks like it will be blocked so the player shows the ball and
              then use the opposite side to shoot because it is now free{" "}
            </p>
            <p>
              <b>When:</b> used when driving baseline from the wing or corner
              area of the floor
            </p>
          </p>
        </div>
      </div>
      <div className="card2">
        <img src={Poole} className="card2-img" alt="" />
        <div className="card2-body">
          <h3 className="card2-title">Reverse</h3>
          <p className="card2-info">
            <b>How:</b>started by showing the ball on one side of the basket and
            finishing with the layup on the other side of the rim. Could be shot
            facing the basket (see pic) or with the players back to the basket;
            facing the opponents basket.
            <p>
              <b>Why:</b> the first side to shoot becomes blocked by a defender
              or looks like it will be blocked so the player shows the ball and
              then use the opposite side to shoot because it is now free{" "}
            </p>
            <p>
              <b>When:</b> used when driving baseline from the wing or corner
              area of the floor
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Zone2;
