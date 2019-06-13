import React from "react";

export const Block = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "32px",
        marginBottom: "20px"
      }}
    >
      {children}
    </div>
  );
};
