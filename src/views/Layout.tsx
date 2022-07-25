import React, { useRef, useState } from "react";
import Content from "./Content";

const Layout: React.FC = () => {
  const [message, setMessage] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (): void => {
    const tempArr: string[] = [...message, text];
    setMessage(tempArr);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <div className="main">
      <h2>Send Message</h2>
      <div className="box">
        <div className="left">
          <h3>Box A</h3>
          <input
            type="text"
            placeholder="Type something..."
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleSubmit}>Send message</button>
        </div>

        <Content message={message} />
      </div>
    </div>
  );
};

export default Layout;
