import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { darkMode, lightMode } from "../features/theme";

const Home = () => {
  // const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="navbar">
        <div className="theme-buttons">
          <button
            onClick={() => {
              dispatch(darkMode());
            }}
          >
            Dark
          </button>
          <button
            onClick={() => {
              dispatch(lightMode());
            }}
          >
            Light
          </button>
        </div>
      </div>

      <div className="home-content">
        <h3>
          Welcome to Finishing Program: Your Guide to Becoming a Better Finisher
        </h3>
        <p>
          This program is designed to help with one of the most important skills
          in basketball; the ability to finish! There are various ways to finish
          a play in basketball. A defensive rebound finishes a defensive
          possession. A steal, again finishes a defensive possession. However,
          this program will focus on the various ways to finish an offensive
          possession with a score. This program is been broken down into scoring
          Zones, 1, 2 and 3.
        </p>

        <div className="Rules">
          <p>
            Regardless of the ZONE, there are a few things we as coaches have to
            remember to communicate:
            <ol>
              <li>
                EYES make layups!! Explain the importance of the player keeping
                their eyes on the basket no matter what happens. Especially in
                ZONE 1.{" "}
              </li>
              <li>
                Explain the WHY. WHY they are shooting the particular shot that
                is being worked on.{" "}
              </li>
              <li>
                Explain WHEN. WHEN the player should shoot which shot; the most
                common situations or scenarios.
              </li>
              <li>Show HOW to perform each shot.</li>
              <li>
                Reps are KING. Get as many repetitions of each shot as possible.
                <ul>
                  <li>
                    Start with a foundation of the beginner level shots and
                    build from there.
                  </li>
                  <li>
                    Make sure the player can perform each shot with both Right
                    and Left hand, with eyes up and at game speed before
                    progressing
                  </li>
                  <li>Then add contact</li>
                  <li>
                    Lastly, add different situations to incorporate various
                    levels of decision making.
                  </li>
                </ul>
              </li>
            </ol>
            *Note* The WHY, WHEN and HOW can be explained in whatever ordered
            deemed necessary for your players to learn best.
          </p>
        </div>
        <footer>
          <p>Click below to go to a Finishing Zone</p>
          {/* <Link to="/products"> */}
          <Link to="/Zone1" className="button" style={{ color: "red" }}>
            Zone 1
          </Link>

          <Link to="/Zone2" className="button" style={{ color: "yellow" }}>
            Zone 2
          </Link>

          <Link to="/Zone3" className="button" style={{ color: "blue" }}>
            Zone 3
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Home;
