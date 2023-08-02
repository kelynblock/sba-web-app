import React from "react";
import Bron from "../pics/Bron.jpg";
import Booker from "../pics/Booker.jpg";
import courtZones from "../pics/courtZones.png";

const Zone1 = () => {
  return (
    <div className="zone1">
      <h2>Zone 1 - Beginner Level</h2> <img src={courtZones} />
      <div className="description">
        <p>
          Starts from baseline under the offensive basket up to the the 1st
          hash/lane mark and extends 1-2 steps outside the lane box. This zone
          is the most difficult to master because of its closeness to the
          basket. It also has the largest variety of shots/finishes.
        </p>

        <p>
          We'll start here because this is where a lot players struggle. Reason
          being, the player has to decide what shot to shoot, how to shoot it
          and when to shoot. And all of this in a matter of seconds. But there’s
          good news; we can break these shots into 2 categories, 1 foot and 2
          foot finishes. Typically, 1 foot finishes happen with minimal
          defensive contact to the way to the basket & the defense is behind the
          offense. 2 foot finishes happen when there’s defensive contact on the
          way to and at the basket & the defense is beside the offense. There
          are also 6 or 7 shots that can be shot off 1 or 2 feet. Once a player
          becomes efficient in his/her decision making in this Zone, a few
          things will happen:
          <ol className="list">
            <li>
              They'll become better decision makers in their overall game.
            </li>
            <li>They’ll play with more confidence.</li>
            <li>They'll become better all around players.</li>
            <li> Their basketball IQ should increase.</li>
          </ol>
        </p>

        <div className="cards">
          <div className="card2">
            <img src={Booker} className="card2-img" alt="" />
            <div className="card2-body">
              <h3 className="card2-title">Dunk</h3>
              <p className="card2-info">
                <b>How:</b>forcefully put the ball through the hoop off 1 or 2
                feet.
                <p />
                <b>Why:</b> Is a better option over a typical layup if able to
                perform. A more aggressive play. Can create momentum or fouls
                depending on the situation.
                <p>
                  <b>When:</b>Performed in the same situations as layups,
                  laybacks or reverse layups.
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card2">
            <img src={Bron} className="card2-img" alt="" />
            <div className="card2-body">
              <h3 className="card2-title">Inside Hand</h3>
              <p className="card2-info">
                <b>How:</b>Player shoots with the closest hand to the basket.
                Right handed shot when driving to the offensive players left and
                Left handed when driving to the offensive players right.
                <p />
                <b>Why:</b> Offensive player is driving and has gained a body
                position advantage and needs to shoot away from the defense so
                the shot is harder to block. Also, shot so that offensive player
                can use the rim as protection from a shot blocker.
                <p>
                  <b>When:</b> performed on a catch and sweep/rip situation off
                  a ball reversal or catch off a screen and going “against the
                  grain” on the drive and need to get the shot up quickly before
                  the guarding defender recovers or the help defender(s) rotate.
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card2">
            <img src={Bron} className="card2-img" alt="" />
            <div className="card2-body">
              <h3 className="card2-title">Jump/Baby Hook</h3>
              <p className="card2-info">
                <b>How:</b>The off. player plants either foot and pivots over
                that same shoulder. Then, jumps off 2 feet keeping his/her body
                is perpendicular to the basket. Player completes the last half
                of the “hook shot” motion allowing for a quicker shot in the
                paint. Player uses off arm to create space for the shot and as
                protection from a shot blocker.
                <p />
                <b>Why:</b> Quick way to score in the post are. Especially if
                wanting to score before being double teamed
                <p>
                  <b>When:</b> Mostly performed in a post up situation. Can also
                  be performed when there is a drive to the basket and the
                  driver passes to the player the rotating defender was
                  guarding.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zone1;
