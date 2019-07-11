import React from "react";

const Container = props => {
  const { width, height, bgColor, content, color } = props;
  return (
    <div
      style={{
        width: width || 200,
        height: height || 200,
        backgroundColor: bgColor || "green",
        color: color || "black"
      }}
    >
      {content}
    </div>
  );
};

export default Container;
