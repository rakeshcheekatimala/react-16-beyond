import React from "react";

const ChatPanel = (props) => {
  let { chatList } = props;
  return (
    <React.Fragment>
      {chatList.map((chat, i) => {
        if (i === 100) {
          // Simulate an error
          throw new Error("I crashed!");
        }
        return (
          <li key={"chatkey" + i} className="chat-bubble">
            {chat}
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default ChatPanel;
