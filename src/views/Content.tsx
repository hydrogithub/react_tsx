import React from "react";

interface Props {
  message: string[];
}

const Content: React.FC<Props> = ({ message }) => {
  return (
    <div className="right">
      <h3>Box B</h3>
      <h4>Message received</h4>
      <div className="content">
        {message.map((item: string, index: number) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Content;
