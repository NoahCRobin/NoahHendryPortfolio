import { useState } from "react";

export function Wordle() {
  const Guess = ({ guess }: { guess: string }) => {
    const guessArr = guess.toUpperCase().split("");

    return (
      <div className="m-2 flex h-12 w-full">
        {guessArr.map((letter) => (
          <p className="border border-green-800 align-middle m-1 text-center flex-1">
            {letter}
          </p>
        ))}
      </div>
    );
  };

  const [mouseState, setMouseState] = useState<{
    clientX: number;
    clientY: number;
  }>({ clientX: 0, clientY: 0 });

  window.addEventListener("mousemove", (e) =>
    setMouseState({ clientX: e.clientX, clientY: e.clientY }),
  );

  console.log(window.innerWidth, window.innerHeight);

  return (
    <div className="flex items-center justify-center pt-16 pb-4 flex-col ">
      Dummy Wordle Clone
      <h2>Client X: {mouseState.clientX} </h2>
      <h2>Client Y: {mouseState.clientY} </h2>
      {/* <Guess guess="which" />
      <Guess guess="witch" />
      <Guess guess="hitch" />
      <Guess guess="mitch" /> */}
    </div>
  );
}
