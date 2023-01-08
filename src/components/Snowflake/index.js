import React from "react";
import Snowfall from "react-snowfall";

export default function Snow() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          zIndex: "1",
          background: "var(--color-xmasbg)"
        }}
      >
        <Snowfall
          snowflakeCount={400}
          color="#f6f8ff"
          radius={[0.2, 2.8]}
          speed={[1.0, 4.0]}
          wind={[-0.5, 2.0]}
          changeFrequency={400}
          rotationSpeed={[-1, 4.0]}
        />
      </div>
    </>
  );
}
