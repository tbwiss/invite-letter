import React, { Fragment } from "react";
import { InviteForm } from "./InviteForm";
// import Confetti from "react-confetti";

export const Main = () => {
  return (
    <Fragment>
      {/* <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={30}
        wind={0.025}
        opacity={0.9}
      /> */}
      <div className="w-full h-full flex items-center justify-center p-12">
        <main className="w-5/6 h-full bg-paperColor shadow-2xl rounded-sm">
          <h3>Einladung</h3>

          <hr />
          <InviteForm />
        </main>
      </div>
    </Fragment>
  );
};
