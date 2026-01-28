import { useState } from "react";

export function MouseTracker() {
  const [mouseState, setMouseState] = useState<{
    clientX: number;
    clientY: number;
  }>({ clientX: 0, clientY: 0 });

  const [quad, setQuad] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const [dimensions, setDimensions] = useState<{
    rows: number;
    columns: number;
  }>({ rows: 5, columns: 5 });

  const { rows, columns } = dimensions;
  const itemsArray = Array.from({
    length: dimensions.rows * dimensions.columns,
  });

  const xZone = window.innerWidth / rows;
  const yZone = window.innerHeight / columns;

  window.addEventListener("mousemove", (e) => {
    setMouseState({ clientX: e.clientX, clientY: e.clientY });
    setQuad({
      x: Math.floor(e.clientX / xZone),
      y: Math.floor(e.clientY / yZone),
    });
  });

  // y * width + x;

  const isInsideQuadrant = (idx: number) => {
    console.log(quad.y * rows + quad.x);

    const mouseIdx = quad.y * rows + quad.x;

    return idx === mouseIdx;
  };

  return (
    <div className="flex h-lvh justify-center flex-wrap">
      {itemsArray.map((_: any, index: number) => (
        <div
          key={index}
          id={String(index)}
          style={{
            width: `${100 / rows}%`,
            height: `${100 / columns}%`,
            backgroundColor: `${isInsideQuadrant(index) ? "green" : ""}`,
          }}
          className="border"
        />
      ))}
      <div className="border absolute self-center justify-self-center bg-red-900 flex flex-col ">
        <input
          value={dimensions.rows}
          onChange={(e) =>
            setDimensions((state) => ({
              ...state,
              rows: Number(e.target.value),
            }))
          }
        />
        <input
          value={dimensions.columns}
          onChange={(e) =>
            setDimensions((state) => ({
              ...state,
              columns: Number(e.target.value),
            }))
          }
        />
        {/* <h2>Client X: {mouseState.clientX} </h2>
        <h2>Window Width: {window.innerWidth}</h2>
        <h2>X Zone: {xZone}</h2>
        <h2>X Quad: {quad.x}</h2>

        <h2>Client Y: {mouseState.clientY} </h2>
        <h2>Window Width: {window.innerHeight}</h2>
        <h2>Y Zone: {yZone}</h2>
        <h2>Y Quad: {quad.y}</h2> */}
      </div>
    </div>
  );
}
